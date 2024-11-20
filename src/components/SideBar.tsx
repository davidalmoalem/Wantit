import { Box, Flex, VStack, Heading, Link, Icon, useColorModeValue,} from "@chakra-ui/react";
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp,} from "react-icons/fi";
import { FaTshirt, } from "react-icons/fa";
import { PiPantsFill } from "react-icons/pi";
import { GiRunningShoe, GiBilledCap, GiDress,GiUnderwearShorts} from "react-icons/gi";
import { BsSunglasses } from "react-icons/bs";






const SideBar = () => {

  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      
      w="250px" // רוחב התפריט
      p={4}
    >
  
     
      <VStack align="stretch" spacing={4}>
        <Link href="/">
          <Icon as={FiHome} mr={2} />
          דף הבית
        </Link>
        <Link href="/profile">
          <Icon as={FiStar} mr={2} />
          מותגים
        </Link>
        <Link href="/trends">
          <Icon as={FiTrendingUp} mr={2} />
          טרנדים
        </Link>
        <Link href="/inspiration">
          <Icon as={FaTshirt} mr={2} />
          חולצות
        </Link>
        <Link href="/settings">
          <Icon as={PiPantsFill} mr={2} />
          מכנסיים
        </Link>
        <Link href="/settings">
          <Icon as={GiRunningShoe} mr={2} />
          נעליים
        </Link>
        <Link href="/settings">
          <Icon as={GiBilledCap} mr={2} />
           כובעים
        </Link>
        <Link href="/settings">
          <Icon as={GiDress} mr={2} />
           שמלות
        </Link>
        <Link href="/settings">
          <Icon as={BsSunglasses} mr={2} />
           אביזרים
        </Link>
        <Link href="/settings">
          <Icon as={GiUnderwearShorts} mr={2} />
           בגדי ים
        </Link>
      </VStack>
    </Flex>
  );
};

export default SideBar;
