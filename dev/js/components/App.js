import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import JSONTest from '../containers/Json';
// import SearchInput from '../containers/search';
import SearchInput2 from '../containers/search_2';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
         <JSONTest />
        <SearchInput2 />
    </div>
);

export default App;
