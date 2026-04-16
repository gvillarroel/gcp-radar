---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.493Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Unified rules interface"
feature_slug: "unified-rules-interface"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category"
keywords:
  - "unified"
  - "rules"
  - "interface"
  - "combines"
  - "custom"
  - "curated"
  - "rule"
  - "management"
---

# Unified rules interface

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The unified rules interface combines custom and curated rule management in a single workflow.

## Extended Definition

The unified rules interface combines custom and curated rule management in a single workflow.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)

## Supporting Pages

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curated Detections & Prioritization : Pre-built detection rules (available in rule packs like "Applied Threat Intelligence - Curated Prioritization") contextualize IOC matches using event data and Mandiant intelligence features to generate prioritized alerts (Active Breach, High, Medium, Inbound IP Auth).
- Real-time insights from Gemini AI enhances threat detection and streamlines security operations, empowering organizations to shift from reactive to preemptive security and stay two steps ahead of increasingly sophisticated attackers The key components of Google Unified Security are: Modern Security Operations : Detect, investigate, and respond to threats at Google speed and scale Threat intelligence and exposure management : Know who is targeting you and where you are exposed.
- Measure effectiveness of Data Loss Prevention (DLP) policies An administrator can measure the effectiveness of DLP rules by reviewing aggregate data to ensure that “block” and “warn” policies applied through Chrome are addressing threats and not preventing legitimate work.
- For existing Google Security customers: If you are already leveraging the power of any of the individual product components within our security portfolio, we can seamlessly upgrade you to the complete Google Unified Security package.

### "Google Unified Security Recommended \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table describes the Google Unified Security Recommended requirement for Google-partner products to integrate with Google Threat Intelligence: Requirement Description Curated detections development The partner must provide direct support for Google's Mandiant services in developing high-quality, curated detection rules specifically for Google SecOps.
- Mandiant services collaboration requirement A key aspect of the program is close collaboration with Google's Mandiant services to develop high-quality, curated detection rules for joint customers in order to unlock Mandiant support for your third-party product on behalf of customers.
- The following table describes the Google Unified Security Recommended requirement for Google-partner products to integrate with Google Threat Intelligence: Requirement Description Bring Your Own License (BYOL) or OEM The partner products must directly integrate Google Threat Intelligence feeds using OEM integration or support a BYOL pathway for Google Threat Intelligence customers.
- Identity integrations Integrations that use or enhance identity-based security within Chrome Enterprise Premium (applicable for IDP partners only) Security Command Center requirement When applicable, the partner product is required to ingest findings from Security Command Center (SCC) to provide a unified view of security posture and facilitate risk management.

### "Overview of composite rules category \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Modify rules in a rule set You can customize the behavior of rules within a rule set to meet your organization's needs.
- The following categories outline the most important log sources required for the curated composite content to function effectively: Endpoint composite rule log sources Linux threats MacOS threats Windows threats Google Cloud composite rule log sources Google Cloud AWS Azure Office365 Okta Google Cloud and endpoint rule log sources Applied Threat Intelligence (ATI) Chrome Enterprise Threats Risk Analytics for UEBA For a complete list of the available curated detections, see Use curated detections .
- Describe rule sets The Composite Rules category includes the following rule sets: Endpoint composite rules Cloud composite rules ATI composite rules Understand endpoint composite rules These rules correlate findings from multiple detection rules that relate to the same endpoint over a defined time period.
- Understand ATI composite rules ATI composite rules detect multiple unique Applied Threat Intelligence detections from the same campaign, malware variant, or threat actor to provide additional environmental context of any potential threat.

