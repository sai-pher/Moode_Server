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
import { UserCreateNestedManyWithoutDoctorsInput } from "./UserCreateNestedManyWithoutDoctorsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class DoctorCreateInput {
  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutDoctorsInput, {
    nullable: true,
  })
  patients?: UserCreateNestedManyWithoutDoctorsInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user_id!: UserWhereUniqueInput;
}
export { DoctorCreateInput };
