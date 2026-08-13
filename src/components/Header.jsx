import pic1 from "../assets/logo2.png";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header className="header-wrapper">
        <div className="phandau">
          <img src={pic1} alt="" />
          <div className="menu">
            <ul className="menu-list">
              <li>
                <a href="#gioi-thieu">Giới thiệu</a>
              </li>
              <li>
                <a href="#lo-trinh">Xây dựng Lộ trình</a>
              </li>
              <li>
                <a href="#test-online">Test Online</a>
              </li>
              <li>
                <a href="#idp">Đăng ký thi IELTS tại IDP</a>
              </li>
              <li>
                <a href="#khoa-hoc">Khóa học IELTS</a>
              </li>
              <li>
                <a href="#tin-tuc">Tin tức</a>
              </li>
            </ul>
            <div className="menu2">
              <li style={{ marginLeft: "380px " }}>
                <a href="#du-hoc">Du học</a>
              </li>
              <li>
                <a href="#thu-vien">Thư viện TRI</a>
              </li>
            </div>
          </div>

          <div className="header-action">
            <button className="btn-inbox">Inbox TRI</button>
          </div>
        </div>
      </header>
    </>
  );
}
