import { withToolbar } from "@/components/common/components/WithToolbar/withToolbar"
import { IAwards } from "@/components/common/constants/section-consts"
import { FC, useState } from "react"
import AwardsViewer from "./AwardsViewer"
import { withDNDForm } from "@/components/common/components/withDNDForm/withDNDForm"
import { IAwardFormFieldProps } from "./AwardFormFields"
import dayjs from "dayjs"
import AwardFormField from "./AwardFormFields"


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
        let result = newData.map(item => {
            item.dateStamp = dayjs(item.dateStamp).format('MMM YYYY')
            return item
        })
        updateData(result, title)
    }
    
    const AwardsDragAndDropForm = withDNDForm<IAwardFormFieldProps, IAwards>(AwardFormField, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <AwardsDragAndDropForm />
            :
                <AwardsWithToolbar data={data} />
        }
    </>)
}

export default Awards