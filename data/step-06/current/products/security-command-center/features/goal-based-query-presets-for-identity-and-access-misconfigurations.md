---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.850Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Goal-based query presets for identity and access misconfigurations"
feature_slug: "goal-based-query-presets-for-identity-and-access-misconfigurations"
latest_feature_date: "2023-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "goal"
  - "based"
  - "query"
  - "presets"
  - "identity"
  - "access"
  - "misconfigurations"
  - "filter"
---

# Goal-based query presets for identity and access misconfigurations

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Goal-based query presets filter vulnerability findings to help identify principal accounts that are misconfigured or have excessive permissions.

## Extended Definition

Goal-based query presets filter vulnerability findings to help identify principal accounts that are misconfigured or have excessive permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity](https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- December 07, 2023 Feature New goal-based query presets for identity and access misconfigurations New goal-based query presets on the Security Command Center Vulnerabilities page are released to Preview .
- For more information, see Goal-based query presets .
- The query presets support cloud infrastructure entitlement management (CIEM) by filtering vulnerability finding categories to those that are related to principal accounts that are misconfigured or that have excessive permissions to Google Cloud resources.
- You can see the latest product updates for all of Google Cloud on the Google Cloud page, browse and filter all release notes in the Google Cloud console , or programmatically access release notes in BigQuery .

### "Control IAM access based on data sensitivity \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity](https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity)
- Source ID: `site-docs-reference-3`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported resources With this feature, Sensitive Data Protection automatically tags data at following levels: BigQuery tables Cloud SQL instances Cloud Storage buckets How it works The following is a high-level workflow for controlling access to resources based on data sensitivity.
- This page describes how to automatically grant or deny Identity and Access Management (IAM) access to resources based on the sensitivity of the data in those resources.
- Deny access if moderate-sensitivity or high-sensitivity data is present The following excerpt of a deny policy denies the bigquery.googleapis.com/tables.get permission if the resource has any moderate-sensitivity or high-sensitivity data. "rules": [ { "denyRule": { "deniedPrincipals": [ "principalSet://goog/group/data-team@example.com" ], "deniedPermissions": [ "bigquery.googleapis.com/tables.get" ], "denialCondition": { "title": "Resource has moderate or high data sensitivity", "expression": "resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR MODERATE SENSITIVITY ") resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR HIGH SENSITIVITY ")" } } } ] Replace the following: SENSITIVITY LEVEL TAG KEY : the numeric ID of the sensitivity level tag key that you created TAG VALUE FOR MODERATE SENSITIVITY : the numeric ID of the tag value that you created for moderate-sensitivity data TAG VALUE FOR HIGH SENSITIVITY : the numeric ID of the tag value that you created for high-sensitivity data Enable the automatic tagging in the discovery configuration In this task, you enable the Tag resources action.
- Note that there is an OR operator between the two conditions. resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR LOW SENSITIVITY ") resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR MODERATE SENSITIVITY ") Replace the following: SENSITIVITY LEVEL TAG KEY : the numeric ID of the sensitivity level tag key that you created TAG VALUE FOR LOW SENSITIVITY : the numeric ID of the tag value that you created for low-sensitivity data TAG VALUE FOR MODERATE SENSITIVITY : the numeric ID of the tag value that you created for moderate-sensitivity data Grant principals access only if the sensitivity level tag is present This is useful, for example, if you want to define an organization policy that requires all IAM access to be conditional based on the presence of a sensitivity level tag.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Preview An identity associated with an AI agent deployed to Vertex AI Agent Engine attempted to access BigQuery resources protected by VPC Service Controls.
- Use the following query to view the findings for DSPM: state="ACTIVE" AND NOT mute="MUTED" AND resource.name="//aiplatform.googleapis.com/projects/478190632149/locations/us-central1/models/1244151282898305024" AND category="DATA SECURITY POSTURE ACCESS VIOLATION" OR category="DATA SECURITY POSTURE FLOW VIOLATION" OR category="DATA SECURITY POSTURE DELETION VIOLATION" OR category="DATA SECURITY POSTURE PROTECTION KEY GOVERNANCE" OR category="BIGQUERY TABLE CMEK DISABLED" OR category="VERTEX AI MODEL CMEK DISABLED" OR category="VERTEX AI METADATA STORE CMEK DISABLED" OR category="VERTEX AI DATASET CMEK DISABLED" OR category="VERTEX AI FEATURE STORE TABLE CMEK DISABLED" OR category="DATA SECURITY POSTURE CMEK POLICY MISCONFIGURED" OR category="DATA SECURITY POSTURE CMEK POLICY DELETED" OR category="DATA SECURITY POSTURE CMEK VIOLATION" OR category="SENSITIVE DATA PUBLIC SQL INSTANCE" OR category="SENSITIVE DATA PUBLIC DATASET" OR category="SENSITIVE DATA BIGQUERY TABLE CMEK DISABLED" OR category="SENSITIVE DATA DATASET CMEK DISABLED" OR category="SENSITIVE DATA SQL CMEK DISABLED" OR category="PUBLIC DATASET" OR category="PUBLIC SQL INSTANCE" OR category="SQL PUBLIC IP" OR category="ACCESS TRANSPARENCY DISABLED" OR category="ORG POLICY LOCATION RESTRICTION" OR category="BUCKET POLICY ONLY DISABLED" OR category="DATA EXFILTRATION BIG QUERY" OR category="DATA EXFILTRATION BIG QUERY EXTRACTION" OR category="DATA EXFILTRATION BIG QUERY TO GOOGLE DRIVE" To view the details of a specific finding, click the finding name in the Category column.
- Event Threat Detection finding types Data destruction Event Threat Detection detects data destruction by examining audit logs from the Backup and DR Service Management Server for the following scenarios: Deletion of a backup image Deletion of all backup images associated with an application Deletion of a backup/recovery appliance Data exfiltration Event Threat Detection detects data exfiltration from BigQuery and Cloud SQL by examining audit logs for the following scenarios: An identity associated with an AI agent deployed to Vertex AI Agent Engine initiated a BigQuery data exfiltration by saving resources outside of your organization.
- Preview Credential Access Event Threat Detection detects credential access operations by examining Vertex AI Agent Engine logs for the following scenarios: An identity associated with an AI agent deployed to Vertex AI Agent Engine fetched a service account token from the metadata server.

