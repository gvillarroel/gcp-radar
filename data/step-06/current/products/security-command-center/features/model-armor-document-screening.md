---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.683Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Model Armor document screening"
feature_slug: "model-armor-document-screening"
latest_feature_date: "2025-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/create-custom-infotypes-metadata-labels"
keywords:
  - "model"
  - "armor"
  - "document"
  - "screening"
  - "screens"
  - "docx"
  - "docm"
  - "dotx"
---

# Model Armor document screening

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Screens DOCX, DOCM, DOTX, DOTM, PPTX, PPTM, POTX, POT, XLSX, XLSM, XLTX, and XLTM files for malicious content.

## Extended Definition

Screens DOCX, DOCM, DOTX, DOTM, PPTX, PPTM, POTX, POT, XLSX, XLSM, XLTX, and XLTM files for malicious content.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/create-custom-infotypes-metadata-labels](https://docs.cloud.google.com/sensitive-data-protection/docs/create-custom-infotypes-metadata-labels)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- DOCX, DOCM, DOTX, DOTM documents PPTX, PPTM, POTX, POT presentations XLSX, XLSM, XLTX, XLTM spreadsheets June 06, 2025 Change The Security Risk Overview dashboard for Compute Engine is in General Availability .
- Feature Model Armor supports screening text in the following document types for malicious content.
- June 13, 2025 Feature The following Event Threat Detection detectors for Vertex AI have been released to Preview : Persistence: New Geography for AI Service Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Data Access Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for AI Data Access Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity Persistence: New AI API Method Initial Access: Dormant Service Account Activity in AI Service June 08, 2025 Feature Multi-language support for Model Armor filters The Responsible AI and prompt injection and jailbreak detection filters are tested in English, Spanish, French, Italian, Portuguese, German, Chinese (Mandarin), Japanese, and Korean.
- December 16, 2025 Feature The following Container Threat Detection detectors have been released to General Availability : Command and Control: Piped Encoded Code Execution Detected Command and Control: Piped Encoded Download December 15, 2025 Feature You can configure Model Armor floor settings for Google-managed Model Context Protocol (MCP) servers to define baseline safety and security filters.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Model Armor Standard-legacy, Standard, Premium, and Enterprise service tiers Model Armor is a fully managed Google Cloud service that enhances the security and safety of AI applications by screening LLM prompts and responses.
- Vulnerability findings from the Model Armor service Finding Summary Floor settings violation Category name in the API: FLOOR SETTINGS VIOLATION Finding description : A floor setting violation that occurs when a Model Armor template fails to meet the minimum security standards defined by the resource hierarchy floor settings.
- Pricing tier : Premium Fix this finding build : This finding requires that you update the Model Armor template to be in conformance with the floor settings defined at the resource hierarchy.
- Use the following query to view the findings for DSPM: state="ACTIVE" AND NOT mute="MUTED" AND resource.name="//aiplatform.googleapis.com/projects/478190632149/locations/us-central1/models/1244151282898305024" AND category="DATA SECURITY POSTURE ACCESS VIOLATION" OR category="DATA SECURITY POSTURE FLOW VIOLATION" OR category="DATA SECURITY POSTURE DELETION VIOLATION" OR category="DATA SECURITY POSTURE PROTECTION KEY GOVERNANCE" OR category="BIGQUERY TABLE CMEK DISABLED" OR category="VERTEX AI MODEL CMEK DISABLED" OR category="VERTEX AI METADATA STORE CMEK DISABLED" OR category="VERTEX AI DATASET CMEK DISABLED" OR category="VERTEX AI FEATURE STORE TABLE CMEK DISABLED" OR category="DATA SECURITY POSTURE CMEK POLICY MISCONFIGURED" OR category="DATA SECURITY POSTURE CMEK POLICY DELETED" OR category="DATA SECURITY POSTURE CMEK VIOLATION" OR category="SENSITIVE DATA PUBLIC SQL INSTANCE" OR category="SENSITIVE DATA PUBLIC DATASET" OR category="SENSITIVE DATA BIGQUERY TABLE CMEK DISABLED" OR category="SENSITIVE DATA DATASET CMEK DISABLED" OR category="SENSITIVE DATA SQL CMEK DISABLED" OR category="PUBLIC DATASET" OR category="PUBLIC SQL INSTANCE" OR category="SQL PUBLIC IP" OR category="ACCESS TRANSPARENCY DISABLED" OR category="ORG POLICY LOCATION RESTRICTION" OR category="BUCKET POLICY ONLY DISABLED" OR category="DATA EXFILTRATION BIG QUERY" OR category="DATA EXFILTRATION BIG QUERY EXTRACTION" OR category="DATA EXFILTRATION BIG QUERY TO GOOGLE DRIVE" To view the details of a specific finding, click the finding name in the Category column.

### "Create a custom metadata label detector \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/create-custom-infotypes-metadata-labels](https://docs.cloud.google.com/sensitive-data-protection/docs/create-custom-infotypes-metadata-labels)
- Source ID: `site-docs-reference-3`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sanitize documents using Model Armor based on specific metadata labels.
- To use this feature with Model Armor—or services that use Model Armor like Gemini Enterprise—you must create an advanced Sensitive Data Protection configuration in Model Armor that references this custom metadata label detector.
- What's next Create an advanced Sensitive Data Protection configuration in Model Armor .
- If you use a custom or third-party classification system that applies metadata labels to your documents, you can configure Sensitive Data Protection to detect these metadata labels during your inspection or discovery operations.

