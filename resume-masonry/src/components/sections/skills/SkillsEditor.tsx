import { ISkills } from "@/components/common/section-consts"
import { Button } from "@/components/ui/button"
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
        <Button onClick={setViewMode}>View</Button>
        <SkillsEditorForm data={data} title={title} updateData={updateData} setViewMode={setViewMode}/>
    </>)
}

export default SkillsEditor