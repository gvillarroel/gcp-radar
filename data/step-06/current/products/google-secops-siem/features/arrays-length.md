---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.649Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "arrays.length()"
feature_slug: "arrays-length"
latest_feature_date: "2023-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/yara-l/functions"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "arrays"
  - "length"
  - "yara"
  - "now"
  - "includes"
  - "return"
  - "number"
  - "elements"
---

# arrays.length()

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

YARA-L 2.0 now includes arrays.length() to return the number of elements in a repeated field.

## Extended Definition

YARA-L 2.0 now includes arrays.length() to return the number of elements in a repeated field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Functions \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/yara-l/functions](https://docs.cloud.google.com/chronicle/docs/yara-l/functions)
- Source ID: `site-docs-reference-required-1`
- Final score: 354
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Param data types ARRAY STRINGS , STRING Return type STRING Code samples Here are some examples of how to use the function: Example 1 This example joins an array with non-null elements and a delimiter. arrays.join string(["foo", "bar"], ",") = "foo,bar" Example 2 This example joins an array with a null element and a delimiter. arrays.join string(["foo", NULL, "bar"], ",") = "foo,bar" Example 3 This example joins an array with non-null elements and no delimiter. arrays.join string(["foo", "bar"]) = "foobar" arrays.length Supported in: Rules Search arrays.length(repeatedField) Description Returns the number of repeated field elements.
- Param data types LIST Return type NUMBER Code samples Example 1 Returns the number of repeated field elements. arrays.length($e.principal.ip) = 2 Example 2 If multiple repeated fields are along the path, returns the total number of repeated field elements. arrays.length($e.intermediary.ip) = 3 arrays.max Supported in: Rules Search arrays.max(array of ints or floats) Description Returns the greatest element in an array or zero if the array is empty.
- You can use these functions in the following parts of a YARA-L query: events section BOOL CLAUSE of a conditional in the outcome section arrays.concat Supported in: Rules Search arrays.concat(string array, string array) Description Returns a new string array by copying elements from original string arrays.
- Param data types ARRAY STRINGS ARRAY INTS ARRAY FLOATS Return type INT Code samples Example 1 This example uses a string array that contains two elements. arrays.size(["test1", "test2"]) = 2 Example 2 This example uses an int array that contains 3 elements. arrays.size([1, 2, 3]) = 3 Example 3 This example uses a float array thats contains 1 elements arrays.size([1.200000]) = 1 Example 4 This example uses an empty array. arrays.size([]) = 0 bytes.to base64 Supported in: Rules Search bytes.to base64(bytes, optional default string) Description Function converts a bytes value to a base64 encoded string .

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- If your Group by value is one of the IP fields, you have the following additional Transform options: (IP) CIDR Prefix length in bits : You can specify 1 through 32 for IPv4 addresses.
- You can summarize by the following options: sum count count distinct average stddev min max Specify a value of Event count to return the number of events identified for this particular search and Pivot Table.
- Factors that limit search results When conducting searches, the following factors can limit the number of results returned: Maximum search results : 1M events.

### "Applied Threat Intelligence Fusion Feed overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Condition section The condition section ensures that e1 , context graph , and matched conditions exist and or match the specified condition. condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 Complete YARA-L rule At this point the rule is ready for use and should look like the following: rule fusion feed example principal process file md5 { meta: rule name = "File Hash - Applied Threat Intelligence" description = "Matches file hashes against the Applied Threat Intelligence Fusion Feed." events: // Filter graph $context graph.graph.metadata.product name = "MANDIANT FUSION IOC" $context graph.graph.metadata.vendor name = "MANDIANT FUSION IOC" $context graph.graph.metadata.entity type = "FILE" $context graph.graph.metadata.source type = "GLOBAL CONTEXT" // Do join $ioc = $context graph.graph.entity.file.md5 $ioc = $e1.principal.process.file.md5 match: $ioc over 1h outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 } ATI Fusion Feed context entity fields You can use many fields from the ATI Fusion Feed in rules.
- This can all be done in the outcome section of the rule. outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) In the outcome section of the YARA-L rule, the confidence score is extracted using an if statement wrapped in a max function.
- Flexible joins in YARA-L rule To reduce the number of rules required, you can use flexible joins between IoCs to connect multiple UDM fields to a context entity.
- For example: Entity field 1 Values Entity field 2 Values metadata.threat.verdict info.source provider Mandiant Global Intel metadata.threat.verdict info.global hits count Integer metadata.threat.verdict info.source provider Mandiant Global Intel metadata.threat.verdict info.global customer count Integer metadata.threat.verdict info.source provider Mandiant Analyst Intel metadata.threat.verdict info.confidence score Integer metadata.threat.verdict info.source provider Mandiant Automated Intel metadata.threat.verdict info.confidence score Integer In the outcome section of a YARA-L rule, you can access a value designated by a specific key using the following command: $hit count = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Global Intel", $context graph.graph.metadata.threat.verdict info.global hits count, 0)) Examining entity matches in Google Security Operations helps you gain a comprehensive view of the data, revealing additional fields that can be valuable in assessing the priority and context of an indicator alert.

