import { withToolbar } from "@/components/common/components/WithToolbar/withToolbar"
import { ILanguage } from "@/components/common/constants/section-consts"
import { FC, useState } from "react"
import { withDNDForm } from "@/components/common/components/withDNDForm/withDNDForm"
import LanguagesFormFields, { ILanguagesFormFieldProps } from "./LanguagesFormFields"
import LanguagesViewer from "./LanguagesViewer"


interface LanguagesProps {
    title: string
    data: Array<ILanguage>
    updateData: (newData?: Array<ILanguage>, title?: string) => void
    readonly?: boolean
}

const Languages: FC<LanguagesProps> = ({
    data,
    title,
    updateData,
    readonly
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const LanguagesWithToolbar = withToolbar(LanguagesViewer, title, () => setIsEditMode(true), readonly)

    const updateSkills = (newData: Array<ILanguage>, title?: string) => {
        updateData(newData, title)
    }
    
    const LanguagesDragAndDropForm = withDNDForm<ILanguagesFormFieldProps, ILanguage>(LanguagesFormFields, title, () => setIsEditMode(false), data, updateSkills)

    return (<>
        {
            isEditMode ? 
                <LanguagesDragAndDropForm />
            :
                <LanguagesWithToolbar data={data} />
        }
    </>)
}

export default Languages