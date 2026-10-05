const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const calendarContainer =
    document.getElementById("calendar-container");

months.forEach((monthName, monthIndex) => {

    const page = document.createElement("div");
    page.className = "calendar-page";

    page.innerHTML = `
    
    <div class="header">

        <div class="company-name">
            ISTOS MEDICAL
        </div>

    </div>

    <div class="month-row">
        <div class="month-title">
            ${monthName.toUpperCase()}
            <span>2027</span>
        </div>
    </div>

    <div class="content">

        <div class="product-info">

            <div class="product-name">
                PRODUCT NAME
            </div>

            <div class="product-category">
                Equipment Category
            </div>

            <div class="product-divider"></div>

            <div class="tagline">
                Precision.<br>
                Reliability.<br>
                Trusted Performance.
            </div>

            <div class="description">
                Replace this product information each month.
            </div>

        </div>

        <div class="image-placeholder">
            DROP EQUIPMENT IMAGE HERE
        </div>

    </div>
    `;

    const wrapper = document.createElement("div");
    wrapper.className = "calendar-wrapper";

    wrapper.appendChild(
        createCalendar(2027, monthIndex)
    );

    const note = document.createElement("div");
    note.className = "footer-note";

    note.innerHTML =
        '<span class="red">Red dates:</span> weekends and national holidays';

    wrapper.appendChild(note);

    page.appendChild(wrapper);

    const footer = document.createElement("div");
    footer.className = "wave-footer";

    page.appendChild(footer);

    calendarContainer.appendChild(page);
});


function createCalendar(year, month) {

    const table = document.createElement("table");
    table.className = "calendar-grid";

    const days = [
        "SUN",
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"
    ];

    const headerRow =
        document.createElement("tr");

    days.forEach(day => {

        const th =
            document.createElement("th");

        th.textContent = day;

        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    const firstDay =
        new Date(year, month, 1).getDay();

    const totalDays =
        new Date(year, month + 1, 0).getDate();

    let date = 1;

    for (let row = 0; row < 6; row++) {

        const tr =
            document.createElement("tr");

        for (let col = 0; col < 7; col++) {

            const td =
                document.createElement("td");

            if (row === 0 && col < firstDay) {

                td.classList.add("empty");

            } else if (date <= totalDays) {

                td.textContent = date;

                if (col === 0 || col === 6) {
                    td.classList.add("weekend");
                }

                date++;

            } else {

                td.classList.add("empty");
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    return table;
}
