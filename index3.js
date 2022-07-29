function count(type) {
  // 결과를 표시할 element
  const resultElement0 = document.getElementById("result0");
  const resultElement1 = document.getElementById("result1");
  const resultElement2 = document.getElementById("result2");
  const resultElement3 = document.getElementById("result3");
  const resultElement4 = document.getElementById("result4");

  // 현재 화면에 표시된 값
  let number0 = resultElement0.innerText;
  let number1 = resultElement1.innerText;
  let number2 = resultElement2.innerText;
  let number3 = resultElement3.innerText;
  let number4 = resultElement4.innerText;

  // 더하기/빼기
  if (type === "plus0") {
    number0 = parseInt(number0) + 1;
  }
  if (type === "plus1") {
    number1 = parseInt(number1) + 1;
  }
  if (type === "plus2") {
    number2 = parseInt(number2) + 1;
  }
  if (type === "plus3") {
    number3 = parseInt(number3) + 1;
  }
  if (type === "plus4") {
    number4 = parseInt(number4) + 1;
  }
  // 결과 출력
  resultElement0.innerText = number0;
  resultElement1.innerText = number1;
  resultElement2.innerText = number2;
  resultElement3.innerText = number3;
  resultElement4.innerText = number4;
}
