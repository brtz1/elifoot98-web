import type { Fixture } from "../../models/Fixture";

export class League {
  simulateGame(fx: any) {
    throw new Error('Method not implemented.');
  }
  simulateAll() {
    throw new Error('Method not implemented.');
  }
  teams: any;
  rosters: any;
  getStandings(): import("../../models/StandingsEntry").StandingsEntry[] {
    throw new Error('Method not implemented.');
  }
  finances(finances: any): import("../../models/FinanceRecord").FinanceRecord[] {
    throw new Error('Method not implemented.');
  }
  id: string;
  name: string;
  fixtures: Fixture[] | undefined;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}