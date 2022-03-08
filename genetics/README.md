# Slides for genetics

## Requirements

Both `R` and `Python` requirements files are in `requirements/`.
Sadly, there's no way that I know of to install `R` packages from a file, so I just do it manually.

## Building all the graphics

Requires `GNU make`:

```sh
make -j 12
```

The output will be in `figures/`.

### Cleaning up

```sh
make clean
```
