function generateCharacter() {
	let characters = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let value = (Math.random() * 15).toFixed(0);
	return characters[value];
}
window.onkeydown = function(e) {
	if (e.keyCode == 32) {
		generateCollor();
	};
}

function generateCollor() {
	let color = '';
	for (var i = 1; i < 6; i++) {
		let hexi;
		let colori;
		for (let i = 0; i < 6; i++) {
			color = color + generateCharacter();
		}
		hexi = 'hex' + i.toString();
		colori = 'color' + i.toString();
		let randomHex = ''
		document.getElementById(hexi).innerHTML = '#' + color;
		document.getElementById(colori).style.backgroundColor = '#' + color;
		color = '';
	}
}

function updateValue(inputValue, parentId) {
	let colRGB;
	colRGB = document.getElementById(`color${parentId}`).style.backgroundColor;
	if (colRGB.charAt(0) == 'r') {
		colRGB = colRGB.replace('rgb(', '').replace(')', '').split(',');
		var r = parseInt(colRGB[0], 10).toString(16);
		var g = parseInt(colRGB[1], 10).toString(16);
		var b = parseInt(colRGB[2], 10).toString(16);
		r = r.length == 1 ? '0' + r : r;
		g = g.length == 1 ? '0' + g : g;
		b = b.length == 1 ? '0' + b : b;
		var colHex = '#' + r + g + b;
		document.getElementById(inputValue).value = colHex;
	}

}
for (let i = 1; i < 6; i++) {
	let picker = document.getElementById(`colorPicker${i.toString()}`);
	let colorbox = document.getElementById(`color${i.toString()}`);
	picker.addEventListener('change', function() {
		colorbox.style.backgroundColor = this.value;
	})
}