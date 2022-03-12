FIGURES:=trio_example.png \
		 one_generation_disease_example.png \
		 loss_of_genetic_material.png \
		 autosomal_recessive.png \
		 autosomal_recessive_affected_markers.png \
		 autosomal_recessive_affected_parents_markers.png \
		 autosomal_recessive_affected_all_parents_markers.png

all: $(FIGURES)

clean:
	rm -f *.png

%.png: %.R
	R --no-save --quiet < $<



