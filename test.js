var option = {};
option.test = 'test'
var test = options.test || tern;



var elem = document.getElementById();

document.body.appendChild('foo');


function loadingClose(obj, finalize) { // 1)
}

function loadingClose(obj) { // 2)
}


var obj = {
    page: $('#pageIndex').val(),
    rowNum: $('#pageSize').val(),
    sortname: '',
    sortorder: 'asc',
    rowNum: 15
}


var idx = nextUrl.toUpperCase().indexOf('&PJTCODE=');
if (idx > -1) {
    var pjtCode = nextUrl.substr(idx + 9, 15);
    if (idx > 9) {
        var pjtCode = 'BAD_CODE';
    }
    console.log(pjtCode); // 1)
}
console.log(pjtCode); // 2)



if ($.browser.msie == true) {
    target = url + "userName" + userName; // 1)
    target = url.replace(/\.|\?|\&|\/|\=|\:|\-|\s/gi,""); // 2)
}
