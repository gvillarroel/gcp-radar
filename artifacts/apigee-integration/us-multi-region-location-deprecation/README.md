# US multi-region location deprecation

Product: Apigee Integration
Feature slug: `us-multi-region-location-deprecation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deprecates the Apigee Integration US multi-region (us) location and directs new deployments to supported single regions; deprecated on 2022-11-10.

## Lifecycle

- Latest feature date: 2022-11-04
- Deprecation date: 2022-11-10
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- armor (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- auth (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- authorization (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- certificate (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- credential (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- encrypt (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- iam (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- key (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- policy (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- private (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- secret (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))
- token (evidence: [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies), [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest)
- [https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles](https://docs.cloud.google.com/application-integration/docs/configure-authentication-profiles)
