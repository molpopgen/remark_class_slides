library(pedtools)

png("one_generation_disease_example.png", pointsize = 18, width = 500)

fam <- nuclearPed(nch = 4, sex = c(1, 2, 2, 2), mother = "Mother", father = "Father")

plot(fam, symbolsize = 2.5, aff = c(3, 5))

dev.off()

