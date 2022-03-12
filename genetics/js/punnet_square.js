function _join(a, b) {
    // NOTE: can fontcolor k and b[i] here, too.
    const zip = (a, b) => a.map((k, i) => [k.text(), b[i].text()].join(""));
    if (Array.isArray(a) && Array.isArray(b)) {
        return zip(a, b).join("");
    } else {
        return a + b;
    }
}

function _cartesian(input) {
    const cartesian =
        (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
    if (input.length == 1) {
        let temp = [];
        input[0].map(a => { let x = []; x.push(a); console.log("x=", x); temp.push(x); });
        console.log("temp=", temp, cartesian(temp));
        return cartesian(temp);
    }
    return cartesian(...input);
}

function punnet_square_table(parent1, parent2, id) {
    var table = document.getElementById(id);


    console.log(table);
    //const cartesian =
    //    (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
    // const zip = (a, b) => a.map((k, i) => [k, b[i]].join(""));

    let parent1_gametes = _cartesian(parent1);
    let parent2_gametes = _cartesian(parent2);

    console.log(parent1_gametes);
    console.log(parent2_gametes);

    // parent1_gametes.map((a, i) => console.log(a, i));

    let offspring_genotypes = [];

    parent1_gametes.forEach((item, _) => { parent2_gametes.forEach((item2, _) => offspring_genotypes.push(_join(item, item2))) });

    let rows = parent1_gametes.length;

    // Add the "title" row
    let table_row = table.insertRow(0);
    for (let cell = 0; cell < rows + 1; cell += 1) {
        let cell_obj = table_row.insertCell(cell);
        cell_obj.style.border = "1px solid white";
        if (cell > 0) {
            // NOTE: can use .fontcolor() after
            // the join.  Potential for callbacks.
            //cell_obj.innerHTML = parent1_gametes[cell - 1].join("");
            cell_obj.innerHTML = make_genotype(parent1_gametes[cell - 1]);//.join("");
            cell_obj.style.border = "1px solid white";
        }
    }

    for (let row = 0; row < rows; row += 1) {
        let table_row = table.insertRow(row + 1);

        let cell = table_row.insertCell(0);
        cell.innerHTML = make_genotype(parent2_gametes[row]);//.join("");
        cell.style.border = "1px solid white";

        for (let i = 0; i < rows; i += 1) {
            let cell = table_row.insertCell(i + 1);
            cell.innerHTML = offspring_genotypes[i * rows + row];
        }
    }

    table.style.textAlign = "center";
    table.style.borderSpacing = 0;
}

