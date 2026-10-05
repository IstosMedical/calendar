const container = document.getElementById("calendar-container");

const products = [
["January","TP 300","Automated Tissue Processor"],
["February","AVR","Automatic Staining & Coverslipping"],
["March","Rotary 3006 EM","Electronic Microtome"],
["April","Cryostat","Frozen Section Instrument"],
["May","Embedding Center","Embedding Workstation"],
["June","Slide Stainer","Histology Stainer"],
["July","Coverslipper","Automated Coverslipping"],
["August","Grossing Station","Pathology Grossing"],
["September","Tissue Processor","Laboratory Automation"],
["October","Paraffin Dispenser","Embedding Solution"],
["November","Digital Scanner","Digital Pathology"],
["December","Complete Histopathology Line","Integrated Solution"]
];

const year = 2027;

products.forEach(product => {

    const page = document.createElement("div");
    page.className = "calendar-page";

    page.innerHTML = `
    <div class="logo">
        <h1>ISTOS MEDICAL</h1>
    </div>

    <div class="month-title">
        ${product[0]}
        <span class="year">${year}</span>
    </div>

    <div class="content">

        <div class="product-info">

            <div class="product-name">${product[1]}</div>

            <div class="product-category">
            ${product[2]}
            </div>

            <div class="tagline">
            Precision.<br>
            Reliability.<br>
            Trusted Performance.
            </div>

        </div>

        <div class="image-placeholder">
        Equipment Image Here
        </div>

    </div>
    `;

    const cal = createCalendar(
        year,
        new Date(`${product[0]} 1, ${year}`).getMonth()
    );

    page.appendChild(cal);

    page.innerHTML += `
    <div class="footer-note">
    Red dates indicate weekends
    </div>

    <div class="wave"></div>
    `;

    container.appendChild(page);
});

function createCalendar(year, month){

    const table = document.createElement('table');
    table.className="calendar-grid";

    let headers =
    "<tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>";

    table.innerHTML=headers;

    let firstDay = new Date(year,month,1).getDay();

    let daysInMonth =
    new Date(year,month+1,0).getDate();

    let day = 1;

    for(let i=0;i<6;i++){

        let row=document.createElement('tr');

        for(let j=0;j<7;j++){

            let cell=document.createElement('td');

            if(i===0 && j<firstDay){

                cell.innerHTML="";

            } else if(day<=daysInMonth){

                cell.innerHTML=day;

                if(j===0||j===6)
                    cell.classList.add("weekend");

                day++;

            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    return table;
}

async function exportPDF(){

alert(
"Use browser print → Save as PDF for highest quality."
);

window.print();
}
