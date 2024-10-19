import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import { NoDataPlaceholderProps } from "@/types";

const NoDataPlaceholder: React.FC<NoDataPlaceholderProps> = ({
  message = "No Data Available",
  onRetry,
  retryText = "Retry",
}) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />

      <View className="flex-1 justify-center items-center p-5">
        {/* Image Placeholder */}
        <Image
          source={require("../../../assets/images/common/empty1.webp")}
          className="w-40 h-40"
          resizeMode="contain"
        />

        {/* No Data Message */}
        <Text className="text-lg text-gray-700 font-semibold mt-5 text-center">
          {message}
        </Text>

        {/* Retry Button (if onRetry prop is passed) */}
        {onRetry && (
          <TouchableOpacity
            onPress={onRetry}
            className="mt-4 bg-blue-500 px-5 py-2 rounded-full"
          >
            <Text className="text-white font-semibold">{retryText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NoDataPlaceholder;
