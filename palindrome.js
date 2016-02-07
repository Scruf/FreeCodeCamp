function palindrome(str) {
    var str_x = str.toLowerCase().replace(/[\s+,.]/g, '').replace(/\,/g, '').replace(/\./g, '');
    var str_left_part = "";
    var str_right_part = "";
    console.log(str_x.length);
    if (str_x.length % 2 == 0) {
        for (var x = 0; x < Math.floor(str_x.length / 2 ); x++) {

            str_left_part += str_x.charAt(x);
        }
        for (var q = str.length; q >= Math.floor(str_x.length / 2 ); q--) {
            str_right_part += str_x.charAt(q);
        }
        console.log(str_left_part + " " + str_right_part);
       return str_left_part===str_right_part ? true : false;

    }
    else{
    for (var x = 0; x < Math.floor(str_x.length / 2 + 1); x++) {

        str_left_part += str_x.charAt(x);
    }
    for (var q = str.length; q >= Math.floor(str_x.length / 2); q--) {
        str_right_part += str_x.charAt(q);
    }
    console.log(str_left_part + " " + str_right_part);
    return str_left_part === str_right_part ? true : false;
}
}




console.log(palindrome("almostomla"));