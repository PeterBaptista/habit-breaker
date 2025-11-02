"use client";

import { motion } from "framer-motion";
import { type Habit, useHabitStore } from "@/lib/store";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";
import { HabitCalendar } from "@/components/habit-calendar";

interface HabitCardProps {
  habit: Habit;
  onEdit: (habit: Habit) => void;
}

export function HabitCard({ habit, onEdit }: HabitCardProps) {
  const toggleCompletion = useHabitStore((state) => state.toggleCompletion);
  const deleteHabit = useHabitStore((state) => state.deleteHabit);

  const completionCount = Object.values(habit.completions).filter(
    Boolean
  ).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: habit.color }}
              />
              <h2 className="text-xl font-bold">{habit.name}</h2>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {completionCount} completions tracked
            </p>
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => onEdit(habit)}>
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => deleteHabit(habit.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <HabitCalendar
          habit={habit}
          onToggleDay={(date) => toggleCompletion(habit.id, date)}
        />
      </Card>
    </motion.div>
  );
}
