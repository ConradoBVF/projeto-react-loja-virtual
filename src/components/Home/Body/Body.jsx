import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './Body.css'

function Example(props) {
    var items = [
        {
            image: "../Img/woman-and-shopping-bags-copy-space.jpg",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            image: "../Img/woman-in-yellow-jacket-holding-credit-card-copy-space.jpg",
            description: "Hello World!"
        },
        {
            image: "../Img/front-view-of-woman-with-shopping-bag-concept.jpg",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <div className="carrossel">
                <img src={props.item.image} />
            </div>
        </Paper>
    )
}

export default Example