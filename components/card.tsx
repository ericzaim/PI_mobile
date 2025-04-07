import React from "react";
import { View, Text, FlatList, Dimensions, StyleSheet, StyleProp, ViewStyle } from "react-native";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", title: "Página 1" },
  { id: "2", title: "Página 2" },
  { id: "3", title: "Página 3" },
];

interface CardProps{
  style?:StyleProp<ViewStyle>;
}

const Card = ({style}:CardProps) => {
  return (
    <FlatList
      data={data}
      style={[styles.card,style]}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.page}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  page: {
    width: width,
    height: '50%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
  card:{
  }
});

export default Card;
