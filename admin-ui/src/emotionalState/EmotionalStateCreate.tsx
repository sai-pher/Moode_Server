import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const EmotionalStateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Anxiety" source="anxiety" />
        <TextInput label="Coping" source="coping" />
        <TextInput label="Feeling" source="feeling" />
        <TextInput label="Harm" source="harm" />
        <TextInput label="Medication" source="medication" />
        <TextInput label="Productivity" source="productivity" />
        <TextInput label="Sleep" source="sleep" />
        <TextInput label="Stress" source="stress" />
        <TextInput label="Suicide" source="suicide" />
        <TextInput label="UpTo" source="upTo" />
        <ReferenceInput source="user.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
