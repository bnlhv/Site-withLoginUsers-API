import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UsersTable from '../components/UsersTable'

import { getUsers } from '../actions/actions'


export default function Users( props ) {
    
    const users = useSelector(state => state.login.users)
    const dispatch = useDispatch();

    function getUsersAll (){
        dispatch(getUsers(pageNumber()));
    }

    useEffect(() => {
        getUsersAll();
    }, [getUsersAll])

    const pageNumber = () => {
        const isPageNumberExist = typeof  props.match.params.pageNumber !== 'undefined';
        return (isPageNumberExist ? props.match.params.pageNumber : 1);
    }

    return (
        <UsersTable users={users} getUsersAll={getUsersAll} {...props} />
    )
}
