import { FC, useState } from "react"
import SkillsViewer from "./SkillsViewer"
import { ISkills } from "@/components/common/constants/section-consts"
import { withToolbar } from "@/components/common/components/WithToolbar/withToolbar"
import { withDNDForm } from "@/components/common/components/withDNDForm/withDNDForm"
import SkilsFormFields, { ISkilsFormFieldProps } from "./SkillsFormFields"

interface SkillsProps {
    title: string
    data: Array<ISkills>
    updateData: (newData?: Array<ISkills>, title?: string) => void
}

const Skills: FC<SkillsProps> = ({
    data,
    title,
    updateData
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const SkillsWithToolbar = withToolbar(SkillsViewer, title, () => setIsEditMode(true))

    const updateSkills = (newData: Array<ISkills>, title?: string) => {
        updateData(newData, title)
    }
    const SkillsDragAndDropForm = withDNDForm<ISkilsFormFieldProps, ISkills>(SkilsFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
            <SkillsDragAndDropForm />
            :
            <SkillsWithToolbar data={data} />
        }
    </>)
}

export default Skills