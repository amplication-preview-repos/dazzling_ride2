import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type PropertyCreateInput = {
  address?: string | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  client?: ClientWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
