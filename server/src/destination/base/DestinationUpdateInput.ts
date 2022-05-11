/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PacientWhereUniqueInput } from "../../pacient/base/PacientWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { DrugUpdateManyWithoutDestinationsInput } from "./DrugUpdateManyWithoutDestinationsInput";
@InputType()
class DestinationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => PacientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PacientWhereUniqueInput)
  @IsOptional()
  @Field(() => PacientWhereUniqueInput, {
    nullable: true,
  })
  destination?: PacientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  doctor?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DrugUpdateManyWithoutDestinationsInput,
  })
  @ValidateNested()
  @Type(() => DrugUpdateManyWithoutDestinationsInput)
  @IsOptional()
  @Field(() => DrugUpdateManyWithoutDestinationsInput, {
    nullable: true,
  })
  drugs?: DrugUpdateManyWithoutDestinationsInput;
}
export { DestinationUpdateInput };
