---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.618Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Risk Analytics"
feature_slug: "risk-analytics"
latest_feature_date: "2024-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "risk"
  - "analytics"
  - "scores"
  - "entities"
  - "activities"
  - "surfaces"
  - "those"
  - "dashboard"
---

# Risk Analytics

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Risk Analytics scores entities and activities for risk and surfaces those scores in a dashboard with watchlists, detections, and custom-rule functions.

## Extended Definition

Risk Analytics scores entities and activities for risk and surfaces those scores in a dashboard with watchlists, detections, and custom-rule functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Goal : Correlate a single event, like a high-risk login, with a wide range of subsequent "weak signal" activities over a longer period, such as a full day.
- Manage rule quotas and risk scores To manage your organization's resources, understand how different rule types impact your rule quota.
- Example: Monitor specific DLP risks : A widget aggregates the risk scores from a very specific subset of DLP rules.
- Risk is the assessment of how dangerous a set of activities is.

### "Overview of context-aware analytics \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Context-aware analytics incorporates advanced enrichment capabilities earlier in the detection authoring and execution workflow, enabling you to provide the following additional capabilities: Making relevant context available for heuristic-driven contextual risk scoring of detections at detection execution time rather than at the human triage stage Reducing time spent on triage and manually stitching together information from disparate IT security systems (EDR consoles, firewall or proxy logs, CMDB and IAM context, vulnerability scan results) Enabling analysts and detection engineers to filter out entire clusters of threats that may be expected or represent little or no danger to the enterprise (malware testing in a sandbox environment, vulnerabilities and anomalous activity in a development network with no sensitive data or access, and more) Writing rules for context-aware analytics You can use Detection Engine rules to search for entity context data in your Google SecOps account.
- It provides entity contextualization to enable you to understand both the behavioral patterns in telemetry and the context of those impacted entities from those patterns.
- Invalid. $host over 3h after $e1 condition: $e1 and $e2 } Login example using outcome section The following example uses the outcome section to calculate a risk score for the detection. rule Detection { meta: events: $auth.metadata.event type = "USER LOGIN" $auth.metadata.vendor name = "Acme" $auth.metadata.product name = "Acme SSO" $auth.target.user.userid = $user $auth.metadata.event timestamp.seconds > $context.graph.entity.user.termination date.seconds $context.graph.metadata.vendor name = "Microsoft" $context.graph.metadata.product name = "Azure Active Directory" $context.graph.metadata.entity type = "USER" $context.graph.entity.user.userid = $user $context.graph.entity.user.termination date.seconds > 0 match: $user over 15m outcome: $risk score = max( if ( $auth.metadata.event type = "USER LOGIN", 50) + if ( $context.graph.entity.user.title = "Remote" nocase or $context.graph.entity.user.title = "Temp" nocase or $context.graph.entity.user.title = "Vendor" nocase, 40) + if ( $context.graph.entity.user.title = "Legal" nocase, 10) ) condition: $auth and $context } Suspicious process launch example The following example evaluates UDM event process data against IOC context data stored as an entity context. rule ProcessLaunch { meta: events: $ioc.graph.metadata.vendor name = "ACME" $ioc.graph.metadata.product name = "IOCs" $ioc.graph.metadata.entity type = "FILE" $ioc.graph.entity.file.sha256 = $hash $process.metadata.event type = "PROCESS LAUNCH" $process.principal.hostname = $hostname ( not $process.target.process.file.sha256 = "" and $process.target.process.file.sha256 = $hash ) match: $hash over 15m condition: $ioc and $process } Additional qualifiers for entity context To create an event variable that uses an entity context, you must provide a <source> after the event name.
- Here's an example that illustrates this case. rule ExampleOutcomeRule { ... match: $hostname over <some window> outcome: $risk score = <some logic here> ... } This rule results in the following matches: Detection 1: hostname: test-hostname time window: [t1, t2] risk score: 10 Detection 2: hostname: test-hostname time window: [t1, t2] risk score: 73 Because the match variables and the time window are the same for Detection 1 and Detection 2, these are deduplicated and you will see only one detection, even though the outcome variable, risk score, is different.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- User and Entity Behavior Analytics (UEBA) The Risk Analytics for UEBA category offers prebuilt rule sets to detect potential security threats.
- Only users with global scope can access the risk analytics for UEBA category.
- For more information, see Overview of Risk Analytics for UEBA category .
- Can view and use unscoped list Yes Yes Can run UDM search and dashboard queries with unscoped reference lists Yes Yes Can run UDM search and dashboard queries with scoped reference lists Yes Yes (if there is at least one matching scope between the user and the reference list) For example, a user with scope A can run UDM search queries with reference lists with scopes A, B, and C, but not with reference lists with scopes B and C.

