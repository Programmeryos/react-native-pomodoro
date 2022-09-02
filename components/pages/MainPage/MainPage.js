import React from "react";

import { Text, View } from "react-native";

const MainPage = ({route}) => {

    return(
        <View>
            <Text>Hello</Text>
            <Text>{route.params.name}</Text>
            <Text>{route.params.email}</Text>
            <Text>{route.params.password}</Text>
        </View>
    )
}

export default MainPage;