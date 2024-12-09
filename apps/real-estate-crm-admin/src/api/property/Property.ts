import { AgentAssignment } from "../agentAssignment/AgentAssignment";
import { Appointment } from "../appointment/Appointment";
import { Client } from "../client/Client";

export type Property = {
  address: string | null;
  agentAssignments?: Array<AgentAssignment>;
  appointments?: Array<Appointment>;
  client?: Client | null;
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
