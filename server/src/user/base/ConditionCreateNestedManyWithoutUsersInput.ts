/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ConditionWhereUniqueInput } from "../../condition/base/ConditionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ConditionCreateNestedManyWithoutUsersInput {
  @Field(() => [ConditionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ConditionWhereUniqueInput],
  })
  connect?: Array<ConditionWhereUniqueInput>;
}
export { ConditionCreateNestedManyWithoutUsersInput };
