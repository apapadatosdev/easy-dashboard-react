import React from "react";


export default function EZLabel(props) {

    const renderIcon = (options) => {
        if(options){
            if(options.font_awesome) {
                return <i className={options.font_awesome}></i>
            }
            else if(options.material_icon) {
                return <i class="material-icons">{options.material_icon}</i>
            }
            else {
                return options
            }
        }
    }

    return (
        <>            
            {renderIcon(props.pre)}            
            {props.text} 
            {renderIcon(props.post)}
        </>
    )
}