---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.590Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB outbound connectivity for Private Service Connect clusters"
feature_slug: "alloydb-outbound-connectivity-for-private-service-connect-clusters"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/about-private-service-connect"
keywords:
  - "migration over PSC"
  - "PSC egress"
  - "PSC-enabled clusters"
  - "outbound PSC"
  - "secure outbound operations"
  - "outbound connectivity"
  - "FDW outbound access"
  - "egress support"
---

# AlloyDB outbound connectivity for Private Service Connect clusters

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB now has generally available outbound connectivity for Private Service Connect-enabled clusters to support secure outbound operations such as migrations and FDW.

## Extended Definition

For AlloyDB, outbound connectivity for Private Service Connect is the capability to allow an AlloyDB instance to initiate connections to resources in a consumer project via a Private Service Connect network attachment. The docs state that to enable this, you must create a network attachment in the consumer project’s VPC, and that these consumer networks create and manage the PSC network attachments. Evidence also notes a limitation: outbound connectivity cannot be enabled on AlloyDB instances created before March 1, 2025.

## Evidence Summary

The referenced AlloyDB Private Service Connect overview page provides the enabling mechanism (consumer-managed PSC network attachments) and a key availability constraint tied to instance creation date for outbound connectivity.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)

## Supporting Pages

### "Private Service Connect overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly explains outbound PSC connectivity in AlloyDB, including secure outbound operations such as migration and foreign data wrappers.

Evidence snippets:
- To enable outbound connectivity from an AlloyDB instance to your consumer project, you need to create a network attachment within that VPC and project.
- Network attachment Note: You can't enable outbound connectivity on AlloyDB instances created prior to March 01, 2025.
- For outbound connectivity, consumer networks create and manage Private Service Connect network attachments.
- For more information about alternative approaches, see Update an instance for outbound connectivity .

