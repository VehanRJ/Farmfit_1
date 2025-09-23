import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Satellite, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Thermometer,
  Droplets,
  Bug
} from "lucide-react";
import heroImage from "@/assets/agri.webp";

const Home = () => {
  const features = [
    {
      icon: Satellite,
      title: "Spectral Health Maps",
      description: "Real-time crop health monitoring using advanced satellite and drone imaging technology.",
      color: "text-accent"
    },
    {
      icon: Droplets,
      title: "Soil Monitoring",
      description: "Track soil moisture, nutrients, and conditions with precision sensors and AI analysis.",
      color: "text-primary"
    },
    {
      icon: Bug,
      title: "Pest Prediction",
      description: "Early detection and risk assessment for pests and diseases using machine learning.",
      color: "text-warning"
    },
    {
      icon: TrendingUp,
      title: "Anomaly Alerts",
      description: "Instant notifications for crop stress, irrigation needs, and environmental changes.",
      color: "text-success"
    }
  ];

  const benefits = [
    "Increase crop yields by up to 25%",
    "Reduce water usage by 30%",
    "Early pest detection saves 15% crop loss",
    "Data-driven decisions for optimal farming"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI-powered
            <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
              Precision Agriculture
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transform your farming with cutting-edge remote sensing, spectral imaging, 
            and AI-driven insights for sustainable, high-yield agriculture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6">
              <Link to="/login">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/about">
                Learn More
                <Eye className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Agricultural Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines satellite imagery, IoT sensors, and machine learning 
              to provide unprecedented insights into your agricultural operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient hover-lift border-0">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Proven Results for Modern Farmers
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of farmers who have transformed their operations 
                with our AI-powered agricultural intelligence platform.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="feature" size="lg">
                <Link to="/dashboard">
                  View Dashboard Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="card-gradient border-0 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-muted-foreground">Yield Increase</div>
              </Card>
              <Card className="card-gradient border-0 text-center p-6">
                <div className="text-3xl font-bold text-accent mb-2">30%</div>
                <div className="text-muted-foreground">Water Saved</div>
              </Card>
              <Card className="card-gradient border-0 text-center p-6">
                <div className="text-3xl font-bold text-warning mb-2">15%</div>
                <div className="text-muted-foreground">Crop Loss Prevented</div>
              </Card>
              <Card className="card-gradient border-0 text-center p-6">
                <div className="text-3xl font-bold text-success mb-2">24/7</div>
                <div className="text-muted-foreground">Monitoring</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start your journey towards precision agriculture with our comprehensive AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/login">Start Free Trial</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
