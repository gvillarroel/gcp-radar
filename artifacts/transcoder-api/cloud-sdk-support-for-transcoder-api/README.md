# Cloud SDK support for Transcoder API

Product: Transcoder API
Feature slug: `cloud-sdk-support-for-transcoder-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Cloud SDK added support for interacting with the Transcoder API.

## Lifecycle

- Latest feature date: 2020-11-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- credential
- encrypt
- identity
- key
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient)
- [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview)
- [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig)
- [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
