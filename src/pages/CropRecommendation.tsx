import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sprout, MapPin, Thermometer, Droplets } from "lucide-react";
import { useState } from "react";

export default function CropRecommendation() {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // AI recommendation logic would go here
    alert("AI recommendation feature will be implemented with backend integration!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 rounded-lg bg-gradient-to-br from-green-400/20 to-green-600/20 flex items-center justify-center mb-4">
              <Sprout className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Crop Recommendation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get AI-powered crop suggestions based on your soil composition, climate conditions, and location.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="shadow-farm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Farm Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Soil Composition */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Soil Composition (NPK)</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nitrogen">Nitrogen (N)</Label>
                        <Input
                          id="nitrogen"
                          type="number"
                          placeholder="mg/kg"
                          value={formData.nitrogen}
                          onChange={(e) => setFormData({...formData, nitrogen: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phosphorus">Phosphorus (P)</Label>
                        <Input
                          id="phosphorus"
                          type="number"
                          placeholder="mg/kg"
                          value={formData.phosphorus}
                          onChange={(e) => setFormData({...formData, phosphorus: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="potassium">Potassium (K)</Label>
                        <Input
                          id="potassium"
                          type="number"
                          placeholder="mg/kg"
                          value={formData.potassium}
                          onChange={(e) => setFormData({...formData, potassium: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Climate Conditions */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Thermometer className="h-5 w-5" />
                      Climate Conditions
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="temperature">Temperature (°C)</Label>
                        <Input
                          id="temperature"
                          type="number"
                          placeholder="25"
                          value={formData.temperature}
                          onChange={(e) => setFormData({...formData, temperature: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="humidity">Humidity (%)</Label>
                        <Input
                          id="humidity"
                          type="number"
                          placeholder="60"
                          value={formData.humidity}
                          onChange={(e) => setFormData({...formData, humidity: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Soil pH and Rainfall */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ph">Soil pH</Label>
                        <Input
                          id="ph"
                          type="number"
                          step="0.1"
                          placeholder="6.5"
                          value={formData.ph}
                          onChange={(e) => setFormData({...formData, ph: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rainfall">Annual Rainfall (mm)</Label>
                        <Input
                          id="rainfall"
                          type="number"
                          placeholder="1200"
                          value={formData.rainfall}
                          onChange={(e) => setFormData({...formData, rainfall: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>


                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    Get Crop Recommendation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Information Panel */}
            <div className="space-y-6">
              <Card className="shadow-farm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5" />
                    How It Works
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary mt-0.5">1</div>
                      <div>
                        <h4 className="font-medium">Soil Analysis</h4>
                        <p className="text-sm text-muted-foreground">Enter your soil's NPK values and pH levels</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary mt-0.5">2</div>
                      <div>
                        <h4 className="font-medium">Climate Data</h4>
                        <p className="text-sm text-muted-foreground">Provide temperature, humidity, and rainfall information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary mt-0.5">3</div>
                      <div>
                        <h4 className="font-medium">AI Analysis</h4>
                        <p className="text-sm text-muted-foreground">Our AI model analyzes all factors and suggests optimal crops</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-farm">
                <CardHeader>
                  <CardTitle>Sample Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-medium text-green-800 dark:text-green-200">Rice</h4>
                      <p className="text-sm text-green-600 dark:text-green-300">Best for high humidity and rainfall areas</p>
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Wheat</h4>
                      <p className="text-sm text-yellow-600 dark:text-yellow-300">Suitable for moderate climate conditions</p>
                    </div>
                    <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h4 className="font-medium text-orange-800 dark:text-orange-200">Corn</h4>
                      <p className="text-sm text-orange-600 dark:text-orange-300">Great for nitrogen-rich soils</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}