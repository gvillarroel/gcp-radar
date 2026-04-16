---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.668Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Get Alert Details"
feature_slug: "get-alert-details"
latest_feature_date: "2025-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance"
keywords:
  - "get"
  - "alert"
  - "details"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "retrieves"
---

# Get Alert Details

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that retrieves alert details in CrowdStrike Falcon.

## Extended Definition

Adds an action that retrieves alert details in CrowdStrike Falcon.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)

## Supporting Pages

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.
- Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message In case of error: "Failed to get details about AlienVault Anywhere alarm!
- Get Alarm Details Retrieves details for an alarm by ID.
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "campaign" : [ { "name" : "Example 1" , "id" : 1 }, { "name" : "Example 2" , "id" : 2 } ], "actor" : [ { "name" : "Actor 1" , "id" : 1 }, { "name" : "Actor 2" , "id" : 2 } ], "attackpattern" : [ { "name" : "Pattern 1" , "id" : 1 }, { "name" : "Pattern 2" , "id" : 2 } ], "courseofaction" : [ { "name" : "Course of Action 1" , "id" : 1 }, { "name" : "Course Of Action 2" , "id" : 2 } ], "identity" : [ { "name" : "Identity 1" , "id" : 1 }, { "name" : "Identity 2" , "id" : 2 } ], "incident" : [ { "name" : "Incident 1" , "id" : 1 }, { "name" : "Incident 2" , "id" : 2 } ], "infrastructure" : [ { "name" : "Infrustructure 1" , "id" : 1 }, { "name" : "Infrustructure 2" , "id" : 2 } ], "intrusionset" : [ { "name" : "Intrusion set 1" , "id" : 1 }, { "name" : "Intrusion set 2" , "id" : 2 } ], "malware" : [ { "name" : "Malware 1" , "id" : 1 }, { "name" : "Malware 2" , "id" : 2 } ], "signature" : [ { "name" : "Signature 1" , "id" : 1 }, { "name" : "Signature 2" , "id" : 2 } ], "tool" : [ { "name" : "Tool 1" , "id" : 1 }, { "name" : "Tool 2" , "id" : 2 } ], "ttp" : [ { "name" : "TTP 1" , "id" : 1 }, { "name" : "TTP 2" , "id" : 2 } ], "vulnerability" : [ { "name" : "Vulnerability 1" , "id" : 1 }, { "name" : "Vulnerability 2" , "id" : 2 } ], } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one association across entities is found (is success=true): "Successfully retrieved related associations from Anomali ThreatStream" If no associations are found (is success=false) : "No related associations were found." Async Message: "Waiting for all of the association details to be retrieved" The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Association".
- Run on This action runs on the following entities: Hash IP Address URL Email (user entity that matches email regex) Threat Actor CVE Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "{} hashes.format(subtype)" : [ "" ], "all hashes" : [ "md5hash 1" ], "domains" : [ "" ] "urls" : [] "emails" : [] "ips" : [] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully retrieved related hashes from Anomali ThreatStream" If no hashes are found (is success=false): "No related hashes were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Hashes".
- Run on This action runs on the following entities: Hash IP Address URL Email Address (user entity that matches email regex) Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully reported the following entities as false positive in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fail to mark specific entities (is success=true): "Action was not able to report the following entities as false positive in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fail to enrich all entities (is success=false): "No entities were reported as false positive." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Report As False Positive".
- Example: apt Only Suspicious Entity Insight Checkbox Unchecked Yes If enabled, action will create insight only for entities that exceeded the Severity Threshold and Confidence Threshold.

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. if data.get("report", {}).get("risk score", {}).get("result") > threshold Enrichment Field name Logic - When to apply domain blacklist Returns if it exists in JSON result html forms Returns if it exists in JSON result server details Returns if it exists in JSON result response headers Returns if it exists in JSON result redirection Returns if it exists in JSON result file type Returns if it exists in JSON result risk score Returns if it exists in JSON result security checks Returns if it exists in JSON result geo location Returns if it exists in JSON result url parts Returns if it exists in JSON result site category Returns if it exists in JSON result web page Returns if it exists in JSON result dns records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2.
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. is suspicious: if data.get("score") > threshold Enrichment field name Logic - When to apply domain Returns if it exists in JSON result should block Returns if it exists in JSON result score Returns if it exists in JSON result disposable Returns if it exists in JSON result has mx records Returns if it exists in JSON result has spf records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for the provided file: "Successfully created analysis task for file: {0}".format(file path).
- For enhanced functionality, we strongly recommend that you transition to the following dedicated Partner Integrations : ANYRUN Sandbox ANYRUN TI Feeds ANYRUN TI Lookup Parameters N/A Run on The action doesn't run on entities.
- Use cases Analyze File that is a part of alert been reviewed to see if its malicious.

