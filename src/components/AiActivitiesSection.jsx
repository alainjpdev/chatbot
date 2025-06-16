"use client";

import React from "react";
import ActivityCard from "./ActivityCard"; // 👈 nuevo componente

const AiActivitiesSection = ({ language }) => {
  const activities = [
    {
      emoji: "🤖",
      textEs: "Crea y entrena modelos de IA con herramientas visuales",
      textEn: "Create and train AI models with visual tools",
      bg: "bg-purple-800",
      colors: [
        [203, 172, 249],
        [72, 52, 212],
      ],
    },
    {
      emoji: "💬",
      textEs: "Diseña chatbots inteligentes",
      textEn: "Design intelligent chatbots",
      bg: "bg-pink-700",
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
    },
    {
      emoji: "🧠",
      textEs: "Juegos para entender cómo “piensan” las máquinas",
      textEn: "Games to understand how machines “think”",
      bg: "bg-sky-600",
      colors: [[125, 211, 252]],
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {activities.map((activity, i) => (
        <ActivityCard key={i} activity={activity} language={language} />
      ))}
    </div>
  );
};

export default AiActivitiesSection;