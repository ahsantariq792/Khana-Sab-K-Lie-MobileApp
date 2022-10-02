import React from "react";
import { Stack, Alert, IconButton, HStack, VStack, CloseIcon, Text, Center, NativeBaseProvider } from "native-base";

function Example() {
  return <Stack space={3} w="90%" maxW="400">
    <Alert w="100%" status="warning">
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <Alert.Icon mt="1" />
            <Text fontSize="md" color="coolGray.800">
              Invalid User Name or Password
            </Text>
          </HStack>
          <IconButton variant="unstyled" _focus={{
            borderWidth: 0
          }} icon={<CloseIcon size="3" />} _icon={{
            color: "coolGray.600"
          }} />
        </HStack>
      </VStack>
    </Alert>;
  </Stack>
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
