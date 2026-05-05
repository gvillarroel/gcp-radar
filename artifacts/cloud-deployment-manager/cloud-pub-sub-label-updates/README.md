# Cloud Pub/Sub label updates

Product: Cloud Deployment Manager
Feature slug: `cloud-pub-sub-label-updates`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Deployment Manager can update labels on Cloud Pub/Sub resources.

## Lifecycle

- Latest feature date: 2019-06-03
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

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- authorization (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- certificate (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- firewall (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- private (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- secret (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))
- security (evidence: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update)
