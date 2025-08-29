import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    // localStorage vor jedem Test zurücksetzen
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('rendert den Titel korrekt', () => {
    render(<App />)
    expect(screen.getByText('Kindergarten Kinder-Übersicht')).toBeInTheDocument()
  })



  it('hat ein Eingabefeld für den Namen', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Name eingeben')).toBeInTheDocument()
  })

  it('hat einen Button zum Hinzufügen', () => {
    render(<App />)
    const addButton = screen.getByText('Kind hinzufügen')
    expect(addButton).toBeInTheDocument()
    expect(addButton.disabled).toBe(true) // sollte deaktiviert sein, wenn keine Eingaben vorhanden
  })

  it('zeigt leere Gruppen-Nachrichten', () => {
    render(<App />)
    const emptyMessages = screen.getAllByText('Noch keine Kinder in dieser Gruppe')
    expect(emptyMessages).toHaveLength(4) // 4 Gruppen
  })
})
