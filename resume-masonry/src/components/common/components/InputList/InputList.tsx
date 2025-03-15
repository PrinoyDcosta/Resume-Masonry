import { Input } from "antd"
import { Button as ShadcnButton } from "@/components/ui/button"
import { PlusIcon, TrashIcon } from "@heroicons/react/16/solid"

interface InputListProps {
    value?: string[]
    onChange?: (list: string[]) => void
}

const InputList = ({
    value = [],
    onChange
} : InputListProps) => {

    const onChangeList = (input: string, index: number) => {
        value.splice(index, 1, input)
        onChange && onChange([...value])
    }

    const onAdd = () => {
        onChange && onChange([ ...value, ""])
    }

    const onRemove = (index: number) => {
        value.splice(index, 1)
        onChange && onChange([...value])
    }

    return(<div className="">
        <div className="flex flex-col">
            {
                value.map((item, index) => 
                    <div className="flex gap-2 py-1">
                        <Input 
                            value={item}
                            onChange={(input) => onChangeList(input.target.value, index)}
                        />
                        <ShadcnButton type='button' className="text-red-600 hover:text-red-600" variant="outline" size="icon" onClick={() => onRemove(index)}><TrashIcon/></ShadcnButton>
                    </div>)
            }
        </div>
        <div className="flex justify-center pt-2">
            <ShadcnButton type='button' variant="outline" onClick={onAdd}><PlusIcon/>Add line</ShadcnButton>
        </div>
    </div>)
}

export default InputList