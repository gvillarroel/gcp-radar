# Private Service Connect monitoring metrics and NAT IP address capacity metric availability

Product: Virtual Private Cloud
Feature slug: `private-service-connect-monitoring-metrics-and-nat-ip-address-capacity-metric-availability`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Private Service Connect now provides GA monitoring metrics for producers and consumers for service connections, including a producer-only NAT IP address capacity metric.

## Lifecycle

- Latest feature date: 2025-02-27
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

- access
- allow
- firewall
- iam
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
