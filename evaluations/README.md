# Evaluations

This directory is the publication and study-control entry point for native
Harbor evaluations of repository-specific skills. Keep evaluation notes,
protocols, and reviewed aggregate results in English.

## Pipeline evidence is not a Harbor study

The deterministic Step 07 quality gate evaluates Step 06 pipeline outputs and
feeds findings back into upstream pipeline stages. Historical snapshots under
`data/step-06/tmp-validation/` are pipeline-development evidence. Preserve
those tracked files in place, but do not relabel them as an independent Harbor
validation or holdout cohort.

A Harbor study needs separately authored and locked task roots, frozen run
identity, native Harbor jobs, and explicit release boundaries. Use the
[`harbor-author-evaluation-datasets`](../skills/harbor-author-evaluation-datasets/SKILL.md)
skill before registering such a study.

## Dataset isolation

Partition semantic families before materializing tasks. Every task derived
from the same source, fixture, template, solution skeleton, oracle lineage, or
semantic clone belongs to one split. Predeclare these roles before observing
candidate results:

- `discovery` is optional and optimizer-visible for smoke runs and failure
  mining.
- `development` is mandatory and is the only split that may influence
  diagnosis, mutation, ranking, merging, or candidate selection.
- `validation` is mandatory and sealed until one development winner is frozen
  and digest-bound. Release it once as a one-way acceptance gate.
- `holdout` is optional and remains sealed until validation succeeds; reserve
  it for a higher-consequence final claim.

If validation information influences another mutation or selection, it is no
longer independent. End that study and use a new study with fresh validation.

## Response-surface variation

Materialize nuisance variations deterministically at authoring time with
private, split-specific seeds. Examples include working directory, input and
output path, filename, nesting, artifact count, and serialization format. The
instruction and verifier must change together, and baseline and candidate runs
must receive the exact same materialized task bytes.

Do not assume that every task writes `answer.txt` or uses one fixed directory.
Accept the full declared semantic equivalence class, or make a representation
an explicit requirement. Test reference solutions, alternative valid
solutions, malformed outputs, fixed-path shortcuts, wrong-directory outputs,
and deterministic replay before sealing a split.

Keep validation and holdout prompts, solutions, tests, full manifests, seeds,
and case-level diagnostics outside Git and outside the evolution workspace.
Publish only reviewed commitments and aggregates after the declared release.

## Aggregate execution reports

After `harbor-run-results` has produced schema-version-1 `final-report.json`
files, consolidate comparable runs with:

```powershell
python skills/harbor-author-evaluation-datasets/scripts/consolidate_harbor_reports.py `
  <reports/run-a/final-report.json> `
  <reports/run-b/final-report.json> `
  --baseline <run-label-or-id> `
  --output-dir <publication/comparison-id>
```

The script emits aggregate JSON and Markdown plus static, self-contained SVGs
for quality, resources, and the cost/pass-rate efficiency frontier. It includes
pass rate, mean reward, verifier and execution failures, input, cached-input,
output, optional reasoning, and total tokens, reported USD cost, agent time,
wall time, throughput, and per-trial efficiency. Missing or partially observed
metrics stay visibly incomplete instead of being treated as zero.

The consolidator omits task names, prompts, answers, raw paths, trajectories,
skill contents, and case-level diagnostics. It records source SHA-256
commitments and native fairness metadata, but it does not prove that reports
with different task locks, hardware, models, agents, attempts, or cache
policies are comparable. Do not publish sealed split aggregates early or feed
validation or holdout charts back into candidate selection in the same study.
