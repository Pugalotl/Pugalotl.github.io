window.onload = function ()
{
	window.items2 = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4], //end
	[1, 0],
	[2, 0],
	[3, 0],
	[4, 0],
	[4, 1], //end
	[3, 1],
	[2, 1],
	[1, 1],
	[1, 2],
	[1, 3], //end
	[3, 2],
	[2, 2],
	[2, 3],
	[2, 4],
	[1, 4], //end
	[4, 2],
	[4, 3],
	[3, 3],
	[3, 4],
	[4, 4],
	];
window.canvas2 = document.getElementById('myCanvas2');
window.ctx2 = canvas2.getContext("2d");
ctx2.fillStyle = "#FFFFFF";
ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
ctx2.fillStyle = "#000000";
const getCursorPosition = (canvas2, event) => {
  const rect = canvas2.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  ctx2.fillRect(Math.floor(x/16)*16, Math.floor(y/16)*16, 16, 16);
  checker();
};
canvas2.addEventListener('mousedown', (e) => {
  getCursorPosition(canvas2, e)
})
};

function black(){
	ctx2.fillStyle = "#000000";
}

function white(){
	ctx2.fillStyle = "#FFFFFF";
}

function orange(){
	ctx2.fillStyle = "#FF9D00";
}

function red(){
	ctx2.fillStyle = "#FF1212";
}

function checker() {
	checkstring = ""
	checkstring2 = ""
	letter = ""
	for (let lettercheck = 0; lettercheck < 5; lettercheck++) {
	for (let i = 0; i < 5; i++) {
	var data = ctx2.getImageData(items2[i+(5*lettercheck)][1]*16, items2[i+(5*lettercheck)][0]*16, 1, 1).data;
	console.log(data[1])
	if (data[1] == 0 || data[1] == 18)
	{
	checkstring = checkstring + "1";
	}
	if (data[1] == 255 || data[1] == 157)
	{
	checkstring = checkstring + "0";
	}
	}
	letter = String.fromCharCode(parseInt(checkstring, 2) + 96)
	checkstring2 = checkstring2 + letter;
	checkstring = "";
	};
	document.getElementById("layer1").innerHTML = checkstring2;
	checker2();
}
function checker2() {
	checkstring = ""
	checkstring2 = ""
	letter = ""
	for (let lettercheck = 0; lettercheck < 5; lettercheck++) {
	for (let i = 0; i < 5; i++) {
	var data = ctx2.getImageData(items2[i+(5*lettercheck)][1]*16, items2[i+(5*lettercheck)][0]*16, 1, 1).data;
	if (data[1] == 157 || data[1] == 18)
	{
	checkstring = checkstring + "1";
	}
	if (data[1] == 255 || data[1] == 0)
	{
	checkstring = checkstring + "0";
	}
	}
	letter = String.fromCharCode(parseInt(checkstring, 2) + 96)
	checkstring2 = checkstring2 + letter;
	checkstring = "";
	};
	document.getElementById("layer2").innerHTML = checkstring2;
}