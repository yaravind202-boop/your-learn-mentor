import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  FileText, 
  BarChart3, 
  Users, 
  Zap, 
  Shield,
  Clock,
  Target,
  Lightbulb
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your documents and create personalized learning experiences tailored to your unique learning style and pace.",
      color: "accent",
      gradient: "from-accent/20 to-accent-light/20"
    },
    {
      icon: FileText,
      title: "Smart Document Processing",
      description: "Upload PDFs, notes, and textbooks. Our AI extracts key concepts, creates summaries, and identifies the most important information for effective studying.",
      color: "primary",
      gradient: "from-primary/20 to-primary-light/20"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track your progress with detailed analytics. Visualize your learning journey, identify knowledge gaps, and measure improvement over time with comprehensive reports.",
      color: "secondary",
      gradient: "from-secondary/20 to-secondary-light/20"
    },
    {
      icon: Target,
      title: "Adaptive Assessments",
      description: "AI generates personalized quizzes and tests based on your uploaded content. Questions adapt to your skill level, ensuring optimal challenge and learning efficiency.",
      color: "warning",
      gradient: "from-warning/20 to-warning-light/20"
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Get AI-driven study suggestions, optimal review schedules, and personalized learning paths that adapt based on your performance and learning preferences.",
      color: "success",
      gradient: "from-success/20 to-success-light/20"
    },
    {
      icon: Clock,
      title: "Optimized Study Time",
      description: "Maximize your learning efficiency with spaced repetition algorithms and intelligent scheduling that helps you retain information longer with less effort.",
      color: "primary",
      gradient: "from-primary/20 to-primary-light/20"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powerful Features for 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Smarter Learning</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI-powered platform transforms how you study, making learning more effective, personalized, and engaging than ever before.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-elevated transition-all duration-300 group border-0 bg-gradient-card"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-gradient-hero rounded-3xl p-12 shadow-elevated">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Learning?
              </h3>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Join thousands of students who have already revolutionized their study habits with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="hero"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};