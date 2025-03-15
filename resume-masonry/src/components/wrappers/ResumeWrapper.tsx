import { useState } from "react"
import Skills from "../sections/skills/Skills"
import { IAwards, IEducation, ISection, ISkills, SectionType, SectionTypes } from "../common/constants/section-consts"
import { isUndefined } from "lodash-es"
import Awards from "../sections/awards/Awards"
import Education from "../sections/education/Education"

const ResumeWrapper = () => { 
    
    const skillsData: ISkills[] = [{
        "title": "Frontend",
        "items": ["Javascript", "Typescript"]
    },{
        "title": "Backend",
        "items": [".NET Core", "Postgres"]
    }]

    const awardsData: IAwards[] = [{
        "awardTitle": "Winner of the year",
        "awardeeTitle": "Persistent Systems",
        "dateStamp": "Dec 2024"
    },{
        "awardTitle": "Winner of the year",
        "awardeeTitle": "Persistent Systems",
        "dateStamp": "Dec 2024"
    }]

    const educationData: IEducation[] = [{
        "degree": "Masters of Engineering",
        "field": "Rock Technology",
        "dateFrom": "Dec 2024",
        "dateTo": "Jan 2025",
        "collegeName": "Goa College of Engineering"
    },
    {
        "degree": "Bachelors of Engineering",
        "field": "Information Technology",
        "dateFrom": "May 2009",
        "dateTo": "Dec 2024",
        "collegeName": "Padre Conces"
    }]

    const mainDummy = [{
        "title": "Skills",
        "type": SectionType.SKILLS,
        "items": skillsData
    },
    {
        "title": "Awards",
        "type": SectionType.AWARDS,
        "items": awardsData
    },
    {
        "title": "Education",
        "type": SectionType.EDUCATION,
        "items": educationData
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
                            data={item.items as ISkills[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                        />
            if(item.type === SectionType.AWARDS)
                return <Awards 
                            data={item.items as IAwards[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                        />
            if(item.type === SectionType.EDUCATION)
                return <Education 
                            data={item.items as IEducation[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                        />
            return <></>
        })
    }
    </>
}

export default ResumeWrapper