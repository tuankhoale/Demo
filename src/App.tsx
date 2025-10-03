import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/components/theme-provider";


import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/DashboardUI/Dashboard";
import PatientManagement from "./pages/PatientManagement";
import TestManagement from "./pages/TestManagement";
import ResultsManagement from "./pages/ResultsManagement";
import Reports from "./pages/Reports";
import StaffManagement from "./pages/StaffManagement";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import PATHS from "./routes/paths";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="lab-project-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Homepage */}
              <Route path={PATHS.HOME} element={<HomePage />} />

              {/* Auth */}
              <Route path={PATHS.LOGIN} element={<Login />} />
              <Route path={PATHS.REGISTER} element={<Register />} />


              {/* Dashboard Pages (independent) */}
              <Route path={PATHS.DASHBOARD} element={<SidebarProvider> <DashboardLayout /> </SidebarProvider>} >
                <Route index element={<Dashboard />} />

                <Route path="patients" element={<PatientManagement />} />
                <Route path="tests" element={<TestManagement />} />
                <Route path="results" element={<ResultsManagement />} />
                <Route path="reports" element={<Reports />} />
                <Route path="staff" element={<StaffManagement />} />
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile />} />

                {/* Patient specific routes */}
                <Route path="my-tests" element={<div>My Tests Page</div>} />
                <Route path="my-results" element={<div>My Results Page</div>} />
                <Route path="appointments" element={<div>Appointments Page</div>} />
                <Route path="notifications" element={<div>Notifications Page</div>} />

                {/* Lab Staff specific routes */}
                <Route path="schedule" element={<div>Schedule Page</div>} />
              </Route>



            </Routes>

          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider >
);

export default App;