---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.671Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Set DTM Alert Analysis"
feature_slug: "set-dtm-alert-analysis"
latest_feature_date: "2025-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
keywords:
  - "set"
  - "dtm"
  - "alert"
  - "analysis"
  - "adds"
  - "an"
  - "action"
  - "that"
---

# Set DTM Alert Analysis

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that sets DTM alert analysis.

## Extended Definition

Adds an action that sets DTM alert analysis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)

## Supporting Pages

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. is suspicious: if data.get("score") > threshold Enrichment field name Logic - When to apply domain Returns if it exists in JSON result should block Returns if it exists in JSON result score Returns if it exists in JSON result disposable Returns if it exists in JSON result has mx records Returns if it exists in JSON result has spf records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for the provided file: "Successfully created analysis task for file: {0}".format(file path).
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for at least one of the provided entities: "Created analysis tasks for the following entities: {0}".format([entity.Identifier]).
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. if data.get("report", {}).get("risk score", {}).get("result") > threshold Enrichment Field name Logic - When to apply domain blacklist Returns if it exists in JSON result html forms Returns if it exists in JSON result server details Returns if it exists in JSON result response headers Returns if it exists in JSON result redirection Returns if it exists in JSON result file type Returns if it exists in JSON result risk score Returns if it exists in JSON result security checks Returns if it exists in JSON result geo location Returns if it exists in JSON result url parts Returns if it exists in JSON result site category Returns if it exists in JSON result web page Returns if it exists in JSON result dns records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2.
- If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: if successfully created analysis task for the provided file: "Successfully created analysis task for file: {0}".format(file path).

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "campaign" : [ { "name" : "Example 1" , "id" : 1 }, { "name" : "Example 2" , "id" : 2 } ], "actor" : [ { "name" : "Actor 1" , "id" : 1 }, { "name" : "Actor 2" , "id" : 2 } ], "attackpattern" : [ { "name" : "Pattern 1" , "id" : 1 }, { "name" : "Pattern 2" , "id" : 2 } ], "courseofaction" : [ { "name" : "Course of Action 1" , "id" : 1 }, { "name" : "Course Of Action 2" , "id" : 2 } ], "identity" : [ { "name" : "Identity 1" , "id" : 1 }, { "name" : "Identity 2" , "id" : 2 } ], "incident" : [ { "name" : "Incident 1" , "id" : 1 }, { "name" : "Incident 2" , "id" : 2 } ], "infrastructure" : [ { "name" : "Infrustructure 1" , "id" : 1 }, { "name" : "Infrustructure 2" , "id" : 2 } ], "intrusionset" : [ { "name" : "Intrusion set 1" , "id" : 1 }, { "name" : "Intrusion set 2" , "id" : 2 } ], "malware" : [ { "name" : "Malware 1" , "id" : 1 }, { "name" : "Malware 2" , "id" : 2 } ], "signature" : [ { "name" : "Signature 1" , "id" : 1 }, { "name" : "Signature 2" , "id" : 2 } ], "tool" : [ { "name" : "Tool 1" , "id" : 1 }, { "name" : "Tool 2" , "id" : 2 } ], "ttp" : [ { "name" : "TTP 1" , "id" : 1 }, { "name" : "TTP 2" , "id" : 2 } ], "vulnerability" : [ { "name" : "Vulnerability 1" , "id" : 1 }, { "name" : "Vulnerability 2" , "id" : 2 } ], } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one association across entities is found (is success=true): "Successfully retrieved related associations from Anomali ThreatStream" If no associations are found (is success=false) : "No related associations were found." Async Message: "Waiting for all of the association details to be retrieved" The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Association".
- Run on This action runs on the following entities: Hash IP Address URL Email Address (user entity that matches email regex) Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully reported the following entities as false positive in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fail to mark specific entities (is success=true): "Action was not able to report the following entities as false positive in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fail to enrich all entities (is success=false): "No entities were reported as false positive." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Report As False Positive".
- Run on This action runs on the following entities: Hash IP Address URL Email (user entity that matches email regex) Threat Actor CVE Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "{} hashes.format(subtype)" : [ "" ], "all hashes" : [ "md5hash 1" ], "domains" : [ "" ] "urls" : [] "emails" : [] "ips" : [] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully retrieved related hashes from Anomali ThreatStream" If no hashes are found (is success=false): "No related hashes were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Hashes".

