# Step 03 Incidence Report 2026-04-09

## Status

Resolved

## Severity

High

## Date

2026-04-09

## Summary

This issue started as a Step 03 seed-quality incident. After targeted fixes to Step 03 ranking and Step 04 selection persistence on 2026-04-09, the seed-selection failure mode is no longer present in the current dataset.

The remaining Step 4 instability is now dominated by acquisition/runtime problems such as `sync_failed`, anti-bot behavior, and incomplete Step 4 execution coverage, not by missing or obviously wrong Step 03 seeds.

## Observed Impact

Filesystem audit on 2026-04-09 after the fixes shows:

- `272` products in [data/step-03/current/products](C:/Users/villa/dev/gcp-radar/data/step-03/current/products)
- `173` products materialized in [data/step-04/current/products](C:/Users/villa/dev/gcp-radar/data/step-04/current/products)
- `73` products with usable corpus pages
- `0` products classified as `no_sources_selected`
- `95` products classified as `sync_failed`
- `4` products left without `state.json`
- `99` Step 3 products still missing entirely in Step 4

This means the dominant bottleneck is no longer Step 03 seed selection.

## Incident Modes

### 1. Prior Missing-Seed Failures Were Eliminated

The Step 03 defects that originally justified this incident were reproduced, fixed, and revalidated.

Validated examples:

- [chat-api selection](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/chat-api/selection.json) now selects:
  - `docs_root`: `https://developers.google.com/workspace/chat/overview`
  - `docs_reference`: `https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1`
  - `api_reference`: `https://developers.google.com/workspace/chat/api/reference/rest`
  - `iam_reference`: `https://developers.google.com/workspace/chat/authenticate-authorize`
- [chat-api state](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/chat-api/state.json) now materializes corpus pages instead of ending in `no_sources_selected`
- [cloud-run selection](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/cloud-run/selection.json) now selects broad roots and references:
  - `https://docs.cloud.google.com/run/docs`
  - `https://docs.cloud.google.com/run/docs/apis`
  - `https://docs.cloud.google.com/run/docs/reference/cloud-run-admin-api-overview`
  - `https://docs.cloud.google.com/run/docs/securing/managing-access`
  - `https://docs.cloud.google.com/python/docs/reference/run/latest`
  - `https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview`
- [gke-enterprise selection](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/gke-enterprise/selection.json) now selects crawlable parents instead of deep leaves:
  - `https://docs.cloud.google.com/kubernetes-engine/enterprise/docs`
  - `https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support`
  - `https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks`

### 2. Deep-Leaf Seed Selection Was Reduced

Step 03 and Step 04 were updated so crawlable roots are preferred and `selection.json` is persisted before sync. This removed the earlier ambiguity where a bad or missing `selection.json` could be confused with a sync failure.

Relevant code changes:

- [score-product-documentation-urls.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-03/score-product-documentation-urls.mjs)
  - added canonical families for `chat-api` and `cloud-run`
  - strengthened `gke-enterprise` to promote `.../enterprise/docs`
  - added derived-parent promotion for Chat, Cloud Run, and GKE Enterprise
- [scrape-product-documentation-with-know.mjs](C:/Users/villa/dev/gcp-radar/scripts/step-04/scrape-product-documentation-with-know.mjs)
  - now writes [selection.json](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/chat-api/selection.json) before sync begins so Step 03 selection can be audited independently of crawl success

### 3. Remaining Failures Are Step 04 Problems

Representative current `sync_failed` examples are now consistent with Step 04 runtime or crawl instability, not with Step 03 seed absence:

- [cloud-run state](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/cloud-run/state.json): `sync_failed` after attempting `https://docs.cloud.google.com/run/docs`
- [gmail-api state](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/gmail-api/state.json): `sync_failed` after attempting `https://developers.google.com/workspace/gmail/api`
- several other products still fail with anti-bot or environment issues during `know` sync

## Resolution Rationale

This issue is resolved because the Step 03-specific failure mode no longer reproduces:

- `no_sources_selected` dropped from `98` to `0`
- previously weak sample products now generate stable [selection.json](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/chat-api/selection.json) files with broad official roots and references
- `chat-api` now completes with a usable corpus in [state.json](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/chat-api/state.json)
- `cloud-run` and `gke-enterprise` now expose correct Step 04 selections even when sync remains unstable

The unresolved catalog bottleneck has moved to Step 04 execution and catalog coverage and should be tracked through Step 04 issues.

## Notes

- `missing_from_step4: 99` remains unchanged, but that metric is now about incomplete Step 04 execution coverage, not Step 03 seed quality.
- Current representative `sync_failed` products include `automl-translation`, `bare-metal-solution`, `bigtable`, `binary-authorization`, `blockchain-analytics`, and `calendar-api`.
- Current products without `state.json` remain [eventarc](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/eventarc), [filestore](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/filestore), [firestore](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/firestore), and [gemini](C:/Users/villa/dev/gcp-radar/data/step-04/current/products/gemini).

## Exit Criteria

Satisfied:

- the count of Step 4 `no_sources_selected` products dropped materially from `98` to `0`
- sampled products previously blocked by Step 3 now produce stable [selection.json](C:/Users/villa/dev/gcp-radar/data/step-04/current/products)

Moved to Step 04 tracking:

- the count of Step 3 products missing in Step 4 dropping from `99`
- previously partial products completing with valid [state.json](C:/Users/villa/dev/gcp-radar/data/step-04/current/products)

## Related Issues

- [step-03-missing-seed-selection-blocks-step-04.md](C:/Users/villa/dev/gcp-radar/.specs/issues/step-03-missing-seed-selection-blocks-step-04.md)
- [step-03-should-prefer-crawlable-doc-roots-over-deep-leaf-seeds.md](C:/Users/villa/dev/gcp-radar/.specs/issues/step-03-should-prefer-crawlable-doc-roots-over-deep-leaf-seeds.md)
- [step-04-catalog-coverage-is-incomplete.md](C:/Users/villa/dev/gcp-radar/.specs/issues/step-04-catalog-coverage-is-incomplete.md)
