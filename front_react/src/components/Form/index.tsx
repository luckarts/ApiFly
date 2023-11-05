import recursiveFields from 'components/Form/recursiveFields';
import { Typography } from 'src/components';
//import ReCAPTCHA from 'react-google-recaptcha';
//import Notification from '../../contexts/Notification/index';
import { useCustomForm } from 'src/contexts';
import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Box, Button } from '@chakra-ui/react';
import { MdFitnessCenter } from 'react-icons/md';
export default function Form() {
  const { defaultValue, handleSubmit, onSubmit: contextOnSubmit, title, fields, addFields } = useCustomForm();

  return (
    <>
      {title && (
        <Typography variante={'h1'} className="text-left mb-4">
          {title}
        </Typography>
      )}
      <form onSubmit={handleSubmit(contextOnSubmit)} className="">
        <Flex alignItems={'center'}>
          {recursiveFields(defaultValue ? defaultValue : {}, fields)}
          <Box p={2}>
            <Button type="submit">
              <SearchIcon color={'gray.700'} w="15px" h="15px" />
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
}
