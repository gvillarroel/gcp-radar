---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.653Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Rotate Service Account Keys"
feature_slug: "rotate-service-account-keys"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
keywords:
  - "rotate"
  - "account"
  - "keys"
  - "adds"
  - "an"
  - "action"
  - "for"
  - "rotating"
---

# Rotate Service Account Keys

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action for rotating service account keys.

## Extended Definition

Adds an action for rotating service account keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)

## Supporting Pages

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- The default is false . pcap settings.network interface string Optional The interface to listen to for PCAP data. pcap settings.bpf string Optional The Berkeley Packet Filter (BPF) for pcap. splunk settings.authentication.username string Optional The username of an identity used for authentication. splunk settings.authentication.password string Optional The password of the account identified by the username. splunk settings.host string Optional The host or IP address for the Splunk REST API. splunk settings.port integer Optional The port for the Splunk REST API. splunk settings.minimum window size integer Optional The minimum time range in seconds for a given Splunk search.
- The available collector types are: file kafka pcap splunk syslog file settings.file path string Optional The path of the file to monitor. kafka settings.authentication.username string Optional The username of an identity used for authentication. kafka settings.authentication.password string Optional The password of the account identified by the username. kafka settings.topic string Optional The Kafka topic from which to ingest data.
- Get these packages from https://pypi.org/project/google-api-python-client/ or run $ pip install google-api-python-client from your terminal from google.auth.transport import requests from google.oauth2 import service account SCOPES = ['https://www.googleapis.com/auth/chronicle-backstory'] The apikeys-demo.json file contains the customer's OAuth 2 credentials.

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Create Users(Dev need to be able to create their data in the company bucket) Create Groups (Developers as a group) Create Policies (John need to assign permissions to the users/group) Attach Policies (John attaches a policy to the group that lets devs read,write,list objects in AWS S3) Add/remove users from group (One of the devs becomes a manager, access should be changed) Before you begin This integration provides native platform capabilities and doesn't require external third-party API keys or credentials for authentication.
- If error User limitation - IAM user can be a member of 10 groups Group limitation - 5000 users can be in a group Print "Could not remove <UserName> from <Group name> because it attempted to create resources beyond the current AWS account limits." The action should fail and stop a playbook execution: If not successful (wrong creds, no connection, other sdk error): print "Error executing action 'Remove a User from a Group.
- If error User limitation - IAM user can be a member of 10 groups Group limitation - 5000 users can be in a group Print "Could not add <UserName> to <Group name> because it attempted to create resources beyond the current AWS account limits." The action should fail and stop a playbook execution: If not successful (wrong creds, no connection, other sdk error): print "Error executing action 'Add a User to a Group.
- Reason: {exception.stacktrace} General CSV Table Title: IAM Groups Columns: Group name Group ID ARN Creation Date General Create a Policy Description Create an IAM customer managed policy for your AWS account.

