import { IAwards } from "@/components/common/constants/section-consts"
import { FC } from "react"
import AwardsEditorForm from "./AwardsEditorForm"

interface AwardsEditorProps {
    setViewMode: () => void
    updateData: (newData: Array<IAwards>, title?: string) => void
    data: Array<IAwards>
    title: string
}

const AwardsEditor: FC<AwardsEditorProps> = ({
    setViewMode,
    updateData,
    data,
    title
}) => {


    return(<>
        <AwardsEditorForm data={data} title={title} updateData={updateData} setViewMode={setViewMode}/>
    </>)
}

export default AwardsEditor