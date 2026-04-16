---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.666Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Generate UDM Query"
feature_slug: "generate-udm-query"
latest_feature_date: "2025-11-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/administration/audit-logging"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
keywords:
  - "generate"
  - "udm"
  - "query"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "generates"
---

# Generate UDM Query

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that generates a UDM query in Google Chronicle.

## Extended Definition

Adds an action that generates a UDM query in Google Chronicle.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)

## Supporting Pages

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- Request example DELETE https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56 Response example If the operation is successful, Delete Forwarder returns an empty response with an HTTP status code 200 (OK). {} Generate Forwarder Files Generates and returns the contents of the forwarder's configuration ( .conf ) and authentication ( auth.conf ) files.
- Response example { "forwarders": [ { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56", "displayName": "chronicle forwarder 1", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, ... }, }, "state": "ACTIVE" }, { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde57", "displayName": "chronicle forwarder 2", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, ... }, }, "state": "ACTIVE" } ] } Update Forwarder You can update a forwarder by using the updateMask URL query parameter to specify the fields to update.
- Note: This is a global setting that applies to the forwarder and the forwarder's collectors, unless it is overridden at the collector level. metadata.labels.key string Optional The key for a field in the metadata labels list. metadata.labels.value string Optional The value for a field in the metadata labels list. regex filters.description string Optional Describes what is being filtered and why. regex filters.regexp string Optional The regular expression used to match against each incoming line. regex filters.behavior enum Optional Specifies the state of the server functionality.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.
- Supported devices and required log types for Okta These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Tune alerts returned by rule sets You can reduce the number of detections a rule or rule set generates using rule exclusions .
- CDIR SCC Enhanced Exfiltration : Contains context-aware rules that correlate Security Command Center Exfiltration findings with other log sources, including Cloud Audit Logs logs, Sensitive Data Protection context, BigQuery context and Security Command Center Misconfiguration logs.

### "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.methodName="google.cloud.chronicle.v1main.RuleService.UpdateRule" Example: cloudresourcemanager.googleapis.com service name log To find the users who updated an access control role or subject, run the following query in the Logs Explorer : resource.type="project" resource.labels.service="cloudresourcemanager.googleapis.com" protoPayload.methodName="SetIamPolicy" Examples: malachitefrontend-pa.googleapis.com service name logs The following sections describe common use cases for Cloud Audit Logs that use the malachitefrontend-pa.googleapis.com service name.
- Actions in Google SecOps that generate this type of log include creating a Google Cloud Association and updating Google Cloud log filters. chronicleservicemanager.googleapis.com/gcpAssociations.create chronicleservicemanager.googleapis.com/gcpAssociations.delete chronicleservicemanager.googleapis.com/gcpSettings.delete Data Access audit logs Includes admin read operations that read metadata or configuration information.
- Actions in Google SecOps that generate this type of log include listing instances and customer metadata. chronicleservicemanager.googleapis.com/gcpAssociations.get chronicleservicemanager.googleapis.com/gcpSettings.get Logs with service name malachitefrontend-pa.googleapis.com The following log types are available for Google SecOps audit logs with the malachitefrontend-pa.googleapis.com service name.
- Actions in Google SecOps that generate this type of log include updating feeds and creating rules. chronicle.googleapis.com/feeds.update chronicle.googleapis.com/rules.create chronicle.googleapis.com/parsers.activate Data Access audit logs Includes admin read operations that read metadata or configuration information.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The access permissions are summarized in the following table: Action Global user Scoped user Can create scoped list Yes Yes (with scopes that match their assigned scopes or are a subset of their assigned scopes) For example, scoped user with scopes A and B can create a reference list with scope A or with scopes A and B, but not with scopes A, B, and C.
- The access permissions are summarized in the following table: Action Global user Scoped user Can create scoped data table Yes Yes (only with scopes that match or are a subset of their assigned scopes) For example, scoped user with scopes A and B can create a data table with scope A or with scopes A and B, but not with scopes A, B, and C.
- The actions that a user can take on a detection (for example, marking a detection as resolved) are also limited to the scope in which the detection occurred.
- Reference lists Reference lists are collections of values that are used for matching and filtering data in UDM Search and detection rules.

