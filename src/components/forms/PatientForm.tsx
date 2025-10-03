import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface PatientFormData {
  id?: string;
  name: string;
  birthDate: string;
  gender: string;
  phone: string;
  bloodType: string;
  address: string;
  email?: string;
  notes?: string;
}

interface PatientFormProps {
  patient?: PatientFormData | null;
  onClose: () => void;
  onSave: (patient: PatientFormData) => void;
}

export function PatientForm({ patient, onClose, onSave }: PatientFormProps) {
  const [formData, setFormData] = useState<PatientFormData>({
    name: '',
    birthDate: '',
    gender: '',
    phone: '',
    bloodType: '',
    address: '',
    email: '',
    notes: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (patient) {
      setFormData({
        id: patient.id,
        name: patient.name || '',
        birthDate: patient.birthDate || '',
        gender: patient.gender || '',
        phone: patient.phone || '',
        bloodType: patient.bloodType || '',
        address: patient.address || '',
        email: patient.email || '',
        notes: patient.notes || '',
      });
    }
  }, [patient]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.birthDate || !formData.gender || !formData.phone) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      onSave(formData);

      toast({
        title: patient ? "Cập nhật thành công" : "Thêm bệnh nhân thành công",
        description: `Thông tin bệnh nhân ${formData.name} đã được ${patient ? 'cập nhật' : 'thêm vào hệ thống'}`,
      });
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi lưu thông tin bệnh nhân",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof PatientFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {patient ? 'Chỉnh sửa thông tin bệnh nhân' : 'Thêm bệnh nhân mới'}
          </DialogTitle>
          <DialogDescription>
            {patient
              ? 'Cập nhật thông tin chi tiết của bệnh nhân'
              : 'Nhập thông tin chi tiết để tạo hồ sơ bệnh nhân mới'
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Họ và tên <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDate" className="text-sm font-medium">
                  Ngày sinh <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Giới tính <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn giới tính" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Nam">Nam</SelectItem>
                    <SelectItem value="Nữ">Nữ</SelectItem>
                    <SelectItem value="Khác">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bloodType" className="text-sm font-medium">
                  Nhóm máu <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.bloodType} onValueChange={(value) => handleInputChange('bloodType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn nhóm máu" />
                  </SelectTrigger>
                  <SelectContent>
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Số điện thoại <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium">Địa chỉ</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Nhập địa chỉ"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Nhập địa chỉ email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm font-medium">Ghi chú</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Nhập ghi chú (tiền sử bệnh, dị ứng...)"
                rows={3}
              />
            </div>
          </div>

          <DialogFooter className="space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Hủy
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-medical hover:shadow-medical"
            >
              {isLoading
                ? (patient ? 'Đang cập nhật...' : 'Đang thêm...')
                : (patient ? 'Cập nhật' : 'Thêm bệnh nhân')
              }
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}