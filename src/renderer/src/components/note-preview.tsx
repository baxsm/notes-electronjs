import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps, FC } from 'react'

interface NotePreviewProps extends Omit<ComponentProps<'div'>, 'title'>, NoteInfo {
  isActive?: boolean
}

const NotePreview: FC<NotePreviewProps> = ({
  title,
  // content,
  updatedAt,
  isActive = false,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-300',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        {formatDateFromMs(updatedAt)}
      </span>
    </div>
  )
}

export default NotePreview
