import { cn } from '@renderer/utils'
import { ComponentProps, FC } from 'react'

interface RootLayoutProps extends ComponentProps<'main'> {}

const RootLayout: FC<RootLayoutProps> = ({ className, children, ...props }) => {
  return (
    <main className={cn('flex mt-8 flex-row h-screen bg-[#111]', className)} {...props}>
      {children}
    </main>
  )
}

export default RootLayout
