
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { Banknote, CreditCard, Key, Lock, Mail, MapPin, Smartphone } from "lucide-react";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSave = () => {
    toast.success("Your information has been updated!");
    setIsEditing(false);
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
        
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList>
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="payment">Payment Details</TabsTrigger>
            <TabsTrigger value="security">Security & Access</TabsTrigger>
            <TabsTrigger value="notifications">Notification Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </div>
                  <Button 
                    variant={isEditing ? "ghost" : "outline"}
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        defaultValue="John" 
                        disabled={!isEditing} 
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        defaultValue="Doe" 
                        disabled={!isEditing} 
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="flex">
                      <div className="relative flex-grow">
                        <Input 
                          id="email" 
                          defaultValue="johndoe@example.com" 
                          disabled={!isEditing} 
                          className={!isEditing ? "bg-gray-50" : ""}
                        />
                        {!isEditing && (
                          <Badge className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs bg-green-500">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      defaultValue="(555) 123-4567" 
                      disabled={!isEditing} 
                      className={!isEditing ? "bg-gray-50" : ""}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address1">Street Address</Label>
                    <Input 
                      id="address1" 
                      defaultValue="123 Main St" 
                      disabled={!isEditing} 
                      className={!isEditing ? "bg-gray-50" : ""}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        defaultValue="Springfield" 
                        disabled={!isEditing} 
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input 
                        id="state" 
                        defaultValue="IL" 
                        disabled={!isEditing} 
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input 
                        id="zip" 
                        defaultValue="62701" 
                        disabled={!isEditing} 
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>
                  
                  {isEditing && (
                    <div className="pt-4">
                      <Button onClick={handleSave}>Save Changes</Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payment" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Manage your payment methods and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                          <Banknote className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Direct Deposit</div>
                          <div className="text-sm text-gray-500">Account ending in 4567</div>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Update Banking Information</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="accountName">Name on Account</Label>
                        <Input id="accountName" defaultValue="John A. Doe" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="routingNumber">Routing Number</Label>
                          <Input id="routingNumber" defaultValue="•••••••••" />
                        </div>
                        <div>
                          <Label htmlFor="accountNumber">Account Number</Label>
                          <Input id="accountNumber" defaultValue="••••••4567" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="accountType">Account Type</Label>
                        <div className="flex space-x-6 mt-2">
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="checking" name="accountType" defaultChecked />
                            <span className="ml-2 text-sm">Checking</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="savings" name="accountType" />
                            <span className="ml-2 text-sm">Savings</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button>Update Banking Information</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-4">Alternative Payment Methods</h3>
                    <Button variant="outline">
                      <CreditCard className="h-4 w-4 mr-2" /> Switch to Prepaid Card
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Security & Access</CardTitle>
                <CardDescription>Manage your account security settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium flex items-center">
                        <Lock className="h-4 w-4 mr-2" /> Password
                      </h3>
                      <Button variant="outline" size="sm">Change Password</Button>
                    </div>
                    <div className="text-sm text-gray-500">
                      Last updated 45 days ago
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-medium flex items-center">
                          <Smartphone className="h-4 w-4 mr-2" /> Two-Factor Authentication
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="bg-gray-50 border rounded-lg p-4 mt-4">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Email Authentication</div>
                          <div className="text-sm text-gray-500">johndoe@example.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-medium flex items-center">
                          <Key className="h-4 w-4 mr-2" /> Login Sessions
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Manage your active sessions
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">Current Session</div>
                            <div className="text-sm text-gray-500">Chrome on Windows • Springfield, IL</div>
                          </div>
                          <Badge className="bg-green-500">Active Now</Badge>
                        </div>
                      </div>
                      <div className="bg-gray-50 border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">Previous Session</div>
                            <div className="text-sm text-gray-500">Safari on iPhone • Springfield, IL</div>
                          </div>
                          <Badge variant="outline">2 days ago</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="mt-4">
                      Log Out All Other Sessions
                    </Button>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-red-600">Deactivate Account</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          This will suspend your UBI payments
                        </p>
                      </div>
                      <Button variant="destructive">Deactivate</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive updates and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Payment Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Payment Processed</div>
                          <p className="text-sm text-gray-500">When your monthly payment has been sent</p>
                        </div>
                        <div className="space-x-4">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">Email</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">SMS</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Payment Delay</div>
                          <p className="text-sm text-gray-500">If your payment is delayed for any reason</p>
                        </div>
                        <div className="space-x-4">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">Email</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">SMS</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Account Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Eligibility Changes</div>
                          <p className="text-sm text-gray-500">If your eligibility status is updated</p>
                        </div>
                        <div className="space-x-4">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">Email</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">SMS</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Document Requirements</div>
                          <p className="text-sm text-gray-500">When additional documentation is needed</p>
                        </div>
                        <div className="space-x-4">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">Email</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">SMS</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Security Alerts</div>
                          <p className="text-sm text-gray-500">Unusual login attempts or changes to your account</p>
                        </div>
                        <div className="space-x-4">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">Email</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">SMS</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Program Updates</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Program Changes</div>
                          <p className="text-sm text-gray-500">Updates to the UBI program rules or benefits</p>
                        </div>
                        <div className="space-x-4">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" defaultChecked />
                            <span className="ml-2 text-sm">Email</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-sm">SMS</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Surveys & Feedback</div>
                          <p className="text-sm text-gray-500">Requests for program feedback and improvement</p>
                        </div>
                        <div className="space-x-4">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-sm">Email</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-sm">SMS</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button>Save Preferences</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Account;
