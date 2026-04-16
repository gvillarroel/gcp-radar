---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.811Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Quick actions"
feature_slug: "quick-actions"
latest_feature_date: "2025-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
keywords:
  - "quick"
  - "actions"
  - "administrators"
  - "can"
  - "define"
  - "that"
  - "analysts"
  - "run"
---

# Quick actions

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Administrators can define quick actions that analysts can run directly within cases and alerts.

## Extended Definition

Administrators can define quick actions that analysts can run directly within cases and alerts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- For example, if multiple rules share the same meta label tactic: exfiltration , you can have a composite rule that targets any detection where the tactic label has the value exfiltration .
- This allows a specific team (for example, the Data Loss Prevention (DLP) administrators) to monitor only the risks that are relevant, filtering out noise from other security domains.
- Define the join conditions : Determine the common piece of information that links the detections from your input rules, such as rule labels, variables, or detection fields.
- For example, while a rule can detect a successful user login, a contextual rule provides the crucial context that this login came from a new and unusual country.

### "Explore the alert overview tab \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Quick Actions : This widget lets you quickly execute predefined actions directly from the Alert Overview tab.
- To run a specific action on an entity, you can click settings Manual Action and create a manual action from here.
- The information displayed varies based on the alert type, and you can execute actions directly from this tab.
- Pending Actions : View all actions awaiting your input to keep the playbook running.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Service Disruption : Detect destructive or disruptive actions that, if performed in a functioning production environment, may cause a significant outage.
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- Suspicious Workspace Administrative Actions : Detect behaviors indicating potential evasion, security downgrading or rare and anomalous behaviors never seen in the last 30 days from users with higher privileges, including administrators.
- Kubernetes Certificate Sensitive Actions rule set To use the Kubernetes Certificate Sensitive Actions rule set, we recommend that you collect Cloud Audit Logs , listed in the All rule sets section.

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- It defines the conditions or events that cause the playbook to run.
- Using the Playbook Designer's features, you can do the following actions: Icon Description Open Step Selection Opens a side drawer with available Triggers , Actions , Flow , and Blocks .
- When a trigger initiates a playbook, it proceeds through a series of defined actions to achieve a specific resolution.
- Actions (blue box): After the trigger, the playbook moves to a set of defined actions it must perform.

