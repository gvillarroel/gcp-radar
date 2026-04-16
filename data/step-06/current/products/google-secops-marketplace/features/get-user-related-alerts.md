---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.652Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Get User Related Alerts"
feature_slug: "get-user-related-alerts"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "get"
  - "user"
  - "related"
  - "alerts"
  - "adds"
  - "an"
  - "action"
  - "that"
---

# Get User Related Alerts

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that returns user-related alerts.

## Extended Definition

Adds an action that returns user-related alerts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- Send user action data to trigger the test rules To verify that data is ingested as expected, create a user and login to verify that these actions trigger the test rules.
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- Azure - Defender for Cloud : Identifies alerts received from context-aware Microsoft Defender for Cloud related to user behavior, credential access, cryptomining, discovery, evasion, execution, exfiltration, impact, initial access, malware, penetration testing, persistence, policy, privilege escalation, or unauthorized access across all Azure cloud services.

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email (user entity that matches email regex) Threat Actor CVE Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "{} hashes.format(subtype)" : [ "" ], "all hashes" : [ "md5hash 1" ], "domains" : [ "" ] "urls" : [] "emails" : [] "ips" : [] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully retrieved related hashes from Anomali ThreatStream" If no hashes are found (is success=false): "No related hashes were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Hashes".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "campaign" : [ { "name" : "Example 1" , "id" : 1 }, { "name" : "Example 2" , "id" : 2 } ], "actor" : [ { "name" : "Actor 1" , "id" : 1 }, { "name" : "Actor 2" , "id" : 2 } ], "attackpattern" : [ { "name" : "Pattern 1" , "id" : 1 }, { "name" : "Pattern 2" , "id" : 2 } ], "courseofaction" : [ { "name" : "Course of Action 1" , "id" : 1 }, { "name" : "Course Of Action 2" , "id" : 2 } ], "identity" : [ { "name" : "Identity 1" , "id" : 1 }, { "name" : "Identity 2" , "id" : 2 } ], "incident" : [ { "name" : "Incident 1" , "id" : 1 }, { "name" : "Incident 2" , "id" : 2 } ], "infrastructure" : [ { "name" : "Infrustructure 1" , "id" : 1 }, { "name" : "Infrustructure 2" , "id" : 2 } ], "intrusionset" : [ { "name" : "Intrusion set 1" , "id" : 1 }, { "name" : "Intrusion set 2" , "id" : 2 } ], "malware" : [ { "name" : "Malware 1" , "id" : 1 }, { "name" : "Malware 2" , "id" : 2 } ], "signature" : [ { "name" : "Signature 1" , "id" : 1 }, { "name" : "Signature 2" , "id" : 2 } ], "tool" : [ { "name" : "Tool 1" , "id" : 1 }, { "name" : "Tool 2" , "id" : 2 } ], "ttp" : [ { "name" : "TTP 1" , "id" : 1 }, { "name" : "TTP 2" , "id" : 2 } ], "vulnerability" : [ { "name" : "Vulnerability 1" , "id" : 1 }, { "name" : "Vulnerability 2" , "id" : 2 } ], } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one association across entities is found (is success=true): "Successfully retrieved related associations from Anomali ThreatStream" If no associations are found (is success=false) : "No related associations were found." Async Message: "Waiting for all of the association details to be retrieved" The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Association".
- Run on This action runs on the following entities: Hash IP Address URL Email Address (user entity that matches email regex) Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully reported the following entities as false positive in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fail to mark specific entities (is success=true): "Action was not able to report the following entities as false positive in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fail to enrich all entities (is success=false): "No entities were reported as false positive." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Report As False Positive".
- Reason: {0}''.format(error.Stacktrace) If the "Confidence Threshold" parameter is not in the 0-100 range: "'Confidence Threshold' value should be in range from 0 to 100." General Case Wall Table Table Name: Related Analysis Links: {entity identifier} Table Columns: Name Link General Case Wall Table Keys based on the enrichment table Entity Get Related Associations Retrieve entity related associations from Anomali ThreatStream.

### "Integrate LevelBlue USM Appliance with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result [ { "scan name" : "pcap file 1545041396 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" }, { "scan name" : "pcap file 1545041397 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" }, { "scan name" : "pcap file 1545041398 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" } ] Get PCAP Files for Events Get PCAP files for events in an alert.
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- Parameters N/A Run on This action runs on the following entities: IP Address Hostname Action results Entity enrichment Enrichment field name Logic - When to apply model Returns if it exists in JSON result descr Returns if it exists in JSON result hostname Returns if it exists in JSON result asset type Returns if it exists in JSON result fqdn Returns if it exists in JSON result devices Returns if it exists in JSON result asset value Returns if it exists in JSON result ips Returns if it exists in JSON result id Returns if it exists in JSON result sensors Returns if it exists in JSON result os Returns if it exists in JSON result networks Returns if it exists in JSON result icon Returns if it exists in JSON result Script result Script result name Value options Example success True or False success:False JSON result [ { "EntityResult" : { "model" : null , "descr" : " " , "hostname" : "Hostname" , "asset type" : "Internal" , "fqdn" : " " , "devices" : [], "asset value" : "2" , "ips" : { "3.3.3.3" : { "ip" : "192.0.2.1" , "mac" : "01:23:45:AB:CD:EF" }}, "id" : "123D37D595B800734550B9D9D6A958C6" , "sensors" : { "C221234962EA11E697DE0AF71A09DF3B" : { "ip" : "192.0.2.1" , "ctxs" : { "C228355962EA11E697DE0AF71A09DF3B" : "AlienVault" }, "name" : "DA" }}, "os" : "Linux" , "networks" : { "7E4B12EEFD06A21F898345C2AB46EB10" : { "ips" : "192.0.2.1/24" , "ctx" : "C228355962EA11E697DE0AF71A09DF3B" , "name" : "Pvt 000" }}, "icon" : " " }, "Entity" : "example.com" } ] Enrich Vulnerabilities Retrieve vulnerability information from the LevelBlue USM Appliance.
- Parameters N/A Run on This action runs on the following entities: IP Address Hostname Action results Entity enrichment Enrichment field name Logic - When to apply AlientVault Severity Returns if it exists in JSON result AlientVault Service Returns if it exists in JSON result AlientVault Vulnerability Returns if it exists in JSON result AlientVault Scan Time Returns if it exists in JSON result AlientVault Asset Returns if it exists in JSON result AlientVault Id Returns if it exists in JSON result Script result Script result name Value options Example success True or False success:False JSON result [ { "EntityResult" : [{ "Severity" : "High" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP Sequence Number Approximation Reset Denial of Service Vulnerability" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123456" }, { "Severity" : "High" , "Service" : "https (443/tcp)" , "Vulnerability" : "robot(s).txt exists on the Web Server" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123457" }, { "Severity" : "Medium" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP timestamps" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123458" }], "Entity" : "test" } ] Fetch Last PCAP Files Fetch last PCAP files from AlienVault.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detect data exfiltration attempts This involves correlating several distinct user actions that, when combined, might indicate an attempt to exfiltrate data.
- By setting a rule to detect only and then plotting its detections in a dashboard widget, you can track trends, identify outliers, and gain a high-level audit view of the activity without being overwhelmed by individual alerts.
- For example, if multiple rules share the same meta label tactic: exfiltration , you can have a composite rule that targets any detection where the tactic label has the value exfiltration .
- For example, while a rule can detect a successful user login, a contextual rule provides the crucial context that this login came from a new and unusual country.

