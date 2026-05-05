# Pipeline operations query interface

Product: Firestore
Feature slug: `pipeline-operations-query-interface`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Pipeline operations is a Firestore query interface that supports complex expressions and functions such as min, max, substring, regex_match, and array_contains_all.

## Lifecycle

- Latest feature date: 2026-01-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore), [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference), [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain))
- audit (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore), [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference), [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain))
- constraint (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore), [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference), [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain))
- key (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore), [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference), [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain))
- logging (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore), [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference), [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain))

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/reference/gql_reference](https://docs.cloud.google.com/datastore/docs/reference/gql_reference)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain](https://docs.cloud.google.com/firestore/native/docs/enterprise-query-explain)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore)
