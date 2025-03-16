import { withToolbar } from "@/components/common/components/WithToolbar/withToolbar"
import { IHeader } from "@/components/common/constants/section-consts"
import { FC, useState } from "react"
import { withDNDForm } from "@/components/common/components/withDNDForm/withDNDForm"
import HeaderViewer from "./HeaderViewer"
import HeaderFormFields, { IHeaderFormFieldProps } from "./HeaderFormFields"


interface HeaderProps {
    title: string
    data: IHeader[]
    updateData: (newData?: IHeader[], title?: string) => void
}

const Header: FC<HeaderProps> = ({
    data,
    title,
    updateData
}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const HeaderWithToolbar = withToolbar(HeaderViewer, title, () => setIsEditMode(true), true)

    const updateSkills = (newData: IHeader[], title?: string) => {
        updateData(newData, title)
    }
    
    const HeaderDragAndDropForm = withDNDForm<IHeaderFormFieldProps, IHeader>(HeaderFormFields, title, () => setIsEditMode(false), data, updateSkills, true)

    return (<>
        {
            isEditMode ? 
                <HeaderDragAndDropForm />
            :
                <HeaderWithToolbar data={data} />
        }
    </>)
}

export default Header