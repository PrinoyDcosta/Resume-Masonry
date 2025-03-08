import { useState } from "react"
import Skills from "../sections/skills/Skills"
import { ISection, SectionType, SectionTypes } from "../common/constants/section-consts"
import { isEmpty, isUndefined } from "lodash-es"

const ResumeWrapper = () => { 
    
    const skillsData = [{
        "id": 0,
        "title": "Frontend",
        "items": ["Javascript", "Typescript"]
    },{
        "id": 1,
        "title": "Backend",
        "items": [".NET Core", "Postgres"]
    }]

    const mainDummy = [{
        "title": "Skills",
        "type": SectionType.SKILLS,
        "items": skillsData
    }]

    const [data, setData] = useState<Array<ISection>>(mainDummy)

    const updateData = (type: SectionType, newData?: Array<SectionTypes>, title?: string) => {
        let sectionToUpdate = data.find(item => item.type === type)
        if(isUndefined(sectionToUpdate))
            return
            
        if(!isUndefined(title))
            sectionToUpdate.title = title
        if(!isUndefined(newData))
            sectionToUpdate.items = newData
        setData((oldState) => {
            let filteredState = oldState.filter(item => item.type !== type)
            return [ ...filteredState, sectionToUpdate]
        })
    }

    return <>
    {
        data.map(item => {
            if(item.type === SectionType.SKILLS)
                return <Skills 
                            data={item.items} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                        />
            return <></>
        })
    }
    </>
}

export default ResumeWrapper