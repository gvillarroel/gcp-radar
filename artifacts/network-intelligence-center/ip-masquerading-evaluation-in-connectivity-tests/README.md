# IP masquerading evaluation in Connectivity Tests

Product: Network Intelligence Center
Feature slug: `ip-masquerading-evaluation-in-connectivity-tests`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Connectivity Tests detects whether IP masquerading is applied to traffic from a GKE Pod endpoint and uses the translated address for the test.

## Lifecycle

- Latest feature date: 2026-03-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- constraint
- credential
- firewall
- iam
- identity
- logging
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points](https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/add-monitoring-points)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/reference/gcloud-sdk)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/Shared.Types/Binding](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/Shared.Types/Binding)
