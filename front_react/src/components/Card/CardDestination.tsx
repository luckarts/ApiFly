import { AvatarGroup, Avatar, Box, Button, Flex, Icon, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { Card } from 'src/components/Card/Card';
import { useState, useEffect } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { ShortDateTransform } from 'utils/utils';
export function CardDestination(props) {
  const { departure_airport, arrival_airport, departure_time, price } = props;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorBid = useColorModeValue('brand.500', 'white');

  /*
"id": 11,
"flight_code": "0000",
"airline": {
"id": 3,
"name": "Asiana Airlines",
"code_oaci": "AAR",
"code_iata": "OZ",
"logo": null,
"created_at": "2023-10-15T17:39:40.000000Z",
"updated_at": "2023-10-15T17:39:40.000000Z"
},
"departure_airport": {
"id": 3423,
"name": "Aérodrome d'Anaa",
"code_iata": "AAA",
"code_oaci": "NTGA",
"city_id": 1,
"country_id": 60,
"created_at": "2023-10-15T17:37:06.000000Z",
"updated_at": "2023-10-15T17:37:06.000000Z"
},
"arrival_airport": {
"id": 3476,

  */
  return (
    <Card p="0px">
      <Flex direction={{ base: 'column' }} justify="center">
        <Box mb={{ base: '0px', '2xl': '20px' }} position="relative">
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: 'whiteAlpha.900' }}
            _active={{ bg: 'white' }}
            _focus={{ bg: 'white' }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              setLike(!like);
            }}
          >
            <Icon transition="0.2s linear" w="20px" h="20px" as={like ? IoHeart : IoHeartOutline} color="brand.500" />
          </Button>
        </Box>
        <Flex flexDirection="column" p={'20px'} justify="space-between" h="100%">
          <Flex
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row'
            }}
            mb="auto"
          >
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize={{
                  base: 'xl',
                  md: 'lg',
                  lg: 'lg',
                  xl: 'lg',
                  '2xl': 'md',
                  '3xl': 'lg'
                }}
                mb="5px"
                fontWeight="bold"
                me="14px"
              >
                {departure_airport?.city?.name} - {arrival_airport?.city?.name} ({arrival_airport?.country?.name})
              </Text>
              <Text
                color="secondaryGray.600"
                fontSize={{
                  base: 'sm'
                }}
                fontWeight="400"
                me="14px"
              >
                {arrival_airport?.city?.name}
              </Text>
              <Text>{ShortDateTransform(departure_time)}</Text>
              <Text>{'à partir de ' + price + '€'}</Text>
            </Flex>
          </Flex>
          <Flex
            align="start"
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row'
            }}
            mt="25px"
          >
            <Link
              href={'dowload'}
              mt={{
                base: '0px',
                md: '10px',
                lg: '0px',
                xl: '10px',
                '2xl': '0px'
              }}
            ></Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
