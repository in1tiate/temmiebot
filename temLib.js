module.exports = {
temslate: function(input) {
input = input.replace(/\bI\b/gi, 'tem').replace(/\bhi\b/gi, 'hOI!').replace(/\bwelcome\b/gi, 'welcom').replace(/!/gi, '!!').replace(/\bthis\b/gi, 'dis').replace(/\bdont\b/gi, 'don').replace(/\bdon't\b/gi, 'don').replace(/\byou\b/gi, 'u').replace(/your/gi, 'ur').replace(/\byes\b/gi, 'yaYA').replace(/\begg\b/gi, 'eg').replace(/will/gi, 'wil').replace(/famous/gi, 'famus').replace(/\bthats\b/gi, 'thas').replace(/\bthat's\b/gi, 'thas').replace(/\bthat\b/gi, 'dat').replace(/\ballergic\b/gi, 'allergics').replace(/understand/gi, 'understan').replace(/hive/gi, 'hOIV').replace(/\bagree\b/gi, 'agrees').replace(/\bexpensive\b/gi, 'expensiv').replace(/\bwoah\b/gi, 'WOA!').replace(/\bmoney\b/gi, 'muns').replace(/\bback\b/gi, 'bak').replace(/\bcollege\b/gi, 'cool leg').replace(/\breally\b/gi, 'realy').replace(/thing/gi, 'thin').replace(/\bof\b/gi, 'o').replace(/\bgot a\b|\bgotta\b|\bhave a\b|\bhave to\b/gi, 'gota').replace(/\bhave\b/gi, 'hav').replace(/\./gi, ',').replace(/\bsolution\b/gi, 'solushun').replace(/\bbye\b/gi, 'bOI!');
return input;
},
pass2: function(input) {
	input = input.replace(/\btem've\b/gi, 'tem has').replace(/\btem'm\b|\btem am\b/gi, 'tem iz');
	return input;
},
containsDiscordLink: function(input) {
if (input.match(/\b(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/\w+[a-z]/gi)) {
	input = true;
	return input;
}
else {
	input = false;
    return input;
}
}
/* Human-readable
.replace(/\bI\b/gi, 'tem')
.replace(/\bhi\b/gi, 'hOI!')
.replace(/\bwelcome\b/gi, 'welcom')
.replace(/!/gi, '!!')
.replace(/\bthis\b/gi, 'dis')
.replace(/\bdont\b/gi, 'don')
.replace(/\bdon't\b/gi, 'don')
.replace(/\byou\b/gi, 'u')
.replace(/your/gi, 'ur')
.replace(/\byes\b/gi, 'yaYA')
.replace(/\begg\b/gi, 'eg')
.replace(/will/gi, 'wil')
.replace(/famous/gi, 'famus')
.replace(/\bthats\b/gi, 'thas')
.replace(/\bthat's\b/gi, 'thas')
.replace(/\bthat\b/gi, 'dat')
.replace(/\ballergic\b/gi, 'allergics')
.replace(/understand/gi, 'understan')
.replace(/hive/gi, 'hOIV')
.replace(/\bagree\b/gi, 'agrees')
.replace(/\bexpensive\b/gi, 'expensiv')
.replace(/\bwoah\b/gi, 'WOA!')
.replace(/\bmoney\b/gi, 'muns')
.replace(/\bback\b/gi, 'bak')
.replace(/\bcollege\b/gi, 'cool leg')
.replace(/\breally\b/gi, 'realy')
.replace(/thing/gi, 'thin')
.replace(/\bof\b/gi, 'o')
.replace(/\bgot a\b|\bgotta\b|\bhave a\b|\bhave to\b/gi, 'gota')
.replace(/\bhave\b/gi, 'hav')
.replace(/\./gi, ',')
.replace(/\bsolution\b/gi, 'solushun')
.replace(/\bbye\b/gi, 'bOI!')
*/	
}