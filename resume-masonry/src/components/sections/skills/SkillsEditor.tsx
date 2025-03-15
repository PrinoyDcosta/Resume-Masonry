import { ISkills } from "@/components/common/constants/section-consts"
import { FC } from "react"
import SkillsEditorForm from "./SkillsEditorForm"

interface SkillsEditorProps {
    setViewMode: () => void
    updateData: (newData: Array<ISkills>, title?: string) => void
    data: Array<ISkills>
    title: string
}

const SkillsEditor: FC<SkillsEditorProps> = ({
    setViewMode,
    updateData,
    data,
    title
}) => {


    return(<>
        <SkillsEditorForm data={data} title={title} updateData={updateData} setViewMode={setViewMode}/>
    </>)
}

export default SkillsEditor