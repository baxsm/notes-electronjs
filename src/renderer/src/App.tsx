import {
  Content,
  RootLayout,
  Sidebar,
  DraggableTopBar,
  ActionButtonRow,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle
} from '@/components'
import { useRef } from 'react'

const App = (): JSX.Element => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = (): void => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-2" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
