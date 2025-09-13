import { useState, useEffect } from 'react'
import './App.css'
import { GROUP_OPTIONS } from './config/tableConfig'

function App() {
  const [rows, setRows] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [newName, setNewName] = useState('')
  const [newBirthday, setNewBirthday] = useState('')
  const [selectedGroup, setSelectedGroup] = useState(GROUP_OPTIONS[0].value)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentFileName, setCurrentFileName] = useState('kindergarten-kinder.json')
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [lastSaved, setLastSaved] = useState(null)
  const [saveStatus, setSaveStatus] = useState('idle') // 'idle', 'saving', 'saved', 'error'
  const [groupNames, setGroupNames] = useState({
    'A': 'Wiesenkinder',
    'B': 'Waldwichtel', 
    'C': 'Regenbogenkinder',
    'D': 'Nestgruppe'
  })
  const [editingGroup, setEditingGroup] = useState(null)
  const [newGroupName, setNewGroupName] = useState('')

  // Lade gespeicherte Daten beim Start (aus localStorage als Fallback)
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('kindergartenData')
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        if (Array.isArray(parsedData) && parsedData.length > 0) {
          setRows(parsedData)
          setLastSaved(new Date())
        } else if (parsedData && Array.isArray(parsedData.rows)) {
          setRows(parsedData.rows)
          if (parsedData.groupNames && typeof parsedData.groupNames === 'object') {
            setGroupNames(parsedData.groupNames)
          }
          setLastSaved(new Date())
        }
      }
      
      // Lade gespeicherte Gruppennamen
      const savedGroupNames = localStorage.getItem('groupNames')
      if (savedGroupNames) {
        const parsedGroupNames = JSON.parse(savedGroupNames)
        setGroupNames(parsedGroupNames)
      }
    } catch (error) {
      console.error('Fehler beim Laden der gespeicherten Daten:', error)
    }
  }, [])

  // Markiere Änderungen als ungespeichert
  useEffect(() => {
    if (rows.length > 0) {
      setHasUnsavedChanges(true)
    }
  }, [rows])

  // Menü schließen wenn außerhalb geklickt wird
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.menu-container')) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  const addRow = () => {
    if (newName.trim() && newBirthday) {
      const newChild = {
        id: Date.now() + Math.random(), // Eindeutige ID
        name: newName, 
        birthday: newBirthday,
        group: selectedGroup 
      }
      setRows([...rows, newChild])
      setNewName('')
      setNewBirthday('')
      setHasUnsavedChanges(true)
    }
  }

  const deleteRow = (rowToDelete) => {
    setRows(rows.filter(row => row.id !== rowToDelete.id))
    if (editingId === rowToDelete.id) setEditingId(null)
    setHasUnsavedChanges(true)
  }

  // Funktionen für Gruppen-Umbenennung
  const startEditingGroup = (groupValue) => {
    setEditingGroup(groupValue)
    setNewGroupName(groupNames[groupValue])
  }

  const saveGroupName = () => {
    if (newGroupName.trim() && editingGroup) {
      const updatedGroupNames = {
        ...groupNames,
        [editingGroup]: newGroupName.trim()
      }
      setGroupNames(updatedGroupNames)
      localStorage.setItem('groupNames', JSON.stringify(updatedGroupNames))
      setEditingGroup(null)
      setNewGroupName('')
      setHasUnsavedChanges(true)
    }
  }

  const cancelEditingGroup = () => {
    setEditingGroup(null)
    setNewGroupName('')
  }

  // Funktion zum Speichern der Daten mit "Speichern unter" (inkl. Gruppenname-Struktur)
  const saveAs = async () => {
    try {
      const exportPayload = {
        rows,
        groupNames,
        version: 1,
      }
      // Methode 1: File System Access API (moderne Browser)
      if ('showSaveFilePicker' in window) {
        const handle = await window.showSaveFilePicker({
          suggestedName: currentFileName,
          types: [{
            description: 'JSON Datei',
            accept: {
              'application/json': ['.json']
            }
          }]
        })
        
        const writable = await handle.createWritable()
        const dataStr = JSON.stringify(exportPayload, null, 2)
        await writable.write(dataStr)
        await writable.close()
        
        // Aktualisiere den Dateinamen
        setCurrentFileName(handle.name)
        setMenuOpen(false)
        
        // Zeige Erfolgsmeldung und markiere als gespeichert
        setSaveStatus('saved')
        setHasUnsavedChanges(false)
        setLastSaved(new Date())
        setTimeout(() => setSaveStatus('idle'), 2000)
        return
      }
      
      // Methode 2: Download mit Dateinamen-Auswahl (bessere Kompatibilität)
      const dataStr = JSON.stringify(exportPayload, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      
      // Erstelle einen versteckten Download-Link
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = currentFileName
      
      // Füge den Link zum DOM hinzu, klicke ihn und entferne ihn wieder
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Cleanup
      setTimeout(() => URL.revokeObjectURL(url), 100)
      
      setMenuOpen(false)
      
      // Zeige Erfolgsmeldung und markiere als gespeichert
      setSaveStatus('saved')
      setHasUnsavedChanges(false)
      setLastSaved(new Date())
      setTimeout(() => setSaveStatus('idle'), 2000)
      
    } catch (error) {
      if (error.name === 'AbortError') {
        // Benutzer hat abgebrochen
        return
      }
      console.error('Fehler beim Speichern:', error)
      
      // Fallback: Einfacher Download
      try {
        const dataStr = JSON.stringify({ rows, groupNames, version: 1 }, null, 2)
        const dataBlob = new Blob([dataStr], { type: 'application/json' })
        const url = URL.createObjectURL(dataBlob)
        const link = document.createElement('a')
        link.href = url
        link.download = currentFileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
        setMenuOpen(false)
        
        // Markiere als gespeichert
        setHasUnsavedChanges(false)
        setLastSaved(new Date())
      } catch (fallbackError) {
        console.error('Auch Fallback fehlgeschlagen:', fallbackError)
        alert('Fehler beim Speichern der Datei. Bitte versuchen Sie es erneut.')
      }
    }
  }



  // Funktion zum Importieren von Daten aus einer JSON-Datei (unterstützt alte und neue Struktur)
  const importFromFile = (event) => {
    const file = event.target.files[0]
    if (file) {
      setCurrentFileName(file.name)
      
      const reader = new FileReader()
      reader.onload = async (e) => {
        try {
          const loadedData = JSON.parse(e.target.result)
          if (Array.isArray(loadedData)) {
            // Rückwärtskompatibilität: alte Dateien enthielten nur ein Array von Kindern
            setRows(loadedData)
            setLastSaved(new Date())
            setHasUnsavedChanges(false)
            alert('Daten erfolgreich importiert!')
          } else if (loadedData && Array.isArray(loadedData.rows)) {
            setRows(loadedData.rows)
            if (loadedData.groupNames && typeof loadedData.groupNames === 'object') {
              setGroupNames(loadedData.groupNames)
              localStorage.setItem('groupNames', JSON.stringify(loadedData.groupNames))
            }
            setLastSaved(new Date())
            setHasUnsavedChanges(false)
            alert('Daten erfolgreich importiert!')
          } else {
            alert('Ungültiges Dateiformat!')
          }
        } catch (error) {
          alert('Fehler beim Laden der Datei: ' + error.message)
        }
      }
      reader.readAsText(file)
    }
    setMenuOpen(false)
  }

  // Funktion zum Löschen aller Daten
  const clearAllData = async () => {
    if (confirm('Sind Sie sicher, dass Sie alle Daten löschen möchten?')) {
      try {
        setRows([])
        localStorage.removeItem('kindergartenData')
        setCurrentFileName('kindergarten-kinder.json')
        setLastSaved(null)
        setSaveStatus('idle')
        setHasUnsavedChanges(false)
      } catch (error) {
        console.error('Fehler beim Löschen:', error)
        // Fallback
        setRows([])
        localStorage.removeItem('kindergartenData')
        setCurrentFileName('kindergarten-kinder.json')
        setLastSaved(null)
      }
    }
  }

  return (
    <div>
      <header className="app-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Kindergarten Kinder-Übersicht</h1>
            <p>Verwalten Sie die Kinder in den verschiedenen Gruppen</p>
          </div>
          <div className="menu-container">
            <button 
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              title="Menü öffnen"
            >
              ☰
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                <button 
                  onClick={saveAs} 
                  className="menu-item"
                  disabled={rows.length === 0}
                >
                  💾 Datei speichern
                </button>
                <label className="menu-item">
                  📥 Daten importieren
                  <input
                    type="file"
                    accept=".json"
                    onChange={importFromFile}
                    style={{ display: 'none' }}
                  />
                </label>
                {rows.length > 0 && (
                  <button 
                    onClick={clearAllData}
                    className="menu-item"
                    style={{ color: '#ff6b6b' }}
                  >
                    🗑️ Alle Daten löschen
                  </button>
                )}
                {rows.length > 0 && (
                  <div className="menu-info">
                    📊 {rows.length} Kinder
                    {hasUnsavedChanges && (
                      <div style={{ fontSize: '11px', marginTop: '4px', color: '#ffa500' }}>
                        ⚠️ Ungespeicherte Änderungen
                      </div>
                    )}
                    {lastSaved && (
                      <div style={{ fontSize: '11px', marginTop: '4px', opacity: 0.8 }}>
                        💾 Zuletzt gespeichert: {lastSaved.toLocaleTimeString('de-DE')}
                        {saveStatus === 'saving' && (
                          <span style={{ color: '#ffa500', marginLeft: '4px' }}>⏳ Speichern...</span>
                        )}
                        {saveStatus === 'saved' && (
                          <span style={{ color: '#4CAF50', marginLeft: '4px' }}>✅ Gespeichert</span>
                        )}
                        {saveStatus === 'error' && (
                          <span style={{ color: '#ff6b6b', marginLeft: '4px' }}>❌ Fehler</span>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="add-entry-section">
        <h2>Neues Kind hinzufügen</h2>
        <div className="add-entry-container">
          <div className="input-group">
            <label>Name des Kindes</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Name eingeben"
              className="name-input"
            />
          </div>
          <div className="input-group">
            <label>Geburtstag</label>
            <input
              type="date"
              value={newBirthday}
              onChange={(e) => setNewBirthday(e.target.value)}
              className="birthday-input"
            />
          </div>
          <div className="input-group">
            <label>Gruppe auswählen</label>
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="group-select"
            >
              {GROUP_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {groupNames[option.value]}
                </option>
              ))}
            </select>
          </div>
          <button 
            onClick={addRow} 
            className="add-button"
            disabled={!newName.trim() || !newBirthday}
          >
            Kind hinzufügen
          </button>
        </div>
      </div>

      <div className="tables-grid">
        {GROUP_OPTIONS.map(option => (
          <div key={option.value} className="group-container">
            <div className="group-title-container">
              {editingGroup === option.value ? (
                <div className="group-edit-container">
                  <input
                    type="text"
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                    className="group-name-input"
                    placeholder="Gruppenname eingeben"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') saveGroupName()
                      if (e.key === 'Escape') cancelEditingGroup()
                    }}
                  />
                  <div className="group-edit-buttons">
                    <button 
                      onClick={saveGroupName}
                      className="group-save-btn"
                      title="Speichern"
                    >
                      ✓
                    </button>
                    <button 
                      onClick={cancelEditingGroup}
                      className="group-cancel-btn"
                      title="Abbrechen"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ) : (
                <div className="group-title-display">
                  <h2 className="group-title">{groupNames[option.value]}</h2>
                  <button 
                    onClick={() => startEditingGroup(option.value)}
                    className="group-edit-btn"
                    title="Gruppenname bearbeiten"
                  >
                    ✎
                  </button>
                </div>
              )}
            </div>
            <div className="names-grid">
              {rows
                .filter(row => row.group === option.value)
                .map((row) => (
                  <div key={row.id} className="name-card">
                    <div className="name-card-header">
                      <button 
                        className="edit-button"
                        onClick={() => setEditingId(editingId === row.id ? null : row.id)}
                        title="Gruppe bearbeiten"
                      >
                        {editingId === row.id ? '×' : '✎'}
                      </button>
                      <button 
                        className="delete-button"
                        onClick={() => deleteRow(row)}
                        title="Eintrag löschen"
                      >
                        🗑️
                      </button>
                    </div>
                    <div className="name-card-content">
                      <span className="name-text">{row.name}</span>
                      <span className="birthday-text">
                        {new Date(row.birthday).toLocaleDateString('de-DE')}
                      </span>
                    </div>
                    {editingId === row.id && (
                      <select
                        value={row.group}
                        onChange={(e) => {
                          const newRows = rows.map(r => 
                            r.id === row.id 
                              ? { ...r, group: e.target.value }
                              : r
                          )
                          setRows(newRows)
                          setEditingId(null)
                          setHasUnsavedChanges(true)
                        }}
                        className="card-group-select"
                      >
                        {GROUP_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {groupNames[option.value]}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                ))}
              {rows.filter(row => row.group === option.value).length === 0 && (
                <div className="empty-group-message">
                  <p>Noch keine Kinder in dieser Gruppe</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
