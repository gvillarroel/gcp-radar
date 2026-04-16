---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.284Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Regular expression validation"
feature_slug: "regular-expression-validation"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-validation"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient"
keywords:
  - "regular"
  - "expression"
  - "validation"
  - "agent"
  - "settings"
  - "entity"
  - "types"
  - "now"
---

# Regular expression validation

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Agent Settings and Entity Types now support regular expression validation.

## Extended Definition

Agent Settings and Entity Types now support regular expression validation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-validation](https://docs.cloud.google.com/dialogflow/es/docs/agents-validation)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close General settings The following general settings are available for agents: Display name A human-readable name for your agent.
- Go to the Agent API reference Select a protocol and version for the Agent reference: Protocol V3 V3beta1 REST Agent resource Agent resource RPC Agent interface Agent interface C++ AgentsClient Not available C# AgentsClient Not available Go AgentsClient Not available Java AgentsClient AgentsClient Node.js AgentsClient AgentsClient PHP Not available Not available Python AgentsClient AgentsClient Ruby Not available Not available Close The following subsections describe the different categories of agent settings.
- Override request-level synthesized speech configuration link When enabled, the synthesized speech configuration specified in the agent settings overrides the one specified in the API, partner integration, or the conversation profile.
- The following agent-wide ML settings are available: Allow ML to correct spelling If this is enabled and end-user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.

### Agent validation \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-validation](https://docs.cloud.google.com/dialogflow/es/docs/agents-validation)
- Source ID: `site-iam-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider adding more different examples." }, { "severity": "ERROR", "entries": [ "projects/my-project/agent/intents/26e64b1b-eaa7-4ce2-be46-631a501fccbe/trainingPhrases/a650375e-083c-4bb5-9794-ba9453e51282", "projects/my-project/agent/intents/58b44b2d-4967-4a81-b017-12623dcd5d28/trainingPhrases/1d947780-22d3-4f80-8d7a-3f86efbf0be3" ], "errorMessage": "Multiple intents share training phrases which are too similar:\n - Intent 'app.notifications.open': training phrase 'open allo notifications settings'\n - Intent 'app.current.notifications.open': training phrase 'open notifications settings'" }, ] } Severity States Validation can show the following severity states: Severity Description INFO The agent doesn't follow the best practice.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /agent/validationResult?languageCode=en" Select-Object -Expand Content You should receive a JSON response similar to the following: { "validationErrors": [ { "severity": "ERROR", "entries": [ "projects/my-project/agent/intents/58b44b2d-4967-4a81-b017-12623dcd5d28/parameters/bf6fdf55-b862-4101-b5b1-36f1423629d0" ], "errorMessage": "Parameter 'test' has an empty value." }, { "severity": "WARNING", "entries": [ "projects/my-project/agent/intents/271e3808-3c91-4e6b-89e8-47951abcec8d" ], "errorMessage": "Intent 'app.current.update' does not have enough unique training phrases.
- Before using any of the request data, make the following replacements: PROJECT ID : your Google Cloud project ID HTTP method and URL: GET https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /agent/validationResult?languageCode=en To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID " \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT ID /agent/validationResult?languageCode=en" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Class AgentsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dialogflow v2.types.ValidationResult Represents the output of agent validation. import agent import agent ( request : typing .
- Intents and entity types with the same name are replaced with the new versions from xref ImportAgentRequest.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample restore agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.RestoreAgentRequest( agent uri="agent uri value", parent="parent value", ) Make the request operation = client. restore agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.RestoreAgentRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample export agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) request = dialogflow v2.ExportAgentRequest( parent="parent value", agent uri="agent uri value", ) Make the request operation = client. export agent (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dialogflow v2.types.ExportAgentRequest , dict]] The request object.

