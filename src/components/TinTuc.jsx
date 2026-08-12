import "./TinTuc.css";
import TipCard from "./TipCard";
import newsimg from "../assets/anh14.png";

const TINTUC_DATA = [
  {
    id: 1,
    image: newsimg,
    title:
      "7.5 CHẲNG KHÓ NẾU BẮT ĐẦU THEO ĐÚNG LỘ TRÌNH TỪ THÁNG 8 NÀY CÙNG THE REAL IELTS",
  },
  {
    id: 2,
    image: newsimg,
    title:
      "[RECAP] ANT EDU X THE REAL IELTS TẠI CONNECTED FUTURES – IDP PARTNER EXCELLENCE AWARDS 2026",
  },
  {
    id: 3,
    image: newsimg,
    title: "LUYỆN THI IELTS CÙNG THE REAL IELTS: LỘ TRÌNH LÊN 7.5+ NHANH CHÓNG",
  },
  {
    id: 4,
    image: newsimg,
    title:
      "TẠI SAO ĐIỂM AI CHẤM CỦA BẠN LẠI CHUẨN HƠN CẢ GIÁM KHẢO BẢN XỨ ĐƠN LẺ? (THE MYTH OF HUMAN OBJECTIVITY)",
  },
  {
    id: 5,
    image: newsimg,
    title:
      "CÀNG LÀM NHIỀU ĐỀ THI THỬ, BẠN CÀNG RỜI XA BAND ĐIỂM THẬT (THE HARDENING OF BAD HABITS)",
  },
];

export default function TinTuc() {
  return (
    <>
      <h1>TIN TỨC - SỰ KIỆN</h1>

      <div className="chinh">
        {TINTUC_DATA.map((item) => (
          <TipCard key={item.id} image={item.image} title={item.title} />
        ))}
        <div className="chinh2">
          <h1>20</h1>
          <h2>Tin tức-sự kiện nổi bật</h2>
          <button>Xem thêm chi tiết </button>
        </div>
      </div>
    </>
  );
}
