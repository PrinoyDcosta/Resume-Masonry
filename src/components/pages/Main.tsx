import { useRef } from "react";
import ResumeWrapper from "../wrappers/ResumeWrapper"
import ToolsWrapper from "../wrappers/ToolsWrapper"

const Main = () => {
    const printableContentRef = useRef<HTMLDivElement>(null);

    return(<>
    <div className='flex flex-row px-24'>
        <div className="basis-3/4">
            <div className="p-40 pt-10">
                <ResumeWrapper printableContentRef={printableContentRef} />
            </div>
        </div>
        <div className="basis-1/4">
            <div className="pt-10 ">
                <ToolsWrapper printableContentRef={printableContentRef} />
            </div>
        </div>
    </div>
    </>)
}

export default Main