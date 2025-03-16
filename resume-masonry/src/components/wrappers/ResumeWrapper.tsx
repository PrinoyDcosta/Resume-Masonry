import { useState } from "react"
import Skills from "../sections/skills/Skills"
import { IAwards, IEducation, IHeader, ILanguage, IProject, ISection, ISkills, IWorkExperience, SectionType, SectionTypes } from "../common/constants/section-consts"
import { isUndefined } from "lodash-es"
import Awards from "../sections/awards/Awards"
import Education from "../sections/education/Education"
import Languages from "../sections/languages/Languages"
import WorkExperience from "../sections/experience/WorkExperience"
import Project from "../sections/projects/Projects"
import Header from "../sections/header/Header"

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

    const languageData: ILanguage[] = [{
        "language": "English",
        "proficiency": "Native proficiency"
    },
    {
        "language": "Hindi",
        "proficiency": "Native proficiency"
    },]

    const experienceData: IWorkExperience[] = [{
        "jobTitle": "Software Engineer",
        "companyName": "Persistent Systems",
        "companyLocation": "Goa",
        "dateFrom": "Dec 2024",
        "dateTo": "Dec 2025",
        "description": [
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",
            "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%."
        ]
    }]

    const projectData: IProject[] = [{
        "projectTitle": "Developed Google nest",
        "projectUrl": "https://support.google.com/product-documentation/answer/10231940?hl=en",
        "dateFrom": "Dec 2024",
        "dateTo": "Dec 2025",
        "description": "Developed a dynamic content creation tool for the client’s news portal, enabling seamless generation of news articles, promotions, and announcements, improving content delivery speed and engagement by 40%.",

    }]

    const headerData: IHeader[] = [{
        fullName: `Prinoy D'Costa`,
        githubUrl: '',
        linkedinUrl: '',
        location: 'Goa',
        email: 'prinoy@gmail.com', 
        phoneNumber: '+919822222222' 
    }]

    const mainDummy = [    
    {
        "title": "Header",
        "type": SectionType.HEADER,
        "items": headerData
    },
    {
        "title": "Skills",
        "type": SectionType.SKILLS,
        "items": skillsData
    },
    {
        "title": "Work Experience",
        "type": SectionType.EXPERIENCE,
        "items": experienceData
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
    },
    {
        "title": "Languages",
        "type": SectionType.LANGUAGES,
        "items": languageData
    },
    {
        "title": "Projects",
        "type": SectionType.PROJECTS,
        "items": projectData
    },]

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
            if(item.type === SectionType.EXPERIENCE)
                return <WorkExperience 
                            data={item.items as IWorkExperience[]} 
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
            if(item.type === SectionType.LANGUAGES)
                return <Languages 
                            data={item.items as ILanguage[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                        />
            if(item.type === SectionType.PROJECTS)
                return <Project 
                            data={item.items as IProject[]} 
                            title={item.title} 
                            updateData={(newData?: Array<SectionTypes>, title?: string) => updateData(item.type, newData, title)}
                        />
            if(item.type === SectionType.HEADER)
                return <Header 
                            data={item.items as IHeader[]} 
                            title={item.title} 
                            updateData={(newData?: SectionTypes[], title?: string) => updateData(item.type, newData, title)}
                        />
            return <></>
            return <></>
        })
    }
    </>
}

export default ResumeWrapper