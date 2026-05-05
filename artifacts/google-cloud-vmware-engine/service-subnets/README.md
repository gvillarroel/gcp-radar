# Service subnets

Product: Google Cloud VMware Engine
Feature slug: `service-subnets`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Service subnets add dedicated subnets for appliance and service deployments such as storage, backup, disaster recovery, and media streaming.

## Lifecycle

- Latest feature date: 2022-10-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault))
- auth (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault))
- authorization (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault))
- key (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault))
- private (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault))
- token (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets), [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets](https://docs.cloud.google.com/vmware-engine/docs/concepts-vlans-subnets)
- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-manage-subnets)
