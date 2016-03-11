window.onload = function () {
	document.getElementsByTagName('button')[0].onclick = function () {
		var inputs = document.getElementsByTagName('input');
		var string = '{Noun: [this is where the noun goes], Adjective: [adjective here], Verb: [a verb in this section], Plural Noun: [and finally, a plural noun here]}';
		for (var i = 0;i < inputs.length;i++) {
			string = string.replace(/\[(.*?)\]/, inputs[i].value);
		}
		console.log(string);
	};
};
