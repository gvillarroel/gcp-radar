# Live Stream API

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T19:03:59.077Z`
Product status: `PASS`

## Summary

- Feature cards: 18
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 18 unknown

## Service Card

- Service card ID: `live-stream-api:service`
- Latest feature date: 2025-09-01
- Official source links: 18
- Security capabilities: 16

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| AI-generated captions | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient) |
| H.265 input and output support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream)<br>[source](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)<br>[source](https://docs.cloud.google.com/livestream/docs/how-to/create-channels) |
| Live stream encryption key updates | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient) |
| Remote endpoint distribution via SRT and RTMP | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)<br>[source](https://docs.cloud.google.com/livestream/docs/overview)<br>[source](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels) |
| Translated captions | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient) |
| UHD input and output support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)<br>[source](https://docs.cloud.google.com/livestream/docs/how-to/create-channels)<br>[source](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels) |
| Ultra-low-latency input preview | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)<br>[source](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient) |
| WebVTT subtitle generation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)<br>[source](https://docs.cloud.google.com/livestream/docs/how-to/configure-subtitles)<br>[source](https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels) |
| DVR sessions | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/create-and-manage-dvr-sessions)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient) |
| Static overlays | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/custom-constraints)<br>[source](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)<br>[source](https://docs.cloud.google.com/livestream/docs/how-to/create-and-manage-dvr-sessions) |
| VOD clip creation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-captions-and-translations)<br>[source](https://docs.cloud.google.com/livestream/docs/how-to/create-channel-clips)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient) |
| Slates | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient) |
| VPC Service Controls integration | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient) |
| Audio gain control | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/custom-constraints)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls) |
| Audio loudness normalization | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/configure-backup-stream)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-dash)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls) |
| Channel events | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/how-to/create-channel-events)<br>[source](https://docs.cloud.google.com/livestream/docs/how-to/create-channels)<br>[source](https://docs.cloud.google.com/livestream/docs/overview) |
| Content encryption | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/overview)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls)<br>[source](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient) |
| Timecode | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/livestream/docs/custom-constraints)<br>[source](https://docs.cloud.google.com/livestream/docs/overview)<br>[source](https://docs.cloud.google.com/livestream/docs/quickstarts/quickstart-hls) |
