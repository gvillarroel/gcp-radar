---
title: "Package types (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vertexai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.types
  title: "Package types (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (1.144.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.144.0 (latest)
1.143.0
1.142.0
1.141.0
1.140.0
1.139.0
1.138.0
1.137.0
1.136.0
1.135.0
1.134.0
1.133.0
1.132.0
1.131.0
1.130.0
1.129.0
1.122.0
1.121.0
1.120.0
1.119.0
1.118.0
1.117.0
1.95.1
1.94.0
1.93.1
1.92.0
1.91.0
1.90.0
1.89.0
1.88.0
1.87.0
1.86.0
1.85.0
1.84.0
1.83.0
1.82.0
1.81.0
1.80.0
1.79.0
1.78.0
1.77.0
1.76.0
1.75.0
1.74.0
1.73.0
1.72.0
1.71.1
1.70.0
1.69.0
1.68.0
1.67.1
1.66.0
1.65.0
1.63.0
1.62.0
1.60.0
1.59.0
API documentation for types package.
Classes
A2aTask
A task.
A2aTaskDict
A task.
A2aTaskState
Output only. The state of the task. The state of a new task is SUBMITTED by default. The state of a task can only be updated via AppendA2aTaskEvents API.
AcceleratorType
Immutable. The type of accelerator(s) that may be attached to the machine as per accelerator_count.
AgentEngine
An agent engine instance.
AgentEngineConfig
Config for agent engine methods.
AgentEngineConfigDict
Config for agent engine methods.
AgentEngineDict
An agent engine instance.
AgentEngineGenerateMemoriesOperation
Operation that generates memories for an agent engine.
AgentEngineGenerateMemoriesOperationDict
Operation that generates memories for an agent engine.
AgentEngineMemoryConfig
Config for creating a Memory.
AgentEngineMemoryConfigDict
Config for creating a Memory.
AgentEngineMemoryOperation
Operation that has an agent engine memory as a response.
AgentEngineMemoryOperationDict
Operation that has an agent engine memory as a response.
AgentEngineOperation
Operation that has an agent engine as a response.
AgentEngineOperationDict
Operation that has an agent engine as a response.
AgentEnginePurgeMemoriesOperation
Operation that purges memories from an agent engine.
AgentEnginePurgeMemoriesOperationDict
Operation that purges memories from an agent engine.
AgentEngineRollbackMemoryOperation
Operation that rolls back a memory.
AgentEngineRollbackMemoryOperationDict
Operation that rolls back a memory.
AgentEngineSandboxOperation
Operation that has an agent engine sandbox as a response.
AgentEngineSandboxOperationDict
Operation that has an agent engine sandbox as a response.
AgentEngineSessionOperation
Operation that has an agent engine session as a response.
AgentEngineSessionOperationDict
Operation that has an agent engine session as a response.
AgentRunConfig
Configuration for an Agent Run.
AgentRunConfigDict
Configuration for an Agent Run.
AgentServerMode
The agent server mode.
AggregatedMetricResult
Evaluation result for a single metric for an evaluation dataset.
AggregatedMetricResultDict
Evaluation result for a single metric for an evaluation dataset.
AppendAgentEngineSessionEventConfig
Config for appending agent engine session event.
AppendAgentEngineSessionEventConfigDict
Config for appending agent engine session event.
AppendAgentEngineSessionEventResponse
Response for appending agent engine session event.
AppendAgentEngineSessionEventResponseDict
Response for appending agent engine session event.
AppendAgentEngineTaskEventConfig
Config for appending Agent Engine task events.
AppendAgentEngineTaskEventConfigDict
Config for appending Agent Engine task events.
AppendAgentEngineTaskEventResponse
Response for appending Agent Engine task events.
AppendAgentEngineTaskEventResponseDict
Response for appending Agent Engine task events.
AssembleDataset
Represents the assembled dataset.
AssembleDatasetConfig
Config for assembling a multimodal dataset resource.
AssembleDatasetConfigDict
Config for assembling a multimodal dataset resource.
AssembleDatasetDict
Represents the assembled dataset.
AssessDatasetConfig
Config for assessing a multimodal dataset resource.
AssessDatasetConfigDict
Config for assessing a multimodal dataset resource.
BatchPredictionResourceUsageAssessmentConfig
Config for batch prediction resource usage assessment.
BatchPredictionResourceUsageAssessmentConfigDict
Config for batch prediction resource usage assessment.
BatchPredictionResourceUsageAssessmentResult
Result of batch prediction resource usage assessment.
BatchPredictionResourceUsageAssessmentResultDict
Result of batch prediction resource usage assessment.
BatchPredictionValidationAssessmentConfig
Config for batch prediction validation assessment.
BatchPredictionValidationAssessmentConfigDict
Config for batch prediction validation assessment.
BatchPredictionValidationAssessmentResult
Result of batch prediction validation assessment.
BatchPredictionValidationAssessmentResultDict
Result of batch prediction validation assessment.
BigQueryRequestSet
Represents a BigQuery request set.
BigQueryRequestSetDict
Represents a BigQuery request set.
BleuInput
Create a new model by parsing and validating input data from keyword arguments.
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
BleuInputDict
API documentation for BleuInputDict class.
BleuInstance
Bleu instance.
BleuInstanceDict
Bleu instance.
BleuResults
Result of evaluating a bleu metric.
BleuResultsDict
Result of evaluating a bleu metric.
CandidateResponse
Responses from model or agent.
CandidateResponseDict
Responses from model or agent.
CandidateResult
Result for a single candidate.
CandidateResultDict
Result for a single candidate.
CheckQueryJobAgentEngineConfig
Config for async querying agent engines.
CheckQueryJobAgentEngineConfigDict
Config for async querying agent engines.
CheckQueryJobResponse
Response from LRO.
CheckQueryJobResponseDict
Response from LRO.
CheckQueryJobResult
Result of checking a query job.
CheckQueryJobResultDict
Result of checking a query job.
Chunk
A chunk of data.
ChunkDict
A chunk of data.
CodeExecutionMetric
A metric that executes custom Python code for evaluation.
CometResult
Spec for Comet result - calculates the comet score for the given instance using the version specified in the spec.
CometResultDict
Spec for Comet result - calculates the comet score for the given instance using the version specified in the spec.
ContainerSpec
The spec of a Container.
ContainerSpecDict
The spec of a Container.
ContentMap
Map of placeholder in metric prompt template to contents of model input.
ContentMapContents
Map of placeholder in metric prompt template to contents of model input.
ContentMapContentsDict
Map of placeholder in metric prompt template to contents of model input.
ContentMapDict
Map of placeholder in metric prompt template to contents of model input.
CreateAgentEngineConfig
Config for create agent engine.
CreateAgentEngineConfigDict
Config for create agent engine.
CreateAgentEngineSandboxConfig
Config for creating a Sandbox.
CreateAgentEngineSandboxConfigDict
Config for creating a Sandbox.
CreateAgentEngineSessionConfig
Config for creating a Session.
CreateAgentEngineSessionConfigDict
Config for creating a Session.
CreateAgentEngineTaskConfig
Config for creating a Session.
CreateAgentEngineTaskConfigDict
Config for creating a Session.
CreateDatasetConfig
Config for creating a dataset resource to store prompts.
CreateDatasetConfigDict
Config for creating a dataset resource to store prompts.
CreateDatasetVersionConfig
Config for creating a dataset version resource to store prompts.
CreateDatasetVersionConfigDict
Config for creating a dataset version resource to store prompts.
CreateEvaluationItemConfig
Config to create an evaluation item.
CreateEvaluationItemConfigDict
Config to create an evaluation item.
CreateEvaluationMetricConfig
Config for creating an evaluation metric.
CreateEvaluationMetricConfigDict
Config for creating an evaluation metric.
CreateEvaluationRunConfig
Config to create an evaluation run.
CreateEvaluationRunConfigDict
Config to create an evaluation run.
CreateEvaluationSetConfig
Config to create an evaluation set.
CreateEvaluationSetConfigDict
Config to create an evaluation set.
CreateMultimodalDatasetConfig
Config for creating a dataset resource to store multimodal dataset.
CreateMultimodalDatasetConfigDict
Config for creating a dataset resource to store multimodal dataset.
CreatePromptConfig
Config for creating a prompt.
CreatePromptConfigDict
Config for creating a prompt.
CreatePromptVersionConfig
Config for creating a prompt version.
CreatePromptVersionConfigDict
Config for creating a prompt version.
CustomCodeExecutionSpec
Specifies a metric using remote Python function execution.
This metric is computed by running user-defined Python functions remotely.
CustomCodeExecutionSpecDict
Specifies a metric using remote Python function execution.
This metric is computed by running user-defined Python functions remotely.
CustomJob
Represents a job that runs custom workloads such as a Docker container or a Python package.
CustomJobDict
Represents a job that runs custom workloads such as a Docker container or a Python package.
CustomJobSpec
Represents a job that runs custom workloads such as a Docker container or a Python package.
CustomJobSpecDict
Represents a job that runs custom workloads such as a Docker container or a Python package.
Dataset
Represents a dataset resource to store prompts.
DatasetDict
Represents a dataset resource to store prompts.
DatasetOperation
Represents the create dataset operation.
DatasetOperationDict
Represents the create dataset operation.
DatasetVersion
Represents a dataset version resource to store prompts.
DatasetVersionDict
Represents a dataset version resource to store prompts.
DeleteAgentEngineConfig
Config for deleting agent engine.
DeleteAgentEngineConfigDict
Config for deleting agent engine.
DeleteAgentEngineMemoryConfig
Config for deleting an Agent Engine Memory.
DeleteAgentEngineMemoryConfigDict
Config for deleting an Agent Engine Memory.
DeleteAgentEngineMemoryOperation
Operation for deleting agent engines.
DeleteAgentEngineMemoryOperationDict
Operation for deleting agent engines.
DeleteAgentEngineOperation
Operation for deleting agent engines.
DeleteAgentEngineOperationDict
Operation for deleting agent engines.
DeleteAgentEngineSandboxConfig
Config for deleting an Agent Engine Sandbox.
DeleteAgentEngineSandboxConfigDict
Config for deleting an Agent Engine Sandbox.
DeleteAgentEngineSandboxOperation
Operation for deleting agent engines.
DeleteAgentEngineSandboxOperationDict
Operation for deleting agent engines.
DeleteAgentEngineSessionConfig
Config for deleting an Agent Engine Session.
DeleteAgentEngineSessionConfigDict
Config for deleting an Agent Engine Session.
DeleteAgentEngineSessionOperation
Operation for deleting agent engine sessions.
DeleteAgentEngineSessionOperationDict
Operation for deleting agent engine sessions.
DeletePromptConfig
Config for deleting a prompt.
DeletePromptConfigDict
Config for deleting a prompt.
DeletePromptOperation
Operation for deleting prompts.
DeletePromptOperationDict
Operation for deleting prompts.
DeletePromptVersionOperation
Operation for deleting prompt versions.
DeletePromptVersionOperationDict
Operation for deleting prompt versions.
DiskSpec
Represents the spec of disk options.
DiskSpecDict
Represents the spec of disk options.
DnsPeeringConfig
DNS peering configuration. These configurations are used to create DNS peering zones in the Vertex tenant project VPC, enabling resolution of records within the specified domain hosted in the target network's Cloud DNS.
DnsPeeringConfigDict
DNS peering configuration. These configurations are used to create DNS peering zones in the Vertex tenant project VPC, enabling resolution of records within the specified domain hosted in the target network's Cloud DNS.
EnvVar
Represents an environment variable present in a Container or Python Module.
EnvVarDict
Represents an environment variable present in a Container or Python Module.
EvalCase
A comprehensive representation of a GenAI interaction for evaluation.
EvalCaseDict
A comprehensive representation of a GenAI interaction for evaluation.
EvalCaseMetricResult
Evaluation result for a single evaluation case for a single metric.
EvalCaseMetricResultDict
Evaluation result for a single evaluation case for a single metric.
EvalCaseResult
Eval result for a single evaluation case.
EvalCaseResultDict
Eval result for a single evaluation case.
EvalRunInferenceConfig
Optional parameters for inference.
EvalRunInferenceConfigDict
Optional parameters for inference.
EvaluateDatasetConfig
Config for evaluate instances.
EvaluateDatasetConfigDict
Config for evaluate instances.
EvaluateDatasetOperation
Create a new model by parsing and validating input data from keyword arguments.
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
EvaluateDatasetOperationDict
API documentation for EvaluateDatasetOperationDict class.
EvaluateDatasetRequestParameters
Parameters for batch dataset evaluation.
EvaluateDatasetRequestParametersDict
Parameters for batch dataset evaluation.
EvaluateInstancesConfig
Config for evaluate instances.
EvaluateInstancesConfigDict
Config for evaluate instances.
EvaluateInstancesResponse
Result of evaluating an LLM metric.
EvaluateInstancesResponseDict
Result of evaluating an LLM metric.
EvaluateMethodConfig
Optional parameters for the evaluate method.
EvaluateMethodConfigDict
Optional parameters for the evaluate method.
EvaluationDataset
The dataset used for evaluation.
EvaluationDatasetDict
The dataset used for evaluation.
EvaluationInstance
A single instance to be evaluated.
EvaluationInstanceDict
A single instance to be evaluated.
EvaluationItem
EvaluationItem is a single evaluation request or result.
The content of an EvaluationItem is immutable - it cannot be updated once
created. EvaluationItems can be deleted when no longer needed.
EvaluationItemDict
EvaluationItem is a single evaluation request or result.
The content of an EvaluationItem is immutable - it cannot be updated once
created. EvaluationItems can be deleted when no longer needed.
EvaluationItemRequest
Single evaluation request.
EvaluationItemRequestDict
Single evaluation request.
EvaluationItemResult
Represents the result of an evaluation item.
EvaluationItemResultDict
Represents the result of an evaluation item.
EvaluationItemType
The type of the EvaluationItem.
EvaluationMetric
Represents an evaluation metric.
EvaluationMetricDict
Represents an evaluation metric.
EvaluationPrompt
Represents the prompt to be evaluated.
EvaluationPromptDict
Represents the prompt to be evaluated.
EvaluationResult
Result of an evaluation run for an evaluation dataset.
EvaluationResultDict
Result of an evaluation run for an evaluation dataset.
EvaluationRun
Represents an evaluation run.
EvaluationRunAgentConfig
This field is experimental and may change in future versions.
Agent config for an evaluation run.
EvaluationRunAgentConfigDict
This field is experimental and may change in future versions.
Agent config for an evaluation run.
EvaluationRunConfig
The evaluation configuration used for the evaluation run.
EvaluationRunConfigDict
The evaluation configuration used for the evaluation run.
EvaluationRunDataSource
Represents an evaluation run data source.
EvaluationRunDataSourceDict
Represents an evaluation run data source.
EvaluationRunDict
Represents an evaluation run.
EvaluationRunInferenceConfig
This field is experimental and may change in future versions.
Configuration that describes an agent.
EvaluationRunInferenceConfigDict
This field is experimental and may change in future versions.
Configuration that describes an agent.
EvaluationRunMetadata
Metadata for an evaluation run.
EvaluationRunMetadataDict
Metadata for an evaluation run.
EvaluationRunMetric
The metric used for evaluation run.
EvaluationRunMetricDict
The metric used for evaluation run.
EvaluationRunPromptTemplate
Prompt template used for inference.
Only one of prompt_template or gcs_uri should be set. If both are
provided, an error will be raised.
EvaluationRunPromptTemplateDict
Prompt template used for inference.
Only one of prompt_template or gcs_uri should be set. If both are
provided, an error will be raised.
EvaluationRunResults
Represents the results of an evaluation run.
EvaluationRunResultsDict
Represents the results of an evaluation run.
EvaluationRunState
Represents the state of an evaluation run.
EvaluationSet
Represents an evaluation set.
EvaluationSetDict
Represents an evaluation set.
Event
Represents an event in a conversation between agents and users.
It is used to store the content of the conversation, as well as the actions
taken by the agents like function calls, function responses, intermediate NL
responses etc.
EventActions
Actions are parts of events that are executed by the agent.
EventActionsDict
Actions are parts of events that are executed by the agent.
EventDict
Represents an event in a conversation between agents and users.
It is used to store the content of the conversation, as well as the actions
taken by the agents like function calls, function responses, intermediate NL
responses etc.
EventMetadata
Metadata relating to a LLM response event.
EventMetadataDict
Metadata relating to a LLM response event.
ExactMatchInput
Create a new model by parsing and validating input data from keyword arguments.
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
ExactMatchInputDict
API documentation for ExactMatchInputDict class.
ExactMatchInstance
Exact match instance.
ExactMatchInstanceDict
Exact match instance.
ExactMatchResults
Result of evaluating an exact match metric.
ExactMatchResultsDict
Result of evaluating an exact match metric.
ExactMatchSpec
Spec for exact match metric.
ExactMatchSpecDict
Spec for exact match metric.
ExecuteCodeAgentEngineSandboxConfig
Config for executing code in an Agent Engine sandbox.
ExecuteCodeAgentEngineSandboxConfigDict
Config for executing code in an Agent Engine sandbox.
ExecuteSandboxEnvironmentResponse
The response for executing a sandbox environment.
ExecuteSandboxEnvironmentResponseDict
The response for executing a sandbox environment.
Framework
Framework used to build the application.
GeminiExample
Represents a Gemini example.
GeminiExampleDict
Represents a Gemini example.
GeminiRequestReadConfig
Represents the config for reading Gemini requests.
GeminiRequestReadConfigDict
Represents the config for reading Gemini requests.
GeminiTemplateConfig
Represents a Gemini template config.
GeminiTemplateConfigDict
Represents a Gemini template config.
GenerateAgentEngineMemoriesConfig
Config for generating memories.
GenerateAgentEngineMemoriesConfigDict
Config for generating memories.
GenerateInstanceRubricsResponse
Response for generating rubrics.
GenerateInstanceRubricsResponseDict
Response for generating rubrics.
GenerateMemoriesRequestDirectContentsSource
The direct contents source for generating memories.
GenerateMemoriesRequestDirectContentsSourceDict
The direct contents source for generating memories.
GenerateMemoriesRequestDirectContentsSourceEvent
Create a new model by parsing and validating input data from keyword arguments.
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
GenerateMemoriesRequestDirectContentsSourceEventDict
API documentation for GenerateMemoriesRequestDirectContentsSourceEventDict class.
GenerateMemoriesRequestDirectMemoriesSource
The direct memories source for generating memories.
GenerateMemoriesRequestDirectMemoriesSourceDict
The direct memories source for generating memories.
GenerateMemoriesRequestDirectMemoriesSourceDirectMemory
A direct memory to upload to Memory Bank.
GenerateMemoriesRequestDirectMemoriesSourceDirectMemoryDict
A direct memory to upload to Memory Bank.
GenerateMemoriesRequestVertexSessionSource
The vertex session source for generating memories.
GenerateMemoriesRequestVertexSessionSourceDict
The vertex session source for generating memories.
GenerateMemoriesResponse
The response for generating memories.
GenerateMemoriesResponseDict
The response for generating memories.
GenerateMemoriesResponseGeneratedMemory
A memory that was generated.
GenerateMemoriesResponseGeneratedMemoryAction
The action to take.
GenerateMemoriesResponseGeneratedMemoryDict
A memory that was generated.
GenerateUserScenariosConfig
Create a new model by parsing and validating input data from keyword arguments.
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
GenerateUserScenariosConfigDict
API documentation for GenerateUserScenariosConfigDict class.
GenerateUserScenariosResponse
Response message for DataFoundryService.GenerateUserScenarios.
GenerateUserScenariosResponseDict
Response message for DataFoundryService.GenerateUserScenarios.
GetAgentEngineConfig
Config for create agent engine.
GetAgentEngineConfigDict
Config for create agent engine.
GetAgentEngineMemoryConfig
Config for getting an Agent Engine Memory.
GetAgentEngineMemoryConfigDict
Config for getting an Agent Engine Memory.
GetAgentEngineMemoryRevisionConfig
Config for getting an Agent Engine Memory Revision.
GetAgentEngineMemoryRevisionConfigDict
Config for getting an Agent Engine Memory Revision.
GetAgentEngineOperationConfig
Create a new model by parsing and validating input data from keyword arguments.
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
GetAgentEngineOperationConfigDict
API documentation for GetAgentEngineOperationConfigDict class.
GetAgentEngineSandboxConfig
Config for getting an Agent Engine Memory.
GetAgentEngineSandboxConfigDict
Config for getting an Agent Engine Memory.
GetAgentEngineSessionConfig
Config for getting an Agent Engine Session.
GetAgentEngineSessionConfigDict
Config for getting an Agent Engine Session.
GetAgentEngineTaskConfig
Config for getting an Agent Engine Task.
GetAgentEngineTaskConfigDict
Config for getting an Agent Engine Task.
GetDatasetOperationConfig
Config for getting a dataset version operation.
GetDatasetOperationConfigDict
Config for getting a dataset version operation.
GetEvaluationItemConfig
Config for get evaluation item.
GetEvaluationItemConfigDict
Config for get evaluation item.
GetEvaluationMetricConfig
Config for getting an evaluation metric.
GetEvaluationMetricConfigDict
Config for getting an evaluation metric.
GetEvaluationRunConfig
Config for get evaluation run.
GetEvaluationRunConfigDict
Config for get evaluation run.
GetEvaluationSetConfig
Config for get evaluation set.
GetEvaluationSetConfigDict
Config for get evaluation set.
GetMultimodalDatasetOperationConfig
Config for getting a multimodal dataset operation.
GetMultimodalDatasetOperationConfigDict
Config for getting a multimodal dataset operation.
GetPromptConfig
Config for getting a prompt.
GetPromptConfigDict
Config for getting a prompt.
IdentityType
The identity type to use for the Reasoning Engine. If not specified, the service_account field will be used if set, otherwise the default Vertex AI Reasoning Engine Service Agent in the project will be used.
Importance
Importance level of the rubric.
IntermediateExtractedMemory
An extracted memory that is the intermediate result before consolidation.
IntermediateExtractedMemoryDict
An extracted memory that is the intermediate result before consolidation.
JobState
Output only. The detailed state of the job.
LLMMetric
A metric that uses LLM-as-a-judge for evaluation.
Language
The coding language supported in this environment.
ListAgentEngineConfig
Config for listing agent engines.
ListAgentEngineConfigDict
Config for listing agent engines.
ListAgentEngineMemoryConfig
Config for listing agent engine memories.
ListAgentEngineMemoryConfigDict
Config for listing agent engine memories.
ListAgentEngineMemoryRevisionsConfig
Config for listing Agent Engine memory revisions.
ListAgentEngineMemoryRevisionsConfigDict
Config for listing Agent Engine memory revisions.
ListAgentEngineMemoryRevisionsResponse
Response for listing agent engine memory revisions.
ListAgentEngineMemoryRevisionsResponseDict
Response for listing agent engine memory revisions.
ListAgentEngineSandboxesConfig
Config for listing agent engine sandboxes.
ListAgentEngineSandboxesConfigDict
Config for listing agent engine sandboxes.
ListAgentEngineSandboxesResponse
Response for listing agent engine sandboxes.
ListAgentEngineSandboxesResponseDict
Response for listing agent engine sandboxes.
ListAgentEngineSessionEventsConfig
Config for listing agent engine session events.
ListAgentEngineSessionEventsConfigDict
Config for listing agent engine session events.
ListAgentEngineSessionEventsResponse
Response for listing agent engine session events.
ListAgentEngineSessionEventsResponseDict
Response for listing agent engine session events.
ListAgentEngineSessionsConfig
Config for listing agent engine sessions.
ListAgentEngineSessionsConfigDict
Config for listing agent engine sessions.
ListAgentEngineTaskEventsConfig
Config for listing agent engine tasks.
ListAgentEngineTaskEventsConfigDict
Config for listing agent engine tasks.
ListAgentEngineTaskEventsResponse
Response for listing Agent Engine tasks events.
ListAgentEngineTaskEventsResponseDict
Response for listing Agent Engine tasks events.
ListAgentEngineTasksConfig
Config for listing agent engine tasks.
ListAgentEngineTasksConfigDict
Config for listing agent engine tasks.
ListAgentEngineTasksResponse
Response for listing agent engine tasks.
ListAgentEngineTasksResponseDict
Response for listing agent engine tasks.
ListDatasetVersionsResponse
Response for listing prompt datasets.
ListDatasetVersionsResponseDict
Response for listing prompt datasets.
ListDatasetsResponse
Response for listing prompt datasets.
ListDatasetsResponseDict
Response for listing prompt datasets.
ListEvaluationMetricsConfig
Config for listing evaluation metrics.
ListEvaluationMetricsConfigDict
Config for listing evaluation metrics.
ListEvaluationMetricsResponse
Response for listing evaluation metrics.
ListEvaluationMetricsResponseDict
Response for listing evaluation metrics.
ListMultimodalDatasetsConfig
Config for listing multimodal datasets.
ListMultimodalDatasetsConfigDict
Config for listing multimodal datasets.
ListMultimodalDatasetsResponse
Response for listing multimodal datasets.
ListMultimodalDatasetsResponseDict
Response for listing multimodal datasets.
ListPromptsConfig
Config for listing prompt datasets and dataset versions.
ListPromptsConfigDict
Config for listing prompt datasets and dataset versions.
ListReasoningEnginesMemoriesResponse
Response for listing agent engine memories.
ListReasoningEnginesMemoriesResponseDict
Response for listing agent engine memories.
ListReasoningEnginesResponse
Response for listing agent engines.
ListReasoningEnginesResponseDict
Response for listing agent engines.
ListReasoningEnginesSessionsResponse
Response for listing agent engine sessions.
ListReasoningEnginesSessionsResponseDict
Response for listing agent engine sessions.
LustreMount
Represents a mount configuration for Lustre file system.
LustreMountDict
Represents a mount configuration for Lustre file system.
MachineConfig
The machine config of the code execution environment.
MachineSpec
Specification of a single machine.
MachineSpecDict
Specification of a single machine.
ManagedTopicEnum
The managed memory topic.
MapInstance
Instance data specified as a map.
MapInstanceDict
Instance data specified as a map.
Memory
A memory.
MemoryBankCustomizationConfig
Configuration for organizing memories for a particular scope.
MemoryBankCustomizationConfigDict
Configuration for organizing memories for a particular scope.
MemoryBankCustomizationConfigGenerateMemoriesExample
An example of how to generate memories for a particular scope.
MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSource
A conversation source for the example. This is similar to DirectContentsSource .
MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSourceDict
A conversation source for the example. This is similar to DirectContentsSource .
MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSourceEvent
The conversation source event for generating memories.
MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSourceEventDict
The conversation source event for generating memories.
MemoryBankCustomizationConfigGenerateMemoriesExampleDict
An example of how to generate memories for a particular scope.
MemoryBankCustomizationConfigGenerateMemoriesExampleGeneratedMemory
A memory generated by the operation.
MemoryBankCustomizationConfigGenerateMemoriesExampleGeneratedMemoryDict
A memory generated by the operation.
MemoryBankCustomizationConfigMemoryTopic
A topic of information that should be extracted from conversations and stored as memories.
MemoryBankCustomizationConfigMemoryTopicCustomMemoryTopic
A custom memory topic defined by the developer.
MemoryBankCustomizationConfigMemoryTopicCustomMemoryTopicDict
A custom memory topic defined by the developer.
MemoryBankCustomizationConfigMemoryTopicDict
A topic of information that should be extracted from conversations and stored as memories.
MemoryBankCustomizationConfigMemoryTopicManagedMemoryTopic
A managed memory topic defined by the system.
MemoryBankCustomizationConfigMemoryTopicManagedMemoryTopicDict
A managed memory topic defined by the system.
MemoryConjunctionFilter
The conjunction filter for memories.
MemoryConjunctionFilterDict
The conjunction filter for memories.
MemoryDict
A memory.
MemoryFilter
Filter to apply when retrieving memories.
MemoryFilterDict
Filter to apply when retrieving memories.
MemoryMetadataMergeStrategy
The strategy to use when applying metadata to existing memories during consolidation.
MemoryMetadataValue
The metadata values for memories.
MemoryMetadataValueDict
The metadata values for memories.
MemoryRevision
A memory revision.
MemoryRevisionDict
A memory revision.
MemoryTopicId
The topic ID for a memory.
MemoryTopicIdDict
The topic ID for a memory.
Message
Represents a single message turn in a conversation.
MessageDict
Represents a single message turn in a conversation.
Metadata
Metadata for a chunk.
MetadataDict
Metadata for a chunk.
Metric
The metric used for evaluation.
MetricDict
The metric used for evaluation.
MetricPromptBuilder
Builder class for structured LLM-based metric prompt template.
MetricResult
Result for a single metric on a single instance.
MetricResultDict
Result for a single metric on a single instance.
MetricSource
The metric source used for evaluation.
MetricSourceDict
The metric source used for evaluation.
MetricxResult
Spec for MetricX result - calculates the MetricX score for the given instance using the version specified in the spec.
MetricxResultDict
Spec for MetricX result - calculates the MetricX score for the given instance using the version specified in the spec.
MultimodalDataset
Represents a multimodal dataset.
MultimodalDatasetDict
Represents a multimodal dataset.
MultimodalDatasetOperation
Represents the create dataset operation.
MultimodalDatasetOperationDict
Represents the create dataset operation.
NfsMount
Represents a mount configuration for Network File System (NFS) to mount.
NfsMountDict
Represents a mount configuration for Network File System (NFS) to mount.
ObservabilityEvalCase
A single evaluation case instance for data stored in GCP Observability.
ObservabilityEvalCaseDict
A single evaluation case instance for data stored in GCP Observability.
Operator
Operator to apply to the filter. If not set, then EQUAL will be used.
OptimizationMethod
The method for data driven prompt optimization.
OptimizeConfig
Config for Prompt Optimizer.
OptimizeConfigDict
Config for Prompt Optimizer.
OptimizeJobConfig
VAPO Prompt Optimizer Config.
OptimizeJobConfigDict
VAPO Prompt Optimizer Config.
OptimizeResponse
Response for the optimize_prompt method.
OptimizeResponseDict
Response for the optimize_prompt method.
OptimizeResponseEndpoint
Response for the optimize_prompt method.
OptimizeResponseEndpointDict
Response for the optimize_prompt method.
OptimizeTarget
Specifies the method for calling the optimize_prompt.
PairwiseMetricInput
Pairwise metric instance.
PairwiseMetricInputDict
Pairwise metric instance.
PairwiseMetricInstance
Pairwise metric instance.
PairwiseMetricInstanceDict
Pairwise metric instance.
PointwiseMetricInput
Pointwise metric input.
PointwiseMetricInputDict
Pointwise metric input.
PointwiseMetricInstance
Pointwise metric instance.
PointwiseMetricInstanceDict
Pointwise metric instance.
Prompt
Represents a prompt.
PromptDict
Represents a prompt.
PromptOptimizerConfig
VAPO Prompt Optimizer Config.
PromptOptimizerConfigDict
VAPO Prompt Optimizer Config.
PromptOptimizerMethod
The method for data driven prompt optimization.
PromptRef
Reference to a prompt.
PromptRefDict
Reference to a prompt.
PromptTemplate
A prompt template for creating prompts with variables.
PromptTemplateData
Holds data for a prompt template.
Message to hold a prompt template and the values to populate the template.
PromptTemplateDataDict
Holds data for a prompt template.
Message to hold a prompt template and the values to populate the template.
PromptTemplateDict
A prompt template for creating prompts with variables.
PromptVersionRef
Reference to a prompt version.
PromptVersionRefDict
Reference to a prompt version.
PscInterfaceConfig
Configuration for PSC-I.
PscInterfaceConfigDict
Configuration for PSC-I.
PurgeAgentEngineMemoriesConfig
Config for purging memories.
PurgeAgentEngineMemoriesConfigDict
Config for purging memories.
PurgeMemoriesResponse
The response for purging memories.
PurgeMemoriesResponseDict
The response for purging memories.
PythonPackageSpec
The spec of a Python packaged code.
PythonPackageSpecDict
The spec of a Python packaged code.
QueryAgentEngineConfig
Config for querying agent engines.
QueryAgentEngineConfigDict
Config for querying agent engines.
QueryReasoningEngineResponse
The response for querying an agent engine.
QueryReasoningEngineResponseDict
The response for querying an agent engine.
ReasoningEngine
An agent engine.
ReasoningEngineContextSpec
Configuration for how Agent Engine sub-resources should manage context.
ReasoningEngineContextSpecDict
Configuration for how Agent Engine sub-resources should manage context.
ReasoningEngineContextSpecMemoryBankConfig
Specification for a Memory Bank.
ReasoningEngineContextSpecMemoryBankConfigDict
Specification for a Memory Bank.
ReasoningEngineContextSpecMemoryBankConfigGenerationConfig
Configuration for how to generate memories.
ReasoningEngineContextSpecMemoryBankConfigGenerationConfigDict
Configuration for how to generate memories.
ReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig
Configuration for how to perform similarity search on memories.
ReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigDict
Configuration for how to perform similarity search on memories.
ReasoningEngineContextSpecMemoryBankConfigTtlConfig
Configuration for automatically setting the TTL ("time-to-live") of the memories in the Memory Bank.
ReasoningEngineContextSpecMemoryBankConfigTtlConfigDict
Configuration for automatically setting the TTL ("time-to-live") of the memories in the Memory Bank.
ReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig
Configuration for TTL of the memories in the Memory Bank based on the action that created or updated the memory.
ReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigDict
Configuration for TTL of the memories in the Memory Bank based on the action that created or updated the memory.
ReasoningEngineDict
An agent engine.
ReasoningEngineSpec
The specification of an agent engine.
ReasoningEngineSpecContainerSpec
Specification for deploying from a container image.
ReasoningEngineSpecContainerSpecDict
Specification for deploying from a container image.
ReasoningEngineSpecDeploymentSpec
The specification of a Reasoning Engine deployment.
ReasoningEngineSpecDeploymentSpecDict
The specification of a Reasoning Engine deployment.
ReasoningEngineSpecDict
The specification of an agent engine.
ReasoningEngineSpecPackageSpec
User-provided package specification, containing pickled object and package requirements.
ReasoningEngineSpecPackageSpecDict
User-provided package specification, containing pickled object and package requirements.
ReasoningEngineSpecSourceCodeSpec
Specification for deploying from source code.
ReasoningEngineSpecSourceCodeSpecAgentConfigSource
Specification for the deploying from agent config.
ReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig
Configuration for the Agent Development Kit (ADK).
ReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfigDict
Configuration for the Agent Development Kit (ADK).
ReasoningEngineSpecSourceCodeSpecAgentConfigSourceDict
Specification for the deploying from agent config.
ReasoningEngineSpecSourceCodeSpecDeveloperConnectConfig
Specifies the configuration for fetching source code from a Git repository that is managed by Developer Connect.
This includes the repository, revision, and directory to use.
ReasoningEngineSpecSourceCodeSpecDeveloperConnectConfigDict
Specifies the configuration for fetching source code from a Git repository that is managed by Developer Connect.
This includes the repository, revision, and directory to use.
ReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
Specifies source code to be fetched from a Git repository managed through the Developer Connect service.
ReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceDict
Specifies source code to be fetched from a Git repository managed through the Developer Connect service.
ReasoningEngineSpecSourceCodeSpecDict
Specification for deploying from source code.
ReasoningEngineSpecSourceCodeSpecImageSpec
The image spec for building an image (within a single build step), based on the config file (i.e. Dockerfile) in the source directory.
ReasoningEngineSpecSourceCodeSpecImageSpecDict
The image spec for building an image (within a single build step), based on the config file (i.e. Dockerfile) in the source directory.
ReasoningEngineSpecSourceCodeSpecInlineSource
Specifies source code provided as a byte stream.
ReasoningEngineSpecSourceCodeSpecInlineSourceDict
Specifies source code provided as a byte stream.
ReasoningEngineSpecSourceCodeSpecPythonSpec
Specification for running a Python application from source.
ReasoningEngineSpecSourceCodeSpecPythonSpecDict
Specification for running a Python application from source.
ReservationAffinity
A ReservationAffinity can be used to configure a Vertex AI resource (e.g., a DeployedModel) to draw its Compute Engine resources from a Shared Reservation, or exclusively from on-demand capacity.
ReservationAffinityDict
A ReservationAffinity can be used to configure a Vertex AI resource (e.g., a DeployedModel) to draw its Compute Engine resources from a Shared Reservation, or exclusively from on-demand capacity.
ResponseCandidate
A model-generated content to the prompt.
ResponseCandidateDict
A model-generated content to the prompt.
ResponseCandidateResult
Aggregated metric results for a single response candidate.
ResponseCandidateResultDict
Aggregated metric results for a single response candidate.
RestoreVersionConfig
Config for restoring a prompt version.
RestoreVersionConfigDict
Config for restoring a prompt version.
RestoreVersionOperation
Represents the restore version operation.
RestoreVersionOperationDict
Represents the restore version operation.
RetrieveAgentEngineMemoriesConfig
Config for retrieving memories.
RetrieveAgentEngineMemoriesConfigDict
Config for retrieving memories.
RetrieveMemoriesRequestSimilaritySearchParams
The parameters for semantic similarity search based retrieval.
RetrieveMemoriesRequestSimilaritySearchParamsDict
The parameters for semantic similarity search based retrieval.
RetrieveMemoriesRequestSimpleRetrievalParams
The parameters for simple (non-similarity search) retrieval.
RetrieveMemoriesRequestSimpleRetrievalParamsDict
The parameters for simple (non-similarity search) retrieval.
RetrieveMemoriesResponse
The response for retrieving memories.
RetrieveMemoriesResponseDict
The response for retrieving memories.
RetrieveMemoriesResponseRetrievedMemory
A retrieved memory.
RetrieveMemoriesResponseRetrievedMemoryDict
A retrieved memory.
RollbackAgentEngineMemoryConfig
Config for rolling back a memory.
RollbackAgentEngineMemoryConfigDict
Config for rolling back a memory.
RougeInput
Rouge input.
RougeInputDict
Rouge input.
RougeInstance
Rouge instance.
RougeInstanceDict
Rouge instance.
RougeResults
Result of evaluating a rouge metric.
RougeResultsDict
Result of evaluating a rouge metric.
Rubric
Message representing a single testable criterion for evaluation.
One input prompt could have multiple rubrics.
RubricBasedMetricInput
Input for a rubric-based metrics.
RubricBasedMetricInputDict
Input for a rubric-based metrics.
RubricBasedMetricInstance
Defines an instance for Rubric-based metrics.
This class allows various input formats.
RubricBasedMetricInstanceDict
Defines an instance for Rubric-based metrics.
This class allows various input formats.
RubricBasedMetricResult
Result for a rubric-based metric.
RubricBasedMetricResultDict
Result for a rubric-based metric.
RubricBasedMetricSpec
Specification for a metric that is based on rubrics.
RubricBasedMetricSpecDict
Specification for a metric that is based on rubrics.
RubricContent
Content of the rubric, defining the testable criteria.
RubricContentDict
Content of the rubric, defining the testable criteria.
RubricContentProperty
Defines criteria based on a specific property.
RubricContentPropertyDict
Defines criteria based on a specific property.
RubricDict
Message representing a single testable criterion for evaluation.
One input prompt could have multiple rubrics.
RubricEnhancedContents
Rubric-enhanced contents for evaluation.
RubricEnhancedContentsDict
Rubric-enhanced contents for evaluation.
RubricGenerationConfig
Config for generating rubrics.
RubricGenerationConfigDict
Config for generating rubrics.
RubricGroup
A group of rubrics.
Used for grouping rubrics based on a metric or a version.
RubricGroupDict
A group of rubrics.
Used for grouping rubrics based on a metric or a version.
RubricVerdict
Represents the verdict of an evaluation against a single rubric.
RubricVerdictDict
Represents the verdict of an evaluation against a single rubric.
RunQueryJobAgentEngineConfig
Config for checking a query job on an agent engine.
RunQueryJobAgentEngineConfigDict
Config for checking a query job on an agent engine.
RunQueryJobResult
Result of running a query job.
RunQueryJobResultDict
Result of running a query job.
SamplingConfig
Sampling config for a BigQuery request set.
SamplingConfigDict
Sampling config for a BigQuery request set.
SamplingMethod
Represents the sampling method for a BigQuery request set.
SandboxEnvironment
A sandbox environment.
SandboxEnvironmentConnectionInfo
The connection information of the SandboxEnvironment.
SandboxEnvironmentConnectionInfoDict
The connection information of the SandboxEnvironment.
SandboxEnvironmentDict
A sandbox environment.
SandboxEnvironmentSpec
The specification of a sandbox environment.
SandboxEnvironmentSpecCodeExecutionEnvironment
The code execution environment with customized settings.
SandboxEnvironmentSpecCodeExecutionEnvironmentDict
The code execution environment with customized settings.
SandboxEnvironmentSpecComputerUseEnvironment
The computer use environment with customized settings.
SandboxEnvironmentSpecComputerUseEnvironmentDict
The computer use environment with customized settings.
SandboxEnvironmentSpecDict
The specification of a sandbox environment.
SavedQuery
A SavedQuery is a view of the dataset. It references a subset of annotations by problem type and filters.
SavedQueryDict
A SavedQuery is a view of the dataset. It references a subset of annotations by problem type and filters.
Scheduling
All parameters related to queuing and scheduling of custom jobs.
SchedulingDict
All parameters related to queuing and scheduling of custom jobs.
SchemaPredictParamsGroundingConfig
The configuration for grounding checking.
SchemaPredictParamsGroundingConfigDict
The configuration for grounding checking.
SchemaPredictParamsGroundingConfigSourceEntry
Single source entry for the grounding checking.
SchemaPredictParamsGroundingConfigSourceEntryDict
Single source entry for the grounding checking.
SchemaPromptApiSchema
The A2 schema of a prompt.
SchemaPromptApiSchemaDict
The A2 schema of a prompt.
SchemaPromptInstancePromptExecution
A prompt instance's parameters set that contains a set of variable values.
SchemaPromptInstancePromptExecutionDict
A prompt instance's parameters set that contains a set of variable values.
SchemaPromptInstanceVariableValue
Represents a prompt instance variable.
SchemaPromptInstanceVariableValueDict
Represents a prompt instance variable.
SchemaPromptSpecAppBuilderData
Defines data for an application builder.
SchemaPromptSpecAppBuilderDataDict
Defines data for an application builder.
SchemaPromptSpecAppBuilderDataLinkedResource
A linked resource attached to the application by the user.
SchemaPromptSpecAppBuilderDataLinkedResourceDict
A linked resource attached to the application by the user.
SchemaPromptSpecMultimodalPrompt
Prompt variation that embeds preambles to prompt string.
SchemaPromptSpecMultimodalPromptDict
Prompt variation that embeds preambles to prompt string.
SchemaPromptSpecPartList
Represents a prompt spec part list.
SchemaPromptSpecPartListDict
Represents a prompt spec part list.
SchemaPromptSpecPromptMessage
Represents a prompt message.
SchemaPromptSpecPromptMessageDict
Represents a prompt message.
SchemaPromptSpecReferenceSentencePair
A pair of sentences used as reference in source and target languages.
SchemaPromptSpecReferenceSentencePairDict
A pair of sentences used as reference in source and target languages.
SchemaPromptSpecReferenceSentencePairList
A list of reference sentence pairs.
SchemaPromptSpecReferenceSentencePairListDict
A list of reference sentence pairs.
SchemaPromptSpecStructuredPrompt
Represents a structured prompt.
SchemaPromptSpecStructuredPromptDict
Represents a structured prompt.
SchemaPromptSpecTranslationExample
The translation example that contains reference sentences from various sources.
SchemaPromptSpecTranslationExampleDict
The translation example that contains reference sentences from various sources.
SchemaPromptSpecTranslationFileInputSource
Create a new model by parsing and validating input data from keyword arguments.
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
SchemaPromptSpecTranslationFileInputSourceDict
API documentation for SchemaPromptSpecTranslationFileInputSourceDict class.
SchemaPromptSpecTranslationGcsInputSource
Create a new model by parsing and validating input data from keyword arguments.
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
SchemaPromptSpecTranslationGcsInputSourceDict
API documentation for SchemaPromptSpecTranslationGcsInputSourceDict class.
SchemaPromptSpecTranslationOption
Optional settings for translation prompt.
SchemaPromptSpecTranslationOptionDict
Optional settings for translation prompt.
SchemaPromptSpecTranslationPrompt
Prompt variation for Translation use case.
SchemaPromptSpecTranslationPromptDict
Prompt variation for Translation use case.
SchemaPromptSpecTranslationSentenceFileInput
Create a new model by parsing and validating input data from keyword arguments.
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
SchemaPromptSpecTranslationSentenceFileInputDict
API documentation for SchemaPromptSpecTranslationSentenceFileInputDict class.
SchemaTablesDatasetMetadata
Represents the metadata schema for multimodal dataset metadata.
SchemaTablesDatasetMetadataBigQuerySource
Represents the BigQuery source for multimodal dataset metadata.
SchemaTablesDatasetMetadataBigQuerySourceDict
Represents the BigQuery source for multimodal dataset metadata.
SchemaTablesDatasetMetadataDict
Represents the metadata schema for multimodal dataset metadata.
SchemaTablesDatasetMetadataInputConfig
Represents the input config for multimodal dataset metadata.
SchemaTablesDatasetMetadataInputConfigDict
Represents the input config for multimodal dataset metadata.
SchemaTextPromptDatasetMetadata
Represents the text prompt dataset metadata.
SchemaTextPromptDatasetMetadataDict
Represents the text prompt dataset metadata.
SecretEnvVar
Represents an environment variable where the value is a secret in Cloud Secret Manager.
SecretEnvVarDict
Represents an environment variable where the value is a secret in Cloud Secret Manager.
SecretRef
Reference to a secret stored in the Cloud Secret Manager that will provide the value for this environment variable.
SecretRefDict
Reference to a secret stored in the Cloud Secret Manager that will provide the value for this environment variable.
Session
A session.
SessionDict
A session.
SessionEvent
A session event.
SessionEventDict
A session event.
State
The new state of the task.
Strategy
This determines which type of scheduling strategy to use.
SummaryMetric
Represents a summary metric for an evaluation run.
SummaryMetricDict
Represents a summary metric for an evaluation run.
TaskArtifact
The artifact of the task event.
TaskArtifactChange
Describes changes to the artifact list.
TaskArtifactChangeDict
Describes changes to the artifact list.
TaskArtifactDict
The artifact of the task event.
TaskEvent
A task event.
TaskEventData
Data for a TaskEvent.
TaskEventDataDict
Data for a TaskEvent.
TaskEventDict
A task event.
TaskMessage
The message of the task event.
TaskMessageDict
The message of the task event.
TaskMetadataChange
An event representing a change to the task's top-level metadata. example: metadata_change: { new_metadata: { "name": "My task", } update_mask: { paths: "name" } }
TaskMetadataChangeDict
An event representing a change to the task's top-level metadata. example: metadata_change: { new_metadata: { "name": "My task", } update_mask: { paths: "name" } }
TaskOutput
The output of the task event.
TaskOutputChange
An event representing a change to the task's outputs.
TaskOutputChangeDict
An event representing a change to the task's outputs.
TaskOutputDict
The output of the task event.
TaskStateChange
A message representing a change in a task's state.
TaskStateChangeDict
A message representing a change in a task's state.
TaskStatusDetails
The status details of the task event.
TaskStatusDetailsChange
Represents a change to the task's status details.
TaskStatusDetailsChangeDict
Represents a change to the task's status details.
TaskStatusDetailsDict
The status details of the task event.
ToolCallValidInput
Tool call valid input.
ToolCallValidInputDict
Tool call valid input.
ToolCallValidInstance
Tool call valid instance.
ToolCallValidInstanceDict
Tool call valid instance.
ToolCallValidMetricValue
Tool call valid metric value for an instance.
ToolCallValidMetricValueDict
Tool call valid metric value for an instance.
ToolCallValidResults
Results for tool call valid metric.
ToolCallValidResultsDict
Results for tool call valid metric.
ToolCallValidSpec
Spec for tool call valid metric.
ToolCallValidSpecDict
Spec for tool call valid metric.
ToolNameMatchInput
Tool name match input.
ToolNameMatchInputDict
Tool name match input.
ToolNameMatchInstance
Tool name match instance.
ToolNameMatchInstanceDict
Tool name match instance.
ToolNameMatchMetricValue
Tool name match metric value for an instance.
ToolNameMatchMetricValueDict
Tool name match metric value for an instance.
ToolNameMatchResults
Results for tool name match metric.
ToolNameMatchResultsDict
Results for tool name match metric.
ToolNameMatchSpec
Spec for tool name match metric.
ToolNameMatchSpecDict
Spec for tool name match metric.
ToolParameterKVMatchInput
Tool parameter kv match input.
ToolParameterKVMatchInputDict
Tool parameter kv match input.
ToolParameterKVMatchInstance
Tool parameter kv match instance.
ToolParameterKVMatchInstanceDict
Tool parameter kv match instance.
ToolParameterKVMatchMetricValue
Tool parameter key value match metric value for an instance.
ToolParameterKVMatchMetricValueDict
Tool parameter key value match metric value for an instance.
ToolParameterKVMatchResults
Results for tool parameter key value match metric.
ToolParameterKVMatchResultsDict
Results for tool parameter key value match metric.
ToolParameterKVMatchSpec
Spec for tool parameter kv match metric.
ToolParameterKVMatchSpecDict
Spec for tool parameter kv match metric.
ToolParameterKeyMatchInput
Tool parameter key match input.
ToolParameterKeyMatchInputDict
Tool parameter key match input.
ToolParameterKeyMatchInstance
Tool parameter key match instance.
ToolParameterKeyMatchInstanceDict
Tool parameter key match instance.
ToolParameterKeyMatchMetricValue
Tool parameter key match metric value for an instance.
ToolParameterKeyMatchMetricValueDict
Tool parameter key match metric value for an instance.
ToolParameterKeyMatchResults
Results for tool parameter key match metric.
ToolParameterKeyMatchResultsDict
Results for tool parameter key match metric.
ToolParameterKeyMatchSpec
Spec for tool parameter key match metric.
ToolParameterKeyMatchSpecDict
Spec for tool parameter key match metric.
TuningResourceUsageAssessmentConfig
Config for tuning resource usage assessment.
TuningResourceUsageAssessmentConfigDict
Config for tuning resource usage assessment.
TuningResourceUsageAssessmentResult
Result of tuning resource usage assessment.
TuningResourceUsageAssessmentResultDict
Result of tuning resource usage assessment.
TuningValidationAssessmentConfig
Config for tuning validation assessment.
TuningValidationAssessmentConfigDict
Config for tuning validation assessment.
TuningValidationAssessmentResult
The result of a tuning validation assessment.
TuningValidationAssessmentResultDict
The result of a tuning validation assessment.
Type
Specifies the reservation affinity type.
UnifiedMetric
The unified metric used for evaluation.
UnifiedMetricDict
The unified metric used for evaluation.
UpdateAgentEngineConfig
Config for updating agent engine.
UpdateAgentEngineConfigDict
Config for updating agent engine.
UpdateAgentEngineMemoryConfig
Config for updating agent engine memory.
UpdateAgentEngineMemoryConfigDict
Config for updating agent engine memory.
UpdateAgentEngineSessionConfig
Config for updating agent engine session.
UpdateAgentEngineSessionConfigDict
Config for updating agent engine session.
UpdateDatasetConfig
Config for creating a dataset resource to store prompts.
UpdateDatasetConfigDict
Config for creating a dataset resource to store prompts.
UpdateMultimodalDatasetConfig
Config for updating a multimodal dataset resource.
UpdateMultimodalDatasetConfigDict
Config for updating a multimodal dataset resource.
VertexBaseConfig
Base config for Vertex AI.
VertexBaseConfigDict
Base config for Vertex AI.
WinRateStats
Statistics for win rates for a single metric.
WinRateStatsDict
Statistics for win rates for a single metric.
WorkerPoolSpec
Represents the spec of a worker pool in a job.
WorkerPoolSpecDict
Represents the spec of a worker pool in a job.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
