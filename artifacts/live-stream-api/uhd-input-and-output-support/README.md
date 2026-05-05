# UHD input and output support

Product: Live Stream API
Feature slug: `uhd-input-and-output-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Supports UHD (4K) inputs and outputs for live streams.

## Lifecycle

- Latest feature date: 2025-09-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations), [https://docs.cloud.google.com/livestream/docs/how-to/create-channels](https://docs.cloud.google.com/livestream/docs/how-to/create-channels), [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager))
- auth (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations), [https://docs.cloud.google.com/livestream/docs/how-to/create-channels](https://docs.cloud.google.com/livestream/docs/how-to/create-channels), [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager))
- authorization (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations), [https://docs.cloud.google.com/livestream/docs/how-to/create-channels](https://docs.cloud.google.com/livestream/docs/how-to/create-channels), [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager))
- encrypt (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations), [https://docs.cloud.google.com/livestream/docs/how-to/create-channels](https://docs.cloud.google.com/livestream/docs/how-to/create-channels), [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager))
- iam (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations), [https://docs.cloud.google.com/livestream/docs/how-to/create-channels](https://docs.cloud.google.com/livestream/docs/how-to/create-channels), [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager))
- key (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations), [https://docs.cloud.google.com/livestream/docs/how-to/create-channels](https://docs.cloud.google.com/livestream/docs/how-to/create-channels), [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager))
- token (evidence: [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels), [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations), [https://docs.cloud.google.com/livestream/docs/how-to/create-channels](https://docs.cloud.google.com/livestream/docs/how-to/create-channels), [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager))

## Official Evidence

- [https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)
- [https://docs.cloud.google.com/livestream/docs/how-to/create-channels](https://docs.cloud.google.com/livestream/docs/how-to/create-channels)
- [https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListInputsAsyncPager)
