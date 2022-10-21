import React from 'react'


const Popup = () => {
    return (
        <div style={{ display: 'inline-grid'}}>
            <p>Sizes</p>
            <Tag size="small" color="blue">Hello - Small size</Tag>
            <Tag size="medium" color="yellow">Hello - Medium size</Tag>
            <Tag size="large" color="yellow">Hello - Large size</Tag>

            <p>Colours</p>
            <Tag size="small" color="blue">Hello - Small size</Tag>
            <Tag size="medium" color="yellow">Hello - Medium size</Tag>
        </div>
    )
}

export default Popup;
