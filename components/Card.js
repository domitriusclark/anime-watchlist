import {
  Box,
  Badge,
  Image,
  IconButton
} from '@chakra-ui/core';

export default function Card({ anime }) {
  const [favorite, setFavorite] = React.useState(false);

  return (
    <Box width="200px" height="auto" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="white">
      <Image objectFit="cover" src={anime.image_url} alt={`${anime.title}`} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            TOP
          </Badge>
        </Box>
        <h6>{anime.title}</h6>
        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            Ep: {anime.episodes}
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            Score: {anime.score}
          </Box>
          <Box as="span" fontSize="lg">
            <IconButton ml="20px" onClick={() => setFavorite(prevState => !prevState)} icon="star" color={favorite ? "gold" : null} />
          </Box>
        </Box>
      </Box>
    </Box >
  );
}

