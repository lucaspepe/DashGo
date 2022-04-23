import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as="aside"
            w="64"
            mr="8"
        >
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="Bold" color="gray.400" fontSize="Small">GERAL</Text>
                    <Stack spacing="4" align="stretch" mt="8">
                        <Link display="flex" alignItems="center">
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Dashboard</Text>
                        </Link>
                    </Stack>
                    <Stack spacing="4" align="stretch" mt="8">
                        <Link display="flex" alignItems="center">
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Usuários</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="Bold" color="gray.400" fontSize="Small">AUTOMAÇÃO</Text>
                    <Stack spacing="4" align="stretch" mt="8">
                        <Link display="flex" alignItems="center">
                            <Icon as={RiInputMethodLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Formulários</Text>
                        </Link>
                    </Stack>
                    <Stack spacing="4" align="stretch" mt="8">
                        <Link display="flex" alignItems="center">
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>

        </Box>
    )
}