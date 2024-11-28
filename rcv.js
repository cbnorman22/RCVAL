function SearchHouse() {
    // Declare variables
    var input, filter, table, tr, district, name, i, txtValue;
    input = document.getElementById("house_search");
    filter = input.value.toUpperCase();
    table = document.getElementById("house_table");
    tr = table.getElementsByTagName("tr");
    
    SearchRows(filter, tr, district, name)
    // Loop through all table rows, and hide those who don't match the search query

}

function SearchSenate() {
    // Declare variables
    var input, filter, table, tr, district, name, i, txtValue;
    input = document.getElementById("senate_search");
    filter = input.value.toUpperCase();
    table = document.getElementById("senate_table");
    tr = table.getElementsByTagName("tr");
    
    SearchRows(filter, tr, district, name)
    // Loop through all table rows, and hide those who don't match the search query

}

function SearchRows(filter, tr, district, name) {
    var i, txt
    for (i = 0; i < tr.length; i++) {
        district = tr[i].getElementsByTagName("td")[0];
        name = tr[i].getElementsByTagName("td")[1];
        if (district) {
            txt = district.textContent || district.innerText;
            if (txt.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                if (name) {
                    txt = name.textContent || name.innerText;
                    if (txt.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }
}