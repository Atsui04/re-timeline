export type Source = "anime" | "ln";

export type ArcStatus = "completed" | "ongoing";

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

export type TimelineEvent = Arc | IfStory | Ova;

export const isArc = (e: TimelineEvent): e is Arc => e.type === "arc";
export const isIf = (e: TimelineEvent): e is IfStory => e.type === "if";
export const isOva = (e: TimelineEvent): e is Ova => e.type === "ova";

export interface Arc {
  id: string;
  type: "arc";
  label: string;
  title: string;
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
