---
title: "Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
  title: "Dialogflow API \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Reference
Send feedback
Dialogflow API
Stay organized with collections
Save and categorize content based on your preferences.
Builds conversational interfaces (for example, chatbots, and voice-powered apps and devices).
REST Resource: v3.projects.locations
REST Resource: v3.projects.locations.agents
REST Resource: v3.projects.locations.agents.changelogs
REST Resource: v3.projects.locations.agents.entityTypes
REST Resource: v3.projects.locations.agents.environments
REST Resource:
v3.projects.locations.agents.environments.continuousTestResults
REST Resource: v3.projects.locations.agents.environments.deployments
REST Resource: v3.projects.locations.agents.environments.experiments
REST Resource: v3.projects.locations.agents.environments.sessions
REST Resource:
v3.projects.locations.agents.environments.sessions.entityTypes
REST Resource: v3.projects.locations.agents.flows
REST Resource: v3.projects.locations.agents.flows.pages
REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups
REST Resource: v3.projects.locations.agents.flows.versions
REST Resource: v3.projects.locations.agents.generators
REST Resource: v3.projects.locations.agents.intents
REST Resource: v3.projects.locations.agents.playbooks
REST Resource: v3.projects.locations.agents.playbooks.examples
REST Resource: v3.projects.locations.agents.playbooks.versions
REST Resource: v3.projects.locations.agents.sessions
REST Resource: v3.projects.locations.agents.sessions.entityTypes
REST Resource: v3.projects.locations.agents.testCases
REST Resource: v3.projects.locations.agents.testCases.results
REST Resource: v3.projects.locations.agents.tools
REST Resource: v3.projects.locations.agents.tools.versions
REST Resource: v3.projects.locations.agents.transitionRouteGroups
REST Resource: v3.projects.locations.agents.webhooks
REST Resource: v3.projects.locations.operations
REST Resource: v3.projects.locations.securitySettings
REST Resource: v3.projects.operations
Service: dialogflow.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://dialogflow.googleapis.com/$discovery/rest?version=v3
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoints and all URIs below are relative to these service endpoints:
https://dialogflow.googleapis.com
https://asia-northeast1-dialogflow.googleapis.com
https://asia-south1-dialogflow.googleapis.com
https://asia-southeast1-dialogflow.googleapis.com
https://asia-southeast2-dialogflow.googleapis.com
https://australia-southeast1-dialogflow.googleapis.com
https://europe-west1-dialogflow.googleapis.com
https://europe-west2-dialogflow.googleapis.com
https://europe-west3-dialogflow.googleapis.com
https://europe-west4-dialogflow.googleapis.com
https://europe-west6-dialogflow.googleapis.com
https://northamerica-northeast1-dialogflow.googleapis.com
https://us-central1-dialogflow.googleapis.com
https://us-east1-dialogflow.googleapis.com
https://us-west1-dialogflow.googleapis.com
REST Resource: v3.projects.locations
Methods
get
GET /v3/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v3/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v3.projects.locations.agents
Methods
create
POST /v3/{parent=projects/*/locations/*}/agents
Creates an agent in the specified location.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*}
Deletes the specified agent.
export
POST /v3/{name=projects/*/locations/*/agents/*}:export
Exports the specified agent to a binary file.
get
GET /v3/{name=projects/*/locations/*/agents/*}
Retrieves the specified agent.
getGenerativeSettings
GET /v3/{name=projects/*/locations/*/agents/*/generativeSettings}
Gets the generative settings for the agent.
getValidationResult
GET /v3/{name=projects/*/locations/*/agents/*/validationResult}
Gets the latest agent validation result.
list
GET /v3/{parent=projects/*/locations/*}/agents
Returns the list of all agents in the specified location.
patch
PATCH /v3/{agent.name=projects/*/locations/*/agents/*}
Updates the specified agent.
restore
POST /v3/{name=projects/*/locations/*/agents/*}:restore
Restores the specified agent from a binary file.
updateGenerativeSettings
PATCH /v3/{generativeSettings.name=projects/*/locations/*/agents/*/generativeSettings}
Updates the generative settings for the agent.
validate
POST /v3/{name=projects/*/locations/*/agents/*}:validate
Validates the specified agent and creates or updates validation results.
REST Resource: v3.projects.locations.agents.changelogs
Methods
get
GET /v3/{name=projects/*/locations/*/agents/*/changelogs/*}
Retrieves the specified Changelog.
list
GET /v3/{parent=projects/*/locations/*/agents/*}/changelogs
Returns the list of Changelogs.
REST Resource: v3.projects.locations.agents.entityTypes
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*}/entityTypes
Creates an entity type in the specified agent.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/entityTypes/*}
Deletes the specified entity type.
export
POST /v3/{parent=projects/*/locations/*/agents/*}/entityTypes:export
Exports the selected entity types.
get
GET /v3/{name=projects/*/locations/*/agents/*/entityTypes/*}
Retrieves the specified entity type.
import
POST /v3/{parent=projects/*/locations/*/agents/*}/entityTypes:import
Imports the specified entitytypes into the agent.
list
GET /v3/{parent=projects/*/locations/*/agents/*}/entityTypes
Returns the list of all entity types in the specified agent.
patch
PATCH /v3/{entityType.name=projects/*/locations/*/agents/*/entityTypes/*}
Updates the specified entity type.
REST Resource: v3.projects.locations.agents.environments
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*}/environments
Creates an Environment in the specified Agent .
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/environments/*}
Deletes the specified Environment .
deployFlow
POST /v3/{environment=projects/*/locations/*/agents/*/environments/*}:deployFlow
Deploys a flow to the specified Environment .
get
GET /v3/{name=projects/*/locations/*/agents/*/environments/*}
Retrieves the specified Environment .
list
GET /v3/{parent=projects/*/locations/*/agents/*}/environments
Returns the list of all environments in the specified Agent .
lookupEnvironmentHistory
GET /v3/{name=projects/*/locations/*/agents/*/environments/*}:lookupEnvironmentHistory
Looks up the history of the specified Environment .
patch
PATCH /v3/{environment.name=projects/*/locations/*/agents/*/environments/*}
Updates the specified Environment .
runContinuousTest
POST /v3/{environment=projects/*/locations/*/agents/*/environments/*}:runContinuousTest
Kicks off a continuous test under the specified Environment .
REST Resource: v3.projects.locations.agents.environments.continuousTestResults
Methods
list
GET /v3/{parent=projects/*/locations/*/agents/*/environments/*}/continuousTestResults
Fetches a list of continuous test results for a given environment.
REST Resource: v3.projects.locations.agents.environments.deployments
Methods
get
GET /v3/{name=projects/*/locations/*/agents/*/environments/*/deployments/*}
Retrieves the specified Deployment .
list
GET /v3/{parent=projects/*/locations/*/agents/*/environments/*}/deployments
Returns the list of all deployments in the specified Environment .
REST Resource: v3.projects.locations.agents.environments.experiments
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*/environments/*}/experiments
Creates an Experiment in the specified Environment .
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/environments/*/experiments/*}
Deletes the specified Experiment .
get
GET /v3/{name=projects/*/locations/*/agents/*/environments/*/experiments/*}
Retrieves the specified Experiment .
list
GET /v3/{parent=projects/*/locations/*/agents/*/environments/*}/experiments
Returns the list of all experiments in the specified Environment .
patch
PATCH /v3/{experiment.name=projects/*/locations/*/agents/*/environments/*/experiments/*}
Updates the specified Experiment .
start
POST /v3/{name=projects/*/locations/*/agents/*/environments/*/experiments/*}:start
Starts the specified Experiment .
stop
POST /v3/{name=projects/*/locations/*/agents/*/environments/*/experiments/*}:stop
Stops the specified Experiment .
REST Resource: v3.projects.locations.agents.environments.sessions
Methods
detectIntent
POST /v3/{session=projects/*/locations/*/agents/*/environments/*/sessions/*}:detectIntent
Processes a natural language query and returns structured, actionable data as a result.
fulfillIntent
POST /v3/{matchIntentRequest.session=projects/*/locations/*/agents/*/environments/*/sessions/*}:fulfillIntent
Fulfills a matched intent returned by MatchIntent .
matchIntent
POST /v3/{session=projects/*/locations/*/agents/*/environments/*/sessions/*}:matchIntent
Returns preliminary intent match results, doesn't change the session status.
serverStreamingDetectIntent
POST /v3/{session=projects/*/locations/*/agents/*/environments/*/sessions/*}:serverStreamingDetectIntent
Processes a natural language query and returns structured, actionable data as a result through server-side streaming.
REST Resource: v3.projects.locations.agents.environments.sessions.entityTypes
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*/environments/*/sessions/*}/entityTypes
Creates a session entity type.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/environments/*/sessions/*/entityTypes/*}
Deletes the specified session entity type.
get
GET /v3/{name=projects/*/locations/*/agents/*/environments/*/sessions/*/entityTypes/*}
Retrieves the specified session entity type.
list
GET /v3/{parent=projects/*/locations/*/agents/*/environments/*/sessions/*}/entityTypes
Returns the list of all session entity types in the specified session.
patch
PATCH /v3/{sessionEntityType.name=projects/*/locations/*/agents/*/environments/*/sessions/*/entityTypes/*}
Updates the specified session entity type.
REST Resource: v3.projects.locations.agents.flows
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*}/flows
Creates a flow in the specified agent.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/flows/*}
Deletes a specified flow.
export
POST /v3/{name=projects/*/locations/*/agents/*/flows/*}:export
Exports the specified flow to a binary file.
get
GET /v3/{name=projects/*/locations/*/agents/*/flows/*}
Retrieves the specified flow.
getValidationResult
GET /v3/{name=projects/*/locations/*/agents/*/flows/*/validationResult}
Gets the latest flow validation result.
import
POST /v3/{parent=projects/*/locations/*/agents/*}/flows:import
Imports the specified flow to the specified agent from a binary file.
list
GET /v3/{parent=projects/*/locations/*/agents/*}/flows
Returns the list of all flows in the specified agent.
patch
PATCH /v3/{flow.name=projects/*/locations/*/agents/*/flows/*}
Updates the specified flow.
train
POST /v3/{name=projects/*/locations/*/agents/*/flows/*}:train
Trains the specified flow.
validate
POST /v3/{name=projects/*/locations/*/agents/*/flows/*}:validate
Validates the specified flow and creates or updates validation results.
REST Resource: v3.projects.locations.agents.flows.pages
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*/flows/*}/pages
Creates a page in the specified flow.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/flows/*/pages/*}
Deletes the specified page.
get
GET /v3/{name=projects/*/locations/*/agents/*/flows/*/pages/*}
Retrieves the specified page.
list
GET /v3/{parent=projects/*/locations/*/agents/*/flows/*}/pages
Returns the list of all pages in the specified flow.
patch
PATCH /v3/{page.name=projects/*/locations/*/agents/*/flows/*/pages/*}
Updates the specified page.
REST Resource: v3.projects.locations.agents.flows.transitionRouteGroups
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*/flows/*}/transitionRouteGroups
Creates an TransitionRouteGroup in the specified flow.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/flows/*/transitionRouteGroups/*}
Deletes the specified TransitionRouteGroup .
get
GET /v3/{name=projects/*/locations/*/agents/*/flows/*/transitionRouteGroups/*}
Retrieves the specified TransitionRouteGroup .
list
GET /v3/{parent=projects/*/locations/*/agents/*/flows/*}/transitionRouteGroups
Returns the list of all transition route groups in the specified flow.
patch
PATCH /v3/{transitionRouteGroup.name=projects/*/locations/*/agents/*/flows/*/transitionRouteGroups/*}
Updates the specified TransitionRouteGroup .
REST Resource: v3.projects.locations.agents.flows.versions
Methods
compareVersions
POST /v3/{baseVersion=projects/*/locations/*/agents/*/flows/*/versions/*}:compareVersions
Compares the specified base version with target version.
create
POST /v3/{parent=projects/*/locations/*/agents/*/flows/*}/versions
Creates a Version in the specified Flow .
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/flows/*/versions/*}
Deletes the specified Version .
get
GET /v3/{name=projects/*/locations/*/agents/*/flows/*/versions/*}
Retrieves the specified Version .
list
GET /v3/{parent=projects/*/locations/*/agents/*/flows/*}/versions
Returns the list of all versions in the specified Flow .
load
POST /v3/{name=projects/*/locations/*/agents/*/flows/*/versions/*}:load
Loads resources in the specified version to the draft flow.
patch
PATCH /v3/{version.name=projects/*/locations/*/agents/*/flows/*/versions/*}
Updates the specified Version .
REST Resource: v3.projects.locations.agents.generators
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*}/generators
Creates a generator in the specified agent.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/generators/*}
Deletes the specified generators.
get
GET /v3/{name=projects/*/locations/*/agents/*/generators/*}
Retrieves the specified generator.
list
GET /v3/{parent=projects/*/locations/*/agents/*}/generators
Returns the list of all generators in the specified agent.
patch
PATCH /v3/{generator.name=projects/*/locations/*/agents/*/generators/*}
Update the specified generator.
REST Resource: v3.projects.locations.agents.intents
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*}/intents
Creates an intent in the specified agent.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/intents/*}
Deletes the specified intent.
export
POST /v3/{parent=projects/*/locations/*/agents/*}/intents:export
Exports the selected intents.
get
GET /v3/{name=projects/*/locations/*/agents/*/intents/*}
Retrieves the specified intent.
import
POST /v3/{parent=projects/*/locations/*/agents/*}/intents:import
Imports the specified intents into the agent.
list
GET /v3/{parent=projects/*/locations/*/agents/*}/intents
Returns the list of all intents in the specified agent.
patch
PATCH /v3/{intent.name=projects/*/locations/*/agents/*/intents/*}
Updates the specified intent.
REST Resource: v3.projects.locations.agents.playbooks
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*}/playbooks
Creates a playbook in a specified agent.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/playbooks/*}
Deletes a specified playbook.
export
POST /v3/{name=projects/*/locations/*/agents/*/playbooks/*}:export
Exports the specified playbook to a binary file.
get
GET /v3/{name=projects/*/locations/*/agents/*/playbooks/*}
Retrieves the specified Playbook.
import
POST /v3/{parent=projects/*/locations/*/agents/*}/playbooks:import
Imports the specified playbook to the specified agent from a binary file.
list
GET /v3/{parent=projects/*/locations/*/agents/*}/playbooks
Returns a list of playbooks in the specified agent.
patch
PATCH /v3/{playbook.name=projects/*/locations/*/agents/*/playbooks/*}
Updates the specified Playbook.
REST Resource: v3.projects.locations.agents.playbooks.examples
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*/playbooks/*}/examples
Creates an example in the specified playbook.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/playbooks/*/examples/*}
Deletes the specified example.
get
GET /v3/{name=projects/*/locations/*/agents/*/playbooks/*/examples/*}
Retrieves the specified example.
list
GET /v3/{parent=projects/*/locations/*/agents/*/playbooks/*}/examples
Returns a list of examples in the specified playbook.
patch
PATCH /v3/{example.name=projects/*/locations/*/agents/*/playbooks/*/examples/*}
Update the specified example.
REST Resource: v3.projects.locations.agents.playbooks.versions
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*/playbooks/*}/versions
Creates a version for the specified Playbook.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/playbooks/*/versions/*}
Deletes the specified version of the Playbook.
get
GET /v3/{name=projects/*/locations/*/agents/*/playbooks/*/versions/*}
Retrieves the specified version of the Playbook.
list
GET /v3/{parent=projects/*/locations/*/agents/*/playbooks/*}/versions
Lists versions for the specified Playbook.
restore
POST /v3/{name=projects/*/locations/*/agents/*/playbooks/*/versions/*}:restore
Retrieves the specified version of the Playbook and stores it as the current playbook draft, returning the playbook with resources updated.
REST Resource: v3.projects.locations.agents.sessions
Methods
detectIntent
POST /v3/{session=projects/*/locations/*/agents/*/sessions/*}:detectIntent
Processes a natural language query and returns structured, actionable data as a result.
fulfillIntent
POST /v3/{matchIntentRequest.session=projects/*/locations/*/agents/*/sessions/*}:fulfillIntent
Fulfills a matched intent returned by MatchIntent .
matchIntent
POST /v3/{session=projects/*/locations/*/agents/*/sessions/*}:matchIntent
Returns preliminary intent match results, doesn't change the session status.
serverStreamingDetectIntent
POST /v3/{session=projects/*/locations/*/agents/*/sessions/*}:serverStreamingDetectIntent
Processes a natural language query and returns structured, actionable data as a result through server-side streaming.
submitAnswerFeedback
POST /v3/{session=projects/*/locations/*/agents/*/sessions/*}:submitAnswerFeedback
Updates the feedback received from the user for a single turn of the bot response.
REST Resource: v3.projects.locations.agents.sessions.entityTypes
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*/sessions/*}/entityTypes
Creates a session entity type.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/sessions/*/entityTypes/*}
Deletes the specified session entity type.
get
GET /v3/{name=projects/*/locations/*/agents/*/sessions/*/entityTypes/*}
Retrieves the specified session entity type.
list
GET /v3/{parent=projects/*/locations/*/agents/*/sessions/*}/entityTypes
Returns the list of all session entity types in the specified session.
patch
PATCH /v3/{sessionEntityType.name=projects/*/locations/*/agents/*/sessions/*/entityTypes/*}
Updates the specified session entity type.
REST Resource: v3.projects.locations.agents.testCases
Methods
batchDelete
POST /v3/{parent=projects/*/locations/*/agents/*}/testCases:batchDelete
Batch deletes test cases.
batchRun
POST /v3/{parent=projects/*/locations/*/agents/*}/testCases:batchRun
Kicks off a batch run of test cases.
calculateCoverage
GET /v3/{agent=projects/*/locations/*/agents/*}/testCases:calculateCoverage
Calculates the test coverage for an agent.
create
POST /v3/{parent=projects/*/locations/*/agents/*}/testCases
Creates a test case for the given agent.
export
POST /v3/{parent=projects/*/locations/*/agents/*}/testCases:export
Exports the test cases under the agent to a Cloud Storage bucket or a local file.
get
GET /v3/{name=projects/*/locations/*/agents/*/testCases/*}
Gets a test case.
import
POST /v3/{parent=projects/*/locations/*/agents/*}/testCases:import
Imports the test cases from a Cloud Storage bucket or a local file.
list
GET /v3/{parent=projects/*/locations/*/agents/*}/testCases
Fetches a list of test cases for a given agent.
patch
PATCH /v3/{testCase.name=projects/*/locations/*/agents/*/testCases/*}
Updates the specified test case.
run
POST /v3/{name=projects/*/locations/*/agents/*/testCases/*}:run
Kicks off a test case run.
REST Resource: v3.projects.locations.agents.testCases.results
Methods
get
GET /v3/{name=projects/*/locations/*/agents/*/testCases/*/results/*}
Gets a test case result.
list
GET /v3/{parent=projects/*/locations/*/agents/*/testCases/*}/results
Fetches the list of run results for the given test case.
REST Resource: v3.projects.locations.agents.tools
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*}/tools
Creates a Tool in the specified agent.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/tools/*}
Deletes a specified Tool .
get
GET /v3/{name=projects/*/locations/*/agents/*/tools/*}
Retrieves the specified Tool .
list
GET /v3/{parent=projects/*/locations/*/agents/*}/tools
Returns a list of Tools in the specified agent.
patch
PATCH /v3/{tool.name=projects/*/locations/*/agents/*/tools/*}
Update the specified Tool .
REST Resource: v3.projects.locations.agents.tools.versions
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*/tools/*}/versions
Creates a version for the specified Tool .
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/tools/*/versions/*}
Deletes the specified version of the Tool .
get
GET /v3/{name=projects/*/locations/*/agents/*/tools/*/versions/*}
Retrieves the specified version of the Tool .
list
GET /v3/{parent=projects/*/locations/*/agents/*/tools/*}/versions
List versions of the specified Tool .
restore
POST /v3/{name=projects/*/locations/*/agents/*/tools/*/versions/*}:restore
Retrieves the specified version of the Tool and stores it as the current tool draft, returning the tool with resources updated.
REST Resource: v3.projects.locations.agents.transitionRouteGroups
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*}/transitionRouteGroups
Creates an TransitionRouteGroup in the specified flow.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/transitionRouteGroups/*}
Deletes the specified TransitionRouteGroup .
get
GET /v3/{name=projects/*/locations/*/agents/*/transitionRouteGroups/*}
Retrieves the specified TransitionRouteGroup .
list
GET /v3/{parent=projects/*/locations/*/agents/*}/transitionRouteGroups
Returns the list of all transition route groups in the specified flow.
patch
PATCH /v3/{transitionRouteGroup.name=projects/*/locations/*/agents/*/transitionRouteGroups/*}
Updates the specified TransitionRouteGroup .
REST Resource: v3.projects.locations.agents.webhooks
Methods
create
POST /v3/{parent=projects/*/locations/*/agents/*}/webhooks
Creates a webhook in the specified agent.
delete
DELETE /v3/{name=projects/*/locations/*/agents/*/webhooks/*}
Deletes the specified webhook.
get
GET /v3/{name=projects/*/locations/*/agents/*/webhooks/*}
Retrieves the specified webhook.
list
GET /v3/{parent=projects/*/locations/*/agents/*}/webhooks
Returns the list of all webhooks in the specified agent.
patch
PATCH /v3/{webhook.name=projects/*/locations/*/agents/*/webhooks/*}
Updates the specified webhook.
REST Resource: v3.projects.locations.operations
Methods
cancel
POST /v3/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v3/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v3/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v3.projects.locations.securitySettings
Methods
create
POST /v3/{parent=projects/*/locations/*}/securitySettings
Create security settings in the specified location.
delete
DELETE /v3/{name=projects/*/locations/*/securitySettings/*}
Deletes the specified SecuritySettings .
get
GET /v3/{name=projects/*/locations/*/securitySettings/*}
Retrieves the specified SecuritySettings .
list
GET /v3/{parent=projects/*/locations/*}/securitySettings
Returns the list of all security settings in the specified location.
patch
PATCH /v3/{securitySettings.name=projects/*/locations/*/securitySettings/*}
Updates the specified SecuritySettings .
REST Resource: v3.projects.operations
Methods
cancel
POST /v3/{name=projects/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v3/{name=projects/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v3/{name=projects/*}/operations
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
