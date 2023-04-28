const  inquirer = require("inquirer")
const {Circle, Triangle, Square} = require("./library/shapes");
const fs = require("fs")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'textType',
      message: 'What do you want the text inside the logo to be?',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color do you want the logo text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want the logo to be?',
        choices: ["circle", "triangle", "square"]
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the logo shape to be?',
      }])

  .then((answers) => {
    console.log(answers.shape);
    let shape = getShape(answers)
    console.log(shape.getSVG());

    fs.writeFile("shape.svg", shape.getSVG(), function (err) {
      if (err) throw err;
      console.log('File Saved!');
    })
  });

function getShape(answers){
  if(answers.shape == "circle"){
    return new Circle(answers.textColor,answers.textType,answers.shapeColor)
  }
  if(answers.shape == "triangle"){
    return new Triangle(answers.textColor,answers.textType,answers.shapeColor)
  }
  if(answers.shape == "square"){
    return new Square(answers.textColor,answers.textType,answers.shapeColor)
  }
}