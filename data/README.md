# Data

This directory is the canonical home for all project data.

All machine-readable project artifacts should be organized under `data/`.

Data must be separated by workflow stage using `step-XX` directories.

Examples include:

- raw source captures
- normalized datasets
- intermediate pipeline outputs
- generated product and feature cards
- validation results
- exported structured artifacts

Example layout:

- `data/step-01/`
- `data/step-02/`
- `data/step-03/`

This directory is not the final source of truth for validated feature documentation.

Validated documentation should be promoted into `artifacts/`, and final reports should be generated into `radar/`.

All documentation stored here must be written in English.
