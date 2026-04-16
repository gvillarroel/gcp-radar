---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.628Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Model Armor monitoring dashboard"
feature_slug: "model-armor-monitoring-dashboard"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "model"
  - "armor"
  - "monitoring"
  - "dashboard"
  - "provides"
  - "centralized"
  - "view"
  - "interactions"
---

# Model Armor monitoring dashboard

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Model Armor monitoring dashboard provides a centralized view of interactions and violations across projects.

## Extended Definition

The Model Armor monitoring dashboard provides a centralized view of interactions and violations across projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview](https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- September 08, 2025 Feature The Model Armor monitoring dashboard provides a centralized view to track interactions and violations within your projects.
- June 13, 2025 Feature The following Event Threat Detection detectors for Vertex AI have been released to Preview : Persistence: New Geography for AI Service Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Data Access Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for AI Data Access Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity Persistence: New AI API Method Initial Access: Dormant Service Account Activity in AI Service June 08, 2025 Feature Multi-language support for Model Armor filters The Responsible AI and prompt injection and jailbreak detection filters are tested in English, Spanish, French, Italian, Portuguese, German, Chinese (Mandarin), Japanese, and Korean.
- September 16, 2025 Feature Model Armor is integrated with Google Agentspace to provide greater insights and enhanced security of your agent interactions by default.
- For more information, see View the monitoring dashboard .

### "AI Protection overview \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview](https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Visualize your AI inventory You can view a visualization of your AI inventory on the dashboard that provides a summary of the projects that involve generative AI, the first-party and third-party models in active use, and the datasets that are used in training the third-party models.
- Unified AI security management : Assists in monitoring and applying AI security policies and best practices consistently across your organization from a single, centralized dashboard.
- This information is populated based on the metrics that Model Armor publishes to Cloud Monitoring.
- For more information, see Model Armor overview .

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Use the following query to view the findings for DSPM: state="ACTIVE" AND NOT mute="MUTED" AND resource.name="//aiplatform.googleapis.com/projects/478190632149/locations/us-central1/models/1244151282898305024" AND category="DATA SECURITY POSTURE ACCESS VIOLATION" OR category="DATA SECURITY POSTURE FLOW VIOLATION" OR category="DATA SECURITY POSTURE DELETION VIOLATION" OR category="DATA SECURITY POSTURE PROTECTION KEY GOVERNANCE" OR category="BIGQUERY TABLE CMEK DISABLED" OR category="VERTEX AI MODEL CMEK DISABLED" OR category="VERTEX AI METADATA STORE CMEK DISABLED" OR category="VERTEX AI DATASET CMEK DISABLED" OR category="VERTEX AI FEATURE STORE TABLE CMEK DISABLED" OR category="DATA SECURITY POSTURE CMEK POLICY MISCONFIGURED" OR category="DATA SECURITY POSTURE CMEK POLICY DELETED" OR category="DATA SECURITY POSTURE CMEK VIOLATION" OR category="SENSITIVE DATA PUBLIC SQL INSTANCE" OR category="SENSITIVE DATA PUBLIC DATASET" OR category="SENSITIVE DATA BIGQUERY TABLE CMEK DISABLED" OR category="SENSITIVE DATA DATASET CMEK DISABLED" OR category="SENSITIVE DATA SQL CMEK DISABLED" OR category="PUBLIC DATASET" OR category="PUBLIC SQL INSTANCE" OR category="SQL PUBLIC IP" OR category="ACCESS TRANSPARENCY DISABLED" OR category="ORG POLICY LOCATION RESTRICTION" OR category="BUCKET POLICY ONLY DISABLED" OR category="DATA EXFILTRATION BIG QUERY" OR category="DATA EXFILTRATION BIG QUERY EXTRACTION" OR category="DATA EXFILTRATION BIG QUERY TO GOOGLE DRIVE" To view the details of a specific finding, click the finding name in the Category column.
- To see these findings, enable any of the following GKE security posture dashboard features: GKE security posture dashboard pane Security Command Center finding class Workload configuration auditing 1 MISCONFIGURATION Top threats 2 THREAT Container OS vulnerability scanning 1 Language package vulnerability scanning 1 Actionable security bulletins 1 ( Preview ) Top software vulnerabilities 2 ( Preview ) VULNERABILITY Available only if you enable this feature in GKE.
- You can filter in the following investigative views: Risk Overview > All risk dashboard Risk Overview > Data dashboard Findings page Issues page Compliance > Monitor (New) tab Compliance > Monitor (New) > Framework Details page The application filter is available when viewing data for an organization and lists applications that are created in App Hub and deployed in the same organization where Security Command Center was activated.
- Vulnerability findings from the Model Armor service Finding Summary Floor settings violation Category name in the API: FLOOR SETTINGS VIOLATION Finding description : A floor setting violation that occurs when a Model Armor template fails to meet the minimum security standards defined by the resource hierarchy floor settings.

