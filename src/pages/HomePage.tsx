import PATHS from "@/routes/paths";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import bannerImg from "@/assets/images/banner.jpg";
import doctorImg from "@/assets/images/Doctor Consultation.jpg";
import bloodImg from "@/assets/images/Blood Test.jpg";
import logo from "@/assets/images/logo.png";
import {
    Calendar,
    TestTube,
    Shield,
    Clock,
    Users,
    TrendingUp,
    ArrowRight,
    CheckCircle,
    MapPinned,
    Star
} from "lucide-react";

// Danh sách ảnh cho slider (imported assets)
const images = [
    { src: bannerImg, alt: "Medical Dashboard", frameClass: "rounded-2xl shadow-lg" },
    { src: doctorImg, alt: "Doctor Consultation", frameClass: "rounded-2xl border-4 border-blue-200" },
    { src: bloodImg, alt: "Blood Test", frameClass: "rounded-full shadow-xl" },
];

// Colors for carousel dots and accents
const dotColors = ["bg-indigo-600", "bg-rose-500", "bg-amber-500"];

function HomePage() {
    const [imgIdx, setImgIdx] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const interval = setInterval(() => setImgIdx((p) => (p + 1) % images.length), 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const current = images[imgIdx];

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
            {/* Hero */}
            <header className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Logo Phòng Xét nghiệm Máu" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-md" />
                        <span className="font-semibold text-base sm:text-lg text-slate-700">Phòng Xét nghiệm Máu</span>
                    </div>
                    <nav className="flex items-center gap-2 sm:gap-4">
                        {user ? (
                            <Link to={PATHS.DASHBOARD} className="text-sm px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md shadow-md hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link to={PATHS.LOGIN} className="text-sm px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md shadow-md hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                                    Đăng nhập
                                </Link>
                                <Link to={PATHS.REGISTER} className="text-sm px-3 sm:px-4 py-2 bg-gradient-to-r from-rose-500 to-amber-400 text-white rounded-md shadow-md hover:from-rose-600 hover:to-amber-500 transition-all duration-300 hover:scale-105">
                                    Đăng ký
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>

            <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 animate-fade-in">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                        Hệ thống Quản lý Phòng Xét nghiệm Máu
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                        Nền tảng y tế thông minh giúp bạn theo dõi kết quả xét nghiệm, quản lý lịch hẹn
                        và đơn thuốc nhanh chóng, chính xác và an toàn.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link
                            to={user ? PATHS.DASHBOARD : PATHS.LOGIN}
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-rose-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
                        >
                            {user ? 'Vào Dashboard' : 'Bắt đầu ngay'}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="#features" className="inline-flex items-center justify-center border border-slate-300 bg-white/90 text-slate-700 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white">
                            Tìm hiểu thêm
                        </a>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-300 text-white rounded-lg shadow flex items-center justify-center">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm font-medium">Đặt lịch nhanh</div>
                                <div className="text-xs text-slate-600">Chọn thời gian phù hợp</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-300 text-white rounded-lg shadow flex items-center justify-center">
                                <TestTube className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm font-medium">Kết quả trực tuyến</div>
                                <div className="text-xs text-slate-600">Xem & tải nhanh chóng</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative animate-fade-in">
                    <div className="w-full h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center ring-1 ring-white/60 transition-all duration-500">
                        <img
                            src={current.src}
                            alt={current.alt}
                            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Dots */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex gap-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setImgIdx(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === imgIdx
                                    ? `${dotColors[i]} shadow-lg scale-110`
                                    : 'bg-white/60 ring-1 ring-white/30 hover:bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Tính năng nổi bật</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Khám phá những tính năng tiện ích giúp việc quản lý sức khỏe trở nên dễ dàng hơn
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-indigo-500">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-300 text-white rounded-lg shadow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Đặt lịch hẹn</h3>
                        <p className="text-slate-600 text-sm">Chủ động chọn thời gian khám phù hợp với lịch trình của bạn.</p>
                    </div>
                    <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-rose-500">
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-300 text-white rounded-lg shadow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <TestTube className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Kết quả xét nghiệm</h3>
                        <p className="text-slate-600 text-sm">Xem và tải về kết quả chỉ với một cú nhấp chuột.</p>
                    </div>
                    <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-amber-400">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-300 text-white rounded-lg shadow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Bảo mật cao</h3>
                        <p className="text-slate-600 text-sm">Dữ liệu được mã hóa và bảo vệ an toàn tuyệt đối.</p>
                    </div>
                    <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-teal-400">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-300 text-white rounded-lg shadow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Theo dõi sức khỏe</h3>
                        <p className="text-slate-600 text-sm">Theo dõi lịch sử sức khỏe và xu hướng biến đổi.</p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16">
                <div className="bg-gradient-to-r from-indigo-600 to-rose-500 rounded-2xl p-8 sm:p-12 text-white">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Số liệu ấn tượng</h2>
                        <p className="text-indigo-100 max-w-2xl mx-auto">
                            Hệ thống được tin tưởng bởi hàng nghìn người dùng trên khắp cả nước
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold mb-2">10K+</div>
                            <div className="text-indigo-100 text-sm">Bệnh nhân hài lòng</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold mb-2">99.9%</div>
                            <div className="text-indigo-100 text-sm">Độ chính xác</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
                            <div className="text-indigo-100 text-sm">Hỗ trợ khách hàng</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold mb-2">5★</div>
                            <div className="text-indigo-100 text-sm">Đánh giá trung bình</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Bệnh nhân nói gì?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Những phản hồi tích cực từ những bệnh nhân đã sử dụng dịch vụ của chúng tôi
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <blockquote className="p-6 bg-white/80 rounded-xl shadow-lg ring-1 ring-white/40 border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-slate-700 italic mb-4">"Hệ thống rất tiện lợi, tôi có thể xem kết quả xét nghiệm ngay tại nhà mà không cần đến phòng khám."</p>
                        <cite className="block text-sm font-medium text-indigo-600">- Nguyễn Văn A</cite>
                    </blockquote>
                    <blockquote className="p-6 bg-white/80 rounded-xl shadow-lg ring-1 ring-white/40 border-l-4 border-rose-500 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-slate-700 italic mb-4">"Đặt lịch hẹn nhanh chóng, không còn phải chờ đợi lâu tại phòng khám. Giao diện thân thiện và dễ sử dụng."</p>
                        <cite className="block text-sm font-medium text-rose-600">- Trần Thị B</cite>
                    </blockquote>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 py-8 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <img src={logo} alt="Logo" className="w-8 h-8 rounded-lg" />
                                <span className="font-semibold text-slate-700">Phòng Xét nghiệm Máu</span>
                            </div>
                            <p className="text-sm text-slate-600 mb-4">
                                Nền tảng y tế thông minh giúp bạn quản lý sức khỏe một cách dễ dàng và tiện lợi.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-700 mb-4">Liên kết nhanh</h3>
                            <div className="space-y-2 text-sm">
                                <Link to={PATHS.LOGIN} className="block text-slate-600 hover:text-indigo-600 transition">Đăng nhập</Link>
                                <Link to={PATHS.REGISTER} className="block text-slate-600 hover:text-indigo-600 transition">Đăng ký</Link>
                                <a href="#features" className="block text-slate-600 hover:text-indigo-600 transition">Tính năng</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-700 mb-4">Thông tin liên hệ</h3>
                            <div className="space-y-2 text-sm text-slate-600">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>Thứ 2 - Chủ nhật: 7:00 - 20:00</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <span>Hotline: 1900 1234</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPinned className="w-4 h-4" />
                                    <span>123 Đường ABC, Quận XYZ, TP. HCM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-200 pt-8 text-center">
                        <p className="text-sm text-slate-600">
                            © {new Date().getFullYear()} Phòng Xét nghiệm Máu. Tất cả quyền được bảo lưu.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;

