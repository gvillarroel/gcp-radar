# Improved Apigee Hybrid backup and restore system

Product: Apigee hybrid
Feature slug: `improved-apigee-hybrid-backup-and-restore-system`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Introduces a new backup and restore system that removes pod exec and ClusterRole requirements, uses fewer service accounts, and replaces the apigee-cassandra-backup-utility image with apigee-hybrid-cassandra-client.

## Lifecycle

- Latest feature date: 2024-08-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- armor
- auth
- iam
- identity
- key
- logging
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade)
