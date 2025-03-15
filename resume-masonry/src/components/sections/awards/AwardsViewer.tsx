import { IAwards } from "@/components/common/constants/section-consts"
import { isEmpty } from "lodash-es"
import { FC } from "react"
interface AwardsViewerProps {
    data: Array<IAwards>
}

const AwardsViewer: FC<AwardsViewerProps> = ({
    data,
}) => {

    return(
        <>
             {
                !isEmpty(data) ? <>
                    {
                        data.map(item => (<div className="flex justify-between">
                            <div className="flex justify-start">
                                <h4 className="font-semibold">{item.awardTitle}</h4>
                                &nbsp;by&nbsp;
                                <h4 className="font-semibold">{item.awardeeTitle}</h4>
                            </div>
                            <div>
                                <h4 className="font-semibold">{item.dateStamp}</h4>
                            </div>
                        </div>))
                    }
                </>
                :<></>
            }
        </>
    )
}

export default AwardsViewer