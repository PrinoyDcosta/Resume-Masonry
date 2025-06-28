import BasicTools from "../tools-sections/basic-tools/BasicTools"

interface ToolsWrapperProps {
    printableContentRef: React.RefObject<HTMLDivElement | null>
}

const ToolsWrapper = ({ printableContentRef }: ToolsWrapperProps) => {

    return(<div className="shadow-xl pb-15 bg-blue-300">
        <h1>Tools</h1>
        <BasicTools printableContentRef={printableContentRef}/>
    </div>)
}
export default ToolsWrapper