import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BookOpen, Target, Zap, Clock, Award } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

export const ProgressDashboard = () => {
  const progressData = [
    { subject: "Mathematics", progress: 85, trend: "+12%", color: "primary" },
    { subject: "Science", progress: 72, trend: "+8%", color: "secondary" },
    { subject: "Literature", progress: 94, trend: "+15%", color: "accent" },
    { subject: "History", progress: 67, trend: "+5%", color: "warning" },
  ];

  const achievements = [
    { icon: Target, title: "Goal Achiever", description: "Completed 5 learning objectives", color: "primary" },
    { icon: Zap, title: "Fast Learner", description: "Finished modules 2x faster", color: "accent" },
    { icon: Award, title: "Perfect Score", description: "100% on last 3 assessments", color: "success" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Preview Image */}
            <div className="relative lg:order-2">
              <img 
                src={dashboardPreview}
                alt="Learning analytics dashboard"
                className="w-full rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl" />
            </div>
            
            {/* Content */}
            <div className="space-y-8 lg:order-1">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  <span className="text-secondary">Track Progress</span> with AI-Powered Analytics
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Get detailed insights into your learning journey. Monitor progress, identify strengths, and receive personalized recommendations to optimize your study path.
                </p>
              </div>
              
              {/* Progress Cards */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Subject Progress
                </h3>
                <div className="space-y-3">
                  {progressData.map((item, index) => (
                    <Card key={index} className="p-4 shadow-card hover:shadow-elevated transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{item.subject}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-success">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {item.trend}
                          </Badge>
                          <span className="text-sm font-semibold">{item.progress}%</span>
                        </div>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Study Stats */}
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="p-4 text-center shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-muted-foreground">Study Time This Week</div>
                </Card>
                <Card className="p-4 text-center shadow-card">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-secondary">8/10</div>
                  <div className="text-sm text-muted-foreground">Goals Completed</div>
                </Card>
                <Card className="p-4 text-center shadow-card">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent">12</div>
                  <div className="text-sm text-muted-foreground">Achievements Unlocked</div>
                </Card>
              </div>
              
              {/* Recent Achievements */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Recent Achievements
                </h3>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-card">
                      <div className={`w-10 h-10 bg-${achievement.color}/10 rounded-full flex items-center justify-center`}>
                        <achievement.icon className={`w-5 h-5 text-${achievement.color}`} />
                      </div>
                      <div>
                        <div className="font-medium">{achievement.title}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};