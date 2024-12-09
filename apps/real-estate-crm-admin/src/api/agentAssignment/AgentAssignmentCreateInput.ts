import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentName?: string | null;
  assignedDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
