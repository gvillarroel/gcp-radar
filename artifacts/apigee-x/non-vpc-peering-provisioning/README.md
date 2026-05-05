# Non-VPC peering provisioning

Product: Apigee X
Feature slug: `non-vpc-peering-provisioning`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Non-VPC peering provisioning lets Apigee organizations be provisioned without supplying networks and IP ranges by using Private Service Connect for traffic routing; Apigee can be provisioned without VPC peering by using Private Service Connect for northbound and southbound routing.

## Lifecycle

- Latest feature date: 2024-08-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- constraint (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision)
