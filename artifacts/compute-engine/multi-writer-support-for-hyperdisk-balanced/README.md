# Multi-writer support for Hyperdisk Balanced

Product: Compute Engine
Feature slug: `multi-writer-support-for-hyperdisk-balanced`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Hyperdisk Balanced disks can be attached in multi-writer mode so up to eight VMs can read and write simultaneously.

## Lifecycle

- Latest feature date: 2024-09-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/compute/docs/disks/hyperdisks](https://developers.google.com/compute/docs/disks/hyperdisks), [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks), [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks))
- confidential (evidence: [https://developers.google.com/compute/docs/disks/hyperdisks](https://developers.google.com/compute/docs/disks/hyperdisks), [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks), [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks))

## Official Evidence

- [https://developers.google.com/compute/docs/disks/hyperdisks](https://developers.google.com/compute/docs/disks/hyperdisks)
- [https://docs.cloud.google.com/compute/docs/disks/hyperdisks](https://docs.cloud.google.com/compute/docs/disks/hyperdisks)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
