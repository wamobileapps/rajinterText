import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { color } from "./theme";



export const Styles = StyleSheet.create({
  tt16SB: {
    color: color.textgrey,
    fontFamily: "Biennale-SemiBold",
    fontSize: 16,
  },
  tt18SB: {
    color: color.white,
    fontFamily: "Biennale-SemiBold",
    fontSize: 18,
  },
});
