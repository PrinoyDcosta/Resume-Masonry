export enum SectionType {
    SKILLS,
    EXPERIENCE,
    EDUCATION,
    AWARDS,
    HEADER,
    LANGUAGES,
    PROJECTS
}

export type SectionTypes = ISkills | IAwards

export interface ISection {
    title: string
    type: SectionType
    items: Array<SectionTypes>
}

export interface ISkills {
    //id: number
    title: string
    items: Array<string>
}

export interface IAwards {
    //id: number
    awardTitle: string
    awardeeTitle: string
    dateStamp: string
}
