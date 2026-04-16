---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.669Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Execute XQL Search"
feature_slug: "execute-xql-search"
latest_feature_date: "2025-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
keywords:
  - "execute"
  - "xql"
  - "search"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "executes"
---

# Execute XQL Search

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that executes an XQL search.

## Extended Definition

Adds an action that executes an XQL search.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)

## Supporting Pages

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "error" : false , "data" :{ "tasks" :[ { "verdict" : "No threats detected" , "name" : "http://users.tpg.com.au/locthuy/employment/qs/unix/Hardening%20your%20AIX%20Security.pdf" , "related" : "https://app.any.run/tasks/ ID " , "pcap" : "https://content.any.run/tasks/ ID /download/pcap" , "file" : "https://content.any.run/tasks/ ID /download/files/ FILE NAME " , "json" : "https://api.any.run/report/ ID /summary/json" , "misp" : "https://api.any.run/report/ ID /summary/misp" , "tags" :[ ], "date" : "2020-10-12T08:05:57.587Z" , "hashes" :{ "ssdeep" : "768:iSDksqjqvXbB/6rtilCec397sUiZc9Yky:TDegY539gUiCXy" , "head hash" : "3c90557306fa01f30693541b28db5785" , "sha256" : "8ebc1257f9155134bb00315bdd2380990cdc413ba298d0cf473579ccfe03d6e5" , "sha1" : "c125ba414416668b84ac737ec6db1b7f94bf32af" , "md5" : "5e19377a19ef7657707872377bea14b7" } } ] } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successful and found reports: "Found ANY.RUN reports for the provided search parameters".
- For enhanced functionality, we strongly recommend that you transition to the following dedicated Partner Integrations : ANYRUN Sandbox ANYRUN TI Feeds ANYRUN TI Lookup Parameters Parameter name Type Default value Is mandatory Description Submission Name String N/A No Specific submission name to search for.
- For enhanced functionality, we strongly recommend that you transition to the following dedicated Partner Integrations : ANYRUN Sandbox ANYRUN TI Feeds ANYRUN TI Lookup Parameters N/A Run on The action doesn't run on entities.
- Search in last x scans Integer 25 Yes Search for report for provide filehash in the last x analysis executed in ANY.RUN.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The access permissions are summarized in the following table: Action Global user Scoped user Can create scoped list Yes Yes (with scopes that match their assigned scopes or are a subset of their assigned scopes) For example, scoped user with scopes A and B can create a reference list with scope A or with scopes A and B, but not with scopes A, B, and C.
- The access permissions are summarized in the following table: Action Global user Scoped user Can create scoped data table Yes Yes (only with scopes that match or are a subset of their assigned scopes) For example, scoped user with scopes A and B can create a data table with scope A or with scopes A and B, but not with scopes A, B, and C.
- The actions that a user can take on a detection (for example, marking a detection as resolved) are also limited to the scope in which the detection occurred.
- Reference lists Reference lists are collections of values that are used for matching and filtering data in UDM Search and detection rules.

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- Run on This action runs on the following entities: Hash IP Address URL Email Address (user entity that matches email regex) Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully reported the following entities as false positive in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fail to mark specific entities (is success=true): "Action was not able to report the following entities as false positive in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fail to enrich all entities (is success=false): "No entities were reported as false positive." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Report As False Positive".
- Run on This action runs on the following entities: Hash IP Address URL Email (user entity that matches email regex) Threat Actor CVE Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "{} hashes.format(subtype)" : [ "" ], "all hashes" : [ "md5hash 1" ], "domains" : [ "" ] "urls" : [] "emails" : [] "ips" : [] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found (is success=true): "Successfully retrieved related hashes from Anomali ThreatStream" If no hashes are found (is success=false): "No related hashes were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Hashes".
- Example: apt Only Suspicious Entity Insight Checkbox Unchecked Yes If enabled, action will create insight only for entities that exceeded the Severity Threshold and Confidence Threshold.

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "rep device fqdn" : "192.0.2.30" , "sorce name" : "192.0.2.30" , "tag" : "pdate-esp-kernelmodle.sh" , "timestamp occred" : "1596541223000" , "destination address" : "198.51.100.130" , "rep dev canonical" : "192.0.2.30" , "destination name" : "198.51.100.130" , "received from" : "Centos7-001" , "timestamp occred iso8601" : "2020-08-04T11:40:23.000Z" , "id" : "f52dd545-ff14-5576-3b70-47f10f528f53" , "needs enrichment" : True , "rep device asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received" : "1596541223152" , "sorce canonical" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "destination fqdn" : "198.51.100.130" , " links" : { "self" : { "href" : " URL " } }, "has alarm" : False , "rep device address" : "192.0.2.30" , "event name" : "pdate-esp-kernelmodle.sh event" , "sed hint" : False , "transient" : False , "packet type" : "log" , "was fzzied" : True , "sppressed" : False , "log" : "<13>Ag 4 14:40:23 Centos7-001 pdate-esp-kernelmodle.sh: McAfeeESPFileAccess installed in this system is - 198.51.100.130" , "sorce asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received iso8601" : "2020-08-04T11:40:23.152Z" , "destination canonical" : "198.51.100.130" , "time offset" : "Z" } Case wall Result type Description Type Output message In case of general error: "Action didn't complete due to error: {error}", result value should be set to false and the action should fail.

