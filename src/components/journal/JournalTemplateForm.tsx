
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function JournalTemplateForm() {
  const [formData, setFormData] = useState({
    date: "",
    timeOfDay: "",
    currentMood: "",
    gratefulFor: "",
    todayGoals: "",
    affirmation: "",
    priorities: "",
    challenges: "",
    solutions: "",
    learnings: "",
    improvements: "",
    reflections: "",
    tomorrowGoals: "",
    positiveThoughts: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Journal entry submitted:", formData);
    toast.success("Journal entry saved successfully!");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-green-700">
          The Path of Your Success - Daily Journal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                placeholder="Select date"
              />
            </div>
            <div>
              <Label htmlFor="timeOfDay">Time of Day</Label>
              <Select value={formData.timeOfDay} onValueChange={(value) => handleInputChange("timeOfDay", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time of day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                  <SelectItem value="night">Night</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Morning Section */}
          <div className="space-y-4 p-4 bg-yellow-50 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800">Morning Reflection</h3>
            
            <div>
              <Label htmlFor="currentMood">How am I feeling right now?</Label>
              <Input
                id="currentMood"
                value={formData.currentMood}
                onChange={(e) => handleInputChange("currentMood", e.target.value)}
                placeholder="Describe your current mood and emotions"
              />
            </div>

            <div>
              <Label htmlFor="gratefulFor">What am I grateful for today?</Label>
              <Textarea
                id="gratefulFor"
                value={formData.gratefulFor}
                onChange={(e) => handleInputChange("gratefulFor", e.target.value)}
                placeholder="List 3 things you're grateful for today"
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="todayGoals">What do I want to achieve today?</Label>
              <Textarea
                id="todayGoals"
                value={formData.todayGoals}
                onChange={(e) => handleInputChange("todayGoals", e.target.value)}
                placeholder="List your main goals and priorities for today"
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="affirmation">Daily Affirmation</Label>
              <Input
                id="affirmation"
                value={formData.affirmation}
                onChange={(e) => handleInputChange("affirmation", e.target.value)}
                placeholder="Write a positive affirmation for yourself"
              />
            </div>
          </div>

          {/* Day Planning Section */}
          <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800">Day Planning</h3>
            
            <div>
              <Label htmlFor="priorities">Top 3 Priorities</Label>
              <Textarea
                id="priorities"
                value={formData.priorities}
                onChange={(e) => handleInputChange("priorities", e.target.value)}
                placeholder="1. Most important task&#10;2. Second priority&#10;3. Third priority"
                className="min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="challenges">Potential Challenges</Label>
              <Textarea
                id="challenges"
                value={formData.challenges}
                onChange={(e) => handleInputChange("challenges", e.target.value)}
                placeholder="What obstacles might you face today?"
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="solutions">Solutions & Strategies</Label>
              <Textarea
                id="solutions"
                value={formData.solutions}
                onChange={(e) => handleInputChange("solutions", e.target.value)}
                placeholder="How will you overcome these challenges?"
                className="min-h-[80px]"
              />
            </div>
          </div>

          {/* Evening Reflection Section */}
          <div className="space-y-4 p-4 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-800">Evening Reflection</h3>
            
            <div>
              <Label htmlFor="learnings">What did I learn today?</Label>
              <Textarea
                id="learnings"
                value={formData.learnings}
                onChange={(e) => handleInputChange("learnings", e.target.value)}
                placeholder="Reflect on new insights, lessons, or discoveries"
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="improvements">What could I have done better?</Label>
              <Textarea
                id="improvements"
                value={formData.improvements}
                onChange={(e) => handleInputChange("improvements", e.target.value)}
                placeholder="Areas for improvement and growth"
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="reflections">Overall reflections on the day</Label>
              <Textarea
                id="reflections"
                value={formData.reflections}
                onChange={(e) => handleInputChange("reflections", e.target.value)}
                placeholder="How do you feel about today? What went well?"
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Tomorrow Planning Section */}
          <div className="space-y-4 p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800">Planning Tomorrow</h3>
            
            <div>
              <Label htmlFor="tomorrowGoals">Tomorrow's Goals</Label>
              <Textarea
                id="tomorrowGoals"
                value={formData.tomorrowGoals}
                onChange={(e) => handleInputChange("tomorrowGoals", e.target.value)}
                placeholder="What do you want to achieve tomorrow?"
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="positiveThoughts">Positive thoughts to end the day</Label>
              <Textarea
                id="positiveThoughts"
                value={formData.positiveThoughts}
                onChange={(e) => handleInputChange("positiveThoughts", e.target.value)}
                placeholder="End with gratitude and positive mindset"
                className="min-h-[80px]"
              />
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-8 py-2">
              Save Journal Entry
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
