 var xl = require('G:/workspace/xlsx/XLReader.js');

 describe('Read XL Data', function() {

     var Test_Data = xl.read_from_excel('Sheet1', 'G:/workspace/xlsx/testData.xlsx');

     Test_Data.forEach(function(data) {
         it('TC1', function() {

             browser.get('https://angularjs.org/');
             element(by.model('todoList.todoText')).sendKeys(data.userName);
             element(by.buttonText("add")).click();
             browser.sleep(2000);

         })

         // })
         //     it('TC1', function() {
         //         var workbook = XLSX.readFile('G:/workspace/xlsx/testData.xlsx');
         //         var worksheet = workbook.Sheets['Sheet1'];

         //         // var cell = 'A3';
         //         // console.log("THE A2 values is :" + worksheet[cell].v);
         //         var a = XLSX.utils.sheet_to_json(worksheet);
         //         a.forEach(function(data) {
         //             console.log("The User name are" + data.userName)

         //         })


         //     })

     })
 })