import "./Btn.css";

const BUTTON_LIST = [
  {
    id: 1,
    subTitle: "Làm bài test",
    title: "AI",
    bgClass: "bg-blue",
  },
  {
    id: 2,
    subTitle: "Xây dựng",
    title: "lộ trình học",
    bgClass: "bg-purple",
  },
  {
    id: 3,
    subTitle: "Thư viện học",
    title: "IELTS",
    bgClass: "bg-blue",
  },
];

export default function Btn() {
  return (
    <div className="btn-3-container">
      {BUTTON_LIST.map((item) => (
        <button key={item.id} className={`action-btn ${item.bgClass}`}>
          <span className="btn-subtitle">{item.subTitle}</span>
          <span className="btn-title">{item.title}</span>
        </button>
      ))}
    </div>
  );
}
