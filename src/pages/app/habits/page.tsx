"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useHabitStore, type Habit } from "@/lib/store";
import { HabitCard } from "@/components/habit-card";
import { HabitDialog } from "@/components/habit-dialog";
import { Plus } from "lucide-react";

export default function HabitTracker() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState<Habit | undefined>();
  const [isHydrated, setIsHydrated] = useState(false);

  const habits = useHabitStore((state) => state.habits);
  const addHabit = useHabitStore((state) => state.addHabit);
  const updateHabit = useHabitStore((state) => state.updateHabit);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSaveHabit = (habit: Omit<Habit, "id" | "completions">) => {
    if (editingHabit) {
      updateHabit(editingHabit.id, habit);
      setEditingHabit(undefined);
    } else {
      addHabit(habit);
    }
  };

  const handleOpenDialog = () => {
    setEditingHabit(undefined);
    setIsDialogOpen(true);
  };

  const handleEditHabit = (habit: Habit) => {
    setEditingHabit(habit);
    setIsDialogOpen(true);
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight">Habit Tracker</h1>
          <p className="text-muted-foreground mt-2">
            Build better habits, one day at a time
          </p>
        </motion.div>

        {/* Create Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <Button onClick={handleOpenDialog} size="lg" className="gap-2">
            <Plus className="h-5 w-5" />
            New Habit
          </Button>
        </motion.div>

        {/* Habits List */}
        <AnimatePresence mode="popLayout">
          {habits.length > 0 ? (
            <motion.div layout className="space-y-4">
              {habits.map((habit) => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  onEdit={handleEditHabit}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No habits yet. Create one to get started!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Habit Dialog */}
      <HabitDialog
        isOpen={isDialogOpen}
        habit={editingHabit}
        onOpenChange={setIsDialogOpen}
        onSave={handleSaveHabit}
      />
    </main>
  );
}
