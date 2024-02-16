import { selectedNoteAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue } from 'jotai'
import { ComponentProps, FC } from 'react'

interface FloatingNoteTitleProps extends ComponentProps<'div'> {}

const FloatingNoteTitle: FC<FloatingNoteTitleProps> = ({ className, ...props }) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) {
    return null
  }

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  )
}

export default FloatingNoteTitle
