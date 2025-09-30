import PATHS from "@/routes/paths";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from "@/assets/images/banner.jpg";
import doctorImg from "@/assets/images/Doctor Consultation.jpg";
import bloodImg from "@/assets/images/Blood Test.jpg";
import logo from "@/assets/images/logo.png";

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

    useEffect(() => {
        const interval = setInterval(() => setImgIdx((p) => (p + 1) % images.length), 3500);
        return () => clearInterval(interval);
    }, []);

    const current = images[imgIdx];

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
            {/* Hero */}
            <header className="max-w-7xl mx-auto w-full px-6 py-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className="w-12 h-12 rounded-lg shadow-md" />
                        <span className="font-semibold text-lg text-slate-700">Phòng Xét nghiệm Máu</span>
                    </div>
                    <nav className="flex items-center gap-4">
                        <Link to={PATHS.LOGIN} className="text-sm px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md shadow-md hover:from-indigo-600 hover:to-blue-600 transition">Đăng nhập</Link>
                        <Link to={PATHS.REGISTER} className="text-sm px-4 py-2 bg-gradient-to-r from-rose-500 to-amber-400 text-white rounded-md shadow-md hover:from-rose-600 hover:to-amber-500 transition">Đăng ký</Link>
                    </nav>
                </div>
            </header>

            <section className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                        Hệ thống Quản lý Phòng Xét nghiệm Máu
                    </h1>
                    <p className="text-lg text-slate-600 max-w-xl">
                        Nền tảng y tế thông minh giúp bạn theo dõi kết quả xét nghiệm, quản lý lịch hẹn
                        và đơn thuốc nhanh chóng, chính xác và an toàn.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link to={PATHS.LOGIN} className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-rose-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-[1.02] transition">
                            Bắt đầu
                        </Link>
                        <a href="#features" className="inline-flex items-center justify-center border border-transparent bg-white/90 text-indigo-700 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition">
                            Tìm hiểu thêm
                        </a>
                    </div>

                    <div className="mt-6 flex gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-300 text-white rounded-lg shadow flex items-center justify-center">📅</div>
                            <div>
                                <div className="text-sm font-medium">Đặt lịch nhanh</div>
                                <div className="text-sm text-slate-600">Chọn thời gian phù hợp cho bạn</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-300 text-white rounded-lg shadow flex items-center justify-center">🧪</div>
                            <div>
                                <div className="text-sm font-medium">Kết quả trực tuyến</div>
                                <div className="text-sm text-slate-600">Xem & tải kết quả nhanh chóng</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-full h-72 md:h-80 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center ring-1 ring-white/60">
                        <img src={current.src} alt={current.alt} className={`w-full h-full object-cover`} />
                    </div>

                    {/* Dots */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex gap-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setImgIdx(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`w-3 h-3 rounded-full ${i === imgIdx ? `${dotColors[i]} shadow-lg` : 'bg-white/60 ring-1 ring-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="max-w-7xl mx-auto w-full px-6 py-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Tính năng nổi bật</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition border-t-4 border-indigo-500">
                        <div className="text-3xl">📅</div>
                        <h3 className="font-semibold mt-4">Đặt lịch hẹn</h3>
                        <p className="text-slate-600 mt-2">Chủ động chọn thời gian khám phù hợp.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition border-t-4 border-rose-500">
                        <div className="text-3xl">🧪</div>
                        <h3 className="font-semibold mt-4">Kết quả xét nghiệm</h3>
                        <p className="text-slate-600 mt-2">Xem và tải về chỉ với một cú nhấp.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition border-t-4 border-amber-400">
                        <div className="text-3xl">💊</div>
                        <h3 className="font-semibold mt-4">Đơn thuốc</h3>
                        <p className="text-slate-600 mt-2">Theo dõi lịch sử điều trị dễ dàng.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition border-t-4 border-teal-400">
                        <div className="text-3xl">🔔</div>
                        <h3 className="font-semibold mt-4">Thông báo</h3>
                        <p className="text-slate-600 mt-2">Cập nhật tin tức mới nhất từ phòng khám.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto w-full px-6 py-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Bệnh nhân nói gì?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <blockquote className="p-6 bg-white/80 rounded-xl shadow ring-1 ring-white/40 border-l-4 border-indigo-500">
                        <p className="text-slate-700 italic">“Hệ thống rất tiện lợi, tôi có thể xem kết quả xét nghiệm ngay tại nhà.”</p>
                        <cite className="block mt-3 text-sm font-medium text-indigo-600">- Nguyễn Văn A</cite>
                    </blockquote>
                    <blockquote className="p-6 bg-white/80 rounded-xl shadow ring-1 ring-white/40 border-l-4 border-rose-500">
                        <p className="text-slate-700 italic">“Đặt lịch hẹn nhanh chóng, không còn phải chờ đợi lâu tại phòng khám.”</p>
                        <cite className="block mt-3 text-sm font-medium text-rose-600">- Trần Thị B</cite>
                    </blockquote>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-700">
                    © {new Date().getFullYear()} Phòng Xét nghiệm Máu — Bản quyền bảo lưu.
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
