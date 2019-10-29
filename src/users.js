import React from 'react';
import { List, Datagrid, TextField, DateField, EmailField, EditButton, DeleteButton, SelectField } from 'react-admin';
import { Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, SelectInput } from 'react-admin';

const choices = [
    { id: 1, role: 'Administrador do Sistema'},
    { id: 2, role: 'Gestor de Vouchers'},
    { id: 3, role: 'Usuário'},
];

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <DateField source="dt_birth" />
            <EmailField source="email" />
            <SelectField source="role" choices={choices} optionValue="id" optionText="role" />
            <EditButton undoable={false} />
            <DeleteButton undoable={false} />
        </Datagrid>
    </List>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="name" />
            <TextInput source="username" />
            <DateInput source="dt_birth" />
            <TextInput source="email" type="email"/>
            <TextInput source="password" type="password"/>
            <SelectInput source="role" choices={choices} optionValue="id" optionText="role" />
        </SimpleForm>
    </Create>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="list">
            <DisabledInput source="id" />
            <TextInput source="name" />y
            <TextInput source="username" />
            <DateInput source="dt_birth" />
            <TextInput source="email" type="email"/>
            <SelectInput source="role" choices={choices} optionValue="id" optionText="role" />
        </SimpleForm>
    </Edit>
);