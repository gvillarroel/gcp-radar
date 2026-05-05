# DNS server IP

Product: Google Cloud VMware Engine
Feature slug: `dns-server-ip`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

DNS server IP configuration can be managed with Terraform resources.

## Lifecycle

- Latest feature date: 2023-12-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- allow (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- auth (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- authorization (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- iam (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- key (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- permission (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- private (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- role (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- security (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))
- token (evidence: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-create-dns-bindings)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud)
