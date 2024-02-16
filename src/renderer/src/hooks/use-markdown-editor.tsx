import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/store'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'
import { throttle } from 'lodash'
import { autoSaveTime } from '@shared/constants'

type MarkdownEditorReturnType = () => {
  editorRef: React.RefObject<MDXEditorMethods>
  selectedNote: {
    content: string
    title: string
    updatedAt: number
  } | null
  handleAutoSaving: (content: NoteContent) => Promise<void> | undefined
  handleBlur: () => Promise<void>
}

export const useMarkdownEditor: MarkdownEditorReturnType = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent): Promise<void> => {
      if (!selectedNote) {
        return
      }

      await saveNote(content)
    },
    autoSaveTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async (): Promise<void> => {
    if (!selectedNote) {
      return
    }

    handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()

    if (content !== null && content) {
      await saveNote(content)
    }
  }

  return {
    editorRef,
    selectedNote,
    handleAutoSaving,
    handleBlur
  }
}
