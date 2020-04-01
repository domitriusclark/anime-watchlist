import { useQuery } from 'react-query';
import fetch from 'isomorphic-unfetch';

import Navbar from '../components/Navbar';
import PagedCardList from '../components/PagedAnimeList';
import Card from '../components/Card';

import {
  Box,
  Flex,
  Spinner
} from '@chakra-ui/core';


export default function () {
  const [anime, setAnime] = React.useState();

  const { data, status } = useQuery(anime && [`Anime#${anime}`, anime], async (key, anime) => {
    const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}&limit=16`);

    return res.json();
  })

  if (status === "loading") return <Spinner size="xl" />

  return (
    <Box backgroundColor="#434555">
      <Flex width="100vw" height="auto" flexDirection="column">
        <Navbar setAnime={setAnime} />
        {
          anime ? (
            <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center">
              {data.results.map(anime => <Card key={anime.mal_id} anime={anime} />)}
            </Flex>
          ) : <PagedCardList />
        }

      </Flex>
    </Box>
  )
}