import { useRef, useState } from "react";
import { dataSource, Resume } from "react-resume-viewer"
import { ISection } from "node_modules/react-resume-viewer/dist/types/components/common/constants/section-consts";

const Main = () => {
    const printableContentRef = useRef<HTMLDivElement>(null);
    const [data, setData] = useState<Array<ISection>>(dataSource)

    return(<>
    <div className='flex flex-row px-24'>
        <div className="p-40 pt-10">
            <Resume data={data} setData={setData} printableContentRef={printableContentRef} />
        </div>
    </div>
    </>)
}

export default Main