var XLSX = require('xlsx');

class xlReader {
    read_from_excel(sheetName, filepath) {

        var workbook = XLSX.readFile(filepath);
        var worksheet = workbook.Sheets[sheetName];

        // var cell = 'A3';
        // console.log("THE A2 values is :" + worksheet[cell].v);
        return XLSX.utils.sheet_to_json(worksheet);

    }
}

module.exports = new xlReader();