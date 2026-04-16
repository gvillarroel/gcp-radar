---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.675Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Ask Gemini"
feature_slug: "ask-gemini"
latest_feature_date: "2025-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx"
keywords:
  - "ask"
  - "gemini"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "uses"
  - "to"
---

# Ask Gemini

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that uses Gemini to assist with enrichment.

## Extended Definition

Adds an action that uses Gemini to assist with enrichment.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx)

## Supporting Pages

### "Answer Threat Intelligence questions with Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can ask Gemini questions about MITRE tactics, techniques, and procedures (TTPs), and receive contextually relevant answers that include the following MITRE details: Tactic Technique Sub-technique Detection suggestions Procedures Mitigations Gemini returns a link to the curated detections Google SecOps makes available for each TTP.
- Links are provided to any rule sets that might be available for monitoring the type of security issue you entered into Gemini.
- You can also ask Gemini follow up questions to gain additional insight on a MITRE TTP and how it might impact your enterprise.
- Answer Threat Intelligence questions with Gemini Supported in: Google secops SIEM Gemini can answer questions related to threat intelligence about topics such as threat actors, their associations, and their behavior patterns, including questions about MITRE TTPs .

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- PATCH https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56?updateMask=displayName,config.logType,config.metadata.assetNamespace,config.syslogSettings.protocol { "display name": "UpdatedCollector" "config": { "metadata": { "asset namespace": "COLLECTOR", }, "log type": "CISCO ASA FIREWALL", "syslog settings": { "protocol": "TCP", } } } Response example This is an example of the response returned for the request example above. { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56", "displayName": "UpdatedCollector", "config": { "logType": "CISCO ASA FIREWALL", "metadata": { "assetNamespace": "COLLECTOR" }, "maxSecondsPerBatch": 10, "maxBytesPerBatch": "1048576", "syslogSettings": { "protocol": "TCP", "address": "0.0.0.0", "port": 10514, } }, "state": "ACTIVE" } Delete Collector Deletes a collector.
- PATCH https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56?updateMask=displayName,config.metadata.labels { "display name": "UpdatedForwarder", "config": { "metadata": { "labels": [ { "key": "office", "value": "corporate", } ] } } } Response example This is an example of the response returned for the request example above. { "name": "forwarders/{forwarderUUID}", "displayName": "UpdatedForwarder", "config": { "uploadCompression": "false", "metadata": { "labels": [ { "key": "office", "value": "corporate" } ] } }, "state": "ACTIVE" } Delete Forwarder Deletes a forwarder.
- Response example { "forwarders": [ { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56", "displayName": "chronicle forwarder 1", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, ... }, }, "state": "ACTIVE" }, { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde57", "displayName": "chronicle forwarder 2", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, ... }, }, "state": "ACTIVE" } ] } Update Forwarder You can update a forwarder by using the updateMask URL query parameter to specify the fields to update.

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Entity Any/Run Report Entity identifier for which insight is created Value from api response Value from api response Value from api response Script result Script result name Value options Example is success True or False is success:False JSON result { "error" : false , "data" :{ "analysis" :{ "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" :{ "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" :{ "name" : "ANY.RUN - Interactive Sandbox" , "plan" :{ "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" :[ ], "options" :{ "timeout" : 60 , "additionalTime" : 0 , "fakeNet" : false , "heavyEvasion" : false , "mitm" : false , "tor" :{ "used" : false , "geo" : "fastest" }, "presentation" : false , "video" : true , "hideSource" : false , "network" : true , "privacy" : "bylink" , "privateSample" : false , "automatization" :{ "uac" : false } }, "scores" :{ "verdict" :{ "score" : 100 , "threatLevel" : 2 , "threatLevelText" : "Malicious activity" }, "specs" :{ "injects" : false , "autostart" : false , "cpuOverrun" : false , "crashedApps" : false , "crashedTask" : false , "debugOutput" : false , "executableDropped" : false , "exploitable" : false , "lowAccess" : false , "memOverrun" : false , "multiprocessing" : true , } } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: if successful and got a report for at least one of the provided entities: "Found ANY.RUN reports for the following entities: {0}".format([entity.Identifier]).
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. is suspicious: if data.get("score") > threshold Enrichment field name Logic - When to apply domain Returns if it exists in JSON result should block Returns if it exists in JSON result score Returns if it exists in JSON result disposable Returns if it exists in JSON result has mx records Returns if it exists in JSON result has spf records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for the provided file: "Successfully created analysis task for file: {0}".format(file path).
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "analysis" : { "uuid" : " UUID " , "permanentUrl" : "https://app.any.run/tasks/ UUID " , "reports" : { "IOC" : "https://api.any.run/report/ UUID /ioc/json" , "MISP" : "https://api.any.run/report/ UUID /summary/misp" , "HTML" : "https://api.any.run/report/ UUID /summary/html" , "graph" : "https://content.any.run/tasks/ UUID /graph" }, "sandbox" : { "name" : "ANY.RUN - Interactive Sandbox" , "plan" : { "name" : "Tester" } }, "duration" : 60 , "creation" : 1602483368256 , "creationText" : "2020-10-12T06:16:08.256Z" , "tags" : [], "options" : { } } } } Case wall Result type Description Type Output message Action should not fail and not stop playbook execution: If successfully created analysis task for at least one of the provided entities: "Created analysis tasks for the following entities: {0}".format([entity.Identifier]).
- Action results Entity enrichment Mark entity as suspicious if the number of negative engines is equal or above the given threshold. if data.get("report", {}).get("risk score", {}).get("result") > threshold Enrichment Field name Logic - When to apply domain blacklist Returns if it exists in JSON result html forms Returns if it exists in JSON result server details Returns if it exists in JSON result response headers Returns if it exists in JSON result redirection Returns if it exists in JSON result file type Returns if it exists in JSON result risk score Returns if it exists in JSON result security checks Returns if it exists in JSON result geo location Returns if it exists in JSON result url parts Returns if it exists in JSON result site category Returns if it exists in JSON result web page Returns if it exists in JSON result dns records Returns if it exists in JSON result Script result Script result name Value options Example is success True or False is success:False JSON result Option 1: If wait for report checkbox is not set, we return the info about the created analysis task (response to request 1) { "error" : false , "data" : { "taskid" : " TASK ID " } } Option 2.

### "Integrate Anomali STAXX with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: if successful: "Successfully connected to the Anomali STAXX server with the provided connection parameters!" The action should fail and stop a playbook execution: If not successful: "Failed to connect to the Anomali STAXX server!
- To streamline and improve the mapping process for the connector, the default value resolves to a fallback value that is referenced from the code.
- Verify SSL Checkbox Unchecked No If enabled, verifies that the SSL certificate for the connection to the Anomali STAXX server is valid.
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.

