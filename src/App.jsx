import { Routes, Route } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import Home from "./pages/Home";
import AboutContact from "./pages/AboutContact";
import Films from "./pages/Films";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App(){
    return (
        <>
            <Header />
            <VStack spacing={4} align="stretch" minH="100vh">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-contact" element={<AboutContact />} />
                    <Route path="/films" element={<Films />} />
                </Routes>
            </VStack>
            <Footer />
        </>
    );
}