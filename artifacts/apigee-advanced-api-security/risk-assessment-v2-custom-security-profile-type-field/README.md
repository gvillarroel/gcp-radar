# Risk Assessment V2 custom security profile type field

Product: Apigee Advanced API Security
Feature slug: `risk-assessment-v2-custom-security-profile-type-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The API for creating and updating Risk Assessment v2 custom security profiles now accepts an optional risk_assessment_type field to indicate Apigee/Hybrid or API Hub multi-gateway scope.

## Lifecycle

- Latest feature date: 2025-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- policy
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway)
