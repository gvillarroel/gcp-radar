---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.660Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Playbook condition flows"
feature_slug: "playbook-condition-flows"
latest_feature_date: "2026-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "playbook"
  - "condition"
  - "flows"
  - "conditions"
  - "up"
  - "20"
  - "branches"
  - "single"
---

# Playbook condition flows

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Playbook conditions support up to 20 branches in a single step.

## Extended Definition

Playbook conditions support up to 20 branches in a single step.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Flow (purple box): The final component involves determining the flow of the playbook, typically using if-then-else conditions.
- It defines the conditions or events that cause the playbook to run.
- Duplicate : Create a duplicate playbook with these options: Keep or change priority Keep in same folder or move to a different folder Single , multiple , or all environments, where all indicates all defined environments, present or future.
- Explore the Playbooks page Supported in: Google secops SOAR A playbook is built on triggers, actions, and flows, working together to automate incident response and other security operations tasks.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-3`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Define the join conditions : Determine the common piece of information that links the detections from your input rules, such as rule labels, variables, or detection fields.
- How composite detections work When rules meet predefined conditions, they generate detections.
- Detection : output generated when a rule's conditions are met.
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- See activate enterprise tier Validate Security Command Center Detection Services are enabled: See How to configure Security Command Center Connect Security Command Center to AWS to get configuration and resource data that flows through to the Entity Graph: See Connect Security Command Center to AWS Preview - Connect Security Command Center to Azure to get configuration and resource data that flows through to the Entity Graph. (Optional) Integrate Security Command Center with ticketing systems.
- Google SecOps provides Cloud Detection Investigation and Response (CDIR), Case Management, SIEM log searching and investigation, Cloud Asset Inventory collection for Entity Graph Enrichment, and the ability to automate common SOC workflows using the SOAR component of Google SecOps.
- With the unified capabilities between Google SecOps and Security Command Center, SOC analysts and Cloud Security engineers have a single converged platform within which to view and respond to incidents and cases related to threats in their Google Cloud, Azure, and AWS platforms.
- Automated response :Leveraging native playbook orchestration capabilities, security teams can also automate response actions on Chrome Enterprise, such as blocking malicious URLs, blocking extensions, and even quarantining devices, directly from the Google SecOps platform.

