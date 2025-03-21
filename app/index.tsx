import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useRouter } from "expo-router";


const AnimatedView = Animated.createAnimatedComponent(View);

const router = useRouter();

export const LoginScreen = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    if (!email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }
     if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError("");
    console.log("Logging in with:", { email, password });
    router.push("/(tabs)/home");
  };

  return (
    <AnimatedView
      className="flex-1 justify-center items-center bg-gray-100 px-6"
      entering={FadeInRight}
      exiting={FadeOutLeft}
    >
      <Text className="text-3xl flex-row items-center font-extrabold text-primary mb-6">
        <MaterialCommunityIcons name="school" size={30} color="#357abd" /> EduApp
      </Text>
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-3 bg-white shadow-md"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-3 bg-white shadow-md"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text className="text-red-500 text-xs font-medium mb-2">{error}</Text> : null}
      <TouchableOpacity
        className="bg-blue-600 w-full p-4 rounded-xl mt-4 shadow-lg"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold text-lg">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-4" onPress={onSwitch}>
        <Text className="text-[#4A90E2] text-sm font-medium">
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </AnimatedView>
  );
};

export const SignUpScreen = ({ onSwitch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    else if (!email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError("");

    console.log("Signing up with:", { name, email, password });
    router.push("/(tabs)/home");
  };

  return (
    <AnimatedView
      className="flex-1 justify-center items-center bg-gray-100 px-6"
      entering={FadeInRight}
      exiting={FadeOutLeft}
    >
      <Text className="text-3xl flex-row items-center font-extrabold text-primary mb-6">
        <MaterialCommunityIcons name="school" size={30} color="#357abd" /> EduApp
      </Text>
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-3 bg-white shadow-md"
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-3 bg-white shadow-md"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-3 bg-white shadow-md"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text className="text-red-500 text-xs font-medium mb-2">{error}</Text> : null}
      <TouchableOpacity
        className="bg-primary w-full p-4 rounded-xl mt-4 shadow-lg"
        onPress={handleSignUp}
      >
        <Text className="text-white text-center font-bold text-lg">
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-4" onPress={onSwitch}>
        <Text className="text-[#4A90E2] text-sm font-medium">
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </AnimatedView>
  );
};

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <View className="flex-1 bg-gray-100">
      {isLogin ? (
        <LoginScreen onSwitch={() => setIsLogin(false)} />
      ) : (
        <SignUpScreen onSwitch={() => setIsLogin(true)} />
      )}
    </View>
  );
};

export default Index;
