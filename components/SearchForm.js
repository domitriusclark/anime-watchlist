import {
  InputGroup,
  InputRightElement,
  Input,
  Flex,
  IconButton,
  Icon,
  Box
} from '@chakra-ui/core';

export default function SearchForm({ setAnime, size }) {
  const [search, setSearch] = React.useState();
  const inputRef = React.useRef();

  return (
    <Flex color="black">
      <InputGroup>
        {search && (
          <InputRightElement
            children={
              <Icon
                mb="6px"
                name="small-close"
                cursor="pointer"
                onClick={() => {
                  setAnime(null)
                  setSearch(null)
                  inputRef.current.value = ""
                }} />}
          />
        )}
        <Input ref={inputRef} height="2rem" placeholder="Search Anime..." mr="2px" size={size ? size : "md"} onChange={e => setSearch(e.target.value)} />
      </InputGroup>
      <IconButton icon="search" onClick={() => setAnime(search)} size="sm" />
    </Flex>
  )
}