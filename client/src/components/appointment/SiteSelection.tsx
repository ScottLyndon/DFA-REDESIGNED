import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface SiteSelectionProps {
  onNext: (data: any) => void;
  initialData: any;
}

export default function SiteSelection({ onNext, initialData }: SiteSelectionProps) {
  const [region, setRegion] = useState(initialData.region || "");
  const [country, setCountry] = useState(initialData.country || "Philippines");
  const [site, setSite] = useState(initialData.site || "");

  const regions = [
    { value: "ncr", label: "National Capital Region (NCR)" },
    { value: "luzon", label: "Luzon" },
    { value: "visayas", label: "Visayas" },
    { value: "mindanao", label: "Mindanao" },
  ];

  const sites = {
    ncr: [
      "DFA Aseana (Parañaque)",
      "DFA NCR East (SM Megamall)",
      "DFA NCR North (Robinsons Novaliches)",
      "DFA NCR Northeast (Ali Mall)",
      "DFA NCR South (Alabang Town Center)",
      "DFA NCR West (SM Manila)",
    ],
    luzon: ["DFA Baguio", "DFA Pampanga", "DFA Lucena"],
    visayas: ["DFA Cebu", "DFA Iloilo", "DFA Tacloban"],
    mindanao: ["DFA Davao", "DFA Cagayan de Oro", "DFA General Santos"],
  };

  const handleNext = () => {
    if (region && site) {
      onNext({ region, country, site });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Site Location
          </CardTitle>
          <CardDescription>
            Please select the location where you want to schedule your appointment.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Region</label>
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {region && (
            <div className="space-y-2 animate-in fade-in zoom-in-95 duration-300">
              <label className="text-sm font-medium">Site</label>
              <Select value={site} onValueChange={setSite}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Site" />
                </SelectTrigger>
                <SelectContent>
                  {sites[region as keyof typeof sites].map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleNext} disabled={!region || !site} size="lg">
          Next Step
        </Button>
      </div>
    </div>
  );
}
