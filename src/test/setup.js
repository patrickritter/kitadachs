import '@testing-library/jest-dom'

// Mock für die File System Access API
Object.defineProperty(window, 'showSaveFilePicker', {
  writable: true,
  value: vi.fn(),
})

// Mock für localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
global.localStorage = localStorageMock
