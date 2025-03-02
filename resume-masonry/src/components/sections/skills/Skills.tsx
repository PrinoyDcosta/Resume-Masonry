import { FC, useEffect, useState } from "react"
import SkillsViewer from "./SkillsViewer"
import SkillsEditor from "./SkillsEditor"
import { ISkills, SectionTypes } from "@/components/common/section-consts"
import { isUndefined, max } from "lodash-es"

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

    const incrementLastId = () => {
        let maxId = max(data.map(item => item.id))
        return maxId! + 1
    }

    const updateSkills = (newData: Array<ISkills>, title?: string) => {
        // if(isUndefined(newData.id))
        // {
        //     let newId = incrementLastId()
        //     newData.id = newId
        // }
        // updateData([...data, newData], title)
    }

    return (<>
        {
            isEditMode ? 
            <SkillsEditor data={data} setViewMode={() => setIsEditMode(false)} updateData={updateSkills} title={title}/>
            :
            <SkillsViewer data={data} title={title} setEditMode={() => setIsEditMode(true)}/>
        }
    </>)
}

export default Skills