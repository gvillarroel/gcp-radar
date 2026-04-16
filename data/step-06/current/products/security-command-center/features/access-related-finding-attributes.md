---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.027Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Access-related finding attributes"
feature_slug: "access-related-finding-attributes"
latest_feature_date: "2022-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query"
keywords:
  - "access"
  - "related"
  - "finding"
  - "attributes"
  - "security"
  - "command"
  - "center"
  - "findings"
---

# Access-related finding attributes

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center findings can include access-related event details such as caller IP address, service, method, and region.

## Extended Definition

Security Command Center findings can include access-related event details such as caller IP address, service, method, and region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview)
- [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- August 22, 2022 Feature The following attributes were added to the Finding object of the Security Command Center API: Database provides information about access to a database that is related to a finding. serviceAccountKeyName , serviceAccountDelegationInfo , and principalSubject attributes were added to the existing access attribute.
- February 22, 2022 Feature MITRE ATT&CK framework details related to findings are now available as finding attributes for all Security Command Center services.
- February 10, 2022 Feature Access-related details are now available as finding attributes for all Security Command Center services.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .

### "Bulk export findings to BigQuery \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up permissions To complete this guide, you must have the following Identity and Access Management (IAM) roles: On the organization where you want to export findings from, one of the following: Security Center BigQuery Exports Editor ( roles/securitycenter.bigQueryExportsEditor ) Security Center Admin ( roles/securitycenter.admin ) To learn more about Security Command Center roles, see Access control .
- Home Documentation Security Security Command Center Guides Send feedback Bulk export findings to BigQuery Stay organized with collections Save and categorize content based on your preferences.
- Enable the Security Command Center API To export findings, you must enable the Security Command Center API by following these steps: Go to the API Library page in the Google Cloud console.
- Each dataset contains a findings table, which has the following fields: Field Description source id A unique identifier that Security Command Center assigns to the source of a finding .

### When to expect findings in Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Guides Send feedback When to expect findings in Security Command Center Stay organized with collections Save and categorize content based on your preferences.
- Asset scan Security Command Center conducts an initial asset scan to identify the total number, location, and state of projects, folders, files, clusters, identities, access policies, enrolled users, and other resources.
- For built-in and custom detectors, detection latencies are generally less than 15 minutes, from the time a log is written to when a finding is available in Security Command Center.
- When a software vulnerability is detected in the AWS account, the corresponding finding becomes available in Security Command Center approximately 10 minutes later.

