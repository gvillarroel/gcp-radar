# Firestore support in Database Center

Product: Firestore
Feature slug: `firestore-support-in-database-center`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Firestore resources can be tracked in Database Center fleet inventory and resource tables, with health monitoring for backup and point-in-time recovery issues; Firestore is supported by Database Center, which can surface the No automated backup policy health issue.

## Lifecycle

- Latest feature date: 2025-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))
- allow (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))
- constraint (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))
- encrypt (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))
- identity (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))
- key (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))
- kms (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))
- permission (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))
- policy (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))
- security (evidence: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library), [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints)
- [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)
