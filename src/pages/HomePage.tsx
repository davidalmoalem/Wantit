import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <>
    <Grid gridTemplate={`"navbar navbar" 
                          "sidebar body"
                          "footer footer"`}
      h="100vh"
      gridTemplateRows={'65px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}>
          <GridItem area={"navbar"}>
            <NavBar/>
          </GridItem>
          <GridItem area={"sidebar"} backgroundColor={"white , grey.800"}>
            <SideBar/>

          </GridItem>
          <GridItem area={"body"} backgroundColor={"yellow"}>

          </GridItem>
          <GridItem area={"footer"} backgroundColor={"green"}>
            <Footer/>

          </GridItem>
      </Grid>
    </>
  )
}

export default HomePage