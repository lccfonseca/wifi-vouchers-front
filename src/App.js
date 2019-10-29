import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonSpringBootProvider from './lib/ra-data-springboot-rest';
import Dashboard from './Dashboard';
import { EventList } from './events';
import { UserList, UserCreate, UserEdit } from './users';
import { VoucherList } from './vouchers';
import EventIcon from '@material-ui/icons/Event';
import UserIcon from '@material-ui/icons/Group';
import VoucherIcon from '@material-ui/icons/Wifi';

const dataProvider = jsonSpringBootProvider;
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="events" list={EventList} icon={EventIcon}/>
        <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon}/>
        <Resource name="vouchers" list={VoucherList} icon={VoucherIcon}/>
    </Admin>
);

export default App;