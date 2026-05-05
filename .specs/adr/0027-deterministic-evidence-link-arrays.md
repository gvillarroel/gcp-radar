# ADR 0027: Deterministic Evidence Link Arrays

## Status

Accepted

## Context

Step 08 product cards, promoted artifacts, and Step 10 radar reports all carry
official Google evidence links. The final validator already rejects
non-official evidence, but duplicate or unstable link ordering can still create
noisy diffs and make review harder.

Security capability evidence links were especially sensitive because detected
capabilities reused feature source links. If those links were sliced before
sorting, regenerated cards could preserve valid official evidence in a
non-deterministic order.

## Decision

Step 08 must build detected security capability evidence links from a
duplicate-free, sorted official Google URL list before applying the evidence
link limit.

Final-output validation must reject duplicate or unsorted evidence-link arrays
for:

- Step 08 service source links
- Step 08 feature source links
- Step 08 service and feature security evidence links
- promoted service source links
- promoted feature source links
- promoted service and feature security evidence links

The validation does not require supporting page arrays to be globally sorted,
because those arrays preserve ranked evidence-page order from extraction.

## Consequences

Benefits:

- card and artifact evidence diffs become more stable
- security evidence ordering no longer depends on upstream source order
- final validation catches deterministic-provenance drift before reports are
  accepted

Costs:

- regenerating Step 08 through Step 10 rewrites existing cards and reports when
  security evidence link order is normalized
