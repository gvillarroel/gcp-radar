# VPC Service Controls integration

Product: Live Stream API
Feature slug: `vpc-service-controls-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Allows securing live streams with VPC Service Controls.

## Lifecycle

- Latest feature date: 2023-06-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- encrypt
- key
- token

## Official Evidence

- [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream)
- [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
