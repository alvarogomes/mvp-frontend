import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { ReactElement } from 'react';
interface FooterProps {}

export default function Footer({}: FooterProps): ReactElement {
    return (
        <Box as="footer" bottom="0.5" my="4">
            <Box ml="40">
                <Button color="primary" bg="none">
                    Terms&Conditions
                </Button>
                <span>|</span>
                <Button color="primary" bg="none">
                    Privacy policy
                </Button>
            </Box>
        </Box>
    );
}
