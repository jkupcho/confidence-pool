export default interface Game {
    name: string;
    teams: Team[];
    winner?: number;
    confidence?: number;
};

export interface Team {
    name: string;
    score?: number;
};