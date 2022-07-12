import React from "react";


export default function EZLabel(props) {
    return (
        <>
            {(props.pre && props.pre.font_awesome) && (
                <i className={props.pre.font_awesome}></i> 
                // <i class="fa-solid fa-user"></i> 
            )}
            {(props.pre && props.pre.material_icon) && (
                <i class="material-icons">{props.pre.material_icon}</i>
                // <i class="material-icons">settings</i>
            )}
            {props.text} 
            {(props.post && props.post.font_awesome) && (
                <i className={props.post.font_awesome}></i> 
                // <i class="fa-solid fa-user"></i> 
            )}            
            {(props.post && props.post.material_icon) && (                
                <i class="material-icons">{props.post.material_icon}</i>
                // <i class="material-icons">settings</i>
            )}
        </>
    )
}