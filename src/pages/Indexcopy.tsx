import { useState } from "react";
import WeatherForecast from "@/components/components1/WeatherForecast";
import CitySelector from "@/components/components1/CitySelector";
import { CityInfo } from "@/components/components1/CitySelector";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Indexcopy = () => {
  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(null);

  const handleCitySelect = (cityInfo: CityInfo) => {
    setSelectedCity(cityInfo);
  };

  const handleBackToSelection = () => {
    setSelectedCity(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            🌾 Agricultural Weather Hub
          </h1>
          <p className="text-xl text-muted-foreground">
            Smart farming starts with accurate weather insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {!selectedCity ? (
            <CitySelector onCitySelect={handleCitySelect} />
          ) : (
            <div className="space-y-6">
              {/* Back Button & City Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={handleBackToSelection}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Change Location
                </Button>
                <div className="text-right">
                  <h2 className="text-lg font-semibold text-foreground">
                    {selectedCity.name}
                    {selectedCity.country ? `, ${selectedCity.country}` : ""}
                  </h2>
                  <p className="text-sm text-agriculture-muted">
                    Agricultural Weather Forecast
                  </p>
                </div>
              </div>

              {/* ✅ Pass city name instead of lat/lon */}
              <WeatherForecast
                city={selectedCity.name}
                className="animate-fade-in"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Indexcopy;
