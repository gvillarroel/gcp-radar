# ADR 0024: Step 10 Incomplete Artifact Fail Fast

## Status

Accepted

## Context

Step 10 generates final radar reports from promoted artifacts only. If a
promotion manifest lists a feature whose promoted `card.json` or `README.md`
is missing, or a product is missing its promoted service card, report
generation can otherwise produce incomplete Markdown and leave final-output
validation to catch the problem afterward.

That delayed failure is less useful than stopping before report files are
rewritten, because `radar/` should only be regenerated from a complete
source-of-truth artifact inventory.

## Decision

Step 10 must fail before writing final reports when a promoted artifact
inventory is incomplete or internally inconsistent.

The canonical Step 10 script now checks, while loading artifacts, that every
product directory under `artifacts/` has a `promotion.json`, and that every
product with a promotion manifest also has:

- `artifacts/<product-slug>/card.json`
- `artifacts/<product-slug>/index.md`
- `artifacts/<product-slug>/<feature-slug>/card.json` for every feature listed
  in the promotion manifest
- `artifacts/<product-slug>/<feature-slug>/README.md` for every feature listed
  in the promotion manifest

It also checks that required manifest paths, product slugs, promoted feature
counts, duplicate promoted feature slugs, skipped feature counts, duplicate
skipped feature slugs, promoted/skipped feature overlap, promoted or skipped
feature names, and embedded service or feature card slugs match the artifact
path being rendered. Step 10 also checks that the promotion manifest exposes
`promoted_features` and `skipped_features` as arrays, that those arrays give
every canonical Step 08 feature exactly one promoted or skipped disposition,
and that the promotion manifest, promoted service card, and
promoted feature cards use the current Step 09 artifact-promotion schema and point their
`source_step08_card` provenance at the canonical Step 08 product card before
rendering reports. Step 10 also checks that the promotion manifest, promoted
service card, and promoted feature cards expose non-empty valid ISO 8601
`generated_at` timestamps before rendering reports. Step 10 also compares
promoted service and feature card
payload fields against the canonical Step 08 card for the product before
rendering. This includes product and feature labels, IAM, security, lifecycle,
evidence, validation, and other source-backed card payloads that feed final
reports.

Step 10 also rejects stale feature artifact directories under
`artifacts/<product-slug>/` when those directories are not listed as promoted
features in the product promotion manifest. This keeps the report generator
from rewriting `radar/` from an artifact tree that final-output validation
would later reject as containing unpromoted feature artifacts.

Step 10 also scans promoted product index and promoted feature README Markdown
for external HTTP(S) links. If any external link does not point to an official
Google host, Step 10 fails before rewriting final reports so artifact
source-policy drift is caught at the report-generation boundary.

Step 10 also checks promoted feature README content against the promoted
feature card before rewriting reports. It rejects README drift in feature
identity, lifecycle lines, official evidence links, IAM status and rendered IAM
detail, security capability names, and official security evidence links.

Step 10 also verifies that each promoted product index links the product
service card and every promoted feature README listed in the promotion
manifest, and that it does not retain stale local feature README or service
card links. It also verifies the product index title, Step 08 provenance line,
summary values, and promoted feature link labels before rendering. Product
index drift is therefore caught before `radar/` or
`data/step-10/current/index.json` is rewritten.

If any required card is missing or any artifact identity check fails, Step 10
exits with an error that lists the problem paths or values and does not rewrite
`radar/` or `data/step-10/current/index.json`.

## Consequences

Benefits:

- final reports cannot be silently regenerated from partial promoted artifacts
- final reports cannot be regenerated from artifact cards attached to the
  wrong product or feature identity
- final reports cannot be regenerated from promoted artifact metadata that has
  lost valid run timestamps
- missing card or README artifact problems are reported at the stage that would
  consume them
- final-output validation remains the full contract, but Step 10 now catches a
  high-impact artifact integrity issue earlier

Costs:

- manual artifact experiments must include all promoted cards before Step 10 can
  run successfully
