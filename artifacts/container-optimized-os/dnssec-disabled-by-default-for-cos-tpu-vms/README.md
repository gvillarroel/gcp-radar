# DNSSEC disabled by default for COS TPU VMs

Product: Container Optimized OS
Feature slug: `dnssec-disabled-by-default-for-cos-tpu-vms`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Container-Optimized OS disables DNSSEC by default on COS TPU virtual machines.

## Lifecycle

- Latest feature date: 2026-02-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- dnssec
- firewall
- key
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update](https://docs.cloud.google.com/container-optimized-os/docs/concepts/auto-update)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
