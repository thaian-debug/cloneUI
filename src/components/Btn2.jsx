import "./Btn2.css";
import pic4 from "../assets/anh4.png";

export default function Btn2() {
  return (
    <>
      <div className="btn-img">
        <button>
          <p>Đăng ký tư vấn</p> <p>lộ trình học IELTS </p>
          <span>Nhập để điền thông tin nhận lộ trình cá nhân hóa</span>
        </button>
        <img src={pic4} alt="" />
      </div>
    </>
  );
}
