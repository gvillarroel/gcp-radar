---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.685Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Model Armor Responsible AI filter"
feature_slug: "model-armor-responsible-ai-filter"
latest_feature_date: "2025-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/assess-risk"
keywords:
  - "model"
  - "armor"
  - "responsible"
  - "ai"
  - "filter"
  - "provides"
  - "filtering"
  - "multilingual"
---

# Model Armor Responsible AI filter

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Provides Responsible AI filtering with multilingual support testing.

## Extended Definition

Provides Responsible AI filtering with multilingual support testing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/assess-risk](https://docs.cloud.google.com/security-command-center/docs/assess-risk)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- June 13, 2025 Feature The following Event Threat Detection detectors for Vertex AI have been released to Preview : Persistence: New Geography for AI Service Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Data Access Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for AI Data Access Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity Persistence: New AI API Method Initial Access: Dormant Service Account Activity in AI Service June 08, 2025 Feature Multi-language support for Model Armor filters The Responsible AI and prompt injection and jailbreak detection filters are tested in English, Spanish, French, Italian, Portuguese, German, Chinese (Mandarin), Japanese, and Korean.
- December 16, 2025 Feature The following Container Threat Detection detectors have been released to General Availability : Command and Control: Piped Encoded Code Execution Detected Command and Control: Piped Encoded Download December 15, 2025 Feature You can configure Model Armor floor settings for Google-managed Model Context Protocol (MCP) servers to define baseline safety and security filters.
- Change The prompt injection and jailbreak detection filter in Model Armor flags more threats across various attack vectors, and offers an improved detection rate for high-confidence malicious prompts.
- The following filters are available for issues : CVE Vulnerabilities Identity Data AI Security May 28, 2025 Change Model Armor enhancements Model Armor supports multi-regional endpoints.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud Armor Standard-legacy, Standard, Premium, and Enterprise service tiers (requires organization-level activation ) Cloud Armor helps protect your application by providing Layer 7 filtering.
- Vulnerability findings from the Model Armor service Finding Summary Floor settings violation Category name in the API: FLOOR SETTINGS VIOLATION Finding description : A floor setting violation that occurs when a Model Armor template fails to meet the minimum security standards defined by the resource hierarchy floor settings.
- Model Armor Standard-legacy, Standard, Premium, and Enterprise service tiers Model Armor is a fully managed Google Cloud service that enhances the security and safety of AI applications by screening LLM prompts and responses.
- Pricing tier : Premium Fix this finding build : This finding requires that you update the Model Armor template to be in conformance with the floor settings defined at the resource hierarchy.

### "Assess risk at a glance \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/assess-risk](https://docs.cloud.google.com/security-command-center/docs/assess-risk)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Note: If Model Armor is not configured for any of the projects in the organization or a template isn't created, the Model Armor widgets in the AI Security dashboard won't show any data.
- Gemini models secured with Model Armor : View Gemini models that are protected and unprotected by Model Armor floor settings.
- Violations : See detections by Model Armor across any model that is protected by Model Armor templates and floor settings.
- An interaction is a single request that is analyzed by Model Armor and one interaction can have multiple violations.

