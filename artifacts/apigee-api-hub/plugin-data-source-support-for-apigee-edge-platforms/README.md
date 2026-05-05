# Plugin data source support for Apigee Edge platforms

Product: Apigee API hub
Feature slug: `plugin-data-source-support-for-apigee-edge-platforms`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds dedicated plugin sources in API hub for Apigee Edge Public Cloud and Apigee Edge Private Cloud (OPDK).

## Lifecycle

- Latest feature date: 2025-07-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro), [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
