library(pedtools)
library(ibdsim2)

png("loss_of_genetic_material.png", height = 800, width = 800)

chr19 <- loadMap("decode19", chrom = 1)


ngens <- 3

p <- ancestralPed(ngens)

sim <- ibdsim(p, N = 1, map = chr19, seed = 1234, verbose = F, model = "haldane")

nanc <- 2**ngens

# NOTE: the next bits are a little messy

pos <- rep(1, (2**ngens))

pos <- c(pos, rep(c(2, 4), sum(2**((ngens - 1) - 1:(ngens)))))

pos <- c(pos, 2)

haploDraw(p, sim[[1]],
    cols = c(1:(nanc)), pos = pos, height=4
)

dev.off()
