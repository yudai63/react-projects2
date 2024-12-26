import { Box, Text } from "@chakra-ui/react";

export default function Films(){
    return (
        <Box p={6}>
            <Text fontSize="xl" fontWeight="bold">
                製作映画一覧
            </Text>
            <Text mt={4}>
                映画研究会がこれまでに制作した映画をご紹介します。
            </Text>
            {/* ここに映画リストやCRUD機能を追加予定 */}
        </Box>
    );
};