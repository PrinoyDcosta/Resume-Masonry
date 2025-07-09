import { AcademicCapIcon } from "@heroicons/react/16/solid"
import { Button } from "../ui/button"

const MainHeader = () => {
    return(<div className="flex h-20 justify-between items-center shadow-lg px-40 pt-5 pb-5 fixed top-0 right-0 left-0 bg-white z-1">
        <div className="flex items-center">
            <AcademicCapIcon className='text-blue-400 object-contain'/>
            <h1 className="font-mono">Resume Masonry</h1>
        </div>
        <div className="flex items-center gap-3">
            <Button variant={'outline'} type='button'>Login</Button>
            <Button variant='default' type='button'>Sign up</Button>
        </div>
    </div>)
}

export default MainHeader