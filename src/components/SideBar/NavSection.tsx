import { Box, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
    return (
        <Box>
            <Text fontWeight="Bold" color="gray.400" fontSize="Small">{title}</Text>
            <Stack spacing="4" align="stretch" mt="8">
                {children}
            </Stack>
        </Box>
    )
}