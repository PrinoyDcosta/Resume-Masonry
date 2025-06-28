import { Button } from "@/components/ui/button"
import { useReactToPrint } from "react-to-print";

interface BasicToolsProps {
    printableContentRef: React.RefObject<HTMLDivElement | null>
}

const BasicTools = ({ printableContentRef }: BasicToolsProps) => {

    const reactToPrintFn = useReactToPrint({ contentRef: printableContentRef });
    return(<>
        <Button onClick={() => reactToPrintFn()} variant={'outline'} type='button'>Download</Button>
    </>)
}

export default BasicTools