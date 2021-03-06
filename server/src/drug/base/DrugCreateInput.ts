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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsDate,
} from "class-validator";
import { DestinationWhereUniqueInput } from "../../destination/base/DestinationWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumDrugName } from "./EnumDrugName";
@InputType()
class DrugCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => DestinationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DestinationWhereUniqueInput)
  @IsOptional()
  @Field(() => DestinationWhereUniqueInput, {
    nullable: true,
  })
  destination?: DestinationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dosage?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDrugName,
  })
  @IsEnum(EnumDrugName)
  @IsOptional()
  @Field(() => EnumDrugName, {
    nullable: true,
  })
  name?: "Analgin" | "Dimidrol" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  expire!: Date;
}
export { DrugCreateInput };
