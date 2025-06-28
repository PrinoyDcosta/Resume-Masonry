import { withToolbar } from "@/components/common/components/WithToolbar/withToolbar"
import { IProject } from "@/components/common/constants/section-consts"
import { FC, useState } from "react"
import { withDNDForm } from "@/components/common/components/withDNDForm/withDNDForm"
import dayjs from "dayjs"
import ProjectFormFields,{ IProjectFormFieldProps } from "./ProjectsFormFields"
import ProjectsViewer from "./ProjectsViewer"


interface ProjectProps {
    title: string
    data: Array<IProject>
    updateData: (newData?: Array<IProject>, title?: string) => void
    readonly?: boolean
}

const Project: FC<ProjectProps> = ({
    data,
    title,
    updateData,
    readonly
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const ProjectWithToolbar = withToolbar(ProjectsViewer, title, () => setIsEditMode(true), readonly)

    const updateSkills = (newData: Array<IProject>, title?: string) => {
        let result = newData.map(item => {
            item.dateFrom = dayjs(item.dateFrom).format('MMM YYYY')
            item.dateTo = dayjs(item.dateTo).format('MMM YYYY')
            return item
        })
        updateData(result, title)
    }
    
    const ProjectDragAndDropForm = withDNDForm<IProjectFormFieldProps, IProject>(ProjectFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <ProjectDragAndDropForm />
            :
                <ProjectWithToolbar data={data} />
        }
    </>)
}

export default Project