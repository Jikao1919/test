// CSVファイルを取得
let csv = new XMLHttpRequest();

// CSVファイルへのパス
csv.open("GET", "test.csv", false);

// csvファイル読み込み失敗時のエラー対応
try {
csv.send(null);
} catch (err) {
console.log(err);
}

// 配列を定義
let csvArray = [];

// 改行ごとに配列化
let lines = csv.responseText.split(/\r\n|\n/);

// 1行ごとに処理
for (let i = 1; i < lines.length; ++i) {
	let cells = lines[i].split(",");
	if (cells.length != 1) {
		csvArray.push(cells);
	}
}

// コンソールに配列を出力
console.log(csvArray);

//CSVデータからリンクのリストを作製       
myLinkStr = [];
for (let i = 0; i < csvArray.length; ++i) {
	myLinkStr.push("<a href = \"" + csvArray[i][1] + "\">" + csvArray[i][0] + "</a>");
}

console.log(myLinkStr);

//乱数生成
let numbers = [];

while (numbers.length < 3) {
let randomNum = Math.floor(Math.random() * myLinkStr.length);
if (!numbers.includes(randomNum)) {
	numbers.push(randomNum);
}
}

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
	let str_myRmdLink = 'myRmdLink' + i;
	console.log(str_myRmdLink)
	var myRmdLink = document.getElementById(str_myRmdLink);
	myRmdLink.innerHTML = myLinkStr[numbers[i]];
}