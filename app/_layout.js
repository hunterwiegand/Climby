import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//By default, routes fill the entire screen. Moving between them is a full-page transition with no animation. 
//In native apps, users expect shared elements like headers and tab bars to persist between pages. These are created using layout routes.
//https://docs.expo.dev/routing/layouts/

//SplashScreen.preventAutoHideAsync();

const Layout = () => {
    return <Stack />
}

export default Layout;