# VPC Service Controls support for Cloud Scheduler jobs targeting Cloud Run

Product: Cloud Scheduler
Feature slug: `vpc-service-controls-support-for-cloud-scheduler-jobs-targeting-cloud-run`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Scheduler jobs that target Cloud Run can be secured with VPC Service Controls; Cloud Scheduler jobs that target Cloud Run can be secured with VPC Service Controls.

## Lifecycle

- Latest feature date: 2023-08-18
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
- [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)
- [https://docs.cloud.google.com/scheduler/docs/creating](https://docs.cloud.google.com/scheduler/docs/creating)
- [https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs)
