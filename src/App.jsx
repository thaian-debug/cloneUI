import "./App.css";
import pic5 from "./assets/anh5.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseList from "./components/CourseList";
import Btn from "./components/Btn";
import Btn2 from "./components/Btn2";
import FeatureList from "./components/FeatureList";
import InfoCard from "./components/InfoCard";
import Quote from "./components/Quote";
import TeacherCard from "./components/TeacherCard";
import MethodSection from "./components/MethodSection";
import LinguisticSection from "./components/LinguisticSection";
import pic10 from "./assets/anh10.png";
import pic11 from "./assets/anh11.png";
import pic12 from "./assets/anh12.png";
import TipsSection from "./components/TipsSection";
import TinTuc from "./components/TinTuc";
import Form from "./components/Form";
import End from "./components/End";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Btn />
      <Btn2 />
      <CourseList />
      <FeatureList />
      <Quote />
      <InfoCard
        theme="dark"
        badge="CHỈ 30 SUẤT"
        tagline="ƯU ĐÃI ĐĂNG KÝ TẠI POST NÀY"
        title="Dành tặng 30 học viên duy nhất"
        items={[
          { highlight: "5.000.000đ", suffix: "Học bổng trừ thẳng vào học phí" },
          {
            highlight: "98%",
            suffix: "Độ chính xác của bài test đầu vào – miễn phí",
          },
          {
            highlight: "1–1",
            suffix: "Coaching lộ trình cá nhân hóa cùng cố vấn học tập",
          },
        ]}
      />
      <div className="anh">
        <img src={pic5} alt="" />
      </div>
      <div className="btn">
        <button>
          {" "}
          <a href="">Tư Vấn Lộ Trình Học IELTS</a>
        </button>
      </div>
      <div className="dng">
        <h1>ĐỘI NGŨ GIÁO VIÊN THE REAL IELTS</h1>
        <p>
          Chinh phục IELTS dễ dàng với The Real IELTS Trải nghiệm học tiếng Anh
          cùng đội ngũ giáo viên nhiệt huyết, tận tâm và có bề dày về kinh
          nghiệm giảng dạy
        </p>
      </div>
      <TeacherCard />
      <MethodSection />
      <LinguisticSection />
      <div className="anh2">
        <img src={pic10} alt="" />
      </div>
      <div>
        <img src={pic11} alt="" />
      </div>
      <div>
        <img src={pic12} alt="" />
      </div>
      <TipsSection />
      <TinTuc></TinTuc>
      <Form />
      <End />
      <footer>© 2024 – The Real IELTS. All Rights Reserved</footer>
    </>
  );
}

export default App;
