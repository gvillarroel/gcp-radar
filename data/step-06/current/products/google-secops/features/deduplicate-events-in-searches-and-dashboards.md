---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.764Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Deduplicate events in searches and dashboards"
feature_slug: "deduplicate-events-in-searches-and-dashboards"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
keywords:
  - "deduplicate"
  - "events"
  - "searches"
  - "dashboards"
  - "dedup"
  - "section"
  - "removes"
  - "duplicate"
---

# Deduplicate events in searches and dashboards

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The dedup section removes duplicate events after the match clause in searches and dashboards.

## Extended Definition

The dedup section removes duplicate events after the match clause in searches and dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)

## Supporting Pages

### "Overview of context-aware analytics \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's an example that illustrates this case. rule ExampleOutcomeRule { ... match: $hostname over <some window> outcome: $risk score = <some logic here> ... } This rule results in the following matches: Detection 1: hostname: test-hostname time window: [t1, t2] risk score: 10 Detection 2: hostname: test-hostname time window: [t1, t2] risk score: 73 Because the match variables and the time window are the same for Detection 1 and Detection 2, these are deduplicated and you will see only one detection, even though the outcome variable, risk score, is different.
- Thus, if there are two different detections with the same values for the match variables and time window, but with different values for outcome variables, these will be deduplicated and you will see only one detection.
- This causes detections to be deduplicated, such that one row is returned for each unique set of match variables and time window.
- Invalid. $host over 3h after $e1 condition: $e1 and $e2 } Login example using outcome section The following example uses the outcome section to calculate a risk score for the detection. rule Detection { meta: events: $auth.metadata.event type = "USER LOGIN" $auth.metadata.vendor name = "Acme" $auth.metadata.product name = "Acme SSO" $auth.target.user.userid = $user $auth.metadata.event timestamp.seconds > $context.graph.entity.user.termination date.seconds $context.graph.metadata.vendor name = "Microsoft" $context.graph.metadata.product name = "Azure Active Directory" $context.graph.metadata.entity type = "USER" $context.graph.entity.user.userid = $user $context.graph.entity.user.termination date.seconds > 0 match: $user over 15m outcome: $risk score = max( if ( $auth.metadata.event type = "USER LOGIN", 50) + if ( $context.graph.entity.user.title = "Remote" nocase or $context.graph.entity.user.title = "Temp" nocase or $context.graph.entity.user.title = "Vendor" nocase, 40) + if ( $context.graph.entity.user.title = "Legal" nocase, 10) ) condition: $auth and $context } Suspicious process launch example The following example evaluates UDM event process data against IOC context data stored as an entity context. rule ProcessLaunch { meta: events: $ioc.graph.metadata.vendor name = "ACME" $ioc.graph.metadata.product name = "IOCs" $ioc.graph.metadata.entity type = "FILE" $ioc.graph.entity.file.sha256 = $hash $process.metadata.event type = "PROCESS LAUNCH" $process.principal.hostname = $hostname ( not $process.target.process.file.sha256 = "" and $process.target.process.file.sha256 = $hash ) match: $hash over 15m condition: $ioc and $process } Additional qualifiers for entity context To create an event variable that uses an entity context, you must provide a <source> after the event name.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- In the Events columns tab, select fields from the following collapsible sections: Quick fields : Use quick fields to quickly add the most relevant UDM field for that data type.
- Factors that limit search results When conducting searches, the following factors can limit the number of results returned: Maximum search results : 1M events.
- Manage the set of columns in the Events table This section describes how to manage the set of columns in the Events table.

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Google Security Operations SIEM provides the following default dashboards: Main Cloud Detection and Response Context Aware Detections - Risk Health Hub Data Ingestion and Health IoC Matches Rule Detections User Sign In Overview Main dashboard The Main dashboard displays information about the status of the Google Security Operations SIEM data ingestion system.
- You can view the following visualizations in the Data Ingestion and Health dashboard: The Global Time Filter configured on the dashboard applies to the following visualizations: Ingested Events Count : displays the total number of ingested events.
- Dashboards overview Supported in: Google secops SIEM Caution: For all Google Security Operations instances provisioned after August 06, 2025, you can no longer use Looker to create new dashboards in Google SecOps SIEM or Google SecOps.
- Ingestion - Events by Log Type : displays events based on log type—sortable by column: Log Type , Ingested Throughput , Ingested Logs , Normalized Events , Parsing Errors , Validation Errors , Indexing Errors .

