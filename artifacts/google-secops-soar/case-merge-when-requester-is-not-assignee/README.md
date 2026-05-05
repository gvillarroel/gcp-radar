# Case merge when requester is not assignee

Product: Google SecOps SOAR
Feature slug: `case-merge-when-requester-is-not-assignee`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cases can now be merged even when the requester is not the assignee, both in the platform and through the MergeCases API endpoint.

## Lifecycle

- Latest feature date: 2024-09-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview), [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections), [https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation](https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management))
- allow (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview), [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections), [https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation](https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management))
- permission (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview), [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections), [https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation](https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview), [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections), [https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation](https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation), [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation](https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation)
