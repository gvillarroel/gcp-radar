# Router appliance spoke

Product: Network Connectivity Center
Feature slug: `router-appliance-spoke`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A router appliance spoke lets Network Connectivity Center use a third-party network virtual appliance to exchange routes dynamically with Cloud Router; A router appliance spoke lets Network Connectivity Center represent a router appliance instance.

## Lifecycle

- Latest feature date: 2022-02-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control))
- firewall (evidence: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control))
- iam (evidence: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control))
- permission (evidence: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control))
- policy (evidence: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control))
- private (evidence: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control))
- role (evidence: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control))

## Official Evidence

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/connect-vpc-networks)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/dynamic-route-exchange-with-vpc-spokes)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview)
