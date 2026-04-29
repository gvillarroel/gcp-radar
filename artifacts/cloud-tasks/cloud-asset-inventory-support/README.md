# Cloud Asset Inventory support

Product: Cloud Tasks
Feature slug: `cloud-asset-inventory-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Tasks resources can be discovered and managed through Cloud Asset Inventory; Cloud Tasks resources can be discovered and managed through Cloud Asset Inventory.

## Lifecycle

- Latest feature date: 2023-06-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient)
- [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks)
