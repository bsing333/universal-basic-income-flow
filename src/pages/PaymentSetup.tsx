
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Check, CreditCard, Banknote } from "lucide-react";

const PaymentSetup = () => {
  const [paymentMethod, setPaymentMethod] = useState("directDeposit");
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Payment method successfully set up!");
    navigate("/dashboard");
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Set Up Your Payment Method</h1>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Label className="text-lg font-medium">Select Payment Method</Label>
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === "directDeposit" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="directDeposit" id="directDeposit" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="directDeposit" className="flex items-center text-base font-medium cursor-pointer">
                          <Banknote className="h-5 w-5 mr-2" /> Direct Deposit
                        </Label>
                        <p className="text-sm text-gray-500 mt-1">
                          Receive payments directly to your bank account. Payments typically arrive in 1-3 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === "prepaidCard" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="prepaidCard" id="prepaidCard" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="prepaidCard" className="flex items-center text-base font-medium cursor-pointer">
                          <CreditCard className="h-5 w-5 mr-2" /> Prepaid Debit Card
                        </Label>
                        <p className="text-sm text-gray-500 mt-1">
                          Receive a government-issued prepaid debit card. Card will be mailed within 7-10 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              {paymentMethod === "directDeposit" && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-medium">Bank Information</h3>
                  
                  <div className="space-y-3">
                    <Label htmlFor="accountName">Name on Account</Label>
                    <Input id="accountName" placeholder="Enter the name on your account" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="routingNumber">Routing Number</Label>
                      <Input id="routingNumber" placeholder="9 digit routing number" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input id="accountNumber" placeholder="Your account number" required />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="accountType">Account Type</Label>
                    <RadioGroup defaultValue="checking" className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="checking" id="checking" />
                        <Label htmlFor="checking">Checking</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="savings" id="savings" />
                        <Label htmlFor="savings">Savings</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-start space-x-2 text-sm text-gray-600">
                      <Check className="h-5 w-5 text-success" />
                      <div>
                        <p>To verify your bank account information, we'll make two small deposits (less than $1.00 each) within 1-3 business days.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {paymentMethod === "prepaidCard" && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-medium">Mailing Address</h3>
                  
                  <div className="space-y-3">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="Enter your street address" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="State" required />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="ZIP Code" required />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-start space-x-2 text-sm text-gray-600">
                      <Check className="h-5 w-5 text-success" />
                      <div>
                        <p>Your prepaid debit card will be mailed to this address within 7-10 business days. You'll need to activate it when it arrives.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="border-t pt-6 flex flex-col">
                <p className="text-sm text-gray-500 mb-4">
                  By submitting this form, you confirm that the information provided is accurate and that you authorize the Universal Basic Income Program to deposit funds using the selected method.
                </p>
                <Button type="submit" size="lg">
                  Submit Payment Information
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PaymentSetup;
