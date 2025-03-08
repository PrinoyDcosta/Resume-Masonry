import { ISkills } from "@/components/common/section-consts"
import { Button } from "@/components/ui/button"
import { isEmpty } from "lodash-es"
import { FC } from "react"
import { ArrowDownIcon, ArrowUpIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid"
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

    return(<div className="group space-y-1 bg-blue-50">
        <div className="border-3 rounded-md border-transparent group-hover:border-gray-200 group-hover:duration-200 group-hover:ease-in-out">
            <h1 className="font-bold section-underline">{title}</h1>
                <div className="pr-2 flex justify-end invisible relative -top-5 -mb-10 group-hover:visible group-hover:duration-200 group-hover:ease-in-out">
                    <div className="flex relative gap-1 top-1">
                        <Button variant="outline" size="icon" onClick={setEditMode}>
                            <PencilSquareIcon/>
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => {}}><ArrowUpIcon/></Button>
                        <Button variant="outline" size="icon" onClick={() => {}}><ArrowDownIcon/></Button>
                        <Button className="text-red-600 hover:text-red-600" variant="outline" size="icon" onClick={() => {}}><TrashIcon/></Button>
                    </div>
                </div>
                <div className="p-4 pb-0">
                {
                    !isEmpty(data) ? <>
                        {
                            data.map(item => (<div className="flex">
                                <h4 className="justify-start font-semibold">{item.title}</h4>
                                &nbsp;:&nbsp;
                                <p className="justify-start">{item.items.map((skill) => skill).join(", ")}</p>
                            </div>))
                        }
                    </>
                    :<></>
                }
                </div>
        </div> 
    </div>)
}

export default SkillsViewer