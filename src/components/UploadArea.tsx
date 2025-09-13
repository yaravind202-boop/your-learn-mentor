import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, CheckCircle, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import documentProcessing from "@/assets/document-processing.jpg";

export const UploadArea = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();
  
  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast({
            title: "Upload Complete!",
            description: "Your document has been processed and is ready for AI analysis.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Transform Documents into 
                  <span className="text-primary"> Smart Learning</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Upload your PDFs, notes, and study materials. Our AI will analyze, process, and create personalized learning paths just for you.
                </p>
              </div>
              
              {/* Upload Card */}
              <Card className="p-8 shadow-elevated border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all group">
                <div className="text-center space-y-6">
                  {!isUploading && uploadProgress === 0 && (
                    <>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                        <Upload className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Drop your files here</h3>
                        <p className="text-muted-foreground">Support for PDF, DOCX, TXT files up to 50MB</p>
                      </div>
                      <Button onClick={handleUpload} size="lg" variant="gradient">
                        <FileText className="w-5 h-5 mr-2" />
                        Choose Files to Upload
                      </Button>
                    </>
                  )}
                  
                  {isUploading && (
                    <>
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <Zap className="w-8 h-8 text-primary animate-bounce" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Processing Document...</h3>
                        <p className="text-muted-foreground mb-4">AI is analyzing your content</p>
                        <Progress value={uploadProgress} className="w-full" />
                      </div>
                    </>
                  )}
                  
                  {uploadProgress === 100 && !isUploading && (
                    <>
                      <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-success" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-success mb-2">Ready to Learn!</h3>
                        <p className="text-muted-foreground">Your personalized study path has been created</p>
                      </div>
                      <Button size="lg" variant="hero">
                        Start Studying
                      </Button>
                    </>
                  )}
                </div>
              </Card>
              
              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Smart Processing</div>
                    <div className="text-sm text-muted-foreground">AI extracts key concepts</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Auto Assessments</div>
                    <div className="text-sm text-muted-foreground">Generated quizzes & tests</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <img 
                src={documentProcessing}
                alt="Document processing visualization"
                className="w-full rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};