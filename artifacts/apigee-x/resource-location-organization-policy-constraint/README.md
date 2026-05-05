# Resource location organization policy constraint

Product: Apigee X
Feature slug: `resource-location-organization-policy-constraint`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee can restrict creation of location-based resources to specific regions by using an Organization Policy Service constraint.

## Lifecycle

- Latest feature date: 2023-12-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))
- armor (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))
- constraint (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/access-entity-policy)
- [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)
