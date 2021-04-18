function pattern(){
    var str=document.getElementById("in").value;
      var result,
        count = 1,
        i;
    
    if (!str) {
        return "";
    }
    
    result = str.charAt(0);
    for (i = 1; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(i-1)) {
            result += count + str.charAt(i);
            count = 1;
        } else {
            count++;
        }
    }
    document.getElementById("out").value=result+count;
    }