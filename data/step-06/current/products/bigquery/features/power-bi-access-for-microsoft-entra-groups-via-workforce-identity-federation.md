---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.467Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Power BI access for Microsoft Entra groups via Workforce Identity Federation"
feature_slug: "power-bi-access-for-microsoft-entra-groups-via-workforce-identity-federation"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "power"
  - "bi"
  - "access"
  - "microsoft"
  - "entra"
  - "groups"
  - "via"
  - "workforce"
---

# Power BI access for Microsoft Entra groups via Workforce Identity Federation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Users in Microsoft Entra groups can access BigQuery data in Power BI through Workforce Identity Federation.

## Extended Definition

Users in Microsoft Entra groups can access BigQuery data in Power BI through Workforce Identity Federation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Consuming data from BigQuery Connecting to BigQuery through a BigQuery Dataset Partner Advantage page Direct link PowerBI Solution Power BI Desktop Category BI, ML, & Advanced Analytics Description Microsoft Power BI is a data analytics and sharing platform that works on-premises or on the cloud.
- Partner references Add BigQuery Users within CaliberMind CaliberMind Data Warehouse Access in BigQuery Calibrate Analytics Solution Calibrate Analytics Platform Category ETL & Data Integration Description Calibrate Analytics is a data analytics company that empowers businesses to take control of data.
- The Automated Data Governance Platform creates trust across security, legal, compliance, and business teams, empowering them to work together to ensure timely access to critical business data while protecting sensitive data and ensuring customer privacy.
- Rivery's approach to data pipelining and data management incorporates automation and actionable logic into traditional data ETL/ELT processes and empowers data engineers to develop a centralized data management system rapidly.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Delegate core data administration This design is different from a conventional data mart approach because decentralized authority delegates core data administration decisions to component subgroups of the organization.
- A decentralized data mart has the following different concerns compared to a standard data mart: Secure data collaboration : sharing data with technical controls to minimize inappropriate access across teams.
- In this scenario, you manage group membership as an administrative function and you give external accounts the viewer permission so that they can access the dataset through these groups.
- A core data project maintains a centralized data mart that is accessible from across the organization.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Syntax: '{ "differential privacy policy": { "privacy unit column": value, "max epsilon per query": value, "epsilon budget": value, "delta per query": value, "delta budget": value, "max groups contributed": value } }' Parameters: differential privacy policy : The differential privacy policy for the view. privacy unit column : The column that represents the privacy unit column for differentially private queries on the view. value is a JSON string. max epsilon per query : The maximum amount of epsilon that can be specified for a differentially private query on the view. value is a JSON number from 0.001 to 1e+15. epsilon budget : The amount of epsilon that can be used in totality for all differentially private queries on the view. value is JSON number from 0.001 to 1e+15. delta per query : The maximum amount of delta that can be specified for a differentially private query on the view. value is a JSON number from 1e-15 to 1. delta budget : The amount of delta that can be used in totality for all differentially private queries on the view.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Example The following example creates a Cloud resource connection named my cloud resource connection : CREATE CONNECTION IF NOT EXISTS us.my cloud resource connection OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = "My Resource Connection" , description = "Connection to access Cloud resources" ); ALTER SCHEMA SET DEFAULT COLLATE statement Sets collation specifications on a dataset.
- Syntax CREATE EXTERNAL SCHEMA [ IF NOT EXISTS ] dataset name [ WITH CONNECTION connection name ] [ OPTIONS ( external schema option list ) ] Arguments IF NOT EXISTS : If any dataset exists with the same name, the CREATE statement has no effect. dataset name : The name of the dataset to create. connection name : Specifies a connection resource that has credentials for accessing the external data.

