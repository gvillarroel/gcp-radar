# Managed instance group partial delete continuation

Product: Compute Engine
Feature slug: `managed-instance-group-partial-delete-continuation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Managed instance group delete operations can be flagged to continue despite already deleted instances or other instance validation errors.

## Lifecycle

- Latest feature date: 2021-09-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- certificate
- confidential
- constraint
- credential
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
- [https://docs.cloud.google.com/compute/docs/quickstart-mig](https://docs.cloud.google.com/compute/docs/quickstart-mig)
- [https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig](https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig)
