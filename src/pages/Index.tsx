import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { UploadArea } from "@/components/UploadArea";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Overview */}
      <Features />
      
      {/* Upload & Document Processing */}
      <UploadArea />
      
      {/* Progress & Analytics Dashboard */}
      <ProgressDashboard />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;