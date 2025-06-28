import { withToolbar } from "@/components/common/components/WithToolbar/withToolbar"
import { IEducation } from "@/components/common/constants/section-consts"
import { FC, useState } from "react"
import { withDNDForm } from "@/components/common/components/withDNDForm/withDNDForm"
import dayjs from "dayjs"
import EducationViewer from "./EducationViewer"
import EducationFormFields, { IEducationFormFieldProps } from "./EducationFormFields"


interface EducationProps {
    title: string
    data: Array<IEducation>
    updateData: (newData?: Array<IEducation>, title?: string) => void
}

const Education: FC<EducationProps> = ({
    data,
    title,
    updateData
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const EducationWithToolbar = withToolbar(EducationViewer, title, () => setIsEditMode(true))

    const updateSkills = (newData: Array<IEducation>, title?: string) => {
        let result = newData.map(item => {
            item.dateFrom = dayjs(item.dateFrom).format('MMM YYYY')
            item.dateTo = dayjs(item.dateTo).format('MMM YYYY')
            return item
        })
        updateData(result, title)
    }
    
    const EducationDragAndDropForm = withDNDForm<IEducationFormFieldProps, IEducation>(EducationFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <EducationDragAndDropForm />
            :
                <EducationWithToolbar data={data} />
        }
    </>)
}

export default Education