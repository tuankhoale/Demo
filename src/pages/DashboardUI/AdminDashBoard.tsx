import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Users,
    Activity,
    FileText,
    Shield,
    Search,
    Plus,
    Edit,
    Trash2,
    ArrowLeft,
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

// === import fake data ===
import { fakeUsers, User } from "@/fakeDb";

// extend User để có thêm status + lastLogin cho UI
interface ExtendedUser extends User {
    status: "active" | "inactive";
    lastLogin: string;
}

const initialUsers: ExtendedUser[] = fakeUsers.map((u, i) => ({
    ...u,
    status: i % 2 === 0 ? "active" : "inactive",
    lastLogin: `2025-09-${10 + i} 0${i}:30`,
}));

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<ExtendedUser[]>(initialUsers);
    const [searchQuery, setSearchQuery] = useState("");
    const [editingUser, setEditingUser] = useState<ExtendedUser | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const getRoleBadgeVariant = (role: string) => {
        switch (role) {
            case "admin":
                return "destructive";
            case "manager":
                return "default";
            case "lab staff":
                return "secondary";
            case "patient":
                return "outline";
            default:
                return "outline";
        }
    };

    const getStatusBadgeVariant = (status: string) => {
        return status === "active" ? "default" : "secondary";
    };

    const handleEditUser = (user: ExtendedUser) => {
        setEditingUser(user);
        setIsDialogOpen(true);
    };

    const handleSaveUser = () => {
        if (editingUser) {
            setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
            toast.success("Cập nhật thành công!");
        }
        setIsDialogOpen(false);
        setEditingUser(null);
    };

    const handleDeleteUser = (userId: string) => {
        setUsers(users.filter((u) => u.id !== userId));
        toast.success("Đã xóa người dùng!");
    };

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const stats = [
        { title: "Tổng người dùng", value: users.length, icon: Users, color: "text-medical-blue" },
        { title: "Đang hoạt động", value: users.filter((u) => u.status === "active").length, icon: Activity, color: "text-green-600" },
        { title: "Xét nghiệm hôm nay", value: 24, icon: FileText, color: "text-blue-600" },
        { title: "Admin", value: users.filter((u) => u.role === "admin").length, icon: Shield, color: "text-red-600" },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>

                </div>
            </div>



            <main className="container mx-auto px-4 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <Card key={index} className="hover:shadow-md transition-all duration-300">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </CardTitle>
                                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">{stat.value}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* User Management */}
                <Card>
                    <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <CardTitle>Quản lý người dùng</CardTitle>
                                <CardDescription>Phân quyền và quản lý tài khoản hệ thống</CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative flex-1 md:w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Tìm kiếm người dùng..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-9"
                                    />
                                </div>
                                <Button variant="default" className="gap-2">
                                    <Plus className="h-4 w-4" />
                                    Thêm mới
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Tên</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Vai trò</TableHead>
                                        <TableHead>Trạng thái</TableHead>
                                        <TableHead>Đăng nhập cuối</TableHead>
                                        <TableHead className="text-right">Thao tác</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredUsers.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell className="font-medium">{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                <Badge variant={getRoleBadgeVariant(user.role)}>
                                                    {user.role}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant={getStatusBadgeVariant(user.status)}>
                                                    {user.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-sm text-muted-foreground">
                                                {user.lastLogin}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleEditUser(user)}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleDeleteUser(user.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </main>

            {/* Edit User Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Chỉnh sửa người dùng</DialogTitle>
                        <DialogDescription>
                            Cập nhật thông tin và phân quyền người dùng
                        </DialogDescription>
                    </DialogHeader>
                    {editingUser && (
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Tên</Label>
                                <Input
                                    id="name"
                                    value={editingUser.name}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, name: e.target.value })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={editingUser.email}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, email: e.target.value })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="role">Vai trò</Label>
                                <Select
                                    value={editingUser.role}
                                    onValueChange={(value: any) =>
                                        setEditingUser({ ...editingUser, role: value })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="manager">Manager</SelectItem>
                                        <SelectItem value="lab staff">Lab Staff</SelectItem>
                                        <SelectItem value="patient">Patient</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="status">Trạng thái</Label>
                                <Select
                                    value={editingUser.status}
                                    onValueChange={(value: any) =>
                                        setEditingUser({ ...editingUser, status: value })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="inactive">Inactive</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                            Hủy
                        </Button>
                        <Button variant="default" onClick={handleSaveUser}>
                            Lưu thay đổi
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AdminDashboard;
