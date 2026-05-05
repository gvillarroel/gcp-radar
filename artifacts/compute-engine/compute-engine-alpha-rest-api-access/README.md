# Compute Engine alpha REST API access

Product: Compute Engine
Feature slug: `compute-engine-alpha-rest-api-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Projects can send HTTP requests to Compute Engine alpha URIs to test experimental alpha-stage features through REST.

## Lifecycle

- Latest feature date: 2025-06-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- identity (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- private (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- role (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- security (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))
- token (evidence: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources), [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members)
- [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources)
- [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest)
