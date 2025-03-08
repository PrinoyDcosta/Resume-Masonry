import { FC, useEffect, useState } from "react"
import { ISkills } from "@/components/common/constants/section-consts"
import { Button, Form, Input, Tag } from "antd"
import { isEmpty } from "lodash-es"
import Tags from "@/components/common/components/Tags/Tags"
import { PlusIcon, TrashIcon } from "@heroicons/react/16/solid"
import { Button as ShadcnButton } from "@/components/ui/button"

interface SkillsEditorFormProps {
    setViewMode: () => void
    updateData: (newData: Array<ISkills>, title?: string) => void
    data: Array<ISkills>
    title: string
}

const SkillsEditorForm: FC<SkillsEditorFormProps> = ({
    updateData,
    data,
    title,
    setViewMode
}) => {

    // const [formData, setFormData] = useState<ISkills[]>([])
    const [form] = Form.useForm();
    // const formSchema = z.object({
    //     title: z.string().nonempty({
    //       message: "Title is required",
    //     }),
    // })
    // const form = useForm<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     // defaultValues: {
    //     //     title: title,
    //     // },
    // })

    // function onSubmit(values: z.infer<typeof formSchema>) {
    //     // Do something with the form values.
    //     // ✅ This will be type-safe and validated.
    //     debugger
    //     const {title} = values
    //     console.log(values)
    //     updateData([], title)
    //     setViewMode()
    // }

    const onCancel = () => {
        setViewMode()
    }

    useEffect(() => {
        form.setFieldValue(`groups`, [...data])
    },[data])


    const onChangeTags = (id: number, tags: string[]) => {
        form.setFieldValue(['groups', id.toString(), 'items'], tags)
    }

    const onSubmit = (values: any) => {
        console.log('Success:', values);
    };

    return (
    <div className="bg-blue-50 p-5 pb-0 rounded-xl ">
          {/* <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormItem
                    formControl={form.control}
                    name="section-title"
                    label={"Section Title"}
                    renderComponent={(field) => <Input defaultValue={title} placeholder="Enter the title" {...field} />}
                    placeholder="Enter the section title"
                    className="bg-blue-100"
                />
                <div>
                    <h6 className="font-medium text-sm">Section Content</h6>
                    <div className="p-2">
                        {
                            formData.map(item => {
                                return(<div key={item.id} className="mt-3 odd:bg-blue-100 even:bg-blue-200">
                                    <FormItem
                                        formControl={form.control}
                                        name={`title-${item.id}`}
                                        label={"Title"}
                                        renderComponent={(field) => <Input className="bg-white" defaultValue={item.title} placeholder="Enter the title" {...field} />}
                                    />
                                    <FormItem
                                        formControl={form.control}
                                        name={`values-${item.id}`}
                                        label={"Values"}
                                        renderComponent={(field) => <>
                                            {item.items.map(item2 =>
                                                <Tag closeIcon onClose={(e) => {
                                                    e.preventDefault()
                                                    removeTag(item.id, item2)}
                                                }>
                                                {item2}
                                                </Tag>)}
                                            <Input 
                                                className="mt-2 bg-white" 
                                                placeholder="Add a value" 
                                                // {...field}
                                                onBlur={(e) => {
                                                    debugger
                                                    e.preventDefault()
                                                    onAddTag(item.id, e.target.value)
                                                }} 
                                                {...field}
                                                // onKeyDown={(e) => {
                                                //     e.preventDefault()
                                                //     if(e.key === 'Enter')
                                                //     {
                                                //         debugger
                                                //         onAddTag(item.id, e.target.value)
                                                //     }}} 
                                                />
                                        </>}
                                        className="mt-3"
                                    />
                                </div>)
                            })
                        }

                    </div>
                </div>
                <Button variant="outline" type="submit">Submit</Button>
                <Button onClick={onCancel} variant="outline" type="submit">Cancel</Button>
            </form>
            </Form> */}
            <Form
            className="w-full"
                form={form}
                name="skills-form"
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                onFinish={onSubmit}
                rootClassName="flex flex-wrap"
            >
                <div className="w-full justify-center">
                        <h2>Skill header</h2>
                        <div className="px-20">
                            <Form.Item 
                                label="Title"
                                name="section-title"
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
                    {/* {
                        formData.map(item => <div className="bg-blue-100">
                            <Form.Item 
                                label="Skill Group Title"
                                name={`group-title-${item.id}`}
                                rules={[{ required: true, message: 'Please enter the skill group title!' }]}
                                initialValue={item.title}
                            >
                                <Input key={item.id} placeholder="Enter group title"/>
                            </Form.Item>
                            <Form.Item 
                                label="Skills"
                                name={`group-values-${item.id}`}
                                rules={[{ required: true, message: 'Please enter atleast one skill!' }]}
                                initialValue={item.items}
                            >
                                <Tags 
                                    key={item.id}
                                    value={item.items}
                                    onChange={onChangeTags}
                                    lineId={item.id}
                                />
                            </Form.Item>
                        </div>)
                    } */}
                    <div className="w-full flex flex-wrap flex-col px-20">
                        <Form.List name="groups">
                        {(fields, { add, remove}) =>
                            <>
                                <div className="flex flex-wrap">
                                    {
                                        fields.map((field) => {
                                            const data: ISkills[] = form.getFieldValue(['groups']);
                                            const fieldData = data[field.key]
                                            return (
                                                    <>
                                                        <div className="w-5/6">
                                                            <Form.Item 
                                                                label="Skill Group Title"
                                                                name={[field.name, 'title']}
                                                                rules={[{ required: true, message: 'Please enter the skill group title!' }]}
                                                                initialValue={fieldData ? fieldData.title : ''}
                                                            >
                                                                <Input placeholder="Enter group title"/>
                                                            </Form.Item>
                                                            <Form.Item 
                                                                label="Skills"
                                                                name={[field.name, 'items']}
                                                                rules={[{ required: true, message: 'Please enter atleast one skill!' }]}
                                                                initialValue={fieldData ? fieldData.items : []}
                                                                valuePropName="value"
                                                            >
                                                                <Tags 
                                                                    onChange={onChangeTags}
                                                                    lineId={field.key}
                                                                />
                                                            </Form.Item>
                                                        </div>
                                                        <div className="w-1/6 px-3">
                                                            <ShadcnButton 
                                                                className="text-red-600 hover:text-red-600" 
                                                                variant="outline" 
                                                                size="icon" 
                                                                onClick={() => remove(field.name)}
                                                            >
                                                                <TrashIcon/>
                                                            </ShadcnButton>
                                                        </div>
                                                    </>
                                                )
                                        })
                                    }
                                </div>
                                <div className="px-100">
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusIcon />}>
                                            Add group
                                        </Button>
                                    </Form.Item>
                                </div>
                            </>
                        
                        }
                        </Form.List>
                    </div>
                </div>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button type="default" onClick={onCancel}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
    </div>
  )
}

export default SkillsEditorForm