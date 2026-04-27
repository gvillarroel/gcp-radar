# Fixtures

`tiny/` contains a credential-free sample dataset for exercising the staged radar
shape locally. Run:

```bash
node scripts/fixtures/run-tiny-pipeline.mjs
```

The fixture writes isolated outputs under ignored `tmp/fixture-run/`. It is not a
replacement for the official-source pipeline; it is a reproducible smoke path for
normalization, URL mapping, extraction placeholders, validation-shaped gates,
card generation, and final radar file layout.
