import { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, FileText, Users, Microscope } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { fakeUsers } from "@/fakeDb";
import { LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  if (isAuthenticated && user) {
    switch (user.role) {
      case 'admin':
        return <Navigate to="/dashboard" />
      case 'manager':
        return <Navigate to="/dashboard" />
      case 'lab staff':
        return <Navigate to="/dashboard" />
      case 'patient':
        return <Navigate to="/dashboard" />
    }
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const success = await login(email, password);

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
              <Link to='/'>
                <div className="bg-gradient-medical p-4 rounded-2xl shadow-medical">
                  <Microscope className="w-12 h-12 text-white" />
                </div>
              </Link>

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

            {/* Demo accounts */}
            <div className="mt-6">
              <h3 className="font-semibold text-center mb-2">🔑 Tài khoản demo</h3>
              <ul className="space-y-2 text-sm bg-muted p-3 rounded-lg">
                {fakeUsers.map((u) => (
                  <li
                    key={u.id}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-muted/70 transition"
                  >
                    <div>
                      <span className="font-medium">{u.role}</span>{" "}
                      <span className="text-muted-foreground">
                        ({u.email} / {u.password})
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="ml-2 bg-gradient-to-r from-medical-primary to-medical-secondary 
                     text-white rounded-lg shadow-md hover:shadow-lg 
                     hover:scale-105 transition-all flex items-center gap-1"
                      onClick={async () => {
                        const success = await login(u.email, u.password);
                        if (success) {
                          toast({
                            title: "Đăng nhập thành công",
                            description: `Xin chào ${u.name}`,
                          });
                          navigate("/dashboard");
                          switch (u.role) {
                            case "admin":
                              navigate("/dashboard");
                              break;
                            case "manager":
                              navigate("/dashboard");
                              break;
                            case "lab staff":
                              navigate("/dashboard");
                              break;
                            case "patient":
                              navigate("/dashboard");
                              break;
                          }


                        } else {
                          toast({
                            title: "Lỗi",
                            description: "Không thể đăng nhập",
                            variant: "destructive",
                          });
                        }
                      }}
                    >
                      <LogIn className="w-4 h-4" />
                      Kết nối
                    </Button>
                  </li>
                ))}
              </ul>
            </div>



            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                Chưa có tài khoản?{" "}
                <Link to="/register" className="text-medical-primary hover:underline font-medium">
                  Đăng ký ngay
                </Link>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
