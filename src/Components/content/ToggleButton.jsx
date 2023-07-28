import {memo} from 'react'
const  ToggleButton = () => {
    return (
        <label className="toggle-btn">
            <input type="checkbox"/>
            <span className="slider"></span>
        </label>
    )
}

export default memo(ToggleButton)