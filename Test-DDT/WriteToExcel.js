const excelObj = require('exceljs');
const wbObject = new excelObj.Workbook();

describe('Write to new file', () => {
    it('Add new rows into file', () => {
        const sheetObj = wbObject.addWorksheet('TestData');
        sheetObj.addRow(["id", "name", "salary"]);
        sheetObj.addRow(["1098", "Jacob", "89000"]);
        sheetObj.addRow(["1099", "Jack", "78000"]);

        wbObject.xlsx.writeFile('./TestData/writeData.xlsx').then(() => {
            console.log("Created successfully")
        })
    });
})