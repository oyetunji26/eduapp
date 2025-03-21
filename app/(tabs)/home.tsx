import { View, Text, Image, FlatList, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Card, ProgressBar } from "react-native-paper";

import Search from "@/app/(root)/Search";

import icons from "@/constants/icons";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

const home = () => {
  const categories = [
    { name: "Mathematics", icon: "calculator-variant" },
    { name: "Science", icon: "atom" },
    { name: "Languages", icon: "translate" },
    { name: "Religion", icon: "church" },
    { name: "Philosophy", icon: "head-lightbulb" },
    { name: "Programming", icon: "code-braces" },
  ];

  const challenges = [
    { title: "Math Quiz", points: 50, color: "#FF4D4D" },
    { title: "Science Puzzle", points: 30, color: "#4D90FF" },
  ];

  const subjects = [
    {
      title: "Advanced Mathematics",
      lessons: 24,
      duration: "2h 30m",
      icon: icons?.math,
    },
    {
      title: "Physics Fundamentals",
      lessons: 18,
      duration: "1h 45m",
      icon: icons?.phy,
    },
    {
      title: "Biology Basics",
      lessons: 16,
      duration: "2h 15m",
      icon: icons?.bio,
    },
  ];
  return (
    <SafeAreaView className="flex-1">
      <View className="section-x pt-2.5">
        <View className="flex-row gap-1 items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Image
              source={icons.userProfilePic}
              alt="profile"
              width={1000}
              height={1000}
              className="w-10 h-10"
            />
            {/* <View className="flex-col">
              <Text className="text-grey font-medium leading-none -mb-1">
                Welcome back
              </Text>
              <Text className="text-black font-bold text-xl -mt-1">
                Olagoke Oyetunji
              </Text>
            </View> */}
          </View>
          <Text className="text-black/70 font-semibold text-xl">Edu-Flow</Text>
          <View className="relative">
            <Image
              source={icons.notification}
              alt="profile"
              width={100}
              height={100}
            />
            <View className=" bg-red-600 w-2 h-2 rounded-full absolute -top-1 right-0" />
          </View>
        </View>

        <Search />

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mb-40"
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <View className="bg-[#357ABD] rounded-xl text-white flex-col gap-3 section-x section-y">
            <Text className="text-sm text-white">Featured course</Text>

            <Text className="text-white text-xl font-semibold capitalize">
              Master Digital Marketing
            </Text>

            <Text className="text-white/75  items-center text-sm">
              12 hours <View className="w-1 h-1 rounded-full bg-white" /> 6
              modules
            </Text>

            <View className="flex-row  gap-3 items-center">
              <View className="grow  bg-white/20 h-fit rounded-2xl">
                <View className="w-3/4 bg-white py-1 rounded-2xl" />
              </View>

              {/* <ProgressBar progress={0.75} color="#fff" className="grow h-3 my-2 rounded-xl" /> */}

              <Image source={icons?.play} alt="" width={100} height={100} />
            </View>
          </View>

          <View className="my-3">
            <Text className="text-black/75 text-lg font-medium">
              Categories
            </Text>
            <FlatList
              data={categories}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <View className="py-4 px-2 flex-col items-center">
                  <View className="bg-white/75 shadow-2xs p-4 rounded-xl">
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={24}
                      color="#357ABD"
                    />
                  </View>
                  <Text className="text-xs text-grey">{item.name}</Text>
                </View>
              )}
              horizontal
            />
            i
          </View>

          <View className="flex-1 bg-gray-100">
            <Text className="text-lg text-black/75 font-medium my-2">
              Daily Challenges
            </Text>
            <View className="flex-row justify-between">
              {challenges.map((challenge, index) => (
                <View
                  key={index}
                  className={`flex-1 flex-row gap-1.5 items-center p-4 rounded-lg m-1 items-center bg-black/60 ${
                    index == 0 ? "bg-[#FF4D4D]" : "bg-[#4D90FF]"
                  } `}
                >
                  {index == 0 ? (
                    <Octicons name="light-bulb" size={24} color="#fcfcfc" />
                  ) : (
                    <MaterialIcons name="science" size={28} color="#fcfcfc" />
                  )}
                  <View>
                    <Text className="text-white font-bold text-sm">
                      {challenge.title}
                    </Text>

                    <Text className="text-white text-xs">
                      {challenge.points} pts
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            <Text className="text-lg  font-medium my-4">Popular Subjects</Text>
            {subjects?.map((item, i) => (
              <Card className="my-2 flex-col gap-2 " key={i}>
                <Image
                  source={item?.icon}
                  alt=""
                  width={100}
                  height={100}
                  className=" h-52 object-center rounded-2xl object-contain"
                />
                <Card.Content className="p-3 grow">
                  <Text className="text-base font-bold text-black/80">
                    {item.title}
                  </Text>
                  <Text className="text-gray-500 text-sm font-medium">
                    {item.lessons} lessons • {item.duration}
                  </Text>
                </Card.Content>
              </Card>
            ))}
            {/* <FlatList
              data={subjects}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Card className="my-1 p-3">
                  <Card.Content>
                    <Text className="text-base font-bold">{item.title}</Text>
                    <Text>
                      {item.lessons} lessons • {item.duration}
                    </Text>
                  </Card.Content>
                </Card>
              )}
            /> */}

            <View className="my-4">
              <Text className="text-lg font-bold my-1">Your Achievements</Text>
              <View className="bg-white p-4 rounded-xl items-center shadow-2xs mt-2">
                <Text className="text-gray-500 text-sm">Current Level</Text>
                <Text className="text-xl font-bold">Level 5</Text>
                <ProgressBar
                  progress={0.75}
                  color="#4D90FF"
                  className="w-full h-2 my-2 rounded-xl"
                />
                <Text className="text-xs text-gray-500">75% to next level</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default home;
