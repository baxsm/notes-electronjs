import { ComponentProps, FC } from 'react'
import NotePreview from './note-preview'
import { cn } from '@renderer/utils'
import { useNotesList } from '@/hooks'

interface NotePreviewListProps extends ComponentProps<'ul'> {
  onSelect?: () => void
}

const NotePreviewList: FC<NotePreviewListProps> = ({ className, onSelect, ...props }) => {
  const { notes, selectedNodeIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (!notes || notes.length === 0) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No notes yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => {
        return (
          <NotePreview
            key={note.title + note.updatedAt + index}
            isActive={selectedNodeIndex === index}
            onClick={handleNoteSelect(index)}
            {...note}
          />
        )
      })}
    </ul>
  )
}

export default NotePreviewList
