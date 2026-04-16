---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.836Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Vertex AI posture monitoring pane"
feature_slug: "vertex-ai-posture-monitoring-pane"
latest_feature_date: "2024-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "vertex"
  - "ai"
  - "posture"
  - "monitoring"
  - "pane"
  - "overview"
  - "page"
  - "gains"
---

# Vertex AI posture monitoring pane

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Overview page gains a Preview pane for monitoring Vertex AI posture drift and related vulnerabilities.

## Extended Definition

The Overview page gains a Preview pane for monitoring Vertex AI posture drift and related vulnerabilities.

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
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Feature Pane on Overview page that supports postures for Vertex AI released to Preview A pane on the Overview page lets you monitor for vulnerabilities that were found by the Security Health Analytics custom modules that apply to Vertex AI, and lets you view any drift from the Vertex AI organization policies that are defined in a posture.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- Addition of a new Toxic Combination Cases TTR and Trend widget on the Posture overview page of the Google Security Operations console.
- June 13, 2025 Feature The following Event Threat Detection detectors for Vertex AI have been released to Preview : Persistence: New Geography for AI Service Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Data Access Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for AI Data Access Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity Persistence: New AI API Method Initial Access: Dormant Service Account Activity in AI Service June 08, 2025 Feature Multi-language support for Model Armor filters The Responsible AI and prompt injection and jailbreak detection filters are tested in English, Spanish, French, Italian, Portuguese, German, Chinese (Mandarin), Japanese, and Korean.

### "AI Protection overview \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview](https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Event Threat Detection rules for Vertex AI assets The following Event Threat Detection rules run detections on Vertex AI assets: Persistence : New AI API Method Persistence : New Geography for AI Service Privilege Escalation : Anomalous Impersonation of Service Account for AI Admin Activity Privilege Escalation : Anomalous Service Account Impersonator for AI Data Access Privilege Escalation : Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation : Anomalous Multistep Service Account Delegation for AI Data Access Privilege Escalation : Anomalous Service Account Impersonator for AI Admin Activity Initial Access : Dormant Service Account Activity in AI Service For more information about Event Threat Detection, see Event Threat Detection overview .
- Access the AI Security dashboard To access the AI security dashboard, in the Google Cloud console, go to the Risk overview > AI security page: Go to AI security Note: For the dashboard to populate with data, you need one of the IAM roles in the Required roles section.
- Capabilities of AI Protection AI Protection helps you manage threats and risks to your AI systems in the following ways: Organization-wide AI asset inventory : Helps you discover, assess, and manage your AI systems and assets across all projects, including models, datasets, endpoints, Vertex AI, Cloud Storage, and BigQuery.
- Premium and Enterprise service tiers (requires organization-level activation ) AI Protection helps you manage the security posture of your AI workloads by detecting threats and helping you to mitigate risks to your AI asset inventory.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Use the following query to view the findings for DSPM: state="ACTIVE" AND NOT mute="MUTED" AND resource.name="//aiplatform.googleapis.com/projects/478190632149/locations/us-central1/models/1244151282898305024" AND category="DATA SECURITY POSTURE ACCESS VIOLATION" OR category="DATA SECURITY POSTURE FLOW VIOLATION" OR category="DATA SECURITY POSTURE DELETION VIOLATION" OR category="DATA SECURITY POSTURE PROTECTION KEY GOVERNANCE" OR category="BIGQUERY TABLE CMEK DISABLED" OR category="VERTEX AI MODEL CMEK DISABLED" OR category="VERTEX AI METADATA STORE CMEK DISABLED" OR category="VERTEX AI DATASET CMEK DISABLED" OR category="VERTEX AI FEATURE STORE TABLE CMEK DISABLED" OR category="DATA SECURITY POSTURE CMEK POLICY MISCONFIGURED" OR category="DATA SECURITY POSTURE CMEK POLICY DELETED" OR category="DATA SECURITY POSTURE CMEK VIOLATION" OR category="SENSITIVE DATA PUBLIC SQL INSTANCE" OR category="SENSITIVE DATA PUBLIC DATASET" OR category="SENSITIVE DATA BIGQUERY TABLE CMEK DISABLED" OR category="SENSITIVE DATA DATASET CMEK DISABLED" OR category="SENSITIVE DATA SQL CMEK DISABLED" OR category="PUBLIC DATASET" OR category="PUBLIC SQL INSTANCE" OR category="SQL PUBLIC IP" OR category="ACCESS TRANSPARENCY DISABLED" OR category="ORG POLICY LOCATION RESTRICTION" OR category="BUCKET POLICY ONLY DISABLED" OR category="DATA EXFILTRATION BIG QUERY" OR category="DATA EXFILTRATION BIG QUERY EXTRACTION" OR category="DATA EXFILTRATION BIG QUERY TO GOOGLE DRIVE" To view the details of a specific finding, click the finding name in the Category column.
- For more information, see the following: Security Health Analytics overview How to use Security Health Analytics Remediating Security Health Analytics findings Reference of Security Health Analytics findings Security posture service Premium and Enterprise service tiers (requires organization-level activation ) The security posture service is a built-in service for the Security Command Center Premium tier that lets you define, assess, and monitor the overall status of your security in Google Cloud.
- To see these findings, enable any of the following GKE security posture dashboard features: GKE security posture dashboard pane Security Command Center finding class Workload configuration auditing 1 MISCONFIGURATION Top threats 2 THREAT Container OS vulnerability scanning 1 Language package vulnerability scanning 1 Actionable security bulletins 1 ( Preview ) Top software vulnerabilities 2 ( Preview ) VULNERABILITY Available only if you enable this feature in GKE.
- You can filter in the following investigative views: Risk Overview > All risk dashboard Risk Overview > Data dashboard Findings page Issues page Compliance > Monitor (New) tab Compliance > Monitor (New) > Framework Details page The application filter is available when viewing data for an organization and lists applications that are created in App Hub and deployed in the same organization where Security Command Center was activated.

