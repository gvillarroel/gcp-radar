# VM Manager VPC Service Controls integration

Product: Compute Engine
Feature slug: `vm-manager-vpc-service-controls-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

VM Manager integrates with VPC Service Controls.

## Lifecycle

- Latest feature date: 2021-04-13
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

- access (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- armor (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- iam (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- identity (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- key (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- logging (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- permission (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- policy (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- private (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- role (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- security (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))
- threat (evidence: [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing), [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control), [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers](https://docs.cloud.google.com/compute/docs/autoscaler/managing-autoscalers)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/access-control)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing](https://docs.cloud.google.com/network-connectivity/docs/vpn/pricing)
