import "./FeatureList.css";

const FEATURE_DATA = [
  {
    id: 1,
    icon: "📖",
    title: "Phương pháp độc quyền LCLT",
    desc: "Hình thành tư duy ngôn ngữ và phản xạ tiếng anh tự nhiên, thay vì học mẹo hoặc học thuộc ",
  },
  {
    id: 2,
    icon: "☑️",
    title: "Kiểm tra đầu vào chuẩn IDP",
    desc: "Đánh giá đầy đủ 4 kỹ năng, xác định chính xác năng lực và cá nhân hóa kế hoạch học tập",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Hệ thống luyện tập ứng dụng AI",
    desc: "Phản hồi tức thì 24/7, duy trì thói quen học tập và tối ưu hiệu quả tự học ngoài giờ",
  },
  {
    id: 4,
    icon: "❇️",
    title: 'Chương trình "Cấy nền IELTS"',
    desc: "Kết hợp Micro-progressive Syllabus, giúp học viên mất gốc vẫn theo kịp và tiến bộ ổn định ",
  },
  {
    id: 5,
    icon: "⭐",
    title: "Giảng viên 8.0–8.5+ IELTS",
    desc: "Chứng chỉ giảng dạy quốc tế TESOL, DELTA — trực tiếp đứng lớp nhỏ 8–12 học viên, theo sát từng cá nhân.",
  },
  {
    id: 6,
    icon: "🏫",
    title: "Thi thử tại địa điểm thi thật",
    desc: "Làm quen không gian, thiết bị và áp lực phòng thi tại trung tâm khảo thí - bước vào kỳ thi chính thức với tâm thế tự tin nhất ",
  },
];

export default function FeatureList() {
  return (
    <div className="feature-container">
      {FEATURE_DATA.map((item) => (
        <div key={item.id} className="feature-item">
          <div className="feature-icon">{item.icon}</div>

          <div className="feature-content">
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
