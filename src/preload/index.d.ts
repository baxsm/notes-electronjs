// import { ElectronAPI } from '@electron-toolkit/preload'

import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    context: {
      locale: string
      minimize: () => void
      maximize: () => void
      close: () => void
      isWindowMaximized: () => Promise<boolean>
      onWindowMaximized: (callback: (isMaximized: boolean) => void) => void
      removeWindowMaximizedListener: (callback: (isMaximized: boolean) => void) => void
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
    }
  }
}

export {}