### "Migrate CBN alerts to YARA-L detection rule alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the following example. metadata . vendor name = "Microsoft" metadata . product name = "Windows Defender AV" metadata . product event type = "MALWAREPROTECTION STATE MALWARE DETECTED" principal . asset . hostname = "client02.example.local" security result . action = "BLOCK" security result . severity = "MEDIUM" Create a new YARA-L detection engine rule. rule windows defender av monitored events { meta : author = "Chronicle" description = "Migration of CBN alerts to Google SecOps YARA-L detection engine rule alert." // Severity is set at the Outcome level via security result.severity severity = "INFORMATIONAL" priority = "INFORMATIONAL" events : $ windows defender av . metadata . vendor name = "Microsoft" $ windows defender av . metadata . product name = "Windows Defender AV" $ windows defender av . metadata . product event type = "MALWAREPROTECTION STATE MALWARE DETECTED" $ windows defender av . principal . asset . hostname = $ host // optionally tune to only detection on ALLOW, i.e., failure to BLOCK //$windows defender av.security result.action = "ALLOW" // optionally tune on severity of detection //$windows defender av.security result.severity != "LOW" outcome : $ risk score = max ( if ( $ windows defender av . security result . severity = "UNKNOWN SEVERITY" , 0 ) + if ( $ windows defender av . security result . severity = "LOW" , 25 ) + if ( $ windows defender av . security result . severity = "MEDIUM" , 50 ) + if ( $ windows defender av . security result . severity = "HIGH" , 75 ) + if ( $ windows defender av . security result . severity = "CRITICAL" , 100 ) ) $ severity = array distinct ( $ windows defender av . security result . severity ) condition : $ windows defender av } CBN alert appears to use a field that was not parsed into UDM Using the parser extensions option you can quickly address this scenario.
- Use UDM search Using the UDM search option, you can view events with the alert state set in the parsers: security result.alert state = "ALERTING" From the UDM search results, you can explore the following fields to understand which sources are generating CBN alerts in your environment: Metadata > Vendor Name Metadata > Product Name Download default CBN alerts using the Tools API and manually review The previous approach helps you to find alerts that have fired, but does not cover the scenario of alerts that you have not seen before.
- For example, Corelight CBN alert uses the notice field and conditionally alerts only if true: if [ notice ] == "true" { mutate { replace = > { "is significant" = > "true" "is alert" = > "true" } } } Because this value isn't normalized into UDM by default you can use a parser extension Grok as follows to add that value as a UDM field of type Additional : filter { mutate { replace = > { "notice" = > "" } } grok { match = > { "message" = > [ "(?P<message>\{. \})$" ] } on error = > " grok not syslog" overwrite = > [ "message" ] } json { on error = > "not json" source = > "message" array function = > "split columns" } if ! [ not json ] { if [ notice ] != "" { mutate { convert = > { "notice" = > "string" } } mutate { replace = > { "additional notice.key" = > "notice" "additional notice.value.string value" = > "%{notice}" } } mutate { merge = > { "event1.idm.read only udm.additional.fields" = > "additional notice" } } mutate { merge = > { "@output" = > "event1" } } } } } You can then utilize this in a YARA-L detection engine rule as follows, and using the Maps function : events : // Corelight : Weird Log ( $ corelight . metadata . vendor name = "Corelight" and $ corelight . metadata . product name = "Zeek" and // this requires a custom parser extension to extract notice $ corelight . metadata . product event type = "weird" and $ corelight . additional . fields [ "notice" ] = "true" ) You must enable and turn on the authored rules for alerting.
- Migrate Windows Defender antivirus alerts that were previously displayed in Enterprise Insights as CBN alerts The following example shows how you can migrate Windows Defender antivirus alerts that were previously displayed in Enterprise Insights as CBN alerts.

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "rep device fqdn" : "192.0.2.30" , "sorce name" : "192.0.2.30" , "tag" : "pdate-esp-kernelmodle.sh" , "timestamp occred" : "1596541223000" , "destination address" : "198.51.100.130" , "rep dev canonical" : "192.0.2.30" , "destination name" : "198.51.100.130" , "received from" : "Centos7-001" , "timestamp occred iso8601" : "2020-08-04T11:40:23.000Z" , "id" : "f52dd545-ff14-5576-3b70-47f10f528f53" , "needs enrichment" : True , "rep device asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received" : "1596541223152" , "sorce canonical" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "destination fqdn" : "198.51.100.130" , " links" : { "self" : { "href" : " URL " } }, "has alarm" : False , "rep device address" : "192.0.2.30" , "event name" : "pdate-esp-kernelmodle.sh event" , "sed hint" : False , "transient" : False , "packet type" : "log" , "was fzzied" : True , "sppressed" : False , "log" : "<13>Ag 4 14:40:23 Centos7-001 pdate-esp-kernelmodle.sh: McAfeeESPFileAccess installed in this system is - 198.51.100.130" , "sorce asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received iso8601" : "2020-08-04T11:40:23.152Z" , "destination canonical" : "198.51.100.130" , "time offset" : "Z" } Case wall Result type Description Type Output message In case of general error: "Action didn't complete due to error: {error}", result value should be set to false and the action should fail.

