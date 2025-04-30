
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white py-4">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <div className="h-8 w-8 rounded-full bg-white text-primary flex items-center justify-center font-bold">U</div>
            Universal Basic Income Program
          </Link>
          {location.pathname !== "/" && (
            <nav className="space-x-4 text-sm">
              <Link to="/eligibility" className={cn("hover:underline", location.pathname.includes("/eligibility") && "font-semibold")}>
                Check Eligibility
              </Link>
              <Link to="/dashboard" className={cn("hover:underline", location.pathname.includes("/dashboard") && "font-semibold")}>
                Dashboard
              </Link>
              <Link to="/account" className={cn("hover:underline", location.pathname.includes("/account") && "font-semibold")}>
                My Account
              </Link>
            </nav>
          )}
          {location.pathname !== "/" && (
            <Link to="/login" className="text-sm font-medium hover:underline">
              Sign Out
            </Link>
          )}
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-50 border-t py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">UBI Program</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>About the Program</li>
                <li>Eligibility Requirements</li>
                <li>How It Works</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Report Fraud</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <p className="text-sm text-gray-600">
                This is a prototype demonstration. In a real implementation, this would contain official
                legal information, terms of service, and compliance details.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Universal Basic Income Program. Prototype for demonstration purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
