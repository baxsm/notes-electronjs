import { cn } from '@renderer/utils'
import { ComponentProps, FC } from 'react'

interface SidebarProps extends ComponentProps<'aside'> {}

const Sidebar: FC<SidebarProps> = ({ className, children, ...props }) => {
  return (
    <aside
      className={cn('w-[250px] h-[100vh + 10px] overflow-auto bg-[#222]', className)}
      {...props}
    >
      {children}
    </aside>
  )
}

export default Sidebar
