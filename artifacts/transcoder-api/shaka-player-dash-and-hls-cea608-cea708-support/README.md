# Shaka player DASH and HLS CEA608/CEA708 support

Product: Transcoder API
Feature slug: `shaka-player-dash-and-hls-cea608-cea708-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Added Shaka player compatibility for DASH and HLS streams using CEA-608/CEA-708 captioning.

## Lifecycle

- Latest feature date: 2020-11-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
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

- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview)
- [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig)
- [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video)
