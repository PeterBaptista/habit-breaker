import {
  format,
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  isSameMonth,
  isToday,
} from "date-fns";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Habit } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HabitCalendarProps {
  habit: Habit;
  onToggleDay: (date: string) => void;
}

export function HabitCalendar({ habit, onToggleDay }: HabitCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h3>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handlePrevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-muted-foreground"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const dateString = format(day, "yyyy-MM-dd");
          const isCompleted = habit.completions[dateString];
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isTodayDate = isToday(day);

          return (
            <motion.button
              key={dateString}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => isCurrentMonth && onToggleDay(dateString)}
              disabled={!isCurrentMonth}
              className="relative aspect-square"
            >
              <div
                className={cn(
                  ` h-full w-full rounded-lg flex items-center justify-center text-sm font-medium  transition-all duration-200`,
                  {
                    "opacity-30 cursor-default": !isCurrentMonth,
                    "cursor-pointer": isCurrentMonth,
                    " text-white ": isCompleted,

                    "text-muted-foreground": !isCompleted,
                    "bg-muted text-muted-foreground hover:bg-muted/80":
                      !isCompleted,
                    "ring-4 ring-foreground": isTodayDate,
                  }
                )}
                style={{ backgroundColor: isCompleted ? habit.color : "" }}
              >
                {format(day, "d")}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
