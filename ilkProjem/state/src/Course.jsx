import Angular from "./assets/angular.jpg";
import Bootstrap from "./assets/bootstrap5.png";
import KompleWeb from "./assets/kompleweb.jpg";
import Ccsharp from "./assets/ccsharp.png";
import "./Course.css";

const courseMap = {
  Angular,
  Bootstrap,
  KompleWeb,
  Ccsharp,
};

function Course({ courseName }) {
  //console.log(Angular);
  //console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
