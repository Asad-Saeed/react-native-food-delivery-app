import { View, Image } from "react-native";
import React, { useEffect } from "react";
import LayoutWrapper from "@/components/layout/layout";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types";

const OrderPreparingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 2000);
  }, []);
  return (
    <LayoutWrapper>
      <View className="flex-1 bg-white items-center justify-center">
        <Image
          source={require("../../assets/images/common/preparing1.gif")}
          className="h-80 w-80"
        />
      </View>
    </LayoutWrapper>
  );
};

export default OrderPreparingScreen;
