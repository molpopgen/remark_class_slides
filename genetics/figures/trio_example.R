library(pedtools)

png("trio_example.png", pointsize = 18, width = 500)

trio <- nuclearPed(nch = 2, sex = 2, mother = "Mother", father = "Father", children = c("Daughter"))

plot(trio, symbolsize = 2.5, title = "Trio")

dev.off()
