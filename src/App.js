import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";

// 共用components
import Nav from "./components/Nav";
import ScrollthemeContext, { themes } from "./components/ScrollthemeContext";

// 頁面
import MainPage from "./pages/MainPage/MainPage";
import Banner from "./pages/Banner/Banner";
import Illustration from "./pages/Illustration/Illustration";
import AnimeBear from "./pages/AnimeBear/AnimeBear";
import AnimeSocks from "./pages/AnimeSocks/AnimeSocks";
import IllustArch from "./pages/IllustArch/IllustArch";
import IllustFood from "./pages/IllustFood/IllustFood";
import IllustBear from "./pages/IllustBear/IllustBear";
import IllustPea from "./pages/IllustPea/IllustPea";
import IllustDigital from "./pages/IllustDigital/IllustDigital";
import IllustCharacter from "./pages/IllustCharacter/IllustCharacter";
import LandingPage from "./pages/LandingPage/LandingPage";
import WebDesign from "./pages/WebDesign/WebDesign";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <ScrollthemeContext.Provider value={themes}>
                <Routes>
                    {/* 路由列表 */}
                    {/* =========================== */}

                    {/* home路由 */}
                    <Route path="/portfolio" element={<MainPage />} />

                    {/* banner路由 */}
                    <Route path="/portfolio/banner" element={<Banner />} />

                    {/* animebear路由 */}
                    <Route
                        path="/portfolio/animebear"
                        element={<AnimeBear />}
                    />

                    {/* animesocks路由 */}
                    <Route
                        path="/portfolio/animesocks"
                        element={<AnimeSocks />}
                    />

                    {/* illustration路由 */}
                    <Route
                        path="/portfolio/illustration"
                        element={<Illustration />}
                    />

                    {/* illustarch路由 */}
                    <Route
                        path="/portfolio/illustarch"
                        element={<IllustArch />}
                    />

                    {/* illustfood路由 */}
                    <Route
                        path="/portfolio/illustfood"
                        element={<IllustFood />}
                    />

                    {/* illustcharacter路由 */}
                    <Route
                        path="/portfolio/illustcharacter"
                        element={<IllustCharacter />}
                    />

                    {/* illustbear路由 */}
                    <Route
                        path="/portfolio/illustbear"
                        element={<IllustBear />}
                    />

                    {/* illustpea路由 */}
                    <Route
                        path="/portfolio/illustpea"
                        element={<IllustPea />}
                    />

                    {/* illustdigital路由 */}
                    <Route
                        path="/portfolio/illustdigital"
                        element={<IllustDigital />}
                    />

                    {/* landingpage路由 */}
                    <Route
                        path="/portfolio/landingpage"
                        element={<LandingPage />}
                    />

                    {/* webdesign路由 */}
                    <Route
                        path="/portfolio/webdesign"
                        element={<WebDesign />}
                    />
                </Routes>
            </ScrollthemeContext.Provider>
        </BrowserRouter>
    );
}

export default App;
