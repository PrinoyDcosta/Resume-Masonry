import { withToolbar } from "@/components/common/components/WithToolbar/withToolbar"
import { IAwards } from "@/components/common/constants/section-consts"
import { FC, useState } from "react"
import AwardsViewer from "./AwardsViewer"
import AwardsEditor from "./AwardsEditor"


interface AwardsProps {
    title: string
    data: Array<IAwards>
    updateData: (newData?: Array<IAwards>, title?: string) => void
}

const Awards: FC<AwardsProps> = ({
    data,
    title,
    updateData
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const AwardsWithToolbar = withToolbar(AwardsViewer, title, () => setIsEditMode(true))

    const updateSkills = (newData: Array<IAwards>, title?: string) => {
        updateData(newData, title)
    }

    return (<>
        {
            isEditMode ? 
                <AwardsEditor data={data} setViewMode={() => setIsEditMode(false)} updateData={updateSkills} title={title}/>
            :
                <AwardsWithToolbar data={data} />
        }
    </>)
}

export default Awards