# App Hub support for GKE services and workloads

Product: App Hub
Feature slug: `app-hub-support-for-gke-services-and-workloads`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

App Hub now supports Google Kubernetes Engine (GKE) services and workloads in Preview.

## Lifecycle

- Latest feature date: 2025-01-23
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
- iam
- key
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- [https://docs.cloud.google.com/app-hub/docs/monitor-applications](https://docs.cloud.google.com/app-hub/docs/monitor-applications)
- [https://docs.cloud.google.com/app-hub/docs/roles-permissions](https://docs.cloud.google.com/app-hub/docs/roles-permissions)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
