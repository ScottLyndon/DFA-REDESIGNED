import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsModal from "@/components/TermsModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, FileText, ArrowRight, Info } from "lucide-react";

export default function Home() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [appointmentType, setAppointmentType] = useState<"individual" | "group" | null>(null);
  const [, setLocation] = useLocation();

  const handleStartAppointment = (type: "individual" | "group") => {
    setAppointmentType(type);
    setIsTermsOpen(true);
  };

  const handleTermsAccepted = () => {
    setLocation(`/appointment?type=${appointmentType}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background bg-pattern">
      <Header />
      
      <main className="flex-1 container mx-auto py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Hero Section */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Schedule an Appointment
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Welcome to the DFA Online Passport Appointment System. 
              Review all fields in the online form carefully and provide complete and accurate information.
            </p>
          </div>

          {/* Main Action Card */}
          <Card className="border-t-4 border-t-secondary shadow-lg overflow-hidden">
            <Tabs defaultValue="appointment" className="w-full">
              <div className="bg-muted/30 border-b px-6 pt-4">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="appointment">Schedule Appointment</TabsTrigger>
                  <TabsTrigger value="view">View Appointment</TabsTrigger>
                </TabsList>
              </div>
              
              <CardContent className="p-6 md:p-8">
                <TabsContent value="appointment" className="mt-0 space-y-8">
                  
                  {/* Info Alert */}
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 rounded-lg p-4 flex gap-3 items-start">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900 dark:text-blue-100">
                      <p className="font-semibold mb-1">Important Reminder</p>
                      <p>
                        Applicants are recommended to use Google or Yahoo email accounts to avoid technical incompatibilities.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div 
                      className="group relative bg-card hover:bg-accent/50 border rounded-xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col items-center text-center gap-4"
                      onClick={() => handleStartAppointment("individual")}
                    >
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg mb-2">Individual Appointment</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          For single applicants applying for a new passport or renewal.
                        </p>
                        <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                          Start Individual <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div 
                      className="group relative bg-card hover:bg-accent/50 border rounded-xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col items-center text-center gap-4"
                      onClick={() => handleStartAppointment("group")}
                    >
                      <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-8 w-8 text-secondary-foreground" />
                        <Users className="h-5 w-5 text-secondary-foreground -ml-2 opacity-70" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg mb-2">Group Appointment</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          For families or groups applying together (max 5 applicants).
                        </p>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                          Start Group <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                </TabsContent>
                
                <TabsContent value="view" className="mt-0 py-8 text-center space-y-6">
                  <div className="mx-auto h-20 w-20 bg-muted rounded-full flex items-center justify-center">
                    <FileText className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">View Existing Appointment</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Enter your appointment code and email address to view or reschedule your appointment.
                    </p>
                  </div>
                  <div className="max-w-sm mx-auto space-y-4">
                    <Button className="w-full">View Appointment</Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Requirements", icon: FileText, desc: "Check the list of acceptable IDs and documents." },
              { title: "Where to Apply", icon: Calendar, desc: "Find the nearest consular office or temporary off-site passport service." },
              { title: "FAQ", icon: Info, desc: "Frequently asked questions about passport application." },
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer border-none bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <item.icon className="h-8 w-8 text-primary/80" />
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </main>

      <Footer />
      
      <TermsModal 
        open={isTermsOpen} 
        onOpenChange={setIsTermsOpen} 
        onAccept={handleTermsAccepted} 
      />
    </div>
  );
}
