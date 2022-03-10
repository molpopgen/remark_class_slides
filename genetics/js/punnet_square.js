function punnet_square_table(parent1, parent2) {
    const cartesian =
        (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
    const zip = (a, b) => a.map((k, i) => [k, b[i]].join(""));

    let parent1_gametes = cartesian(...parent1);
    let parent2_gametes = cartesian(...parent2);

    let offspring_genotypes = [];

    parent1_gametes.forEach((item, _) => { parent2_gametes.forEach((item2, _) => offspring_genotypes.push(zip(item, item2).join(""))) });
    console.log(offspring_genotypes);
}
