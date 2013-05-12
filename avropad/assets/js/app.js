

$(function(){
	$('#ttxt').ime();
	$.ime.preferences.setLanguage( "bn" );
	$.ime.preferences.setIM('bn-avro');



});



// Generated by CoffeeScript 1.3.1
(function() {

    $(function() {
        var base64, check, checksum, deflated, encoded, input;
        checksum = function(string) {
            var chk, chr, i;
            chk = 0;
            for (i in string) {
                chr = string[i];
                chk += chr.charCodeAt(0) * (i + 1);
            }
            return chk % 10;
        };
        $('#save-button').click(function() {
            var base64, check, deflated, encoded, input;
            input = $('#ttxt').get(0).value;
            deflated = RawDeflate.deflate(input);
            base64 = Base64.toBase64(deflated);
            check = checksum(base64);
            encoded = base64 + check;
            return window.location.hash = encoded;
        });
        if (window.location.hash) {
            encoded = window.location.hash.replace(/^#/, '');
            base64 = encoded.slice(0, (encoded.length - 2) + 1 || 9e9);
            check = parseInt(encoded.slice(encoded.length - 1, encoded.length + 1 || 9e9));
            if (check !== checksum(base64)) {
                return alert('Something got corrupted :(');
            } else {
                deflated = Base64.fromBase64(base64);
                input = RawDeflate.inflate(deflated);
                return $('#ttxt').get(0).value = input;
            }
        }
    });

}).call(this); 