import { useState } from "react"
import Skills from "../sections/skills/Skills"
import { ISection, SectionType, SectionTypes } from "../common/constants/section-consts"
import { isUndefined } from "lodash-es"

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
          
        setData((oldState) => {
            return oldState.map(item => {
                if(item.type === type)
                {  
                    if(!isUndefined(title))
                        item.title = title
                    if(!isUndefined(newData))
                        item.items = newData
                }
                return item
            })
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