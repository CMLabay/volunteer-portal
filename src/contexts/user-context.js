import React from 'react'

const UserContext = React.createContext({
    userId:'',
    name:'',
    credits:0,
    updateFlag: true,
    setUser: () => {},
    setUpdateFlag: () => {},
    updateCredits: () => {},
})

export default UserContext