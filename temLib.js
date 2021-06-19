module.exports = {
	temslate: function(input) {
		input = input.replace(/\bI\b/gi, 'tem')
		.replace(/o/gi, '0')
		.replace(/\b0f\b/gi, 'o')
		.replace(/\bhi\b/gi, 'hOI!')
		.replace(/\bwelc0me\b/gi, 'welcom')
		.replace(/!/gi, '!!')
		.replace(/\bthis\b/gi, 'dis')
		.replace(/\bd0nt\b/gi, 'don')
		.replace(/\bd0n't\b/gi, 'don')
		.replace(/y0u/gi, 'u')
		.replace(/\byes\b/gi, 'yaYA')
		.replace(/fam0us/gi, 'famus')
		.replace(/\bthats\b/gi, 'thas')
		.replace(/\bthat's\b/gi, 'thas')
		.replace(/\bthat\b/gi, 'dat')
		.replace(/\ballergic\b/gi, 'alergics')
		.replace(/understand/gi, 'understan')
		.replace(/hive/gi, 'hOIV')
		.replace(/\bagree\b/gi, 'agreeees')
		.replace(/\bexpensive\b/gi, 'expensiv')
		.replace(/\bw0ah\b/gi, 'WOA!')
		.replace(/\bm0ney\b/gi, 'muns')
		.replace(/\bback\b/gi, 'bak')
		.replace(/\bc0llege\b|\bclass\b|\bsch00l\b/gi, 'cooool leg')
		.replace(/\bg0t a\b|\bg0tta\b|\bhave a\b|\bhave t0\b/gi, 'gota')
		.replace(/\bhave\b/gi, 'hav')
		.replace(/\.\./gi, ',,')
		.replace(/bye/gi, 'bOI!')
		.replace(/what/gi, 'wat')
		.replace(/my/gi, 'tems')
		.replace(/\bthe\b/gi, 'da')
		.replace(/which/gi, 'wich')
		.replace(/ing/gi, 'in')
		.replace(/nd/gi, 'n')
		.replace(/si0n|ti0n/gi, 'shun')
		.replace(/itch/gi, 'ich');

		return input;
	},
	pass2: function(input) {
		input = input.replace(/\btem've\b/gi, 'tem has').replace(/\btem'm\b|\btem am\b/gi, 'tem iz').replace(/\bu're\b/gi, 'ur').replace(/\bam tem\b/gi, 'is tem').replace(/([a-z])\1/gi, function(m) { return m.charAt(0);});
		return input;
	},
	containsDiscordLink: function(input) {
		if (input.match(/\b(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discord\.com\/invite)\/\w+[a-z]/gi)) {
			input = true;
			return input;
		}
		else {
			input = false;
			return input;
		}
	}
}