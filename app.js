/**
 * @desc 把图片名称导入到excel
 * @author Jafeney <692270687@qq.com>
 * @dateTime 2016-11-24
 **/

var fs = require('fs');
var json2xls = require('json2xls');
var SOURCE_PATH = './source/';
var OUTPUT_PATH = './output/';

var app = function() {
    var files = fs.readdirSync(SOURCE_PATH);
    var data = []
    files.forEach(function(item, i) {
        data.push({
            url: item
        })
    })
    var xls = json2xls(data);
    fs.writeFileSync(OUTPUT_PATH+'data.xlsx', xls, 'binary');
}

app();
