// const a = prompt("Nhập giá trị biến a:");

// if (a >= 8) {
//   alert("Đây là học sinh giỏi");
//   console.log("Đây là học sinh giỏi");
// } else {
//   alert("Đây là học sinh khá");
//   console.log("Đây là học sinh khá");
// }

// const a = 9;
// // switch case
// switch (a) {
//   case 8:
//   case 9:
//     console.log("học sinh giỏi");
//     return; // hoặc là break

//   case 7:
//     console.log("học sinh khá");
//     return;

//   default:
//     console.log("nhập lại bạn ơi");
//     return;
// }

// in ra màn hình số ngày của từng tháng trong năm nay (nâng cao nhập năm bất kì rồi in ra
// ngày của tháng trong năm đó)

// ví dụ: cơ bản 2025 nhập vào tháng 3 => 31 ngày
//  ví dụ nâng cao nhập vào 2024 rồi nhập vào tháng 3 => 31 ngày

// vòng lặp

// while, do... while, for

// let i = 0;
// while (true) {
//   console.log("số", i + 1);
//   i++;
// }

// let a = prompt("Nhập giá trị a");

// do {
//   a = prompt("mời bạn nhập lại");
// } while (a <= 0);

// for(let i =0;break point;i++)
// vd:

let a = 0;
for (let i = 0; i < 10; i += 2) {
  console.log(`\nDòng ${a + 1}================> i=${i}`);
  console.log("số ", i + 1);
  ++a;
}
