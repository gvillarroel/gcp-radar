# Pub/Sub target message attributes in Cloud Scheduler Console

Product: Cloud Scheduler
Feature slug: `pub-sub-target-message-attributes-in-cloud-scheduler-console`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Scheduler Console supports configuring message attributes for Pub/Sub targets.

## Lifecycle

- Latest feature date: 2021-04-22
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
- [https://docs.cloud.google.com/scheduler/docs/creating](https://docs.cloud.google.com/scheduler/docs/creating)
- [https://docs.cloud.google.com/scheduler/docs/start-and-stop-compute-engine-instances-on-a-schedule](https://docs.cloud.google.com/scheduler/docs/start-and-stop-compute-engine-instances-on-a-schedule)
- [https://docs.cloud.google.com/scheduler/docs/tut-gcf-pub-sub](https://docs.cloud.google.com/scheduler/docs/tut-gcf-pub-sub)
