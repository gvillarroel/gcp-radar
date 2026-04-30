# latest_long model adaptation

Product: Speech-to-Text
Feature slug: `latest-long-model-adaptation`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Model adaptation is now available for the Speech-to-Text latest_long model in 13 languages.

## Lifecycle

- Latest feature date: 2024-01-09
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
- [https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationAsyncClient](https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationClient](https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationClient)
- [https://docs.cloud.google.com/speech-to-text/docs/adaptation-model](https://docs.cloud.google.com/speech-to-text/docs/adaptation-model)
