import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';

function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                <img 
                    src="https://img.icons8.com/fluent/40/000000/linkedin.png"
                    alt=''
                />
            
                <div className="header__search">
                    <SearchIcon />
                    <input type='text'/>
                </div>
            
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title= 'Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title= 'My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title= 'Jobs'/>
                <HeaderOption Icon={MessageIcon} title= 'Messaging' />
                <HeaderOption Icon={NotificationsActiveRoundedIcon} title= 'Notification' />
                <HeaderOption avatar='https://media-exp3.licdn.com/dms/image/C4D03AQFShG9Kk-T50g/profile-displayphoto-shrink_400_400/0/1516916517567?e=1631750400&v=beta&t=jdCNQS8Q_vPO3PjpAt9IJYcGVgesg-9IPjS9Id46olM' title='me' />
            </div>
        </div>
    )
}

export default Header
