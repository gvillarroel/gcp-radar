# Cross joins in multi-stage queries

Product: Google SecOps
Feature slug: `cross-joins-in-multi-stage-queries`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cross joins in YARA-L multi-stage queries let you compare event data against aggregated statistics from earlier stages.

## Lifecycle

- Latest feature date: 2026-02-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- iam (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- identity (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- permission (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- threat (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
