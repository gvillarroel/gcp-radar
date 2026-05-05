# AWS EC2 migration support

Product: Migrate to Virtual Machines
Feature slug: `aws-ec2-migration-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Lets you migrate AWS EC2 instances to Compute Engine from an AWS source.

## Lifecycle

- Latest feature date: 2023-01-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture))
- allow (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture))
- encrypt (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture))
- key (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture))
- kms (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture))
- permission (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture))
- policy (evidence: [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started), [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture))

## Official Evidence

- [https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)
- [https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-aws-source)
