# Statistics and aggregations in UDM search using YARA-L 2.0

Product: Google SecOps
Feature slug: `statistics-and-aggregations-in-udm-search-using-yara-l-2-0`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

UDM search can run statistical queries and group results with YARA-L 2.0.

## Lifecycle

- Latest feature date: 2025-03-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- audit (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- auth (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- encrypt (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- firewall (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- iam (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- identity (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- key (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- logging (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- permission (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- policy (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- role (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- secret (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))
- threat (evidence: [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search](https://docs.cloud.google.com/chronicle/docs/investigation/yara-l-2-0-metrics-search)
- [https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc](https://docs.cloud.google.com/chronicle/docs/secops/google-secops-siem-toc)
