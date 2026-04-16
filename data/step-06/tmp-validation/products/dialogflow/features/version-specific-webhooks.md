---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.749Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Version-specific webhooks"
feature_slug: "version-specific-webhooks"
latest_feature_date: "2022-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-versions"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview"
keywords:
  - "assigning"
  - "specific"
  - "webhooks"
  - "versions"
  - "version"
  - "supports"
---

# Version-specific webhooks

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports assigning webhooks to specific versions.

## Extended Definition

Dialogflow CX supports assigning webhooks to specific versions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-versions](https://docs.cloud.google.com/dialogflow/es/docs/agents-versions)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Project Location Version Builder Builder for projects/{project}/locations/{location}/agent/versions/{version}. com. google. cloud. dialogflow. v2.
- Environment You can create multiple versions of your agent and publish them to separate environments. com. google. cloud. dialogflow. v2.
- Builder You can create multiple versions of your agent and publish them to separate environments. com. google. cloud. dialogflow. v2.
- Version You can create multiple versions of your agent and publish them to separate environments. com. google. cloud. dialogflow. v2.

### Versions and environments \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-versions](https://docs.cloud.google.com/dialogflow/es/docs/agents-versions)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations The following limitations apply: Maximum number of environments per agent: 10 Maximum number of versions per agent: 1000 Previous arrow back Prebuilt agents Next Multilingual agents arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Consider possible agent errors while changing versions If you change an agent version in your production environment while sessions are active, it may cause agent errors for some active sessions.
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Versions and environments Stay organized with collections Save and categorize content based on your preferences.
- Draft agents should be tested before promoting them to production versions, and you can rollback to a previous version if any problems are discovered.

### Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v3.projects.locations REST Resource: v3.projects.locations.agents REST Resource: v3.projects.locations.agents.changelogs REST Resource: v3.projects.locations.agents.entityTypes REST Resource: v3.projects.locations.agents.environments REST Resource: v3.projects.locations.agents.environments.continuousTestResults REST Resource: v3.projects.locations.agents.environments.deployments REST Resource: v3.projects.locations.agents.environments.experiments REST Resource: v3.projects.locations.agents.environments.sessions REST Resource: v3.projects.locations.agents.environments.sessions.entityTypes REST Resource: v3.projects.locations.agents.flows REST Resource: v3.projects.locations.agents.flows.pages REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups REST Resource: v3.projects.locations.agents.flows.versions REST Resource: v3.projects.locations.agents.generators REST Resource: v3.projects.locations.agents.intents REST Resource: v3.projects.locations.agents.playbooks REST Resource: v3.projects.locations.agents.playbooks.examples REST Resource: v3.projects.locations.agents.playbooks.versions REST Resource: v3.projects.locations.agents.sessions REST Resource: v3.projects.locations.agents.sessions.entityTypes REST Resource: v3.projects.locations.agents.testCases REST Resource: v3.projects.locations.agents.testCases.results REST Resource: v3.projects.locations.agents.tools REST Resource: v3.projects.locations.agents.tools.versions REST Resource: v3.projects.locations.agents.transitionRouteGroups REST Resource: v3.projects.locations.agents.webhooks REST Resource: v3.projects.locations.operations REST Resource: v3.projects.locations.securitySettings REST Resource: v3.projects.operations Service: dialogflow.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v3.projects.locations.agents.flows.versions Methods compareVersions POST /v3/{baseVersion=projects/ /locations/ /agents/ /flows/ /versions/ }:compareVersions Compares the specified base version with target version. create POST /v3/{parent=projects/ /locations/ /agents/ /flows/ }/versions Creates a Version in the specified Flow . delete DELETE /v3/{name=projects/ /locations/ /agents/ /flows/ /versions/ } Deletes the specified Version . get GET /v3/{name=projects/ /locations/ /agents/ /flows/ /versions/ } Retrieves the specified Version . list GET /v3/{parent=projects/ /locations/ /agents/ /flows/ }/versions Returns the list of all versions in the specified Flow . load POST /v3/{name=projects/ /locations/ /agents/ /flows/ /versions/ }:load Loads resources in the specified version to the draft flow. patch PATCH /v3/{version.name=projects/ /locations/ /agents/ /flows/ /versions/ } Updates the specified Version .
- REST Resource: v3.projects.locations.agents.playbooks.versions Methods create POST /v3/{parent=projects/ /locations/ /agents/ /playbooks/ }/versions Creates a version for the specified Playbook. delete DELETE /v3/{name=projects/ /locations/ /agents/ /playbooks/ /versions/ } Deletes the specified version of the Playbook. get GET /v3/{name=projects/ /locations/ /agents/ /playbooks/ /versions/ } Retrieves the specified version of the Playbook. list GET /v3/{parent=projects/ /locations/ /agents/ /playbooks/ }/versions Lists versions for the specified Playbook. restore POST /v3/{name=projects/ /locations/ /agents/ /playbooks/ /versions/ }:restore Retrieves the specified version of the Playbook and stores it as the current playbook draft, returning the playbook with resources updated.
- REST Resource: v3.projects.locations.agents.tools.versions Methods create POST /v3/{parent=projects/ /locations/ /agents/ /tools/ }/versions Creates a version for the specified Tool . delete DELETE /v3/{name=projects/ /locations/ /agents/ /tools/ /versions/ } Deletes the specified version of the Tool . get GET /v3/{name=projects/ /locations/ /agents/ /tools/ /versions/ } Retrieves the specified version of the Tool . list GET /v3/{parent=projects/ /locations/ /agents/ /tools/ }/versions List versions of the specified Tool . restore POST /v3/{name=projects/ /locations/ /agents/ /tools/ /versions/ }:restore Retrieves the specified version of the Tool and stores it as the current tool draft, returning the tool with resources updated.

