---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.546Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Auto Extraction"
feature_slug: "auto-extraction"
latest_feature_date: "2025-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "auto"
  - "extraction"
  - "lets"
  - "raw"
  - "log"
  - "fields"
  - "used"
  - "directly"
---

# Auto Extraction

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs; Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs.

## Extended Definition

Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs; Auto Extraction lets raw log fields be used directly in search, detection rules, and Native Dashboards for JSON and XML logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Understand suggestion ranking The editor organizes suggestions into three distinct categories to help you find fields quickly: Recently used fields : The top seven suggestions are based on fields you have used recently that match your typed field.
- Grouped fields can also be used in combination with regular UDM fields as shown in the following example: ip = "5.6.7.8" AND metadata.event type = "NETWORK CONNECTION" Grouped fields have a separate section in Aggregations .
- Rank recently used fields first : Displays your most recently used fields at the top of the list Suggest immediate child fields : Completes nested fields incrementally, one child node at a time.
- This lets you investigate large datasets directly in the web interface without exporting results.

### "Applied Threat Intelligence Fusion Feed overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- It has also leveraged HTML smuggling to distribute ZIP files containing IMG files that contain LNK files and malware payloads.", "alias": [ { "name": "TA570 (Proofpoint)" } ], "first reference time": { "seconds": "1459085092" }, "last reference time": { "seconds": "1687392000" }, "industries affected": [ "Aerospace & Defense", "Agriculture", "Automotive", "Chemicals & Materials", "Civil Society & Non-Profits", "Construction & Engineering", "Education", "Energy & Utilities", "Financial Services", "Governments", "Healthcare", "Hospitality", "Insurance", "Legal & Professional Services", "Manufacturing", "Media & Entertainment", "Oil & Gas", "Pharmaceuticals", "Retail", "Technology", "Telecommunications", "Transportation" ] } ], "campaigns": [ "CAMP.23.007" ], "last updated time": { "seconds": "1695165683", "nanos": 48000000 }, "verdict info": [ { "source provider": "Mandiant Automated Intel", "confidence score": 75 }, { "verdict type": "ANALYST VERDICT", "confidence score": 75 }, { "source count": 91, "response count": 1, "verdict type": "PROVIDER ML VERDICT", "malicious count": 1, "ioc stats": [ { "ioc stats type": "MANDIANT SOURCES", "second level source": "Knowledge Graph", "quality": "HIGH CONFIDENCE", "malicious count": 1, "response count": 1, "source count": 8 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Malware Analysis", "source count": 4 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Spam Monitoring", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "second level source": "Crowdsourced Threat Analysis", "source count": 71 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "MISP", "second level source": "Trusted Software List", "source count": 3 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Digitalside It Hashes", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Tds Harvester", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Urlhaus", "source count": 1 } ] }, { "source provider": "Mandiant Analyst Intel", "confidence score": 75, "pwn": true, "pwn first tagged time": { "seconds": "1683911695" } } ], "last discovered time": { "seconds": "1683909854" } } ], "source type": "GLOBAL CONTEXT", "source labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... { "key": "has pwn", "value": "2023-05-12T17:14:55.000+0000" } ], "event metadata": { "id": "\\000\\000\\000\\000\\034Z\\n\\2545\\237\\367\\353\\271\\357\\302\\215t\\330\\275\\237\\000\\000\\000\\000\\007\\000\\000\\000\\206\\000\\000\\000", "base labels": { "log types": [ "MANDIANT FUSION IOC" ], "allow scoped access": true } } }, "entity": { "file": { "sha256": "000bc5900dc7a32851e380f418cc178ff0910242ee0561ae37ff424e6d3ec64a", "md5": "f0095b0a7480c826095d9ffc9d5d2d8f", "sha1": "8101315b9fbbf6a72bddbfe64837d246f4c8b419" }, "labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... ] } } Complex conditions To use multiple fields in a context entity, you can combine multiple outcome variables to create more complex conditional logic.
- Condition section The condition section ensures that e1 , context graph , and matched conditions exist and or match the specified condition. condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 Complete YARA-L rule At this point the rule is ready for use and should look like the following: rule fusion feed example principal process file md5 { meta: rule name = "File Hash - Applied Threat Intelligence" description = "Matches file hashes against the Applied Threat Intelligence Fusion Feed." events: // Filter graph $context graph.graph.metadata.product name = "MANDIANT FUSION IOC" $context graph.graph.metadata.vendor name = "MANDIANT FUSION IOC" $context graph.graph.metadata.entity type = "FILE" $context graph.graph.metadata.source type = "GLOBAL CONTEXT" // Do join $ioc = $context graph.graph.entity.file.md5 $ioc = $e1.principal.process.file.md5 match: $ioc over 1h outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 } ATI Fusion Feed context entity fields You can use many fields from the ATI Fusion Feed in rules.
- For example: Entity field 1 Values Entity field 2 Values metadata.threat.verdict info.source provider Mandiant Global Intel metadata.threat.verdict info.global hits count Integer metadata.threat.verdict info.source provider Mandiant Global Intel metadata.threat.verdict info.global customer count Integer metadata.threat.verdict info.source provider Mandiant Analyst Intel metadata.threat.verdict info.confidence score Integer metadata.threat.verdict info.source provider Mandiant Automated Intel metadata.threat.verdict info.confidence score Integer In the outcome section of a YARA-L rule, you can access a value designated by a specific key using the following command: $hit count = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Global Intel", $context graph.graph.metadata.threat.verdict info.global hits count, 0)) Examining entity matches in Google Security Operations helps you gain a comprehensive view of the data, revealing additional fields that can be valuable in assessing the priority and context of an indicator alert.
- The following fields are relevant for prioritizing indicators: Entity field Possible values metadata.threat.associations.type MALWARE , THREAT ACTOR metadata.threat.associations.name Threat association name metadata.threat.verdict info.pwn TRUE , FALSE metadata.threat.verdict info.pwn first tagged time.seconds Timestamp (seconds) Some fields have key-value pairs that need to be used in combination to access the correct values.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- The following table details which specific UDM fields are used for automatic IOC matching based on your package: Enterprise package Enterprise Plus package about.file network.dns.answers network.dns.questions network.dns.questions principal.administrative domain principal.asset principal.ip principal.process.file principal.process.file principal.process.parent process.file principal.process.parent process.file security result.about.file security result.about.file src.file src.file src.ip target.asset.ip target.domain.name target.file target.file target.hostname target.hostname target.ip target.ip target.process.file target.process.file target.process.parent process.file Understanding which UDM fields are used helps ensure your data parsers correctly map raw log fields to the appropriate UDM fields for effective IOC matching.
- UDM fields used for matching The automated IOC matching engine primarily focuses on matching against domain names and IP addresses found in UDM events.
- The following options are available: Refresh now No auto refresh (default) Refresh every 5 minutes Refresh every 15 minutes Refresh every hour Alerts generated by composite detections Alerts can be generated by composite detections , which use composite rules that consume outputs (detections) from other rules combined with events, metrics, or entity risk signals.
- To specify the date and time range using pre-set options, click the Range tab and select one of the following options: Today Last Hour Last 12 Hours Last Day Last Week Last 2 Weeks Last Month Last 2 Months Custom : select the start and end date on the calendar, and then click the Start time and End time fields to select the time.

