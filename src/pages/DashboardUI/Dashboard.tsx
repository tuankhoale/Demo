import { StatsCard } from '@/components/dashboard/StatsCard';
import { ChartCard } from '@/components/dashboard/ChartCard';
import { ActivityList } from '@/components/dashboard/ActivityList';
import { useAuth } from "@/contexts/AuthContext";
import PatientDashboard from './PatientDashBoard';
import LabStaffDashboard from './LabStaffDashBoard';
import ManagerDashboard from './ManagerDashBoard';
import AdminDashboard from './AdminDashBoard';


const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  switch (user.role) {
    case "admin":
      return <AdminDashboard />;
    case "manager":
      return <ManagerDashboard />;
    case "lab staff":
      return <LabStaffDashboard />;
    case "patient":
      return <PatientDashboard />;
    default:
      return <div>Role không hợp lệ</div>;
  }
};

export default Dashboard;