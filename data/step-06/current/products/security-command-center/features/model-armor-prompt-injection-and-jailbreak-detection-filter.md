---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.684Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Model Armor prompt injection and jailbreak detection filter"
feature_slug: "model-armor-prompt-injection-and-jailbreak-detection-filter"
latest_feature_date: "2025-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview"
keywords:
  - "model"
  - "armor"
  - "prompt"
  - "injection"
  - "jailbreak"
  - "detection"
  - "filter"
  - "provides"
---

# Model Armor prompt injection and jailbreak detection filter

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Provides prompt injection and jailbreak detection filtering with multilingual support testing.

## Extended Definition

Provides prompt injection and jailbreak detection filtering with multilingual support testing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview](https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- June 13, 2025 Feature The following Event Threat Detection detectors for Vertex AI have been released to Preview : Persistence: New Geography for AI Service Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Data Access Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for AI Data Access Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity Persistence: New AI API Method Initial Access: Dormant Service Account Activity in AI Service June 08, 2025 Feature Multi-language support for Model Armor filters The Responsible AI and prompt injection and jailbreak detection filters are tested in English, Spanish, French, Italian, Portuguese, German, Chinese (Mandarin), Japanese, and Korean.
- Change The prompt injection and jailbreak detection filter in Model Armor flags more threats across various attack vectors, and offers an improved detection rate for high-confidence malicious prompts.
- March 21, 2025 Change Model Armor filter update The prompt injection and jailbreak detection filter in Model Armor is upgraded with increased efficacy and higher model quality scores.
- July 28, 2025 Change Model Armor filter updates The prompt injection and jailbreak detection filter now supports 10,000 tokens.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Model Armor Standard-legacy, Standard, Premium, and Enterprise service tiers Model Armor is a fully managed Google Cloud service that enhances the security and safety of AI applications by screening LLM prompts and responses.
- Vulnerability findings from the Model Armor service Finding Summary Floor settings violation Category name in the API: FLOOR SETTINGS VIOLATION Finding description : A floor setting violation that occurs when a Model Armor template fails to meet the minimum security standards defined by the resource hierarchy floor settings.
- Security Health Analytics Standard-legacy, Standard, Premium, and Enterprise service tiers Security Health Analytics is a built-in detection service of Security Command Center that provides managed scans of your cloud resources to detect common misconfigurations.
- Cloud Armor exports two findings to Security Command Center: Allowed Traffic Spike Increasing Deny Ratio Virtual Machine Threat Detection Premium and Enterprise service tiers Virtual Machine Threat Detection is a built-in service of Security Command Center.

### "AI Protection overview \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview](https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- In addition, it displays summary statistics for various types of issues detected, such as prompt injection, jailbreak detection, and sensitive data detection.
- Examine Model Armor findings A graph shows the total number of prompts or responses scanned by Model Armor and the number of issues that Model Armor detected.
- Visualize your AI inventory You can view a visualization of your AI inventory on the dashboard that provides a summary of the projects that involve generative AI, the first-party and third-party models in active use, and the datasets that are used in training the third-party models.
- This information is populated based on the metrics that Model Armor publishes to Cloud Monitoring.

