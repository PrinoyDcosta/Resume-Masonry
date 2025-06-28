import { ISkills } from "@/components/common/constants/section-consts"
import { isEmpty } from "lodash-es"
import { FC } from "react"
interface SkillsViewerProps {
    data: Array<ISkills>
}

const SkillsViewer: FC<SkillsViewerProps> = ({
    data,
}) => {

    return(
        <>
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
        </>
    )
}

export default SkillsViewer