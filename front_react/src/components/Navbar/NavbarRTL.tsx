// Chakra Imports
import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import AdminNavbarLinks from 'components/Navbar/NavbarLinksAdmin';
import { WrapperSearch } from './searchBar/WrapperSearch';

export default function AdminNavbar({ logoText, fixed, onOpen }: any) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  });

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = useColorModeValue('navy.700', 'white');
  let secondaryText = useColorModeValue('gray.700', 'white');
  let navbarPosition = 'fixed';
  let navbarFilter = 'none';
  let navbarBackdrop = 'blur(20px)';
  let navbarShadow = 'none';
  let navbarBg = useColorModeValue('rgba(244, 247, 254, 0.2)', 'rgba(11,20,55,0.5)');
  let navbarBorder = 'transparent';
  let secondaryMargin = '0px';
  let paddingX = '15px';
  let gap = '0px';
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: 'center' }}
      display={'flex'}
      minH="75px"
      zIndex={3}
      justifyContent="space-between"
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      left={{ base: '12px', md: '30px', lg: '30px', xl: '30px' }}
      px={{
        sm: paddingX,
        md: '10px'
      }}
      ps={{
        xl: '12px'
      }}
      pt="8px"
      top={{ base: '12px', md: '16px', xl: '18px' }}
      maxWidth={{ base: '1280px' }}
      w={{
        base: '100vw',
        md: 'calc(100vw - 0%)',
        lg: 'calc(100vw - 0%)',
        xl: 'calc(100vw - 0px)',
        '2xl': 'calc(100vw - 0px)'
      }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: 'column',
          md: 'row'
        }}
        alignItems={{ xl: 'center' }}
        mb={gap}
      >
        <Box mb={{ sm: '8px', md: '0px' }}>
          {/* Here we create navbar brand, based on route name */}
          <Link
            color={mainText}
            href="#"
            bg="inherit"
            borderRadius="inherit"
            fontWeight="bold"
            fontSize="34px"
            _hover={{ color: { mainText } }}
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent'
            }}
            _focus={{
              boxShadow: 'none'
            }}
          >
            {/* <Image src={"/img/logo8.png"} w='40px' h='40px' /> */}
            {logoText}
          </Link>
        </Box>
      </Flex>
      <Flex
        w={{ sm: '100%', md: 'auto' }}
        alignItems="center"
        flexDirection="row"
        flexWrap={'unset'}
        p="10px"
        borderRadius="30px"
      ></Flex>
      <Box w={{ sm: '100%', md: 'auto' }}>
        <AdminNavbarLinks onOpen={onOpen} logoText={logoText} fixed={fixed} scrolled={scrolled} />
      </Box>
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func
};
