# Google Cloud Pub/Sub integration for Google Chat add-ons

Product: Google Workspace add-ons
Feature slug: `google-cloud-pub-sub-integration-for-google-chat-add-ons`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Google Chat add-ons can receive and respond to Chat events using Pub/Sub.

## Lifecycle

- Latest feature date: 2026-03-12
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

- [https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub](https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub)
- [https://developers.google.com/workspace/add-ons/editors/forms/quickstart/forms-notifications](https://developers.google.com/workspace/add-ons/editors/forms/quickstart/forms-notifications)
- [https://developers.google.com/workspace/add-ons/guides/editor-style](https://developers.google.com/workspace/add-ons/guides/editor-style)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
