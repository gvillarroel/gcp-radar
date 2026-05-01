# and GKE Pods

Product: Policy Intelligence
Feature slug: `and-gke-pods`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

IAM Recommender generates policy insights and role recommendations for identities in workload identity pools, workforce identity pools, and Google Kubernetes Engine Pods that use a specific Kubernetes service account.

## Lifecycle

- Latest feature date: 2024-08-15
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

## Security Capabilities

- access
- allow
- auth
- authorization
- constraint
- iam
- identity
- key
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/policy-intelligence/docs/lateral-movement-insights](https://docs.cloud.google.com/policy-intelligence/docs/lateral-movement-insights)
- [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights)
- [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-recommendations-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
