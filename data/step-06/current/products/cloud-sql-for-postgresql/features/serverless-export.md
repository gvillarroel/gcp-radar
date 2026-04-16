---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.820Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Serverless export"
feature_slug: "serverless-export"
latest_feature_date: "2020-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/postgres/best-practices"
  - "https://docs.cloud.google.com/sql/docs/postgres/pricing"
keywords:
  - "serverless"
  - "performing"
  - "temporary"
  - "exports"
  - "export"
  - "instance"
  - "supports"
---

# Serverless export

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports serverless export by performing exports from a temporary instance to reduce load on the primary instance.

## Extended Definition

Cloud SQL supports serverless export by performing exports from a temporary instance to reduce load on the primary instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)

## Supporting Pages

### "Export and import using CSV files \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export your database: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID bucket name : The Cloud Storage bucket name path to csv file : The path to the CSV file database name : The name of a database inside the Cloud SQL instance offload : Enables serverless export.
- Export your database: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID bucket name : The Cloud Storage bucket name path to csv file : The path to the CSV file database name : The name of a database inside the Cloud SQL instance offload : Enables serverless export.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /export" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } You must specify exactly one database with the databases property, and if the select query specifies a database, it must be the same.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /export" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } You must specify exactly one database with the databases property, and if the select query specifies a database, it must be the same.

### "General best practices \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Serverless exports offload the export operation to a temporary instance, allowing the primary instance to continue to serve queries and perform operations at its usual performance.
- When the data export is complete, the temporary instance is automatically deleted.
- Data import and export Best practice More information Use serverless exports.
- Exports are unaffected if you delete the instance.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Item Price (USD) Serverless export pricing $0.01 / 1 gibibyte Note: The price per GiB is calculated based on the disk size of the offload instance, which is the same as the disk size of the primary instance.
- If you perform frequent exports of a subset of your Cloud SQL instance (for example, by using the database, table, or query parameter), then it's more cost effective for you to create a read replica for your primary instance and perform your exports from that instance.
- Serverless export pricing Serverless export prices depend on the region where the instance is located.
- You avoid impacting your database with your exports, and lower your costs because you're paying for the read replica only, and not for each export.

