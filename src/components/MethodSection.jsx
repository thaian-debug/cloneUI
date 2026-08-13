import "./MethodSection.css";

import pic7 from "../assets/anh7.png";

const METHOD_DATA = [
  {
    id: 1,
    colorClass: "bg-purple",
    icon: "👥",
    title: "Khai thác tối đa điểm mạnh của học viên",
    desc: "Giúp học viên phát huy điểm mạnh và có định hướng cụ thể để học viên khắc phục điểm yếu. Hoặc một cách tích cực, chủ động trong không khí hào hứng của lớp học chính là chìa khóa để các bạn học viên phát huy tốt nhất khả năng tiếp thu và vận dụng ngôn ngữ của mình.",
  },
  {
    id: 2,
    colorClass: "bg-teal",
    icon: "🚀",
    title: "Phát triển toàn diện 4 kỹ năng IELTS:",
    desc: "Hướng học viên đến bản chất của ngôn ngữ Anh, giúp học viên hình thành tư duy rõ ràng, linh hoạt. Từ đó, học viên có thể vận dụng kiến thức một cách nhuần nhuyễn, tự tin, đồng đều cả 4 kỹ năng nghe, nói, đọc, viết thay vì chỉ giỏi hai kỹ năng kém chủ động là nghe và đọc.",
  },
  {
    id: 3,
    colorClass: "bg-pink",
    icon: "⏳",
    title: "Tiết kiệm 1/3 thời gian học so với các phương pháp thông thường.",
    desc: "Sử dụng công nghệ trong việc học IELTS có thể giúp bạn tiết kiệm thời gian và học tập hiệu quả hơn. Các công cụ học tập trực tuyến như khóa học trực tuyến, ứng dụng học tập và cộng đồng học tập online có thể giúp bạn học tập mọi lúc, mọi nơi, với các bài học ngắn gọn, dễ hiểu và được thiết kế riêng cho mục tiêu của bạn.",
  },
];

export default function MethodSection() {
  return (
    <div className="mt_container">
      <div className="bentrai">
        <img src={pic7} alt="" />
      </div>
      <div className="p2">
        <div className="title"> PHƯƠNG PHÁP GIẢNG DẠY</div>
        <div className="title2">LCLT</div>
        <div className="title3">Ưu điểm vượt trội của phương pháp LCLT</div>

        <div className="duoi">
          {METHOD_DATA.map((item) => (
            <div key={item.id} className="d1">
              <div className="p3">
                <div className="d2">{item.icon}</div>
                <div className="d3">
                  <div className="d31">{item.title}</div>
                  <div className="d32">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
