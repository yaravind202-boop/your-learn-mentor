import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Brain, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-learning-ai.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered adaptive learning visualization"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-light/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            <Brain className="w-4 h-4" />
            AI-Powered Learning Platform
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Adaptive Learning
            <br />
            <span className="bg-gradient-to-r from-accent-light to-secondary-light bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Transform your documents into personalized study experiences. Upload PDFs, notes, and books to get AI-generated assessments, progress tracking, and intelligent study recommendations.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="hero"
            >
              <Upload className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start Learning Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Analytics
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">98%</div>
              <div className="text-primary-foreground/70">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">10K+</div>
              <div className="text-primary-foreground/70">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">24/7</div>
              <div className="text-primary-foreground/70">AI Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};