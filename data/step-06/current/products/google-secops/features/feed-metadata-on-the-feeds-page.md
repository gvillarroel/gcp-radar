---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.904Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Feed metadata on the Feeds page"
feature_slug: "feed-metadata-on-the-feeds-page"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "feed"
  - "metadata"
  - "on"
  - "the"
  - "feeds"
  - "page"
  - "now"
  - "shows"
---

# Feed metadata on the Feeds page

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

The Feeds page now shows metadata for each feed.

## Extended Definition

The Feeds page now shows metadata for each feed.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "Applied Threat Intelligence Fusion Feed overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows a Fusion Feed context entity as an initial reference point: { "metadata": { "product entity id": "md5--147d19e6-cdae-57bb-b9a1-a8676265fa4c", "collected timestamp": { "seconds": "1695165683", "nanos": 48000000 }, "vendor name": "MANDIANT FUSION IOC", "product name": "MANDIANT FUSION IOC", "product version": "1710194393", "entity type": "FILE", "creation timestamp": { "seconds": "1710201600" }, "interval": { "start time": { "seconds": "1" }, "end time": { "seconds": "253402300799" } }, "threat": [ { "category details": [ "A phishing email message or the relevant headers from a phishing email." ], "severity details": "HIGH", "confidence details": "75", "risk score": 75, "first discovered time": { "seconds": "1683294326" }, "associations": [ { "id": "threat-actor--3e5e6bdf-5b4e-5166-84fa-83045e637f23", "type": "THREAT ACTOR", "name": "UNC2633" }, { "id": "threat-actor--3e5e6bdf-5b4e-5166-84fa-83045e637f23", "country code": [ "unknown" ], "type": "THREAT ACTOR", "name": "UNC2633", "description": "UNC2633 is a distribution threat cluster that delivers emails containing malicious attachments or links that lead to malware payloads, primarily QAKBOT, but also SNOWCONE.GZIPLOADER (which leads to ICEDID) and MATANBUCHUS.
- It has also leveraged HTML smuggling to distribute ZIP files containing IMG files that contain LNK files and malware payloads.", "alias": [ { "name": "TA570 (Proofpoint)" } ], "first reference time": { "seconds": "1459085092" }, "last reference time": { "seconds": "1687392000" }, "industries affected": [ "Aerospace & Defense", "Agriculture", "Automotive", "Chemicals & Materials", "Civil Society & Non-Profits", "Construction & Engineering", "Education", "Energy & Utilities", "Financial Services", "Governments", "Healthcare", "Hospitality", "Insurance", "Legal & Professional Services", "Manufacturing", "Media & Entertainment", "Oil & Gas", "Pharmaceuticals", "Retail", "Technology", "Telecommunications", "Transportation" ] } ], "campaigns": [ "CAMP.23.007" ], "last updated time": { "seconds": "1695165683", "nanos": 48000000 }, "verdict info": [ { "source provider": "Mandiant Automated Intel", "confidence score": 75 }, { "verdict type": "ANALYST VERDICT", "confidence score": 75 }, { "source count": 91, "response count": 1, "verdict type": "PROVIDER ML VERDICT", "malicious count": 1, "ioc stats": [ { "ioc stats type": "MANDIANT SOURCES", "second level source": "Knowledge Graph", "quality": "HIGH CONFIDENCE", "malicious count": 1, "response count": 1, "source count": 8 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Malware Analysis", "source count": 4 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Spam Monitoring", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "second level source": "Crowdsourced Threat Analysis", "source count": 71 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "MISP", "second level source": "Trusted Software List", "source count": 3 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Digitalside It Hashes", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Tds Harvester", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Urlhaus", "source count": 1 } ] }, { "source provider": "Mandiant Analyst Intel", "confidence score": 75, "pwn": true, "pwn first tagged time": { "seconds": "1683911695" } } ], "last discovered time": { "seconds": "1683909854" } } ], "source type": "GLOBAL CONTEXT", "source labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... { "key": "has pwn", "value": "2023-05-12T17:14:55.000+0000" } ], "event metadata": { "id": "\\000\\000\\000\\000\\034Z\\n\\2545\\237\\367\\353\\271\\357\\302\\215t\\330\\275\\237\\000\\000\\000\\000\\007\\000\\000\\000\\206\\000\\000\\000", "base labels": { "log types": [ "MANDIANT FUSION IOC" ], "allow scoped access": true } } }, "entity": { "file": { "sha256": "000bc5900dc7a32851e380f418cc178ff0910242ee0561ae37ff424e6d3ec64a", "md5": "f0095b0a7480c826095d9ffc9d5d2d8f", "sha1": "8101315b9fbbf6a72bddbfe64837d246f4c8b419" }, "labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... ] } } Complex conditions To use multiple fields in a context entity, you can combine multiple outcome variables to create more complex conditional logic.
- Condition section The condition section ensures that e1 , context graph , and matched conditions exist and or match the specified condition. condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 Complete YARA-L rule At this point the rule is ready for use and should look like the following: rule fusion feed example principal process file md5 { meta: rule name = "File Hash - Applied Threat Intelligence" description = "Matches file hashes against the Applied Threat Intelligence Fusion Feed." events: // Filter graph $context graph.graph.metadata.product name = "MANDIANT FUSION IOC" $context graph.graph.metadata.vendor name = "MANDIANT FUSION IOC" $context graph.graph.metadata.entity type = "FILE" $context graph.graph.metadata.source type = "GLOBAL CONTEXT" // Do join $ioc = $context graph.graph.entity.file.md5 $ioc = $e1.principal.process.file.md5 match: $ioc over 1h outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 } ATI Fusion Feed context entity fields You can use many fields from the ATI Fusion Feed in rules.
- The following example shows the use of flexible joins for multiple UDM fields in the event section: events: // Filter graph $mandiant.graph.metadata.product name = "MANDIANT FUSION IOC" $mandiant.graph.metadata.vendor name = "MANDIANT FUSION IOC" $mandiant.graph.metadata.entity type = "FILE" $mandiant.graph.metadata.source type = "GLOBAL CONTEXT" $mandiant.graph.entity.file.md5 = strings.coalesce($e.target.process.file.md5, $e.target.process.file.md5) OR $mandiant.graph.entity.file.md5 = strings.coalesce($e.principal.process.file.md5, $e.principal.process.file.md5) Need more help?

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Once you've corrected the error and resubmitted the feed, return to the Feeds page to determine whether or not the feed is now working.
- Note: The Last succeeded on column on the Feeds page shows the last time data was fetched successfully by that feed.
- View configured feeds The Feeds page shows all the feeds you've configured.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- February 20, 2026 Feature New capabilities in Feeds page The following options have been added to the Feeds page: Search Filtering (using feed attributes) Pagination Last Refreshed Time Feed Metadata Export to CSV February 17, 2026 Deprecated Control of MCP use with organization policies is deprecated.
- You can now configure multiple log-type feeds for the same product type on a single page.
- Feature Updated permissions for accessing product-centric feeds If you have assigned Custom IAM Roles , you can now grant access to the product-centric feeds by adding the following permissions to the role: chronicle.feedPacks.get chronicle.feedPacks.list To learn more about how to configure feeds using the product-centric feeds UI, see Configure feeds by product.
- Abnormal Security ( ABNORMAL SECURITY ) Akamai DNS ( AKAMAI DNS ) Amazon API Gateway ( AWS API GATEWAY ) Apache ( APACHE ) Apigee ( GCP APIGEE X ) Archer Integrated Risk Management ( ARCHER IRM ) Arcsight CEF ( ARCSIGHT CEF ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS VPC Flow ( AWS VPC FLOW ) AWS VPN ( AWS VPN ) Azure AD ( AZURE AD ) Azure AD Audit ( AZURE AD AUDIT ) Azure AD Sign-In ( AZURE AD SIGNIN ) Azure Storage Audit ( AZURE STORAGE AUDIT ) Azure WAF ( AZURE WAF ) BeyondTrust Privileged Identity ( BEYONDTRUST PI ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Carbon Black App Control ( CB APP CONTROL ) Check Point ( CHECKPOINT FIREWALL ) Checkpoint Audit ( CHECKPOINT AUDIT ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco ISE ( CISCO ISE ) Cisco Meraki ( CISCO MERAKI ) Cisco WSA ( CISCO WSA ) Citrix Netscaler ( CITRIX NETSCALER ) Cloud Audit Logs ( N/A ) Cloud Data Loss Prevention ( N/A ) Cloud Load Balancing ( GCP LOADBALANCING ) Cloud SQL ( GCP CLOUDSQL ) Cloudflare WAF ( CLOUDFLARE WAF ) Cohesity ( COHESITY ) Corelight ( CORELIGHT ) CrowdStrike Falcon ( CS EDR ) Cyber 2.0 IDS ( CYBER 2 IDS ) Cyberark Privilege Cloud ( CYBERARK PRIVILEGE CLOUD ) CyberArk PTA Privileged Threat Analytics ( CYBERARK PTA ) Darktrace ( DARKTRACE ) Dell Switch ( DELL SWITCH ) Duo Administrator Logs ( DUO ADMIN ) Duo Auth ( DUO AUTH ) EfficientIP DDI ( EFFICIENTIP DDI ) Elastic Audit Beats ( ELASTIC AUDITBEAT ) Elastic Packet Beats ( ELASTIC PACKETBEATS ) F5 ASM ( F5 ASM ) F5 Shape ( F5 SHAPE ) F5 Silverline ( F5 SILVERLINE ) FireEye ( FIREEYE ALERT ) FireEye ETP ( FIREEYE ETP ) FireEye HX ( FIREEYE HX ) Forcepoint DLP ( FORCEPOINT DLP ) Forcepoint Email Security ( FORCEPOINT EMAILSECURITY ) Forcepoint Mail Relay ( FORCEPOINT MAIL RELAY ) FortiGate ( FORTINET FIREWALL ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) Fortinet Fortimanager ( FORTINET FORTIMANAGER ) GCP APP ENGINE ( GCP APP ENGINE ) GitHub ( GITHUB ) HP Aruba (ClearPass) ( CLEARPASS ) IBM DS8000 Storage ( IBM DS8000 ) IBM Guardium ( GUARDIUM ) IBM OpenPages ( IBM OPENPAGES ) Infoblox DNS ( INFOBLOX DNS ) Jenkins ( JENKINS ) Layer7 SiteMinder ( SITEMINDER SSO ) Linux Auditing System (AuditD) ( AUDITD ) Malwarebytes ( MALWAREBYTES EDR ) McAfee ePolicy Orchestrator ( MCAFEE EPO ) Microsoft AD FS ( ADFS ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Azure Resource ( AZURE RESOURCE LOGS ) Microsoft Defender for Office 365 ( MICROSOFT DEFENDER MAIL ) Microsoft Exchange ( EXCHANGE MAIL ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft PowerShell ( POWERSHELL ) Microsoft SQL Server ( MICROSOFT SQL ) Microsoft System Center Endpoint Protection ( MICROSOFT SCEP ) Mimecast ( MIMECAST MAIL ) Nagios Infrastructure Monitoring ( NAGIOS ) Network Policy Server ( MICROSOFT NPS ) Office 365 ( OFFICE 365 ) Okta ( OKTA ) Okta User Context ( OKTA USER CONTEXT ) Oracle ( ORACLE DB ) Palo Alto Cortex XDR Alerts ( CORTEX XDR ) Palo Alto Panorama ( PAN PANORAMA ) Ping Federate ( PING FEDERATE ) Ping Identity ( PING ) PostgreSQL ( POSTGRESQL ) Precisely Ironstream IBM z/OS ( IRONSTREAM ZOS ) Proofpoint On Demand ( PROOFPOINT ON DEMAND ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Pulse Secure ( PULSE SECURE VPN ) Radware Web Application Firewall ( RADWARE FIREWALL ) Rippling Activity Logs ( RIPPLING ACTIVITYLOGS ) Sap Business Technology Platform ( SAP BTP ) Security Command Center Threat ( N/A ) Sentinelone Alerts ( SENTINELONE ALERT ) SentinelOne EDR ( SENTINEL EDR ) SentinelOne Singularity Cloud Funnel ( SENTINELONE CF ) Shibboleth IDP ( SHIBBOLETH IDP ) Snare System Diagnostic Logs ( SNARE SOLUTIONS ) Snowflake ( SNOWFLAKE ) Sophos AV ( SOPHOS AV ) Sophos Intercept EDR ( SOPHOS EDR ) Sourcefire ( SOURCEFIRE IDS ) Splunk Attack Analyzer ( SPLUNK ATTACK ANALYZER ) SpyCloud ( SPYCLOUD ) Squid Web Proxy ( SQUID WEBPROXY ) Suricata EVE ( SURICATA EVE ) Symantec Endpoint Protection ( SEP ) Symantec Web Security Service ( SYMANTEC WSS ) Tenable Audit ( TENABLE AUDIT ) Thales Vormetric ( VORMETRIC ) Trend Micro Apex one ( TRENDMICRO APEX ONE ) Trend Micro Deep Security ( TRENDMICRO DEEP SECURITY ) Trend Micro Vision One ( TRENDMICRO VISION ONE ) TrendMicro Apex Central ( TRENDMICRO APEX CENTRAL ) Twingate ( TWINGATE ) Ubika Waf ( UBIKA WAF ) Unix system ( NIX SYSTEM ) Vectra Detect ( VECTRA DETECT ) Vectra Stream ( VECTRA STREAM ) Wazuh ( WAZUH ) Windows DHCP ( WINDOWS DHCP ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Windows Local Administrator Password Solution ( MICROSOFT LAPS ) Windows Sysmon ( WINDOWS SYSMON ) Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) XAMS by Xiting ( XITING XAMS ) The following log types were added without a default parser.

