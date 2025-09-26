import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

export interface CityInfo {
  name: string;
  country?: string;
  lat?: number;
  lon?: number;
}

interface CitySelectorProps {
  onCitySelect: (cityInfo: CityInfo) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({ onCitySelect }) => {
  const [cityInput, setCityInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cityInput.trim()) return;

    onCitySelect({
      name: cityInput.trim(),
      country: "",
    });
  };

  return (
    <Card className="border-none shadow-lg p-8 max-w-md mx-auto mt-12">
      <div className="text-center mb-6">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
          style={{ backgroundColor: "#00B14033" }}
        >
          <MapPin className="w-8 h-8" style={{ color: "#00B140" }} />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Select Your Farm Location
        </h2>
        <p className="text-muted-foreground">
          Enter your city name to get localized agricultural weather insights
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter city name (e.g., New York, London)"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          className="w-full border-green-500 focus:border-green-600"
        />
        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2"
          style={{
            backgroundColor: "#00B140",
            color: "#fff",
            borderColor: "#00B140",
          }}
          disabled={!cityInput.trim()}
        >
          <MapPin className="w-4 h-4" />
          Get Weather Forecast
        </Button>
      </form>
    </Card>
  );
};

export default CitySelector;
