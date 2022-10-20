import React from 'react'

const Tag = ({ children, size = 'medium', color = 'blue', className = '' }) => {
    return (
        <span className={`react-tag ${className} ${size} ${color}`}>{children}</span>
    )
}

const TagComponent = () => {
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

export default TagComponent;
