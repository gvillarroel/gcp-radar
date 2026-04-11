---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.976Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Gemini YARA-L rule generation"
feature_slug: "gemini-yara-l-rule-generation"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini"
keywords:
  - "gemini"
  - "yara"
  - "rule"
  - "generation"
  - "can"
  - "create"
  - "new"
  - "rules"
---

# Gemini YARA-L rule generation

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Gemini can create new YARA-L rules from the UDM search queries it generates.

## Extended Definition

Gemini can create new YARA-L rules from the UDM search queries it generates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Rule generation : Gemini can create new YARA-L rules from the UDM search queries it generates.
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- You can create or import a data table to your Google SecOps account using the Google SecOps UI, the data tables API, or by using a YARA-L query in rules.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Rule generation : Gemini can create new YARA-L rules from the UDM search queries it generates.
- September 09, 2024 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation September 06, 2024 Change Burst limits will be rolling out over the next 90 days.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- You can create or import a data table to your Google SecOps account using the Google SecOps UI, the data tables API, or by using a YARA-L query in rules.

### "Generate a YARA-L 2.0 rule using Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, using the previous rule prompt, Gemini could generate the following rule: rule gemini rule { meta: author = "Gemini in Google SecOps" description = "Prompt: Create a rule to count how many DNS responses were truncated per principal asset host." events: $e.metadata.event type = "NETWORK DNS" $e.network.dns.response = true $e.network.dns.truncated = true $ph principal asset hostname = $e.principal.asset.hostname match: $ph principal asset hostname over 1h outcome: $event count = count($e.metadata.id) condition: $e } To activate the rule, click Save New Rule .
- Generate a YARA-L 2.0 rule using Gemini Supported in: Google secops SIEM On the Gemini pane, use a natural language prompt to generate a rule (for example, Create a rule to count how many DNS responses were truncated per principal asset host. ), and then click Enter .
- You can only create single-event rules using this feature.
- Click Open in rule editor to view and modify the new rule in the Rules Editor.

