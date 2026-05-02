# ADR 0026: Step 09 Security Evidence Preflight

## Status

Accepted

## Context

Step 10 and final-output validation reject promoted artifact cards that contain
non-official security capability evidence links. Before this decision, Step 09
could still write those cards into `artifacts/`, leaving the source-policy
failure to be caught only after artifact promotion.

Because `artifacts/` is the source-of-truth layer, non-official security
evidence should be blocked before promotion.

## Decision

Step 09 must validate security capability evidence links at the artifact
promotion boundary.

The canonical Step 09 script now:

- rejects a processed product before writing artifacts when its service card
  contains non-official source links or non-official security capability
  evidence links
- treats a feature with non-official security capability evidence links as not
  promotable, recording the skipped reason
  `non_official_security_evidence_link`

The same official Google HTTP(S) URL rule used by Step 10 and final-output
validation applies here.

## Consequences

Benefits:

- promoted artifacts cannot be written from service cards with non-official
  evidence links
- feature artifacts with non-official security evidence are skipped at the
  source-of-truth boundary
- Step 09, Step 10, and final-output validation enforce the same source-policy
  expectation

Costs:

- Step 09 may skip features that would previously have been promoted until
  upstream card construction removes or fixes the non-official security
  evidence link
