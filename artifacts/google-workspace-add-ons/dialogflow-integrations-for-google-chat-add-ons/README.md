# Dialogflow integrations for Google Chat add-ons

Product: Google Workspace add-ons
Feature slug: `dialogflow-integrations-for-google-chat-add-ons`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Google Chat add-ons can use Dialogflow CX or Dialogflow ES to understand and respond to user queries in natural language; Developers can build Dialogflow CX or Dialogflow ES Chat apps as Google Workspace add-ons.

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

- [https://developers.google.com/workspace/add-ons/chat](https://developers.google.com/workspace/add-ons/chat)
- [https://developers.google.com/workspace/add-ons/chat/quickstart-dialogflow-cx](https://developers.google.com/workspace/add-ons/chat/quickstart-dialogflow-cx)
- [https://developers.google.com/workspace/add-ons/chat/quickstart-dialogflow-es](https://developers.google.com/workspace/add-ons/chat/quickstart-dialogflow-es)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
