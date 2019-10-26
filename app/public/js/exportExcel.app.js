// Code take  from: https://codepen.io/malahovks/pen/gLxLWX
function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
    var filename = "certification_data.csv";

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

		csv.push(row.join(","));
	}

    // Download CSV
    download_csv(csv.join("\n"), filename);
}

document.querySelector("button").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
	export_table_to_csv(html, "certification_data.csv");
});




// // Code Taken From: https://www.codexworld.com/export-html-table-data-to-excel-using-javascript/
//    Couldn't get this to work :(
//     function exportTableToExcel(certData, filename = ''){
//     var downloadLink;
//     var dataType = 'application/vnd.ms-excel';
//     var tableSelect = document.getElementById(certData);
//     var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
//
//     // Specify file name
//     filename = filename?filename+'.xls':'excel_data.xls';
//
//     // Create download link element
//     downloadLink = document.createElement("a");
//
//     document.body.appendChild(downloadLink);
//
//     if(navigator.msSaveOrOpenBlob){
//         var blob = new Blob(['\ufeff', tableHTML], {
//             type: dataType
//         });
//         navigator.msSaveOrOpenBlob( blob, filename);
//     }else{
//         // Create a link to the file
//         downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
//
//         // Setting the file name
//         downloadLink.download = filename;
//
//         //triggering the function
//         downloadLink.click();
//     }
// }
