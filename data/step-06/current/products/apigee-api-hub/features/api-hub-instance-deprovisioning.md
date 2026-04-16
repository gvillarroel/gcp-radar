---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.537Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API hub instance deprovisioning"
feature_slug: "api-hub-instance-deprovisioning"
latest_feature_date: "2025-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/deprovision"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "deprovisioning"
  - "deprovision"
  - "settings"
  - "ability"
  - "actions"
  - "instance"
  - "adds"
---

# API hub instance deprovisioning

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds the ability to deprovision an API hub instance from the API hub Settings Actions page in the Google Cloud console; Customers can now delete an API hub instance in a Google Cloud project through the ApiHubInstance API.

## Extended Definition

Adds the ability to deprovision an API hub instance from the API hub Settings Actions page in the Google Cloud console; Customers can now delete an API hub instance in a Google Cloud project through the ApiHubInstance API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### Deprovision Apigee API hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/deprovision](https://docs.cloud.google.com/apigee/docs/apihub/deprovision)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deprovisioning an API hub instance removes all associated resources, including APIs, versions, deployments, and any Apigee organizations (with no Apigee instances ) from your project.
- Deprovision an API hub instance To deprovision an API hub instance, do the following: Warnings: Deprovisioning an API hub instance deletes all the data associated with the instance.
- Note: Deprovisioning an API hub instance doesn't impact or delete any existing Apigee data, such as API proxies or proxy deployments.
- If you are using API hub with Apigee, then you must delete all the Apigee instances before you can deprovision API hub.

### Provision API hub in the Cloud console \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- Source ID: `site-docs-root-required-3`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- This is because deprovisioning moves the associated Apigee organization (if any) to a soft-delete state for 7 days , and API hub can only be reprovisioned after the Apigee org is permanently deleted.
- This is because deprovisioning moves the associated Apigee organization (if any) to a soft-delete state for 7 days , API hub can only be reprovisioned after the Apigee org is permanently deleted.
- Considerations If you have recently deprovisioned API hub, you must wait 7 days before provisioning a new instance in the same Google Cloud project.
- Caution: If you have recently deprovisioned API hub, you must wait 7 days before provisioning a new instance in the same Google Cloud project.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- To edit the curation settings of the existing Apigee and hybrid plugin instance, do the following: In the Google Cloud console, go to the API hub page.
- Find the Apigee X and Hybrid plugin instance, click more vert (Plugin instance actions) and then select See details .
- Objectives In this tutorial, you will complete the following steps: Step 1: Create an integration for custom curation Step 2: Set up custom curation in API hub Step 3: Edit existing plugin instance Step 4: Verify enriched API data Costs In this document, you use the following billable components of Google Cloud: Application Integration Integration Connectors Cloud Storage Secret Manager To generate a cost estimate based on your projected usage, use the pricing calculator .
- The following table provides details about each element to help you understand how the curation logic works: Component Configuration Description API trigger API Trigger ID: api trigger/test-custom-curation API 1 Receives data from the API hub plugin instance to invoke the integration for custom curation.

