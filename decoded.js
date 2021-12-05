window.onload = function ()
{
	const items2 = [
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
const canvas2 = document.getElementById('myCanvas2');
const ctx2 = canvas2.getContext("2d");

const getCursorPosition = (canvas2, event) => {
  const rect = canvas2.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  ctx2.fillRect(Math.floor(x/16)*16, Math.floor(y/16)*16, 16, 16);
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
	ctx2.fillStyle = "#FF0000";
}