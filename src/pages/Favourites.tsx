import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

var Styles: any = require("../styles/lists");
var Common: any = require("../styles/common");

const Favourites = () => {
    let favItems = useSelector((state: RootState) => {
        return state.favourites;
    });
    return (
        <View style={Common.container}>
            <Text style={Common.pageTitle}>Favourites</Text>
            {!!favItems.length && (
                <ScrollView>
                    {favItems.map(({ images, brand, price }) => (
                        <View style={Styles.container}>
                            <Image source={{ uri: images[0] }} style={Styles.image} resizeMode="contain" />
                            <View>
                                <Text style={Styles.productName}>{`${brand}\n`}</Text>
                                <Text style={Styles.productPrice}>{`$${price.toString().replace(".", ",")}`}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            )}
            {!favItems.length && (
                <Text style={Common.emptyContent}>Favourites is empty!</Text>
            )}
        </View>
    );
};

export { Favourites };
