# Environment-level scaling for Apigee hybrid components

Product: Apigee hybrid
Feature slug: `environment-level-scaling-for-apigee-hybrid-components`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee hybrid added environment-specific scaling controls in overrides.yaml, including replica count settings for Runtime, Synchronizer, and UDCA per environment.

## Lifecycle

- Latest feature date: 2023-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale](https://docs.cloud.google.com/apigee/docs/hybrid/latest/scale-and-autoscale)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/customize-services)
