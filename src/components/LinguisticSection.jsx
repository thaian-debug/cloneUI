import "./LinguisticSection.css";
import mainImg from "../assets/anh7.png";
import subImg from "../assets/anh8.png";

export default function LinguisticSection() {
  return (
    <div className="linguistic-wrapper">
      <button className="arrow-btn left-arrow">‹</button>

      <div className="linguistic-content">
        <div className="text-col">
          <h2 className="section-title">LINGUISTIC THINKING</h2>
          <div className="tag-box">Xây dựng tư duy ngôn ngữ</div>
          <p className="desc-text">
            Xây dựng tư duy ngôn ngữ hiểu một cách đơn giản là suy nghĩ bằng
            chính ngôn ngữ chúng ta đang học. Người Việt khi muốn nói một câu
            tiếng Anh rất hay nghĩ câu Tiếng Việt trước. Như vậy chưa được coi
            là tư duy bằng ngôn ngữ Anh...
          </p>
          <button className="more-btn">Tìm hiểu thêm</button>
        </div>

        <div className="img-card main-img">
          <img src={mainImg} alt="Linguistic thinking main" />
        </div>

        <div className="img-card sub-img">
          <img src={subImg} alt="Linguistic thinking next" />
        </div>
      </div>

      <button className="arrow-btn right-arrow">›</button>
    </div>
  );
}
