import { Flex, Heading } from "@chakra-ui/core"

// Setup a base example for using Chakra
export default () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading size="2xl">Hello there</Heading>
      <p>welcome to my app</p>
    </Flex>
  )
}