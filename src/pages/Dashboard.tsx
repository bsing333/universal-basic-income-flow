
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { CalendarIcon, CreditCard, History, Bell, MessageCircle } from "lucide-react";

// Mock data
const mockPayments = [
  { id: 1, date: "Apr 15, 2025", amount: "$1,000.00", status: "Paid" },
  { id: 2, date: "Mar 15, 2025", amount: "$1,000.00", status: "Paid" },
  { id: 3, date: "Feb 15, 2025", amount: "$1,000.00", status: "Paid" },
];

const mockNotifications = [
  {
    id: 1,
    title: "Payment Processed",
    message: "Your April payment has been processed and sent to your account.",
    date: "Apr 15, 2025",
    read: false,
  },
  {
    id: 2,
    title: "Document Verification Complete",
    message: "Your identification documents have been verified successfully.",
    date: "Apr 2, 2025",
    read: true,
  },
  {
    id: 3,
    title: "Annual Review Upcoming",
    message: "Your annual program eligibility review is scheduled for May 15.",
    date: "Mar 28, 2025",
    read: true,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Your Dashboard</h1>
            <p className="text-gray-500">Welcome back, John Doe</p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button variant="outline" asChild>
              <Link to="/account">Account Settings</Link>
            </Button>
            <Button>
              <Link to="/support">Get Help</Link>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="payments">Payment History</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="faq">FAQ & Help</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Next Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <div className="text-2xl font-bold">$1,000.00</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      May 15, 2025
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-3 bg-green-50 text-green-700 border-green-200">
                    Scheduled
                  </Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    <div className="font-medium">Direct Deposit</div>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Account ending in 4567
                  </div>
                  <Button variant="link" asChild className="p-0 mt-2 h-auto">
                    <Link to="/account">Update payment info</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Program Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-green-500">Active</Badge>
                  <div className="text-sm text-gray-500 mt-4">
                    Your next eligibility review:
                    <div className="font-medium text-black mt-1">January 2026</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Recent Payments</CardTitle>
                    <Button variant="link" asChild className="text-sm p-0 h-auto" onClick={() => setActiveTab("payments")}>
                      <Link to="#" onClick={() => setActiveTab("payments")}>View All</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockPayments.slice(0, 3).map((payment) => (
                      <div key={payment.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <div>
                          <div className="font-medium">{payment.date}</div>
                          <div className="text-sm text-gray-500">Monthly Payment</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{payment.amount}</div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {payment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Recent Notifications</CardTitle>
                    <Button variant="link" asChild className="text-sm p-0 h-auto">
                      <Link to="#" onClick={() => setActiveTab("notifications")}>View All</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNotifications.slice(0, 3).map((notification) => (
                      <div key={notification.id} className="flex space-x-3 py-2 border-b border-gray-100 last:border-0">
                        <div className={`h-2 w-2 mt-2 rounded-full ${notification.read ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
                        <div>
                          <div className="font-medium">{notification.title}</div>
                          <div className="text-sm text-gray-500">{notification.message}</div>
                          <div className="text-xs text-gray-400 mt-1">{notification.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="payments" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-3 font-medium p-4 border-b bg-gray-50">
                    <div>Date</div>
                    <div>Description</div>
                    <div className="text-right">Amount</div>
                  </div>
                  <div className="divide-y">
                    {[...mockPayments, 
                      { id: 4, date: "Jan 15, 2025", amount: "$1,000.00", status: "Paid" },
                      { id: 5, date: "Dec 15, 2024", amount: "$1,000.00", status: "Paid" },
                      { id: 6, date: "Nov 15, 2024", amount: "$1,000.00", status: "Paid" },
                    ].map((payment) => (
                      <div key={payment.id} className="grid grid-cols-3 p-4">
                        <div>{payment.date}</div>
                        <div>Monthly UBI Payment</div>
                        <div className="text-right font-medium">{payment.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <Button variant="outline" className="mx-auto">
                    <History className="h-4 w-4 mr-2" /> Load Older Payments
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Notifications</CardTitle>
                  <Button variant="outline" size="sm">
                    Mark All as Read
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[...mockNotifications, 
                    {
                      id: 4,
                      title: "Program Update",
                      message: "Important changes to the UBI program will take effect on July 1, 2025. Please review the updated terms.",
                      date: "Mar 15, 2025",
                      read: true,
                    },
                    {
                      id: 5,
                      title: "Tax Document Available",
                      message: "Your annual tax statement for 2024 is now available for download.",
                      date: "Jan 30, 2025",
                      read: true,
                    }
                  ].map((notification) => (
                    <div key={notification.id} className="flex space-x-3 pb-4 border-b border-gray-100 last:border-0">
                      <div className={`h-2 w-2 mt-2 rounded-full flex-shrink-0 ${notification.read ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
                      <div>
                        <div className="flex justify-between">
                          <div className="font-medium">{notification.title}</div>
                          <div className="text-xs text-gray-400">{notification.date}</div>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-6 text-center text-sm text-gray-500">
                  You've reached the end of your notifications
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">When will I receive my payments?</h3>
                    <p className="text-gray-600">
                      Payments are typically disbursed on the 15th of each month. If the 15th falls on a weekend or holiday, payments will be processed on the preceding business day.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What if I need to update my banking information?</h3>
                    <p className="text-gray-600">
                      You can update your banking information at any time by going to the Account Settings page. Changes may take up to 5 business days to process.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Do I need to report this income on my taxes?</h3>
                    <p className="text-gray-600">
                      Yes, UBI payments are considered taxable income. You will receive a tax document (Form 1099-G) by January 31 each year for the previous year's payments.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">How long will I receive UBI payments?</h3>
                    <p className="text-gray-600">
                      As long as you remain eligible, you will continue to receive monthly payments. Eligibility is reviewed annually.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What if my payment is delayed or missing?</h3>
                    <p className="text-gray-600">
                      If your payment is more than 3 business days late, please contact support through the Help Center. Our support team will investigate and resolve the issue.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t">
                  <h3 className="font-semibold text-lg mb-4">Need Additional Help?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 flex items-center">
                      <MessageCircle className="h-6 w-6 mr-4 text-primary" />
                      <div>
                        <h4 className="font-medium">Live Chat Support</h4>
                        <p className="text-sm text-gray-500">Available Mon-Fri, 8am-8pm</p>
                        <Button variant="link" className="p-0 h-auto mt-1">Chat Now</Button>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 flex items-center">
                      <Bell className="h-6 w-6 mr-4 text-primary" />
                      <div>
                        <h4 className="font-medium">Notification Settings</h4>
                        <p className="text-sm text-gray-500">Manage how you receive alerts</p>
                        <Button variant="link" className="p-0 h-auto mt-1">Update Preferences</Button>
                      </div>
                    </div>
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

export default Dashboard;
