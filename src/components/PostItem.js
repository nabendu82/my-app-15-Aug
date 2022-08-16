import React from 'react'
import './PostItem.css'
import styled from 'styled-components'

const headerStyle = {
    fontSize: '22px',
    backgroundColor: 'yellow',
    padding: '5px'
}

const StyledPara = styled.p`
    text-align: center;
    color: purple;
`

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={headerStyle}>ID: {post.id}</h1>
            <h3 style={{ backgroundColor: 'lightgreen', padding: '5px'}}>Title: {post.title}</h3>
            <StyledPara>{post.body}</StyledPara>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem