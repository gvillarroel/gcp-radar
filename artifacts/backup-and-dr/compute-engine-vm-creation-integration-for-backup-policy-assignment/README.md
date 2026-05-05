# Compute Engine VM creation integration for backup policy assignment

Product: Backup and DR
Feature slug: `compute-engine-vm-creation-integration-for-backup-policy-assignment`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Added integration with Compute Engine VM creation to apply Backup and DR policies during VM creation.

## Lifecycle

- Latest feature date: 2024-09-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- confidential (evidence: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- key (evidence: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))
- security (evidence: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies), [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)
- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms)
