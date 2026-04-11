---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.844Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Pay-as-you-go environment type updates in Cloud Console"
feature_slug: "pay-as-you-go-environment-type-updates-in-cloud-console"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure"
keywords:
  - "PAYG environment update"
  - "environment capability toggle"
  - "remove environment capabilities"
  - "environment capability edit"
  - "modify environment type"
  - "add environment capabilities"
  - "environment type"
  - "pay-as-you-go"
---

# Pay-as-you-go environment type updates in Cloud Console

Product: Apigee X
Coverage: LOW

## Step 02 Summary

Apigee Pay-as-you-go customers can now modify an existing environment type from the Google Cloud console to add or remove environment capabilities.

## Extended Definition

The feature appears intended to let Apigee Pay-as-you-go users change an existing environment type in Google Cloud Console, such as adding or removing environment capabilities. However, the supplied official excerpt only provides evidence about Pay-as-you-go billing scope and charging (environments, API calls, and proxy deployments) for paid organizations, and does not explicitly document this environment-type editing capability.

## Evidence Summary

The cited Apigee organization documentation confirms PAYG billing characteristics and charges but does not confirm console-driven environment type/capability update behavior.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)

## Supporting Pages

### Understanding organizations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: The page only defines organization types (including pay-as-you-go) and provides no details about updating environment types in the Cloud Console.

Evidence snippets:
- Go to Apigee Entitlements and billing Whether the paid organization uses a Subscription or Pay-as-you-go pricing model, the items that are metered for billing purposes are: environments, API calls, and proxy deployments.
- Just as there is no charge to create a Google Cloud project, under the Pay-as-you-go pricing model, there is no charge to create an Apigee organization.
- Under the Pay-as-you-go model, you pay only for the resources you use, but you do not enjoy volume discounts.
- Paid organizations include those created as part of a Subscription or a Pay-as-you-go Apigee pricing model.

