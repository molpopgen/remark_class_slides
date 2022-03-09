library(pedtools)

png("autosomal_recessive.png", pointsize = 18, width = 500)

fam <- ped(
    id = 1:11, fid = c(0, 0, 1, 1, 1, 1, 0, 7, 7, 7, 7),
    mid = c(0, 0, 2, 2, 2, 2, 0, 6, 6, 6, 6),
    sex = c(1, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1)
)

plot(fam,
    symbolsize = 1.5, aff = c(4, 6),
    hints = list(order = c(1:11), spouse = rbind(c(1, 2, 0), c(6, 7, 1)))
)

dev.off()
