import { Box, Button, Heading, HStack, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons'; // Import the SearchIcon

import React from 'react';
import Menuim from './Menuim';

const NavBar = () => {
  return (
    <HStack height="100%" justifyContent={"space-between"} alignItems={"center"} px={"50px"} pt={1}> {/* Setting an explicit height for HStack */}
      <Box h="100%" w="100px" display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box>
          <Menuim menuType='profile'/>
          </Box>
          <Heading fontSize={"x-large"}>David39</Heading>
      </Box> {/* Set height to 'full' (inherits from parent) */}
      <Box w="100%" px={8}>  
      <InputGroup>
      <InputRightElement pointerEvents='none'>
        <SearchIcon color='gray.300' />
      </InputRightElement>
      <Input type='text' placeholder='Search here' />
    </InputGroup>
    </Box>
    <Box h="100%" w="200px">
      <Menuim menuType='helpMenu'/>
    </Box>
    </HStack>
  );
};

export default NavBar;
