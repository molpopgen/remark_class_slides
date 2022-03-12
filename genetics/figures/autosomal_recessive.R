library(pedtools)

png("autosomal_recessive.png", pointsize = 18, width = 500)

fam <- ped(
    id = 1:11, fid = c(0, 0, 1, 1, 1, 1, 0, 7, 7, 7, 7),
    mid = c(0, 0, 2, 2, 2, 2, 0, 6, 6, 6, 6),
    sex = c(1, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1)
)

affecteds <- c(4, 6)

plot(fam,
    symbolsize = 1.5, aff = affecteds,
    hints = list(order = c(1:11), spouse = rbind(c(1, 2, 0), c(6, 7, 1)))
)

dev.off()

# Add markers to the affecteds
png("autosomal_recessive_affected_markers.png", pointsize = 18, width = 500)

maff <- marker(fam, "4" = "a/a", "6" = "a/a")

plot(fam,
    marker = maff,
    symbolsize = 1.5, aff = affecteds,
    hints = list(order = c(1:11), spouse = rbind(c(1, 2, 0), c(6, 7, 1)))
)

dev.off()

# Add markers to the parents
png("autosomal_recessive_affected_parents_markers.png", pointsize = 18, width = 500)

mpar <- marker(fam, "1" = "A/a", "2" = "A/a", "4" = "a/a", "6" = "a/a")

plot(fam,
    marker = mpar,
    symbolsize = 1.5, aff = affecteds,
    hints = list(order = c(1:11), spouse = rbind(c(1, 2, 0), c(6, 7, 1)))
)

dev.off()

# Add markers to ALL of the parents
png("autosomal_recessive_affected_all_parents_markers.png", pointsize = 18, width = 500)

mpar <- marker(fam, "1" = "A/a", "2" = "A/a", "4" = "a/a", "6" = "a/a", "7" = "A/-")

plot(fam,
    marker = mpar,
    symbolsize = 1.5, aff = affecteds,
    hints = list(order = c(1:11), spouse = rbind(c(1, 2, 0), c(6, 7, 1)))
)

dev.off()
