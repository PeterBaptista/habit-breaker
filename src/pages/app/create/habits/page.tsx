"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateHabitPage() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("daily");

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;

    const dateExists = selectedDates.some(
      (d) => d.toDateString() === date.toDateString()
    );

    if (dateExists) {
      setSelectedDates(
        selectedDates.filter((d) => d.toDateString() !== date.toDateString())
      );
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const removeDate = (dateToRemove: Date) => {
    setSelectedDates(
      selectedDates.filter(
        (d) => d.toDateString() !== dateToRemove.toDateString()
      )
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create New Habit</h1>
        <p className="text-muted-foreground">
          Set up a new habit to track and break
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Habit Details</CardTitle>
            <CardDescription>
              Describe the habit you want to break
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="habit-name">Habit Name</Label>
              <Input
                id="habit-name"
                placeholder="e.g., Stop Smoking"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Why do you want to break this habit?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="frequency">Tracking Frequency</Label>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger id="frequency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedDates.length > 0 && (
              <div className="space-y-2">
                <Label>Selected Dates ({selectedDates.length})</Label>
                <div className="flex flex-wrap gap-2">
                  {selectedDates.map((date) => (
                    <Badge
                      key={date.toISOString()}
                      variant="secondary"
                      className="gap-1"
                    >
                      {date.toLocaleDateString()}
                      <button
                        onClick={() => removeDate(date)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Button className="w-full">Create Habit</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Select Tracking Dates</CardTitle>
            <CardDescription>Click dates to toggle selection</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDates[0]}
              onSelect={handleDateSelect}
              className="rounded-md border"
              modifiers={{
                selected: selectedDates,
              }}
              modifiersStyles={{
                selected: {
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                },
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
