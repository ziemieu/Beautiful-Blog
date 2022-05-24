import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm"> Beautiful Chapter</span>
            <span className="headerTitleLg"> Blog</span>
        </div>
        <img className="headerImg" 
        src="https://madeheart.com/media/productphoto/431/24570831/006_IMG_3212.jpg" alt="Beautiful Diary"  />
    </div>
  );
}
