# Scripts

This directory contains executable workflow stages for `gcp-radar`.

Scripts are expected to be primarily implemented with `zx`.

Scripts must be separated by workflow stage using `step-XX` directories.

Secrets required by local tooling must be provided through environment
variables from the user's Windows profile. Do not hardcode API keys in scripts
or commit populated `.env` files.

The intended workflow is stage-oriented, for example:

- discovery
- normalization
- documentation mapping
- extraction
- validation
- card generation

Example layout:

- `scripts/step-01/`
- `scripts/step-02/`
- `scripts/step-03/`

All script-facing documentation must be written in English.
