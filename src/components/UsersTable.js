import React from 'react'
import { Container, Table, Pagination } from 'react-bootstrap'

import { getUser }  from '../actions/actions'

import { useHistory } from 'react-router-dom'

export default function UsersTable( props ) {
    
    const { users, getUsersAll } = props;

    const history = useHistory();

    const style = {
        cursor: 'pointer'
    }

    const handlerClickPage = (pageNumber) => {
        const currentPage = props.match.params.pageNumber? props.match.params.pageNumber : 1 ;
        if (currentPage !== pageNumber) {
            history.push(`/users/${pageNumber}`);
            getUsersAll();
        }
    }

    const handlerClickUser = (userID) => {
        history.push(`/user/${userID}`);
        //getUser(userID);
    }

    const getPagesButtonRender = () => {
        let pages = users.total_pages;
        let items = [];
        for (let i = 1; i <= pages; i++) {
            items.push(
              <Pagination.Item key={i} onClick={() => handlerClickPage(i)}>
                {i}
              </Pagination.Item>
            );
        }
        return items;
    }

    const paginationBasic = (
        <Pagination>
            {getPagesButtonRender()}
        </Pagination>
    )

    return (
        <Container className="users-page mt-5 w-75">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map((user, userIndex) => {
                        return (
                            <tr key={userIndex}  style={style} onClick={() => handlerClickUser(user.id)}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {paginationBasic}  
        </Container>
    )
}
