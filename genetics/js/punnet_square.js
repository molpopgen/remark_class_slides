function _join(a, b) {
    const zip = (a, b) => a.map((k, i) => [k, b[i]].join(""));
    if (Array.isArray(a) && Array.isArray(b)) {
        return zip(a, b).join("");
    } else {
        return a + b;
    }
}

function punnet_square_table(parent1, parent2, id, cell_color) {
    var table = document.getElementById(id);


    console.log(table);
    const cartesian =
        (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
    // const zip = (a, b) => a.map((k, i) => [k, b[i]].join(""));

    let parent1_gametes = cartesian(...parent1);
    let parent2_gametes = cartesian(...parent2);

    // console.log(parent1_gametes);
    // console.log(parent2_gametes);

    // parent1_gametes.map((a, i) => console.log(a, i));

    let offspring_genotypes = [];

    parent1_gametes.forEach((item, _) => { parent2_gametes.forEach((item2, _) => offspring_genotypes.push(_join(item, item2))) });

    // var row = table.insertRow(0);
    // var c = row.insertCell(0);
    // c.innerHTML = "Pancakes";
    // c = row.insertCell(1);
    // c.innerHTML = "Ice cream";

    let rows = parent1_gametes.length;

    // Add the "title" row
    let table_row = table.insertRow(0);
    for (let cell = 0; cell < rows + 1; cell += 1) {
        let cell_obj = table_row.insertCell(cell);
        if (cell > 0) {
            cell_obj.innerHTML = parent1_gametes[cell - 1].join("");
        }
    }

    for (let row = 0; row < rows; row += 1) {
        let table_row = table.insertRow(row + 1);

        let cell = table_row.insertCell(0);
        cell.innerHTML = parent2_gametes[row].join("");

        for (let i = 0; i < rows; i += 1) {
            let cell = table_row.insertCell(i + 1);
            cell.innerHTML = offspring_genotypes[i * rows + row];
            if (cell_color != null) {
                cell.style.border = "1px solid " + cell_color;
            } else {
                cell.style.border = "1px solid black";
            }
        }
    }

    table.style.textAlign = "center";
    table.style.borderSpacing = 0;
}

