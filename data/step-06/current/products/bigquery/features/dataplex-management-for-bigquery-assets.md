---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.392Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dataplex management for BigQuery assets"
feature_slug: "dataplex-management-for-bigquery-assets"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/code-asset-folders"
  - "https://docs.cloud.google.com/mcp/access-control"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "dataplex"
  - "management"
  - "bigquery"
  - "assets"
  - "can"
  - "manage"
  - "canvases"
  - "preparations"
---

# Dataplex management for BigQuery assets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Dataplex can manage data canvases, data preparations, notebooks, saved queries, and workflows with automatic metadata availability.

## Extended Definition

Dataplex can manage data canvases, data preparations, notebooks, saved queries, and workflows with automatic metadata availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/code-asset-folders](https://docs.cloud.google.com/bigquery/docs/code-asset-folders)
- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### Organize code assets with folders \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/code-asset-folders](https://docs.cloud.google.com/bigquery/docs/code-asset-folders)
- Source ID: `site-docs-reference-5`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Create and manage folders Create notebooks Create saved queries Create data canvases Create data preparations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Folders offer Identity and Access Management (IAM) policy inheritance, which you can use to control access to code assets more efficiently.
- Organize code assets with folders You can access and organize your code assets by using folders in the Files pane of BigQuery Studio: A folder is the basic container for organizing code assets, similar to a standard file system folder.
- You can only use folders to organize single file code assets, such as notebooks, saved queries, data canvases, and data preparation files.

### "Access control with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- Source ID: `site-docs-reference-required-13`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use IAM Conditions in the following places: Allow policy role bindings, including role bindings managed by Privileged Access Manager entitlements Deny policy rules Policy bindings for principal access boundary policies For more information, see the Attribute reference for Identity and Access Management Conditions .
- Home Documentation Developer tools Google Cloud MCP servers Guides Send feedback Access control with Identity and Access Management Stay organized with collections Save and categorize content based on your preferences.
- To learn more about other management access tasks, such as revoking IAM roles or granting multiple IAM roles, see Manage access to projects, folders, and organizations in the IAM documentation.
- Google and Google Cloud remote MCP servers use Identity and Access Management (IAM) to control access to resources at different levels of your resource hierarchy.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- When you use decentralized authority, you maintain central control of security and BigQuery capacity by using Cloud Key Management Service (Cloud KMS) , column policies, VPC Service Controls, and reservations.
- This document is for organizations that deploy multi-tenant platforms on BigQuery and who want to understand the available access controls and performance management features .
- Cost management : Ensure consistent BigQuery costs to host each tenant.
- However, tenant data and applications that access tenant data are organized under tenant-specific projects (and optionally organized under tenant-dedicated folders) to simplify the billing and resource management.

