---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.655Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Get Endpoints predefined widget"
feature_slug: "get-endpoints-predefined-widget"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "get"
  - "endpoints"
  - "predefined"
  - "widget"
  - "adds"
  - "for"
  - "the"
  - "action"
---

# Get Endpoints predefined widget

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds a predefined widget for the Get Endpoints action.

## Extended Definition

Adds a predefined widget for the Get Endpoints action.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Integrate Recommender with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table Available Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-27T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID ", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/", "member": "serviceAccount: SERVICE ACCOUNT ID ", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/i/locations/global/insightTypes/" } ], "priority": "P4" }, { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-27T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 5 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "user: USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/chroniclesm.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects", "member": "user: USER ID @example.com", "removedRole": "roles/chroniclesm.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully found recommendations for the provided criteria in the Google Cloud Recommender service.
- Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result { "applied recommendations": [ { "name": "projects/ PROJECT ID /locations/global/recommenders/google.iam.policy.Recommender/recommendations/217d3019-bae5-4a52-9968-787fdd546a53", "description": "Replace the current role with a smaller role to cover the permissions needed.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 610 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "add", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/-", "value": " USER ID @example.com", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /role": "roles/compute.instanceAdmin" } }, { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": " USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/compute.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "user: USER ID @example.com", "removedRole": "roles/compute.admin", "addedRoles": [ "roles/compute.instanceAdmin" ], "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "SUCCEEDED", "stateMetadata": { "applied by": "bulk apply by automated script-2023-08-11" } }, "etag": "\"892d57ee41baa03e\"", "recommenderSubtype": "REPLACE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/ INSIGHT ID " } ], "priority": "P4" }, { "name": "projects/ PROJECT ID /locations/global/recommenders/google.iam.policy.Recommender/recommendations/ RECOMMENDATION ID ", "description": "Replace the current role with a smaller role to cover the permissions needed.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 19 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "add", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/-", "value": "user: USER ID @example.com", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /role": "roles/storage.objectAdmin" } }, { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "user: USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/storage.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "user: USER ID @example.com", "removedRole": "roles/storage.admin", "addedRoles": [ "roles/storage.objectAdmin" ], "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "SUCCEEDED", "stateMetadata": { "applied by": "bulk apply by automated script-2023-08-11" } }, "etag": "\"af7635ffeb512998\"", "recommenderSubtype": "REPLACE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/ INSIGHT ID " } ], "priority": "P4" } ], "failed recommendations": [] } Case wall The action provides the following output messages: Output message Message description Successfully applied provided IAM recommendations.
- Example of the expected input: projects/projectname/locations/global/recommenders/google.iam.policy.Recommender/recommendations/0f262740-bf4a-4c3d-9573-0da3345cf3f7 Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully found recommendation in the Google Cloud Recommender service.
- Possible values are: Not Specified Failed Succeeded Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully updated recommendation in the Google Cloud Recommender service.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- Actions Name The Name of the action should point to the activity that is being performed; for example, Get Case Details , List Entity Events , or Execute Search .
- If a predefined widget is updated: {action name} - Updated Predefined Widget.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- The following limit for the Forwarder Management is being enforced and is measured in queries per second (QPS): Backstory API API Endpoint Limit Forwarder Management Create Forwarder 1 QPS Get Forwarder 1 QPS List Forwarders 1 QPS Update Forwarder 1 QPS Delete Forwarder 1 QPS Collector Management Create Collector 1 QPS Get Collector 1 QPS List Collectors 1 QPS Update Collector 1 QPS Delete Collector 1 QPS Forwarder API Methods reference This section describes the endpoints for creating and managing forwarders.
- Request example GET https://backstory.googleapis.com/v2/forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56 Response example { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56", "displayName": "chronicle forwarder", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, "drainTimeout": 10, "httpSettings": { "port": "8080", "host": "0.0.0.0", "readTimeout": "3", "readHeaderTimeout": "3", "writeTimeout": "3", "idleTimeout": "3" "routeSettings": { "availableStatusCode": "204", "readyStatusCode": "204", "unreadyStatusCode": "503" }, }, }, }, "state": "ACTIVE" } List Forwarders Lists all of the forwarders for a Google SecOps instance.
- Response example This is an example of the response returned for the request example above. { "name": "forwarders/12ab3cd4-56ef-7abc-d89e-1f23a4bcde56", "displayName": "chronicle forwarder", "config": { "uploadCompression": "false", "serverSettings": { "gracefulTimeout": 15, "drainTimeout": 10, "httpSettings": { "port": "8080", "host": "0.0.0.0", "readTimeout": "3", "readHeaderTimeout": "3", "writeTimeout": "3", "idleTimeout": "3" "routeSettings": { "availableStatusCode": "204", "readyStatusCode": "204", "unreadyStatusCode": "503" }, }, }, }, "state": "ACTIVE" } Get Forwarder Returns a forwarder.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- A dashboard widget then shows which users are approaching a daily egress limit (for example, 10,000 bytes).
- By setting a rule to detect only and then plotting its detections in a dashboard widget, you can track trends, identify outliers, and gain a high-level audit view of the activity without being overwhelmed by individual alerts.
- For example, if multiple rules share the same meta label tactic: exfiltration , you can have a composite rule that targets any detection where the tactic label has the value exfiltration .
- It does not automatically execute the underlying rules to generate new inputs for the test, which means you cannot validate an entire rule chain in a single action.

