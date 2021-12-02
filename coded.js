

function generate() {
	const items = [
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
	
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var lettercheck = 0
	for (let points = 0; points < 5; points++)
	{
	let stringd = ""
	let current = document.getElementById("input").value
	if (current.charAt(lettercheck) == " ")
	{
	stringd = "00000"	
	}
	else
	{
    stringd = dec2bin(current.charAt(lettercheck).charCodeAt() - 96)
	}
	while (stringd.length < 5)
	{
	stringd = "0" + stringd	
	}
	for (let i = 0; i < 5; i++)
	{
	if (stringd.charAt(i) == 1)
	{
	ctx.fillRect(items[i+(5*lettercheck)][1]*16, items[i+(5*lettercheck)][0]*16, 16, 16);
	}
	}
	lettercheck += 1;
	console.log(ctx.getImageData(0, 0, 1, 1).data);
	}
	var lettercheck = 0
	for (let points = 0; points < 5; points++)
	{
	let stringd = ""
	let current = document.getElementById("input2").value
	if (current.charAt(lettercheck) == " ")
	{
	stringd = "00000"	
	}
	else
	{
    stringd = dec2bin(current.charAt(lettercheck).charCodeAt() - 96)
	}
	while (stringd.length < 5)
	{
	stringd = "0" + stringd	
	}
	for (let i = 0; i < 5; i++)
	{
	if (stringd.charAt(i) == 1)
	{
	var data = ctx.getImageData(items[i+(5*lettercheck)][1]*16, items[i+(5*lettercheck)][0]*16, 1, 1).data;
	console.log(data[3])
	if (data[3] == 255)
	{
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(items[i+(5*lettercheck)][1]*16, items[i+(5*lettercheck)][0]*16, 16, 16);
	}
	else
	{
	ctx.fillStyle = "#FF9D00";
	ctx.fillRect(items[i+(5*lettercheck)][1]*16, items[i+(5*lettercheck)][0]*16, 16, 16);
	}
	}
	}
	lettercheck += 1;
	}
	ctx.fillStyle = "#000000";
}


function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}