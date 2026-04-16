---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.919Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Custom quotas"
feature_slug: "custom-quotas"
latest_feature_date: "2015-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/custom-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "custom"
  - "quotas"
  - "let"
  - "bigquery"
  - "set"
  - "project"
  - "wide"
  - "billing"
---

# Custom quotas

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Custom quotas let BigQuery set project-wide billing alerts to help prevent runaway costs.

## Extended Definition

Custom quotas let BigQuery set project-wide billing alerts to help prevent runaway costs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/custom-quotas](https://docs.cloud.google.com/bigquery/docs/custom-quotas)
- [https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp](https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### Create custom query quotas \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/custom-quotas](https://docs.cloud.google.com/bigquery/docs/custom-quotas)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- To set or update a custom cost control, such as limiting the amount of BigQuery data that can be processed each day, do the following: In the Google Cloud console, open the IAM & Admin > Quotas & System Limits page: Go to Quotas & System Limits Use the Service filter in the Filter search box to filter for the BigQuery API.
- Returned error messages After you set a custom quota, BigQuery returns an error when you exceed it: If you exceed a project-level custom quota, BigQuery returns the usageQuotaExceeded error: Custom quota exceeded: Your usage exceeded the custom quota for QueryUsagePerDay, which is set by your administrator.
- Example Suppose you set the following custom quotas for a project with 10 users, one of which is a service account: Project level: 50 TB per day User level: 10 TB per day Project-level custom quotas limit the aggregate usage of all users in that project.
- For more information, see https://cloud.google.com/bigquery/cost-controls You can run your query from another project that has access to your datasets and that doesn't have a custom quota or hasn't yet exceeded it.

### Use the BigQuery MCP server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp](https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp)
- Source ID: `site-docs-reference-required-12`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If your project has a billing account and you want to use the BigQuery sandbox, then disable billing for your project .
- Required roles To get the permissions that you need to enable the BigQuery MCP server, ask your administrator to grant you the following IAM roles on the project where you want to enable the BigQuery MCP server: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) Run BigQuery jobs: BigQuery Job User ( roles/bigquery.jobUser ) Query BigQuery data: BigQuery Data Viewer ( roles/bigquery.dataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following API methods are called by the MCP server tools: Tool API method Quotas list dataset ids datasets.list Dataset quotas and limits list table ids tables.list Table quotas and limits get dataset info datasets.get Dataset quotas and limits get table info tables.get Table quotas and limits execute sql jobs.Query Query job quotas and limits For more information on BigQuery quotas, see Quotas and limits .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to enable the BigQuery MCP server: Make MCP tool calls: mcp.tools.call Run BigQuery jobs: bigquery.jobs.create Query BigQuery data: bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Error message Your project exceeded quota for free query bytes scanned Resolution To continue using BigQuery, you need to upgrade the account to a paid Cloud Billing account .
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $query = 'SELECT id, view count FROM bigquery-public-data.stackoverflow.posts questions'; // Construct a BigQuery client object. $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); // Set job configs $jobConfig = $bigQuery->query($query); $jobConfig->useQueryCache(false); $jobConfig->dryRun(true); // Extract query results $queryJob = $bigQuery->startJob($jobConfig); $info = $queryJob->info(); printf('This query will process %s bytes' .
- Billing is larger than the bytes processed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries If the billing amount is larger than the value you calculated by querying the INFORMATION SCHEMA.JOBS view, there might be certain conditions that caused this: Queries over row-level security tables Queries over tables with row-level security don't produce a value for total bytes billed in the INFORMATION SCHEMA.JOBS view, therefore, the billing calculated using total bytes billed from INFORMATION SCHEMA.JOBS view will be less than the billed value.

