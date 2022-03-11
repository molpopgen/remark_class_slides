class TextAllele {
    constructor(label, fontcolor) {
        this.label = label;
        this.fontcolor = fontcolor;
    }

    text() {
        return this.label.fontcolor(this.fontcolor);
    }
}

function blank_allele() {
    // no label, white, 0 opacity
    return new TextAllele("", "#ffffff00");
}

function make_A_allele(dominant, fontcolor) {
    if (dominant == true) {
        return new TextAllele("A", fontcolor);
    }
    return new TextAllele("a", fontcolor);
}

function make_B_allele(dominant, fontcolor) {
    if (dominant == true) {
        return new TextAllele("B", fontcolor);
    }
    return new TextAllele("b", fontcolor);
}

function make_genotype(allele_array) {
    var output = "";

    allele_array.map(allele => { output += allele.text() });

    return output;
}
