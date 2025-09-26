import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { TestTube, User, Mail, Lock, Shield, FileText, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { isAuthenticated } = useAuth();
    const { toast } = useToast();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!fullName || !email || !password || !confirmPassword) {
            toast({
                title: "Lỗi",
                description: "Vui lòng điền đầy đủ thông tin",
                variant: "destructive",
            });
            return;
        }

        if (password !== confirmPassword) {
            toast({
                title: "Lỗi",
                description: "Mật khẩu xác nhận không khớp",
                variant: "destructive",
            });
            return;
        }

        if (!agreeToTerms) {
            toast({
                title: "Lỗi",
                description: "Vui lòng đồng ý với điều khoản sử dụng",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast({
                title: "Đăng ký thành công",
                description: "Tài khoản đã được tạo thành công!",
            });
            setIsLoading(false);
        }, 1500);
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
                        <CardTitle className="text-2xl font-bold">Tạo tài khoản mới</CardTitle>
                        <CardDescription>
                            Điền thông tin để tạo tài khoản hệ thống
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Họ và tên</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="fullName"
                                        type="text"
                                        placeholder="Nhập họ và tên đầy đủ"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Nhập địa chỉ email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Mật khẩu</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Tạo mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="terms"
                                    checked={agreeToTerms}
                                    onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                                />
                                <Label htmlFor="terms" className="text-sm">
                                    Tôi đồng ý với{" "}
                                    <Button variant="link" className="text-medical-primary p-0 h-auto">
                                        Điều khoản sử dụng
                                    </Button>
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-medical hover:shadow-medical transition-all duration-300"
                                disabled={isLoading}
                            >
                                {isLoading ? "Đang tạo tài khoản..." : "Đăng ký"}
                            </Button>

                            <div className="text-center">
                                <span className="text-sm text-muted-foreground">
                                    Đã có tài khoản?{" "}
                                    <Link
                                        to="/login"
                                        className="text-medical-primary hover:underline font-medium"
                                    >
                                        Đăng nhập
                                    </Link>
                                </span>
                            </div>
                        </form>

                        <div className="mt-6 text-center text-sm text-muted-foreground">
                            Cần hỗ trợ?{" "}
                            <Button variant="link" className="text-medical-primary p-0">
                                Liên hệ quản trị viên
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Register;