import { cn } from '@renderer/utils'
import { ComponentProps, FC } from 'react'

interface ActionButtonProps extends ComponentProps<'button'> {}

const ActionButton: FC<ActionButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-300',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ActionButton
