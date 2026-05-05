# Advanced VPC peering

Product: Google Cloud VMware Engine
Feature slug: `advanced-vpc-peering`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Advanced VPC peering lets you create a complex set of Virtual Private Cloud peerings in the Google Cloud console.

## Lifecycle

- Latest feature date: 2023-11-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- auth (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- authorization (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- encrypt (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- firewall (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- key (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- kms (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- private (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- security (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings)
