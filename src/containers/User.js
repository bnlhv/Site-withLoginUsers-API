import React, {useEffect} from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from '../actions/actions'

export default function User( props ) {

    const user = useSelector(state => state.login.user)
    const dispatch = useDispatch();

    const userID = () => {
       return props.match.params.userID 
    }

    useEffect(() => {
        dispatch(
            getUser(userID())
        )
    }, [])
    
    return (
        <Container className="user-page">
            <Card style={{ width: '18rem', marginTop: '5%' }}>
                <Card.Img variant="top" src={user.avatar} />
                <Card.Body>
                    <Card.Title>#{user.id} {user.first_name} {user.last_name}</Card.Title>
                    <Card.Text>
                        Email: {user.email}
                    </Card.Text>
                </Card.Body>
            </Card>  
        </Container>
    )
}
