import React from 'react'
import './HeaderOption.css'
import Avatar from '@material-ui/core/Avatar'

function HeaderOption({avatar, Icon, title}) {
    return <div className='headerOption'>
{/* if I pass an Icon then it should only render if the Icon is there */}
        {Icon && <Icon className='headerOption__icon' />}
        {avatar && <Avatar className='headerOption__icon' src={avatar} />} 
        
        <h3 className='headerOption__title'>{title}</h3>   
    </div>
    
}

export default HeaderOption
