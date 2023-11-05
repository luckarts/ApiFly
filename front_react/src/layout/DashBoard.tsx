// Chakra imports
import { Heading, Center } from '@chakra-ui/react';

// Custom Chakra theme
export default function Dashboard() {
  return (
    <Center pt={{ base: '250px', md: '250px', xl: '250px' }}>
      <Heading as="h1" size="4xl" /* autres props ici */>
        Welcome
      </Heading>
    </Center>
  );
}
