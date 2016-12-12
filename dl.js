var fs = require('fs');
var http = require('http');
var base = 'http://glrittenhouse.com/';
var folders = ['md/', 'lo/', 'hi/', 'htm/'];
var extensions = ['.html', '.png', '.gif', '.jpg', '.htm'];
var url = '';
var file = '';
var timer = 0;
var values = [
   '01',  '02',  '03',  '04',  '05',  '06',  '07',  '08',  '09',  '10',
   '11',  '12',  '13',  '14',  '15',  '16',  '17',  '18',  '19',  '20',
   '21',  '22',  '23',  '24',  '25',  '26',  '27',  '28',  '29',  '30',
   '31',  '32',  '33',  '34',  '35',  '36',  '37',  '38',  '39',  '40',
   '41',  '42',  '43',  '44',  '45',  '46',  '47',  '48',  '49',  '50',
   '51',  '52',  '53',  '54',  '55',  '56',  '57',  '58',  '59',  '60',
   '61',  '62',  '63',  '64',  '65',  '66',  '67',  '68',  '69',  '70',
   '71',  '72',  '73',  '74',  '75',  '76',  '77',  '78',  '79',  '80',
   '81',  '82',  '83',  '84',  '85',  '86',  '87',  '88',  '89',  '90',
   '91',  '92',  '93',  '94',  '95',  '96',  '97',  '98',  '99', '100',
  '101', '102', '103', '104', '105', '106', '107', '108', '109', '110',
  '111', '112', '113', '114', '115', '116', '117', '118', '119', '120',
  '121', '122', '123', '124', '125', '126', '127', '128', '129', '130',
  '131', '132', '133', '134', '135', '136', '137', '138', '139', '140',
  '141', '142', '143', '144', '145', '146', '147', '148', '149', '150',
  '-01', '-02', '-03', '-04', '-05', '-06',
  '06-', '39-'
];

values = ['-01', '-02', '-03', '-04'];

function downloadFile (url, folder, value, ext) {
    http.get(url, function (response) {
        if (response.statusCode > 199 && response.statusCode < 300) {
            file = fs.createWriteStream(folder + value + ext);
            response.pipe(file);
            response.on('end', function () {
                console.log('Downloaded: ' + folder + value + ext);
            });
        } else {
            // console.log('Could not find: ' + folder + value + ext);
        }
    });
}

for (var i = 0; i < values.length; i++) {
    var value = values[i];
    timer = 1000 * i;

    for (var j = 0; j < extensions.length; j++) {
        var ext = extensions[j];
        var fileName = value + ext;
        timer = timer + 1000;

        for (var k = 0; k < folders.length; k++) {
            var folder = folders[k];
            url = base + folder + fileName;
            timer = timer + 1000;

            setTimeout(downloadFile, timer, url, folder, value, ext);

        }

    }

}
