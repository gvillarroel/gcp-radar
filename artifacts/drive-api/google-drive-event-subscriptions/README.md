# Google Drive event subscriptions

Product: Drive API
Feature slug: `google-drive-event-subscriptions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Google Drive events can now be subscribed to for file movement, edits, trash changes, and access proposal activity.

## Lifecycle

- Latest feature date: 2025-07-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- auth (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- authorization (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- confidential (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- credential (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- key (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- permission (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- policy (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- role (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- secret (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))
- token (evidence: [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview), [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors), [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk), [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels))

## Official Evidence

- [https://developers.google.com/workspace/drive/api/guides/about-labels](https://developers.google.com/workspace/drive/api/guides/about-labels)
- [https://developers.google.com/workspace/drive/api/guides/about-sdk](https://developers.google.com/workspace/drive/api/guides/about-sdk)
- [https://developers.google.com/workspace/drive/api/guides/events-overview](https://developers.google.com/workspace/drive/api/guides/events-overview)
- [https://developers.google.com/workspace/drive/api/guides/handle-errors](https://developers.google.com/workspace/drive/api/guides/handle-errors)
