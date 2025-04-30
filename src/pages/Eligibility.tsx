
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Check } from "lucide-react";

const EligibilitySteps = [
  { id: 1, name: "Personal Information" },
  { id: 2, name: "Income & Tax" },
  { id: 3, name: "Verification" },
  { id: 4, name: "Results" }
];

const Eligibility = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      toast.success("You're eligible! Let's set up your payment method.");
      navigate("/payment-setup");
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Check Your Eligibility</h1>
        
        {/* Step indicators */}
        <div className="mb-12">
          <div className="flex justify-between relative max-w-3xl mx-auto">
            <div className="step-connector"></div>
            
            {EligibilitySteps.map((s, index) => {
              const isActive = s.id === step;
              const isCompleted = s.id < step;
              
              return (
                <div key={s.id} className="flex flex-col items-center relative z-10">
                  <div 
                    className={`step-indicator ${isActive ? 'active' : isCompleted ? 'completed' : 'inactive'}`}
                  >
                    {isCompleted ? <Check className="h-4 w-4" /> : s.id}
                  </div>
                  <span className={`text-sm mt-2 ${isActive ? 'font-medium' : 'text-gray-500'}`}>
                    {s.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ssn">Social Security Number</Label>
                    <Input id="ssn" placeholder="XXX-XX-XXXX" required />
                    <p className="text-xs text-gray-500">Your SSN is securely encrypted and protected</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(XXX) XXX-XXXX" required />
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Income & Tax Information</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="filingStatus">Tax Filing Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select filing status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="joint">Married Filing Jointly</SelectItem>
                      <SelectItem value="separate">Married Filing Separately</SelectItem>
                      <SelectItem value="head">Head of Household</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="annualIncome">Annual Household Income</Label>
                  <Input id="annualIncome" type="number" placeholder="Enter your annual income" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="householdSize">Household Size (including yourself)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select household size" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                      <SelectItem value="9+">9 or more</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastTaxYear">Last Year You Filed Taxes</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tax year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="notFiled">I haven't filed taxes recently</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Address & Verification</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="Enter your street address" required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AL">Alabama</SelectItem>
                        <SelectItem value="AK">Alaska</SelectItem>
                        <SelectItem value="AZ">Arizona</SelectItem>
                        {/* More states would be added here */}
                        <SelectItem value="WY">Wyoming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="ZIP Code" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="residencyStatus">Residency Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="citizen">U.S. Citizen</SelectItem>
                      <SelectItem value="permanent">Permanent Resident</SelectItem>
                      <SelectItem value="temporary">Temporary Resident</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            
            {step === 4 && (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">You're Eligible!</h2>
                <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
                  Congratulations! Based on the information you've provided, you're eligible for the Universal Basic Income program.
                </p>
                <p className="mb-6 text-gray-600">
                  The next step is to set up your payment method.
                </p>
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              {step === 1 && <div></div>}
              <Button onClick={handleNext}>
                {step < 4 ? "Continue" : "Set Up Payments"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Eligibility;
