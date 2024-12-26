import { Box, Text, VStack} from "@chakra-ui/react";

export default function AboutContact(){
    return(
        <Box p={6}>
            <VStack spacing={4} align="start">
                <Text fontSize="xl" fontWeight="bold">
                    サークル紹介
                </Text>
                <Text>
                    映画研究会は、映画制作や上映会を通じて映画文化を発展させることを目的としています。
                </Text>
                <Text mt={4}>
                    詳細は、以下のSNSリンクからご確認ください。
                </Text>
                <Text>
                    <ul>
                        <li><a href="https://x.com/cinema_josui?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">X:https://x.com/cinema_josui?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor</a></li>
                        <li><a href="https://www.instagram.com/cinema_josui/">Instagram:https://www.instagram.com/cinema_josui/</a></li>
                        <li><a href="https://www.youtube.com/channel/UCmCpZ6Pk-1dYJ268HoKBq5A">YouTube:https://www.youtube.com/channel/UCmCpZ6Pk-1dYJ268HoKBq5A</a></li>
                    </ul>
                </Text>
            </VStack>
        </Box>
    );
};