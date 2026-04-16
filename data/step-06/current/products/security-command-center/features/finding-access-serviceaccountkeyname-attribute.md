---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.995Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Finding.access.serviceAccountKeyName attribute"
feature_slug: "finding-access-serviceaccountkeyname-attribute"
latest_feature_date: "2022-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage"
keywords:
  - "finding"
  - "access"
  - "serviceaccountkeyname"
  - "attribute"
  - "adds"
  - "context"
  - "about"
  - "account"
---

# Finding.access.serviceAccountKeyName attribute

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The attribute adds context about the service account key associated with a finding.

## Extended Definition

The attribute adds context about the service account key associated with a finding.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- August 22, 2022 Feature The following attributes were added to the Finding object of the Security Command Center API: Database provides information about access to a database that is related to a finding. serviceAccountKeyName , serviceAccountDelegationInfo , and principalSubject attributes were added to the existing access attribute.
- These new attributes provide additional context about the principals that are associated with a finding. uris , a new attribute within the indicator attribute, lists any malicious URIs that are associated with a finding.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- March 17, 2023 Feature The following attributes were added to the Finding object of the Security Command Center API. cloudDlpInspection cloudDlpDataProfile The cloudDlpInspection attribute provides details about the results of a Cloud Data Loss Prevention (Cloud DLP) inspection job .

### "Profile Amazon S3 data \_|\_ Sensitive Data Protection \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3)
- Source ID: `site-docs-reference-3`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using the exported data profiles and the exported sample findings, you can run queries to get more information about the specific items that were flagged, the infoTypes they matched, their exact locations, their calculated sensitivity levels, and other details.
- Publish to Security Command Center Findings from data profiles provide context when you triage and develop response plans for your vulnerability and threat findings in Security Command Center .
- You opted to save sample discovery findings to BigQuery and you want to make sure that the service agent has write access to the BigQuery table where the sample findings will be saved.
- Select scope Do one of the following: To scan all S3 data that your AWS connector has access to, select Scan all AWS accounts available through your connector .

### "Profile Cloud Storage data in an organization or folder \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using the exported data profiles and the exported sample findings, you can run queries to get more information about the specific items that were flagged, the infoTypes they matched, their exact locations, their calculated sensitivity levels, and other details.
- Publish to Security Command Center Findings from data profiles provide context when you triage and develop response plans for your vulnerability and threat findings in Security Command Center .
- You opted to save sample discovery findings to BigQuery and you want to make sure that the service agent has write access to the BigQuery table where the sample findings will be saved.
- Publish to Google Security Operations Metrics gathered from data profiles can add context to your Google Security Operations findings.

