import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentName?: string | null;
  assignedDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
