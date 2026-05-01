# MIG health checks without autohealing repairs

Product: Compute Engine
Feature slug: `mig-health-checks-without-autohealing-repairs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Managed instance groups can use health checks to monitor application health without repairing unhealthy VMs when autohealing is turned off.

## Lifecycle

- Latest feature date: 2025-05-12
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
- firewall
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
- [https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp](https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp)
- [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-autohealing)
