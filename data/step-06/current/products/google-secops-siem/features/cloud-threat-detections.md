---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.616Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Cloud Threat Detections"
feature_slug: "cloud-threat-detections"
latest_feature_date: "2024-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "threat"
  - "detections"
  - "can"
  - "create"
  - "findings"
  - "security"
  - "command"
  - "center"
---

# Cloud Threat Detections

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Cloud Threat Detections can create detections from findings in Security Command Center, Cloud Armor, Sensitive Actions Service, and custom Event Threat Detection modules; Cloud Threat Detections can alert on findings from Security Command Center Event Threat Detections, Virtual Machine Threat Detections, and Container Threat Detections.

## Extended Definition

Cloud Threat Detections can create detections from findings in Security Command Center, Cloud Armor, Sensitive Actions Service, and custom Event Threat Detection modules; Cloud Threat Detections can alert on findings from Security Command Center Event Threat Detections, Virtual Machine Threat Detections, and Container Threat Detections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- CDIR SCC Custom Module : Contains rules that detect Event Threat Detection custom module findings from Security Command Center.
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.

### "Google Unified Security Recommended \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table describes the Google Unified Security Recommended requirement for Google-partner products to integrate with Security Command Center: Requirement Description Ingestion of SCC findings The partner products must integrate to ingest security findings, vulnerabilities, and threats identified by Security Command Center or the other way around.
- Partner products must create findings in Security Command Center for corresponding findings from their products.
- Google Unified Security Recommended Solution Overview with Wiz Foundational requirements Each Google Unified Security Recommended product must demonstrate comprehensive integrations with the following specified Google Cloud security products to ensure seamless data flow, enhanced threat detection, and effective response mechanisms: Google SecOps requirements Chrome Enterprise Premium requirements Security Command Center requirements Google Threat Intelligence requirements Mandiant services collaboration requirements Google SecOps requirements The following table describes the Google Unified Security Recommended requirements for Google-partner products to integrate with Google SecOps to facilitate mature security operations and incident response.
- Identity integrations Integrations that use or enhance identity-based security within Chrome Enterprise Premium (applicable for IDP partners only) Security Command Center requirement When applicable, the partner product is required to ingest findings from Security Command Center (SCC) to provide a unified view of security posture and facilitate risk management.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- Then, use a composite rule with a long match window (for example, 24 hours) to trigger on an initial suspicious login and correlate it with any of the following detections from the same user: A user clearing their command-line history.
- Enhance detection accuracy : Combine insights from Unified Data Model (UDM) events, rule detections, entity context, User and Entity Behavior Analytics (UEBA) findings, and data tables to build more accurate detection logic.
- Composite detections Supported in: Google secops SIEM This document introduces composite detections and how they can enhance threat detection workflows by correlating outputs from multiple rules.

