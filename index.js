document.getElementById('export-btn').addEventListener('click', function() {  
    // Obtener los datos de la tabla  
    const table = document.getElementById('data-table');  
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Reporte" });  

    // Generar y descargar el archivo  
    XLSX.writeFile(workbook, "reporte.xlsx");  
});  