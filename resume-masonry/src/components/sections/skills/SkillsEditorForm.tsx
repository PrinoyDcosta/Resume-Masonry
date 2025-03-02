import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FC } from "react"
import { Form } from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { ISkills } from "@/components/common/section-consts"

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

    const formSchema = z.object({
        title: z.string().nonempty({
          message: "Title is required",
        }),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: title,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        debugger
        const {title} = values
        console.log(values)
        updateData([], title)
        setViewMode()
    }

    return (
    <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Section Title</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter the section title" {...field} />
                        </FormControl>
                        {/* <FormDescription>
                            This is your public display name.
                        </FormDescription> */}
                        <FormMessage />
                        </FormItem>
                    )}
                />
                {/* {
                    data.map(item => (
                        <FormField
                            control={form.control}
                            name={`field${item.id}`}
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>{`field${item.id}`}</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the title" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))
                } */}
                <Button type="submit">Submit</Button>
            </form>
            </Form>
    </>
  )
}

export default SkillsEditorForm