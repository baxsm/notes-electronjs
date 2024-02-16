import { notesAtom, selectedNoteIndexAtom } from '@renderer/store'
import { NoteInfo } from '@shared/models'
import { useAtom, useAtomValue } from 'jotai'

interface NotesListProps {
  onSelect?: () => void
}

type NotesListReturnType = {
  notes: NoteInfo[] | undefined
  selectedNodeIndex: number | null
  handleNoteSelect: (index: number) => () => Promise<void>
}

export const useNotesList = ({ onSelect }: NotesListProps): NotesListReturnType => {
  const notes = useAtomValue(notesAtom)

  const [selectedNodeIndex, setSelectedNodeIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async (): Promise<void> => {
    setSelectedNodeIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNodeIndex,
    handleNoteSelect
  }
}
