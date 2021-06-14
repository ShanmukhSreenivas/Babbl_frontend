import React, { useContext } from 'react'
import * as Icon from '../components/icons'

import { UserContext } from '../context/UserContext'

export const MENU = () => {

  const { user } = useContext(UserContext)

  return [
    /*{
      key: 'babbl',
      path: '/',
      icon: <Icon.Twitter style={{ fontSize: 30 }} />,
      iconSelected: <Icon.Twitter style={{ fontSize: 30 }} />,
      title: '',
      notify: 0
    },*/
    {
      key: 'home',
      path: '/',
      icon: <Icon.Home />,
      iconSelected: <Icon.HomeFill />,
      title: 'Home',
      notify: 0
    },
    {
      key: 'explore',
      path: '/explore',
      icon: <Icon.Explore />,
      iconSelected: <Icon.ExplorerFill />,
      title: 'Explore',
      notify: 0
    },
    {
      key: 'lists',
      path: '/lists',
      icon: <Icon.Lists />,
      iconSelected: <Icon.ListsFill />,
      title: 'Lists',
      notify: 0
    },
    {
      key: 'profile',
      path: `/${user.username}`,
      icon: <Icon.Profile />,
      iconSelected: <Icon.ProfileFill />,
      title: 'Profile',
      notify: 0
    },
    {
      key: 'more',
      path: '/more',
      icon: <Icon.More />,
      iconSelected: <Icon.More />,
      title: 'Theme',
      notify: 0
    }
  ]
}

export default {
  MOBILE_SIZE: 500,
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}
