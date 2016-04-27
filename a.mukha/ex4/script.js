(function() {
	var rows = +prompt("Количество строк: ");
  var cols = +prompt("Количество столбцов");
  
  function matrixDraw(rows, cols) {
  	var matrix = [];
    var output = "";
    
    for (var i = 0; i < rows; i++) {
    	matrix.push([]);
      
      for (var j = 0; j < cols; j++) {
      	var cellValue = Math.min(i, j, cols - j - 1, rows - i - 1);
      	matrix[i].push(cellValue);
        output += " " + matrix[i][j];
      }
      
      output += "<br>";
    }
    
    return output;
  }
  
	document.getElementById("matrix").innerHTML = matrixDraw(rows, cols);
})();