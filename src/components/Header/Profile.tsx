import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Lucas Carvalho</Text>
                    <Text color="gray.300" fontSize="small">pepejkl@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Lucas Carvalho" src="https://github.com/lucaspepe.png" />
        </Flex>
    )
}