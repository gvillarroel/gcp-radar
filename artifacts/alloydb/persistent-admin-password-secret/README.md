# Persistent admin password secret

Product: AlloyDB
Feature slug: `persistent-admin-password-secret`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

AlloyDB Omni no longer deletes the admin password secret after cluster creation when you specify it.

## Lifecycle

- Latest feature date: 2024-08-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- iam
- identity
- key
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
