import { StyleSheet, View, Text } from "react-native";
import { getUser } from "./api";

const user = getUser({ email: 'email@email.com' })

export default function Profile() {
  return (
    <>
    <View style={styles.page}>
        <Text style={{ fontFamily: 'LeagueSpartan-Black', fontSize: 24, fontWeight: '900' }}>
          {user}
        </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  }
})