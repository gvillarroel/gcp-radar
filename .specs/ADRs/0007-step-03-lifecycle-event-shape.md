# ADR 0007: Step 03 Lifecycle Event Shape

## Status

Accepted

## Context

Step 03 already emits per-feature lifecycle summary fields such as `latest_feature_date`, `deprecation_date`, and `lifecycle_status`.

However, downstream validation and later card construction also need an event-oriented representation so that lifecycle claims can be traced as individual observations instead of only as rolled-up summary fields.

A feature can accumulate multiple lifecycle observations over time, such as an initial feature announcement, a later general-availability announcement, and a deprecation signal.

## Decision

Extend the Step 03 feature object shape with a `lifecycle_events` array.

Each lifecycle event should be a conservative observation derived from the Step 02 markdown row and should include:

- `event_type`
- `event_date`
- `source_release_note_type` when available
- `inferred_stage` when the release-note text suggests a stage such as preview, beta, or ga
- `summary`

The initial event vocabulary is:

- `feature_event`
- `deprecation_event`

The initial stage vocabulary is:

- `preview`
- `beta`
- `ga`
- empty string when no stage can be inferred safely

These events are observational only.
They do not replace Step 04 validation and should not be treated as fully validated lifecycle facts.

## Consequences

Benefits:

- lifecycle reasoning becomes event-oriented instead of summary-only
- downstream validation can compare and reconcile multiple lifecycle observations
- later card construction can preserve the history of lifecycle evidence

Costs:

- Step 03 JSON files become larger
- stage inference remains heuristic until validation is added
