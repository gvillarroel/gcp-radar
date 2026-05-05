# Managed credentials for vCenter and NSX-T Manager

Product: Google Cloud VMware Engine
Feature slug: `managed-credentials-for-vcenter-and-nsx-t-manager`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VMware Engine generates and lets you view or reset passwords for the CloudOwner@gve.local and NSX-T admin users.

## Lifecycle

- Latest feature date: 2021-02-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- audit (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- auth (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- credential (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- encrypt (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- firewall (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- iam (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- key (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- kms (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- logging (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- permission (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- private (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- role (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))
- security (evidence: [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model))

## Official Evidence

- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model](https://docs.cloud.google.com/vmware-engine/docs/concepts-permission-model)
- [https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege](https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege)
