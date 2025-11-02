"use client";

import {
  format,
  eachDayOfInterval,
  // endOfWeek, // No longer needed
  // startOfWeek, // No longer needed
  isToday,
  startOfMonth,
  endOfMonth,
  getDay,
  subDays, // 1. Import subDays
} from "date-fns";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Habit } from "@/lib/store";
import { ChevronDown } from "lucide-react";

interface HabitCalendarProps {
  habit: Habit;
  onToggleDay: (date: string) => void;
}

export function HabitCalendar({ habit, onToggleDay }: HabitCalendarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const today = new Date();

  // 2. Updated Week Logic for a 7-day rolling view
  const sevenDaysAgo = subDays(today, 6);
  const weekDays = eachDayOfInterval({ start: sevenDaysAgo, end: today });

  // Month Logic (unchanged from before)
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const firstDayOfWeek = getDay(monthStart);
  const startPadding = Array(firstDayOfWeek).fill(null);

  const lastDayOfWeek = getDay(monthEnd);
  const endPadding = Array(6 - lastDayOfWeek).fill(null);

  const monthDays = [...startPadding, ...daysInMonth, ...endPadding];

  const handleToggleCalendar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div className="space-y-2">
      <motion.button
        onClick={handleToggleCalendar}
        className="w-full flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
      >
        <h3 className="text-sm font-semibold">
          {/* You might want to update this title, but it's fine as-is */}
          {format(today, "MMMM yyyy")} - Week View
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>

      {/* --- Expanded Month View (Unchanged) --- */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden px-2"
          >
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-7 gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-semibold text-muted-foreground"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {monthDays.map((day, index) => {
                  if (!day) {
                    return (
                      <div key={`empty-${index}`} className="aspect-square" />
                    );
                  }
                  const dateString = format(day, "yyyy-MM-dd");
                  const isCompleted = habit.completions[dateString];
                  const isTodayDate = isToday(day);

                  return (
                    <motion.button
                      key={dateString}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onToggleDay(dateString)}
                      className="relative aspect-square"
                    >
                      <div
                        className={`
                          h-full w-full rounded-lg flex items-center justify-center text-sm font-medium
                          transition-all duration-200 cursor-pointer
                          ${
                            isCompleted
                              ? "text-white"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }
                          ${isTodayDate ? "ring-2 ring-primary" : ""}
                        `}
                        style={{
                          backgroundColor: isCompleted
                            ? habit.color
                            : undefined,
                        }}
                      >
                        {format(day, "d")}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Collapsed Week View (This now uses the new 'weekDays' array) --- */}
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-7 gap-2"
        >
          {weekDays.map((day) => {
            const dateString = format(day, "yyyy-MM-dd");
            const isCompleted = habit.completions[dateString];
            const isTodayDate = isToday(day);

            return (
              <motion.button
                key={dateString}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onToggleDay(dateString)}
                className="relative aspect-square"
              >
                <div
                  className={`
                    h-full w-full rounded-lg flex items-center justify-center text-xs font-medium
                    transition-all duration-200 cursor-pointer
                    ${
                      isCompleted
                        ? "text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }
                    ${isTodayDate && !isCompleted ? "ring-2 ring-primary" : ""}
                  `}
                  style={{
                    backgroundColor: isCompleted ? habit.color : undefined,
                  }}
                >
                  {format(day, "d")}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
}
