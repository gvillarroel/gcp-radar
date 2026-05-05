# AES-128 content protection

Product: Transcoder API
Feature slug: `aes-128-content-protection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Added support in Transcoder API for AES-128 content protection for HLS and DASH outputs in fMP4 and TS containers.

## Lifecycle

- Latest feature date: 2020-11-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- allow (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- auth (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- authorization (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- encrypt (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- iam (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- identity (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- key (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- permission (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- role (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- secret (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))
- token (evidence: [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig), [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates), [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs), [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview))

## Official Evidence

- [https://docs.cloud.google.com/transcoder/docs/concepts/overview](https://docs.cloud.google.com/transcoder/docs/concepts/overview)
- [https://docs.cloud.google.com/transcoder/docs/how-to/job-templates](https://docs.cloud.google.com/transcoder/docs/how-to/job-templates)
- [https://docs.cloud.google.com/transcoder/docs/how-to/jobs](https://docs.cloud.google.com/transcoder/docs/how-to/jobs)
- [https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig](https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig)
