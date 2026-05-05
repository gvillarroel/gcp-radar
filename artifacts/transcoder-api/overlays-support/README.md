# Overlays support

Product: Transcoder API
Feature slug: `overlays-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Transcoder API now supports overlays in transcoded outputs.

## Lifecycle

- Latest feature date: 2020-11-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- allow (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- auth (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- authorization (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- encrypt (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- iam (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- identity (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- key (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- permission (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- role (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))
- token (evidence: [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video))

## Official Evidence

- [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview)
- [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates)
- [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs)
- [https://docs.cloud.google.com/transcoder/docs/transcode-video](https://docs.cloud.google.com/transcoder/docs/transcode-video)
