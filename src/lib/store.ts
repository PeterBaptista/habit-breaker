import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Habit {
  id: string
  name: string
  color: string
  completions: Record<string, boolean> // date string -> completed
}

interface HabitStore {
  habits: Habit[]
  addHabit: (habit: Omit<Habit, "id" | "completions">) => void
  updateHabit: (id: string, habit: Partial<Habit>) => void
  deleteHabit: (id: string) => void
  toggleCompletion: (habitId: string, date: string) => void
  getHabitCompletion: (habitId: string, date: string) => boolean
}

export const useHabitStore = create<HabitStore>()(
  persist(
    (set, get) => ({
      habits: [],

      addHabit: (habit) => {
        const id = Math.random().toString(36).substr(2, 9)
        set((state) => ({
          habits: [
            ...state.habits,
            {
              ...habit,
              id,
              completions: {},
            },
          ],
        }))
      },

      updateHabit: (id, updates) => {
        set((state) => ({
          habits: state.habits.map((h) => (h.id === id ? { ...h, ...updates } : h)),
        }))
      },

      deleteHabit: (id) => {
        set((state) => ({
          habits: state.habits.filter((h) => h.id !== id),
        }))
      },

      toggleCompletion: (habitId, date) => {
        set((state) => ({
          habits: state.habits.map((h) =>
            h.id === habitId
              ? {
                  ...h,
                  completions: {
                    ...h.completions,
                    [date]: !h.completions[date],
                  },
                }
              : h,
          ),
        }))
      },

      getHabitCompletion: (habitId, date) => {
        const habit = get().habits.find((h) => h.id === habitId)
        return habit?.completions[date] ?? false
      },
    }),
    {
      name: "habit-storage",
    },
  ),
)
