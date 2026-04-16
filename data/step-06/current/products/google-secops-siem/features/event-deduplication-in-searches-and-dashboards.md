---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.541Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Event deduplication in searches and dashboards"
feature_slug: "event-deduplication-in-searches-and-dashboards"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics"
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
keywords:
  - "event"
  - "deduplication"
  - "searches"
  - "dashboards"
  - "adds"
  - "dedup"
  - "section"
  - "remove"
---

# Event deduplication in searches and dashboards

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Adds a dedup section to remove duplicate events after the match clause in searches and dashboards.

## Extended Definition

Adds a dedup section to remove duplicate events after the match clause in searches and dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Grouped fields can also be used in combination with regular UDM fields as shown in the following example: ip = "5.6.7.8" AND metadata.event type = "NETWORK CONNECTION" Grouped fields have a separate section in Aggregations .
- In the Events columns tab, select fields from the following collapsible sections: Quick fields : Use quick fields to quickly add the most relevant UDM field for that data type.
- Factors that limit search results When conducting searches, the following factors can limit the number of results returned: Maximum search results : 1M events.

### "Overview of context-aware analytics \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Outcome section and detection deduplication / detection grouping For rules with a match section, recall that detections are "grouped by" the match variables.
- Invalid. $host over 3h after $e1 condition: $e1 and $e2 } Login example using outcome section The following example uses the outcome section to calculate a risk score for the detection. rule Detection { meta: events: $auth.metadata.event type = "USER LOGIN" $auth.metadata.vendor name = "Acme" $auth.metadata.product name = "Acme SSO" $auth.target.user.userid = $user $auth.metadata.event timestamp.seconds > $context.graph.entity.user.termination date.seconds $context.graph.metadata.vendor name = "Microsoft" $context.graph.metadata.product name = "Azure Active Directory" $context.graph.metadata.entity type = "USER" $context.graph.entity.user.userid = $user $context.graph.entity.user.termination date.seconds > 0 match: $user over 15m outcome: $risk score = max( if ( $auth.metadata.event type = "USER LOGIN", 50) + if ( $context.graph.entity.user.title = "Remote" nocase or $context.graph.entity.user.title = "Temp" nocase or $context.graph.entity.user.title = "Vendor" nocase, 40) + if ( $context.graph.entity.user.title = "Legal" nocase, 10) ) condition: $auth and $context } Suspicious process launch example The following example evaluates UDM event process data against IOC context data stored as an entity context. rule ProcessLaunch { meta: events: $ioc.graph.metadata.vendor name = "ACME" $ioc.graph.metadata.product name = "IOCs" $ioc.graph.metadata.entity type = "FILE" $ioc.graph.entity.file.sha256 = $hash $process.metadata.event type = "PROCESS LAUNCH" $process.principal.hostname = $hostname ( not $process.target.process.file.sha256 = "" and $process.target.process.file.sha256 = $hash ) match: $hash over 15m condition: $ioc and $process } Additional qualifiers for entity context To create an event variable that uses an entity context, you must provide a <source> after the event name.
- The outcome variables are ignored when doing this deduplication.
- It is looking for times when someone with administrator privilege attempted to sign in to or log out of the system. rule LoginLogout { meta: events: ($log inout.metadata.event type = "USER LOGIN" or $log inout.metadata.event type = "USER LOGOUT") $log inout.principal.user.user display name = $user $context.graph.entity.user.user display name = $user $context.graph.entity.resource.attribute.roles.type = "ADMINISTRATOR" match: $user over 2m condition: $log inout and $context } Sliding window example The following sliding window example is valid. rule Detection { meta: events: $e1.graph.entity.hostname = $host $e2.udm.principal.hostname = $host match: // Using e2 (a UDM event) as a pivot. $host over 3h after $e2 condition: $e1 and $e2 } Invalid sliding window example The following sliding window example is invalid.

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- You can omit events where no match occurs by excluding the empty string, which is especially important when you are using re.capture() with an inequality: // Exclude the empty string to omit events where no match occurs. "" != re.capture($e.network.email.from , "@(. )") // Exclude a specific string with an inequality. "google.com" != re.capture($e.network.email.from , "@(. )") re.capture all Supported in: Rules Search Dashboards re.capture all( stringText , regex ) Description Use the re.capture all() function to extract every non-overlapping match of a regular expression from a string.
- You can use these functions in the following parts of a YARA-L query: events section BOOL CLAUSE of a conditional in the outcome section arrays.concat Supported in: Rules Search arrays.concat(string array, string array) Description Returns a new string array by copying elements from original string arrays.
- You use these patterns in the events section to filter data or the outcome section to enrich your final detection alerts.
- Note: For search, you can use grouped fields in the events section, but not in the match and outcome sections.

