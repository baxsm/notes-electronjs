import { ComponentProps, FC } from 'react'
import ActionButton from './action-button'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useSetAtom } from 'jotai'
import { deleteNoteAtom } from '@renderer/store'

interface DeleteNoteButtonProps extends ComponentProps<'button'> {}

const DeleteNoteButton: FC<DeleteNoteButtonProps> = ({ ...props }) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeleteNote = async (): Promise<void> => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDeleteNote} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}

export default DeleteNoteButton
