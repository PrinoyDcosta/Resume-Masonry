import { Button } from "@/components/ui/button"
import { ArrowDownIcon, ArrowUpIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid"


export const withToolbar = <P extends {},>(Component : React.ComponentType<P>, title: string, setEditMode: () => void, isHeader?: boolean) => {
    
    const BodyComponentWithToolBar = (props: P) => {
        return(<div className="group space-y-1 bg-white">
                    <div className="border-3 p-2 px-10 rounded-md border-transparent group-hover:border-gray-200 group-hover:duration-200 group-hover:ease-in-out">
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
                                <Component {...props}/>
                            </div>
                    </div> 
                </div>)
    }
    
    const HeaderComponentWithToolBar = (props: P) => {
        return(<div className="group space-y-1 bg-white">
                    <div className="border-3 p-2 rounded-md border-transparent group-hover:border-gray-200 group-hover:duration-200 group-hover:ease-in-out">
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
                                <Component {...props}/>
                            </div>
                    </div> 
                </div>)
    }
    return isHeader ? HeaderComponentWithToolBar : BodyComponentWithToolBar
}
