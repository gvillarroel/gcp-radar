---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.672Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Triage and Investigation Agent results in Case Summary"
feature_slug: "triage-and-investigation-agent-results-in-case-summary"
latest_feature_date: "2026-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
keywords:
  - "triage"
  - "investigation"
  - "agent"
  - "results"
  - "case"
  - "summary"
  - "now"
  - "shows"
---

# Triage and Investigation Agent results in Case Summary

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Case Summary now shows TIN results and verdict summaries directly in the case view.

## Extended Definition

Case Summary now shows TIN results and verdict summaries directly in the case view.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)

## Supporting Pages

### "Use Triage and Investigation Agent to investigate alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- Source ID: `site-docs-reference-2`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If TIN is enabled for your tenant, results are integrated into the Case Summary content once an investigation completes.
- Use Triage and Investigation Agent to investigate alerts Supported in: Google secops The Triage and Investigation Agent (TIN) is an AI-powered investigation assistant embedded in Google Security Operations.
- For a list of IAM permissions required for using the agent, see Triage and Investigation Agent (TIN) .
- For more information, see Monitor Triage and Investigation Agent (TIN) performance with dashboards .

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- The following example shows how to enter a query to match the common UDM fields that might contain the specified IP address: ip = "1.2.3.4" You can match a grouped field using a regular expression and using the nocase operator.
- Select how the results should be returned If a search exceeds the configured limit: Sampled events (default): Shows a subset of the complete results.
- You can display the results using the default capitalization or using lowercase only by selecting lowercase from the menu.

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. is suspicious: if data.get("score") > threshold Enrichment field name Logic - When to apply domain Returns if it exists in JSON result should block Returns if it exists in JSON result score Returns if it exists in JSON result disposable Returns if it exists in JSON result has mx records Returns if it exists in JSON result has spf records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for the provided file: "Successfully created analysis task for file: {0}".format(file path).
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for at least one of the provided entities: "Created analysis tasks for the following entities: {0}".format([entity.Identifier]).
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "error" : false , "data" :{ "tasks" :[ { "verdict" : "No threats detected" , "name" : "http://users.tpg.com.au/locthuy/employment/qs/unix/Hardening%20your%20AIX%20Security.pdf" , "related" : "https://app.any.run/tasks/ ID " , "pcap" : "https://content.any.run/tasks/ ID /download/pcap" , "file" : "https://content.any.run/tasks/ ID /download/files/ FILE NAME " , "json" : "https://api.any.run/report/ ID /summary/json" , "misp" : "https://api.any.run/report/ ID /summary/misp" , "tags" :[ ], "date" : "2020-10-12T08:05:57.587Z" , "hashes" :{ "ssdeep" : "768:iSDksqjqvXbB/6rtilCec397sUiZc9Yky:TDegY539gUiCXy" , "head hash" : "3c90557306fa01f30693541b28db5785" , "sha256" : "8ebc1257f9155134bb00315bdd2380990cdc413ba298d0cf473579ccfe03d6e5" , "sha1" : "c125ba414416668b84ac737ec6db1b7f94bf32af" , "md5" : "5e19377a19ef7657707872377bea14b7" } } ] } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successful and found reports: "Found ANY.RUN reports for the provided search parameters".
- Entity Any/Run Report Entity identifier for which insight is created Value from api response Value from api response Value from api response Script result Script result name Value options Example is success True or False is success:False JSON result { "error" : false , "data" :{ "analysis" :{ "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" :{ "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" :{ "name" : "ANY.RUN - Interactive Sandbox" , "plan" :{ "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" :[ ], "options" :{ "timeout" : 60 , "additionalTime" : 0 , "fakeNet" : false , "heavyEvasion" : false , "mitm" : false , "tor" :{ "used" : false , "geo" : "fastest" }, "presentation" : false , "video" : true , "hideSource" : false , "network" : true , "privacy" : "bylink" , "privateSample" : false , "automatization" :{ "uac" : false } }, "scores" :{ "verdict" :{ "score" : 100 , "threatLevel" : 2 , "threatLevelText" : "Malicious activity" }, "specs" :{ "injects" : false , "autostart" : false , "cpuOverrun" : false , "crashedApps" : false , "crashedTask" : false , "debugOutput" : false , "executableDropped" : false , "exploitable" : false , "lowAccess" : false , "memOverrun" : false , "multiprocessing" : true , } } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: if successful and got a report for at least one of the provided entities: "Found ANY.RUN reports for the following entities: {0}".format([entity.Identifier]).

