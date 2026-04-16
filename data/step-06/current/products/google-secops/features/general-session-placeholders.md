---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.888Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "General session placeholders"
feature_slug: "general-session-placeholders"
latest_feature_date: "2024-01-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
keywords:
  - "session"
  - "placeholders"
  - "soar"
  - "side"
  - "platform"
  - "now"
  - "includes"
  - "state"
---

# General session placeholders

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The SOAR side of the platform now includes session-state placeholders such as current user and platform values in a General section.

## Extended Definition

The SOAR side of the platform now includes session-state placeholders such as current user and platform values in a General section.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)

## Supporting Pages

### "Understand the Google SecOps platform \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ingesting data using SecOps SIEM and third party SIEMS The Google SecOps platform offers the opportunity to not only ingest alerts using the inbuilt SIEM platform (which ingests raw logs using forwarders and data feeds) but also accepts alerts from third party SIEMS (via SOAR > Connectors and Webhooks).
- This is because the Google Security Operations platform provides tools for security information and event management (SIEM) and security orchestration, automation, and response (SOAR).
- These platform-wide settings includes these pages to manage user access: IDP Group Mapping : Maps all external Identity Provider (IdP) groups to Google SecOps platform user groups.
- Understand the Google SecOps platform Supported in: Google secops Following the article Navigate the platform you will see that there are areas divided into SIEM and SOAR.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Migrate webhooks You need to migrate SOAR webhooks to the Chronicle API by doing the following before September 30, 2026: Update the webhook URL on the client side by replacing the legacy siemplify-soar.com domain with the new googleapis.com domain using the new request format .
- Following the downtime, the platform will be accessible, and SOAR services will resume processing any alerts generated or ingested during the downtime.
- Migrate Google owned SOAR Project to Google Cloud The migration involves up to 90 minute downtime where the Google SecOps platform is not accessible.
- Stage 1 includes the following migrations: Migration of your Google-owned SOAR Project to Google Cloud infrastructure.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- PATCH https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56?updateMask=displayName,config.logType,config.metadata.assetNamespace,config.syslogSettings.protocol { "display name": "UpdatedCollector" "config": { "metadata": { "asset namespace": "COLLECTOR", }, "log type": "CISCO ASA FIREWALL", "syslog settings": { "protocol": "TCP", } } } Response example This is an example of the response returned for the request example above. { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56", "displayName": "UpdatedCollector", "config": { "logType": "CISCO ASA FIREWALL", "metadata": { "assetNamespace": "COLLECTOR" }, "maxSecondsPerBatch": 10, "maxBytesPerBatch": "1048576", "syslogSettings": { "protocol": "TCP", "address": "0.0.0.0", "port": 10514, } }, "state": "ACTIVE" } Delete Collector Deletes a collector.
- Request example GET https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56 Response example { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56", "displayName": "chronicle forwarder", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, "drainTimeout": 10, "httpSettings": { "port": "8080", "host": "0.0.0.0", "readTimeout": "3", "readHeaderTimeout": "3", "writeTimeout": "3", "idleTimeout": "3" "routeSettings": { "availableStatusCode": "204", "readyStatusCode": "204", "unreadyStatusCode": "503" }, }, }, }, "state": "ACTIVE" } List Forwarders Lists all of the forwarders for a Google SecOps instance.
- PATCH https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56?updateMask=displayName,config.metadata.labels { "display name": "UpdatedForwarder", "config": { "metadata": { "labels": [ { "key": "office", "value": "corporate", } ] } } } Response example This is an example of the response returned for the request example above. { "name": "forwarders/{forwarderUUID}", "displayName": "UpdatedForwarder", "config": { "uploadCompression": "false", "metadata": { "labels": [ { "key": "office", "value": "corporate" } ] } }, "state": "ACTIVE" } Delete Forwarder Deletes a forwarder.

