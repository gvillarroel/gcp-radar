---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.827Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "GetConnectorsData API"
feature_slug: "getconnectorsdata-api"
latest_feature_date: "2024-02-22"
deprecation_date: "2024-02-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
keywords:
  - "getconnectorsdata"
  - "api"
  - "provided"
  - "connector"
  - "for"
  - "accessible"
  - "definitions"
  - "and"
---

# GetConnectorsData API

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Provided connector data for accessible connector definitions and connector instances; deprecated on 2024-02-22.

## Extended Definition

Provided connector data for accessible connector definitions and connector instances; deprecated on 2024-02-22.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)

## Supporting Pages

### "Migrate from CrowdStrike Detects API to Alerts API \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Option 1: Update permissions for your existing CrowdStrike API client (Recommended) Option 2: Create and use a new CrowdStrike API client Option 1: Update permissions for your existing CrowdStrike API client (Recommended) This approach requires configuration changes only in your CrowdStrike Falcon console and has the lowest impact on existing detection rules that reference the CS DETECTS log type.
- CrowdStrike's deprecation of this API affects the following actions and connectors: Add Comment to Detection Close Detection Update Detection CrowdStrike - Detections Connector The SOAR CrowdStrike integration already supports the Alerts API, which replaces the Detections API.
- To set up and use the dashboard, perform the following steps: Navigate to the CrowdStrike support article and download the YAML file, titled, PlannedDecommissionofthedetectsAPI(September30,2025) , attached at the bottom of the page.
- CrowdStrike Detections API deprecation in SOAR integration The CrowdStrike Falcon SOAR integration used the Detections API within its actions and connectors.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- The following limit for the Forwarder Management is being enforced and is measured in queries per second (QPS): Backstory API API Endpoint Limit Forwarder Management Create Forwarder 1 QPS Get Forwarder 1 QPS List Forwarders 1 QPS Update Forwarder 1 QPS Delete Forwarder 1 QPS Collector Management Create Collector 1 QPS Get Collector 1 QPS List Collectors 1 QPS Update Collector 1 QPS Delete Collector 1 QPS Forwarder API Methods reference This section describes the endpoints for creating and managing forwarders.
- Request example DELETE https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56/collectors/98ab7cd6-54ef-3abc-d21e-1f23a4bcde56 Response example If the operation is successful, Delete Collector returns an empty response with an HTTP status code 200 (OK). {} Collector configuration fields The following fields can be provided in the config object of the request body.
- Request example DELETE https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56 Response example If the operation is successful, Delete Forwarder returns an empty response with an HTTP status code 200 (OK). {} Generate Forwarder Files Generates and returns the contents of the forwarder's configuration ( .conf ) and authentication ( auth.conf ) files.

### "Google SecOps APIs and libraries overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps recommends using the unified Chronicle API for the modern platform, case management and response workflows that provide a secure, compliant and extensible experience.
- Google SecOps APIs and libraries overview Supported in: Google secops SIEM This page provides an overview of the APIs available for Google Security Operations.
- Ingestion API The Ingestion API provides a high-volume interface designed for sending unstructured logs and telemetry data to Google SecOps.
- It includes the Feed Management, Detection Engine, Search, Forwarder Management, Data Export and Customer Management APIs.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.
- If you are building any custom logic for Dynamic List , make sure that it's provided in the description of the connector.
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.

