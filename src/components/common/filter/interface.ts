export interface IPanels {
    location: boolean,
    specialization: boolean,
    experience: boolean,
    employment: boolean,
    english: boolean,
}
export type ISetPanel = 'location' | 'specialization' | 'experience' | 'english';

export interface IFilterByObject {
    id: number,
    title: string;
}

export type IFilterBy = IFilterByObject[];