import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

interface Props {
  menuType: "profile" | "helpMenu"
}

const Menuim = ({menuType}:Props) => {
  return (
    <>
    {
      menuType === "profile" ?  <Menu>
      <MenuButton
        as={Button} bg={"skyblue"} w={"50px"} h={"50px"} borderRadius={"100%"} mr={2}
      >
      </MenuButton>
      <MenuList>
        <MenuItem>פרופיל</MenuItem>
        <MenuItem>הגדרות</MenuItem>
        <MenuItem>עזרה</MenuItem>
        <MenuItem>אודות</MenuItem>
      </MenuList>
    </Menu> : <Menu>
        <MenuButton
          as={Button}
          rightIcon={<HamburgerIcon />} // Add the icon
          width="50px" // Set a fixed width
          height="50px" // Set the same height for a square
          pl={0}
        >
          {/* No text needed here */}
        </MenuButton>
        <MenuList>

          <MenuItem>הגדרות</MenuItem>
          <MenuItem>עזרה</MenuItem>
          <MenuItem>אודות</MenuItem>
        </MenuList>
      </Menu>
    }
    </>
  )
}

export default Menuim