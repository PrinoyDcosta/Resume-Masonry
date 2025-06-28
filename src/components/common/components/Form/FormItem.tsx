import { FormControl, FormField, FormItem as ShadFormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { isEmpty } from "lodash-es"

interface FormItemProps {
    renderComponent: (field: any) => React.ReactNode
    placeholder?: string
    label: string
    description?: string
    name: string
    formControl: any
    className?: string
}

const FormItem = ({
    renderComponent,
    label,
    description,
    name,
    formControl,
    className = ""
}: FormItemProps) => {
    return(<div className={className}>
        <FormField
            control={formControl}
            name={name}
            render={({ field }) => (
                <ShadFormItem>
                    <FormLabel className="w-1/4">{label}</FormLabel>
                    <div className="w-3/4">
                        <FormControl>
                            {renderComponent(field)}
                        </FormControl>
                        {!isEmpty(description) && 
                        <FormDescription>
                            {description}
                        </FormDescription>}
                        <FormMessage />
                    </div>
                </ShadFormItem>
            )}
        />
    </div>)
}

export default FormItem