"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CanvasRevealEffect from "./ui/CanvasRevealEffect";

const ActivityCard = ({ activity, language }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-60 w-full overflow-hidden rounded-3xl border border-white/10 text-white shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={4.5}
              containerClassName={`${activity.bg} rounded-3xl overflow-hidden`}
              colors={activity.colors}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <p className="text-3xl">{activity.emoji}</p>
        <p className="font-semibold mt-3 text-lg">
          {language === "es" ? activity.textEs : activity.textEn}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;