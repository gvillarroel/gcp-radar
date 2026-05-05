# Cloud Monitoring Compute Engine VM Instances dashboard enhancements

Product: Compute Engine
Feature slug: `cloud-monitoring-compute-engine-vm-instances-dashboard-enhancements`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Enhancements to the Cloud Monitoring Compute Engine VM Instances dashboard add cross-fleet metrics, detailed resource views, filters, and time-window controls.

## Lifecycle

- Latest feature date: 2020-06-08
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

- access (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- auth (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- authorization (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- certificate (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- encrypt (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- firewall (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- iam (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- identity (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- key (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- kms (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- logging (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- permission (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- policy (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- role (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- security (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- token (evidence: [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))

## Official Evidence

- [https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota](https://developers.google.com/compute/docs/api/how-tos/use-simplified-quota)
- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota](https://docs.cloud.google.com/compute/docs/api/how-tos/use-simplified-quota)
