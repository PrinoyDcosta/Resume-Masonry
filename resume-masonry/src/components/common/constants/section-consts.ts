export enum SectionType {
    SKILLS,
    EXPERIENCE,
    EDUCATION,
    AWARDS,
    HEADER,
    LANGUAGES,
    PROJECTS
}

export type SectionTypes = ISkills

export interface ISection {
    title: string
    type: SectionType
    items: Array<SectionTypes>
}

export interface ISkills {
    id: number
    title: string
    items: Array<string>
}
