export default interface Game {
    name: string;
    teams: string[];
    winner?: number;
    confidence?: number;
};