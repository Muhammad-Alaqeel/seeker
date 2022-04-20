import Card from 'react-bootstrap/Card'
import React from 'react'

export default function CardDescription() {

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
                    <Card.Title>Web development Path</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
                <button className='Enroll-btn' >Enroll In</button>
            </Card>
        </div>
    )
}
