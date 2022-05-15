import counterpage from "../pages/counterpage";
import homepage from "../pages/homepage";
import { IRoute } from "./interfaces/index";


const routes: IRoute[] = [
    {
        path: "/",
        name: "Home",
        component: homepage,
        exact: true,
    },
    {
        path: "/counterpage",
        name: "About",
        component: counterpage,
    }

]


export default routes;