import "./TeacherCard.css";
import pic6 from "../assets/anh6.png";

export default function TeacherCard() {
  const TEACHERCARD_DATA = [1, 2, 3];
  return (
    <>
      <div className="tc-container">
        {TEACHERCARD_DATA.map((id) => (
          <div key={id} className="tc">
            <img src={pic6} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
