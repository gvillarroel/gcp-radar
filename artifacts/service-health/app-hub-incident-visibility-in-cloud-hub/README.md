# App Hub incident visibility in Cloud Hub

Product: Service Health
Feature slug: `app-hub-incident-visibility-in-cloud-hub`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Service Health now supports viewing incidents related to App Hub applications directly in Cloud Hub.

## Lifecycle

- Latest feature date: 2025-04-08
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
- [https://docs.cloud.google.com/service-health/docs/overview](https://docs.cloud.google.com/service-health/docs/overview)
- [https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1](https://docs.cloud.google.com/service-health/docs/reference/event-logs/rpc/google.cloud.servicehealth.logging.v1)
- [https://docs.cloud.google.com/service-health/docs/view-events](https://docs.cloud.google.com/service-health/docs/view-events)
