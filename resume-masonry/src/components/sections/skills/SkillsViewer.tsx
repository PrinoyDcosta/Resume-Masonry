import { ISkills } from "@/components/common/section-consts"
import { Button } from "@/components/ui/button"
import { isEmpty } from "lodash-es"
import { FC } from "react"

interface SkillsViewerProps {
    data: Array<ISkills>
    setEditMode: () => void
    title: string
}

const SkillsViewer: FC<SkillsViewerProps> = ({
    data,
    setEditMode,
    title
}) => {

    return(<div className="space-y-1">
            <h1>{title}</h1>
            <Button onClick={setEditMode}>Edit</Button>
            <>
                {
                    !isEmpty(data) ? <>
                        {
                            data.map(item => (<>
                                <h4 className="text-sm font-medium leading-none">{item.title}</h4>
                                <p className="flex h-6 items-center space-x-4 text-sm">{item.items.map((skill) => skill)}</p>
                            </>))
                        }
                    </>
                    :<></>
                }
            </>
    </div>)
}

export default SkillsViewer