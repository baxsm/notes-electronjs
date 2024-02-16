import { ComponentProps, FC } from 'react'
import ActionButton from './action-button'
import { LuFileSignature } from 'react-icons/lu'
import { useSetAtom } from 'jotai'
import { createEmptyNoteAtom } from '@renderer/store'

interface NewNoteButtonProps extends ComponentProps<'button'> {}

const NewNoteButton: FC<NewNoteButtonProps> = ({ ...props }) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreateNote = async (): Promise<void> => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreateNote} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}

export default NewNoteButton
