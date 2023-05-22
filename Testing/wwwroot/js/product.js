var dataTable;

$(document).ready(function () {
    loadDataTable();
});


function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url:'/product/getall'},
        "columns": [
            { data: 'productID', "width": "10%" },
            
            { data: 'name', "width": "35%" },
            { data: 'price', "width": "15%" },
            { data: 'categoryID', "width": "15%" },
            { data: 'onSale', "width": "15%" },
            { data: 'stockLevel', "width": "15%" },
            {
                data: 'productID',
                "render": function (data) {
                    return `
                    <a href="/product/viewProduct?id=${data}" class="btn btn-outline-primary">Details</a>
                    
                    `

                },
                "width": "5%"
            }
        ]
    });
}