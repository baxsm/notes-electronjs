import { ComponentProps, FC } from 'react'
import { DeleteNoteButton, NewNoteButton } from './buttons'

interface ActionButtonRowProps extends ComponentProps<'div'> {}

const ActionButtonRow: FC<ActionButtonRowProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}

export default ActionButtonRow
