---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.886Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Cloud Threat Detections SCC passthrough detections"
feature_slug: "cloud-threat-detections-scc-passthrough-detections"
latest_feature_date: "2024-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "threat"
  - "detections"
  - "scc"
  - "passthrough"
  - "now"
  - "alerts"
  - "security"
  - "command"
---

# Cloud Threat Detections SCC passthrough detections

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Cloud Threat Detections now alerts on Security Command Center Event Threat, Virtual Machine Threat, and Container Threat Detection findings.

## Extended Definition

Cloud Threat Detections now alerts on Security Command Center Event Threat, Virtual Machine Threat, and Container Threat Detection findings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- In the list of detections, check that the following rules were triggered: tst azure activity tst azure defender for cloud alerts Execute a GET API request in Microsoft Graph Explorer to trigger the test rules Perform the following steps to verify that generating sample security alerts in Azure triggers the test rules.
- Rule set descriptions Important: Rule sets in the Cloud Threats category are available with the Google Security Operations Enterprise license tier and Security Command Center Enterprise license tier.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-3`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- Then, use a composite rule with a long match window (for example, 24 hours) to trigger on an initial suspicious login and correlate it with any of the following detections from the same user: A user clearing their command-line history.
- By setting a rule to detect only and then plotting its detections in a dashboard widget, you can track trends, identify outliers, and gain a high-level audit view of the activity without being overwhelmed by individual alerts.
- This includes detecting multi-stage attacks, correlating multiple low-confidence alerts into a single high-confidence alert, or enriching detections with additional context from other data sources.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Onboarding and Activating Google Unified Security This portfolio brings together the following Google's leading security solutions: Security Command Center (SCCE) Google SecOps (SecOps Enterprise Plus) Google Threat Intelligence (Enterprise) Chrome Enterprise Browser (Premium) Mandiant Threat Defense Getting Started Embark on your journey to a more secure future with Google Unified Security.
- Further Resources to get started: Model Armor Documentation AI Protection Overview Blog Post Security Command Center Documentation Sensitive Data Protection Documentation Continuous Security Validation: Stop Reacting, Start Preventing with Google SecOps Security teams in SOCs are constantly overwhelmed trying to keep up with the ever-changing threat landscape.
- Curated Detections & Prioritization : Pre-built detection rules (available in rule packs like "Applied Threat Intelligence - Curated Prioritization") contextualize IOC matches using event data and Mandiant intelligence features to generate prioritized alerts (Active Breach, High, Medium, Inbound IP Auth).
- With the unified capabilities between Google SecOps and Security Command Center, SOC analysts and Cloud Security engineers have a single converged platform within which to view and respond to incidents and cases related to threats in their Google Cloud, Azure, and AWS platforms.

