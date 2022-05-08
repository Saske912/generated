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
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DrugListRelationFilter } from "../../drug/base/DrugListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PacientWhereUniqueInput } from "../../pacient/base/PacientWhereUniqueInput";
@InputType()
class DestinationWhereInput {
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
  doctor?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DrugListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DrugListRelationFilter)
  @IsOptional()
  @Field(() => DrugListRelationFilter, {
    nullable: true,
  })
  drugs?: DrugListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  pacient?: PacientWhereUniqueInput;
}
export { DestinationWhereInput };