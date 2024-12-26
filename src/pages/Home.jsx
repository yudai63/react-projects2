import { Box, Text } from "@chakra-ui/react";

export default function Home(){
    return (
        <Box p={6}>
            <Text fontSize="2xl" fontWeight="bold">
                映画研究会へようこそ
            </Text>
            <Text mt={4}>
            私たちは映画を愛し、創造し、共有することを目指す大学の映画サークルです。
            </Text>
        </Box>
    );
};