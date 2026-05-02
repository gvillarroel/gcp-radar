# ADR 0025: Step 10 Official Link Preflight

## Status

Accepted

## Context

Final-output validation already rejects promoted artifact cards whose source
links or security capability evidence links are not official Google HTTP(S)
URLs. Step 10, however, could still rewrite `radar/` reports from those
artifacts before final validation reported the problem.

Because `radar/` is the final report layer, it should not be regenerated from
promoted artifact cards that already violate the repository source policy.

## Decision

Step 10 must fail during artifact loading before rewriting reports when a
promoted service card or feature card contains:

- a source link that is not an official Google HTTP(S) URL
- a security capability evidence link that is not an official Google HTTP(S)
  URL

The official host allowlist matches final-output validation:

- `cloud.google.com`
- `docs.cloud.google.com`
- `developers.google.com`
- `firebase.google.com`
- `workspace.google.com`
- `googleapis.dev`

Final-output validation remains the full contract, but Step 10 now catches
non-authoritative promoted evidence at the consuming stage before report files
are rewritten.

## Consequences

Benefits:

- final radar reports cannot be regenerated from artifact cards with
  non-official evidence links
- source-policy failures are reported earlier in the workflow
- Step 10 behavior is better aligned with the final validation contract

Costs:

- manual artifact experiments must use official Google HTTP(S) links before
  Step 10 can render reports
