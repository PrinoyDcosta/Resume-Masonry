import { Editor } from "@/components/blocks/editor-00/editor"
import { SerializedEditorState } from "lexical"
import { useState } from "react"

const initialValue = {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Hello World 🚀',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: '',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  } as unknown as SerializedEditorState

interface RichTextEditorProps {
    value: string,
    onChange: () => void
}

const RichTextEditor = ({

} :RichTextEditorProps) => {
    const [editorState, setEditorState] = useState<SerializedEditorState>(initialValue)
 
    return (
        <div>
        <Editor
            editorSerializedState={editorState}
            onSerializedChange={(value) => setEditorState(value)}
        />
        </div>
    )
}
export default RichTextEditor