import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { User, Mail, Shield, Calendar, MapPin, Phone, Edit3, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
    const { user } = useAuth();
    const { toast } = useToast();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '+84 123 456 789',
        address: 'Hà Nội, Việt Nam',
        department: 'Khoa Xét nghiệm',
        joinDate: '01/01/2023'
    });

    const handleSave = () => {
        // Simulate save
        toast({
            title: "Cập nhật thành công",
            description: "Thông tin cá nhân đã được cập nhật.",
        });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({
            name: user?.name || '',
            email: user?.email || '',
            phone: '+84 123 456 789',
            address: 'Hà Nội, Việt Nam',
            department: 'Khoa Xét nghiệm',
            joinDate: '01/01/2023'
        });
        setIsEditing(false);
    };

    return (
        <div className="space-y-6 animate-slide-up">
            <div>
                <h1 className="text-3xl font-bold bg-gradient-medical bg-clip-text text-transparent">
                    Thông tin cá nhân
                </h1>
                <p className="text-muted-foreground">
                    Quản lý thông tin tài khoản và cài đặt cá nhân
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Profile Card */}
                <Card className="lg:col-span-1">
                    <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src={user?.avatar} alt={user?.name} />
                                <AvatarFallback className="bg-medical-secondary text-medical-primary text-lg">
                                    {user?.name?.split(' ').map(n => n[0]).join('').slice(0, 2) || 'U'}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        <CardTitle className="text-xl">{user?.name}</CardTitle>
                        <CardDescription>{user?.email}</CardDescription>
                        <div className="flex justify-center mt-2">
                            <Badge variant="secondary" className="text-sm bg-medical-secondary text-medical-primary">
                                <Shield className="w-3 h-3 mr-1" />
                                {user?.role}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{formData.address}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>Gia nhập: {formData.joinDate}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>{formData.phone}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Information Form */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Thông tin chi tiết</CardTitle>
                                <CardDescription>
                                    Cập nhật thông tin cá nhân của bạn
                                </CardDescription>
                            </div>
                            {!isEditing ? (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setIsEditing(true)}
                                    className="border-medical-primary text-medical-primary hover:bg-medical-secondary"
                                >
                                    <Edit3 className="w-4 h-4 mr-2" />
                                    Chỉnh sửa
                                </Button>
                            ) : (
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleCancel}
                                    >
                                        <X className="w-4 h-4 mr-2" />
                                        Hủy
                                    </Button>
                                    <Button
                                        size="sm"
                                        onClick={handleSave}
                                        className="bg-medical-primary hover:bg-medical-primary/90"
                                    >
                                        <Save className="w-4 h-4 mr-2" />
                                        Lưu
                                    </Button>
                                </div>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="flex items-center">
                                    <User className="w-4 h-4 mr-2" />
                                    Họ và tên
                                </Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    disabled={!isEditing}
                                    className={!isEditing ? "bg-muted" : ""}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    disabled={!isEditing}
                                    className={!isEditing ? "bg-muted" : ""}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Số điện thoại
                                </Label>
                                <Input
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    disabled={!isEditing}
                                    className={!isEditing ? "bg-muted" : ""}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="department" className="flex items-center">
                                    <Shield className="w-4 h-4 mr-2" />
                                    Khoa/Phòng
                                </Label>
                                <Input
                                    id="department"
                                    value={formData.department}
                                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                    disabled={!isEditing}
                                    className={!isEditing ? "bg-muted" : ""}
                                />
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <Label htmlFor="address" className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    Địa chỉ
                                </Label>
                                <Input
                                    id="address"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    disabled={!isEditing}
                                    className={!isEditing ? "bg-muted" : ""}
                                />
                            </div>
                        </div>

                        <Separator className="my-6" />

                        <div className="space-y-4">
                            <h3 className="font-medium">Thống kê hoạt động</h3>
                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="text-center p-4 rounded-lg bg-medical-secondary/20">
                                    <div className="text-2xl font-bold text-medical-primary">127</div>
                                    <div className="text-sm text-muted-foreground">Xét nghiệm đã xử lý</div>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-medical-secondary/20">
                                    <div className="text-2xl font-bold text-medical-primary">23</div>
                                    <div className="text-sm text-muted-foreground">Bệnh nhân đã khám</div>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-medical-secondary/20">
                                    <div className="text-2xl font-bold text-medical-primary">98%</div>
                                    <div className="text-sm text-muted-foreground">Độ chính xác</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Profile;