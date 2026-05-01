# Link previews in Google Sheets and Slides

Product: Google Workspace add-ons
Feature slug: `link-previews-in-google-sheets-and-slides`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Lets Google Workspace Add-ons show link previews in Google Sheets and Slides; Lets Google Workspace Add-ons show link previews in Google Sheets and Slides.

## Lifecycle

- Latest feature date: 2024-01-18
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

- [https://developers.google.com/workspace/add-ons/guides/alternate-runtimes](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes)
- [https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips](https://developers.google.com/workspace/add-ons/guides/preview-links-smart-chips)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
