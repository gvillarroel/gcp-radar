# ADR 0011: Step 05 Gcloud IAM Role and Permission Snapshot

## Status

Accepted

## Context

Step 05 needs a reproducible way to inventory Google Cloud IAM roles and their
included permissions.

The Step 04 documentation corpus remains useful for product and feature
research, but it is not the best source for an exhaustive role-to-permission
catalog. Google already exposes predefined IAM role definitions directly
through the Cloud SDK, which makes the inventory easier to refresh and less
dependent on page-level documentation heuristics.

The repository also needs Step 05 to:

- capture the authoritative predefined role catalog from Google
- preserve the exact role metadata used for later validation
- emit machine-readable JSON outputs that are easy to diff and reprocess
- optionally export Parquet datasets for downstream analysis
- support repeatable reruns when Google changes role definitions in the future
- avoid redescribing every role on every run when the role metadata is
  unchanged

## Decision

Adopt `gcloud` as the canonical Step 05 source for the IAM role and permission
inventory.

The first implemented Step 05 commands are:

- `gcloud iam roles list --format=json`
- `gcloud iam roles describe <role> --format=json`

Adopt the following Step 05 output layout:

- `data/step-05/current/index.json`
- `data/step-05/current/state.json`
- `data/step-05/current/roles/index.json`
- `data/step-05/current/roles/items/<role-slug>.json`
- `data/step-05/current/permissions/index.json`
- `data/step-05/current/permissions/groups/<permission-group>.json`
- `data/step-05/current/exports/roles.parquet`
- `data/step-05/current/exports/permissions.parquet`
- `data/step-05/current/exports/role-permissions.parquet`

The Step 05 execution contract is:

1. list the current predefined IAM roles
2. compare each listed role against the local cached metadata
3. reuse cached described role payloads when the role `etag` is unchanged
4. run `gcloud iam roles describe` for new or changed roles
5. regenerate the JSON indexes and optional Parquet exports from the complete
   local inventory
6. allow a full refresh with an explicit reprocess flag

Step 05 remains an extraction stage.
It records the IAM catalog as Google currently exposes it and does not by
itself validate product-to-feature mappings.

## Consequences

Benefits:

- Step 05 now uses a direct Google IAM source for role and permission metadata
- repeated runs can refresh the inventory when Google changes role definitions
- JSON output stays easy to diff and reprocess
- Parquet export is available for downstream analytics when the environment has
  the required Python dependency
- cached role payloads reduce unnecessary repeated `describe` calls

Costs:

- Step 05 currently focuses on IAM inventory, not full product-feature
  extraction from the Step 04 corpus
- product-specific mapping still needs later logic that connects the IAM
  inventory to product or feature cards
- the workflow now depends on a working authenticated `gcloud` installation
