import { FC, useEffect, useState } from "react"
import { ISkills } from "@/components/common/constants/section-consts"
import { Button, Form, Input, Tag } from "antd"
import { pullAt } from "lodash-es"
import Tags from "@/components/common/components/Tags/Tags"
import { PlusIcon, TrashIcon } from "@heroicons/react/16/solid"
import { Button as ShadcnButton } from "@/components/ui/button"
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';

interface SkillsEditorFormProps {
    setViewMode: () => void
    updateData: (newData: Array<ISkills>, title?: string) => void
    data: Array<ISkills>
    title: string
}

interface FormSubmitValues {
    groups: ISkills[],
    title: string
}
const SkillsEditorForm: FC<SkillsEditorFormProps> = ({
    updateData,
    data,
    title,
    setViewMode
}) => {

    const [formData, setFormData] = useState<ISkills[]>([])
    const [form] = Form.useForm();

    const onCancel = () => {
        setViewMode()
    }

    useEffect(() => {
        setFormData([...data])
    },[data])

    const onSubmit = (values: FormSubmitValues) => {
        updateData(values.groups, values.title)
        setViewMode()
    };

    const addGroup = () => {
        setFormData(oldState => {
            return [ ...oldState, { title: '', items: [] }]
         })
    }

    const deleteGroup = (groupIndex: number) => {
        let currentFields = form.getFieldValue([`groups`])
        pullAt(currentFields, [groupIndex]);
        form.setFieldValue('groups', currentFields)
        setFormData([ ...currentFields])
    }

    const onDragEnd = (dropContext:  DropResult<string>) => {
        let currentFields : ISkills[] = form.getFieldValue([`groups`])
        let itemToMove = currentFields.find((item, index) => index === dropContext.source.index)!
        let otherItems = currentFields.filter((item, index) => index !== dropContext.source.index)
        otherItems.splice(dropContext.destination!.index, 0, itemToMove)
        setFormData([ ...otherItems])
        form.setFieldValue('groups', otherItems)
    }

    return (
    <div className="bg-blue-50 p-5 pb-0 rounded-xl ">
            <Form
            className="w-full"
                form={form}
                name="skills-form"
                labelCol={{ span: 8 }}
                autoComplete="off"
                onFinish={onSubmit}
                rootClassName="flex flex-wrap"
            >
                <div className="w-full">
                        <h2>Skill header</h2>
                        <div className="pr-38">
                            <Form.Item 
                                label="Title"
                                name="title"
                                rules={[{ required: true, message: 'Please enter the section title!' }]}
                                initialValue={title}
                                className=""
                            >
                                <Input placeholder="Enter section title"/>
                            </Form.Item>
                        </div>
                </div>

                <div className="w-full">
                    <h2>Skill Groups</h2>
                    <div className="w-full flex flex-wrap flex-col">
                            <>
                                <DragDropContext onDragEnd={onDragEnd} >
                                    {/* onDragEnd(params, move)} > */}
                                    <Droppable droppableId="droppable-1" type="PERSON">
                                        {(dropppableProvided, dropppableSnapshot) => (
                                            
                                            <div ref={dropppableProvided.innerRef} className="flex flex-wrap" {...dropppableProvided.droppableProps}>
                                                {
                                                    formData.map((field, index) => {
                                                        return (
                                                            <>
                                                                <Draggable draggableId={`draggable-${index}`} index={index}>
                                                                    {(provided, snapshot) => (
                                                                        <div key={index} className='flex w-full border-2 p-5 m-2' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                            <div className="w-5/6">
                                                                                <Form.Item 
                                                                                    label="Skill Group Title"
                                                                                    // name={[field.name, 'title']}
                                                                                    name={['groups', index, 'title']}
                                                                                    //name={`${}`}
                                                                                    rules={[{ required: true, message: 'Please enter the skill group title!' }]}
                                                                                    //initialValue={fieldData ? fieldData.title : ''}
                                                                                    initialValue={field.title}
                                                                                >
                                                                                    <Input placeholder="Enter group title"/>
                                                                                </Form.Item>
                                                                                <Form.Item 
                                                                                    label="Skills"
                                                                                    name={['groups', index, 'items']}
                                                                                    rules={[{ required: true, message: 'Please enter atleast one skill!' }]}
                                                                                    // initialValue={fieldData ? fieldData.items : []}
                                                                                    initialValue={field.items}
                                                                                >
                                                                                    <Tags />
                                                                                </Form.Item>
                                                                            </div>
                                                                            <div className="w-1/6 px-3">
                                                                                <ShadcnButton 
                                                                                    className="text-red-600 hover:text-red-600" 
                                                                                    variant="outline" 
                                                                                    size="icon" 
                                                                                    onClick={() => {
                                                                                        deleteGroup(index)
                                                                                        //remove(field.name)
                                                                                    }}
                                                                                >
                                                                                    <TrashIcon/>
                                                                                </ShadcnButton>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </Draggable>
                                                            </>
                                                            )
                                                    })
                                                }
                                                {dropppableProvided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                                <div className="px-100">
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => {
                                             //add()
                                             addGroup()
                                            }} block icon={<PlusIcon />}>
                                            Add group
                                        </Button>
                                    </Form.Item>
                                </div>
                            </>
                        
                        {/* }
                        </Form.List> */}
                    </div>
                </div>
                <div className="w-full mb-5">
                    {/* <Form.Item className="flex flex-wrap flex-row w-full" label={null}> */}
                        <div className="flex flex-wrap justify-end gap-2">
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button type="default" onClick={onCancel}>
                                Cancel
                            </Button>
                        </div>
                    {/* </Form.Item> */}
                </div>
            </Form>
    </div>
  )
}

export default SkillsEditorForm