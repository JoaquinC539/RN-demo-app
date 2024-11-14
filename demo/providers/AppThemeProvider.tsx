import { darkColors, darkTheme, lightColors, lightTheme } from "@/constants/AppTheme";
import { createContext, FC, ReactNode, useContext } from "react"
import { useColorScheme } from "react-native"

const ThemeContext = createContext({
    theme: lightTheme,
    themeColors: lightColors
})
export const AppThemeProvider: FC<{children:ReactNode}> = ({children}) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "light" ? lightTheme : darkTheme;
    const themeColors = colorScheme === "dark" ? lightColors : darkColors;
    return (
        <ThemeContext.Provider value={{theme:theme,themeColors:themeColors}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme=()=>{
   const context=useContext(ThemeContext);
   if(context===undefined){
    throw new Error("useTheme must be used witin a ThemeProvider");
   }
   return context; 
}