import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";

export type DrugUpdateInput = {
  description?: string | null;
  destination?: DestinationWhereUniqueInput | null;
  dosage?: string | null;
  name?: "Analgin" | "Dimidrol" | null;
  expire?: Date;
};
