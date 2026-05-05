# Transcoder API

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T20:05:49.944Z`
Product status: `PASS`

## Summary

- Feature cards: 16
- Step 07 failed features: 0
- Step 07 warned features: 2
- Corpus health: healthy
- IAM mapping: 9 explicit, 0 derived, 7 unknown

## Service Card

- Service card ID: `transcoder-api:service`
- Latest feature date: 2021-07-13
- Official source links: 13
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Transcoder v1 API | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceClient)<br>[source](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig) |
| Transcoder v1beta1 API | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/transcoder/docs/apis)<br>[source](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig) |
| VPC Service Controls support | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)<br>[source](https://docs.cloud.google.com/transcoder/docs/apis) |
| Sprite sheet aspect ratio preservation | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Sprite sheet quality setting | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/transcoder/docs/concepts/overview) |
| Video black padding | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/transcoder/docs/concepts/overview)<br>[source](https://docs.cloud.google.com/transcoder/docs/how-to/jobs)<br>[source](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig) |
| AES-128 content protection | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/transcoder/docs/concepts/overview)<br>[source](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates)<br>[source](https://docs.cloud.google.com/transcoder/docs/how-to/jobs) |
| Cloud SDK support for Transcoder API | MEDIUM | WARN | unknown | [source](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient)<br>[source](https://docs.cloud.google.com/transcoder/docs/concepts/overview)<br>[source](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig) |
| Cropping support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient)<br>[source](https://docs.cloud.google.com/transcoder/docs/concepts/overview)<br>[source](https://docs.cloud.google.com/transcoder/docs/how-to/jobs) |
| FairPlay SAMPLE-AES content encryption | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/transcoder/docs/concepts/overview)<br>[source](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates) |
| Overlays support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/transcoder/docs/concepts/overview)<br>[source](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates)<br>[source](https://docs.cloud.google.com/transcoder/docs/how-to/jobs) |
| Shaka player DASH and HLS CEA608/CEA708 support | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/transcoder/docs/concepts/overview)<br>[source](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig) |
| Source aspect ratio preservation | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates)<br>[source](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig) |
| Transcoder API client libraries release | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/transcoder/latest)<br>[source](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceClient) |
| Widevine/PlayReady DASH MPEG-CENC encryption | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/transcoder/docs/concepts/overview) |
| Widevine/PlayReady HLS MPEG-CENC encryption | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/transcoder/docs/concepts/overview) |
