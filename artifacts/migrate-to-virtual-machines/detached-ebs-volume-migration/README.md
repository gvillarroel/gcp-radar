# Detached EBS volume migration

Product: Migrate to Virtual Machines
Feature slug: `detached-ebs-volume-migration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Migrate to Virtual Machines can migrate AWS Elastic Block Store volumes that are not attached to a VM.

## Lifecycle

- Latest feature date: 2024-11-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source))
- allow (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source))
- encrypt (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source))
- iam (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source))
- key (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source))
- kms (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source))
- permission (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source))
- policy (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source))

## Official Evidence

- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-disks)
