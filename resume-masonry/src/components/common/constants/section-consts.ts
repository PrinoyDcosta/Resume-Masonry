export enum SectionType {
    SKILLS,
    EXPERIENCE,
    EDUCATION,
    AWARDS,
    HEADER,
    LANGUAGES,
    PROJECTS
}

export type SectionTypes = ISkills | IAwards | IEducation

export interface ISection {
    title: string
    type: SectionType
    items: Array<SectionTypes>
}

export interface ISkills {
    title: string
    items: Array<string>
}

export interface IAwards {
    awardTitle: string
    awardeeTitle: string
    dateStamp: string
}

export interface IEducation {
    degree: string
    field: string
    dateFrom: string
    dateTo: string
    collegeName: string
}