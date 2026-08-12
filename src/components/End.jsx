import "./End.css";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import tiktok from "../assets/tiktok.png";
import fb from "../assets/fb.png";
import fan from "../assets/fanpage.png";
export default function End() {
  return (
    <>
      <div className="pl">
        <div className="p1">
          <img src={logo2} alt="" />
          <h2
            style={{
              borderBottom: "1px solid aliceblue",
            }}
          >
            CÔNG TY CỔ PHẦN GIÁO DỤC VÀ ĐÀO TẠO ANT EDU
          </h2>
          <span></span>
          <p
            style={{
              borderBottom: "1px solid aliceblue",
              paddingBottom: "10px",
            }}
          >
            Tầng 2, Sevin Office, CT1A Nam Đô Complex, Số 609 Trương Định,
            Phường Hoàng Mai, Thành phố Hà Nội, Việt Nam
          </p>
          <span></span>
          <p>
            Thuộc sở hữu của Công ty Cổ Phần Giáo Dục và Đào Tạo Ant Edu <br />
            MST 0110083457
          </p>
          <h2>THI KHẢO THÍ CÙNG IDP TẠI ANT EDU</h2>
          <img src={logo3} alt="" />
        </div>
        <div className="p2">
          <h2>Giới thiệu</h2>
          <span></span>
          <a
            style={{
              borderTop: "1px solid aliceblue",
              paddingTop: "20px",
            }}
            href=""
          >
            Về The Real IELTS
          </a>{" "}
          <br />
          <a href="">Phương pháp LCLT</a> <br />
          <a href="">Giáo Viên tại TRI</a>
          <br />
          <br />
          <h2>KẾT NỐI VỚI CHÚNG TÔI </h2>
          <span></span>
          <img
            style={{
              borderTop: "1px solid aliceblue",
              paddingTop: "30px",
              paddingRight: "250px",
            }}
            src={tiktok}
            alt=""
          />
          <br />
          <img src={fb} alt="" />
          <p>Kiểm tra trình độ IELTS</p>
          <p>instagram</p>
          <p>Youtube</p>
          <p>LinkedIN</p>
        </div>
        <div className="p3">
          <h2>KHÓA HỌC IELTS</h2>
          <span></span>
          <h2
            style={{
              borderTop: "1px solid aliceblue",
              paddingTop: "0px",
              paddingRight: "0px",
            }}
          >
            Trình độ tiêu chuẩn
          </h2>
          <p>IELTS Kick-off 0-2.0</p>
          <p>IELTS Speed-up 2.0-3.5</p>
          <p>IELTS Modest 3.5-5.0</p>
          <p>IELTS Fluent 5.0-6.5</p>
          <p>IELTS Advanced 6.5-7.5</p>
          <h2>Lộ trình tối ưu</h2>
          <p>Modest Package 0-5.0</p>
          <p>Flex Package 2.0-6.5</p>
          <p>Fluent Package 0-6.5</p>
          <p>Advance Package 0-7.5</p>
          <p>Khóa học VIP 1-1</p>
        </div>
        <div className="p3">
          <h2
            style={{
              borderBottom: "1px solid aliceblue",
            }}
          >
            ĐĂNG KÝ TƯ VẤN LỘ TRÌNH HỌC IELTS
          </h2>
          <span></span>
          <div>
            <input type="text" name="" id="" placeholder="Họ và tên" />
          </div>
          <div>
            <input type="text" name="" id="" placeholder="Số điện thoại" />
          </div>
          <div>
            <input type="text" name="" id="" placeholder="Email" />
          </div>

          <button>Gửi Thông Tin </button>
          <h2
            style={{
              borderBottom: "1px solid aliceblue",
              paddingTop: "30px",
              paddingRight: "250px",
            }}
          >
            FANPAGE
          </h2>
          <span></span>
          <a href="">
            {" "}
            <img style={{ width: "300px" }} src={fan} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
