import React, { useContext, useState } from 'react'
import { useHistory, useLocation as locations } from "react-router-dom";

import './Sidebar.css'

import Navigation from '../Navigation/Navigation'
import ThemeButton from '../ThemeButton/ThemeButton'
import ProfileBox from '../ProfileBox/ProfileBox'
import Menu from '../Menu/Menu'
import SearchBox from '../SearchBox/SearchBox'
import { Tweet } from '../icons'
import FollowSuggestion from '../FollowSuggestion'

import { UserContext } from "../../context/UserContext";
import { FeedContext } from '../../context/FeedContext'


function Sidebar({ flat }) {

    const { setUser, user } = useContext(UserContext);
    const history = useHistory()
    let router = locations();

    const { whoFollow, tags } = useContext(FeedContext);

    const [searchText, setSearchText] = useState("");


    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    const handleAddSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            history.push(`/${searchText}`)
            setSearchText('')
        }
    }


    return (
        <div className="sidebar">
            <SearchBox onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                onKeyPress={handleAddSearch}
    className="layout-explore--search" />

            <Navigation flat={flat} />

            {/*<div className="sidebar__tweet">
                <ThemeButton href='/' primary size="large" full={!flat} >
                    {flat ? <Tweet /> : 'Babble'}
                </ThemeButton>
    </div>*/}


            <div className="sidebar__profile">
                <Menu
                    title={<ProfileBox flat={flat} user={user} />}
                >
                    <FollowSuggestion icon={false} user={user} />
                    <span onClick={handleLogout}>Log out</span>
                </Menu>
            </div>
        </div>
    )
}

export default Sidebar
