import React from 'react'
import Banner from './Banner'
import NavBar from './NavBar'
import RawPost from './RowPost';
import { Orginals,action } from './URL';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RawPost url={Orginals} title="Netflix Orginals" />
      <RawPost url={action} title="Actions" isSmall/>
     </div>
  )
}

export default App