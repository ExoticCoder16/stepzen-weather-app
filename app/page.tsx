"use client";

import { Card, Divider, Subtitle, Text } from "@tremor/react";
import getBasePath from "@/lib/getBasePath";

export default async function WeatherPage() {
  // const res = await fetch(`${getBasePath()}/api/vertexImage`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "applications/json",
  //   },
  //   body: JSON.stringify({
  //     // weatherData: dataToSend,
  //     Request,
  //   }),
  // });

  // const data = await res.json();
  // const { candidates } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-3xl font-bold text-center mb-10">
          Rarbit AR Cooking
        </Text>
        <Subtitle className="text-xl text-center">paste your link</Subtitle>
        <Divider className="my-10"></Divider>
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* <CityPicker /> */}
        </Card>
      </Card>
    </div>
  );
}
