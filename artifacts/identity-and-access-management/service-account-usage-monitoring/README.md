# Service account usage monitoring

Product: Identity and Access Management
Feature slug: `service-account-usage-monitoring`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Monitoring can now show when service accounts and service account keys were used.

## Lifecycle

- Latest feature date: 2020-08-14
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
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- key (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- private (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- role (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- security (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))
- token (evidence: [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts), [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/attach-service-accounts](https://docs.cloud.google.com/iam/docs/attach-service-accounts)
- [https://docs.cloud.google.com/iam/docs/best-practices-service-accounts](https://docs.cloud.google.com/iam/docs/best-practices-service-accounts)
- [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log)
- [https://docs.cloud.google.com/iam/docs/service-accounts-create](https://docs.cloud.google.com/iam/docs/service-accounts-create)
