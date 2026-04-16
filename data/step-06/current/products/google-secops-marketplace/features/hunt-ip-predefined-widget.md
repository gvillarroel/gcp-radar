---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.657Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Hunt IP predefined widget"
feature_slug: "hunt-ip-predefined-widget"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender"
keywords:
  - "hunt"
  - "ip"
  - "predefined"
  - "widget"
  - "adds"
  - "for"
  - "the"
  - "action"
---

# Hunt IP predefined widget

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds a predefined widget for the Hunt IP action.

## Extended Definition

Adds a predefined widget for the Hunt IP action.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For example, if multiple rules share the same meta label tactic: exfiltration , you can have a composite rule that targets any detection where the tactic label has the value exfiltration .
- It does not automatically execute the underlying rules to generate new inputs for the test, which means you cannot validate an entire rule chain in a single action.
- Optimize for latency For minimal latency in detection pipelines, use single-event rules whenever possible, such as for the initial trigger.
- To run a retrohunt for the rule sequence, do the following: Manually start a retrohunt from the first rule in the sequence.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- If the action works in Async mode, then you need to provide the following note in the description: Note: Action is running as async, adjust script timeout value in Google SecOps IDE for action, as needed.
- The description for the parameter should explain to the user what impact that parameter has on the action execution.

### "Google SecOps overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Graph investigator Visualize the who, what, and when of an attack, identify opportunities for threat hunting, capture the full picture and take action.
- Integrated development environment (IDE) Security teams with coding skills can modify and enhance existing playbook actions, debug code, build new actions for existing integrations, and create integrations that are not available in the Content Hub.
- Playbook designer Build playbooks by selecting predefined actions and dragging and dropping them into the playbook canvas without additional coding.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Integrate Recommender with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table Available Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-27T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID ", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/", "member": "serviceAccount: SERVICE ACCOUNT ID ", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/i/locations/global/insightTypes/" } ], "priority": "P4" }, { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-27T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 5 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "user: USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/chroniclesm.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects", "member": "user: USER ID @example.com", "removedRole": "roles/chroniclesm.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully found recommendations for the provided criteria in the Google Cloud Recommender service.
- Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result { "applied recommendations": [ { "name": "projects/ PROJECT ID /locations/global/recommenders/google.iam.policy.Recommender/recommendations/217d3019-bae5-4a52-9968-787fdd546a53", "description": "Replace the current role with a smaller role to cover the permissions needed.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 610 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "add", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/-", "value": " USER ID @example.com", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /role": "roles/compute.instanceAdmin" } }, { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": " USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/compute.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "user: USER ID @example.com", "removedRole": "roles/compute.admin", "addedRoles": [ "roles/compute.instanceAdmin" ], "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "SUCCEEDED", "stateMetadata": { "applied by": "bulk apply by automated script-2023-08-11" } }, "etag": "\"892d57ee41baa03e\"", "recommenderSubtype": "REPLACE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/ INSIGHT ID " } ], "priority": "P4" }, { "name": "projects/ PROJECT ID /locations/global/recommenders/google.iam.policy.Recommender/recommendations/ RECOMMENDATION ID ", "description": "Replace the current role with a smaller role to cover the permissions needed.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 19 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "add", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/-", "value": "user: USER ID @example.com", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /role": "roles/storage.objectAdmin" } }, { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "user: USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/storage.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "user: USER ID @example.com", "removedRole": "roles/storage.admin", "addedRoles": [ "roles/storage.objectAdmin" ], "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "SUCCEEDED", "stateMetadata": { "applied by": "bulk apply by automated script-2023-08-11" } }, "etag": "\"af7635ffeb512998\"", "recommenderSubtype": "REPLACE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/ INSIGHT ID " } ], "priority": "P4" } ], "failed recommendations": [] } Case wall The action provides the following output messages: Output message Message description Successfully applied provided IAM recommendations.
- Example of the expected input: projects/projectname/locations/global/recommenders/google.iam.policy.Recommender/recommendations/0f262740-bf4a-4c3d-9573-0da3345cf3f7 Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully found recommendation in the Google Cloud Recommender service.
- Possible values are: Not Specified Failed Succeeded Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully updated recommendation in the Google Cloud Recommender service.

