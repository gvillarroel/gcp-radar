---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.190Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Quota increase requests"
feature_slug: "quota-increase-requests"
latest_feature_date: "2023-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/about-private-services-access"
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
keywords:
  - "submitting"
  - "increased"
  - "requests"
  - "quotas"
  - "increase"
  - "quota"
---

# Quota increase requests

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB quotas can be increased by submitting a request through the Quotas page.

## Extended Definition

AlloyDB quotas can be increased by submitting a request through the Quotas page.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)

## Supporting Pages

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Embedding model token limit : Unlike other embedding models which were primarily limited by RPM quotas, the Gemini Embedding model series is limited to 5,000,000 tokens per minute per project.
- Requests per minute : The relevant quota is Regional online prediction requests per base model per minute per region per base model .
- AlloyDB might dynamically reduce this size based on model limits or quotas, but your hint helps influence the query execution plan.
- Confirm that the embedding model that you use has sufficient quota for auto vector embeddings.

### "Private services access overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- If the VPC network already has an existing private services access configuration, then make sure the configuration has sufficient IP address space for AlloyDB and increase the address space if necessary.
- Make sure the VPC network's private services access configuration has sufficient IP address space for AlloyDB and increase the address space if necessary.
- For more information about increasing the IP address space, see Increase the IP address space available to AlloyDB within your project.
- You must increase the IP address space to resolve the address shortage before retrying to create the cluster or instance.

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the Cloud Trace data retention policy, see Quotas and limits .
- Storing data for primary instances consumes about 180 GB and might increase based on the number of read pool nodes present in the cluster.

