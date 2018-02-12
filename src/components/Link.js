import React from 'react'

const Link = (props) => {
    return (
        <a className={props.className} href={props.next}>{props.children}</a>
    )
}

export default Link
