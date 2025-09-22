import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSun, Sun, Droplets, Wind, Umbrella } from 'lucide-react';

const weatherData = {
  current: {
    temp: 28,
    description: 'Partly cloudy',
    icon: <CloudSun className="h-16 w-16 text-yellow-400" />,
    details: {
      humidity: '72%',
      wind: '12 km/h',
      precipitation: '5%',
    },
  },
  forecast: [
    { day: 'Mon', temp: 29, icon: <Sun className="h-8 w-8 text-yellow-400" /> },
    { day: 'Tue', temp: 27, icon: <CloudSun className="h-8 w-8 text-gray-400" /> },
    { day: 'Wed', temp: 25, icon: <CloudRain className="h-8 w-8 text-blue-400" /> },
    { day: 'Thu', temp: 26, icon: <CloudDrizzle className="h-8 w-8 text-blue-300" /> },
    { day: 'Fri', temp: 30, icon: <Sun className="h-8 w-8 text-yellow-400" /> },
    { day: 'Sat', temp: 28, icon: <CloudLightning className="h-8 w-8 text-purple-400" /> },
    { day: 'Sun', temp: 24, icon: <CloudFog className="h-8 w-8 text-gray-500" /> },
  ],
};

export default function Weather() {
  return (
    <Card className="card-gradient border-0 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CloudSun className="h-5 w-5 text-primary" />
          Weather Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Weather */}
          <div className="md:col-span-1 flex flex-col items-center justify-center text-center p-4 rounded-lg bg-primary/10">
            {weatherData.current.icon}
            <p className="text-5xl font-bold mt-2">{weatherData.current.temp}°C</p>
            <p className="text-muted-foreground">{weatherData.current.description}</p>
            <div className="flex gap-4 mt-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Droplets className="h-4 w-4" />
                <span>{weatherData.current.details.humidity}</span>
              </div>
              <div className="flex items-center gap-1">
                <Wind className="h-4 w-4" />
                <span>{weatherData.current.details.wind}</span>
              </div>
              <div className="flex items-center gap-1">
                <Umbrella className="h-4 w-4" />
                <span>{weatherData.current.details.precipitation}</span>
              </div>
            </div>
          </div>

          {/* 7-Day Forecast */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 text-center">
              {weatherData.forecast.map((day) => (
                <div key={day.day} className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-primary/10">
                  <p className="font-semibold text-sm">{day.day}</p>
                  {day.icon}
                  <p className="text-sm text-muted-foreground">{day.temp}°C</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}