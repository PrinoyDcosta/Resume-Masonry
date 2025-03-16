import ResumeWrapper from "../wrappers/ResumeWrapper"

const Main = () => {
    return(<>
    <div className='flex flex-row px-24'>
        <div className="basis-3/4">
            <div className="p-40 pt-10 ">
                <ResumeWrapper />
            </div>
        </div>
        <div className="basis-1/4">
            <h1>
                Tools/Actions/Resume History
            </h1>
        </div>
    </div>
    </>)
}

export default Main