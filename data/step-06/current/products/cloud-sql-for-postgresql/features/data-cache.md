---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.778Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Data cache"
feature_slug: "data-cache"
latest_feature_date: "2023-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/postgres/pricing"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "improves"
  - "performance"
  - "cache"
  - "enterprise"
  - "edition"
  - "plus"
---

# Data cache

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Data cache improves performance for Cloud SQL for PostgreSQL Enterprise Plus edition instances by caching data.

## Extended Definition

Data cache improves performance for Cloud SQL for PostgreSQL Enterprise Plus edition instances by caching data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/choose-edition](https://docs.cloud.google.com/sql/docs/postgres/choose-edition)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/choose-edition](https://docs.cloud.google.com/sql/docs/postgres/choose-edition)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions PostgreSQL 9.6, 10, 11, 12, 13, 14, 15, 16, 17, 18 PostgreSQL 12, 13, 14, 15, 16, 17, 18 Note: If the database version for your instance is PostgreSQL 16 or later, then the default Cloud SQL edition is Enterprise Plus.
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.
- For details about Cloud SQL editions and the enhancements offered by the Cloud SQL Enterprise Plus edition, see Cloud SQL editions overview .

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Enterprise Plus edition - Memory optimized N2 machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0537 / 1 hour $0.040275 / 1 hour $0.025776 / 1 hour Memory $0.0161 / 1 gibibyte hour $0.012075 / 1 gibibyte hour $0.007728 / 1 gibibyte hour HA vCPUs $0.1074 / 1 hour $0.08055 / 1 hour $0.051552 / 1 hour HA Memory $0.0322 / 1 gibibyte hour $0.02415 / 1 gibibyte hour $0.015456 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.
- Enterprise Plus edition - N2 machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0537 / 1 hour $0.040275 / 1 hour $0.025776 / 1 hour Memory $0.0091 / 1 gibibyte hour $0.006825 / 1 gibibyte hour $0.004368 / 1 gibibyte hour HA vCPUs $0.1074 / 1 hour $0.08055 / 1 hour $0.051552 / 1 hour HA Memory $0.0182 / 1 gibibyte hour $0.01365 / 1 gibibyte hour $0.008736 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.
- Enterprise Plus edition - N2 machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0537 / 1 hour $0.040275 / 1 hour $0.025776 / 1 hour Memory $0.0091 / 1 gibibyte hour $0.006825 / 1 gibibyte hour $0.004368 / 1 gibibyte hour HA vCPUs $0.1074 / 1 hour $0.08055 / 1 hour $0.051552 / 1 hour HA Memory $0.0182 / 1 gibibyte hour $0.01365 / 1 gibibyte hour $0.008736 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.
- Enterprise Plus edition - C4A machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.054 / 1 hour $0.0405 / 1 hour $0.02592 / 1 hour Memory $0.009 / 1 gibibyte hour $0.00675 / 1 gibibyte hour $0.00432 / 1 gibibyte hour HA vCPUs $0.108 / 1 hour $0.081 / 1 hour $0.05184 / 1 hour HA Memory $0.018 / 1 gibibyte hour $0.0135 / 1 gibibyte hour $0.00864 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Data cache Enable data cache By default, the option to enable data cache is selected automatically for Cloud SQL for PostgreSQL Enterprise Plus edition instances.
- Memory must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) For example, the following command creates a Cloud SQL Enterprise edition instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --cpu = 2 \ --memory = 7680MB \ --region = us-central1 The following command creates a Cloud SQL Enterprise Plus edition instance with four cores: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --tier = db-perf-optimized-N-4 \ --edition = ENTERPRISE PLUS \ --region = us-central1 See Custom instance configuration for more information about how to size --cpu and --memory .
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID REGION : the region DATABASE VERSION : enum string of the database version (for example, POSTGRES 18 ) PASSWORD : the password for the root user MACHINE TYPE : enum string of the machine (tier) type, as: db-custom-[CPUS]-[MEMORY MBS] EDITION TYPE : your Cloud SQL edition Note : If the database version for your instance is PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise Plus edition.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID REGION : the region DATABASE VERSION : enum string of the database version (for example, POSTGRES 18 ) PASSWORD : the password for the root user MACHINE TYPE : enum string of the machine (tier) type, as: db-custom-[CPUS]-[MEMORY MBS] EDITION TYPE : your Cloud SQL edition Note : If the database version for your instance is PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise Plus edition.

