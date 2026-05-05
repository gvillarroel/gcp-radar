# Vector search

Product: Firestore
Feature slug: `vector-search`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports K-nearest neighbor vector searches, including inequality filters, returned vector distance, and distance thresholds.

## Lifecycle

- Latest feature date: 2024-09-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields), [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox))
- constraint (evidence: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields), [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox))
- iam (evidence: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields), [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox))
- identity (evidence: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields), [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox))
- permission (evidence: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields), [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox))
- role (evidence: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields), [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox))
- security (evidence: [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields), [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview), [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)
- [https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/firestore/native/docs/connect-ide-using-mcp-toolbox)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
