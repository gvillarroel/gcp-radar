# Audio loudness normalization

Product: Live Stream API
Feature slug: `audio-loudness-normalization`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The API can normalize audio loudness for live stream content.

## Lifecycle

- Latest feature date: 2023-02-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash), [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream))
- allow (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash), [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream))
- auth (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash), [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream))
- authorization (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash), [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream))
- constraint (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash), [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream))
- encrypt (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash), [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream))
- key (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash), [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream))
- secret (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash), [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream))
- token (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls), [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash), [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream))

## Official Evidence

- [https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream)
- [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash)
- [https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)
- [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels)
