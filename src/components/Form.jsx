import "./Form.css";

export default function Form() {
  return (
    <>
      <div className="ch1">
        <form action="">
          <h1>Đăng ký tư vấn lộ trình học ielts</h1>
          <div className="ip1">
            <input type="text" name="" id="" placeholder="Họ và tên" />
            <input type="text" name="" id="" placeholder="Bạn sinh năm" />
          </div>

          <div className="ip2">
            <input type="text" name="" id="" placeholder="Số điện thoại" />
            <input type="text" name="" id="" placeholder="Email" />
          </div>

          <div className="ch2">
            <p>Mục tiêu tiếng anh của bạn là gì ?</p>
            <div style={{ display: "flex" }}>
              <div>
                <input type="radio" name="" id="" />
                <span> Xét tuyển đại học</span>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <span> Du học</span>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <span> Phục vụ công việc</span>
              </div>
            </div>
          </div>
          <div className="ch3">
            <input
              className="lon"
              type="text"
              placeholder="Khó khăn hiện tại của bạn là gì "
            />
          </div>
          <div>
            <input
              type="text"
              className="nho"
              name=""
              id=""
              placeholder="Thời gian bạn có thể nhận cuộc gọi"
            />
          </div>
          <div>
            <button
              style={{
                marginTop: "30px",
                padding: "10px",
                width: "720px",
                background: "linear-gradient(135deg, #7b2d8e 0%, #ab1d85 100%)",
                color: "aliceblue",
                fontSize: "20px",
                textTransform: "uppercase",
              }}
            >
              Hoàn tất đăng ký
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
