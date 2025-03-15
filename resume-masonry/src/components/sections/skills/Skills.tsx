import { FC, useState } from "react"
import SkillsViewer from "./SkillsViewer"
import SkillsEditor from "./SkillsEditor"
import { ISkills, SectionTypes } from "@/components/common/constants/section-consts"
import { withToolbar } from "@/components/common/components/WithToolbar/withToolbar"

interface SkillsProps {
    title: string
    data: Array<ISkills>
    updateData: (newData?: Array<SectionTypes>, title?: string) => void
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

    return (<>
        {
            isEditMode ? 
            <SkillsEditor data={data} setViewMode={() => setIsEditMode(false)} updateData={updateSkills} title={title}/>
            :
            <SkillsWithToolbar data={data} />
        }
    </>)
}

export default Skills