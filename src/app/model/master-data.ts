import { Team } from './team';

export class MasterData {
    
    sprint: string;
    team: Team;
    plannedSP: number;
    deliveredSP: number;
    overridePlannedSP: number;
    overrideDeliveredSP: number;
    jiraPlannedSP: number;
    jiraDeliveredSP: number;
}
