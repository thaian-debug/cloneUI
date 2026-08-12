import pic4 from "../assets/anh4.png";
import "./CourseList.css";

export default function CourseList() {
  return (
    <>
      <div className="pc1-cl">
        <div>
          <span className="header-line"></span>
          <span className="cl-title">The Real IELTS · Khai giảng tháng 8</span>
          <span className="header-line"></span>
        </div>

        <h1 className="card-title">
          Mục tiêu <span className="highlight-gold">7.5+ IELTS </span> — đích
          đến ai cũng khao khát
        </h1>
        <p className="card-description">
          Khác biệt không nằm ở mục tiêu lớn đến đâu, mà ở thời điểm bạn bắt
          đầu.{" "}
        </p>
        <div className="card-separator"></div>
        <ul>
          <li>
            Có bạn muốn{" "}
            <span className="highlight-red-brown">
              mở rộng cơ hội xét tuyển Đại học
            </span>
          </li>
          <li>
            Có bạn muốn{" "}
            <span className="highlight-red-brown">
              chắc suất học bổng du học
            </span>{" "}
          </li>
          <li>
            Và rất nhiều bạn xem 7.5 IELTS là{" "}
            <span className="highlight-red-brown">tấm vé thông hành </span> cho
            kế hoạch tương lai
          </li>
        </ul>
      </div>
      <div className="pc2-cl">
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "2px ",
            fontSize: "10px ",
            color: "green",
          }}
        >
          Thời điểm
        </p>
        <h4>Đầu năm học là thời điểm then chốt </h4>
        <p style={{ fontSize: "15.5px" }}>
          Đây là lúc <span>tinh thần học tập được khởi động lại</span> và thời
          gian cải thiện điểm số <span>chưa bị áp lực dồn ép</span> — quyết định
          band điểm IELTS bạn cầm trên tay vào cuối năm.
        </p>
      </div>
      <div className="pc3-cl">
        <div>
          <h3>
            Điều gì giúp học viên rút ngắn 1/3 thời gian chinh phục IELTS 7.5+?
          </h3>
        </div>
        <div>
          <h4>272</h4>
          <p>giờ lộ trình</p>
        </div>
      </div>
      <div className="pc4-cl">
        <div className="t">
          <span className="t1"></span>
          <span className="t2"></span>
          <span className="t3"></span>
        </div>
        <div className="kb">
          <span className="xd">Xây nền</span>
          <span className="tt">Tăng tốc</span>
          <span className="bp">Bứt phá</span>
        </div>
      </div>
    </>
  );
}
