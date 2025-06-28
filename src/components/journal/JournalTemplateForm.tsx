
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function JournalTemplateForm() {
  const [formData, setFormData] = useState({
    date: "",
    gratefulFor1: "",
    gratefulFor2: "",
    gratefulFor3: "",
    todayGoals1: "",
    todayGoals2: "",
    todayGoals3: "",
    affirmation: "",
    priorities1: "",
    priorities2: "",
    priorities3: "",
    challenges: "",
    solutions: "",
    learnings: "",
    improvements: "",
    reflections: "",
    tomorrowGoals1: "",
    tomorrowGoals2: "",
    tomorrowGoals3: "",
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
    <div className="max-w-4xl mx-auto">
      <Card className="w-full bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
        <CardHeader className="text-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-t-lg">
          <CardTitle className="text-3xl font-bold">
            The Path of Your Success
          </CardTitle>
          <p className="text-lg opacity-90">Daily Success Journal</p>
        </CardHeader>
        
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Date */}
            <div className="text-center">
              <Label htmlFor="date" className="text-2xl font-bold text-gray-700">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="text-center text-xl font-semibold mt-2 max-w-xs mx-auto"
              />
            </div>

            {/* Morning Gratitude Section */}
            <div className="bg-yellow-100 p-6 rounded-lg border-2 border-yellow-300">
              <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">
                🌅 Morning Gratitude
              </h2>
              <p className="text-lg text-yellow-700 mb-4 text-center">What am I grateful for today?</p>
              
              <div className="space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-3">
                    <span className="text-xl font-bold text-yellow-600 w-6">{num}.</span>
                    <Input
                      value={formData[`gratefulFor${num}` as keyof typeof formData]}
                      onChange={(e) => handleInputChange(`gratefulFor${num}`, e.target.value)}
                      placeholder={`Grateful for...`}
                      className="flex-1 bg-white border-yellow-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Goals Section */}
            <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-300">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                🎯 Today's Goals
              </h2>
              <p className="text-lg text-blue-700 mb-4 text-center">What do I want to achieve today?</p>
              
              <div className="space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-3">
                    <span className="text-xl font-bold text-blue-600 w-6">{num}.</span>
                    <Input
                      value={formData[`todayGoals${num}` as keyof typeof formData]}
                      onChange={(e) => handleInputChange(`todayGoals${num}`, e.target.value)}
                      placeholder={`Goal ${num}...`}
                      className="flex-1 bg-white border-blue-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Affirmation Section */}
            <div className="bg-purple-100 p-6 rounded-lg border-2 border-purple-300">
              <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">
                ✨ Daily Affirmation
              </h2>
              <Textarea
                value={formData.affirmation}
                onChange={(e) => handleInputChange("affirmation", e.target.value)}
                placeholder="I am capable, strong, and ready to achieve my goals today..."
                className="w-full bg-white border-purple-300 min-h-[80px] text-center text-lg"
              />
            </div>

            {/* Priorities Section */}
            <div className="bg-green-100 p-6 rounded-lg border-2 border-green-300">
              <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
                ⭐ Top 3 Priorities
              </h2>
              
              <div className="space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-3">
                    <span className="text-xl font-bold text-green-600 w-6">{num}.</span>
                    <Input
                      value={formData[`priorities${num}` as keyof typeof formData]}
                      onChange={(e) => handleInputChange(`priorities${num}`, e.target.value)}
                      placeholder={`Priority ${num}...`}
                      className="flex-1 bg-white border-green-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Evening Reflection */}
            <div className="bg-orange-100 p-6 rounded-lg border-2 border-orange-300">
              <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">
                🌅 Evening Reflection
              </h2>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold text-orange-700">What did I learn today?</Label>
                  <Textarea
                    value={formData.learnings}
                    onChange={(e) => handleInputChange("learnings", e.target.value)}
                    placeholder="Today I learned..."
                    className="mt-2 bg-white border-orange-300 min-h-[80px]"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold text-orange-700">What could I have done better?</Label>
                  <Textarea
                    value={formData.improvements}
                    onChange={(e) => handleInputChange("improvements", e.target.value)}
                    placeholder="I could improve by..."
                    className="mt-2 bg-white border-orange-300 min-h-[80px]"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold text-orange-700">Overall reflections on today</Label>
                  <Textarea
                    value={formData.reflections}
                    onChange={(e) => handleInputChange("reflections", e.target.value)}
                    placeholder="Today was..."
                    className="mt-2 bg-white border-orange-300 min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Tomorrow's Planning */}
            <div className="bg-pink-100 p-6 rounded-lg border-2 border-pink-300">
              <h2 className="text-2xl font-bold text-pink-800 mb-4 text-center">
                🚀 Tomorrow's Goals
              </h2>
              
              <div className="space-y-3 mb-6">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-3">
                    <span className="text-xl font-bold text-pink-600 w-6">{num}.</span>
                    <Input
                      value={formData[`tomorrowGoals${num}` as keyof typeof formData]}
                      onChange={(e) => handleInputChange(`tomorrowGoals${num}`, e.target.value)}
                      placeholder={`Tomorrow's goal ${num}...`}
                      className="flex-1 bg-white border-pink-300"
                    />
                  </div>
                ))}
              </div>

              <div>
                <Label className="text-lg font-semibold text-pink-700">Positive thoughts to end the day</Label>
                <Textarea
                  value={formData.positiveThoughts}
                  onChange={(e) => handleInputChange("positiveThoughts", e.target.value)}
                  placeholder="I am grateful for today and excited for tomorrow because..."
                  className="mt-2 bg-white border-pink-300 min-h-[80px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12 py-3 text-lg font-bold rounded-full shadow-lg transform transition hover:scale-105"
              >
                💾 Save My Success Journey
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
