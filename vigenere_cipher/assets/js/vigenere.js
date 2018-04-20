function enkripsi(){
	if (document.getElementById("kunci").value.length == 0) {
		alert("Kunci tidak boleh kosong");
		return;
	}
	var kunci = filterkunci(document.getElementById("kunci").value);
	if (kunci.length == 0) {
		alert("Kunci tidak memiliki karakter alfabet");
		return;
	}
	var textInput = document.getElementById("input");
	var t0 = performance.now();
	document.getElementById("output").value = crypt(textInput.value, kunci);
	var t1 = performance.now();
	document.getElementById("time").innerHTML = "Enkripsi "+ textInput.value.length +" karakter dalam " + (t1 - t0).toFixed(2) + " milliseconds.";
	document.getElementById("hasil").innerHTML = "Hasil Enkripsi";
	
}
		
function dekripsi(){
	if (document.getElementById("kunci").value.length == 0) {
		alert("Kunci tidak boleh kosong");
		return;
	}
	var kunci = filterkunci(document.getElementById("kunci").value);
	if (kunci.length == 0) {
		alert("Kunci tidak memiliki karakter alfabet");
		return;
	}
	for (var i = 0; i < kunci.length; i++) kunci[i] = (26 - kunci[i]) % 26;
	var textInput = document.getElementById("input");
	var t0 = performance.now();
	document.getElementById("output").value = crypt(textInput.value, kunci);
	var t1 = performance.now();
	document.getElementById("time").innerHTML = "Dekripsi "+ textInput.value.length +" karakter dalam " + (t1 - t0).toFixed(2) + " milliseconds.";
	document.getElementById("hasil").innerHTML = "Hasil Dekripsi";
}


function crypt(input, kunci) {
	var output = "";
	for (var i = 0, j = 0; i < input.length; i++) {
		var karakter = input.charCodeAt(i);
		if (isUppercase(karakter)) {
			output += String.fromCharCode((karakter - 65 + kunci[j % kunci.length]) % 26 + 65);
			j++;
		} else if (isLowercase(karakter)) {
			output += String.fromCharCode((karakter - 97 + kunci[j % kunci.length]) % 26 + 97);
			j++;
		} else {
			output += input.charAt(i);
		}
	}
	return output;
}


function filterkunci(kunci) {
	var result = [];
	for (var i = 0; i < kunci.length; i++) {
		var karakter = kunci.charCodeAt(i);
		if (isLetter(karakter))
			result.push((karakter - 65) % 32);
	}
	return result;
}

function isLetter(karakter) {
	return isUppercase(karakter) || isLowercase(karakter);
}

function isUppercase(karakter) {
	return 65 <= karakter && karakter <= 90;
}

function isLowercase(karakter) {
	return 97 <= karakter && karakter <= 122;
}