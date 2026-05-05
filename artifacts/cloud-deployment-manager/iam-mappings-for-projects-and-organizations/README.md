# IAM mappings for projects and organizations

Product: Cloud Deployment Manager
Feature slug: `iam-mappings-for-projects-and-organizations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Deployment Manager can create IAM mappings for projects and organizations through the gcp-types/cloudresourcemanager-v1 type provider.

## Lifecycle

- Latest feature date: 2019-07-01
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

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- allow (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- auth (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- certificate (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- credential (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- firewall (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- permission (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- private (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- role (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- secret (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))
- security (evidence: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances), [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances)
- [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals)
