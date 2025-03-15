import { withToolbar } from "@/components/common/components/WithToolbar/withToolbar"
import { IWorkExperience } from "@/components/common/constants/section-consts"
import { FC, useState } from "react"
import { withDNDForm } from "@/components/common/components/withDNDForm/withDNDForm"
import dayjs from "dayjs"
import WorkExperienceViewer from "./WorkExperienceViewer"
import WorkExperienceFormFields, { IWorkExperienceFormFieldProps } from "./WorkExperienceFormFields"


interface WorkExperienceProps {
    title: string
    data: Array<IWorkExperience>
    updateData: (newData?: Array<IWorkExperience>, title?: string) => void
}

const WorkExperience: FC<WorkExperienceProps> = ({
    data,
    title,
    updateData
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const WorkExperienceWithToolbar = withToolbar(WorkExperienceViewer, title, () => setIsEditMode(true))

    const updateSkills = (newData: Array<IWorkExperience>, title?: string) => {
        let result = newData.map(item => {
            item.dateFrom = dayjs(item.dateFrom).format('MMM YYYY')
            item.dateTo = dayjs(item.dateTo).format('MMM YYYY')
            return item
        })
        updateData(result, title)
    }
    
    const WorkExperienceDragAndDropForm = withDNDForm<IWorkExperienceFormFieldProps, IWorkExperience>(WorkExperienceFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <WorkExperienceDragAndDropForm />
            :
                <WorkExperienceWithToolbar data={data} />
        }
    </>)
}

export default WorkExperience