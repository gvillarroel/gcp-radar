# Quick commands for Google Chat apps

Product: Google Workspace add-ons
Feature slug: `quick-commands-for-google-chat-apps`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Google Chat apps can respond to quick commands selected from the message reply area; Users can invoke Google Chat apps directly from the message reply area without typing a slash command.

## Lifecycle

- Latest feature date: 2025-03-05
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

- [https://developers.google.com/workspace/add-ons/chat](https://developers.google.com/workspace/add-ons/chat)
- [https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script](https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script)
- [https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub](https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
