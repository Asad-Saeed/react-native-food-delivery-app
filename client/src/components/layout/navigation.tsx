import CartScreen from "@/screens/cart";
import DeliveryScreen from "@/screens/delivery";
import HomeSceen from "@/screens/home";
import OrderPreparingScreen from "@/screens/orderPreparing";
import RestaurantScreen from "@/screens/restaurant";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const NavigationComponent: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeSceen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            presentation: Platform.OS === "ios" ? "modal" : "transparentModal", // Modal for iOS, transparent for Android
            animation: "slide_from_bottom", // Slide from bottom effect for modal-like behavior on Android
            contentStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
        <Stack.Screen
          name="OrderPreparing"
          component={OrderPreparingScreen}
          options={{
            presentation: "fullScreenModal",
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{
            presentation: "fullScreenModal",
            animation: "slide_from_bottom",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;
