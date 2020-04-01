import Link from 'next/link';

import SearchForm from './SearchForm';
import {
  Box,
  Flex
} from '@chakra-ui/core';

import { FaHome } from 'react-icons/fa'

export default function Navbar({ setAnime }) {
  return (
    <Box width="100%" height="50px" backgroundColor="#908BEB" color="white">
      <Flex mt="8px" mr="4px" width="auto" alignItems="center" justifyContent="space-between">
        <Link href="/" passHref>
          <Box onClick={() =>setAnime(null)} as={FaHome} size="32px" cursor="pointer" border="2px solid black" borderRadius="4px" ml="8px" p="4px"/>
        </Link>
        <SearchForm setAnime={setAnime} size="sm" alignSelf="flex-end" />
      </Flex>
    </Box>
  )
}