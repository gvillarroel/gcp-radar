---
title: "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
  title: "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
API reference
Send feedback
Vertex AI GenAI API
Stay organized with collections
Save and categorize content based on your preferences.
Service: aiplatform.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://aiplatform.googleapis.com/$discovery/rest?version=v1
https://aiplatform.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://aiplatform.googleapis.com
REST Resource: v1.media
Methods
upload
POST /v1/{parent}/ragFiles:upload
POST /upload/v1/{parent}/ragFiles:upload
Upload a file into a RagCorpus.
REST Resource: v1.projects
Methods
getCacheConfig
GET /v1/{name}
Gets a GenAI cache config.
updateCacheConfig
PATCH /v1/{cacheConfig.name}
Updates a cache config.
REST Resource: v1.projects.locations
Methods
askContexts
POST /v1/{parent}:askContexts
Agentic Retrieval Ask API for RAG.
asyncRetrieveContexts
POST /v1/{parent}:asyncRetrieveContexts
Asynchronous API to retrieves relevant contexts for a query.
augmentPrompt
POST /v1/{parent}:augmentPrompt
Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses.
corroborateContent
POST /v1/{parent}:corroborateContent
Given an input text, it returns a score that evaluates the factuality of the text.
evaluateDataset
POST /v1/{location}:evaluateDataset
Evaluates a dataset based on a set of given metrics.
evaluateInstances
POST /v1/{location}:evaluateInstances
Evaluates instances based on a given metric.
generateInstanceRubrics
POST /v1/{location}:generateInstanceRubrics
Generates rubrics for a given prompt.
generateSyntheticData
POST /v1/{location}:generateSyntheticData
Generates synthetic (artificial) data based on a description
getRagEngineConfig
GET /v1/{name}
Gets a RagEngineConfig.
retrieveContexts
POST /v1/{parent}:retrieveContexts
Retrieves relevant contexts for a query.
updateRagEngineConfig
PATCH /v1/{ragEngineConfig.name}
Updates a RagEngineConfig.
REST Resource: v1.projects.locations.batchPredictionJobs
Methods
cancel
POST /v1/{name}:cancel
Cancels a BatchPredictionJob.
create
POST /v1/{parent}/batchPredictionJobs
Creates a BatchPredictionJob.
delete
DELETE /v1/{name}
Deletes a BatchPredictionJob.
get
GET /v1/{name}
Gets a BatchPredictionJob
list
GET /v1/{parent}/batchPredictionJobs
Lists BatchPredictionJobs in a Location.
REST Resource: v1.projects.locations.cachedContents
Methods
create
POST /v1/{parent}/cachedContents
Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage.
delete
DELETE /v1/{name}
Deletes cached content
get
GET /v1/{name}
Gets cached content configurations
list
GET /v1/{parent}/cachedContents
Lists cached contents in a project
patch
PATCH /v1/{cachedContent.name}
Updates cached content configurations
REST Resource: v1.projects.locations.endpoints
Methods
computeTokens
POST /v1/{endpoint}:computeTokens
Return a list of tokens based on the input text.
countTokens
POST /v1/{endpoint}:countTokens
Perform a token counting.
fetchPredictOperation
POST /v1/{endpoint}:fetchPredictOperation
Fetch an asynchronous online prediction operation.
generateContent
POST /v1/{model}:generateContent
Generate content with multimodal inputs.
predict
POST /v1/{endpoint}:predict
Request message for running inference on Google's generative AI models on Vertex AI.
predictLongRunning
POST /v1/{endpoint}:predictLongRunning
rawPredict
POST /v1/{endpoint}:rawPredict
Perform an online prediction with an arbitrary HTTP payload.
serverStreamingPredict
POST /v1/{endpoint}:serverStreamingPredict
Perform a server-side streaming online prediction request for Vertex LLM streaming.
streamGenerateContent
POST /v1/{model}:streamGenerateContent
Generate content with multimodal inputs with streaming support.
streamRawPredict
POST /v1/{endpoint}:streamRawPredict
Perform a streaming online prediction with an arbitrary HTTP payload.
REST Resource: v1.projects.locations.endpoints.chat
Methods
completions
POST /v1/{endpoint}/chat/completions
Exposes an OpenAI-compatible endpoint for chat completions.
REST Resource: v1.projects.locations.endpoints.deployedModels.invoke
Methods
invoke
POST /v1/{endpoint}/deployedModels/{deployedModelId}/invoke/**
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1.projects.locations.endpoints.google.science
Methods
inference
POST /v1/{endpoint}/science/inference
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1.projects.locations.endpoints.invoke
Methods
invoke
POST /v1/{endpoint}/invoke/**
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1.projects.locations.endpoints.openapi
Methods
completions
POST /v1/{endpoint}/completions
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
embeddings
POST /v1/{endpoint}/embeddings
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
responses
POST /v1/{endpoint}/responses
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1.projects.locations.evaluationItems
Methods
create
POST /v1/{parent}/evaluationItems
Creates an Evaluation Item.
delete
DELETE /v1/{name}
Deletes an Evaluation Item.
get
GET /v1/{name}
Gets an Evaluation Item.
list
GET /v1/{parent}/evaluationItems
Lists Evaluation Items.
REST Resource: v1.projects.locations.evaluationRuns
Methods
cancel
POST /v1/{name}:cancel
Cancels an Evaluation Run.
create
POST /v1/{parent}/evaluationRuns
Creates an Evaluation Run.
delete
DELETE /v1/{name}
Deletes an Evaluation Run.
get
GET /v1/{name}
Gets an Evaluation Run.
list
GET /v1/{parent}/evaluationRuns
Lists Evaluation Runs.
REST Resource: v1.projects.locations.evaluationSets
Methods
create
POST /v1/{parent}/evaluationSets
Creates an Evaluation Set.
delete
DELETE /v1/{name}
Deletes an Evaluation Set.
get
GET /v1/{name}
Gets an Evaluation Set.
list
GET /v1/{parent}/evaluationSets
Lists Evaluation Sets.
patch
PATCH /v1/{evaluationSet.name}
Updates an Evaluation Set.
REST Resource: v1.projects.locations.models
Methods
getIamPolicy
POST /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name}
Deletes a long-running operation.
get
GET /v1/{name}
Gets the latest state of a long-running operation.
list
GET /v1/{name}/operations
Lists operations that match the specified filter in the request.
wait
POST /v1/{name}:wait
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
REST Resource: v1.projects.locations.publishers.models
Methods
computeTokens
POST /v1/{endpoint}:computeTokens
Return a list of tokens based on the input text.
countTokens
POST /v1/{endpoint}:countTokens
Perform a token counting.
embedContent
POST /v1/{model}:embedContent
Embed content with multimodal inputs.
fetchPredictOperation
POST /v1/{endpoint}:fetchPredictOperation
Fetch an asynchronous online prediction operation.
generateContent
POST /v1/{model}:generateContent
Generate content with multimodal inputs.
predict
POST /v1/{endpoint}:predict
Request message for running inference on Google's generative AI models on Vertex AI.
predictLongRunning
POST /v1/{endpoint}:predictLongRunning
rawPredict
POST /v1/{endpoint}:rawPredict
Perform an online prediction with an arbitrary HTTP payload.
serverStreamingPredict
POST /v1/{endpoint}:serverStreamingPredict
Perform a server-side streaming online prediction request for Vertex LLM streaming.
streamGenerateContent
POST /v1/{model}:streamGenerateContent
Generate content with multimodal inputs with streaming support.
streamRawPredict
POST /v1/{endpoint}:streamRawPredict
Perform a streaming online prediction with an arbitrary HTTP payload.
REST Resource: v1.projects.locations.publishers.models.invoke
Methods
invoke
POST /v1/{endpoint}/invoke/**
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1.projects.locations.ragCorpora
Methods
create
POST /v1/{parent}/ragCorpora
Creates a RagCorpus.
delete
DELETE /v1/{name}
Deletes a RagCorpus.
get
GET /v1/{name}
Gets a RagCorpus.
list
GET /v1/{parent}/ragCorpora
Lists RagCorpora in a Location.
patch
PATCH /v1/{ragCorpus.name}
Updates a RagCorpus.
REST Resource: v1.projects.locations.ragCorpora.ragFiles
Methods
delete
DELETE /v1/{name}
Deletes a RagFile.
get
GET /v1/{name}
Gets a RagFile.
import
POST /v1/{parent}/ragFiles:import
Import files from Google Cloud Storage or Google Drive into a RagCorpus.
list
GET /v1/{parent}/ragFiles
Lists RagFiles in a RagCorpus.
REST Resource: v1.projects.locations.reasoningEngines
Methods
create
POST /v1/{parent}/reasoningEngines
Creates a reasoning engine.
delete
DELETE /v1/{name}
Deletes a reasoning engine.
get
GET /v1/{name}
Gets a reasoning engine.
list
GET /v1/{parent}/reasoningEngines
Lists reasoning engines in a location.
patch
PATCH /v1/{reasoningEngine.name}
Updates a reasoning engine.
query
POST /v1/{name}:query
Queries using a reasoning engine.
streamQuery
POST /v1/{name}:streamQuery
Streams queries using a reasoning engine.
REST Resource: v1.projects.locations.reasoningEngines.memories
Methods
create
POST /v1/{parent}/memories
Create a Memory.
delete
DELETE /v1/{name}
Delete a Memory.
generate
POST /v1/{parent}/memories:generate
Generate memories.
get
GET /v1/{name}
Get a Memory.
list
GET /v1/{parent}/memories
List Memories.
patch
PATCH /v1/{memory.name}
Update a Memory.
purge
POST /v1/{parent}/memories:purge
Purge memories.
retrieve
POST /v1/{parent}/memories:retrieve
Retrieve memories.
rollback
POST /v1/{name}:rollback
Rollback Memory to a specific revision.
REST Resource: v1.projects.locations.reasoningEngines.memories.revisions
Methods
get
GET /v1/{name}
Get a Memory Revision.
list
GET /v1/{parent}/revisions
List Memory Revisions for a Memory.
REST Resource: v1.projects.locations.reasoningEngines.sessions
Methods
appendEvent
POST /v1/{name}:appendEvent
Appends an event to a given session.
create
POST /v1/{parent}/sessions
Creates a new Session .
delete
DELETE /v1/{name}
Deletes details of the specific Session .
get
GET /v1/{name}
Gets details of the specific Session .
list
GET /v1/{parent}/sessions
Lists Sessions in a given reasoning engine.
patch
PATCH /v1/{session.name}
Updates the specific Session .
REST Resource: v1.projects.locations.reasoningEngines.sessions.events
Methods
list
GET /v1/{parent}/events
Lists Events in a given session.
REST Resource: v1.projects.locations.tuningJobs
Methods
cancel
POST /v1/{name}:cancel
Cancels a tuning job.
create
POST /v1/{parent}/tuningJobs
Creates a tuning job.
get
GET /v1/{name}
Gets a tuning job.
list
GET /v1/{parent}/tuningJobs
Lists tuning jobs in a location.
rebaseTunedModel
POST /v1/{parent}/tuningJobs:rebaseTunedModel
Rebase a tuned model.
REST Resource: v1beta1.media
Methods
upload
POST /v1beta1/{parent}/ragFiles:upload
POST /upload/v1beta1/{parent}/ragFiles:upload
Upload a file into a RagCorpus.
REST Resource: v1beta1.projects
Methods
getCacheConfig
GET /v1beta1/{name}
Gets a GenAI cache config.
updateCacheConfig
PATCH /v1beta1/{cacheConfig.name}
Updates a cache config.
REST Resource: v1beta1.projects.locations
Methods
askContexts
POST /v1beta1/{parent}:askContexts
Agentic Retrieval Ask API for RAG.
asyncRetrieveContexts
POST /v1beta1/{parent}:asyncRetrieveContexts
Asynchronous API to retrieves relevant contexts for a query.
augmentPrompt
POST /v1beta1/{parent}:augmentPrompt
Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses.
corroborateContent
POST /v1beta1/{parent}:corroborateContent
Given an input text, it returns a score that evaluates the factuality of the text.
evaluateDataset
POST /v1beta1/{location}:evaluateDataset
Evaluates a dataset based on a set of given metrics.
evaluateInstances
POST /v1beta1/{location}:evaluateInstances
Evaluates instances based on a given metric.
generateInstanceRubrics
POST /v1beta1/{location}:generateInstanceRubrics
Generates rubrics for a given prompt.
generateSyntheticData
POST /v1beta1/{location}:generateSyntheticData
Generates synthetic (artificial) data based on a description
getRagEngineConfig
GET /v1beta1/{name}
Gets a RagEngineConfig.
retrieveContexts
POST /v1beta1/{parent}:retrieveContexts
Retrieves relevant contexts for a query.
updateRagEngineConfig
PATCH /v1beta1/{ragEngineConfig.name}
Updates a RagEngineConfig.
REST Resource: v1beta1.projects.locations.batchPredictionJobs
Methods
cancel
POST /v1beta1/{name}:cancel
Cancels a BatchPredictionJob.
create
POST /v1beta1/{parent}/batchPredictionJobs
Creates a BatchPredictionJob.
delete
DELETE /v1beta1/{name}
Deletes a BatchPredictionJob.
get
GET /v1beta1/{name}
Gets a BatchPredictionJob
list
GET /v1beta1/{parent}/batchPredictionJobs
Lists BatchPredictionJobs in a Location.
REST Resource: v1beta1.projects.locations.cachedContents
Methods
create
POST /v1beta1/{parent}/cachedContents
Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage.
delete
DELETE /v1beta1/{name}
Deletes cached content
get
GET /v1beta1/{name}
Gets cached content configurations
list
GET /v1beta1/{parent}/cachedContents
Lists cached contents in a project
patch
PATCH /v1beta1/{cachedContent.name}
Updates cached content configurations
REST Resource: v1beta1.projects.locations.endpoints
Methods
computeTokens
POST /v1beta1/{endpoint}:computeTokens
Return a list of tokens based on the input text.
countTokens
POST /v1beta1/{endpoint}:countTokens
Perform a token counting.
fetchPredictOperation
POST /v1beta1/{endpoint}:fetchPredictOperation
Fetch an asynchronous online prediction operation.
generateContent
POST /v1beta1/{model}:generateContent
Generate content with multimodal inputs.
getIamPolicy
POST /v1beta1/{resource}:getIamPolicy
Gets the access control policy for a resource.
predict
POST /v1beta1/{endpoint}:predict
Request message for running inference on Google's generative AI models on Vertex AI.
predictLongRunning
POST /v1beta1/{endpoint}:predictLongRunning
rawPredict
POST /v1beta1/{endpoint}:rawPredict
Perform an online prediction with an arbitrary HTTP payload.
serverStreamingPredict
POST /v1beta1/{endpoint}:serverStreamingPredict
Perform a server-side streaming online prediction request for Vertex LLM streaming.
setIamPolicy
POST /v1beta1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
streamGenerateContent
POST /v1beta1/{model}:streamGenerateContent
Generate content with multimodal inputs with streaming support.
streamRawPredict
POST /v1beta1/{endpoint}:streamRawPredict
Perform a streaming online prediction with an arbitrary HTTP payload.
testIamPermissions
POST /v1beta1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.projects.locations.endpoints.chat
Methods
completions
POST /v1beta1/{endpoint}/chat/completions
Exposes an OpenAI-compatible endpoint for chat completions.
REST Resource: v1beta1.projects.locations.endpoints.deployedModels.invoke
Methods
invoke
POST /v1beta1/{endpoint}/deployedModels/{deployedModelId}/invoke/**
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1beta1.projects.locations.endpoints.google.science
Methods
inference
POST /v1beta1/{endpoint}/science/inference
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1beta1.projects.locations.endpoints.invoke
Methods
invoke
POST /v1beta1/{endpoint}/invoke/**
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1beta1.projects.locations.endpoints.openapi
Methods
completions
POST /v1beta1/{endpoint}/completions
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
embeddings
POST /v1beta1/{endpoint}/embeddings
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
responses
POST /v1beta1/{endpoint}/responses
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1beta1.projects.locations.evaluationItems
Methods
create
POST /v1beta1/{parent}/evaluationItems
Creates an Evaluation Item.
delete
DELETE /v1beta1/{name}
Deletes an Evaluation Item.
get
GET /v1beta1/{name}
Gets an Evaluation Item.
list
GET /v1beta1/{parent}/evaluationItems
Lists Evaluation Items.
REST Resource: v1beta1.projects.locations.evaluationRuns
Methods
cancel
POST /v1beta1/{name}:cancel
Cancels an Evaluation Run.
create
POST /v1beta1/{parent}/evaluationRuns
Creates an Evaluation Run.
delete
DELETE /v1beta1/{name}
Deletes an Evaluation Run.
get
GET /v1beta1/{name}
Gets an Evaluation Run.
list
GET /v1beta1/{parent}/evaluationRuns
Lists Evaluation Runs.
REST Resource: v1beta1.projects.locations.evaluationSets
Methods
create
POST /v1beta1/{parent}/evaluationSets
Creates an Evaluation Set.
delete
DELETE /v1beta1/{name}
Deletes an Evaluation Set.
get
GET /v1beta1/{name}
Gets an Evaluation Set.
list
GET /v1beta1/{parent}/evaluationSets
Lists Evaluation Sets.
patch
PATCH /v1beta1/{evaluationSet.name}
Updates an Evaluation Set.
REST Resource: v1beta1.projects.locations.extensions
Methods
delete
DELETE /v1beta1/{name}
Deletes an Extension.
execute
POST /v1beta1/{name}:execute
Executes the request against a given extension.
get
GET /v1beta1/{name}
Gets an Extension.
import
POST /v1beta1/{parent}/extensions:import
Imports an Extension.
list
GET /v1beta1/{parent}/extensions
Lists Extensions in a location.
patch
PATCH /v1beta1/{extension.name}
Updates an Extension.
query
POST /v1beta1/{name}:query
Queries an extension with a default controller.
REST Resource: v1beta1.projects.locations.models
Methods
getIamPolicy
POST /v1beta1/{resource}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1beta1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.projects.locations.operations
Methods
cancel
POST /v1beta1/{name}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name}
Deletes a long-running operation.
get
GET /v1beta1/{name}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name}/operations
Lists operations that match the specified filter in the request.
wait
POST /v1beta1/{name}:wait
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
REST Resource: v1beta1.projects.locations.publishers
Methods
getIamPolicy
POST /v1beta1/{resource}:getIamPolicy
Gets the access control policy for a resource.
REST Resource: v1beta1.projects.locations.publishers.models
Methods
computeTokens
POST /v1beta1/{endpoint}:computeTokens
Return a list of tokens based on the input text.
countTokens
POST /v1beta1/{endpoint}:countTokens
Perform a token counting.
embedContent
POST /v1beta1/{model}:embedContent
Embed content with multimodal inputs.
fetchPredictOperation
POST /v1beta1/{endpoint}:fetchPredictOperation
Fetch an asynchronous online prediction operation.
generateContent
POST /v1beta1/{model}:generateContent
Generate content with multimodal inputs.
getIamPolicy
POST /v1beta1/{resource}:getIamPolicy
Gets the access control policy for a resource.
predict
POST /v1beta1/{endpoint}:predict
Request message for running inference on Google's generative AI models on Vertex AI.
predictLongRunning
POST /v1beta1/{endpoint}:predictLongRunning
rawPredict
POST /v1beta1/{endpoint}:rawPredict
Perform an online prediction with an arbitrary HTTP payload.
serverStreamingPredict
POST /v1beta1/{endpoint}:serverStreamingPredict
Perform a server-side streaming online prediction request for Vertex LLM streaming.
streamGenerateContent
POST /v1beta1/{model}:streamGenerateContent
Generate content with multimodal inputs with streaming support.
streamRawPredict
POST /v1beta1/{endpoint}:streamRawPredict
Perform a streaming online prediction with an arbitrary HTTP payload.
REST Resource: v1beta1.projects.locations.publishers.models.invoke
Methods
invoke
POST /v1beta1/{endpoint}/invoke/**
Forwards arbitrary HTTP requests for both streaming and non-streaming cases.
REST Resource: v1beta1.projects.locations.ragCorpora
Methods
create
POST /v1beta1/{parent}/ragCorpora
Creates a RagCorpus.
delete
DELETE /v1beta1/{name}
Deletes a RagCorpus.
get
GET /v1beta1/{name}
Gets a RagCorpus.
list
GET /v1beta1/{parent}/ragCorpora
Lists RagCorpora in a Location.
patch
PATCH /v1beta1/{ragCorpus.name}
Updates a RagCorpus.
REST Resource: v1beta1.projects.locations.ragCorpora.ragFiles
Methods
delete
DELETE /v1beta1/{name}
Deletes a RagFile.
get
GET /v1beta1/{name}
Gets a RagFile.
import
POST /v1beta1/{parent}/ragFiles:import
Import files from Google Cloud Storage or Google Drive into a RagCorpus.
list
GET /v1beta1/{parent}/ragFiles
Lists RagFiles in a RagCorpus.
REST Resource: v1beta1.projects.locations.reasoningEngines
Methods
create
POST /v1beta1/{parent}/reasoningEngines
Creates a reasoning engine.
delete
DELETE /v1beta1/{name}
Deletes a reasoning engine.
get
GET /v1beta1/{name}
Gets a reasoning engine.
list
GET /v1beta1/{parent}/reasoningEngines
Lists reasoning engines in a location.
patch
PATCH /v1beta1/{reasoningEngine.name}
Updates a reasoning engine.
query
POST /v1beta1/{name}:query
Queries using a reasoning engine.
streamQuery
POST /v1beta1/{name}:streamQuery
Streams queries using a reasoning engine.
REST Resource: v1beta1.projects.locations.reasoningEngines.a2a
Methods
card
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
extendedAgentCard
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
tasks
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.message
Methods
send
POST /v1beta1/{name}/a2a/{a2aEndpoint}:send
Send post request for reasoning engine instance via the A2A post protocol apis.
stream
POST /v1beta1/{name}/a2a/{a2aEndpoint}:stream
Streams queries using a reasoning engine instance via the A2A streaming protocol apis.
REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.tasks
Methods
a2aGetReasoningEngine
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
cancel
POST /v1beta1/{name}/a2a/{a2aEndpoint}:cancel
Send post request for reasoning engine instance via the A2A post protocol apis.
pushNotificationConfigs
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
subscribe
GET /v1beta1/{name}/a2a/{a2aEndpoint}:subscribe
Stream get request for reasoning engine instance via the A2A stream get protocol apis.
REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.tasks.pushNotificationConfigs
Methods
a2aGetReasoningEngine
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.v1
Methods
card
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
extendedAgentCard
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
tasks
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.v1.message
Methods
send
POST /v1beta1/{name}/a2a/{a2aEndpoint}:send
Send post request for reasoning engine instance via the A2A post protocol apis.
stream
POST /v1beta1/{name}/a2a/{a2aEndpoint}:stream
Streams queries using a reasoning engine instance via the A2A streaming protocol apis.
REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.v1.tasks
Methods
a2aGetReasoningEngine
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
cancel
POST /v1beta1/{name}/a2a/{a2aEndpoint}:cancel
Send post request for reasoning engine instance via the A2A post protocol apis.
pushNotificationConfigs
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
subscribe
GET /v1beta1/{name}/a2a/{a2aEndpoint}:subscribe
Stream get request for reasoning engine instance via the A2A stream get protocol apis.
REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.v1.tasks.pushNotificationConfigs
Methods
a2aGetReasoningEngine
GET /v1beta1/{name}/a2a/{a2aEndpoint}
Get request for reasoning engine instance via the A2A get protocol apis.
REST Resource: v1beta1.projects.locations.reasoningEngines.memories
Methods
create
POST /v1beta1/{parent}/memories
Create a Memory.
delete
DELETE /v1beta1/{name}
Delete a Memory.
generate
POST /v1beta1/{parent}/memories:generate
Generate memories.
get
GET /v1beta1/{name}
Get a Memory.
list
GET /v1beta1/{parent}/memories
List Memories.
patch
PATCH /v1beta1/{memory.name}
Update a Memory.
purge
POST /v1beta1/{parent}/memories:purge
Purge memories.
retrieve
POST /v1beta1/{parent}/memories:retrieve
Retrieve memories.
rollback
POST /v1beta1/{name}:rollback
Rollback Memory to a specific revision.
REST Resource: v1beta1.projects.locations.reasoningEngines.memories.revisions
Methods
get
GET /v1beta1/{name}
Get a Memory Revision.
list
GET /v1beta1/{parent}/revisions
List Memory Revisions for a Memory.
REST Resource: v1beta1.projects.locations.reasoningEngines.sessions
Methods
appendEvent
POST /v1beta1/{name}:appendEvent
Appends an event to a given session.
create
POST /v1beta1/{parent}/sessions
Creates a new Session .
delete
DELETE /v1beta1/{name}
Deletes details of the specific Session .
get
GET /v1beta1/{name}
Gets details of the specific Session .
list
GET /v1beta1/{parent}/sessions
Lists Sessions in a given reasoning engine.
patch
PATCH /v1beta1/{session.name}
Updates the specific Session .
REST Resource: v1beta1.projects.locations.reasoningEngines.sessions.events
Methods
list
GET /v1beta1/{parent}/events
Lists Events in a given session.
REST Resource: v1beta1.projects.locations.tuningJobs
Methods
cancel
POST /v1beta1/{name}:cancel
Cancels a tuning job.
create
POST /v1beta1/{parent}/tuningJobs
Creates a tuning job.
get
GET /v1beta1/{name}
Gets a tuning job.
list
GET /v1beta1/{parent}/tuningJobs
Lists tuning jobs in a location.
optimizePrompt
POST /v1beta1/{parent}/tuningJobs:optimizePrompt
Optimizes a prompt.
rebaseTunedModel
POST /v1beta1/{parent}/tuningJobs:rebaseTunedModel
Rebase a tuned model.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-11 UTC."],[],[]]
