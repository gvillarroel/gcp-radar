---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.823Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "General Placeholders"
feature_slug: "general-placeholders"
latest_feature_date: "2024-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics"
keywords:
  - "general"
  - "placeholders"
  - "adds"
  - "section"
  - "for"
  - "manually"
  - "entering"
---

# General Placeholders

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Adds a section for manually entering general placeholders.

## Extended Definition

Adds a section for manually entering general placeholders.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.
- In general, the structure of the name should be like this: {integration display name} - {data that is being ingested} Connector For example: Crowdstrike - Pull Alerts Connector Description The Description of the connector should highlight to the user what will be ingested by the connector; for example, Pull alerts from Crowdstrike .
- In general, if the action finished execution and performed an operation, is success should be true .

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-api-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- The following limit for the Forwarder Management is being enforced and is measured in queries per second (QPS): Backstory API API Endpoint Limit Forwarder Management Create Forwarder 1 QPS Get Forwarder 1 QPS List Forwarders 1 QPS Update Forwarder 1 QPS Delete Forwarder 1 QPS Collector Management Create Collector 1 QPS Get Collector 1 QPS List Collectors 1 QPS Update Collector 1 QPS Delete Collector 1 QPS Forwarder API Methods reference This section describes the endpoints for creating and managing forwarders.
- Request example This is an example of an Update Forwarder request where the request specifies new values for displayName and adds a Metadata label.
- Collector API Methods reference This section describes the endpoints for working with collectors.
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-root-2`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- In the New principals field, do the following: If you're using Workforce Identity Federation or any other third party authentication, add your principal identifier as follows: principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ USER EMAIL ADDRESS Replace the following: POOL ID : the identifier for the pool created for your identity provider.
- Enter the following expression: (scope-name: resource.name.endsWith(' /SCOPENAME1 ') resource.name.endsWith(' /SCOPENAME2 ') … resource.name.endsWith(' /SCOPENAME ')) Replace /SCOPENAME1 , /SCOPENAME2 , and other placeholders with the scope names that you want to assign to the principle.
- Before you begin To understand the core concepts of data RBAC, different access types, and the corresponding user roles, the working of labels and scopes, and the impact of data RBAC on Google SecOps features, see Overview of Data RBAC .

### "Overview of context-aware analytics \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics](https://docs.cloud.google.com/chronicle/docs/detection/context-aware-analytics)
- Source ID: `site-docs-root-2`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Invalid. $host over 3h after $e1 condition: $e1 and $e2 } Login example using outcome section The following example uses the outcome section to calculate a risk score for the detection. rule Detection { meta: events: $auth.metadata.event type = "USER LOGIN" $auth.metadata.vendor name = "Acme" $auth.metadata.product name = "Acme SSO" $auth.target.user.userid = $user $auth.metadata.event timestamp.seconds > $context.graph.entity.user.termination date.seconds $context.graph.metadata.vendor name = "Microsoft" $context.graph.metadata.product name = "Azure Active Directory" $context.graph.metadata.entity type = "USER" $context.graph.entity.user.userid = $user $context.graph.entity.user.termination date.seconds > 0 match: $user over 15m outcome: $risk score = max( if ( $auth.metadata.event type = "USER LOGIN", 50) + if ( $context.graph.entity.user.title = "Remote" nocase or $context.graph.entity.user.title = "Temp" nocase or $context.graph.entity.user.title = "Vendor" nocase, 40) + if ( $context.graph.entity.user.title = "Legal" nocase, 10) ) condition: $auth and $context } Suspicious process launch example The following example evaluates UDM event process data against IOC context data stored as an entity context. rule ProcessLaunch { meta: events: $ioc.graph.metadata.vendor name = "ACME" $ioc.graph.metadata.product name = "IOCs" $ioc.graph.metadata.entity type = "FILE" $ioc.graph.entity.file.sha256 = $hash $process.metadata.event type = "PROCESS LAUNCH" $process.principal.hostname = $hostname ( not $process.target.process.file.sha256 = "" and $process.target.process.file.sha256 = $hash ) match: $hash over 15m condition: $ioc and $process } Additional qualifiers for entity context To create an event variable that uses an entity context, you must provide a <source> after the event name.
- Context-aware analytics incorporates advanced enrichment capabilities earlier in the detection authoring and execution workflow, enabling you to provide the following additional capabilities: Making relevant context available for heuristic-driven contextual risk scoring of detections at detection execution time rather than at the human triage stage Reducing time spent on triage and manually stitching together information from disparate IT security systems (EDR consoles, firewall or proxy logs, CMDB and IAM context, vulnerability scan results) Enabling analysts and detection engineers to filter out entire clusters of threats that may be expected or represent little or no danger to the enterprise (malware testing in a sandbox environment, vulnerabilities and anomalous activity in a development network with no sensitive data or access, and more) Writing rules for context-aware analytics You can use Detection Engine rules to search for entity context data in your Google SecOps account.
- Outcome section and detection deduplication / detection grouping For rules with a match section, recall that detections are "grouped by" the match variables.
- Outcome section Detection engine supports an outcome section that lets you derive more information from a rule.

