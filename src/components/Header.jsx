import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Header(){
    return (
        <Box bg="blue.600" p={4} color="white">
            <Flex alignItems="center">
                <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
                    映画研究会
                </Link>
                <Spacer />
                <Link as={RouterLink} to="/about-contact" ml={4}>
                    サークル紹介
                </Link>
                <Link as={RouterLink} to="/films" ml={4}>
                    製作映画
                </Link>
            </Flex>
        </Box>
    );
};