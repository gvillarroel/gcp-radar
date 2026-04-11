---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.508Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "YARA-L 2.0 array indexing on repeated fields"
feature_slug: "yara-l-2-0-array-indexing-on-repeated-fields"
latest_feature_date: "2023-05-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed"
keywords:
  - "yara"
  - "array"
  - "indexing"
  - "on"
  - "repeated"
  - "fields"
  - "now"
  - "supports"
---

# YARA-L 2.0 array indexing on repeated fields

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

YARA-L 2.0 now supports bracket notation to access elements in repeated fields by index.

## Extended Definition

YARA-L 2.0 now supports bracket notation to access elements in repeated fields by index.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- You can now perform array indexing on repeated fields using bracket notation.
- September 09, 2024 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation September 06, 2024 Change Burst limits will be rolling out over the next 90 days.
- April 27, 2022 Change Chronicle now supports the following functions in Detection Engine rules: strings.concat(a, b) strings.to lower(stringText) strings.to upper(stringText) strings.base64 decode(encodedString) re.capture(stringText, regex) re.replace(stringText, replaceRegex, replacementText) timestamp.get minute(unix seconds [, time zone]) timestamp.get hour(unix seconds [, time zone]) timestamp.get day of week(unix seconds [, time zone]) timestamp.get week(unix seconds [, time zone]) timestamp.current seconds() math.abs(intExpression) For more information about these functions, see YARA-L 2.0 language syntax.
- May 14, 2024 Change Google SecOps now supports the following functions in Detection Engine rules: fingerprint sample rate For more information about these functions, see YARA-L 2.0 language syntax .

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Detections have the same format as those returned by the ListDetections and GetDetection methods, except that the following fields are not returned since the rule is not persisted by the test: detection.ruleId detection.ruleVersion detection.alertState detection.urlBackToProduct createdTime Errors have the same format as those returned by the ListErrors and GetError methods, except that the following fields are not returned since the rule is not persisted by the test: errorId errorTime ruleExecution.ruleId ruleExecution.ruleVersion Sample response [{ "error": { "category": "RULES EXECUTION ERROR", "ruleExecution": { "windowStartTime": "2021-01-01T18:00:00Z", "windowEndTime": "2021-01-01T20:00:00Z" } } } , { "detection": { "type": "RULE DETECTION", "detection": [ { "ruleName": "singleEventRule2", "ruleType": "SINGLE EVENT" } ], "id": "de 13503ebe-b96b-7b63-bb89-0e6d218628c9", "timeWindow": { "startTime": "2021-01-03T03:17:49.781746Z", "endTime": "2021-01-03T03:17:49.781746Z" }, "collectionElements": [ { "references": [ { "event": { "metadata": { "eventTimestamp": "2021-01-03T03:17:49.781746Z", "collectedTimestamp": "2021-01-03T03:17:49.791689822Z", "eventType": "NETWORK DNS", "productName": "DNS pcap", "ingestedTimestamp": "2021-01-03T03:17:52.016198Z" }, "principal": { "ip": [ "127.0.0.1" ] }, "target": { "ip": [ "127.0.0.1" ] }, "securityResult": [ { "action": [ "UNKNOWN ACTION" ] } ], "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "altostrat.com", "type": 1, "class": 1 } ], "id": 12345, "recursionDesired": true, } } } } ], "label": "e" } ], "detectionTime": "2021-01-01T03:17:49.781746Z" } } ] UnarchiveRule Unarchive the specified rule.
- Sample request (specific version of a rule) https://backstory.googleapis.com/v2/detect/rules/ru 1f54ab4b-e523-48f7-ae25- 271b5ea8337d@v 1602631093 146879000/detections?page size=2 Sample request (latest version of a rule) https://backstory.googleapis.com/v2/detect/rules/ru 1f54ab4b-e523-48f7-ae25- 271b5ea8337d/detections?page size=2 Sample request (all versions of a rule) https://backstory.googleapis.com/v2/detect/rules/ru 1f54ab4b-e523-48f7-ae25- 271b5ea8337d@-/detections?page size=100 Sample request (all versions of all rules, ordered by CreateTimestamp) https://backstory.googleapis.com/v2/detect/rules/-/detections? page size=100&list basis=CREATED TIME Response Response fields Field Name Type detections array Array of detections in the same format defined for GetDetection . nextPageToken string Page token.
- Sample request https://backstory.googleapis.com/v2/detect/curatedRules/ur mal CobaltStrike StartW/detections?page size=100 Sample request (detections ordered by CreateTimestamp) https://backstory.googleapis.com/v2/detect/curatedRules/ur mal CobaltStrike StartW/detections? page size=100&list basis=CREATED TIME Response Response fields Field Name Type curatedRuleDetections array Array of detections in the below format . nextPageToken string Page token.
- Sample request https://backstory.googleapis.com/v2/health/errors?pageSize=2&ruleFilter.versionId= ru d27d2fdc-010a-417a-a773-7f886b3d08c7@v 1597880575 633631000&start time=2020-10-31T00:00:00.00Z&end time= 2020-11-01T00:00:00.0000Z Response Response fields Field Name Type errors array Array of errors in the same format defined for GetError . nextPageToken string Page token.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- May 14, 2024 Change Google SecOps now supports the following functions in Detection Engine rules: fingerprint sample rate For more information about these functions, see YARA-L 2.0 language syntax .
- March 19, 2025 Announcement The following parser documentation is now available: Collect AWS Config logs Collect AWS Elastic Load Balancing logs Collect AWS Route 53 logs Collect AWS S3 server access logs Collect AWS WAF logs Collect Azure Application Gateway logs Collect Carbon Black App Control logs Collect Carbon Black EDR logs Collect Delinea Secret Server logs Collect Radware WAF logs Collect AWS Aurora logs Collect AWS CloudWatch logs Collect AWS Control Tower logs Collect AWS Elastic MapReduce logs Collect AWS Key Management Service logs Collect AWS Macie logs Collect AWS Network Firewall logs Collect AWS Security Hub logs Collect AWS Session Manager logs Collect Zscaler DLP logs Collect Zscaler Tunnel logs Collect Zscaler VPN logs Collect Zscaler ZPA Audit logs Collect Zscaler ZPA logs Collect Zscaler CASB logs Collect Azure AD Sign-In logs Collect Azure API Management logs Collect Azure APP Service logs Collect Azure Firewall logs Collect Azure VPN logs Collect AWS VPN logs Collect Azure Storage Audit logs Collect Azure WAF logs Collect Cloud IoT logs Collect Cloud Run logs Collect Cloud Compute logs Collect CrowdStrike Falcon Stream logs Collect SentinelOne Deep Visibility logs Collect Cloud VPC Flow Logs Collect Cloud Compute context logs Collect Cloud Intrusion Detection System (Cloud IDS) logs Collect Cloud Next Generation Firewall Enterprise logs Collect Cloud Storage context logs Collect Cloud Identity and Access Management (IAM) Analysis logs Collect Cloud Identity Devices logs Collect Cloud Identity Device Users logs Collect Cloud Security Command Center Error logs Collect Cloud Security Command Center Observation logs Collect Cloud Security Command Center Posture Violation logs Collect Cloud Security Command Center Toxic Combination logs Collect Cloud Security Command Center Unspecified logs Collect Cloud Secure Web Proxy logs March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Absolute Secure Endpoint logs Collect AIDE (Advanced Intrusion Detection Environment) logs Collect Akamai Enterprise Application Access logs Collect Apache Hadoop logs Collect Armis Vulnerabilities logs Collect Array Networks SSL VPN logs Collect Aruba IPS logs Collect Atlassian Confluence logs Collect Cisco AMP for Endpoints logs Collect Cisco APIC logs Collect Cisco Application Centric Infrastructure (ACI) logs Collect Cisco CallManager logs Collect Cisco CloudLock CASB logs Collect Cisco DNA Center Platform logs Collect Cisco eStreamer logs Collect Cribl Stream logs Collect CrowdStrike FileVantage logs Collect CrowdStrike IDP Services logs Collect Cynet 360 AutoXDR logs Collect Digital Shadows SearchLight logs Collect Duo Telephony logs Collect Edgio WAF logs Collect Elastic Auditbeat logs Collect Elastic Packet Beats logs Collect Elasticsearch logs Collect Entrust nShield HSM audit logs Collect Imperva Advanced Bot Protection logs Collect Imperva Attack Analytics logs Collect Imperva Audit Trail logs Collect Imperva CEF logs Collect Imperva Data Risk Analytics (DRA) logs Collect Imperva Database logs Collect Imperva FlexProtect logs Collect Imperva SecureSphere Management logs Collect Kiteworks (formally Accellion) logs Collect Proofpoint Emerging Threats Pro IOC logs Collect ServiceNow audit logs Collect Team Cymru Scout Threat Intelligence data Collect URLScan IO logs Collect Uptycs EDR logs Collect VanDyke VShell SFTP logs Collect Zendesk CRM logs Collect ZeroFox Platform logs November 10, 2025 Feature Nested if You can now use if statements in both the outcome and events sections and also within the then else clauses of another if statement.

### "Applied Threat Intelligence Fusion Feed overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It has also leveraged HTML smuggling to distribute ZIP files containing IMG files that contain LNK files and malware payloads.", "alias": [ { "name": "TA570 (Proofpoint)" } ], "first reference time": { "seconds": "1459085092" }, "last reference time": { "seconds": "1687392000" }, "industries affected": [ "Aerospace & Defense", "Agriculture", "Automotive", "Chemicals & Materials", "Civil Society & Non-Profits", "Construction & Engineering", "Education", "Energy & Utilities", "Financial Services", "Governments", "Healthcare", "Hospitality", "Insurance", "Legal & Professional Services", "Manufacturing", "Media & Entertainment", "Oil & Gas", "Pharmaceuticals", "Retail", "Technology", "Telecommunications", "Transportation" ] } ], "campaigns": [ "CAMP.23.007" ], "last updated time": { "seconds": "1695165683", "nanos": 48000000 }, "verdict info": [ { "source provider": "Mandiant Automated Intel", "confidence score": 75 }, { "verdict type": "ANALYST VERDICT", "confidence score": 75 }, { "source count": 91, "response count": 1, "verdict type": "PROVIDER ML VERDICT", "malicious count": 1, "ioc stats": [ { "ioc stats type": "MANDIANT SOURCES", "second level source": "Knowledge Graph", "quality": "HIGH CONFIDENCE", "malicious count": 1, "response count": 1, "source count": 8 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Malware Analysis", "source count": 4 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Spam Monitoring", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "second level source": "Crowdsourced Threat Analysis", "source count": 71 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "MISP", "second level source": "Trusted Software List", "source count": 3 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Digitalside It Hashes", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Tds Harvester", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Urlhaus", "source count": 1 } ] }, { "source provider": "Mandiant Analyst Intel", "confidence score": 75, "pwn": true, "pwn first tagged time": { "seconds": "1683911695" } } ], "last discovered time": { "seconds": "1683909854" } } ], "source type": "GLOBAL CONTEXT", "source labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... { "key": "has pwn", "value": "2023-05-12T17:14:55.000+0000" } ], "event metadata": { "id": "\\000\\000\\000\\000\\034Z\\n\\2545\\237\\367\\353\\271\\357\\302\\215t\\330\\275\\237\\000\\000\\000\\000\\007\\000\\000\\000\\206\\000\\000\\000", "base labels": { "log types": [ "MANDIANT FUSION IOC" ], "allow scoped access": true } } }, "entity": { "file": { "sha256": "000bc5900dc7a32851e380f418cc178ff0910242ee0561ae37ff424e6d3ec64a", "md5": "f0095b0a7480c826095d9ffc9d5d2d8f", "sha1": "8101315b9fbbf6a72bddbfe64837d246f4c8b419" }, "labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... ] } } Complex conditions To use multiple fields in a context entity, you can combine multiple outcome variables to create more complex conditional logic.
- Condition section The condition section ensures that e1 , context graph , and matched conditions exist and or match the specified condition. condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 Complete YARA-L rule At this point the rule is ready for use and should look like the following: rule fusion feed example principal process file md5 { meta: rule name = "File Hash - Applied Threat Intelligence" description = "Matches file hashes against the Applied Threat Intelligence Fusion Feed." events: // Filter graph $context graph.graph.metadata.product name = "MANDIANT FUSION IOC" $context graph.graph.metadata.vendor name = "MANDIANT FUSION IOC" $context graph.graph.metadata.entity type = "FILE" $context graph.graph.metadata.source type = "GLOBAL CONTEXT" // Do join $ioc = $context graph.graph.entity.file.md5 $ioc = $e1.principal.process.file.md5 match: $ioc over 1h outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 } ATI Fusion Feed context entity fields You can use many fields from the ATI Fusion Feed in rules.
- For example: Entity field 1 Values Entity field 2 Values metadata.threat.verdict info.source provider Mandiant Global Intel metadata.threat.verdict info.global hits count Integer metadata.threat.verdict info.source provider Mandiant Global Intel metadata.threat.verdict info.global customer count Integer metadata.threat.verdict info.source provider Mandiant Analyst Intel metadata.threat.verdict info.confidence score Integer metadata.threat.verdict info.source provider Mandiant Automated Intel metadata.threat.verdict info.confidence score Integer In the outcome section of a YARA-L rule, you can access a value designated by a specific key using the following command: $hit count = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Global Intel", $context graph.graph.metadata.threat.verdict info.global hits count, 0)) Examining entity matches in Google Security Operations helps you gain a comprehensive view of the data, revealing additional fields that can be valuable in assessing the priority and context of an indicator alert.
- Flexible joins in YARA-L rule To reduce the number of rules required, you can use flexible joins between IoCs to connect multiple UDM fields to a context entity.

