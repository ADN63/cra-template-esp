import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import { ConfigProvider } from "../provider/ConfigProvider";

const AppRouter = () => (
    <ConfigProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
            </Routes>
        </BrowserRouter>
    </ConfigProvider>
)

export default AppRouter;