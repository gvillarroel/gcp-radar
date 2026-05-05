# Unlimited delete and read requests

Product: Cloud Deployment Manager
Feature slug: `unlimited-delete-and-read-requests`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Deployment Manager quotas allow unlimited delete and read requests.

## Lifecycle

- Latest feature date: 2015-07-13
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

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- allow (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- auth (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- authorization (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- certificate (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- credential (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- firewall (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- permission (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- private (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- role (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- secret (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))
- security (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/delete)
