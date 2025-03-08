import { Input, Tag } from "antd"
import { isArray, isEmpty } from "lodash-es"
import { useEffect, useState } from "react"

interface TagsProps {
    value?: string[]
    onChange: (id: number, tags: string[]) => void
    lineId: number
}
const Tags = ({
    value = [],
    lineId,
    onChange
} : TagsProps) => {

    const [showInput, setShowInput] = useState(false)
    const [input, setInput] = useState<string>("")

    const removeTag = (id: number, tag: string) => {
        let newValues = [ ...value]
        onChange(id, newValues.filter(item => item !== tag))
    }

    const onAddTag = (id: number, tag: string) => {
        if(isEmpty(tag) || value.includes(tag))
        {
            setInput("")
            setShowInput(false)
            return
        }
        let newValues = [ ...value, tag]
        onChange(id, newValues)
        setInput("")
        setShowInput(false)
    }

    return(<div className="flex flex-wrap w-full">{
        isArray(value) ? value.map(item => <>
            <Tag closeIcon onClose={(e) => {
                e.preventDefault()
                removeTag(lineId, item)}
            }>
            {item}
            </Tag>
        </>) : <></>
    }
    {
        showInput ?  
            <Input 
                placeholder="Add Skill" 
                onBlur={(e) => onAddTag(lineId, e.target.value)} 
                onPressEnter={(e) => onAddTag(lineId, (e.target as HTMLInputElement).value)}
                className="w-48!"
                value={input}
                onChange={(value) => setInput(value.target.value)}
            /> 
            : 
            <Tag 
                className="border-2 border-dashed" 
                onClick={() => setShowInput(true)}
            >
                Add skill
            </Tag>
    }
    </div>)
}

export default Tags