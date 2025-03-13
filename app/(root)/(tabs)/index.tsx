import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl my-10 font-rubik">
        Bem-vindo ao Dreams!
      </Text>
      <Link href="/sign-in">Cadastre-se</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Perfil</Link>
      <Link href="/properties/1">Propriedades</Link>
    </View>
  );
}
