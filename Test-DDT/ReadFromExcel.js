var exceljsObject = require('exceljs');
var wbObject = new exceljsObject.Workbook();

describe('Demo for exceljs', function () {
    it('Read data from excel', function () {
        wbObject.xlsx.readFile('./TestData/sampleData.xlsx').then(function () {
            var sheetObj = wbObject.getWorksheet("Sheet1");
            var rows = sheetObj.rowCount;
            console.log("Total rows: ", rows);
            for (let i = 2; i <= rows; i++) {
                var username = sheetObj.getRow(i).getCell(1).toString();
                var password = sheetObj.getRow(i).getCell(2).toString();
                console.log("username: ", username);
                console.log("password: ", password);
            }
        })
    })
})