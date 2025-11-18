function duplicateAndNumberSheets() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = spreadSheet.getSheetByName("template");
  var sourceSheet_index = sourceSheet.getIndex();
  console.log(sourceSheet_index);

  // change 20 and 116 to your desired numbers
  for (var i = 20; i <= 116; i++) {
    var newSheet = sourceSheet.copyTo(spreadSheet);
    newSheet.setName(i);
    newSheet.activate();
    spreadSheet.moveActiveSheet(sourceSheet_index + 1);
  }
}
