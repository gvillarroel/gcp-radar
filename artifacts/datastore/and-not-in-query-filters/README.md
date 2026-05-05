# and NOT_IN query filters

Product: Datastore
Feature slug: `and-not-in-query-filters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Queries support the not-equal, IN, and NOT_IN filter operators in client libraries; Queries support the not-equal, IN, and NOT_IN filter operators in the console and client libraries.

## Lifecycle

- Latest feature date: 2022-06-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes), [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes), [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries), [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data))
- auth (evidence: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes), [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes), [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries), [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data))
- constraint (evidence: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes), [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes), [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries), [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data))
- key (evidence: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes), [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes), [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries), [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data))
- permission (evidence: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes), [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes), [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries), [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data))
- role (evidence: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes), [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes), [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries), [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data))

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- [https://docs.cloud.google.com/datastore/docs/store-query-data](https://docs.cloud.google.com/datastore/docs/store-query-data)
