import { usePaginatedQuery } from 'react-query'
import fetch from 'isomorphic-unfetch';

import {
  Flex,
  Heading,
  Spinner,
  IconButton,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Skeleton,
  Stack
} from "@chakra-ui/core";
import Card from './Card';

export default function PagedCardList() {
  const [page, setPage] = React.useState(1);

  const {
    status,
    resolvedData,
    error,
    isFetching
  } = usePaginatedQuery([`TopAnimeList#page-${page}`, page], async () => {
    const list = await fetch(`https://api.jikan.moe/v3/top/anime/${page}`);
    return list.json();
  })

  if (status === "loading") return <Spinner size="xl" />

  if (status === "error") return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon size="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        There was an error!
    </AlertTitle>
      <AlertDescription maxWidth="sm">
        {error.message}
      </AlertDescription>
    </Alert>
  );

  const properties = {
    height: "40px",
    my: "10px"
  }

  return (
    <Flex flexDirection="column" alignItems="center" m="8px">
      <Heading>Top Anime</Heading>
      {
        isFetching
          ? (
            <Stack>
              {Array(5).map(s => <Skeleton {...properties} />)}
            </Stack>
          )
          : (
            <>
              <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center">
                {resolvedData.top.map(anime => <Card key={anime.mal_id} anime={anime} />)}
              </Flex>
              <Flex justifyContent="space-between">
                <IconButton disabled={page === 1} onClick={() => setPage(prevState => Math.max(prevState - 1, 0))} icon="arrow-back" />
                <IconButton onClick={() => setPage(prevState => prevState + 1)} icon="arrow-forward" />
              </Flex>
            </>
          )
      }

    </Flex>
  )
};