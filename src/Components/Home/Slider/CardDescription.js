import Card from 'react-bootstrap/Card'
import React from 'react'

export default function CardDescription(props) {

    const round =
    {
        backgroundColor: "#EAEEF1",
        borderRadius: "10px",

    }

    return (
        <div>
            <Card className='h-100 CC shadow' style={round}>
                <Card.Header>Description</Card.Header>
                <Card.Body className=''>
                    <Card.Title>{props.rightTitle}</Card.Title>
                    <Card.Text>
                        {props.rightDescription}
                    </Card.Text>
                </Card.Body>
                <button className='Enroll-btn' >Enroll In</button>
            </Card>
        </div>
    )
}
