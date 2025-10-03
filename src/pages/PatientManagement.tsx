import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Search,
  Filter,
  UserPlus,
  Download,
  Edit,
  Eye,
  Calendar
} from 'lucide-react';
import { PatientForm } from '@/components/forms/PatientForm';

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  // Mock data
  const patients = [
    {
      id: 'BN001',
      name: 'Nguyễn Văn An',
      birthDate: '1985-03-15',
      gender: 'Nam',
      bloodType: 'A+',
      phone: '0912345678',
      lastTest: '2024-01-15',
      status: 'active'
    },
    {
      id: 'BN002',
      name: 'Trần Thị Bình',
      birthDate: '1992-07-22',
      gender: 'Nữ',
      bloodType: 'B-',
      phone: '0987654321',
      lastTest: '2024-01-14',
      status: 'active'
    },
    {
      id: 'BN003',
      name: 'Lê Minh Cường',
      birthDate: '1978-11-08',
      gender: 'Nam',
      bloodType: 'AB+',
      phone: '0966123456',
      lastTest: '2024-01-10',
      status: 'inactive'
    },
  ];

  const getAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-medical bg-clip-text text-transparent">
            Quản lý Bệnh nhân
          </h1>
          <p className="text-muted-foreground">
            Quản lý thông tin và hồ sơ bệnh nhân
          </p>
        </div>
        <Button
          onClick={() => {
            setSelectedPatient(null);
            setShowForm(true);
          }}
          className="bg-gradient-medical hover:shadow-medical transition-all duration-300"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Thêm bệnh nhân
        </Button>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Danh sách bệnh nhân</CardTitle>
          <CardDescription>
            Tổng cộng {patients.length} bệnh nhân trong hệ thống
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Tìm kiếm theo tên, mã BN, số điện thoại..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Giới tính" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="male">Nam</SelectItem>
                  <SelectItem value="female">Nữ</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Nhóm máu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                  <SelectItem value="Rh+">Rh+</SelectItem>
                  <SelectItem value="Rh-">Rh-</SelectItem>
                  <SelectItem value="Rh+">Rh+</SelectItem>
                </SelectContent>
              </Select>




              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Độ tuổi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="under-18">Dưới 18</SelectItem>
                  <SelectItem value="18-50">18-50</SelectItem>
                  <SelectItem value="over-50">Trên 50</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Xuất Excel
              </Button>
            </div>
          </div>

          {/* Patient Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mã BN</TableHead>
                  <TableHead>Họ và tên</TableHead>
                  <TableHead>Tuổi</TableHead>
                  <TableHead>Giới tính</TableHead>
                  <TableHead>Nhóm máu</TableHead>
                  <TableHead>Số điện thoại</TableHead>
                  <TableHead>Xét nghiệm gần nhất</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.id}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{getAge(patient.birthDate)} tuổi</TableCell>
                    <TableCell>
                      <Badge variant={patient.gender === 'Nam' ? 'default' : 'secondary'}>
                        {patient.gender}
                      </Badge>
                    </TableCell>
                    <TableCell>{patient.bloodType}</TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{formatDate(patient.lastTest)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={patient.status === 'active' ? 'success' : 'secondary'}
                        className={patient.status === 'active' ? 'bg-status-completed' : ''}
                      >
                        {patient.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            // View patient details
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedPatient(patient);
                            setShowForm(true);
                          }}
                        >
                          <Edit className="w-4 h-4" />
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

      {/* Patient Form Modal */}
      {showForm && (
        <PatientForm
          patient={selectedPatient}
          onClose={() => {
            setShowForm(false);
            setSelectedPatient(null);
          }}
          onSave={(patient) => {
            // Handle save
            console.log('Save patient:', patient);
            setShowForm(false);
            setSelectedPatient(null);
          }}
        />
      )}
    </div>
  );
};

export default PatientManagement;