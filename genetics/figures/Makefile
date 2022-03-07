FIGURES:=trio_example.png \
		 one_generation_disease_example.png \
		 loss_of_genetic_material.png

all: $(FIGURES)

clean:
	rm -f *.png

%.png: %.R
	R --no-save --quiet < $<



