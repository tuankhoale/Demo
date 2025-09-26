import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, FileText, Users, TestTube, Microscope, Stethoscope } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const { toast } = useToast();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !role) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const success = await login(email, password, role);

    if (success) {
      toast({
        title: "Đăng nhập thành công",
        description: "Chào mừng bạn quay trở lại!",
      });
    } else {
      toast({
        title: "Đăng nhập thất bại",
        description: "Email hoặc mật khẩu không chính xác",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-secondary to-background flex">
      {/* Left Column */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8 animate-fade-in">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-gradient-medical p-4 rounded-2xl shadow-medical">
                <TestTube className="w-12 h-12 text-white" />
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold bg-gradient-medical bg-clip-text text-transparent">
                Phòng Xét nghiệm Máu
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Hệ thống quản lý xét nghiệm hiện đại và chuyên nghiệp
              </p>
            </div>

            <div className="grid gap-4 text-center">
              <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-xl shadow-card">
                <Shield className="w-8 h-8 text-medical-primary" />
                <div>
                  <h3 className="font-semibold">Bảo mật cao cấp</h3>
                  <p className="text-sm text-muted-foreground">Dữ liệu được mã hóa và bảo vệ tuyệt đối</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-xl shadow-card">
                <FileText className="w-8 h-8 text-medical-primary" />
                <div>
                  <h3 className="font-semibold">Báo cáo chi tiết</h3>
                  <p className="text-sm text-muted-foreground">Thống kê và phân tích toàn diện</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-xl shadow-card">
                <Users className="w-8 h-8 text-medical-primary" />
                <div>
                  <h3 className="font-semibold">Quản lý đa vai trò</h3>
                  <p className="text-sm text-muted-foreground">Phân quyền linh hoạt theo chức vụ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md shadow-elevated animate-scale-in">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold">Đăng nhập hệ thống</CardTitle>
            <CardDescription>
              Vui lòng nhập thông tin để truy cập hệ thống
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập địa chỉ email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Vai trò</Label>
                <Select onValueChange={setRole} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn vai trò của bạn" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4" />
                        <span>Admin</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="Manager">
                      <div className="flex items-center space-x-2">
                        <Stethoscope className="w-4 h-4" />
                        <span>Manager</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="Lab Staff">
                      <div className="flex items-center space-x-2">
                        <Stethoscope className="w-4 h-4" />
                        <span>Lab Staff</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="Bệnh nhân">
                      <div className="flex items-center space-x-2">
                        <Microscope className="w-4 h-4" />
                        <span>Bệnh nhân</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm">Ghi nhớ đăng nhập</Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-medical hover:shadow-medical transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-sm text-medical-primary">
                  Quên mật khẩu?
                </Button>
              </div>
            </form>

            <div className="text-center ">
              <span className="text-sm text-muted-foreground">
                Chưa có tài khoản?{" "}
                <Link to="/register" className="text-medical-primary hover:underline font-medium">Đăng ký ngay</Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;