### "Integrate Recommender with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/google-cloud-recommender)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table Available Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-27T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID ", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/", "member": "serviceAccount: SERVICE ACCOUNT ID ", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/i/locations/global/insightTypes/" } ], "priority": "P4" }, { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-27T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 5 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "user: USER ID @example.com", "/iamPolicy/bindings/ /role": "roles/chroniclesm.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects", "member": "user: USER ID @example.com", "removedRole": "roles/chroniclesm.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully found recommendations for the provided criteria in the Google Cloud Recommender service.
- The parameter should be a string in any of the following formats: PROJECTS OR ORGANIZATIONS / PROJECT OR ORGANIZATION NAME OR ID //cloudresourcemanager.googleapis.com/ PROJECTS OR ORGANIZATIONS / PROJECT OR ORGANIZATION NAME OR ID If no value is provided, the action fetches the project ID from the configured service account.
- Grant impersonation permissions: The final step is to grant your instance identity the permission to act as your target service account, allowing it to perform actions without requiring a static key file.
- Example of the expected input: projects/projectname/locations/global/recommenders/google.iam.policy.Recommender/recommendations/0f262740-bf4a-4c3d-9573-0da3345cf3f7 Action outputs Action output type Case wall attachment N/A Case wall link N/A Case wall table N/A Enrichment table N/A Entity insight N/A Insight N/A JSON result Available OOTB widget N/A Script result Available Script result Script result name Value is success True/False JSON result [ { "name": "name", "description": "This role has not been used during the observation window.", "lastRefreshTime": "2023-07-28T07:00:00Z", "primaryImpact": { "category": "SECURITY", "securityProjection": { "details": { "revokedIamPermissionsCount": 68 } } }, "content": { "operationGroups": [ { "operations": [ { "action": "remove", "resourceType": "cloudresourcemanager.googleapis.com/Project", "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "path": "/iamPolicy/bindings/ /members/ ", "pathFilters": { "/iamPolicy/bindings/ /condition/expression": "", "/iamPolicy/bindings/ /members/ ": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "/iamPolicy/bindings/ /role": "roles/monitoring.admin" } } ] } ], "overview": { "resource": "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID ", "member": "serviceAccount: SERVICE ACCOUNT ID .iam.gserviceaccount.com", "removedRole": "roles/monitoring.admin", "minimumObservationPeriodInDays": "0" } }, "stateInfo": { "state": "ACTIVE" }, "etag": "", "recommenderSubtype": "REMOVE ROLE", "associatedInsights": [ { "insight": "projects/ PROJECT ID /locations/global/insightTypes/google.iam.policy.Insight/insights/" } ], "priority": "P4" } ] Case wall The action provides the following output messages: Output message Message description Successfully found recommendation in the Google Cloud Recommender service.

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "campaign" : [ { "name" : "Example 1" , "id" : 1 }, { "name" : "Example 2" , "id" : 2 } ], "actor" : [ { "name" : "Actor 1" , "id" : 1 }, { "name" : "Actor 2" , "id" : 2 } ], "attackpattern" : [ { "name" : "Pattern 1" , "id" : 1 }, { "name" : "Pattern 2" , "id" : 2 } ], "courseofaction" : [ { "name" : "Course of Action 1" , "id" : 1 }, { "name" : "Course Of Action 2" , "id" : 2 } ], "identity" : [ { "name" : "Identity 1" , "id" : 1 }, { "name" : "Identity 2" , "id" : 2 } ], "incident" : [ { "name" : "Incident 1" , "id" : 1 }, { "name" : "Incident 2" , "id" : 2 } ], "infrastructure" : [ { "name" : "Infrustructure 1" , "id" : 1 }, { "name" : "Infrustructure 2" , "id" : 2 } ], "intrusionset" : [ { "name" : "Intrusion set 1" , "id" : 1 }, { "name" : "Intrusion set 2" , "id" : 2 } ], "malware" : [ { "name" : "Malware 1" , "id" : 1 }, { "name" : "Malware 2" , "id" : 2 } ], "signature" : [ { "name" : "Signature 1" , "id" : 1 }, { "name" : "Signature 2" , "id" : 2 } ], "tool" : [ { "name" : "Tool 1" , "id" : 1 }, { "name" : "Tool 2" , "id" : 2 } ], "ttp" : [ { "name" : "TTP 1" , "id" : 1 }, { "name" : "TTP 2" , "id" : 2 } ], "vulnerability" : [ { "name" : "Vulnerability 1" , "id" : 1 }, { "name" : "Vulnerability 2" , "id" : 2 } ], } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one association across entities is found (is success=true): "Successfully retrieved related associations from Anomali ThreatStream" If no associations are found (is success=false) : "No related associations were found." Async Message: "Waiting for all of the association details to be retrieved" The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Association".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Entity enrichment Enrichment field name Logic - When to apply id When available in JSON status When available in JSON itype When available in JSON expiration time When available in JSON ip When available in JSON feed id When available in JSON confidence When available in JSON uuid When available in JSON retina confidence When available in JSON trusted circle ids When available in JSON source When available in JSON latitude When available in JSON type When available in JSON description When available in JSON tags When available in JSON threat score When available in JSON source confidence When available in JSON modification time When available in JSON org name When available in JSON asn When available in JSON creation time When available in JSON tlp When available in JSON country When available in JSON longitude When available in JSON severity When available in JSON subtype When available in JSON report When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one of the provided entities is enriched (is success=true): "Successfully enriched the following entities using Anomali ThreatStream: \n {0}".format(entity.identifier list) If failed to enrich specific entities (is success=true): "Action was not able to enrich the following entities using Anomali ThreatStream\n: {0}".format([entity.identifier]) If failed to enrich all entities (is success=false): "No entities were enriched." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Enrich Entities".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one tag is removed from one entity (is success=true): "Successfully removed the following tags from the "{entity.identifier}" entity in Anomali ThreatStream:\n{0}".format(tags) If one tag is not found for one entity (is success=true): "The following tags were already not a part of "{entity.identifier}" entity in Anomali ThreatStream:\n{0}".format(tags) If all tags are not found for one entity (is success=true): "None of the provided tags were part of "{entity.identifier}" entity in Anomali ThreatStream." If one entity is not found (is success=true): "The following entities were not found in Anomali ThreatStream\n: {0}".format([entity.identifier]) If all entities are not found (is success=false): "None of the provided entities were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Remove Tags From Entities".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result approved jobs = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] jobs wi t h excluded e nt i t ies = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found(is success=true): "Successfully submitted and approved the following entities in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fails to enrich some entities (rejected entities) (is success=true): "Action was not able to successfully submit and approve the following entities in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fails to enrich for all entities (is success=false): "No entities were successfully submitted to Anomali ThreatStream." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Submit Observables".

