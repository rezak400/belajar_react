import React from 'react'

const TextArea = ({...rest}) => {
    return (
        <div>
            <textarea {...rest} className="w-full h-32 p-3"></textarea>
        </div>
    )
}
export default TextArea
