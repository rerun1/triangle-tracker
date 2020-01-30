import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Triangle } from './triangle';



function resetForm(){
  $("input#side1").val("");
  $("input#side2").val("");
  $("input#side3").val("");
}

$(document).ready(function(){
  $("form#lengths").submit(function(event){
    event.preventDefault();

    var userSide1 = parseInt($("input#side1").val());
    var userSide2 = parseInt($("input#side2").val());
    var userSide3 = parseInt($("input#side3").val());

    var triangle = new Triangle(userSide1,userSide2,userSide3);

    var triangleType = triangle.checkType();


    if  (triangleType == "not a triangle") {
      $("p#answer").empty().text("This is not a triangle!");
    } else if (triangleType == "equilateral triangle"){
      $("p#answer").empty().text("Your triangle is equilateral");
    } else if (triangleType == "isoceles triangle") {
      $("p#answer").empty().text("Your triangle is isoceles");
    } else if (triangleType == "scalene triangle") {
      $("p#answer").empty().text("Your triangle is scalene");
    } else {
      $("p#answer").empty().text("Oops! Triangle Typer must be broken. Did you enter a whole positive number in each field?");
    }

    resetForm();

  });
});
