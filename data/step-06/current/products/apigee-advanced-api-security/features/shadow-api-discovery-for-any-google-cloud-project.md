---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.412Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Shadow API Discovery for any Google Cloud project"
feature_slug: "shadow-api-discovery-for-any-google-cloud-project"
latest_feature_date: "2025-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview"
  - "https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies"
keywords:
  - "centralized"
  - "project"
  - "configured"
  - "discovery"
  - "shadow"
---

# Shadow API Discovery for any Google Cloud project

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Shadow API Discovery can now be configured and run in any Google Cloud project, with centralized viewing and comparison of discovered APIs against API Hub catalogs.

## Extended Definition

Shadow API Discovery can now be configured and run in any Google Cloud project, with centralized viewing and comparison of discovered APIs against API Hub catalogs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)

## Supporting Pages

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable Shadow API Discovery Shadow API Discovery is part of the Advanced API Security add-on and is available for Google Cloud projects with or without Apigee provisioning.
- If your Google Cloud project is not provisioned for Apigee, you can add Shadow API Discovery to your project by contacting Apigee Sales .
- If you enable Shadow API Discovery on a project with multiple networks, you might see unexpected behavior.
- Warning: Shadow API Discovery supports load balancers on one network per project.

### API observations in API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Evolving from the Shadow API Discovery feature in Apigee, API observations in API hub uses automated discovery processes to find and catalog all your APIs—both known and unknown—into a single, unified, and managed view.
- While the feature itself doesn't have direct costs, the discovery and observation process can involve data processing from your existing Apigee runtime projects, which can incur charges or hit quota limits.
- However, since API observations in API hub leverages Shadow API discovery, which is part of the Apigee Advanced API Security add-on, you can incur charges related to your Apigee usage.
- Note: API observations in API hub relies on the Apigee Shadow API Discovery feature, which is included as part of the paid Apigee Advanced API Security add-on .

### "Auto-register APIs from Google Cloud projects \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Note: Auto-discovery of OAS happens irrespective of whether you attach an Apigee runtime project to API hub or if your Apigee runtime project is automatically attached to API hub as part of Apigee provisioning.
- For existing projects that have pull-based Apigee and hybrid plugins configured, these plugins will continue to function and will be automatically migrated to the push-based type starting August, 2025 .
- For existing projects that have Apigee instance type attributes configured, we recommend that you remove these attributes from any filtered search queries.
- Supported Google Cloud services Auto-registration is currently supported for the following Google Cloud services: Google Cloud service Ingested data Apigee and Apigee hybrid Deployed API proxies and their associated OpenAPI specifications API Gateway Gateway definitions and managed endpoints Project associations and plugins Deprecated: Pull-based ingestion is no longer supported for Apigee and Apigee hybrid plugins as of July 31, 2025 .

