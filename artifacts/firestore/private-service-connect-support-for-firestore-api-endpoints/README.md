# Private Service Connect support for Firestore API endpoints

Product: Firestore
Feature slug: `private-service-connect-support-for-firestore-api-endpoints`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports using Private Service Connect regional endpoints and backends to connect to its regional and multi-regional API endpoints.

## Lifecycle

- Latest feature date: 2026-03-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- private

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/apis](https://docs.cloud.google.com/datastore/docs/apis)
- [https://docs.cloud.google.com/firestore/docs/reference/mcp](https://docs.cloud.google.com/firestore/docs/reference/mcp)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
