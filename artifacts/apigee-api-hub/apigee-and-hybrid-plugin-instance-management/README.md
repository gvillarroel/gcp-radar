# Apigee and hybrid plugin instance management

Product: Apigee API hub
Feature slug: `apigee-and-hybrid-plugin-instance-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds create and delete operations for Apigee and Apigee Hybrid plugin instances linked to corresponding runtime projects.

## Lifecycle

- Latest feature date: 2025-07-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))
- audit (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins), [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data), [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
