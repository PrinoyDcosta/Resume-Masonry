import ResumeWrapper from "../wrappers/ResumeWrapper"

const Main = () => {
    return(<>
    <div className="flex flex-row">
        <div className="basis-2/3">
            <h1>
                Resume Editor/Viewer
            </h1>
            <div className="p-40 pt-10 ">
                <ResumeWrapper />
            </div>
        </div>
        <div className="basis-1/3">
            <h1>
                Tools/Actions/Resume History
            </h1>
        </div>
    </div>
    </>)
}

export default Main