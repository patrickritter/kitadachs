import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import KitadachsApp from './components/KitadachsApp'

describe('KitadachsApp', () => {
  beforeEach(() => {
    // localStorage vor jedem Test zurücksetzen
    localStorage.clear()
  })

  it('rendert die Kitadachs App korrekt', () => {
    render(<KitadachsApp />)
    expect(screen.getByText('Kindergarten Kinder-Übersicht')).toBeInTheDocument()
  })

  it('hat ein Eingabefeld für den Namen', () => {
    render(<KitadachsApp />)
    expect(screen.getByPlaceholderText('Name eingeben')).toBeInTheDocument()
  })

  it('hat einen Button zum Hinzufügen', () => {
    render(<KitadachsApp />)
    const addButton = screen.getByText('Kind hinzufügen')
    expect(addButton).toBeInTheDocument()
    expect(addButton.disabled).toBe(true) // sollte deaktiviert sein, wenn keine Eingaben vorhanden
  })

  it('zeigt leere Gruppen-Nachrichten', () => {
    render(<KitadachsApp />)
    const emptyMessages = screen.getAllByText('Noch keine Kinder in dieser Gruppe')
    expect(emptyMessages).toHaveLength(4) // 4 Gruppen
  })
})
