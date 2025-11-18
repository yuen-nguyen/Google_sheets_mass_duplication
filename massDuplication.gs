function duplicateAndNumberSheets() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = spreadSheet.getSheetByName("c");
  var sourceSheet_index = sourceSheet.getIndex();
  console.log(sourceSheet_index);
  
  for (var i = 20; i <= 116; i++) {
    var newSheet = sourceSheet.copyTo(spreadSheet);
    newSheet.setName(i);
    newSheet.activate();
    spreadSheet.moveActiveSheet(sourceSheet_index + 1);
  }
}
