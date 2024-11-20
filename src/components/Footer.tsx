import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react'
import { TbCaptureFilled } from "react-icons/tb";


const Footer = () => {
  return (
    <HStack justifyContent={"center"} >
    <Text>Scan Here!</Text>
    <TbCaptureFilled />
    </HStack>
  )
}

export default Footer