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
import { ConditionUpdateManyWithoutUsersInput } from "./ConditionUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { DoctorUpdateManyWithoutUsersInput } from "./DoctorUpdateManyWithoutUsersInput";
import { EmotionalStateUpdateManyWithoutUsersInput } from "./EmotionalStateUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ConditionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ConditionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ConditionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  condition?: ConditionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DoctorUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DoctorUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DoctorUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  doctor?: DoctorUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DoctorUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DoctorUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DoctorUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  doctor_Id?: DoctorUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => EmotionalStateUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EmotionalStateUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EmotionalStateUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  emotionalState?: EmotionalStateUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };