import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const TextArea = ({...rest}) => {
    return (
        <div>
            <TextareaAutosize aria-label="minimum height" rowsMin={10}  {...rest}/>
        </div>
    )
}
export default TextArea
