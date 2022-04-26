import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  SectionList,
} from "react-native";
import  { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { color } from "./components/theme";
import { PaddingBox, VerticalBox } from "./components/AlignComponent";
import Button from "./components/Button";
import { Styles } from "./components/fonts";

export default function App() {
  useFonts({
    "Biennale-SemiBold": require("./assets/fonts/Biennale-SemiBold.otf"),
    "Biennale-Medium": require("./assets/fonts/Biennale-Medium.otf"),
  });
  const [number, setnumber] = useState(0);
  const [search, setsearch] = useState("");
  const DATA = [
    {
      title: "Food",
      data: [
        {name:"Bananas", type:"Grocery Ape", qty:"2", li:"kg"},
        {name:"Sugar", type:"Candy shop", qty:"0,5", li:"kg"},
        {name:"Tuna", type:"Temple of the catch", qty:"155", li:"kg"},
      ],
    },
    {
      title: "Technology",
      data: [
        {name:"Polystation", type:"Stairsmart", qty:"300", li:"Qt"},
       
      ],
    },
  ];

  const onClickHandle = () => {
      setnumber(number+1)

  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.white} translucent={false} />
      <ScrollView>
        <View style={styles.innerView}>
          <PaddingBox style={10} />
          <Text style={styles.tt16SB}>Click test</Text>
          <PaddingBox style={10} />
          <Button
            name={"Click me"}
            backgroundColor={color.primary}
            onClickHandle={onClickHandle}
          />
          <PaddingBox style={10} />
          <View style={styles.boxNUmber}>
            <Image
              source={require("./assets/user.png")}
              style={styles.imageStyles}
            />
            <VerticalBox style={4} />
            <View>
              <Text style={styles.tt13M}>Number of button clicks</Text>
              <PaddingBox style={5} />
              <Text style={styles.tt13ML}>{number}</Text>
            </View>
          </View>
          <PaddingBox style={20} />
          <Text style={styles.tt16SB}>Search test</Text>
          <PaddingBox style={10} />
          <View style={styles.searchContainer}>
            <Image
              source={require("./assets/search.png")}
              style={styles.searchStyle}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={color.light}
              style={styles.inputStyles}
              value={search}
              onChangeText={(text)=>setsearch(text)}
            />
          </View>
          <PaddingBox style={15} />
          <View style={styles.boxNUmber}>
            <Image
              source={require("./assets/user.png")}
              style={styles.imageStyles}
            />
            <VerticalBox style={4} />
            <View>
              <Text style={styles.tt13M}>Searched text</Text>
              <PaddingBox style={5} />
              <Text style={styles.tt13ML}>{search ? search : "text"}</Text>
            </View>
          </View>
          <PaddingBox style={20} />
          <Text style={styles.tt16SB}>Messages test</Text>
          <PaddingBox style={10} />
          <View style={styles.messageContainer}>
            <View style={styles.innerMess}>
              <View style={styles.textLeft}>
                <Text style={styles.tt13SB}>
                  This is an empty state, to be used for messages and/or blog
                  articles.
                </Text>
                <PaddingBox style={10} />
                <Text style={styles.tt13M}>
                  Four lines to describe the message/article to be highlighted.
                  The text is accompanied by an illustration in the top
                  right-hand corner.
                </Text>
              </View>
              <Image
                source={require("./assets/mess.png")}
                style={styles.sideStyle}
              />
            </View>
            <PaddingBox style={10} />
            <View style={styles.bottomMessgeView}>
              <Text style={styles.notStyles}>Not now</Text>
              <Button
                name={"See message"}
                backgroundColor={color.secondary}
                onClickHandle={onClickHandle}
              />
            </View>
          </View>

          <PaddingBox style={20} />
          <Text style={styles.tt16SB}>List test</Text>
          <PaddingBox style={10} />
          <View style={styles.listContaienr}>
            <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <View style={styles.boxNUmber1}>
                  <Image
                    source={require("./assets/user.png")}
                    style={styles.imageStyles}
                  />
                  <VerticalBox style={4} />
                  <View>
                    <View style={styles.innerText}>
                      <Text style={styles.tt13M}>{item.name}</Text>
                    </View>
                    <PaddingBox style={5} />
                    <Text style={styles.tt13ML}>{item.type}</Text>
                  </View>
                  <Text style={styles.tt13B}>{item.qty}<Text style={{color:color.light}}>{` `}{item.li}</Text></Text>
                 
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.tt13M}>{title}</Text>
              )}
            />
          </View>
          <PaddingBox style={50} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  innerText:{
    flexDirection:"row",
    justifyContent:"space-between",
    // backgroundColor:color.black,
    // width:"70%"
  },
  tt16SB: {
    color: color.textgrey,
    fontFamily: "Biennale-SemiBold",
    fontSize: 16,
  },
  listContaienr: {
    width: "100%",
    elevation: 1,
    padding: 15,
    backgroundColor: color.white,
    borderRadius: 8,
  },
  notStyles: {
    paddingHorizontal: 20,
    color: color.secondary,
    fontFamily: "Biennale-SemiBold",
  },
  bottomMessgeView: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  textLeft: {
    width: "65%",
  },
  innerMess: {
    flexDirection: "row",
  },
  sideStyle: {
    width: 100,
    height: 100,
  },
  messageContainer: {
    width: "100%",
    backgroundColor: color.green,
    borderRadius: 8,
    padding: 15,
  },
  inputStyles: {
    paddingHorizontal: 10,
  },
  tt13SB: {
    color: color.light,
    fontFamily: "Biennale-SemiBold",
    fontSize: 13,
  },
 
  searchContainer: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    elevation: 1,
    backgroundColor: color.white,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  searchStyle: {
    width: 20,
    height: 20,
  },
  tt13M: {
    fontSize: 13,
    color: color.textgrey,
    fontFamily: "Biennale-Medium",
  },
  tt13B: {
    fontSize: 13,
    color: color.textgrey,
    fontFamily: "Biennale-SemiBold",
    position:"absolute",
    right:0,
    marginTop:15
  },
  tt13ML: {
    fontSize: 13,
    color: color.light,
    fontFamily: "Biennale-Medium",
  },
  imageStyles: {
    width: 40,
    height: 40,
  },
  boxNUmber: {
    width: "100%",
    elevation: 1,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: color.white,
    marginBottom: 5,
    flexDirection: "row",
  },
  boxNUmber1: {
    width: "100%",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 0,
    backgroundColor: color.white,
    flexDirection: "row",
    // borderBottomWidth:1
  },
  tt18SB: {
    color: color.white,
    fontFamily: "Biennale-SemiBold",
    fontSize: 18,
  },
  innerView: {
    marginHorizontal: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
