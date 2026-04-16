---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.841Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Symantec Event Export feed"
feature_slug: "symantec-event-export-feed"
latest_feature_date: "2024-07-15"
deprecation_date: "2024-07-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "symantec"
  - "event"
  - "export"
  - "feed"
  - "third"
  - "party"
  - "has"
  - "been"
---

# Symantec Event Export feed

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The Symantec Event Export third-party API feed has been discontinued; deprecated on 2024-07-15.

## Extended Definition

The Symantec Event Export third-party API feed has been discontinued; deprecated on 2024-07-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Symantec Event Export API feed July 11, 2024 October 01, 2024 The third-party API feed Symantec Event Export has been discontinued due to the deprecation of Symantec Event Export API .
- Use the Cloud Monitoring integration which provides more flexibility in alert logic, alert workflow, and integration with third-party ticketing systems.
- For more information, see Add a feed and Adding a Data Bucket event stream type .
- If any of your existing feeds for the MICROSOFT GRAPH ALERT log type are pointing towards the legacy alerts endpoint, you must update the API Full Path in your feed configuration to switch to the alerts v2 endpoint instead, as described in How to set up Microsoft Graph API alerts .

### "Applied Threat Intelligence Fusion Feed overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- It has also leveraged HTML smuggling to distribute ZIP files containing IMG files that contain LNK files and malware payloads.", "alias": [ { "name": "TA570 (Proofpoint)" } ], "first reference time": { "seconds": "1459085092" }, "last reference time": { "seconds": "1687392000" }, "industries affected": [ "Aerospace & Defense", "Agriculture", "Automotive", "Chemicals & Materials", "Civil Society & Non-Profits", "Construction & Engineering", "Education", "Energy & Utilities", "Financial Services", "Governments", "Healthcare", "Hospitality", "Insurance", "Legal & Professional Services", "Manufacturing", "Media & Entertainment", "Oil & Gas", "Pharmaceuticals", "Retail", "Technology", "Telecommunications", "Transportation" ] } ], "campaigns": [ "CAMP.23.007" ], "last updated time": { "seconds": "1695165683", "nanos": 48000000 }, "verdict info": [ { "source provider": "Mandiant Automated Intel", "confidence score": 75 }, { "verdict type": "ANALYST VERDICT", "confidence score": 75 }, { "source count": 91, "response count": 1, "verdict type": "PROVIDER ML VERDICT", "malicious count": 1, "ioc stats": [ { "ioc stats type": "MANDIANT SOURCES", "second level source": "Knowledge Graph", "quality": "HIGH CONFIDENCE", "malicious count": 1, "response count": 1, "source count": 8 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Malware Analysis", "source count": 4 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Spam Monitoring", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "second level source": "Crowdsourced Threat Analysis", "source count": 71 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "MISP", "second level source": "Trusted Software List", "source count": 3 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Digitalside It Hashes", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Tds Harvester", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Urlhaus", "source count": 1 } ] }, { "source provider": "Mandiant Analyst Intel", "confidence score": 75, "pwn": true, "pwn first tagged time": { "seconds": "1683911695" } } ], "last discovered time": { "seconds": "1683909854" } } ], "source type": "GLOBAL CONTEXT", "source labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... { "key": "has pwn", "value": "2023-05-12T17:14:55.000+0000" } ], "event metadata": { "id": "\\000\\000\\000\\000\\034Z\\n\\2545\\237\\367\\353\\271\\357\\302\\215t\\330\\275\\237\\000\\000\\000\\000\\007\\000\\000\\000\\206\\000\\000\\000", "base labels": { "log types": [ "MANDIANT FUSION IOC" ], "allow scoped access": true } } }, "entity": { "file": { "sha256": "000bc5900dc7a32851e380f418cc178ff0910242ee0561ae37ff424e6d3ec64a", "md5": "f0095b0a7480c826095d9ffc9d5d2d8f", "sha1": "8101315b9fbbf6a72bddbfe64837d246f4c8b419" }, "labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... ] } } Complex conditions To use multiple fields in a context entity, you can combine multiple outcome variables to create more complex conditional logic.
- Condition section The condition section ensures that e1 , context graph , and matched conditions exist and or match the specified condition. condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 Complete YARA-L rule At this point the rule is ready for use and should look like the following: rule fusion feed example principal process file md5 { meta: rule name = "File Hash - Applied Threat Intelligence" description = "Matches file hashes against the Applied Threat Intelligence Fusion Feed." events: // Filter graph $context graph.graph.metadata.product name = "MANDIANT FUSION IOC" $context graph.graph.metadata.vendor name = "MANDIANT FUSION IOC" $context graph.graph.metadata.entity type = "FILE" $context graph.graph.metadata.source type = "GLOBAL CONTEXT" // Do join $ioc = $context graph.graph.entity.file.md5 $ioc = $e1.principal.process.file.md5 match: $ioc over 1h outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 } ATI Fusion Feed context entity fields You can use many fields from the ATI Fusion Feed in rules.
- For example: // Value will be 1 if threat.associations.type = "MALWARE" // Wrapper max function required for multi-event rules $is attributed malware = max(if($entity context.graph.metadata.threat.associations.type = "MALWARE", 1, 0)) // Value will be 1 if threat.associations.type = "THREAT ACTOR" $is attributed actor = max(if($entity context.graph.metadata.threat.associations.type = "THREAT ACTOR", 1,0)) // Value will be the sum of the $is attributed malware $is attributed malware and $is attributed actor $is attributed = if($is attributed malware = 1, 1, 0) + if($is attributed actor = 1, 1, 0) // If the value of $is attributed is greater than 1, this indicates the indicator has been attributed at least once with the type "MALWARE" or "THREAT ACTOR" In this example, two intermediary outcome variables, is attributed malware and is attributed actor , are combined in an outcome variable is attributed .
- The following example shows a Fusion Feed context entity as an initial reference point: { "metadata": { "product entity id": "md5--147d19e6-cdae-57bb-b9a1-a8676265fa4c", "collected timestamp": { "seconds": "1695165683", "nanos": 48000000 }, "vendor name": "MANDIANT FUSION IOC", "product name": "MANDIANT FUSION IOC", "product version": "1710194393", "entity type": "FILE", "creation timestamp": { "seconds": "1710201600" }, "interval": { "start time": { "seconds": "1" }, "end time": { "seconds": "253402300799" } }, "threat": [ { "category details": [ "A phishing email message or the relevant headers from a phishing email." ], "severity details": "HIGH", "confidence details": "75", "risk score": 75, "first discovered time": { "seconds": "1683294326" }, "associations": [ { "id": "threat-actor--3e5e6bdf-5b4e-5166-84fa-83045e637f23", "type": "THREAT ACTOR", "name": "UNC2633" }, { "id": "threat-actor--3e5e6bdf-5b4e-5166-84fa-83045e637f23", "country code": [ "unknown" ], "type": "THREAT ACTOR", "name": "UNC2633", "description": "UNC2633 is a distribution threat cluster that delivers emails containing malicious attachments or links that lead to malware payloads, primarily QAKBOT, but also SNOWCONE.GZIPLOADER (which leads to ICEDID) and MATANBUCHUS.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Sample ingress rule - ingressFrom: identities: - serviceAccount:8911409095528497-0-account@partnercontent.gserviceaccount.com sources: - accessLevel: " " ingressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.objects.list - method: google.storage.objects.get - method: google.storage.objects.delete resources: - projects/PROJECT ID Egress rules The following egress rules must be allowed for feeds using GOOGLE CLOUD STORAGE V2 , GOOGLE CLOUD STORAGE EVENT DRIVEN , AMAZON S3 V2 , AMAZON SQS V2 , and AZURE BLOBSTORE V2 to operate when VPCSC is enabled.
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.

