function _join(a, b) {
    const zip = (a, b) => a.map((k, i) => [k, b[i]].join(""));
    if (Array.isArray(a) && Array.isArray(b)) {
        return zip(a, b).join("");
    } else {
        return a + b;
    }
}

function punnet_square_table(parent1, parent2) {
    const cartesian =
        (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
    // const zip = (a, b) => a.map((k, i) => [k, b[i]].join(""));

    let parent1_gametes = cartesian(...parent1);
    let parent2_gametes = cartesian(...parent2);

    // console.log(parent1_gametes);
    // console.log(parent2_gametes);

    parent1_gametes.map((a, i) => console.log(a, i));

    let offspring_genotypes = [];

    parent1_gametes.forEach((item, _) => { parent2_gametes.forEach((item2, _) => offspring_genotypes.push(_join(item, item2))) });
    // console.log(offspring_genotypes);
}
