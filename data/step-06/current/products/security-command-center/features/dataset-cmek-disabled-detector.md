---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.133Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "DATASET_CMEK_DISABLED detector"
feature_slug: "dataset-cmek-disabled-detector"
latest_feature_date: "2021-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
keywords:
  - "dataset"
  - "cmek"
  - "disabled"
  - "detector"
  - "identifies"
  - "bigquery"
  - "datasets"
  - "not"
---

# DATASET_CMEK_DISABLED detector

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

This detector identifies BigQuery datasets that are not encrypted with customer-managed encryption keys.

## Extended Definition

This detector identifies BigQuery datasets that are not encrypted with customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)

## Supporting Pages

### "Publish data profiles to Security Command Center \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc](https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc)
- Source ID: `site-docs-reference-3`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported assets : aiplatform. googleapis. com/ Dataset bigquery. googleapis. com/ Dataset bigquery. googleapis. com/ Table sqladmin. googleapis. com/ Instance storage. googleapis. com/ Bucket Amazon S3 bucket Azure Blob Storage container Remediation : For BigQuery data, use CMEK on the table or dataset .
- TABLE ID " Replace the following: PROJECT ID : the ID of the project that contains the BigQuery table DATASET ID : the dataset ID of the table TABLE ID : the ID of the table List all Data sensitivity and Data risk findings for a particular Cloud SQL instance This query is useful, for example, if Security Command Center detects an event where live Cloud SQL instance data was exported to a Cloud Storage bucket outside of the organization.
- Supported assets : aiplatform. googleapis. com/ Dataset aiplatform. googleapis. com/ TuningJob bigquery. googleapis. com/ Dataset bigquery. googleapis. com/ Table sqladmin. googleapis. com/ Instance storage. googleapis. com/ Bucket Amazon S3 bucket Azure Blob Storage container Remediation : For Google Cloud data, use Sensitive Data Protection to run a deep inspection scan of the specified resource to identify all affected resources.
- Supported assets : aiplatform. googleapis. com/ Dataset aiplatform. googleapis. com/ TuningJob bigquery. googleapis. com/ Dataset bigquery. googleapis. com/ Table sqladmin. googleapis. com/ Instance storage. googleapis. com/ Bucket Amazon S3 bucket Azure Blob Storage container Remediation : For Google Cloud data, remove allUsers and allAuthenticatedUsers from the data asset's IAM policy.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- The detector, available to Security Command Center Premium customers, detects BigQuery datasets that are not encrypted using customer-managed encryption keys (CMEK).
- The following detectors have been added: BIGQUERY TABLE CMEK DISABLED CONFIDENTIAL COMPUTING DISABLED DNS LOGGING DISABLED SQL EXTERNAL SCRIPTS ENABLED SQL LOG DURATION DISABLED SQL LOG ERROR VERBOSITY SQL LOG EXECUTOR STATS ENABLED SQL LOG HOSTNAME ENABLED SQL LOG MIN ERROR STATEMENT SEVERITY SQL LOG MIN MESSAGES SQL LOG PARSER STATS ENABLED SQL LOG PLANNER STATS ENABLED SQL LOG STATEMENT SQL LOG STATEMENT STATS ENABLED SQL REMOTE ACCESS ENABLED SQL SKIP SHOW DATABASE DISABLED SQL TRACE FLAG 3625 SQL USER CONNECTIONS CONFIGURED SQL USER OPTIONS CONFIGURED For more information, see Detectors and compliance .
- July 19, 2021 Feature Security Health Analytics , a built-in service of Security Command Center, has launched a new detector, DATASET CMEK DISABLED , in general availability.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The following Security Health Analytics detectors for Google Cloud are disabled by default: ALLOYDB AUTO BACKUP DISABLED ALLOYDB CMEK DISABLED BIGQUERY TABLE CMEK DISABLED BUCKET CMEK DISABLED CLOUD ASSET API DISABLED DATAPROC CMEK DISABLED DATASET CMEK DISABLED DISK CMEK DISABLED DISK CSEK DISABLED NODEPOOL BOOT CMEK DISABLED PUBSUB CMEK DISABLED SQL CMEK DISABLED SQL NO ROOT PASSWORD SQL WEAK ROOT PASSWORD VPC FLOW LOGS SETTINGS NOT RECOMMENDED Note: If you disable Security Health Analytics, Security Command Center also disables the individual Security Health Analytics modules and stores their previous enablement states.
- To enable the DISK CSEK DISABLED detector for specific assets, apply the security mark enforce customer supplied disk encryption keys to the asset with a value of true .
- Special-case detector: Customer Supplied Encryption Keys The DISK CSEK DISABLED detector isn't on by default.
- When a detector is disabled, existing findings are automatically marked as inactive.

