import PATHS from "@/routes/paths";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Danh sách ảnh cho slider
const images = [
    {
        src: "src/assets/images/banner.jpg",
        alt: "Medical Dashboard",
        frameClass: "rounded-2xl shadow-lg",
    },
    {
        src: "src/assets/images/Doctor Consultation.jpg",
        alt: "Doctor Consultation",
        frameClass: "rounded-2xl border-4 border-blue-200",
    },
    {
        src: "src/assets/images/Blood Test.jpg",
        alt: "Blood Test",
        frameClass: "rounded-full shadow-xl",
    },
];

function HomePage() {
    const [imgIdx, setImgIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIdx((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const current = images[imgIdx];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-700 flex items-center gap-3">
                        <img src="src/assets/images/logo.png" alt="Logo" className="w-12 h-12" />
                        Hệ thống Quản lý Phòng Xét nghiệm Máu
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Nền tảng y tế thông minh giúp bạn theo dõi kết quả xét nghiệm,
                        quản lý lịch hẹn và đơn thuốc nhanh chóng, chính xác và an toàn.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <Link
                            to={PATHS.LOGIN}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            to={PATHS.REGISTER}
                            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src={current.src}
                        alt={current.alt}
                        className={`w-96 h-64 object-cover ${current.frameClass}`}
                    />
                </div>
            </section>

            {/* Features */}
            <section className="py-12 px-8 md:px-16 text-center">
                <h2 className="text-2xl font-bold mb-8">Tính năng nổi bật</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <span className="text-3xl">📅</span>
                        <h3 className="font-semibold mt-2">Đặt lịch hẹn</h3>
                        <p className="text-gray-600">Chủ động chọn thời gian khám phù hợp.</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <span className="text-3xl">🧪</span>
                        <h3 className="font-semibold mt-2">Kết quả xét nghiệm</h3>
                        <p className="text-gray-600">Xem và tải về chỉ với một cú nhấp.</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <span className="text-3xl">💊</span>
                        <h3 className="font-semibold mt-2">Đơn thuốc</h3>
                        <p className="text-gray-600">Theo dõi lịch sử điều trị dễ dàng.</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <span className="text-3xl">🔔</span>
                        <h3 className="font-semibold mt-2">Thông báo</h3>
                        <p className="text-gray-600">Cập nhật tin tức mới nhất từ phòng khám.</p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-12 px-8 md:px-16 bg-blue-100">
                <h2 className="text-2xl font-bold mb-6 text-center">Lợi ích dành cho bạn</h2>
                <ul className="space-y-3 text-lg text-gray-700 max-w-2xl mx-auto">
                    <li>✅ Truy cập kết quả mọi lúc, mọi nơi</li>
                    <li>✅ Bảo mật thông tin tuyệt đối</li>
                    <li>✅ Giao diện thân thiện, dễ sử dụng</li>
                    <li>✅ Hỗ trợ trực tuyến từ đội ngũ y tế</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section className="py-12 px-8 md:px-16 text-center">
                <h2 className="text-2xl font-bold mb-8">Bệnh nhân nói gì?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <p className="text-gray-700 italic">
                            “Hệ thống rất tiện lợi, tôi có thể xem kết quả xét nghiệm ngay tại nhà.”
                        </p>
                        <span className="block mt-2 text-blue-600">- Nguyễn Văn A</span>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <p className="text-gray-700 italic">
                            “Đặt lịch hẹn nhanh chóng, không còn phải chờ đợi lâu tại phòng khám.”
                        </p>
                        <span className="block mt-2 text-blue-600">- Trần Thị B</span>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-12 px-8 md:px-16 bg-blue-400 text-center">
                <h2 className="text-2xl font-bold mb-4">Về chúng tôi</h2>
                <p className="text-gray-700 max-w-2xl mx-auto ">
                    Phòng khám ABC cam kết mang lại dịch vụ chăm sóc sức khỏe chất lượng cao,
                    ứng dụng công nghệ tiên tiến để phục vụ bệnh nhân tốt nhất.
                </p>
            </section>
        </div>
    );
}

export default HomePage;
