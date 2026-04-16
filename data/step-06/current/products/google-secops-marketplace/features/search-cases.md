---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.654Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Search Cases"
feature_slug: "search-cases"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
keywords:
  - "search"
  - "cases"
  - "adds"
  - "an"
  - "action"
  - "for"
  - "searching"
---

# Search Cases

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action for searching cases.

## Extended Definition

Adds an action for searching cases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)

## Supporting Pages

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "error" : false , "data" :{ "tasks" :[ { "verdict" : "No threats detected" , "name" : "http://users.tpg.com.au/locthuy/employment/qs/unix/Hardening%20your%20AIX%20Security.pdf" , "related" : "https://app.any.run/tasks/ ID " , "pcap" : "https://content.any.run/tasks/ ID /download/pcap" , "file" : "https://content.any.run/tasks/ ID /download/files/ FILE NAME " , "json" : "https://api.any.run/report/ ID /summary/json" , "misp" : "https://api.any.run/report/ ID /summary/misp" , "tags" :[ ], "date" : "2020-10-12T08:05:57.587Z" , "hashes" :{ "ssdeep" : "768:iSDksqjqvXbB/6rtilCec397sUiZc9Yky:TDegY539gUiCXy" , "head hash" : "3c90557306fa01f30693541b28db5785" , "sha256" : "8ebc1257f9155134bb00315bdd2380990cdc413ba298d0cf473579ccfe03d6e5" , "sha1" : "c125ba414416668b84ac737ec6db1b7f94bf32af" , "md5" : "5e19377a19ef7657707872377bea14b7" } } ] } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successful and found reports: "Found ANY.RUN reports for the provided search parameters".
- Entity Any/Run Report Entity identifier for which insight is created Value from api response Value from api response Value from api response Script result Script result name Value options Example is success True or False is success:False JSON result { "error" : false , "data" :{ "analysis" :{ "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" :{ "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" :{ "name" : "ANY.RUN - Interactive Sandbox" , "plan" :{ "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" :[ ], "options" :{ "timeout" : 60 , "additionalTime" : 0 , "fakeNet" : false , "heavyEvasion" : false , "mitm" : false , "tor" :{ "used" : false , "geo" : "fastest" }, "presentation" : false , "video" : true , "hideSource" : false , "network" : true , "privacy" : "bylink" , "privateSample" : false , "automatization" :{ "uac" : false } }, "scores" :{ "verdict" :{ "score" : 100 , "threatLevel" : 2 , "threatLevelText" : "Malicious activity" }, "specs" :{ "injects" : false , "autostart" : false , "cpuOverrun" : false , "crashedApps" : false , "crashedTask" : false , "debugOutput" : false , "executableDropped" : false , "exploitable" : false , "lowAccess" : false , "memOverrun" : false , "multiprocessing" : true , } } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: if successful and got a report for at least one of the provided entities: "Found ANY.RUN reports for the following entities: {0}".format([entity.Identifier]).
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. is suspicious: if data.get("score") > threshold Enrichment field name Logic - When to apply domain Returns if it exists in JSON result should block Returns if it exists in JSON result score Returns if it exists in JSON result disposable Returns if it exists in JSON result has mx records Returns if it exists in JSON result has spf records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for the provided file: "Successfully created analysis task for file: {0}".format(file path).
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for at least one of the provided entities: "Created analysis tasks for the following entities: {0}".format([entity.Identifier]).

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The default is false . pcap settings.network interface string Optional The interface to listen to for PCAP data. pcap settings.bpf string Optional The Berkeley Packet Filter (BPF) for pcap. splunk settings.authentication.username string Optional The username of an identity used for authentication. splunk settings.authentication.password string Optional The password of the account identified by the username. splunk settings.host string Optional The host or IP address for the Splunk REST API. splunk settings.port integer Optional The port for the Splunk REST API. splunk settings.minimum window size integer Optional The minimum time range in seconds for a given Splunk search.
- Request example This is an example of an Update Forwarder request where the request specifies new values for displayName and adds a Metadata label.
- The default is 10 . splunk settings.maximum window size integer Optional The maximum time range in seconds for a given Splunk search.
- These limits apply to all of the Backstory APIs, including the Search, Forwarder Management, and Tooling APIs.

### "Google SecOps overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detection engine You can use the Google SecOps Detection Engine to automate the process of searching across your data for security issues.
- Google SecOps overview Supported in: Google secops Google Security Operations is a cloud service, built as a specialized layer on top of Google infrastructure, designed for enterprises to privately retain, analyze, and search the large amounts of security and network telemetry they generate.
- Integrated development environment (IDE) Security teams with coding skills can modify and enhance existing playbook actions, debug code, build new actions for existing integrations, and create integrations that are not available in the Content Hub.
- Case management Group related alerts into cases, sort and filter cases queue for triage and prioritization, assign cases, collaborate on every case, case audit and reporting.

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.
- AlienVault USM Anywhere Connector Google SecOps fetches alarms from LevelBlue USM Anywhere in near real-time and forwards them as alerts for cases.
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.
- Actions For more information about actions, see Respond to pending actions from Your Workdesk and Perform a manual action .

