import React from 'react'
import 'react-native-gesture-handler';
import MainNavigation from './src/navigation/mainNavigation'

const App = () => {
  global.foo = {uri : 'https://images.unsplash.com/photo-1556861460-7d38b2955d05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80'}
  return(
    <MainNavigation>
      
    </MainNavigation>
  )
}
export default App;