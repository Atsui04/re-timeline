export type TimelineEvent = Arc | IfStory | Ova;

export type MainEvent = Arc | Ova;

export type Source = "anime" | "ln";

export type ArcStatus = "completed" | "ongoing";

export const isArc = (e: TimelineEvent): e is Arc => e.type === "arc";
export const isIf = (e: TimelineEvent): e is IfStory => e.type === "if";
export const isMainEvent = (e: TimelineEvent): e is MainEvent =>
  e.type !== "if";

export interface Arc {
  id: string;
  type: "arc";
  title: string;
  label: string;
  meta: string;
  source: Source[];
  releaseOrder: number;
  chronologicalOrder: number;
  status: ArcStatus;
  summary: string;
}

export interface IfStory {
  id: string;
  type: "if";
  title: string;
  branchesFrom: string;
  source: Source[];
  decision: string;
}

export interface Ova {
  id: string;
  type: "ova";
  title: string;
  label: string;
  meta: string;
  source: Source[];
  releaseOrder: number;
  chronologicalOrder: number;
  adaptationOf?: string;
  summary: string;
}
