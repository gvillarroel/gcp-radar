# MIG all-instances configuration

Product: Compute Engine
Feature slug: `mig-all-instances-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Managed instance groups can apply metadata and labels to all VMs in the group without creating a new instance template.

## Lifecycle

- Latest feature date: 2023-05-31
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

- [https://docs.cloud.google.com/compute/docs/autoscaler](https://docs.cloud.google.com/compute/docs/autoscaler)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
- [https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig](https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig)
