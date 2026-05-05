# Apigee proxy deployment attributes in API hub imports

Product: Apigee API hub
Feature slug: `apigee-proxy-deployment-attributes-in-api-hub-imports`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deprecates adding Apigee X and Hybrid environment/organization attributes to new Apigee proxy deployments imported by runtime project attachment; deprecated on 2025-07-31.

## Lifecycle

- Latest feature date: 2025-07-31
- Deprecation date: 2025-07-31
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- armor (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- audit (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- firewall (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes), [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro](https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
