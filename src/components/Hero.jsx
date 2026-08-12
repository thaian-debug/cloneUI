import pic2 from "../assets/anh2.png";
import pic3 from "../assets/anh3.png";
import "./Hero.css";
export default function Hero() {
  return (
    <>
      <div className="phanthan">
        <img className="a1" src={pic2} alt="" />
        <div className="pt1">
          <img className="a2" src={pic3} alt="" />
          <div className="pc">
            <h3 className="pc-title">THE REAL IELTS</h3>
            <p className="pc-desc">
              Đơn vị <strong>đào tạo và luyện thi IELTS ONLINE</strong> hàng đầu
              nhờ sở hữu đội ngũ giáo viên chất lượng. Bên cạnh đó, việc ứng
              dụng công nghệ AI trong quá trình giảng dạy và hỗ trợ học tập của
              học viên cũng là một trong những bước tiến đi đầu, đem đến trải
              nghiệm học toàn diện, rút ngắn thời gian chinh phục mục tiêu
              IELTS.
            </p>
            <button className="btn-tht">TÌM HIỂU THÊM</button>
          </div>
        </div>
      </div>
    </>
  );
}
