var jpEl = $("#jackpot, #jackpotmobile");
	setInterval(function() {
		var newJp = new Date().getTime()/2 / 100;
		jpEl.attr("data-value", newJp);
		jpEl.text(formatCurrency(newJp, null, 0));
	}, 600);
	function formatCurrency(num,inputType,decimal,max) {
		if(num=="-")return num;
		if(num == null) num = "0";
		dec2 = 0;
		if(decimal > 0){
			dec = num.toString().split(".");
			if(dec.length > 1){
				dec2 = dec[1];
			}
		}
		num = num.toString().replace(/[^0-9+\-Ee.]/g, '');
		sign = (num == (num = Math.abs(num)));
		if(isNaN(num)) num = "0";
		if(max != null && max > 0 && sign){
			if(num > max){
				num = max;
			}
		}
		num = Math.floor(num*100+0.50000000001);
		num = Math.floor(num/100).toString();
		for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++ )
			num = num.substring(0,num.length-(4*i+3))+','+
		num.substring(num.length-(4*i+3));
		if(num != '0' || (decimal != null && dec2 > 0)) { 
			prefix = sign ? '':'-';
			if(decimal != null && decimal > 0){
				dec2 = 0+"."+ dec2;
				dec2 = parseFloat(dec2).toFixed(decimal);
				dec = dec2.toString().split(".");
				dec2 = dec[1];
				num +="."+ dec2;
			}
			if(inputType == null){
				if(prefix == '-'){
					num = "0";
				}
			}else{
				num = prefix + num;
			}

		}else if(num == '0'){
			num = '0';
			if(decimal != null && decimal > 0){
				dec2 = 0+"."+ dec2;
				dec2 = parseFloat(dec2).toFixed(decimal);
				dec = dec2.toString().split(".");
				dec2 = dec[1];
				num +="."+ dec2;
			}
		}
		else num = '';
		return num;
	}
