import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  client?: ClientWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
