import TipCard from "./TipCard";
import "./TipsSection.css";
import cardImg from "../assets/anh13.png"; // Thay bằng file ảnh của bạn

const TIPS_DATA = [
  {
    id: 1,
    image: cardImg,
    title: "BÍ QUYẾT CHINH PHỤC GRAMMATICAL RANGE AND...",
    description:
      "Bộ kỹ năng độc quyền từ The Real IELTS giúp bạn bứt phá Grammatical Range and Accuracy từ Band 6.0 lên 8.0+...",
  },
  {
    id: 2,
    image: cardImg,
    title: "100 CẤU TRÚC NÊN DÙNG TRONG IELTS SPEAKING",
    description:
      "Tổng hợp 100 cấu trúc IELTS Speaking chuẩn bản xứ giúp bứt phá band điểm từ 6.0 lên 7.5+...",
  },
  {
    id: 3,
    image: cardImg,
    title: "WRITING TASK 1/ BAND 8: MỘT ĐỀ CÓ ĐẾN 4 QUẢ PIE CHART...",
    description:
      "Sắp thi IELTS Writing Task 1 có 4 pie chart khiến bạn quá tải thông tin? Khám phá chiến lược Entity Data Grouping...",
  },
  {
    id: 4,
    image: cardImg,
    title: "XU HƯỚNG RÀ ĐỀ IELTS SPEAKING THÁNG 7/2026",
    description:
      "Cập nhật mới nhất xu hướng ra đề IELTS Speaking tháng 7/2026 tại Việt Nam. Phân tích chuyên sâu bộ đề mới...",
  },
  {
    id: 5,
    image: cardImg,
    title: "TỔNG HỢP 16 ĐỀ WRITING MỚI THI VÀO NỬA CUỐI THÁNG 6...",
    description:
      "Cập nhật ngay tổng hợp 16 đề Writing mới thi vào nửa cuối tháng 6 vừa qua tại Việt Nam...",
  },
  {
    id: 6,
    image: cardImg,
    title: "IELTS READING THI HÔM 12/7 BẤT NGỜ XUẤT HIỆN LOẠT...",
    description:
      "Đề thi IELTS Reading ngày 12/7 gây sốc với loạt từ vựng 'khó nhằn' về Công nghệ sinh học...",
  },
  {
    id: 7,
    image: cardImg,
    title: "ĐỀ WRITING TASK 1 - BAND 8: LITTLE CHALFONT LIBRARY...",
    description:
      "Band 8.0+ với đề Writing Task 1: Little Chalfont Library. Đừng chỉ mô tả số liệu, hãy học cách tư duy phân tích...",
  },
  {
    id: 8,
    image: cardImg,
    title: "VITAMIN 8.0 WRITING: CHỮA ĐỀ CAMBRIDGE 21 CỰC CHI TIẾT",
    description:
      "Chữa đề Cambridge 21 cực chi tiết cùng The Real IELTS - Hướng dẫn giải mã đề thi, phân tích bài mẫu...",
  },
];

export default function TipsSection() {
  return (
    <section className="tips-section">
      {/* Tiêu đề góc trên */}
      <div className="tips-header">
        <h2 className="tips-title">TIPS CHO NGƯỜI HỌC IELTS</h2>
        <a href="#" className="detail-link">
          » Xem chi tiết
        </a>
      </div>

      {/* Lưới 4 cột x 2 hàng */}
      <div className="tips-grid">
        {TIPS_DATA.map((item) => (
          <TipCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
