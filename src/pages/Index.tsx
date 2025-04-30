
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/10 to-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Universal Basic Income Program</h1>
            <p className="text-xl text-gray-600 mb-8">
              Financial stability for every eligible citizen. Check if you qualify for monthly payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/eligibility">Check My Eligibility</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Check Eligibility</h3>
                <p className="text-gray-600">
                  Complete a simple form to verify your eligibility for the Universal Basic Income program.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Set Up Payments</h3>
                <p className="text-gray-600">
                  Choose direct deposit or a prepaid debit card to receive your monthly payments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Manage Your Account</h3>
                <p className="text-gray-600">
                  Track your payment history, update your information, and receive notifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Who is eligible for the UBI Program?</h3>
                <p className="text-gray-600">
                  Eligibility is based on citizenship status, income level, and tax filing history. You must be at least 18 years of age and meet certain income thresholds.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How much will I receive each month?</h3>
                <p className="text-gray-600">
                  The standard monthly payment is $1,000 per eligible adult. This amount may vary based on program adjustments and individual circumstances.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">How will I receive my payments?</h3>
                <p className="text-gray-600">
                  You can choose to receive payments via direct deposit to your bank account or through a government-issued prepaid debit card.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">When will payments begin?</h3>
                <p className="text-gray-600">
                  After your eligibility is confirmed and payment method is set up, your first payment will typically be processed within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
