# Bare Metal Solution network management

Product: Bare Metal Solution
Feature slug: `bare-metal-solution-network-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Users can create, attach, detach, and delete networks, and manage VLAN attachments for Bare Metal Solution resources.

## Lifecycle

- Latest feature date: 2022-11-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- allow (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- auth (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- authorization (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- encrypt (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- firewall (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- iam (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- identity (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- key (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- kms (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- logging (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- policy (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- role (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- secret (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- security (evidence: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide), [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))

## Official Evidence

- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)
