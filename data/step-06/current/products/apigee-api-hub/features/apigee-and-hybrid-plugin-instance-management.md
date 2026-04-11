---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:36.634Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Apigee and hybrid plugin instance management"
feature_slug: "apigee-and-hybrid-plugin-instance-management"
latest_feature_date: "2025-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "runtime project linked"
  - "instance create/delete"
  - "delete plugin instance"
  - "plugin instance management"
  - "hybrid plugin instance"
  - "create plugin instance"
  - "Apigee plugin instance"
  - "plugin instance API"
---

# Apigee and hybrid plugin instance management

Product: Apigee API hub
Coverage: LOW

## Step 02 Summary

Adds create and delete operations for Apigee and Apigee Hybrid plugin instances linked to corresponding runtime projects.

## Extended Definition

Apigee API hub plugin instance management refers to interacting with Apigee and Apigee Hybrid plugin instances within the API hub console, including locating existing instances and editing their curation settings. The documentation indicates these plugin instances are created by default when API hub is provisioned, and users can open plugin instance details from the console. Evidence for explicit create/delete operations is not shown in the provided excerpts, so that part cannot be confirmed from this source alone.

## Evidence Summary

The cited tutorial provides limited coverage of Apigee/Hybrid plugin instances by confirming default instance creation at provisioning and showing UI-based access to and editing of existing plugin instances.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: The tutorial explains creating and editing a plugin instance in API hub, which is relevant to plugin management, but does not specifically focus on Apigee/hybrid-specific create/delete operations.

Evidence snippets:
- To edit the curation settings of the existing Apigee and hybrid plugin instance, do the following: In the Google Cloud console, go to the API hub page.
- Step 3: Edit existing plugin instance API hub creates a default plugin instance for Apigee and Apigee hybrid upon provisioning.
- Find the Apigee X and Hybrid plugin instance, click more vert (Plugin instance actions) and then select See details .

