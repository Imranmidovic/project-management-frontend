export type SubProjectType = {
    id: number,
    title: string,
    started: Date,
    fk: number,
}
export type SubProjectAddType = {
    title: string,
    started: Date,
    fk: number,
}