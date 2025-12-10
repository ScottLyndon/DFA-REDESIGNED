import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle } from "lucide-react";

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
}

export default function TermsModal({ open, onOpenChange, onAccept }: TermsModalProps) {
  const [agreed, setAgreed] = useState(false);

  // Reset agreement when modal opens
  useEffect(() => {
    if (open) setAgreed(false);
  }, [open]);

  const handleAccept = () => {
    if (agreed) {
      onAccept();
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl font-serif text-primary flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-secondary-foreground" />
            Terms and Conditions
          </DialogTitle>
          <DialogDescription>
            Please read and accept the terms before proceeding.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-1 p-6 pt-2">
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
              <h4 className="font-bold text-foreground mb-2">Important Reminder</h4>
              <p>
                Applicants are recommended to use only Google or Yahoo email accounts in securing an appointment to avoid any technical incompatibilities. 
                <strong> Email address restrictions and accessibility may vary on your access location, country and/or email servers.</strong>
              </p>
            </div>

            <p>This appointment and scheduling system allocates slots on a first come, first served basis.</p>
            
            <p>
              Users accept the responsibility for supplying, checking, and verifying the accuracy and correctness of the information they provide on this system in connection with their application. 
              Incorrect or inaccurate information supplied may result in forfeiture of passport application.
            </p>
            
            <p>
              <strong>For Sites utilizing the ePayment System,</strong> all fees are non-refundable. Fees shall be forfeited for applicants who fail to show up on their confirmed appointment, 
              applicants who cancel their appointment, applicants whose application was rejected due to inconsistency and/or incorrect information, and applicants who present discrepant and/or spurious documents.
            </p>
            
            <div className="bg-muted p-4 rounded-lg border border-border mt-4">
              <p className="italic font-medium text-foreground">
                By proceeding with this application, I understand that I am signifying my unequivocal consent to the disclosure, collection, and use of my personal information and the data required under the Philippine Passport Act as amended and its Implementing Rules and Regulations. 
                My consent effectively constitutes a waiver of any and all privacy rights pertaining to the disclosure, collection, and use of my personal information and data under the specific terms and condition of the DFA Online Passport Appointment System Website's Privacy Policy, the Data Privacy Act of 2012 and its Implementing Rules and Regulations, and other pertinent DFA rules, regulations, policies on the matter.
              </p>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="p-6 border-t bg-muted/20 flex-col sm:flex-row gap-4 items-center sm:justify-between">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Checkbox 
              id="terms" 
              checked={agreed} 
              onCheckedChange={(checked) => setAgreed(checked as boolean)} 
            />
            <Label 
              htmlFor="terms" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              I agree to the Terms and Conditions
            </Label>
          </div>
          <Button 
            onClick={handleAccept} 
            disabled={!agreed}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
          >
            Start Appointment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
