---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.559Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Multiple API rate quota categories"
feature_slug: "multiple-api-rate-quota-categories"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/quotas"
  - "https://docs.cloud.google.com/mcp/quotas"
  - "https://docs.cloud.google.com/sql/docs/error-messages"
keywords:
  - "multiple"
  - "rate"
  - "quota"
  - "categories"
  - "sql"
  - "supports"
  - "quotas"
  - "enforced"
---

# Multiple API rate quota categories

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Extended Definition

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)
- [https://docs.cloud.google.com/mcp/quotas](https://docs.cloud.google.com/mcp/quotas)
- [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)

## Supporting Pages

### Quotas and limits \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rate quotas Cloud SQL supports rate quotas, which are also known as rate limits or API quotas.
- When you use the gcloud CLI or the Google Cloud console, you're making requests to the Cloud SQL Admin API and these requests count toward your rate quotas.
- Rate quotas reset after a time interval that's specific to Cloud SQL (for example, the number of API requests per minute).
- There are multiple quotas on each kind of forwarding rules, per project, per network and per peering group .

### "Quotas and system limits \_|\_ Google Cloud MCP servers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/mcp/quotas](https://docs.cloud.google.com/mcp/quotas)
- Source ID: `site-docs-reference-required-3`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.
- To skip lines that don't list metric names, pass the output to a command such as grep with metric: as the search term, or use the gcloud CLI --format flag: gcloud beta quotas info list --project= PROJECT ID OR NUMBER \ --service= SERVICE NAME --format="value(metric)" Replace the following: PROJECT ID OR NUMBER : the project ID or project number.
- Console In the Google Cloud console, go to the IAM & Admin > Quotas & System Limits page: Go to Quotas & System Limits The table on this page displays quotas and system limits that have usage or have adjusted values, and a reference entry for other quotas.
- To filter the results, enter a property name or value in the field next to filter list Filter . gcloud To get the metric names for a Google Cloud service by using the gcloud CLI, run the quotas info list command.

### Cloud SQL error messages \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can request an increase to your quotas from the Google Cloud console or edit the instance to upgrade it to a larger disk size.
- Request an increase to your quotas from the Google Cloud console .
- Review the quotas and limits for Cloud SQL.
- The failover won't occur because it isn't needed.</td> </tr> <tr> <td>Import</td> <td>The import file may contain statements which require the superuser role.</td> <td>Edit the file to remove any statements which require the superuser role.</td> </tr> Cloud SQL also uses some third-party binaries (for example, mysqld ), which can generate unknown error messages.

