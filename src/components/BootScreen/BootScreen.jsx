import WindowCard from "../WindowCard/WindowCard";
import "./BootScreen.css";

export default function BootScreen() {
  return (
    <div className="boot">
      <WindowCard title="boot.exe" className="boot__window">
        <span className="boot__line">Initializing portfolio kernel...</span>
        <span className="boot__line boot__line--1">
          Loading modules: [ hero ] [ skills ] [ projects ] [ contact ]
        </span>
        <span className="boot__line boot__line--2">
          System ready. <span className="boot__cursor">█</span>
        </span>
      </WindowCard>
    </div>
  );
}
