# strings.split

Product: Google SecOps
Feature slug: `strings-split`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A YARA-L function that splits a string value using a delimiter, defaulting to a comma.

## Lifecycle

- Latest feature date: 2025-10-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))
- audit (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))
- auth (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))
- firewall (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))
- iam (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))
- identity (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))
- key (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))
- secret (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))
- threat (evidence: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search), [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started](https://docs.cloud.google.com/chronicle/docs/yara-l/getting-started)
