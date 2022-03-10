function punnet_square_table(parent1, parent2) {
    const cartesian =
        (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

    let offspring_alleles = [];

    const zip = (a, b) => a.map((k, i) => [k, b[i]]);

    let zipped = zip(parent1, parent2);

    zipped.forEach((a) => offspring_alleles.push(cartesian(a[0], a[1])));
}
