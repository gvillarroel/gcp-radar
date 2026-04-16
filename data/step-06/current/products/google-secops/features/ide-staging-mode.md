---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.842Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "IDE staging mode"
feature_slug: "ide-staging-mode"
latest_feature_date: "2024-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "ide"
  - "staging"
  - "mode"
  - "now"
  - "includes"
  - "testing"
  - "certified"
  - "custom"
---

# IDE staging mode

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The IDE now includes a staging mode for testing certified, custom, and upgraded integrations before production release.

## Extended Definition

The IDE now includes a staging mode for testing certified, custom, and upgraded integrations before production release.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Azure - Defender for Cloud : Identifies alerts received from context-aware Microsoft Defender for Cloud related to user behavior, credential access, cryptomining, discovery, evasion, execution, exfiltration, impact, initial access, malware, penetration testing, persistence, policy, privilege escalation, or unauthorized access across all Azure cloud services.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Examples SCC-E customers have immediate access to several key AI Protection capabilities: Model Armor : Protects against prompt injection, data loss, and offensive content,through prompt and response screening.
- This includes: Discovery of your AI Inventory : AI Protection can thoroughly scan your systems to identify and catalog all existing AI assets, including models, datasets, and associated applications.
- Real-time insights from Gemini AI enhances threat detection and streamlines security operations, empowering organizations to shift from reactive to preemptive security and stay two steps ahead of increasingly sophisticated attackers The key components of Google Unified Security are: Modern Security Operations : Detect, investigate, and respond to threats at Google speed and scale Threat intelligence and exposure management : Know who is targeting you and where you are exposed.
- Further Resources to get started: Model Armor Documentation AI Protection Overview Blog Post Security Command Center Documentation Sensitive Data Protection Documentation Continuous Security Validation: Stop Reacting, Start Preventing with Google SecOps Security teams in SOCs are constantly overwhelmed trying to keep up with the ever-changing threat landscape.

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Optional: Create a staging integration If you're editing a custom integration or a component of a commercial integration, we recommend that you push the changes to a staging integration first.
- For details about integration staging, see Test integrations in staging mode .
- Can be v1alpha , v1beta , or v1 . project id : Your project ID (same project as you defined for your IAM permissions) location : The location of your project (region); same as the regional endpoints instance id : Your Google Security Operations SIEM customer ID.
- Test your integration Test your updated application in a staging integration before deploying to production: Create a test plan: Define test cases that cover all migrated functionalities.

