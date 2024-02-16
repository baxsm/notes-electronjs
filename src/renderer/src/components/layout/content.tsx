import { cn } from '@renderer/utils'
import { ComponentProps, forwardRef } from 'react'

interface ContentProps extends ComponentProps<'div'> {}

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex-1 overflow-auto bg-[#111]', className)} {...props}>
        {children}
      </div>
    )
  }
)

Content.displayName = 'Content'

export default Content
