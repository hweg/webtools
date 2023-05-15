var currentMonth = new Date().getMonth();
var currentYear = new Date().getFullYear();
function createCalendar() {
    var calendar = document.getElementById("calendar");
    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();

    var monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    var currentMonthElement = document.getElementById("current-month");
    currentMonthElement.textContent = monthNames[month] + " " + year;

    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();

    var table = document.createElement("table");
    var header = document.createElement("thead");
    var headerRow = document.createElement("tr");

    for (var i = 0; i < 7; i++) {
        var headerCell = document.createElement("th");
        headerCell.textContent = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"][i];
        headerRow.appendChild(headerCell);
    }

    header.appendChild(headerRow);
    table.appendChild(header);

    var body = document.createElement("tbody");
    var row = document.createElement("tr");

    for (var i = 0; i < firstDay; i++) {
        var cell = document.createElement("td");
        row.appendChild(cell);
    }

    var count = firstDay;

    for (var day = 1; day <= daysInMonth; day++) {
        var cell = document.createElement("td");
        cell.textContent = day;

        if (day === date.getDate() && month === date.getMonth() && year === date.getFullYear()) {
            cell.classList.add("today");
        }

        cell.addEventListener("click", function () {
            var selected = document.getElementsByClassName("selected");
            if (selected.length > 0) {
                selected[0].classList.remove("selected");
            }
            this.classList.add("selected");
        });

        row.appendChild(cell);

        count++;
        if (count % 7 === 0) {
            body.appendChild(row);
            row = document.createElement("tr");
        }
    }

    body.appendChild(row);
    table.appendChild(body);
    calendar.appendChild(table);
}




createCalendar();