### "Integrate LevelBlue USM Appliance with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result [ { "scan name" : "pcap file 1545041396 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" }, { "scan name" : "pcap file 1545041397 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" }, { "scan name" : "pcap file 1545041398 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" } ] Get PCAP Files for Events Get PCAP files for events in an alert.
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- Parameters N/A Run on This action runs on the following entities: IP Address Hostname Action results Entity enrichment Enrichment field name Logic - When to apply model Returns if it exists in JSON result descr Returns if it exists in JSON result hostname Returns if it exists in JSON result asset type Returns if it exists in JSON result fqdn Returns if it exists in JSON result devices Returns if it exists in JSON result asset value Returns if it exists in JSON result ips Returns if it exists in JSON result id Returns if it exists in JSON result sensors Returns if it exists in JSON result os Returns if it exists in JSON result networks Returns if it exists in JSON result icon Returns if it exists in JSON result Script result Script result name Value options Example success True or False success:False JSON result [ { "EntityResult" : { "model" : null , "descr" : " " , "hostname" : "Hostname" , "asset type" : "Internal" , "fqdn" : " " , "devices" : [], "asset value" : "2" , "ips" : { "3.3.3.3" : { "ip" : "192.0.2.1" , "mac" : "01:23:45:AB:CD:EF" }}, "id" : "123D37D595B800734550B9D9D6A958C6" , "sensors" : { "C221234962EA11E697DE0AF71A09DF3B" : { "ip" : "192.0.2.1" , "ctxs" : { "C228355962EA11E697DE0AF71A09DF3B" : "AlienVault" }, "name" : "DA" }}, "os" : "Linux" , "networks" : { "7E4B12EEFD06A21F898345C2AB46EB10" : { "ips" : "192.0.2.1/24" , "ctx" : "C228355962EA11E697DE0AF71A09DF3B" , "name" : "Pvt 000" }}, "icon" : " " }, "Entity" : "example.com" } ] Enrich Vulnerabilities Retrieve vulnerability information from the LevelBlue USM Appliance.
- Parameters N/A Run on This action runs on the following entities: IP Address Hostname Action results Entity enrichment Enrichment field name Logic - When to apply AlientVault Severity Returns if it exists in JSON result AlientVault Service Returns if it exists in JSON result AlientVault Vulnerability Returns if it exists in JSON result AlientVault Scan Time Returns if it exists in JSON result AlientVault Asset Returns if it exists in JSON result AlientVault Id Returns if it exists in JSON result Script result Script result name Value options Example success True or False success:False JSON result [ { "EntityResult" : [{ "Severity" : "High" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP Sequence Number Approximation Reset Denial of Service Vulnerability" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123456" }, { "Severity" : "High" , "Service" : "https (443/tcp)" , "Vulnerability" : "robot(s).txt exists on the Web Server" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123457" }, { "Severity" : "Medium" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP timestamps" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123458" }], "Entity" : "test" } ] Fetch Last PCAP Files Fetch last PCAP files from AlienVault.

