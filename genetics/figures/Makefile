FIGURES:=trio_example.png \
		 one_generation_disease_example.png

all: $(FIGURES)

clean:
	rm -f *.png

%.png: %.R
	R --no-save --quiet < $<



