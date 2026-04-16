---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.270Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TransUnion support for entity resolution"
feature_slug: "transunion-support-for-entity-resolution"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/authentication"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "transunion"
  - "entity"
  - "resolution"
  - "bigquery"
  - "now"
  - "supports"
  - "provider"
---

# TransUnion support for entity resolution

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery entity resolution now supports TransUnion as a data provider.

## Extended Definition

BigQuery entity resolution now supports TransUnion as a data provider.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/authentication](https://docs.cloud.google.com/bigquery/docs/authentication)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Authenticate to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authentication](https://docs.cloud.google.com/bigquery/docs/authentication)
- Source ID: `site-docs-reference-required-15`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After installation, initialize the Google Cloud CLI by running the following command: gcloud init If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .
- After installation, initialize the Google Cloud CLI by running the following command: gcloud init If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .
- On-premises or on a different cloud provider The preferred method to set up authentication from outside of Google Cloud is to use workload identity federation.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery data source for Grafana Community Spotlight: BigQuery Plugin Connect Grafana to BigQuery using Workload Identity Federation Partner Advantage page Direct link LogicLoop Solution LogicLoop Category Data Quality, Observability, & FinOps Description LogicLoop empowers operations teams to set up alerts and automations on top of company data without needing engineers.
- Partner references Luria BigQuery Integration Luria receives Cloud Ready designation Partner Advantage page Direct link Qlik Solution Qlik Sense Category BI, ML, & Advanced Analytics Description Qlik Sense is a business intelligence (BI) and visual analytics platform that supports a range of analytic use cases.
- It supports direct connection mode besides the import mode while connecting to Google BigQuery.
- SAS Viya supports connectivity with BigQuery natively as well as through Simba.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- STREAMING TIMELINE BY PROJECT WHERE start timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP , INTERVAL 1 DAY ) GROUP BY start timestamp , error code ORDER BY 1 DESC Resolution To resolve this quota error, do the following: If you are using the insertId field for deduplication, and your project is in a region that supports the higher streaming quota, we recommend removing the insertId field.
- To see all copy jobs in all regions, you can use the following filter in Cloud Logging: resource.type="bigquery resource" protoPayload.methodName="jobservice.insert" protoPayload.serviceData.jobInsertRequest.resource.jobConfiguration.tableCopy: Resolution If the goal of the frequent copy operations is to create a snapshot of data, consider using table snapshots instead.
- Error message Your project exceeded quota for free query bytes scanned Resolution To continue using BigQuery, you need to upgrade the account to a paid Cloud Billing account .
- Identify API calls Go to the Google Cloud navigation menu menu, and then select Logging > Logs Explorer : Go to the Logs Explorer Filter logs to view table operations by running the following query: resource.type="bigquery dataset" protoPayload.resourceName="projects/my-project-id/datasets/my dataset/tables/my table" (protoPayload.methodName="google.cloud.bigquery.v2.TableService.PatchTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.UpdateTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.InsertTable") Identify jobs The following query returns a list of jobs that modify the affected table in the project within the past day.

