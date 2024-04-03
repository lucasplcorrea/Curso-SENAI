import { useNavigate } from "react-router-dom";
import "./index.css";

function PostHeader({ title, description }) {
 const navigate = useNavigate();

 return (
  <div className="post-page-header">
   <button className="go-back" onClick={() => navigate("/")}>
    <i className="fa-solid fa-arrow-left"></i> Voltar para o início
   </button>
   <h1>{title}</h1>
   <span>{description}</span>
  </div>
 );
}

export default PostHeader;
