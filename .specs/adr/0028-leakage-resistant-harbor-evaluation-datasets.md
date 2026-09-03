# ADR 0028: Leakage-Resistant Harbor Evaluation Datasets

## Status

Accepted

## Context

The repository has deterministic pipeline checks, including the Step 07
quality gate, and historical development snapshots under
`data/step-06/tmp-validation/`. Those artifacts diagnose and improve the GCP
Radar pipeline. They were not created as isolated native Harbor cohorts and
must not be presented as independent evidence of skill generalization.

Skill evolution needs an explicit boundary between evidence used to choose a
candidate and evidence used only to test the resulting claim. It also needs to
avoid accidental shortcuts such as requiring every answer in one directory or
always expecting `answer.txt`.

## Decision

Use the self-contained
`skills/harbor-author-evaluation-datasets/` bundle to author and preflight
native Harbor task roots before study registration.

Partition whole semantic families, not individual generated variants. Tasks
derived from a common source, fixture, template, solution skeleton, oracle
lineage, or semantic clone stay in one split. Predeclare the split roles before
observing candidate results:

- optional `discovery` for optimizer-visible smoke runs or failure mining
- mandatory `development` as the only optimizer-visible split
- mandatory `validation`, sealed until one development winner is frozen and
  digest-bound, then released once as a one-way acceptance gate
- optional `holdout`, sealed until validation succeeds and reserved for a
  higher-consequence final claim

If validation evidence influences another candidate change or selection, the
study ends. Any later unbiased claim requires a new study with fresh
validation.

Materialize nuisance-axis variations deterministically at dataset-authoring
time with private, split-specific seeds. The axes may vary working directory,
input and output paths, filenames, nesting, artifact count, or serialization.
The instruction and verifier change together, and every baseline and candidate
receives the same materialized task bytes. Runtime randomness is not a shortcut
for dataset diversity.

Keep sealed prompts, solutions, tests, complete manifests, seeds, verifiers,
and case-level diagnostics outside Git and outside the evolution workspace.
Preserve the existing Step 07 and `tmp-validation` evidence at its current
paths without converting or relabeling it.

After native Harbor reports have been normalized by `harbor-run-results`, the
bundle's `consolidate_harbor_reports.py` may publish aggregate comparisons. Its
JSON, Markdown, and static SVGs include rewards and pass rates, failures,
tokens, reported cost, agent and wall time, throughput, and per-trial
efficiency. Publications omit prompts, answers, task names, raw paths,
trajectories, skill content, and case-level results. Cross-run comparisons are
descriptive unless the study controls task locks, hardware, model, agent,
attempt, and cache policy.

## Consequences

Benefits:

- development evidence cannot silently become an independent test
- semantic families cannot leak across nominal splits
- replayable path and response variations reduce fixed-convention shortcuts
- aggregate run comparisons include resource use without exposing private
  tasks
- historical pipeline evidence keeps its original meaning and location

Costs:

- validation feedback cannot be reused to repair a candidate in the same study
- private split material needs access controls outside Git
- response variants require paired instruction and verifier tests
- a failed validation gate requires a new study and fresh validation evidence
