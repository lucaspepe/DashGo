import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContext = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContext);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const { onClose } = disclosure
    const router = useRouter()

    useEffect(() => {
        onClose()
    }, [onClose, router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)