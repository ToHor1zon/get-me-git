export type SkillLevelType = 1 | 2 | 3 | 4 | 5

export type ExperienceType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20

export interface StateType {
  currentTechIndex: number
  techs: {
    [key: string]: [value: {
      name: string
      skillLevel: SkillLevelType
      experience: ExperienceType
    }]
  }
}

export interface DataFromApiType {
  techs: string[]
}

