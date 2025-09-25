# Blood Test Management System 🧪

## Project Overview  
Ứng dụng hỗ trợ quản lý xét nghiệm máu, dành cho bệnh viện, phòng xét nghiệm, hoặc trung tâm y tế.  
Mục tiêu: cung cấp giao diện trực quan, chức năng đầy đủ để quản lý bệnh nhân, quản lý xét nghiệm, thống kê và báo cáo.  

### Vai trò người dùng  
- **Admin**: quản lý toàn bộ hệ thống (người dùng, bệnh nhân, xét nghiệm).  
- **Staff**: thực hiện xét nghiệm, nhập kết quả, quản lý bệnh nhân.  
- **Viewer**: chỉ được xem dữ liệu (bệnh nhân, kết quả xét nghiệm, báo cáo).  

---

## Tech Stack  
- Frontend: React + Vite + TypeScript  
- UI / Styling: Tailwind CSS + shadcn-ui  
- State / Data Fetching: React Query / Axios  
- Backend: *(Ví dụ: Node.js / Express / .NET Core / Java Spring Boot — bạn chỉnh lại)*  
- Database: MySQL / SQL Server  
- Kiến trúc: phân tầng rõ ràng (Controllers / Services / Repositories / Entities)  

---

## Project Structure

```
├── src/
│   ├── components/       # các component tái sử dụng UI  
│   ├── contexts/         # React contexts (Auth, Theme, v.v.)  
│   ├── hooks/             # custom hooks  
│   ├── lib/               # các hàm trợ giúp, tiện ích  
│   ├── pages/             # các trang (Dashboard, Patients, Tests...)  
│   ├── services/          # lớp gọi API (HTTP client)  
│   ├── types/             # định nghĩa TypeScript types / interfaces  
│   └── App.tsx            # entry point  
├── public/                # tài nguyên tĩnh  
├── package.json  
├── tsconfig.json  
└── README.md  
```

---

## Getting Started

### Prerequisites  
- Node.js (v18 hoặc cao hơn)  
- npm hoặc yarn  
- Database (MySQL / SQL Server)  
- Nếu backend tách riêng: cần môi trường phù hợp (ví dụ .NET SDK, Java, v.v.)

### Installation & Setup

1. **Clone repository**  
   ```bash
   git clone <YOUR_REPO_URL>
   cd blood-test-management
   ```

2. **Cài dependency frontend**  
   ```bash
   npm install
   # hoặc nếu dùng yarn:
   # yarn install
   ```

3. **Cấu hình backend / API**  
   - Tạo file `.env` (nếu dùng Node.js) hoặc chỉnh file config tương ứng  
     ```env
     VITE_API_BASE_URL=http://localhost:5000/api
     ```
   - Nếu backend tích hợp trong cùng repo, chỉnh cấu hình kết nối database.  
   - Tạo database mới (ví dụ `blood_test_db`).  
   - Chạy migration / khởi tạo schema (nếu có)  
     ```bash
     # ví dụ cho Node.js + Prisma:
     npx prisma migrate dev
     # hoặc nếu dùng .NET EF Core:
     dotnet ef database update
     ```

### Running the Application

1. **Chạy backend (nếu có trong repo hoặc tách riêng)**  
   Ví dụ:
   ```bash
   npm run start:server
   ```
   hoặc:
   ```bash
   dotnet run --project path/to/backend
   ```

2. **Chạy frontend**  
   ```bash
   npm run dev
   ```
   Mở browser truy cập `http://localhost:5173`  

---

## Contributing  
1. Fork repository  
2. Tạo branch feature: `git checkout -b feature/nghiem-sang`  
3. Commit thay đổi: `git commit -m "Add new test management feature"`  
4. Push lên branch: `git push origin feature/nghiem-sang`  
5. Mở Pull Request  

---

## License  
Dự án này được cấp phép theo **MIT License** (bạn có thể đổi nếu muốn).  

---

## Support  
Nếu gặp lỗi, bạn có thể mở issue trong repository hoặc liên hệ tác giả dự án để được hỗ trợ.
