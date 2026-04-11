---
title: "Package Methods (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/summary_method
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vertexai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/summary_method
  title: "Package Methods (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package Methods (1.144.0)
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
Summary of entries of Methods for aiplatform.
vertexai.init
init (
* ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
experiment : typing . Optional [ str ] = None ,
experiment_description : typing . Optional [ str ] = None ,
experiment_tensorboard : typing . Optional [
typing . Union [
str ,
google . cloud . aiplatform . tensorboard . tensorboard_resource . Tensorboard ,
bool ,
]
] = None ,
staging_bucket : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
encryption_spec_key_name : typing . Optional [ str ] = None ,
network : typing . Optional [ str ] = None ,
service_account : typing . Optional [ str ] = None ,
api_endpoint : typing . Optional [ str ] = None ,
api_key : typing . Optional [ str ] = None ,
api_transport : typing . Optional [ str ] = None ,
request_metadata : typing . Optional [ typing . Sequence [ typing . Tuple [ str , str ]]] = None
)
Updates common initialization parameters with provided options.
See more: vertexai.init
vertexai.agent_engines.create
create (
agent_engine : typing . Union [
None ,
vertexai . agent_engines . AsyncQueryable ,
vertexai . agent_engines . AsyncStreamQueryable ,
vertexai . agent_engines . _agent_engines . BidiStreamQueryable ,
vertexai . agent_engines . OperationRegistrable ,
vertexai . agent_engines . Queryable ,
vertexai . agent_engines . StreamQueryable ,
] = None ,
* ,
requirements : typing . Optional [ typing . Union [ str , typing . Sequence [ str ]]] = None ,
display_name : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
gcs_dir_name : typing . Optional [ str ] = None ,
extra_packages : typing . Optional [ typing . Sequence [ str ]] = None ,
env_vars : typing . Optional [
typing . Union [
typing . Sequence [ str ],
typing . Dict [
str ,
typing . Union [ str , google . cloud . aiplatform_v1 . types . env_var . SecretRef ],
],
]
] = None ,
build_options : typing . Optional [ typing . Dict [ str , typing . Sequence [ str ]]] = None ,
service_account : typing . Optional [ str ] = None ,
psc_interface_config : typing . Optional [
google . cloud . aiplatform_v1 . types . service_networking . PscInterfaceConfig
] = None ,
min_instances : typing . Optional [ int ] = None ,
max_instances : typing . Optional [ int ] = None ,
resource_limits : typing . Optional [ typing . Dict [ str , str ]] = None ,
container_concurrency : typing . Optional [ int ] = None ,
encryption_spec : typing . Optional [
google . cloud . aiplatform_v1 . types . encryption_spec . EncryptionSpec
] = None
) - > vertexai . agent_engines . AgentEngine
Creates a new Agent Engine.
See more: vertexai.agent_engines.create
vertexai.agent_engines.delete
delete ( resource_name : str , * , force : bool = False , ** kwargs ) - > None
Delete an Agent Engine resource.
See more: vertexai.agent_engines.delete
vertexai.agent_engines.get
get ( resource_name : str ) - > vertexai . agent_engines . AgentEngine
Retrieves an Agent Engine resource.
See more: vertexai.agent_engines.get
vertexai.agent_engines.list
list ( * , filter : str = "" ) - > typing . Iterable [ vertexai . agent_engines . AgentEngine ]
List all instances of Agent Engine matching the filter.
See more: vertexai.agent_engines.list
vertexai.agent_engines.update
update (
resource_name : str ,
* ,
agent_engine : typing . Optional [
typing . Union [
vertexai . agent_engines . Queryable ,
vertexai . agent_engines . OperationRegistrable ,
]
] = None ,
requirements : typing . Optional [ typing . Union [ str , typing . Sequence [ str ]]] = None ,
display_name : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
gcs_dir_name : typing . Optional [ str ] = None ,
extra_packages : typing . Optional [ typing . Sequence [ str ]] = None ,
env_vars : typing . Optional [
typing . Union [
typing . Sequence [ str ],
typing . Dict [
str ,
typing . Union [ str , google . cloud . aiplatform_v1 . types . env_var . SecretRef ],
],
]
] = None ,
build_options : typing . Optional [ typing . Dict [ str , typing . Sequence [ str ]]] = None ,
service_account : typing . Optional [ str ] = None ,
psc_interface_config : typing . Optional [
google . cloud . aiplatform_v1 . types . service_networking . PscInterfaceConfig
] = None ,
min_instances : typing . Optional [ int ] = None ,
max_instances : typing . Optional [ int ] = None ,
resource_limits : typing . Optional [ typing . Dict [ str , str ]] = None ,
container_concurrency : typing . Optional [ int ] = None ,
encryption_spec : typing . Optional [
google . cloud . aiplatform_v1 . types . encryption_spec . EncryptionSpec
] = None
) - > vertexai . agent_engines . AgentEngine
Updates an existing Agent Engine.
See more: vertexai.agent_engines.update
vertexai.preview.end_run
end_run (
state : google . cloud . aiplatform_v1 . types . execution . Execution . State = State . COMPLETE ,
)
Ends the the current experiment run.
See more: vertexai.preview.end_run
vertexai.preview.get_experiment_df
get_experiment_df (
experiment : typing . Optional [ str ] = None , * , include_time_series : bool = True
) - > pd . DataFrame
Returns a Pandas DataFrame of the parameters and metrics associated with one experiment.
See more: vertexai.preview.get_experiment_df
vertexai.preview.log_classification_metrics
log_classification_metrics (
* ,
labels : typing . Optional [ typing . List [ str ]] = None ,
matrix : typing . Optional [ typing . List [ typing . List [ int ]]] = None ,
fpr : typing . Optional [ typing . List [ float ]] = None ,
tpr : typing . Optional [ typing . List [ float ]] = None ,
threshold : typing . Optional [ typing . List [ float ]] = None ,
display_name : typing . Optional [ str ] = None
) - > (
google . cloud . aiplatform . metadata . schema . google . artifact_schema . ClassificationMetrics
)
Create an artifact for classification metrics and log to ExperimentRun.
See more: vertexai.preview.log_classification_metrics
vertexai.preview.log_metrics
log_metrics ( metrics : typing . Dict [ str , typing . Union [ float , int , str ]])
Log single or multiple Metrics with specified key and value pairs.
See more: vertexai.preview.log_metrics
vertexai.preview.log_params
log_params ( params : typing . Dict [ str , typing . Union [ float , int , str ]])
Log single or multiple parameters with specified key and value pairs.
See more: vertexai.preview.log_params
vertexai.preview.log_time_series_metrics
log_time_series_metrics (
metrics : typing . Dict [ str , float ],
step : typing . Optional [ int ] = None ,
wall_time : typing . Optional [ google . protobuf . timestamp_pb2 . Timestamp ] = None ,
)
Logs time series metrics to to this Experiment Run.
See more: vertexai.preview.log_time_series_metrics
vertexai.preview.start_run
start_run (
run : str ,
* ,
tensorboard : typing . Optional [
typing . Union [
google . cloud . aiplatform . tensorboard . tensorboard_resource . Tensorboard , str
]
] = None ,
resume = False
) - > google . cloud . aiplatform . metadata . experiment_run_resource . ExperimentRun
Start a run to current session.
See more: vertexai.preview.start_run
vertexai.preview.tuning.sft.preview_train
preview_train (
* ,
source_model : typing . Union [
str ,
vertexai . generative_models . GenerativeModel ,
vertexai . preview . tuning . _tuning . SourceModel ,
],
train_dataset : typing . Union [
str , google . cloud . aiplatform . preview . datasets . MultimodalDataset
],
validation_dataset : typing . Optional [
typing . Union [ str , google . cloud . aiplatform . preview . datasets . MultimodalDataset ]
] = None ,
tuned_model_display_name : typing . Optional [ str ] = None ,
tuning_mode : typing . Optional [ typing . Literal [ "FULL" , "PEFT_ADAPTER" ]] = None ,
epochs : typing . Optional [ int ] = None ,
learning_rate : typing . Optional [ float ] = None ,
learning_rate_multiplier : typing . Optional [ float ] = None ,
adapter_size : typing . Optional [ typing . Literal [ 1 , 4 , 8 , 16 , 32 ]] = None ,
labels : typing . Optional [ typing . Dict [ str , str ]] = None ,
output_uri : typing . Optional [ str ] = None
) - > vertexai . preview . tuning . _supervised_tuning . SupervisedTuningJob
Tunes a model using supervised training.
See more: vertexai.preview.tuning.sft.preview_train
vertexai.preview.tuning.sft.rebase_tuned_model
rebase_tuned_model (
tuned_model_ref : str ,
* ,
artifact_destination : typing . Optional [ str ] = None ,
deploy_to_same_endpoint : typing . Optional [ bool ] = False
)
Re-runs fine tuning on top of a new foundational model.
See more: vertexai.preview.tuning.sft.rebase_tuned_model
vertexai.preview.tuning.sft.train
train (
* ,
source_model : typing . Union [
str ,
vertexai . generative_models . GenerativeModel ,
vertexai . tuning . _tuning . SourceModel ,
],
train_dataset : typing . Union [
str , google . cloud . aiplatform . preview . datasets . MultimodalDataset
],
validation_dataset : typing . Optional [
typing . Union [ str , google . cloud . aiplatform . preview . datasets . MultimodalDataset ]
] = None ,
tuned_model_display_name : typing . Optional [ str ] = None ,
tuning_mode : typing . Optional [ typing . Literal [ "FULL" , "PEFT_ADAPTER" ]] = None ,
epochs : typing . Optional [ int ] = None ,
learning_rate : typing . Optional [ float ] = None ,
learning_rate_multiplier : typing . Optional [ float ] = None ,
adapter_size : typing . Optional [ typing . Literal [ 1 , 4 , 8 , 16 , 32 ]] = None ,
labels : typing . Optional [ typing . Dict [ str , str ]] = None ,
output_uri : typing . Optional [ str ] = None
) - > vertexai . tuning . _supervised_tuning . SupervisedTuningJob
Tunes a model using supervised training.
See more: vertexai.preview.tuning.sft.train
vertexai.Client
Client (
* ,
api_key : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
debug_config : typing . Optional [ google . genai . client . DebugConfig ] = None ,
http_options : typing . Optional [
typing . Union [ google . genai . types . HttpOptions , google . genai . types . HttpOptionsDict ]
] = None
)
Initializes the client.
See more: vertexai.Client
vertexai._genai.agent_engines.AgentEngines.append_session_event
append_session_event (
* ,
name : str ,
author : str ,
invocation_id : str ,
timestamp : datetime . datetime ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfig ,
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AppendAgentEngineSessionEventResponse
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.append_session_event
vertexai._genai.agent_engines.AgentEngines.check_query_job
check_query_job (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CheckQueryJobAgentEngineConfig ,
vertexai . _genai . types . common . CheckQueryJobAgentEngineConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . CheckQueryJobResult
Checks a query job on an agent engine and optionally returns the results.
See more: vertexai._genai.agent_engines.AgentEngines.check_query_job
vertexai._genai.agent_engines.AgentEngines.create
create (
* ,
agent_engine : typing . Optional [ typing . Any ] = None ,
agent : typing . Optional [ typing . Any ] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . AgentEngineConfig ,
vertexai . _genai . types . common . AgentEngineConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngine
Creates an agent engine.
See more: vertexai._genai.agent_engines.AgentEngines.create
vertexai._genai.agent_engines.AgentEngines.create_memory
create_memory (
* ,
name : str ,
fact : str ,
scope : dict [ str , str ],
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . AgentEngineMemoryConfig ,
vertexai . _genai . types . common . AgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineMemoryOperation
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.create_memory
vertexai._genai.agent_engines.AgentEngines.create_session
create_session (
* ,
name : str ,
user_id : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateAgentEngineSessionConfig ,
vertexai . _genai . types . common . CreateAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineSessionOperation
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.create_session
vertexai._genai.agent_engines.AgentEngines.delete
delete (
* ,
name : str ,
force : typing . Optional [ bool ] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineConfig ,
vertexai . _genai . types . common . DeleteAgentEngineConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineOperation
Delete an Agent Engine resource.
See more: vertexai._genai.agent_engines.AgentEngines.delete
vertexai._genai.agent_engines.AgentEngines.delete_memory
delete_memory (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineMemoryConfig ,
vertexai . _genai . types . common . DeleteAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineMemoryOperation
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.delete_memory
vertexai._genai.agent_engines.AgentEngines.delete_session
delete_session (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineSessionConfig ,
vertexai . _genai . types . common . DeleteAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineSessionOperation
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.delete_session
vertexai._genai.agent_engines.AgentEngines.generate_memories
generate_memories (
* ,
name : str ,
vertex_session_source : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateMemoriesRequestVertexSessionSource ,
vertexai . _genai . types . common . GenerateMemoriesRequestVertexSessionSourceDict ,
]
] = None ,
direct_contents_source : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateMemoriesRequestDirectContentsSource ,
vertexai . _genai . types . common . GenerateMemoriesRequestDirectContentsSourceDict ,
]
] = None ,
direct_memories_source : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateMemoriesRequestDirectMemoriesSource ,
vertexai . _genai . types . common . GenerateMemoriesRequestDirectMemoriesSourceDict ,
]
] = None ,
scope : typing . Optional [ dict [ str , str ]] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateAgentEngineMemoriesConfig ,
vertexai . _genai . types . common . GenerateAgentEngineMemoriesConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineGenerateMemoriesOperation
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.generate_memories
vertexai._genai.agent_engines.AgentEngines.get
get (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineConfig ,
vertexai . _genai . types . common . GetAgentEngineConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngine
Gets an agent engine.
See more: vertexai._genai.agent_engines.AgentEngines.get
vertexai._genai.agent_engines.AgentEngines.get_memory
get_memory (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineMemoryConfig ,
vertexai . _genai . types . common . GetAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Memory
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.get_memory
vertexai._genai.agent_engines.AgentEngines.get_session
get_session (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineSessionConfig ,
vertexai . _genai . types . common . GetAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Session
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.get_session
vertexai._genai.agent_engines.AgentEngines.list
list (
* ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineConfig ,
vertexai . _genai . types . common . ListAgentEngineConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . AgentEngine ]
List all instances of Agent Engine matching the filter.
See more: vertexai._genai.agent_engines.AgentEngines.list
vertexai._genai.agent_engines.AgentEngines.list_memories
list_memories (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineMemoryConfig ,
vertexai . _genai . types . common . ListAgentEngineMemoryConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . Memory ]
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.list_memories
vertexai._genai.agent_engines.AgentEngines.list_session_events
list_session_events (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineSessionEventsConfig ,
vertexai . _genai . types . common . ListAgentEngineSessionEventsConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . SessionEvent ]
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.list_session_events
vertexai._genai.agent_engines.AgentEngines.list_sessions
list_sessions (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineSessionsConfig ,
vertexai . _genai . types . common . ListAgentEngineSessionsConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . Session ]
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.list_sessions
vertexai._genai.agent_engines.AgentEngines.retrieve_memories
retrieve_memories (
* ,
name : str ,
scope : dict [ str , str ],
similarity_search_params : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RetrieveMemoriesRequestSimilaritySearchParams ,
vertexai . _genai . types . common . RetrieveMemoriesRequestSimilaritySearchParamsDict ,
]
] = None ,
simple_retrieval_params : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RetrieveMemoriesRequestSimpleRetrievalParams ,
vertexai . _genai . types . common . RetrieveMemoriesRequestSimpleRetrievalParamsDict ,
]
] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RetrieveAgentEngineMemoriesConfig ,
vertexai . _genai . types . common . RetrieveAgentEngineMemoriesConfigDict ,
]
] = None
) - > typing . Iterator [
vertexai . _genai . types . common . RetrieveMemoriesResponseRetrievedMemory
]
Deprecated.
See more: vertexai._genai.agent_engines.AgentEngines.retrieve_memories
vertexai._genai.agent_engines.AgentEngines.run_query_job
run_query_job (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RunQueryJobAgentEngineConfig ,
vertexai . _genai . types . common . RunQueryJobAgentEngineConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . RunQueryJobResult
Launches a long-running query job on an Agent Engine
.
See more: vertexai._genai.agent_engines.AgentEngines.run_query_job
vertexai._genai.agent_engines.AgentEngines.update
update (
* ,
name : str ,
agent : typing . Optional [ typing . Any ] = None ,
agent_engine : typing . Optional [ typing . Any ] = None ,
config : typing . Union [
vertexai . _genai . types . common . AgentEngineConfig ,
vertexai . _genai . types . common . AgentEngineConfigDict ,
]
) - > vertexai . _genai . types . common . AgentEngine
Updates an existing Agent Engine.
See more: vertexai._genai.agent_engines.AgentEngines.update
vertexai._genai.agent_engines.AsyncAgentEngines.append_session_event
append_session_event (
* ,
name : str ,
author : str ,
invocation_id : str ,
timestamp : datetime . datetime ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfig ,
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AppendAgentEngineSessionEventResponse
Deprecated.
See more: vertexai._genai.agent_engines.AsyncAgentEngines.append_session_event
vertexai._genai.agent_engines.AsyncAgentEngines.delete
delete (
* ,
name : str ,
force : typing . Optional [ bool ] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineConfig ,
vertexai . _genai . types . common . DeleteAgentEngineConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineOperation
Delete an Agent Engine resource.
See more: vertexai._genai.agent_engines.AsyncAgentEngines.delete
vertexai._genai.agent_engines.AsyncAgentEngines.delete_memory
delete_memory (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineMemoryConfig ,
vertexai . _genai . types . common . DeleteAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineMemoryOperation
Deprecated.
See more: vertexai._genai.agent_engines.AsyncAgentEngines.delete_memory
vertexai._genai.agent_engines.AsyncAgentEngines.delete_session
delete_session (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineSessionConfig ,
vertexai . _genai . types . common . DeleteAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineSessionOperation
Deprecated.
See more: vertexai._genai.agent_engines.AsyncAgentEngines.delete_session
vertexai._genai.agent_engines.AsyncAgentEngines.get_memory
get_memory (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineMemoryConfig ,
vertexai . _genai . types . common . GetAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Memory
Deprecated.
See more: vertexai._genai.agent_engines.AsyncAgentEngines.get_memory
vertexai._genai.agent_engines.AsyncAgentEngines.get_session
get_session (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineSessionConfig ,
vertexai . _genai . types . common . GetAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Session
Deprecated.
See more: vertexai._genai.agent_engines.AsyncAgentEngines.get_session
vertexai._genai.evals.AsyncEvals.batch_evaluate
batch_evaluate (
* ,
dataset : typing . Union [
vertexai . _genai . types . common . EvaluationDataset ,
vertexai . _genai . types . common . EvaluationDatasetDict ,
],
metrics : list [
typing . Union [
vertexai . _genai . types . common . Metric , vertexai . _genai . types . common . MetricDict
]
],
dest : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . EvaluateDatasetConfig ,
vertexai . _genai . types . common . EvaluateDatasetConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluateDatasetOperation
Evaluates a dataset based on a set of given metrics.
See more: vertexai._genai.evals.AsyncEvals.batch_evaluate
vertexai._genai.evals.AsyncEvals.create_evaluation_item
create_evaluation_item (
* ,
evaluation_item_type : vertexai . _genai . types . common . EvaluationItemType ,
gcs_uri : str ,
display_name : typing . Optional [ str ] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateEvaluationItemConfig ,
vertexai . _genai . types . common . CreateEvaluationItemConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationItem
Creates an EvaluationItem.
See more: vertexai._genai.evals.AsyncEvals.create_evaluation_item
vertexai._genai.evals.AsyncEvals.create_evaluation_metric
create_evaluation_metric (
* ,
display_name : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
metric : typing . Optional [
typing . Union [
vertexai . _genai . types . common . Metric , vertexai . _genai . types . common . MetricDict
]
] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateEvaluationMetricConfig ,
vertexai . _genai . types . common . CreateEvaluationMetricConfigDict ,
]
] = None
) - > str
Creates an EvaluationMetric.
See more: vertexai._genai.evals.AsyncEvals.create_evaluation_metric
vertexai._genai.evals.AsyncEvals.create_evaluation_run
create_evaluation_run (
* ,
dataset : typing . Union [
vertexai . _genai . types . common . EvaluationRunDataSource ,
vertexai . _genai . types . common . EvaluationDataset ,
],
dest : str ,
metrics : list [
typing . Union [
vertexai . _genai . types . common . EvaluationRunMetric ,
vertexai . _genai . types . common . EvaluationRunMetricDict ,
]
],
name : typing . Optional [ str ] = None ,
display_name : typing . Optional [ str ] = None ,
agent_info : typing . Optional [ vertexai . _genai . types . evals . AgentInfo ] = None ,
agent : typing . Optional [ str ] = None ,
user_simulator_config : typing . Optional [
typing . Union [
vertexai . _genai . types . evals . UserSimulatorConfig ,
vertexai . _genai . types . evals . UserSimulatorConfigDict ,
]
] = None ,
inference_configs : typing . Optional [
dict [
str ,
typing . Union [
vertexai . _genai . types . common . EvaluationRunInferenceConfig ,
vertexai . _genai . types . common . EvaluationRunInferenceConfigDict ,
],
]
] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateEvaluationRunConfig ,
vertexai . _genai . types . common . CreateEvaluationRunConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationRun
Creates an EvaluationRun.
See more: vertexai._genai.evals.AsyncEvals.create_evaluation_run
vertexai._genai.evals.AsyncEvals.create_evaluation_set
create_evaluation_set (
* ,
evaluation_items : list [ str ],
display_name : typing . Optional [ str ] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateEvaluationSetConfig ,
vertexai . _genai . types . common . CreateEvaluationSetConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationSet
Creates an EvaluationSet.
See more: vertexai._genai.evals.AsyncEvals.create_evaluation_set
vertexai._genai.evals.AsyncEvals.evaluate_instances
evaluate_instances (
* , metric_config : vertexai . _genai . types . common . _EvaluateInstancesRequestParameters
) - > vertexai . _genai . types . common . EvaluateInstancesResponse
Evaluates an instance of a model.
See more: vertexai._genai.evals.AsyncEvals.evaluate_instances
vertexai._genai.evals.AsyncEvals.generate_conversation_scenarios
generate_conversation_scenarios (
* ,
agent_info : typing . Union [
vertexai . _genai . types . evals . AgentInfo , vertexai . _genai . types . evals . AgentInfoDict
],
config : typing . Union [
vertexai . _genai . types . evals . UserScenarioGenerationConfig ,
vertexai . _genai . types . evals . UserScenarioGenerationConfigDict ,
]
) - > vertexai . _genai . types . common . EvaluationDataset
Generates an evaluation dataset with user scenarios,
which helps to generate conversations between a simulated user
and the agent under test.
See more: vertexai._genai.evals.AsyncEvals.generate_conversation_scenarios
vertexai._genai.evals.AsyncEvals.get_evaluation_item
get_evaluation_item (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetEvaluationItemConfig ,
vertexai . _genai . types . common . GetEvaluationItemConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationItem
Retrieves an EvaluationItem from the resource name.
See more: vertexai._genai.evals.AsyncEvals.get_evaluation_item
vertexai._genai.evals.AsyncEvals.get_evaluation_metric
get_evaluation_metric (
* ,
metric_resource_name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetEvaluationMetricConfig ,
vertexai . _genai . types . common . GetEvaluationMetricConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationMetric
Retrieves an EvaluationMetric from the resource name.
See more: vertexai._genai.evals.AsyncEvals.get_evaluation_metric
vertexai._genai.evals.AsyncEvals.get_evaluation_run
get_evaluation_run (
* ,
name : str ,
include_evaluation_items : bool = False ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetEvaluationRunConfig ,
vertexai . _genai . types . common . GetEvaluationRunConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationRun
Retrieves the EvaluationRun from the resource name.
See more: vertexai._genai.evals.AsyncEvals.get_evaluation_run
vertexai._genai.evals.AsyncEvals.get_evaluation_set
get_evaluation_set (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetEvaluationSetConfig ,
vertexai . _genai . types . common . GetEvaluationSetConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationSet
Retrieves an EvaluationSet from the resource name.
See more: vertexai._genai.evals.AsyncEvals.get_evaluation_set
vertexai._genai.evals.AsyncEvals.list_evaluation_metrics
list_evaluation_metrics (
* ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListEvaluationMetricsConfig ,
vertexai . _genai . types . common . ListEvaluationMetricsConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . ListEvaluationMetricsResponse
Lists EvaluationMetrics.
See more: vertexai._genai.evals.AsyncEvals.list_evaluation_metrics
vertexai._genai.evals.Evals.batch_evaluate
batch_evaluate (
* ,
dataset : typing . Union [
vertexai . _genai . types . common . EvaluationDataset ,
vertexai . _genai . types . common . EvaluationDatasetDict ,
],
metrics : list [
typing . Union [
vertexai . _genai . types . common . Metric , vertexai . _genai . types . common . MetricDict
]
],
dest : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . EvaluateDatasetConfig ,
vertexai . _genai . types . common . EvaluateDatasetConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluateDatasetOperation
Evaluates a dataset based on a set of given metrics.
See more: vertexai._genai.evals.Evals.batch_evaluate
vertexai._genai.evals.Evals.create_evaluation_item
create_evaluation_item (
* ,
evaluation_item_type : vertexai . _genai . types . common . EvaluationItemType ,
gcs_uri : str ,
display_name : typing . Optional [ str ] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateEvaluationItemConfig ,
vertexai . _genai . types . common . CreateEvaluationItemConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationItem
Creates an EvaluationItem.
See more: vertexai._genai.evals.Evals.create_evaluation_item
vertexai._genai.evals.Evals.create_evaluation_metric
create_evaluation_metric (
* ,
display_name : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
metric : typing . Optional [
typing . Union [
vertexai . _genai . types . common . Metric , vertexai . _genai . types . common . MetricDict
]
] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateEvaluationMetricConfig ,
vertexai . _genai . types . common . CreateEvaluationMetricConfigDict ,
]
] = None
) - > str
Creates an EvaluationMetric.
See more: vertexai._genai.evals.Evals.create_evaluation_metric
vertexai._genai.evals.Evals.create_evaluation_run
create_evaluation_run (
* ,
dataset : typing . Union [
vertexai . _genai . types . common . EvaluationRunDataSource ,
vertexai . _genai . types . common . EvaluationDataset ,
],
dest : str ,
metrics : list [
typing . Union [
vertexai . _genai . types . common . EvaluationRunMetric ,
vertexai . _genai . types . common . EvaluationRunMetricDict ,
]
],
name : typing . Optional [ str ] = None ,
display_name : typing . Optional [ str ] = None ,
agent_info : typing . Optional [
typing . Union [
vertexai . _genai . types . evals . AgentInfo ,
vertexai . _genai . types . evals . AgentInfoDict ,
]
] = None ,
agent : typing . Optional [ str ] = None ,
user_simulator_config : typing . Optional [
typing . Union [
vertexai . _genai . types . evals . UserSimulatorConfig ,
vertexai . _genai . types . evals . UserSimulatorConfigDict ,
]
] = None ,
inference_configs : typing . Optional [
dict [
str ,
typing . Union [
vertexai . _genai . types . common . EvaluationRunInferenceConfig ,
vertexai . _genai . types . common . EvaluationRunInferenceConfigDict ,
],
]
] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateEvaluationRunConfig ,
vertexai . _genai . types . common . CreateEvaluationRunConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationRun
Creates an EvaluationRun.
See more: vertexai._genai.evals.Evals.create_evaluation_run
vertexai._genai.evals.Evals.create_evaluation_set
create_evaluation_set (
* ,
evaluation_items : list [ str ],
display_name : typing . Optional [ str ] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateEvaluationSetConfig ,
vertexai . _genai . types . common . CreateEvaluationSetConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationSet
Creates an EvaluationSet.
See more: vertexai._genai.evals.Evals.create_evaluation_set
vertexai._genai.evals.Evals.evaluate
evaluate (
* ,
dataset : typing . Union [
pandas . core . frame . DataFrame ,
vertexai . _genai . types . common . EvaluationDataset ,
vertexai . _genai . types . common . EvaluationDatasetDict ,
list [
typing . Union [
vertexai . _genai . types . common . EvaluationDataset ,
vertexai . _genai . types . common . EvaluationDatasetDict ,
]
],
],
metrics : typing . Optional [
list [
typing . Union [
vertexai . _genai . types . common . Metric ,
vertexai . _genai . types . common . MetricDict ,
]
]
] = None ,
location : typing . Optional [ str ] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . EvaluateMethodConfig ,
vertexai . _genai . types . common . EvaluateMethodConfigDict ,
]
] = None ,
** kwargs : typing . Any
) - > vertexai . _genai . types . common . EvaluationResult
Evaluates candidate responses in the provided dataset(s) using the specified metrics.
See more: vertexai._genai.evals.Evals.evaluate
vertexai._genai.evals.Evals.evaluate_instances
evaluate_instances (
* , metric_config : vertexai . _genai . types . common . _EvaluateInstancesRequestParameters
) - > vertexai . _genai . types . common . EvaluateInstancesResponse
Evaluates an instance of a model.
See more: vertexai._genai.evals.Evals.evaluate_instances
vertexai._genai.evals.Evals.generate_conversation_scenarios
generate_conversation_scenarios (
* ,
agent_info : typing . Union [
vertexai . _genai . types . evals . AgentInfo , vertexai . _genai . types . evals . AgentInfoDict
],
config : typing . Union [
vertexai . _genai . types . evals . UserScenarioGenerationConfig ,
vertexai . _genai . types . evals . UserScenarioGenerationConfigDict ,
]
) - > vertexai . _genai . types . common . EvaluationDataset
Generates an evaluation dataset with user scenarios,
which helps to generate conversations between a simulated user
and the agent under test.
See more: vertexai._genai.evals.Evals.generate_conversation_scenarios
vertexai._genai.evals.Evals.generate_rubrics
generate_rubrics (
* ,
src : typing . Union [
str , pd . DataFrame , vertexai . _genai . types . common . EvaluationDataset
],
rubric_group_name : str ,
prompt_template : typing . Optional [ str ] = None ,
generator_model_config : typing . Optional [ genai_types . AutoraterConfigOrDict ] = None ,
rubric_content_type : typing . Optional [ types . RubricContentType ] = None ,
rubric_type_ontology : typing . Optional [ list [ str ]] = None ,
predefined_spec_name : typing . Optional [
typing . Union [ str , types . PrebuiltMetric ]
] = None ,
metric_spec_parameters : typing . Optional [ dict [ str , typing . Any ]] = None ,
metric : typing . Optional [
typing . Union [
vertexai . _genai . types . common . Metric , vertexai . _genai . types . common . MetricDict
]
] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RubricGenerationConfig ,
vertexai . _genai . types . common . RubricGenerationConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationDataset
Generates rubrics for each prompt in the source and adds them as a new column
structured as a dictionary.
See more: vertexai._genai.evals.Evals.generate_rubrics
vertexai._genai.evals.Evals.get_evaluation_item
get_evaluation_item (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetEvaluationItemConfig ,
vertexai . _genai . types . common . GetEvaluationItemConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationItem
Retrieves an EvaluationItem from the resource name.
See more: vertexai._genai.evals.Evals.get_evaluation_item
vertexai._genai.evals.Evals.get_evaluation_metric
get_evaluation_metric (
* ,
metric_resource_name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetEvaluationMetricConfig ,
vertexai . _genai . types . common . GetEvaluationMetricConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationMetric
Retrieves an EvaluationMetric from the resource name.
See more: vertexai._genai.evals.Evals.get_evaluation_metric
vertexai._genai.evals.Evals.get_evaluation_run
get_evaluation_run (
* ,
name : str ,
include_evaluation_items : bool = False ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetEvaluationRunConfig ,
vertexai . _genai . types . common . GetEvaluationRunConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationRun
Retrieves an EvaluationRun from the resource name.
See more: vertexai._genai.evals.Evals.get_evaluation_run
vertexai._genai.evals.Evals.get_evaluation_set
get_evaluation_set (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetEvaluationSetConfig ,
vertexai . _genai . types . common . GetEvaluationSetConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationSet
Retrieves an EvaluationSet from the resource name.
See more: vertexai._genai.evals.Evals.get_evaluation_set
vertexai._genai.evals.Evals.list_evaluation_metrics
list_evaluation_metrics (
* ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListEvaluationMetricsConfig ,
vertexai . _genai . types . common . ListEvaluationMetricsConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . ListEvaluationMetricsResponse
Lists EvaluationMetrics.
See more: vertexai._genai.evals.Evals.list_evaluation_metrics
vertexai._genai.evals.Evals.run_inference
run_inference (
* ,
src : typing . Union [
str , pandas . core . frame . DataFrame , vertexai . _genai . types . common . EvaluationDataset
],
model : typing . Optional [
typing . Union [ str , typing . Callable [[ typing . Any ], typing . Any ]]
] = None ,
agent : typing . Optional [
typing . Union [ str , vertexai . _genai . types . common . AgentEngine ]
] = None ,
location : typing . Optional [ str ] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . EvalRunInferenceConfig ,
vertexai . _genai . types . common . EvalRunInferenceConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . EvaluationDataset
Runs inference on a dataset for evaluation.
See more: vertexai._genai.evals.Evals.run_inference
vertexai._genai.memories.AsyncMemories.create
create (
* ,
name : str ,
fact : str ,
scope : dict [ str , str ],
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . AgentEngineMemoryConfig ,
vertexai . _genai . types . common . AgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineMemoryOperation
Creates a new memory in the Agent Engine.
See more: vertexai._genai.memories.AsyncMemories.create
vertexai._genai.memories.AsyncMemories.delete
delete (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineMemoryConfig ,
vertexai . _genai . types . common . DeleteAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineMemoryOperation
Delete an Agent Engine memory.
See more: vertexai._genai.memories.AsyncMemories.delete
vertexai._genai.memories.AsyncMemories.generate
generate (
* ,
name : str ,
vertex_session_source : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateMemoriesRequestVertexSessionSource ,
vertexai . _genai . types . common . GenerateMemoriesRequestVertexSessionSourceDict ,
]
] = None ,
direct_contents_source : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateMemoriesRequestDirectContentsSource ,
vertexai . _genai . types . common . GenerateMemoriesRequestDirectContentsSourceDict ,
]
] = None ,
direct_memories_source : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateMemoriesRequestDirectMemoriesSource ,
vertexai . _genai . types . common . GenerateMemoriesRequestDirectMemoriesSourceDict ,
]
] = None ,
scope : typing . Optional [ dict [ str , str ]] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateAgentEngineMemoriesConfig ,
vertexai . _genai . types . common . GenerateAgentEngineMemoriesConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineGenerateMemoriesOperation
Generates memories for the agent engine.
See more: vertexai._genai.memories.AsyncMemories.generate
vertexai._genai.memories.AsyncMemories.get
get (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineMemoryConfig ,
vertexai . _genai . types . common . GetAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Memory
Gets an agent engine memory.
See more: vertexai._genai.memories.AsyncMemories.get
vertexai._genai.memories.AsyncMemories.list
list (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineMemoryConfig ,
vertexai . _genai . types . common . ListAgentEngineMemoryConfigDict ,
]
] = None
) - > google . genai . pagers . AsyncPager [ vertexai . _genai . types . common . Memory ]
Lists Agent Engine memories.
See more: vertexai._genai.memories.AsyncMemories.list
vertexai._genai.memories.AsyncMemories.purge
purge (
* ,
name : str ,
filter : typing . Optional [ str ] = None ,
filter_groups : typing . Optional [
typing . List [ vertexai . _genai . types . common . MemoryConjunctionFilter ]
] = None ,
force : bool = False ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . PurgeAgentEngineMemoriesConfig ,
vertexai . _genai . types . common . PurgeAgentEngineMemoriesConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEnginePurgeMemoriesOperation
Purges memories from an Agent Engine.
See more: vertexai._genai.memories.AsyncMemories.purge
vertexai._genai.memories.AsyncMemories.retrieve
retrieve (
* ,
name : str ,
scope : dict [ str , str ],
similarity_search_params : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RetrieveMemoriesRequestSimilaritySearchParams ,
vertexai . _genai . types . common . RetrieveMemoriesRequestSimilaritySearchParamsDict ,
]
] = None ,
simple_retrieval_params : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RetrieveMemoriesRequestSimpleRetrievalParams ,
vertexai . _genai . types . common . RetrieveMemoriesRequestSimpleRetrievalParamsDict ,
]
] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RetrieveAgentEngineMemoriesConfig ,
vertexai . _genai . types . common . RetrieveAgentEngineMemoriesConfigDict ,
]
] = None
) - > google . genai . pagers . AsyncPager [
vertexai . _genai . types . common . RetrieveMemoriesResponseRetrievedMemory
]
Retrieves memories for the agent.
See more: vertexai._genai.memories.AsyncMemories.retrieve
vertexai._genai.memories.AsyncMemories.rollback
rollback (
* ,
name : str ,
target_revision_id : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RollbackAgentEngineMemoryConfig ,
vertexai . _genai . types . common . RollbackAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineRollbackMemoryOperation
Rolls back a memory to a previous revision.
See more: vertexai._genai.memories.AsyncMemories.rollback
vertexai._genai.memories.Memories.create
create (
* ,
name : str ,
fact : str ,
scope : dict [ str , str ],
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . AgentEngineMemoryConfig ,
vertexai . _genai . types . common . AgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineMemoryOperation
Creates a new memory in the Agent Engine.
See more: vertexai._genai.memories.Memories.create
vertexai._genai.memories.Memories.delete
delete (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineMemoryConfig ,
vertexai . _genai . types . common . DeleteAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineMemoryOperation
Delete an Agent Engine memory.
See more: vertexai._genai.memories.Memories.delete
vertexai._genai.memories.Memories.generate
generate (
* ,
name : str ,
vertex_session_source : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateMemoriesRequestVertexSessionSource ,
vertexai . _genai . types . common . GenerateMemoriesRequestVertexSessionSourceDict ,
]
] = None ,
direct_contents_source : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateMemoriesRequestDirectContentsSource ,
vertexai . _genai . types . common . GenerateMemoriesRequestDirectContentsSourceDict ,
]
] = None ,
direct_memories_source : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateMemoriesRequestDirectMemoriesSource ,
vertexai . _genai . types . common . GenerateMemoriesRequestDirectMemoriesSourceDict ,
]
] = None ,
scope : typing . Optional [ dict [ str , str ]] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GenerateAgentEngineMemoriesConfig ,
vertexai . _genai . types . common . GenerateAgentEngineMemoriesConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineGenerateMemoriesOperation
Generates memories for the agent engine.
See more: vertexai._genai.memories.Memories.generate
vertexai._genai.memories.Memories.get
get (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineMemoryConfig ,
vertexai . _genai . types . common . GetAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Memory
Gets an agent engine memory.
See more: vertexai._genai.memories.Memories.get
vertexai._genai.memories.Memories.list
list (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineMemoryConfig ,
vertexai . _genai . types . common . ListAgentEngineMemoryConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . Memory ]
Lists Agent Engine memories.
See more: vertexai._genai.memories.Memories.list
vertexai._genai.memories.Memories.purge
purge (
* ,
name : str ,
filter : typing . Optional [ str ] = None ,
filter_groups : typing . Optional [
typing . List [ vertexai . _genai . types . common . MemoryConjunctionFilter ]
] = None ,
force : bool = False ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . PurgeAgentEngineMemoriesConfig ,
vertexai . _genai . types . common . PurgeAgentEngineMemoriesConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEnginePurgeMemoriesOperation
Purges memories from an Agent Engine.
See more: vertexai._genai.memories.Memories.purge
vertexai._genai.memories.Memories.retrieve
retrieve (
* ,
name : str ,
scope : dict [ str , str ],
similarity_search_params : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RetrieveMemoriesRequestSimilaritySearchParams ,
vertexai . _genai . types . common . RetrieveMemoriesRequestSimilaritySearchParamsDict ,
]
] = None ,
simple_retrieval_params : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RetrieveMemoriesRequestSimpleRetrievalParams ,
vertexai . _genai . types . common . RetrieveMemoriesRequestSimpleRetrievalParamsDict ,
]
] = None ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RetrieveAgentEngineMemoriesConfig ,
vertexai . _genai . types . common . RetrieveAgentEngineMemoriesConfigDict ,
]
] = None
) - > typing . Iterator [
vertexai . _genai . types . common . RetrieveMemoriesResponseRetrievedMemory
]
Retrieves memories for the agent.
See more: vertexai._genai.memories.Memories.retrieve
vertexai._genai.memories.Memories.rollback
rollback (
* ,
name : str ,
target_revision_id : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . RollbackAgentEngineMemoryConfig ,
vertexai . _genai . types . common . RollbackAgentEngineMemoryConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineRollbackMemoryOperation
Rolls back a memory to a previous revision.
See more: vertexai._genai.memories.Memories.rollback
vertexai._genai.memory_revisions.AsyncMemoryRevisions.get
get (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineMemoryRevisionConfig ,
vertexai . _genai . types . common . GetAgentEngineMemoryRevisionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . MemoryRevision
Gets an agent engine memory revision.
See more: vertexai._genai.memory_revisions.AsyncMemoryRevisions.get
vertexai._genai.memory_revisions.AsyncMemoryRevisions.list
list (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineMemoryRevisionsConfig ,
vertexai . _genai . types . common . ListAgentEngineMemoryRevisionsConfigDict ,
]
] = None
) - > google . genai . pagers . AsyncPager [ vertexai . _genai . types . common . MemoryRevision ]
Lists Agent Engine memory revisions.
See more: vertexai._genai.memory_revisions.AsyncMemoryRevisions.list
vertexai._genai.memory_revisions.MemoryRevisions.get
get (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineMemoryRevisionConfig ,
vertexai . _genai . types . common . GetAgentEngineMemoryRevisionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . MemoryRevision
Gets an agent engine memory revision.
See more: vertexai._genai.memory_revisions.MemoryRevisions.get
vertexai._genai.memory_revisions.MemoryRevisions.list
list (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineMemoryRevisionsConfig ,
vertexai . _genai . types . common . ListAgentEngineMemoryRevisionsConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . MemoryRevision ]
Lists Agent Engine memory revisions.
See more: vertexai._genai.memory_revisions.MemoryRevisions.list
vertexai._genai.prompt_optimizer.AsyncPromptOptimizer.optimize
optimize (
method : vertexai . _genai . types . common . PromptOptimizerMethod ,
config : typing . Union [
vertexai . _genai . types . common . PromptOptimizerConfig ,
vertexai . _genai . types . common . PromptOptimizerConfigDict ,
],
) - > vertexai . _genai . types . common . CustomJob
Call async Vertex AI Prompt Optimizer (VAPO).
See more: vertexai._genai.prompt_optimizer.AsyncPromptOptimizer.optimize
vertexai._genai.prompt_optimizer.AsyncPromptOptimizer.optimize_prompt
optimize_prompt (
* ,
prompt : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . OptimizeConfig ,
vertexai . _genai . types . common . OptimizeConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . OptimizeResponse
Makes an async request to _optimize_prompt and returns an optimized prompt.
See more: vertexai._genai.prompt_optimizer.AsyncPromptOptimizer.optimize_prompt
vertexai._genai.prompt_optimizer.PromptOptimizer.optimize
optimize (
method : vertexai . _genai . types . common . PromptOptimizerMethod ,
config : typing . Union [
vertexai . _genai . types . common . PromptOptimizerConfig ,
vertexai . _genai . types . common . PromptOptimizerConfigDict ,
],
) - > vertexai . _genai . types . common . CustomJob
Call PO-Data optimizer.
See more: vertexai._genai.prompt_optimizer.PromptOptimizer.optimize
vertexai._genai.prompt_optimizer.PromptOptimizer.optimize_prompt
optimize_prompt (
* ,
prompt : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . OptimizeConfig ,
vertexai . _genai . types . common . OptimizeConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . OptimizeResponse
Makes an API request to _optimize_prompt and returns the parsed response.
See more: vertexai._genai.prompt_optimizer.PromptOptimizer.optimize_prompt
vertexai._genai.prompts.AsyncPrompts.create
create (
* ,
prompt : typing . Union [
vertexai . _genai . types . common . Prompt , vertexai . _genai . types . common . PromptDict
],
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreatePromptConfig ,
vertexai . _genai . types . common . CreatePromptConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Prompt
Creates a new prompt in a Vertex Dataset resource.
See more: vertexai._genai.prompts.AsyncPrompts.create
vertexai._genai.prompts.AsyncPrompts.create_version
create_version (
* ,
prompt_id : str ,
prompt : typing . Union [
vertexai . _genai . types . common . Prompt , vertexai . _genai . types . common . PromptDict
],
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreatePromptVersionConfig ,
vertexai . _genai . types . common . CreatePromptVersionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Prompt
Creates a new version of a prompt in the prompt resource associated with the provided prompt_id.
See more: vertexai._genai.prompts.AsyncPrompts.create_version
vertexai._genai.prompts.AsyncPrompts.delete
delete (
* ,
prompt_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . DeletePromptConfig ] = None
) - > None
Deletes a prompt resource.
See more: vertexai._genai.prompts.AsyncPrompts.delete
vertexai._genai.prompts.AsyncPrompts.delete_version
delete_version (
* ,
prompt_id : str ,
version_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . DeletePromptConfig ] = None
) - > None
Deletes a prompt version resource.
See more: vertexai._genai.prompts.AsyncPrompts.delete_version
vertexai._genai.prompts.AsyncPrompts.get
get (
* ,
prompt_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . GetPromptConfig ] = None
) - > vertexai . _genai . types . common . Prompt
Gets a prompt resource from a Vertex Dataset.
See more: vertexai._genai.prompts.AsyncPrompts.get
vertexai._genai.prompts.AsyncPrompts.get_version
get_version (
* ,
prompt_id : str ,
version_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . GetPromptConfig ] = None
) - > vertexai . _genai . types . common . Prompt
Gets a prompt resource from a Vertex Dataset.
See more: vertexai._genai.prompts.AsyncPrompts.get_version
vertexai._genai.prompts.AsyncPrompts.launch_optimization_job
launch_optimization_job (
method : vertexai . _genai . types . common . PromptOptimizerMethod ,
config : typing . Union [
vertexai . _genai . types . common . PromptOptimizerConfig ,
vertexai . _genai . types . common . PromptOptimizerConfigDict ,
],
) - > vertexai . _genai . types . common . CustomJob
Call async Vertex AI Prompt Optimizer (VAPO).
See more: vertexai._genai.prompts.AsyncPrompts.launch_optimization_job
vertexai._genai.prompts.AsyncPrompts.list
list (
* ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListPromptsConfig ,
vertexai . _genai . types . common . ListPromptsConfigDict ,
]
] = None
) - > typing . AsyncIterator [ vertexai . _genai . types . common . PromptRef ]
Lists prompt resources in a project.
See more: vertexai._genai.prompts.AsyncPrompts.list
vertexai._genai.prompts.AsyncPrompts.list_versions
list_versions (
* ,
prompt_id : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListPromptsConfig ,
vertexai . _genai . types . common . ListPromptsConfigDict ,
]
] = None
) - > typing . AsyncIterator [ vertexai . _genai . types . common . PromptVersionRef ]
Lists prompt version resources for a provided prompt_id.
See more: vertexai._genai.prompts.AsyncPrompts.list_versions
vertexai._genai.prompts.AsyncPrompts.optimize
optimize (
* ,
prompt : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . OptimizeConfig ,
vertexai . _genai . types . common . OptimizeConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . OptimizeResponse
Makes an async request to the optimizePrompt endpoint and returns an optimized prompt.
See more: vertexai._genai.prompts.AsyncPrompts.optimize
vertexai._genai.prompts.AsyncPrompts.restore_version
restore_version (
* ,
prompt_id : str ,
version_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . RestoreVersionConfig ] = None
) - > vertexai . _genai . types . common . Prompt
Restores the provided prompt version to the latest version.
See more: vertexai._genai.prompts.AsyncPrompts.restore_version
vertexai._genai.prompts.Prompts.create
create (
* ,
prompt : typing . Union [
vertexai . _genai . types . common . Prompt , vertexai . _genai . types . common . PromptDict
],
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreatePromptConfig ,
vertexai . _genai . types . common . CreatePromptConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Prompt
Creates a new prompt in a Vertex Dataset resource.
See more: vertexai._genai.prompts.Prompts.create
vertexai._genai.prompts.Prompts.create_version
create_version (
* ,
prompt_id : str ,
prompt : typing . Union [
vertexai . _genai . types . common . Prompt , vertexai . _genai . types . common . PromptDict
],
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreatePromptVersionConfig ,
vertexai . _genai . types . common . CreatePromptVersionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Prompt
Creates a new version of a prompt in the prompt resource associated with the provided prompt_id.
See more: vertexai._genai.prompts.Prompts.create_version
vertexai._genai.prompts.Prompts.delete
delete (
* ,
prompt_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . DeletePromptConfig ] = None
) - > None
Deletes a prompt resource.
See more: vertexai._genai.prompts.Prompts.delete
vertexai._genai.prompts.Prompts.delete_version
delete_version (
* ,
prompt_id : str ,
version_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . DeletePromptConfig ] = None
) - > None
Deletes a prompt version resource.
See more: vertexai._genai.prompts.Prompts.delete_version
vertexai._genai.prompts.Prompts.get
get (
* ,
prompt_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . GetPromptConfig ] = None
) - > vertexai . _genai . types . common . Prompt
Gets a prompt resource from a Vertex Dataset.
See more: vertexai._genai.prompts.Prompts.get
vertexai._genai.prompts.Prompts.get_version
get_version (
* ,
prompt_id : str ,
version_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . GetPromptConfig ] = None
) - > vertexai . _genai . types . common . Prompt
Gets a prompt resource from a Vertex Dataset.
See more: vertexai._genai.prompts.Prompts.get_version
vertexai._genai.prompts.Prompts.launch_optimization_job
launch_optimization_job (
method : vertexai . _genai . types . common . PromptOptimizerMethod ,
config : typing . Union [
vertexai . _genai . types . common . PromptOptimizerConfig ,
vertexai . _genai . types . common . PromptOptimizerConfigDict ,
],
) - > vertexai . _genai . types . common . CustomJob
Call PO-Data optimizer.
See more: vertexai._genai.prompts.Prompts.launch_optimization_job
vertexai._genai.prompts.Prompts.list
list (
* ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListPromptsConfig ,
vertexai . _genai . types . common . ListPromptsConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . PromptRef ]
Lists prompt resources in a project.
See more: vertexai._genai.prompts.Prompts.list
vertexai._genai.prompts.Prompts.list_versions
list_versions (
* ,
prompt_id : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListPromptsConfig ,
vertexai . _genai . types . common . ListPromptsConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . PromptVersionRef ]
Lists prompt version resources for a provided prompt_id.
See more: vertexai._genai.prompts.Prompts.list_versions
vertexai._genai.prompts.Prompts.optimize
optimize (
* ,
prompt : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . OptimizeConfig ,
vertexai . _genai . types . common . OptimizeConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . OptimizeResponse
Makes an API request to optimize a prompt and returns the parsed response.
See more: vertexai._genai.prompts.Prompts.optimize
vertexai._genai.prompts.Prompts.restore_version
restore_version (
* ,
prompt_id : str ,
version_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . RestoreVersionConfig ] = None
) - > vertexai . _genai . types . common . Prompt
Restores the provided prompt version to the latest version.
See more: vertexai._genai.prompts.Prompts.restore_version
vertexai._genai.session_events.AsyncSessionEvents.append
append (
* ,
name : str ,
author : str ,
invocation_id : str ,
timestamp : datetime . datetime ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfig ,
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AppendAgentEngineSessionEventResponse
Appends Agent Engine session event.
See more: vertexai._genai.session_events.AsyncSessionEvents.append
vertexai._genai.session_events.AsyncSessionEvents.list
list (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineSessionEventsConfig ,
vertexai . _genai . types . common . ListAgentEngineSessionEventsConfigDict ,
]
] = None
) - > google . genai . pagers . AsyncPager [ vertexai . _genai . types . common . SessionEvent ]
Lists Agent Engine session events.
See more: vertexai._genai.session_events.AsyncSessionEvents.list
vertexai._genai.session_events.SessionEvents.append
append (
* ,
name : str ,
author : str ,
invocation_id : str ,
timestamp : datetime . datetime ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfig ,
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AppendAgentEngineSessionEventResponse
Appends Agent Engine session event.
See more: vertexai._genai.session_events.SessionEvents.append
vertexai._genai.session_events.SessionEvents.list
list (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineSessionEventsConfig ,
vertexai . _genai . types . common . ListAgentEngineSessionEventsConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . SessionEvent ]
Lists Agent Engine session events.
See more: vertexai._genai.session_events.SessionEvents.list
vertexai._genai.sessions.AsyncSessions.create
create (
* ,
name : str ,
user_id : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateAgentEngineSessionConfig ,
vertexai . _genai . types . common . CreateAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineSessionOperation
Creates a new session in the Agent Engine.
See more: vertexai._genai.sessions.AsyncSessions.create
vertexai._genai.sessions.AsyncSessions.delete
delete (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineSessionConfig ,
vertexai . _genai . types . common . DeleteAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineSessionOperation
Delete an Agent Engine session.
See more: vertexai._genai.sessions.AsyncSessions.delete
vertexai._genai.sessions.AsyncSessions.get
get (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineSessionConfig ,
vertexai . _genai . types . common . GetAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Session
Gets an agent engine session.
See more: vertexai._genai.sessions.AsyncSessions.get
vertexai._genai.sessions.AsyncSessions.list
list (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineSessionsConfig ,
vertexai . _genai . types . common . ListAgentEngineSessionsConfigDict ,
]
] = None
) - > google . genai . pagers . AsyncPager [ vertexai . _genai . types . common . Session ]
Lists Agent Engine sessions.
See more: vertexai._genai.sessions.AsyncSessions.list
vertexai._genai.sessions.Sessions.create
create (
* ,
name : str ,
user_id : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . CreateAgentEngineSessionConfig ,
vertexai . _genai . types . common . CreateAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AgentEngineSessionOperation
Creates a new session in the Agent Engine.
See more: vertexai._genai.sessions.Sessions.create
vertexai._genai.sessions.Sessions.delete
delete (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineSessionConfig ,
vertexai . _genai . types . common . DeleteAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . DeleteAgentEngineSessionOperation
Delete an Agent Engine session.
See more: vertexai._genai.sessions.Sessions.delete
vertexai._genai.sessions.Sessions.get
get (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . GetAgentEngineSessionConfig ,
vertexai . _genai . types . common . GetAgentEngineSessionConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . Session
Gets an agent engine session.
See more: vertexai._genai.sessions.Sessions.get
vertexai._genai.sessions.Sessions.list
list (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineSessionsConfig ,
vertexai . _genai . types . common . ListAgentEngineSessionsConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . Session ]
Lists Agent Engine sessions.
See more: vertexai._genai.sessions.Sessions.list
vertexai._genai.types.A2aTask
A2aTask (
* ,
contextId : typing . Optional [ str ] = None ,
createTime : typing . Optional [ datetime . datetime ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
name : typing . Optional [ str ] = None ,
nextEventSequenceNumber : typing . Optional [ int ] = None ,
output : typing . Optional [ vertexai . _genai . types . common . TaskOutput ] = None ,
state : typing . Optional [ vertexai . _genai . types . common . A2aTaskState ] = None ,
statusDetails : typing . Optional [
vertexai . _genai . types . common . TaskStatusDetails
] = None ,
updateTime : typing . Optional [ datetime . datetime ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.A2aTask
vertexai._genai.types.AgentEngine
AgentEngine (
* ,
apiClient : typing . Optional [ typing . Any ] = None ,
apiAsyncClient : typing . Optional [ typing . Any ] = None ,
apiResource : typing . Optional [ vertexai . _genai . types . common . ReasoningEngine ] = None ,
** extra_data : typing . Any
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEngine
vertexai._genai.types.AgentEngine.delete
delete (
force : bool = False ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . DeleteAgentEngineConfig ,
vertexai . _genai . types . common . DeleteAgentEngineConfigDict ,
]
] = None ,
) - > None
Deletes the agent engine.
See more: vertexai._genai.types.AgentEngine.delete
vertexai._genai.types.AgentEngine.operation_schemas
operation_schemas () - > typing . Optional [ list [ typing . Dict [ str , typing . Any ]]]
Returns the schemas of all registered operations for the agent.
See more: vertexai._genai.types.AgentEngine.operation_schemas
vertexai._genai.types.AgentEngineConfig
AgentEngineConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
stagingBucket : typing . Optional [ str ] = None ,
requirements : typing . Optional [ typing . Any ] = None ,
displayName : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
gcsDirName : typing . Optional [ str ] = None ,
extraPackages : typing . Optional [ list [ str ]] = None ,
envVars : typing . Optional [ typing . Any ] = None ,
serviceAccount : typing . Optional [ str ] = None ,
identityType : typing . Optional [ vertexai . _genai . types . common . IdentityType ] = None ,
contextSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineContextSpec
] = None ,
pscInterfaceConfig : typing . Optional [
vertexai . _genai . types . common . PscInterfaceConfig
] = None ,
minInstances : typing . Optional [ int ] = None ,
maxInstances : typing . Optional [ int ] = None ,
resourceLimits : typing . Optional [ dict [ str , str ]] = None ,
containerConcurrency : typing . Optional [ int ] = None ,
encryptionSpec : typing . Optional [ google . genai . types . EncryptionSpec ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
agentServerMode : typing . Optional [
vertexai . _genai . types . common . AgentServerMode
] = None ,
classMethods : typing . Optional [ list [ dict [ str , typing . Any ]]] = None ,
sourcePackages : typing . Optional [ list [ str ]] = None ,
developerConnectSource : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecDeveloperConnectConfig
] = None ,
entrypointModule : typing . Optional [ str ] = None ,
entrypointObject : typing . Optional [ str ] = None ,
requirementsFile : typing . Optional [ str ] = None ,
agentFramework : typing . Optional [
typing . Literal [
"google-adk" , "langchain" , "langgraph" , "ag2" , "llama-index" , "custom"
]
] = None ,
pythonVersion : typing . Optional [
typing . Literal [ "3.9" , "3.10" , "3.11" , "3.12" , "3.13" , "3.14" ]
] = None ,
buildOptions : typing . Optional [ dict [ str , list [ str ]]] = None ,
imageSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecImageSpec
] = None ,
agentConfigSource : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecAgentConfigSource
] = None ,
containerSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecContainerSpec
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEngineConfig
vertexai._genai.types.AgentEngineGenerateMemoriesOperation
AgentEngineGenerateMemoriesOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None ,
response : typing . Optional [
vertexai . _genai . types . common . GenerateMemoriesResponse
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEngineGenerateMemoriesOperation
vertexai._genai.types.AgentEngineMemoryConfig
AgentEngineMemoryConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
displayName : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
waitForCompletion : typing . Optional [ bool ] = True ,
ttl : typing . Optional [ str ] = None ,
expireTime : typing . Optional [ datetime . datetime ] = None ,
revisionExpireTime : typing . Optional [ datetime . datetime ] = None ,
revisionTtl : typing . Optional [ str ] = None ,
disableMemoryRevisions : typing . Optional [ bool ] = None ,
topics : typing . Optional [ list [ vertexai . _genai . types . common . MemoryTopicId ]] = None ,
metadata : typing . Optional [
dict [ str , vertexai . _genai . types . common . MemoryMetadataValue ]
] = None ,
memoryId : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEngineMemoryConfig
vertexai._genai.types.AgentEngineMemoryOperation
AgentEngineMemoryOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None ,
response : typing . Optional [ vertexai . _genai . types . common . Memory ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEngineMemoryOperation
vertexai._genai.types.AgentEngineOperation
AgentEngineOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None ,
response : typing . Optional [ vertexai . _genai . types . common . ReasoningEngine ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEngineOperation
vertexai._genai.types.AgentEnginePurgeMemoriesOperation
AgentEnginePurgeMemoriesOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None ,
response : typing . Optional [ vertexai . _genai . types . common . PurgeMemoriesResponse ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEnginePurgeMemoriesOperation
vertexai._genai.types.AgentEngineRollbackMemoryOperation
AgentEngineRollbackMemoryOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEngineRollbackMemoryOperation
vertexai._genai.types.AgentEngineSandboxOperation
AgentEngineSandboxOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None ,
response : typing . Optional [ vertexai . _genai . types . common . SandboxEnvironment ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEngineSandboxOperation
vertexai._genai.types.AgentEngineSessionOperation
AgentEngineSessionOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None ,
response : typing . Optional [ vertexai . _genai . types . common . Session ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentEngineSessionOperation
vertexai._genai.types.AgentRunConfig
AgentRunConfig (
* ,
sessionInput : typing . Optional [ vertexai . _genai . types . evals . SessionInput ] = None ,
agentEngine : typing . Optional [ str ] = None ,
userSimulatorConfig : typing . Optional [
vertexai . _genai . types . evals . UserSimulatorConfig
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AgentRunConfig
vertexai._genai.types.AggregatedMetricResult
AggregatedMetricResult (
* ,
metricName : typing . Optional [ str ] = None ,
numCasesTotal : typing . Optional [ int ] = None ,
numCasesValid : typing . Optional [ int ] = None ,
numCasesError : typing . Optional [ int ] = None ,
meanScore : typing . Optional [ float ] = None ,
stdevScore : typing . Optional [ float ] = None ,
passRate : typing . Optional [ float ] = None ,
** extra_data : typing . Any
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AggregatedMetricResult
vertexai._genai.types.AppendAgentEngineSessionEventConfig
AppendAgentEngineSessionEventConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
content : typing . Optional [ google . genai . types . Content ] = None ,
actions : typing . Optional [ vertexai . _genai . types . common . EventActions ] = None ,
errorCode : typing . Optional [ str ] = None ,
errorMessage : typing . Optional [ str ] = None ,
eventMetadata : typing . Optional [ vertexai . _genai . types . common . EventMetadata ] = None ,
rawEvent : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AppendAgentEngineSessionEventConfig
vertexai._genai.types.AppendAgentEngineSessionEventResponse
AppendAgentEngineSessionEventResponse ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AppendAgentEngineSessionEventResponse
vertexai._genai.types.AppendAgentEngineTaskEventConfig
AppendAgentEngineTaskEventConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AppendAgentEngineTaskEventConfig
vertexai._genai.types.AppendAgentEngineTaskEventResponse
AppendAgentEngineTaskEventResponse ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AppendAgentEngineTaskEventResponse
vertexai._genai.types.AssembleDataset
AssembleDataset ( * , bigqueryDestination : typing . Optional [ str ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AssembleDataset
vertexai._genai.types.AssembleDatasetConfig
AssembleDatasetConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
timeout : typing . Optional [ int ] = 90
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AssembleDatasetConfig
vertexai._genai.types.AssessDatasetConfig
AssessDatasetConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
timeout : typing . Optional [ int ] = 90
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.AssessDatasetConfig
vertexai._genai.types.BatchPredictionResourceUsageAssessmentConfig
BatchPredictionResourceUsageAssessmentConfig (
* , modelName : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.BatchPredictionResourceUsageAssessmentConfig
vertexai._genai.types.BatchPredictionResourceUsageAssessmentResult
BatchPredictionResourceUsageAssessmentResult (
* ,
tokenCount : typing . Optional [ int ] = None ,
audioTokenCount : typing . Optional [ int ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.BatchPredictionResourceUsageAssessmentResult
vertexai._genai.types.BatchPredictionValidationAssessmentConfig
BatchPredictionValidationAssessmentConfig (
* , modelName : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.BatchPredictionValidationAssessmentConfig
vertexai._genai.types.BatchPredictionValidationAssessmentResult
BatchPredictionValidationAssessmentResult (
* , errors : typing . Optional [ list [ str ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.BatchPredictionValidationAssessmentResult
vertexai._genai.types.BigQueryRequestSet
BigQueryRequestSet (
* ,
uri : typing . Optional [ str ] = None ,
promptColumn : typing . Optional [ str ] = None ,
rubricsColumn : typing . Optional [ str ] = None ,
candidateResponseColumns : typing . Optional [ dict [ str , str ]] = None ,
samplingConfig : typing . Optional [ vertexai . _genai . types . common . SamplingConfig ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.BigQueryRequestSet
vertexai._genai.types.BleuInstance
BleuInstance (
* , prediction : typing . Optional [ str ] = None , reference : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.BleuInstance
vertexai._genai.types.BleuResults
BleuResults (
* ,
bleuMetricValues : typing . Optional [ list [ google . genai . types . BleuMetricValue ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.BleuResults
vertexai._genai.types.CandidateResponse
CandidateResponse (
* ,
candidate : typing . Optional [ str ] = None ,
text : typing . Optional [ str ] = None ,
value : typing . Optional [ dict [ str , typing . Any ]] = None ,
events : typing . Optional [ list [ google . genai . types . Content ]] = None ,
agentData : typing . Optional [ vertexai . _genai . types . evals . AgentData ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CandidateResponse
vertexai._genai.types.CandidateResult
CandidateResult (
* ,
candidate : typing . Optional [ str ] = None ,
metric : typing . Optional [ str ] = None ,
score : typing . Optional [ float ] = None ,
explanation : typing . Optional [ str ] = None ,
rubricVerdicts : typing . Optional [
list [ vertexai . _genai . types . evals . RubricVerdict ]
] = None ,
additionalResults : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CandidateResult
vertexai._genai.types.CheckQueryJobAgentEngineConfig
CheckQueryJobAgentEngineConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
retrieveResult : typing . Optional [ bool ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CheckQueryJobAgentEngineConfig
vertexai._genai.types.CheckQueryJobResponse
CheckQueryJobResponse (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
outputGcsUri : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CheckQueryJobResponse
vertexai._genai.types.CheckQueryJobResult
CheckQueryJobResult (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
operationName : typing . Optional [ str ] = None ,
outputGcsUri : typing . Optional [ str ] = None ,
status : typing . Optional [ str ] = None ,
result : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CheckQueryJobResult
vertexai._genai.types.Chunk
Chunk (
* ,
data : typing . Optional [ bytes ] = None ,
metadata : typing . Optional [ vertexai . _genai . types . common . Metadata ] = None ,
mimeType : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Chunk
vertexai._genai.types.CodeExecutionMetric
CodeExecutionMetric (
* ,
name : typing . Optional [ str ] = None ,
customFunction : typing . Optional [ str ] = None ,
promptTemplate : typing . Optional [ str ] = None ,
judgeModelSystemInstruction : typing . Optional [ str ] = None ,
returnRawOutput : typing . Optional [ bool ] = None ,
parseAndReduceFn : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None ,
aggregateSummaryFn : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None ,
remoteCustomFunction : typing . Optional [ str ] = None ,
judgeModel : typing . Optional [ str ] = None ,
judgeModelGenerationConfig : typing . Optional [
google . genai . types . GenerationConfig
] = None ,
judgeModelSamplingCount : typing . Optional [ int ] = None ,
rubricGroupName : typing . Optional [ str ] = None ,
metricSpecParameters : typing . Optional [ dict [ str , typing . Any ]] = None ,
metricResourceName : typing . Optional [ str ] = None ,
** extra_data : typing . Any
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CodeExecutionMetric
vertexai._genai.types.CodeExecutionMetric.model_post_init
model_post_init ( context : Any , / ) - > None
This function is meant to behave like a BaseModel method to initialise private attributes.
See more: vertexai._genai.types.CodeExecutionMetric.model_post_init
vertexai._genai.types.CodeExecutionMetric.validate_code
validate_code ( value : typing . Optional [ str ]) - > typing . Optional [ str ]
API documentation for validate_code method.
See more: vertexai._genai.types.CodeExecutionMetric.validate_code
vertexai._genai.types.CometResult
CometResult ( * , score : typing . Optional [ float ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CometResult
vertexai._genai.types.ContainerSpec
ContainerSpec (
* ,
args : typing . Optional [ list [ str ]] = None ,
command : typing . Optional [ list [ str ]] = None ,
env : typing . Optional [ list [ vertexai . _genai . types . common . EnvVar ]] = None ,
imageUri : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ContainerSpec
vertexai._genai.types.ContentMap
ContentMap ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ContentMap
vertexai._genai.types.ContentMapContents
ContentMapContents (
* , contents : typing . Optional [ list [ google . genai . types . Content ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ContentMapContents
vertexai._genai.types.CreateAgentEngineConfig
CreateAgentEngineConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
displayName : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
spec : typing . Optional [ vertexai . _genai . types . common . ReasoningEngineSpec ] = None ,
contextSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineContextSpec
] = None ,
pscInterfaceConfig : typing . Optional [
vertexai . _genai . types . common . PscInterfaceConfig
] = None ,
minInstances : typing . Optional [ int ] = None ,
maxInstances : typing . Optional [ int ] = None ,
resourceLimits : typing . Optional [ dict [ str , str ]] = None ,
containerConcurrency : typing . Optional [ int ] = None ,
encryptionSpec : typing . Optional [ google . genai . types . EncryptionSpec ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
classMethods : typing . Optional [ list [ dict [ str , typing . Any ]]] = None ,
sourcePackages : typing . Optional [ list [ str ]] = None ,
developerConnectSource : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecDeveloperConnectConfig
] = None ,
entrypointModule : typing . Optional [ str ] = None ,
entrypointObject : typing . Optional [ str ] = None ,
requirementsFile : typing . Optional [ str ] = None ,
agentFramework : typing . Optional [
typing . Literal [
"google-adk" , "langchain" , "langgraph" , "ag2" , "llama-index" , "custom"
]
] = None ,
pythonVersion : typing . Optional [
typing . Literal [ "3.9" , "3.10" , "3.11" , "3.12" , "3.13" , "3.14" ]
] = None ,
buildOptions : typing . Optional [ dict [ str , list [ str ]]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateAgentEngineConfig
vertexai._genai.types.CreateAgentEngineSandboxConfig
CreateAgentEngineSandboxConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
displayName : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
waitForCompletion : typing . Optional [ bool ] = True ,
ttl : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateAgentEngineSandboxConfig
vertexai._genai.types.CreateAgentEngineSessionConfig
CreateAgentEngineSessionConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
displayName : typing . Optional [ str ] = None ,
sessionState : typing . Optional [ dict [ str , typing . Any ]] = None ,
waitForCompletion : typing . Optional [ bool ] = True ,
ttl : typing . Optional [ str ] = None ,
expireTime : typing . Optional [ datetime . datetime ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateAgentEngineSessionConfig
vertexai._genai.types.CreateAgentEngineTaskConfig
CreateAgentEngineTaskConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
contextId : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
statusDetails : typing . Optional [
vertexai . _genai . types . common . TaskStatusDetails
] = None ,
output : typing . Optional [ vertexai . _genai . types . common . TaskOutput ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateAgentEngineTaskConfig
vertexai._genai.types.CreateDatasetConfig
CreateDatasetConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateDatasetConfig
vertexai._genai.types.CreateDatasetVersionConfig
CreateDatasetVersionConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateDatasetVersionConfig
vertexai._genai.types.CreateEvaluationItemConfig
CreateEvaluationItemConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateEvaluationItemConfig
vertexai._genai.types.CreateEvaluationMetricConfig
CreateEvaluationMetricConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateEvaluationMetricConfig
vertexai._genai.types.CreateEvaluationRunConfig
CreateEvaluationRunConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateEvaluationRunConfig
vertexai._genai.types.CreateEvaluationSetConfig
CreateEvaluationSetConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateEvaluationSetConfig
vertexai._genai.types.CreateMultimodalDatasetConfig
CreateMultimodalDatasetConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
timeout : typing . Optional [ int ] = 90
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreateMultimodalDatasetConfig
vertexai._genai.types.CreatePromptConfig
CreatePromptConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
promptDisplayName : typing . Optional [ str ] = None ,
timeout : typing . Optional [ int ] = 90 ,
encryptionSpec : typing . Optional [ google . genai . types . EncryptionSpec ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreatePromptConfig
vertexai._genai.types.CreatePromptVersionConfig
CreatePromptVersionConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
versionDisplayName : typing . Optional [ str ] = None ,
timeout : typing . Optional [ int ] = 90
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CreatePromptVersionConfig
vertexai._genai.types.CustomCodeExecutionSpec
CustomCodeExecutionSpec (
* ,
evaluationFunction : typing . Optional [ str ] = None ,
remoteCustomFunction : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CustomCodeExecutionSpec
vertexai._genai.types.CustomJob
CustomJob (
* ,
displayName : typing . Optional [ str ] = None ,
jobSpec : typing . Optional [ vertexai . _genai . types . common . CustomJobSpec ] = None ,
encryptionSpec : typing . Optional [ google . genai . types . EncryptionSpec ] = None ,
state : typing . Optional [ google . genai . types . JobState ] = None ,
error : typing . Optional [ google . genai . types . GoogleRpcStatus ] = None ,
createTime : typing . Optional [ datetime . datetime ] = None ,
endTime : typing . Optional [ datetime . datetime ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
name : typing . Optional [ str ] = None ,
satisfiesPzi : typing . Optional [ bool ] = None ,
satisfiesPzs : typing . Optional [ bool ] = None ,
startTime : typing . Optional [ datetime . datetime ] = None ,
updateTime : typing . Optional [ datetime . datetime ] = None ,
webAccessUris : typing . Optional [ dict [ str , str ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CustomJob
vertexai._genai.types.CustomJobSpec
CustomJobSpec (
* ,
baseOutputDirectory : typing . Optional [ google . genai . types . GcsDestination ] = None ,
enableDashboardAccess : typing . Optional [ bool ] = None ,
enableWebAccess : typing . Optional [ bool ] = None ,
experiment : typing . Optional [ str ] = None ,
experimentRun : typing . Optional [ str ] = None ,
models : typing . Optional [ list [ str ]] = None ,
network : typing . Optional [ str ] = None ,
persistentResourceId : typing . Optional [ str ] = None ,
protectedArtifactLocationId : typing . Optional [ str ] = None ,
pscInterfaceConfig : typing . Optional [
vertexai . _genai . types . common . PscInterfaceConfig
] = None ,
reservedIpRanges : typing . Optional [ list [ str ]] = None ,
scheduling : typing . Optional [ vertexai . _genai . types . common . Scheduling ] = None ,
serviceAccount : typing . Optional [ str ] = None ,
tensorboard : typing . Optional [ str ] = None ,
workerPoolSpecs : typing . Optional [
list [ vertexai . _genai . types . common . WorkerPoolSpec ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.CustomJobSpec
vertexai._genai.types.Dataset
Dataset ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Dataset
vertexai._genai.types.DatasetOperation
DatasetOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None ,
response : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DatasetOperation
vertexai._genai.types.DatasetVersion
DatasetVersion ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DatasetVersion
vertexai._genai.types.DeleteAgentEngineConfig
DeleteAgentEngineConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeleteAgentEngineConfig
vertexai._genai.types.DeleteAgentEngineMemoryConfig
DeleteAgentEngineMemoryConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeleteAgentEngineMemoryConfig
vertexai._genai.types.DeleteAgentEngineMemoryOperation
DeleteAgentEngineMemoryOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeleteAgentEngineMemoryOperation
vertexai._genai.types.DeleteAgentEngineOperation
DeleteAgentEngineOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeleteAgentEngineOperation
vertexai._genai.types.DeleteAgentEngineSandboxConfig
DeleteAgentEngineSandboxConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeleteAgentEngineSandboxConfig
vertexai._genai.types.DeleteAgentEngineSandboxOperation
DeleteAgentEngineSandboxOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeleteAgentEngineSandboxOperation
vertexai._genai.types.DeleteAgentEngineSessionConfig
DeleteAgentEngineSessionConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeleteAgentEngineSessionConfig
vertexai._genai.types.DeleteAgentEngineSessionOperation
DeleteAgentEngineSessionOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeleteAgentEngineSessionOperation
vertexai._genai.types.DeletePromptConfig
DeletePromptConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
timeout : typing . Optional [ int ] = 90
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeletePromptConfig
vertexai._genai.types.DeletePromptOperation
DeletePromptOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeletePromptOperation
vertexai._genai.types.DeletePromptVersionOperation
DeletePromptVersionOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DeletePromptVersionOperation
vertexai._genai.types.DiskSpec
DiskSpec (
* ,
bootDiskSizeGb : typing . Optional [ int ] = None ,
bootDiskType : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DiskSpec
vertexai._genai.types.DnsPeeringConfig
DnsPeeringConfig (
* ,
domain : typing . Optional [ str ] = None ,
targetNetwork : typing . Optional [ str ] = None ,
targetProject : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.DnsPeeringConfig
vertexai._genai.types.EnvVar
EnvVar ( * , name : typing . Optional [ str ] = None , value : typing . Optional [ str ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EnvVar
vertexai._genai.types.EvalCase
EvalCase ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvalCase
vertexai._genai.types.EvalCaseMetricResult
EvalCaseMetricResult (
* ,
metricName : typing . Optional [ str ] = None ,
score : typing . Optional [ float ] = None ,
explanation : typing . Optional [ str ] = None ,
rubricVerdicts : typing . Optional [
list [ vertexai . _genai . types . evals . RubricVerdict ]
] = None ,
rawOutput : typing . Optional [ list [ str ]] = None ,
errorMessage : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvalCaseMetricResult
vertexai._genai.types.EvalCaseResult
EvalCaseResult (
* ,
evalCaseIndex : typing . Optional [ int ] = None ,
responseCandidateResults : typing . Optional [
list [ vertexai . _genai . types . common . ResponseCandidateResult ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvalCaseResult
vertexai._genai.types.EvalRunInferenceConfig
EvalRunInferenceConfig (
* ,
dest : typing . Optional [ str ] = None ,
promptTemplate : typing . Optional [
typing . Union [ str , vertexai . _genai . types . common . PromptTemplate ]
] = None ,
generateContentConfig : typing . Optional [
google . genai . types . GenerateContentConfig
] = None ,
userSimulatorConfig : typing . Optional [
vertexai . _genai . types . evals . UserSimulatorConfig
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvalRunInferenceConfig
vertexai._genai.types.EvaluateDatasetConfig
EvaluateDatasetConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluateDatasetConfig
vertexai._genai.types.EvaluateDatasetRequestParameters
EvaluateDatasetRequestParameters ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluateDatasetRequestParameters
vertexai._genai.types.EvaluateInstancesConfig
EvaluateInstancesConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluateInstancesConfig
vertexai._genai.types.EvaluateInstancesResponse
EvaluateInstancesResponse (
* ,
rubricBasedMetricResult : typing . Optional [
vertexai . _genai . types . common . RubricBasedMetricResult
] = None ,
metricResults : typing . Optional [
list [ vertexai . _genai . types . common . MetricResult ]
] = None ,
bleuResults : typing . Optional [ vertexai . _genai . types . common . BleuResults ] = None ,
cometResult : typing . Optional [ vertexai . _genai . types . common . CometResult ] = None ,
exactMatchResults : typing . Optional [
vertexai . _genai . types . common . ExactMatchResults
] = None ,
metricxResult : typing . Optional [ vertexai . _genai . types . common . MetricxResult ] = None ,
pairwiseMetricResult : typing . Optional [
google . genai . types . PairwiseMetricResult
] = None ,
pointwiseMetricResult : typing . Optional [
google . genai . types . PointwiseMetricResult
] = None ,
rougeResults : typing . Optional [ vertexai . _genai . types . common . RougeResults ] = None ,
toolCallValidResults : typing . Optional [
vertexai . _genai . types . common . ToolCallValidResults
] = None ,
toolNameMatchResults : typing . Optional [
vertexai . _genai . types . common . ToolNameMatchResults
] = None ,
toolParameterKeyMatchResults : typing . Optional [
vertexai . _genai . types . common . ToolParameterKeyMatchResults
] = None ,
toolParameterKvMatchResults : typing . Optional [
vertexai . _genai . types . common . ToolParameterKVMatchResults
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluateInstancesResponse
vertexai._genai.types.EvaluateMethodConfig
EvaluateMethodConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
datasetSchema : typing . Optional [
typing . Literal [ "GEMINI" , "FLATTEN" , "OPENAI" ]
] = None ,
dest : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluateMethodConfig
vertexai._genai.types.EvaluationDataset
EvaluationDataset ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationDataset
vertexai._genai.types.EvaluationDataset.load_from_observability_eval_cases
load_from_observability_eval_cases (
cases : list [ "ObservabilityEvalCase" ],
) - > vertexai . _genai . types . common . EvaluationDataset
Fetches GenAI Observability data from GCS and parses into a DataFrame.
See more: vertexai._genai.types.EvaluationDataset.load_from_observability_eval_cases
vertexai._genai.types.EvaluationDataset.show
show () - > None
Shows the evaluation dataset.
See more: vertexai._genai.types.EvaluationDataset.show
vertexai._genai.types.EvaluationInstance
EvaluationInstance ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationInstance
vertexai._genai.types.EvaluationItem
EvaluationItem ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationItem
vertexai._genai.types.EvaluationItemRequest
EvaluationItemRequest ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationItemRequest
vertexai._genai.types.EvaluationItemResult
EvaluationItemResult ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationItemResult
vertexai._genai.types.EvaluationMetric
EvaluationMetric (
* ,
name : typing . Optional [ str ] = None ,
displayName : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
metric : typing . Optional [ vertexai . _genai . types . common . UnifiedMetric ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationMetric
vertexai._genai.types.EvaluationPrompt
EvaluationPrompt (
* ,
text : typing . Optional [ str ] = None ,
value : typing . Optional [ dict [ str , typing . Any ]] = None ,
promptTemplateData : typing . Optional [
vertexai . _genai . types . common . PromptTemplateData
] = None ,
userScenario : typing . Optional [ vertexai . _genai . types . evals . UserScenario ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationPrompt
vertexai._genai.types.EvaluationResult
EvaluationResult ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationResult
vertexai._genai.types.EvaluationResult.show
show ( candidate_names : typing . Optional [ typing . List [ str ]] = None ) - > None
Shows the evaluation result.
See more: vertexai._genai.types.EvaluationResult.show
vertexai._genai.types.EvaluationRun
EvaluationRun ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationRun
vertexai._genai.types.EvaluationRun.show
show () - > None
Shows the evaluation result.
See more: vertexai._genai.types.EvaluationRun.show
vertexai._genai.types.EvaluationRunAgentConfig
EvaluationRunAgentConfig (
* ,
developerInstruction : typing . Optional [ google . genai . types . Content ] = None ,
tools : typing . Optional [ list [ google . genai . types . Tool ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationRunAgentConfig
vertexai._genai.types.EvaluationRunConfig
EvaluationRunConfig (
* ,
metrics : typing . Optional [
list [ vertexai . _genai . types . common . EvaluationRunMetric ]
] = None ,
outputConfig : typing . Optional [ google . genai . types . OutputConfig ] = None ,
autoraterConfig : typing . Optional [ google . genai . types . AutoraterConfig ] = None ,
promptTemplate : typing . Optional [
vertexai . _genai . types . common . EvaluationRunPromptTemplate
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationRunConfig
vertexai._genai.types.EvaluationRunDataSource
EvaluationRunDataSource (
* ,
evaluationSet : typing . Optional [ str ] = None ,
bigqueryRequestSet : typing . Optional [
vertexai . _genai . types . common . BigQueryRequestSet
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationRunDataSource
vertexai._genai.types.EvaluationRunInferenceConfig
EvaluationRunInferenceConfig (
* ,
agentConfig : typing . Optional [
vertexai . _genai . types . common . EvaluationRunAgentConfig
] = None ,
model : typing . Optional [ str ] = None ,
promptTemplate : typing . Optional [
vertexai . _genai . types . common . EvaluationRunPromptTemplate
] = None ,
agentRunConfig : typing . Optional [ vertexai . _genai . types . common . AgentRunConfig ] = None ,
agentConfigs : typing . Optional [
dict [ str , vertexai . _genai . types . evals . AgentConfig ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationRunInferenceConfig
vertexai._genai.types.EvaluationRunMetadata
EvaluationRunMetadata (
* ,
candidateNames : typing . Optional [ list [ str ]] = None ,
datasetName : typing . Optional [ str ] = None ,
datasetId : typing . Optional [ str ] = None ,
creationTimestamp : typing . Optional [ datetime . datetime ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationRunMetadata
vertexai._genai.types.EvaluationRunMetric
EvaluationRunMetric (
* ,
metric : typing . Optional [ str ] = None ,
metricConfig : typing . Optional [ vertexai . _genai . types . common . UnifiedMetric ] = None ,
metricResourceName : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationRunMetric
vertexai._genai.types.EvaluationRunPromptTemplate
EvaluationRunPromptTemplate (
* , promptTemplate : typing . Optional [ str ] = None , gcsUri : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationRunPromptTemplate
vertexai._genai.types.EvaluationRunResults
EvaluationRunResults (
* ,
evaluationSet : typing . Optional [ str ] = None ,
summaryMetrics : typing . Optional [ vertexai . _genai . types . common . SummaryMetric ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationRunResults
vertexai._genai.types.EvaluationSet
EvaluationSet (
* ,
name : typing . Optional [ str ] = None ,
displayName : typing . Optional [ str ] = None ,
evaluationItems : typing . Optional [ list [ str ]] = None ,
createTime : typing . Optional [ datetime . datetime ] = None ,
updateTime : typing . Optional [ datetime . datetime ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EvaluationSet
vertexai._genai.types.Event
Event (
* ,
eventId : typing . Optional [ str ] = None ,
content : typing . Optional [ google . genai . types . Content ] = None ,
creationTimestamp : typing . Optional [ datetime . datetime ] = None ,
author : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Event
vertexai._genai.types.EventActions
EventActions (
* ,
artifactDelta : typing . Optional [ dict [ str , int ]] = None ,
escalate : typing . Optional [ bool ] = None ,
requestedAuthConfigs : typing . Optional [ dict [ str , typing . Any ]] = None ,
skipSummarization : typing . Optional [ bool ] = None ,
stateDelta : typing . Optional [ dict [ str , typing . Any ]] = None ,
transferAgent : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EventActions
vertexai._genai.types.EventMetadata
EventMetadata (
* ,
groundingMetadata : typing . Optional [ google . genai . types . GroundingMetadata ] = None ,
branch : typing . Optional [ str ] = None ,
customMetadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
interrupted : typing . Optional [ bool ] = None ,
longRunningToolIds : typing . Optional [ list [ str ]] = None ,
partial : typing . Optional [ bool ] = None ,
turnComplete : typing . Optional [ bool ] = None ,
inputTranscription : typing . Optional [ google . genai . types . Transcription ] = None ,
outputTranscription : typing . Optional [ google . genai . types . Transcription ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.EventMetadata
vertexai._genai.types.ExactMatchInstance
ExactMatchInstance (
* , prediction : typing . Optional [ str ] = None , reference : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ExactMatchInstance
vertexai._genai.types.ExactMatchResults
ExactMatchResults (
* ,
exactMatchMetricValues : typing . Optional [
list [ google . genai . types . ExactMatchMetricValue ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ExactMatchResults
vertexai._genai.types.ExactMatchSpec
ExactMatchSpec ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ExactMatchSpec
vertexai._genai.types.ExecuteCodeAgentEngineSandboxConfig
ExecuteCodeAgentEngineSandboxConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ExecuteCodeAgentEngineSandboxConfig
vertexai._genai.types.ExecuteSandboxEnvironmentResponse
ExecuteSandboxEnvironmentResponse (
* , outputs : typing . Optional [ list [ vertexai . _genai . types . common . Chunk ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ExecuteSandboxEnvironmentResponse
vertexai._genai.types.GeminiExample
GeminiExample (
* ,
model : typing . Optional [ str ] = None ,
contents : typing . Optional [ list [ google . genai . types . Content ]] = None ,
systemInstruction : typing . Optional [ google . genai . types . Content ] = None ,
cachedContent : typing . Optional [ str ] = None ,
tools : typing . Optional [ google . genai . types . Tool ] = None ,
toolConfig : typing . Optional [ google . genai . types . ToolConfig ] = None ,
safetySettings : typing . Optional [ google . genai . types . SafetySetting ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
generationConfig : typing . Optional [ google . genai . types . GenerationConfig ] = None ,
modelArmorConfig : typing . Optional [ google . genai . types . ModelArmorConfig ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GeminiExample
vertexai._genai.types.GeminiRequestReadConfig
GeminiRequestReadConfig (
* ,
templateConfig : typing . Optional [
vertexai . _genai . types . common . GeminiTemplateConfig
] = None ,
assembledRequestColumnName : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GeminiRequestReadConfig
vertexai._genai.types.GeminiTemplateConfig
GeminiTemplateConfig (
* ,
geminiExample : typing . Optional [ vertexai . _genai . types . common . GeminiExample ] = None ,
fieldMapping : typing . Optional [ dict [ str , str ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GeminiTemplateConfig
vertexai._genai.types.GenerateAgentEngineMemoriesConfig
GenerateAgentEngineMemoriesConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
disableConsolidation : typing . Optional [ bool ] = None ,
waitForCompletion : typing . Optional [ bool ] = True ,
revisionLabels : typing . Optional [ dict [ str , str ]] = None ,
revisionExpireTime : typing . Optional [ datetime . datetime ] = None ,
revisionTtl : typing . Optional [ str ] = None ,
disableMemoryRevisions : typing . Optional [ bool ] = None ,
metadata : typing . Optional [
dict [ str , vertexai . _genai . types . common . MemoryMetadataValue ]
] = None ,
metadataMergeStrategy : typing . Optional [
vertexai . _genai . types . common . MemoryMetadataMergeStrategy
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GenerateAgentEngineMemoriesConfig
vertexai._genai.types.GenerateInstanceRubricsResponse
GenerateInstanceRubricsResponse (
* ,
generatedRubrics : typing . Optional [ list [ vertexai . _genai . types . evals . Rubric ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GenerateInstanceRubricsResponse
vertexai._genai.types.GenerateMemoriesRequestDirectContentsSource
GenerateMemoriesRequestDirectContentsSource (
* ,
events : typing . Optional [
list [
vertexai . _genai . types . common . GenerateMemoriesRequestDirectContentsSourceEvent
]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GenerateMemoriesRequestDirectContentsSource
vertexai._genai.types.GenerateMemoriesRequestDirectMemoriesSource
GenerateMemoriesRequestDirectMemoriesSource (
* ,
directMemories : typing . Optional [
list [
vertexai . _genai . types . common . GenerateMemoriesRequestDirectMemoriesSourceDirectMemory
]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GenerateMemoriesRequestDirectMemoriesSource
vertexai._genai.types.GenerateMemoriesRequestDirectMemoriesSourceDirectMemory
GenerateMemoriesRequestDirectMemoriesSourceDirectMemory (
* ,
fact : typing . Optional [ str ] = None ,
topics : typing . Optional [ list [ vertexai . _genai . types . common . MemoryTopicId ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GenerateMemoriesRequestDirectMemoriesSourceDirectMemory
vertexai._genai.types.GenerateMemoriesRequestVertexSessionSource
GenerateMemoriesRequestVertexSessionSource (
* ,
endTime : typing . Optional [ datetime . datetime ] = None ,
session : typing . Optional [ str ] = None ,
startTime : typing . Optional [ datetime . datetime ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GenerateMemoriesRequestVertexSessionSource
vertexai._genai.types.GenerateMemoriesResponse
GenerateMemoriesResponse (
* ,
generatedMemories : typing . Optional [
list [ vertexai . _genai . types . common . GenerateMemoriesResponseGeneratedMemory ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GenerateMemoriesResponse
vertexai._genai.types.GenerateMemoriesResponseGeneratedMemory
GenerateMemoriesResponseGeneratedMemory (
* ,
memory : typing . Optional [ vertexai . _genai . types . common . Memory ] = None ,
action : typing . Optional [
vertexai . _genai . types . common . GenerateMemoriesResponseGeneratedMemoryAction
] = None ,
previousRevision : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GenerateMemoriesResponseGeneratedMemory
vertexai._genai.types.GenerateUserScenariosResponse
GenerateUserScenariosResponse (
* ,
userScenarios : typing . Optional [
list [ vertexai . _genai . types . evals . UserScenario ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GenerateUserScenariosResponse
vertexai._genai.types.GetAgentEngineConfig
GetAgentEngineConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetAgentEngineConfig
vertexai._genai.types.GetAgentEngineMemoryConfig
GetAgentEngineMemoryConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetAgentEngineMemoryConfig
vertexai._genai.types.GetAgentEngineMemoryRevisionConfig
GetAgentEngineMemoryRevisionConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetAgentEngineMemoryRevisionConfig
vertexai._genai.types.GetAgentEngineSandboxConfig
GetAgentEngineSandboxConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetAgentEngineSandboxConfig
vertexai._genai.types.GetAgentEngineSessionConfig
GetAgentEngineSessionConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetAgentEngineSessionConfig
vertexai._genai.types.GetAgentEngineTaskConfig
GetAgentEngineTaskConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetAgentEngineTaskConfig
vertexai._genai.types.GetDatasetOperationConfig
GetDatasetOperationConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetDatasetOperationConfig
vertexai._genai.types.GetEvaluationItemConfig
GetEvaluationItemConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetEvaluationItemConfig
vertexai._genai.types.GetEvaluationMetricConfig
GetEvaluationMetricConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetEvaluationMetricConfig
vertexai._genai.types.GetEvaluationRunConfig
GetEvaluationRunConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetEvaluationRunConfig
vertexai._genai.types.GetEvaluationSetConfig
GetEvaluationSetConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetEvaluationSetConfig
vertexai._genai.types.GetMultimodalDatasetOperationConfig
GetMultimodalDatasetOperationConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetMultimodalDatasetOperationConfig
vertexai._genai.types.GetPromptConfig
GetPromptConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.GetPromptConfig
vertexai._genai.types.IntermediateExtractedMemory
IntermediateExtractedMemory ( * , fact : typing . Optional [ str ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.IntermediateExtractedMemory
vertexai._genai.types.LLMMetric
LLMMetric (
* ,
name : typing . Optional [ str ] = None ,
customFunction : typing . Optional [
typing . Union [ str , typing . Callable [[ ... ], typing . Any ]]
] = None ,
promptTemplate : typing . Optional [ str ] = None ,
judgeModelSystemInstruction : typing . Optional [ str ] = None ,
returnRawOutput : typing . Optional [ bool ] = None ,
parseAndReduceFn : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None ,
aggregateSummaryFn : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None ,
remoteCustomFunction : typing . Optional [ str ] = None ,
judgeModel : typing . Optional [ str ] = None ,
judgeModelGenerationConfig : typing . Optional [
google . genai . types . GenerationConfig
] = None ,
judgeModelSamplingCount : typing . Optional [ int ] = None ,
rubricGroupName : typing . Optional [ str ] = None ,
metricSpecParameters : typing . Optional [ dict [ str , typing . Any ]] = None ,
metricResourceName : typing . Optional [ str ] = None ,
** extra_data : typing . Any
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.LLMMetric
vertexai._genai.types.LLMMetric.load
load (
config_path : str , client : typing . Optional [ typing . Any ] = None
) - > vertexai . _genai . types . common . LLMMetric
Loads a metric configuration from a YAML or JSON file.
See more: vertexai._genai.types.LLMMetric.load
vertexai._genai.types.LLMMetric.model_post_init
model_post_init ( context : Any , / ) - > None
This function is meant to behave like a BaseModel method to initialise private attributes.
See more: vertexai._genai.types.LLMMetric.model_post_init
vertexai._genai.types.LLMMetric.validate_judge_model_sampling_count
validate_judge_model_sampling_count (
value : typing . Optional [ int ],
) - > typing . Optional [ int ]
Validates judge_model_sampling_count to be between 1 and 32.
See more: vertexai._genai.types.LLMMetric.validate_judge_model_sampling_count
vertexai._genai.types.LLMMetric.validate_prompt_template
validate_prompt_template (
value : typing . Union [ str , vertexai . _genai . types . common . MetricPromptBuilder ],
) - > str
Validates prompt template to be a non-empty string.
See more: vertexai._genai.types.LLMMetric.validate_prompt_template
vertexai._genai.types.ListAgentEngineConfig
ListAgentEngineConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineConfig
vertexai._genai.types.ListAgentEngineMemoryConfig
ListAgentEngineMemoryConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None ,
orderBy : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineMemoryConfig
vertexai._genai.types.ListAgentEngineMemoryRevisionsConfig
ListAgentEngineMemoryRevisionsConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineMemoryRevisionsConfig
vertexai._genai.types.ListAgentEngineMemoryRevisionsResponse
ListAgentEngineMemoryRevisionsResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
memoryRevisions : typing . Optional [
list [ vertexai . _genai . types . common . MemoryRevision ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineMemoryRevisionsResponse
vertexai._genai.types.ListAgentEngineSandboxesConfig
ListAgentEngineSandboxesConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineSandboxesConfig
vertexai._genai.types.ListAgentEngineSandboxesResponse
ListAgentEngineSandboxesResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
sandboxEnvironments : typing . Optional [
list [ vertexai . _genai . types . common . SandboxEnvironment ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineSandboxesResponse
vertexai._genai.types.ListAgentEngineSessionEventsConfig
ListAgentEngineSessionEventsConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineSessionEventsConfig
vertexai._genai.types.ListAgentEngineSessionEventsResponse
ListAgentEngineSessionEventsResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
sessionEvents : typing . Optional [
list [ vertexai . _genai . types . common . SessionEvent ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineSessionEventsResponse
vertexai._genai.types.ListAgentEngineSessionsConfig
ListAgentEngineSessionsConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineSessionsConfig
vertexai._genai.types.ListAgentEngineTaskEventsConfig
ListAgentEngineTaskEventsConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None ,
orderBy : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineTaskEventsConfig
vertexai._genai.types.ListAgentEngineTaskEventsResponse
ListAgentEngineTaskEventsResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
taskEvents : typing . Optional [ list [ vertexai . _genai . types . common . TaskEvent ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineTaskEventsResponse
vertexai._genai.types.ListAgentEngineTasksConfig
ListAgentEngineTasksConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None ,
orderBy : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineTasksConfig
vertexai._genai.types.ListAgentEngineTasksResponse
ListAgentEngineTasksResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
a2Atasks : typing . Optional [ list [ vertexai . _genai . types . common . A2aTask ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListAgentEngineTasksResponse
vertexai._genai.types.ListDatasetVersionsResponse
ListDatasetVersionsResponse ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListDatasetVersionsResponse
vertexai._genai.types.ListDatasetsResponse
ListDatasetsResponse ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListDatasetsResponse
vertexai._genai.types.ListEvaluationMetricsConfig
ListEvaluationMetricsConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListEvaluationMetricsConfig
vertexai._genai.types.ListEvaluationMetricsResponse
ListEvaluationMetricsResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
evaluationMetrics : typing . Optional [
list [ vertexai . _genai . types . common . EvaluationMetric ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListEvaluationMetricsResponse
vertexai._genai.types.ListMultimodalDatasetsConfig
ListMultimodalDatasetsConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListMultimodalDatasetsConfig
vertexai._genai.types.ListMultimodalDatasetsResponse
ListMultimodalDatasetsResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
timeout : typing . Optional [ int ] = 90 ,
datasets : typing . Optional [
list [ vertexai . _genai . types . common . MultimodalDataset ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListMultimodalDatasetsResponse
vertexai._genai.types.ListPromptsConfig
ListPromptsConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
pageSize : typing . Optional [ int ] = None ,
pageToken : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListPromptsConfig
vertexai._genai.types.ListReasoningEnginesMemoriesResponse
ListReasoningEnginesMemoriesResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
memories : typing . Optional [ list [ vertexai . _genai . types . common . Memory ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListReasoningEnginesMemoriesResponse
vertexai._genai.types.ListReasoningEnginesResponse
ListReasoningEnginesResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
reasoningEngines : typing . Optional [
list [ vertexai . _genai . types . common . ReasoningEngine ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListReasoningEnginesResponse
vertexai._genai.types.ListReasoningEnginesSessionsResponse
ListReasoningEnginesSessionsResponse (
* ,
sdkHttpResponse : typing . Optional [ google . genai . types . HttpResponse ] = None ,
nextPageToken : typing . Optional [ str ] = None ,
sessions : typing . Optional [ list [ vertexai . _genai . types . common . Session ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ListReasoningEnginesSessionsResponse
vertexai._genai.types.LustreMount
LustreMount (
* ,
filesystem : typing . Optional [ str ] = None ,
instanceIp : typing . Optional [ str ] = None ,
mountPoint : typing . Optional [ str ] = None ,
volumeHandle : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.LustreMount
vertexai._genai.types.MachineSpec
MachineSpec (
* ,
acceleratorCount : typing . Optional [ int ] = None ,
acceleratorType : typing . Optional [
vertexai . _genai . types . common . AcceleratorType
] = None ,
gpuPartitionSize : typing . Optional [ str ] = None ,
machineType : typing . Optional [ str ] = None ,
minGpuDriverVersion : typing . Optional [ str ] = None ,
multihostGpuNodeCount : typing . Optional [ int ] = None ,
reservationAffinity : typing . Optional [
vertexai . _genai . types . common . ReservationAffinity
] = None ,
tpuTopology : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MachineSpec
vertexai._genai.types.MapInstance
MapInstance (
* ,
mapInstance : typing . Optional [
dict [ str , vertexai . _genai . types . evals . InstanceData ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MapInstance
vertexai._genai.types.Memory
Memory (
* ,
createTime : typing . Optional [ datetime . datetime ] = None ,
description : typing . Optional [ str ] = None ,
disableMemoryRevisions : typing . Optional [ bool ] = None ,
displayName : typing . Optional [ str ] = None ,
expireTime : typing . Optional [ datetime . datetime ] = None ,
fact : typing . Optional [ str ] = None ,
metadata : typing . Optional [
dict [ str , vertexai . _genai . types . common . MemoryMetadataValue ]
] = None ,
name : typing . Optional [ str ] = None ,
revisionExpireTime : typing . Optional [ datetime . datetime ] = None ,
revisionLabels : typing . Optional [ dict [ str , str ]] = None ,
revisionTtl : typing . Optional [ str ] = None ,
scope : typing . Optional [ dict [ str , str ]] = None ,
topics : typing . Optional [ list [ vertexai . _genai . types . common . MemoryTopicId ]] = None ,
ttl : typing . Optional [ str ] = None ,
updateTime : typing . Optional [ datetime . datetime ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Memory
vertexai._genai.types.MemoryBankCustomizationConfig
MemoryBankCustomizationConfig (
* ,
enableThirdPersonMemories : typing . Optional [ bool ] = None ,
generateMemoriesExamples : typing . Optional [
list [
vertexai . _genai . types . common . MemoryBankCustomizationConfigGenerateMemoriesExample
]
] = None ,
memoryTopics : typing . Optional [
list [ vertexai . _genai . types . common . MemoryBankCustomizationConfigMemoryTopic ]
] = None ,
scopeKeys : typing . Optional [ list [ str ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryBankCustomizationConfig
vertexai._genai.types.MemoryBankCustomizationConfigGenerateMemoriesExample
MemoryBankCustomizationConfigGenerateMemoriesExample (
* ,
conversationSource : typing . Optional [
vertexai . _genai . types . common . MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSource
] = None ,
generatedMemories : typing . Optional [
list [
vertexai . _genai . types . common . MemoryBankCustomizationConfigGenerateMemoriesExampleGeneratedMemory
]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryBankCustomizationConfigGenerateMemoriesExample
vertexai._genai.types.MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSource
MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSource (
* ,
events : typing . Optional [
list [
vertexai . _genai . types . common . MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSourceEvent
]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSource
vertexai._genai.types.MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSourceEvent
MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSourceEvent (
* , content : typing . Optional [ google . genai . types . Content ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryBankCustomizationConfigGenerateMemoriesExampleConversationSourceEvent
vertexai._genai.types.MemoryBankCustomizationConfigGenerateMemoriesExampleGeneratedMemory
MemoryBankCustomizationConfigGenerateMemoriesExampleGeneratedMemory (
* ,
fact : typing . Optional [ str ] = None ,
topics : typing . Optional [ list [ vertexai . _genai . types . common . MemoryTopicId ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryBankCustomizationConfigGenerateMemoriesExampleGeneratedMemory
vertexai._genai.types.MemoryBankCustomizationConfigMemoryTopic
MemoryBankCustomizationConfigMemoryTopic (
* ,
customMemoryTopic : typing . Optional [
vertexai . _genai . types . common . MemoryBankCustomizationConfigMemoryTopicCustomMemoryTopic
] = None ,
managedMemoryTopic : typing . Optional [
vertexai . _genai . types . common . MemoryBankCustomizationConfigMemoryTopicManagedMemoryTopic
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryBankCustomizationConfigMemoryTopic
vertexai._genai.types.MemoryBankCustomizationConfigMemoryTopicCustomMemoryTopic
MemoryBankCustomizationConfigMemoryTopicCustomMemoryTopic (
* , label : typing . Optional [ str ] = None , description : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryBankCustomizationConfigMemoryTopicCustomMemoryTopic
vertexai._genai.types.MemoryBankCustomizationConfigMemoryTopicManagedMemoryTopic
MemoryBankCustomizationConfigMemoryTopicManagedMemoryTopic (
* ,
managedTopicEnum : typing . Optional [
vertexai . _genai . types . common . ManagedTopicEnum
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryBankCustomizationConfigMemoryTopicManagedMemoryTopic
vertexai._genai.types.MemoryConjunctionFilter
MemoryConjunctionFilter (
* , filters : typing . Optional [ list [ vertexai . _genai . types . common . MemoryFilter ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryConjunctionFilter
vertexai._genai.types.MemoryFilter
MemoryFilter (
* ,
key : typing . Optional [ str ] = None ,
negate : typing . Optional [ bool ] = None ,
op : typing . Optional [ vertexai . _genai . types . common . Operator ] = None ,
value : typing . Optional [ vertexai . _genai . types . common . MemoryMetadataValue ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryFilter
vertexai._genai.types.MemoryMetadataValue
MemoryMetadataValue (
* ,
boolValue : typing . Optional [ bool ] = None ,
doubleValue : typing . Optional [ float ] = None ,
stringValue : typing . Optional [ str ] = None ,
timestampValue : typing . Optional [ datetime . datetime ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryMetadataValue
vertexai._genai.types.MemoryRevision
MemoryRevision (
* ,
createTime : typing . Optional [ datetime . datetime ] = None ,
expireTime : typing . Optional [ datetime . datetime ] = None ,
extractedMemories : typing . Optional [
list [ vertexai . _genai . types . common . IntermediateExtractedMemory ]
] = None ,
fact : typing . Optional [ str ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
name : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryRevision
vertexai._genai.types.MemoryTopicId
MemoryTopicId (
* ,
customMemoryTopicLabel : typing . Optional [ str ] = None ,
managedMemoryTopic : typing . Optional [
vertexai . _genai . types . common . ManagedTopicEnum
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MemoryTopicId
vertexai._genai.types.Message
Message (
* ,
turnId : typing . Optional [ str ] = None ,
content : typing . Optional [ google . genai . types . Content ] = None ,
creationTimestamp : typing . Optional [ datetime . datetime ] = None ,
author : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Message
vertexai._genai.types.Metadata
Metadata ( * , attributes : typing . Optional [ dict [ str , bytes ]] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Metadata
vertexai._genai.types.Metric
Metric (
* ,
name : typing . Optional [ str ] = None ,
customFunction : typing . Optional [
typing . Union [ str , typing . Callable [[ ... ], typing . Any ]]
] = None ,
promptTemplate : typing . Optional [ str ] = None ,
judgeModelSystemInstruction : typing . Optional [ str ] = None ,
returnRawOutput : typing . Optional [ bool ] = None ,
parseAndReduceFn : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None ,
aggregateSummaryFn : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None ,
remoteCustomFunction : typing . Optional [ str ] = None ,
judgeModel : typing . Optional [ str ] = None ,
judgeModelGenerationConfig : typing . Optional [
google . genai . types . GenerationConfig
] = None ,
judgeModelSamplingCount : typing . Optional [ int ] = None ,
rubricGroupName : typing . Optional [ str ] = None ,
metricSpecParameters : typing . Optional [ dict [ str , typing . Any ]] = None ,
metricResourceName : typing . Optional [ str ] = None ,
** extra_data : typing . Any
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Metric
vertexai._genai.types.Metric.model_post_init
model_post_init ( context : Any , / ) - > None
This function is meant to behave like a BaseModel method to initialise private attributes.
See more: vertexai._genai.types.Metric.model_post_init
vertexai._genai.types.Metric.to_yaml_file
to_yaml_file ( file_path : str , version : typing . Optional [ str ] = None ) - > None
Dumps the metric object to a YAML file.
See more: vertexai._genai.types.Metric.to_yaml_file
vertexai._genai.types.Metric.validate_name
validate_name (
model : vertexai . _genai . types . common . Metric ,
) - > vertexai . _genai . types . common . Metric
API documentation for validate_name method.
See more: vertexai._genai.types.Metric.validate_name
vertexai._genai.types.MetricPromptBuilder
MetricPromptBuilder ( * , text : typing . Optional [ str ] = None , criteria : typing . Optional [ dict [ str , str ]] = None , ratingScores : typing . Optional [ dict [ str , str ]] = None , instruction : typing . Optional [ str ] =
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MetricPromptBuilder
vertexai._genai.types.MetricPromptBuilder.__str__
__str__ () - > str
Returns the fully constructed prompt template text.
See more: vertexai. genai.types.MetricPromptBuilder. _str
vertexai._genai.types.MetricResult
MetricResult (
* ,
score : typing . Optional [ float ] = None ,
rubricVerdicts : typing . Optional [
list [ vertexai . _genai . types . evals . RubricVerdict ]
] = None ,
explanation : typing . Optional [ str ] = None ,
error : typing . Optional [ google . genai . types . GoogleRpcStatus ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MetricResult
vertexai._genai.types.MetricSource
MetricSource (
* ,
metric : typing . Optional [ vertexai . _genai . types . common . Metric ] = None ,
metricResourceName : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MetricSource
vertexai._genai.types.MetricxResult
MetricxResult ( * , score : typing . Optional [ float ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MetricxResult
vertexai._genai.types.MultimodalDataset
MultimodalDataset (
* ,
name : typing . Optional [ str ] = None ,
displayName : typing . Optional [ str ] = None ,
metadata : typing . Optional [
vertexai . _genai . types . common . SchemaTablesDatasetMetadata
] = None ,
description : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MultimodalDataset
vertexai._genai.types.MultimodalDataset.set_bigquery_uri
set_bigquery_uri ( bigquery_uri : str ) - > None
Sets the bigquery uri in the dataset metadata.
See more: vertexai._genai.types.MultimodalDataset.set_bigquery_uri
vertexai._genai.types.MultimodalDataset.set_read_config
set_read_config (
* ,
read_config : typing . Union [
vertexai . _genai . types . common . GeminiRequestReadConfig ,
vertexai . _genai . types . common . GeminiRequestReadConfigDict ,
]
) - > None
Sets the read config in the dataset metadata.
See more: vertexai._genai.types.MultimodalDataset.set_read_config
vertexai._genai.types.MultimodalDatasetOperation
MultimodalDatasetOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None ,
response : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.MultimodalDatasetOperation
vertexai._genai.types.NfsMount
NfsMount (
* ,
mountPoint : typing . Optional [ str ] = None ,
path : typing . Optional [ str ] = None ,
server : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.NfsMount
vertexai._genai.types.ObservabilityEvalCase
ObservabilityEvalCase (
* ,
inputSrc : typing . Optional [ str ] = None ,
outputSrc : typing . Optional [ str ] = None ,
systemInstructionSrc : typing . Optional [ str ] = None ,
apiClient : typing . Optional [ typing . Any ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ObservabilityEvalCase
vertexai._genai.types.OptimizeConfig
OptimizeConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
optimizationTarget : typing . Optional [
vertexai . _genai . types . common . OptimizeTarget
] = None ,
examplesDataframe : typing . Optional [ pandas . core . frame . DataFrame ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.OptimizeConfig
vertexai._genai.types.OptimizeJobConfig
OptimizeJobConfig (
* ,
configPath : typing . Optional [ str ] = None ,
serviceAccount : typing . Optional [ str ] = None ,
serviceAccountProjectNumber : typing . Optional [ typing . Union [ int , str ]] = None ,
waitForCompletion : typing . Optional [ bool ] = True ,
optimizerJobDisplayName : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.OptimizeJobConfig
vertexai._genai.types.OptimizeResponse
OptimizeResponse ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.OptimizeResponse
vertexai._genai.types.OptimizeResponseEndpoint
OptimizeResponseEndpoint (
* , content : typing . Optional [ google . genai . types . Content ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.OptimizeResponseEndpoint
vertexai._genai.types.PairwiseMetricInput
PairwiseMetricInput (
* ,
instance : typing . Optional [
vertexai . _genai . types . common . PairwiseMetricInstance
] = None ,
metricSpec : typing . Optional [ google . genai . types . PairwiseMetricSpec ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PairwiseMetricInput
vertexai._genai.types.PairwiseMetricInstance
PairwiseMetricInstance ( * , jsonInstance : typing . Optional [ str ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PairwiseMetricInstance
vertexai._genai.types.PointwiseMetricInput
PointwiseMetricInput ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PointwiseMetricInput
vertexai._genai.types.PointwiseMetricInstance
PointwiseMetricInstance ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PointwiseMetricInstance
vertexai._genai.types.Prompt
Prompt ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Prompt
vertexai._genai.types.Prompt.assemble_contents
assemble_contents () - > list [ google . genai . types . Content ]
Transforms a Prompt object into a list with a single genai_types.Content object.
See more: vertexai._genai.types.Prompt.assemble_contents
vertexai._genai.types.Prompt.model_post_init
model_post_init ( context : Any , / ) - > None
This function is meant to behave like a BaseModel method to initialise private attributes.
See more: vertexai._genai.types.Prompt.model_post_init
vertexai._genai.types.PromptOptimizerConfig
PromptOptimizerConfig (
* ,
configPath : typing . Optional [ str ] = None ,
serviceAccount : typing . Optional [ str ] = None ,
serviceAccountProjectNumber : typing . Optional [ typing . Union [ int , str ]] = None ,
waitForCompletion : typing . Optional [ bool ] = True ,
optimizerJobDisplayName : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PromptOptimizerConfig
vertexai._genai.types.PromptRef
PromptRef (
* , promptId : typing . Optional [ str ] = None , model : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PromptRef
vertexai._genai.types.PromptTemplate
PromptTemplate ( * , text : typing . Optional [ str ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PromptTemplate
vertexai._genai.types.PromptTemplate.assemble
assemble ( ** kwargs : typing . Any ) - > str
Assembles the prompt template with the given keyword arguments.
See more: vertexai._genai.types.PromptTemplate.assemble
vertexai._genai.types.PromptTemplate.text_must_not_be_empty
text_must_not_be_empty ( value : str ) - > str
API documentation for text_must_not_be_empty method.
See more: vertexai._genai.types.PromptTemplate.text_must_not_be_empty
vertexai._genai.types.PromptTemplateData
PromptTemplateData (
* , values : typing . Optional [ dict [ str , google . genai . types . Content ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PromptTemplateData
vertexai._genai.types.PromptVersionRef
PromptVersionRef (
* ,
promptId : typing . Optional [ str ] = None ,
versionId : typing . Optional [ str ] = None ,
model : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PromptVersionRef
vertexai._genai.types.PscInterfaceConfig
PscInterfaceConfig (
* ,
dnsPeeringConfigs : typing . Optional [
list [ vertexai . _genai . types . common . DnsPeeringConfig ]
] = None ,
networkAttachment : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PscInterfaceConfig
vertexai._genai.types.PurgeAgentEngineMemoriesConfig
PurgeAgentEngineMemoriesConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
waitForCompletion : typing . Optional [ bool ] = True
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PurgeAgentEngineMemoriesConfig
vertexai._genai.types.PurgeMemoriesResponse
PurgeMemoriesResponse ( * , purgeCount : typing . Optional [ int ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PurgeMemoriesResponse
vertexai._genai.types.PythonPackageSpec
PythonPackageSpec (
* ,
args : typing . Optional [ list [ str ]] = None ,
env : typing . Optional [ list [ vertexai . _genai . types . common . EnvVar ]] = None ,
executorImageUri : typing . Optional [ str ] = None ,
packageUris : typing . Optional [ list [ str ]] = None ,
pythonModule : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.PythonPackageSpec
vertexai._genai.types.QueryAgentEngineConfig
QueryAgentEngineConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
classMethod : typing . Optional [ str ] = None ,
input : typing . Optional [ dict [ str , typing . Any ]] = None ,
includeAllFields : typing . Optional [ bool ] = False
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.QueryAgentEngineConfig
vertexai._genai.types.QueryReasoningEngineResponse
QueryReasoningEngineResponse ( * , output : typing . Optional [ typing . Any ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.QueryReasoningEngineResponse
vertexai._genai.types.ReasoningEngine
ReasoningEngine (
* ,
encryptionSpec : typing . Optional [ google . genai . types . EncryptionSpec ] = None ,
contextSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineContextSpec
] = None ,
createTime : typing . Optional [ datetime . datetime ] = None ,
description : typing . Optional [ str ] = None ,
displayName : typing . Optional [ str ] = None ,
etag : typing . Optional [ str ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
name : typing . Optional [ str ] = None ,
spec : typing . Optional [ vertexai . _genai . types . common . ReasoningEngineSpec ] = None ,
updateTime : typing . Optional [ datetime . datetime ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngine
vertexai._genai.types.ReasoningEngineContextSpec
ReasoningEngineContextSpec (
* ,
memoryBankConfig : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineContextSpecMemoryBankConfig
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineContextSpec
vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfig
ReasoningEngineContextSpecMemoryBankConfig (
* ,
customizationConfigs : typing . Optional [
list [ vertexai . _genai . types . common . MemoryBankCustomizationConfig ]
] = None ,
disableMemoryRevisions : typing . Optional [ bool ] = None ,
generationConfig : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineContextSpecMemoryBankConfigGenerationConfig
] = None ,
similaritySearchConfig : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig
] = None ,
ttlConfig : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineContextSpecMemoryBankConfigTtlConfig
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfig
vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfigGenerationConfig
ReasoningEngineContextSpecMemoryBankConfigGenerationConfig (
* , model : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfigGenerationConfig
vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig
ReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig (
* , embeddingModel : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig
vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfigTtlConfig
ReasoningEngineContextSpecMemoryBankConfigTtlConfig (
* ,
defaultTtl : typing . Optional [ str ] = None ,
granularTtlConfig : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig
] = None ,
memoryRevisionDefaultTtl : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfigTtlConfig
vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig
ReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig (
* ,
createTtl : typing . Optional [ str ] = None ,
generateCreatedTtl : typing . Optional [ str ] = None ,
generateUpdatedTtl : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig
vertexai._genai.types.ReasoningEngineSpec
ReasoningEngineSpec (
* ,
agentCard : typing . Optional [ dict [ str , typing . Any ]] = None ,
agentFramework : typing . Optional [ str ] = None ,
classMethods : typing . Optional [ list [ dict [ str , typing . Any ]]] = None ,
deploymentSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecDeploymentSpec
] = None ,
effectiveIdentity : typing . Optional [ str ] = None ,
identityType : typing . Optional [ vertexai . _genai . types . common . IdentityType ] = None ,
packageSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecPackageSpec
] = None ,
serviceAccount : typing . Optional [ str ] = None ,
sourceCodeSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpec
] = None ,
containerSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecContainerSpec
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpec
vertexai._genai.types.ReasoningEngineSpecContainerSpec
ReasoningEngineSpecContainerSpec ( * , imageUri : typing . Optional [ str ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecContainerSpec
vertexai._genai.types.ReasoningEngineSpecDeploymentSpec
ReasoningEngineSpecDeploymentSpec (
* ,
agentServerMode : typing . Optional [
vertexai . _genai . types . common . AgentServerMode
] = None ,
containerConcurrency : typing . Optional [ int ] = None ,
env : typing . Optional [ list [ vertexai . _genai . types . common . EnvVar ]] = None ,
maxInstances : typing . Optional [ int ] = None ,
minInstances : typing . Optional [ int ] = None ,
pscInterfaceConfig : typing . Optional [
vertexai . _genai . types . common . PscInterfaceConfig
] = None ,
resourceLimits : typing . Optional [ dict [ str , str ]] = None ,
secretEnv : typing . Optional [ list [ vertexai . _genai . types . common . SecretEnvVar ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecDeploymentSpec
vertexai._genai.types.ReasoningEngineSpecPackageSpec
ReasoningEngineSpecPackageSpec (
* ,
dependencyFilesGcsUri : typing . Optional [ str ] = None ,
pickleObjectGcsUri : typing . Optional [ str ] = None ,
pythonVersion : typing . Optional [ str ] = None ,
requirementsGcsUri : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecPackageSpec
vertexai._genai.types.ReasoningEngineSpecSourceCodeSpec
ReasoningEngineSpecSourceCodeSpec (
* ,
agentConfigSource : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecAgentConfigSource
] = None ,
developerConnectSource : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
] = None ,
imageSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecImageSpec
] = None ,
inlineSource : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecInlineSource
] = None ,
pythonSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecPythonSpec
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecSourceCodeSpec
vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecAgentConfigSource
ReasoningEngineSpecSourceCodeSpecAgentConfigSource (
* ,
adkConfig : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig
] = None ,
inlineSource : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecInlineSource
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecAgentConfigSource
vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig
ReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig (
* , jsonConfig : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecAgentConfigSourceAdkConfig
vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecDeveloperConnectConfig
ReasoningEngineSpecSourceCodeSpecDeveloperConnectConfig (
* ,
gitRepositoryLink : typing . Optional [ str ] = None ,
dir : typing . Optional [ str ] = None ,
revision : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecDeveloperConnectConfig
vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
ReasoningEngineSpecSourceCodeSpecDeveloperConnectSource (
* ,
config : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecDeveloperConnectConfig
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecImageSpec
ReasoningEngineSpecSourceCodeSpecImageSpec (
* , buildArgs : typing . Optional [ dict [ str , str ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecImageSpec
vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecInlineSource
ReasoningEngineSpecSourceCodeSpecInlineSource (
* , sourceArchive : typing . Optional [ bytes ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecInlineSource
vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecPythonSpec
ReasoningEngineSpecSourceCodeSpecPythonSpec (
* ,
entrypointModule : typing . Optional [ str ] = None ,
entrypointObject : typing . Optional [ str ] = None ,
requirementsFile : typing . Optional [ str ] = None ,
version : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReasoningEngineSpecSourceCodeSpecPythonSpec
vertexai._genai.types.ReservationAffinity
ReservationAffinity (
* ,
key : typing . Optional [ str ] = None ,
reservationAffinityType : typing . Optional [ vertexai . _genai . types . common . Type ] = None ,
values : typing . Optional [ list [ str ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ReservationAffinity
vertexai._genai.types.ResponseCandidate
ResponseCandidate ( * , response : typing . Optional [ google . genai . types . Content ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ResponseCandidate
vertexai._genai.types.ResponseCandidateResult
ResponseCandidateResult (
* ,
responseIndex : typing . Optional [ int ] = None ,
metricResults : typing . Optional [
dict [ str , vertexai . _genai . types . common . EvalCaseMetricResult ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ResponseCandidateResult
vertexai._genai.types.RestoreVersionConfig
RestoreVersionConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RestoreVersionConfig
vertexai._genai.types.RestoreVersionOperation
RestoreVersionOperation (
* ,
name : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
done : typing . Optional [ bool ] = None ,
error : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RestoreVersionOperation
vertexai._genai.types.RetrieveAgentEngineMemoriesConfig
RetrieveAgentEngineMemoriesConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
filter : typing . Optional [ str ] = None ,
filterGroups : typing . Optional [
list [ vertexai . _genai . types . common . MemoryConjunctionFilter ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RetrieveAgentEngineMemoriesConfig
vertexai._genai.types.RetrieveMemoriesRequestSimilaritySearchParams
RetrieveMemoriesRequestSimilaritySearchParams (
* , searchQuery : typing . Optional [ str ] = None , topK : typing . Optional [ int ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RetrieveMemoriesRequestSimilaritySearchParams
vertexai._genai.types.RetrieveMemoriesRequestSimpleRetrievalParams
RetrieveMemoriesRequestSimpleRetrievalParams (
* , pageSize : typing . Optional [ int ] = None , pageToken : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RetrieveMemoriesRequestSimpleRetrievalParams
vertexai._genai.types.RetrieveMemoriesResponse
RetrieveMemoriesResponse (
* ,
nextPageToken : typing . Optional [ str ] = None ,
retrievedMemories : typing . Optional [
list [ vertexai . _genai . types . common . RetrieveMemoriesResponseRetrievedMemory ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RetrieveMemoriesResponse
vertexai._genai.types.RetrieveMemoriesResponseRetrievedMemory
RetrieveMemoriesResponseRetrievedMemory (
* ,
distance : typing . Optional [ float ] = None ,
memory : typing . Optional [ vertexai . _genai . types . common . Memory ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RetrieveMemoriesResponseRetrievedMemory
vertexai._genai.types.RollbackAgentEngineMemoryConfig
RollbackAgentEngineMemoryConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
waitForCompletion : typing . Optional [ bool ] = True
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RollbackAgentEngineMemoryConfig
vertexai._genai.types.RougeInput
RougeInput (
* ,
instances : typing . Optional [ list [ vertexai . _genai . types . common . RougeInstance ]] = None ,
metricSpec : typing . Optional [ google . genai . types . RougeSpec ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RougeInput
vertexai._genai.types.RougeInstance
RougeInstance (
* , prediction : typing . Optional [ str ] = None , reference : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RougeInstance
vertexai._genai.types.RougeResults
RougeResults (
* ,
rougeMetricValues : typing . Optional [ list [ google . genai . types . RougeMetricValue ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RougeResults
vertexai._genai.types.Rubric
Rubric (
* ,
rubricId : typing . Optional [ str ] = None ,
content : typing . Optional [ vertexai . _genai . types . evals . RubricContent ] = None ,
type : typing . Optional [ str ] = None ,
importance : typing . Optional [ vertexai . _genai . types . evals . Importance ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Rubric
vertexai._genai.types.RubricBasedMetricInput
RubricBasedMetricInput ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricBasedMetricInput
vertexai._genai.types.RubricBasedMetricInstance
RubricBasedMetricInstance ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricBasedMetricInstance
vertexai._genai.types.RubricBasedMetricResult
RubricBasedMetricResult (
* ,
score : typing . Optional [ float ] = None ,
rubricVerdicts : typing . Optional [
list [ vertexai . _genai . types . evals . RubricVerdict ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricBasedMetricResult
vertexai._genai.types.RubricBasedMetricSpec
RubricBasedMetricSpec (
* ,
metricPromptTemplate : typing . Optional [ str ] = None ,
judgeAutoraterConfig : typing . Optional [ google . genai . types . AutoraterConfig ] = None ,
inlineRubrics : typing . Optional [ list [ vertexai . _genai . types . evals . Rubric ]] = None ,
rubricGroupKey : typing . Optional [ str ] = None ,
rubricGenerationSpec : typing . Optional [
google . genai . types . RubricGenerationSpec
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricBasedMetricSpec
vertexai._genai.types.RubricContent
RubricContent (
* ,
property : typing . Optional [ vertexai . _genai . types . evals . RubricContentProperty ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricContent
vertexai._genai.types.RubricContentProperty
RubricContentProperty ( * , description : typing . Optional [ str ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricContentProperty
vertexai._genai.types.RubricEnhancedContents
RubricEnhancedContents ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricEnhancedContents
vertexai._genai.types.RubricGenerationConfig
RubricGenerationConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricGenerationConfig
vertexai._genai.types.RubricGroup
RubricGroup (
* ,
groupId : typing . Optional [ str ] = None ,
displayName : typing . Optional [ str ] = None ,
rubrics : typing . Optional [ list [ vertexai . _genai . types . evals . Rubric ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricGroup
vertexai._genai.types.RubricVerdict
RubricVerdict (
* ,
evaluatedRubric : typing . Optional [ vertexai . _genai . types . evals . Rubric ] = None ,
verdict : typing . Optional [ bool ] = None ,
reasoning : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RubricVerdict
vertexai._genai.types.RunQueryJobAgentEngineConfig
RunQueryJobAgentEngineConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
query : typing . Optional [ str ] = None ,
gcsBucket : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RunQueryJobAgentEngineConfig
vertexai._genai.types.RunQueryJobResult
RunQueryJobResult (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
jobName : typing . Optional [ str ] = None ,
inputGcsUri : typing . Optional [ str ] = None ,
outputGcsUri : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.RunQueryJobResult
vertexai._genai.types.SamplingConfig
SamplingConfig (
* ,
samplingCount : typing . Optional [ int ] = None ,
samplingMethod : typing . Optional [ vertexai . _genai . types . common . SamplingMethod ] = None ,
samplingDuration : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SamplingConfig
vertexai._genai.types.SandboxEnvironment
SandboxEnvironment (
* ,
expireTime : typing . Optional [ datetime . datetime ] = None ,
connectionInfo : typing . Optional [
vertexai . _genai . types . common . SandboxEnvironmentConnectionInfo
] = None ,
createTime : typing . Optional [ datetime . datetime ] = None ,
displayName : typing . Optional [ str ] = None ,
name : typing . Optional [ str ] = None ,
spec : typing . Optional [ vertexai . _genai . types . common . SandboxEnvironmentSpec ] = None ,
state : typing . Optional [ vertexai . _genai . types . common . State ] = None ,
ttl : typing . Optional [ str ] = None ,
updateTime : typing . Optional [ datetime . datetime ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SandboxEnvironment
vertexai._genai.types.SandboxEnvironmentConnectionInfo
SandboxEnvironmentConnectionInfo (
* ,
loadBalancerHostname : typing . Optional [ str ] = None ,
loadBalancerIp : typing . Optional [ str ] = None ,
sandboxInternalIp : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SandboxEnvironmentConnectionInfo
vertexai._genai.types.SandboxEnvironmentSpec
SandboxEnvironmentSpec (
* ,
codeExecutionEnvironment : typing . Optional [
vertexai . _genai . types . common . SandboxEnvironmentSpecCodeExecutionEnvironment
] = None ,
computerUseEnvironment : typing . Optional [
vertexai . _genai . types . common . SandboxEnvironmentSpecComputerUseEnvironment
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SandboxEnvironmentSpec
vertexai._genai.types.SandboxEnvironmentSpecCodeExecutionEnvironment
SandboxEnvironmentSpecCodeExecutionEnvironment (
* ,
codeLanguage : typing . Optional [ vertexai . _genai . types . common . Language ] = None ,
machineConfig : typing . Optional [ vertexai . _genai . types . common . MachineConfig ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SandboxEnvironmentSpecCodeExecutionEnvironment
vertexai._genai.types.SandboxEnvironmentSpecComputerUseEnvironment
SandboxEnvironmentSpecComputerUseEnvironment ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SandboxEnvironmentSpecComputerUseEnvironment
vertexai._genai.types.SavedQuery
SavedQuery (
* ,
annotationFilter : typing . Optional [ str ] = None ,
annotationSpecCount : typing . Optional [ int ] = None ,
createTime : typing . Optional [ datetime . datetime ] = None ,
displayName : typing . Optional [ str ] = None ,
etag : typing . Optional [ str ] = None ,
metadata : typing . Optional [ typing . Any ] = None ,
name : typing . Optional [ str ] = None ,
problemType : typing . Optional [ str ] = None ,
supportAutomlTraining : typing . Optional [ bool ] = None ,
updateTime : typing . Optional [ datetime . datetime ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SavedQuery
vertexai._genai.types.Scheduling
Scheduling (
* ,
disableRetries : typing . Optional [ bool ] = None ,
maxWaitDuration : typing . Optional [ str ] = None ,
restartJobOnWorkerRestart : typing . Optional [ bool ] = None ,
strategy : typing . Optional [ vertexai . _genai . types . common . Strategy ] = None ,
timeout : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Scheduling
vertexai._genai.types.SchemaPredictParamsGroundingConfig
SchemaPredictParamsGroundingConfig (
* ,
disableAttribution : typing . Optional [ bool ] = None ,
sources : typing . Optional [
list [ vertexai . _genai . types . common . SchemaPredictParamsGroundingConfigSourceEntry ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPredictParamsGroundingConfig
vertexai._genai.types.SchemaPredictParamsGroundingConfigSourceEntry
SchemaPredictParamsGroundingConfigSourceEntry (
* ,
enterpriseDatastore : typing . Optional [ str ] = None ,
inlineContext : typing . Optional [ str ] = None ,
type : typing . Optional [
typing . Literal [ "UNSPECIFIED" , "WEB" , "ENTERPRISE" , "VERTEX_AI_SEARCH" , "INLINE" ]
] = None ,
vertexAiSearchDatastore : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPredictParamsGroundingConfigSourceEntry
vertexai._genai.types.SchemaPromptApiSchema
SchemaPromptApiSchema ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptApiSchema
vertexai._genai.types.SchemaPromptInstancePromptExecution
SchemaPromptInstancePromptExecution ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptInstancePromptExecution
vertexai._genai.types.SchemaPromptInstanceVariableValue
SchemaPromptInstanceVariableValue (
* ,
partList : typing . Optional [
vertexai . _genai . types . common . SchemaPromptSpecPartList
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptInstanceVariableValue
vertexai._genai.types.SchemaPromptSpecAppBuilderData
SchemaPromptSpecAppBuilderData (
* ,
codeRepositoryState : typing . Optional [ str ] = None ,
framework : typing . Optional [ vertexai . _genai . types . common . Framework ] = None ,
linkedResources : typing . Optional [
list [ vertexai . _genai . types . common . SchemaPromptSpecAppBuilderDataLinkedResource ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecAppBuilderData
vertexai._genai.types.SchemaPromptSpecAppBuilderDataLinkedResource
SchemaPromptSpecAppBuilderDataLinkedResource (
* ,
displayName : typing . Optional [ str ] = None ,
name : typing . Optional [ str ] = None ,
type : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecAppBuilderDataLinkedResource
vertexai._genai.types.SchemaPromptSpecMultimodalPrompt
SchemaPromptSpecMultimodalPrompt (
* ,
promptMessage : typing . Optional [
vertexai . _genai . types . common . SchemaPromptSpecPromptMessage
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecMultimodalPrompt
vertexai._genai.types.SchemaPromptSpecPartList
SchemaPromptSpecPartList (
* , parts : typing . Optional [ list [ google . genai . types . Part ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecPartList
vertexai._genai.types.SchemaPromptSpecPromptMessage
SchemaPromptSpecPromptMessage (
* ,
generationConfig : typing . Optional [ google . genai . types . GenerationConfig ] = None ,
toolConfig : typing . Optional [ google . genai . types . FunctionCallingConfig ] = None ,
tools : typing . Optional [ list [ google . genai . types . Tool ]] = None ,
safetySettings : typing . Optional [ list [ google . genai . types . SafetySetting ]] = None ,
contents : typing . Optional [ list [ google . genai . types . Content ]] = None ,
systemInstruction : typing . Optional [ google . genai . types . Content ] = None ,
variables : typing . Optional [ list [ dict [ str , google . genai . types . Part ]]] = None ,
model : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecPromptMessage
vertexai._genai.types.SchemaPromptSpecReferenceSentencePair
SchemaPromptSpecReferenceSentencePair (
* ,
sourceSentence : typing . Optional [ str ] = None ,
targetSentence : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecReferenceSentencePair
vertexai._genai.types.SchemaPromptSpecReferenceSentencePairList
SchemaPromptSpecReferenceSentencePairList (
* ,
referenceSentencePairs : typing . Optional [
list [ vertexai . _genai . types . common . SchemaPromptSpecReferenceSentencePair ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecReferenceSentencePairList
vertexai._genai.types.SchemaPromptSpecStructuredPrompt
SchemaPromptSpecStructuredPrompt (
* ,
context : typing . Optional [ google . genai . types . Content ] = None ,
appBuilderData : typing . Optional [
vertexai . _genai . types . common . SchemaPromptSpecAppBuilderData
] = None ,
examples : typing . Optional [
list [ vertexai . _genai . types . common . SchemaPromptSpecPartList ]
] = None ,
infillPrefix : typing . Optional [ str ] = None ,
infillSuffix : typing . Optional [ str ] = None ,
inputPrefixes : typing . Optional [ list [ str ]] = None ,
outputPrefixes : typing . Optional [ list [ str ]] = None ,
predictionInputs : typing . Optional [
list [ vertexai . _genai . types . common . SchemaPromptSpecPartList ]
] = None ,
promptMessage : typing . Optional [
vertexai . _genai . types . common . SchemaPromptSpecPromptMessage
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecStructuredPrompt
vertexai._genai.types.SchemaPromptSpecTranslationExample
SchemaPromptSpecTranslationExample (
* ,
referenceSentencePairLists : typing . Optional [
list [ vertexai . _genai . types . common . SchemaPromptSpecReferenceSentencePairList ]
] = None ,
referenceSentencesFileInputs : typing . Optional [
list [ vertexai . _genai . types . common . SchemaPromptSpecTranslationSentenceFileInput ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecTranslationExample
vertexai._genai.types.SchemaPromptSpecTranslationOption
SchemaPromptSpecTranslationOption ( * , numberOfShots : typing . Optional [ int ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecTranslationOption
vertexai._genai.types.SchemaPromptSpecTranslationPrompt
SchemaPromptSpecTranslationPrompt (
* ,
example : typing . Optional [
vertexai . _genai . types . common . SchemaPromptSpecTranslationExample
] = None ,
option : typing . Optional [
vertexai . _genai . types . common . SchemaPromptSpecTranslationOption
] = None ,
promptMessage : typing . Optional [
vertexai . _genai . types . common . SchemaPromptSpecPromptMessage
] = None ,
sourceLanguageCode : typing . Optional [ str ] = None ,
targetLanguageCode : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaPromptSpecTranslationPrompt
vertexai._genai.types.SchemaTablesDatasetMetadata
SchemaTablesDatasetMetadata (
* ,
inputConfig : typing . Optional [
vertexai . _genai . types . common . SchemaTablesDatasetMetadataInputConfig
] = None ,
geminiRequestReadConfig : typing . Optional [
vertexai . _genai . types . common . GeminiRequestReadConfig
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaTablesDatasetMetadata
vertexai._genai.types.SchemaTablesDatasetMetadataBigQuerySource
SchemaTablesDatasetMetadataBigQuerySource ( * , uri : typing . Optional [ str ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaTablesDatasetMetadataBigQuerySource
vertexai._genai.types.SchemaTablesDatasetMetadataInputConfig
SchemaTablesDatasetMetadataInputConfig (
* ,
bigquerySource : typing . Optional [
vertexai . _genai . types . common . SchemaTablesDatasetMetadataBigQuerySource
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaTablesDatasetMetadataInputConfig
vertexai._genai.types.SchemaTextPromptDatasetMetadata
SchemaTextPromptDatasetMetadata ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SchemaTextPromptDatasetMetadata
vertexai._genai.types.SecretEnvVar
SecretEnvVar (
* ,
name : typing . Optional [ str ] = None ,
secretRef : typing . Optional [ vertexai . _genai . types . common . SecretRef ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SecretEnvVar
vertexai._genai.types.SecretRef
SecretRef (
* , secret : typing . Optional [ str ] = None , version : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SecretRef
vertexai._genai.types.Session
Session (
* ,
createTime : typing . Optional [ datetime . datetime ] = None ,
displayName : typing . Optional [ str ] = None ,
expireTime : typing . Optional [ datetime . datetime ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
name : typing . Optional [ str ] = None ,
sessionState : typing . Optional [ dict [ str , typing . Any ]] = None ,
ttl : typing . Optional [ str ] = None ,
updateTime : typing . Optional [ datetime . datetime ] = None ,
userId : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.Session
vertexai._genai.types.SessionEvent
SessionEvent (
* ,
content : typing . Optional [ google . genai . types . Content ] = None ,
actions : typing . Optional [ vertexai . _genai . types . common . EventActions ] = None ,
author : typing . Optional [ str ] = None ,
errorCode : typing . Optional [ str ] = None ,
errorMessage : typing . Optional [ str ] = None ,
eventMetadata : typing . Optional [ vertexai . _genai . types . common . EventMetadata ] = None ,
invocationId : typing . Optional [ str ] = None ,
name : typing . Optional [ str ] = None ,
timestamp : typing . Optional [ datetime . datetime ] = None ,
rawEvent : typing . Optional [ dict [ str , typing . Any ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SessionEvent
vertexai._genai.types.SummaryMetric
SummaryMetric (
* ,
metrics : typing . Optional [ dict [ str , typing . Any ]] = None ,
totalItems : typing . Optional [ int ] = None ,
failedItems : typing . Optional [ int ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.SummaryMetric
vertexai._genai.types.TaskArtifact
TaskArtifact (
* ,
artifactId : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
displayName : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
parts : typing . Optional [ list [ google . genai . types . Part ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskArtifact
vertexai._genai.types.TaskArtifactChange
TaskArtifactChange (
* ,
addedArtifacts : typing . Optional [
list [ vertexai . _genai . types . common . TaskArtifact ]
] = None ,
deletedArtifactIds : typing . Optional [ list [ str ]] = None ,
updatedArtifacts : typing . Optional [
list [ vertexai . _genai . types . common . TaskArtifact ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskArtifactChange
vertexai._genai.types.TaskEvent
TaskEvent (
* ,
createTime : typing . Optional [ datetime . datetime ] = None ,
eventData : typing . Optional [ vertexai . _genai . types . common . TaskEventData ] = None ,
eventSequenceNumber : typing . Optional [ int ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskEvent
vertexai._genai.types.TaskEventData
TaskEventData (
* ,
metadataChange : typing . Optional [
vertexai . _genai . types . common . TaskMetadataChange
] = None ,
outputChange : typing . Optional [ vertexai . _genai . types . common . TaskOutputChange ] = None ,
stateChange : typing . Optional [ vertexai . _genai . types . common . TaskStateChange ] = None ,
statusDetailsChange : typing . Optional [
vertexai . _genai . types . common . TaskStatusDetailsChange
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskEventData
vertexai._genai.types.TaskMessage
TaskMessage (
* ,
messageId : typing . Optional [ str ] = None ,
metadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
parts : typing . Optional [ list [ google . genai . types . Part ]] = None ,
role : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskMessage
vertexai._genai.types.TaskMetadataChange
TaskMetadataChange (
* ,
newMetadata : typing . Optional [ dict [ str , typing . Any ]] = None ,
updateMask : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskMetadataChange
vertexai._genai.types.TaskOutput
TaskOutput (
* ,
artifacts : typing . Optional [ list [ vertexai . _genai . types . common . TaskArtifact ]] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskOutput
vertexai._genai.types.TaskOutputChange
TaskOutputChange (
* ,
taskArtifactChange : typing . Optional [
vertexai . _genai . types . common . TaskArtifactChange
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskOutputChange
vertexai._genai.types.TaskStateChange
TaskStateChange (
* , newState : typing . Optional [ vertexai . _genai . types . common . State ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskStateChange
vertexai._genai.types.TaskStatusDetails
TaskStatusDetails (
* , taskMessage : typing . Optional [ vertexai . _genai . types . common . TaskMessage ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskStatusDetails
vertexai._genai.types.TaskStatusDetailsChange
TaskStatusDetailsChange (
* ,
newTaskStatus : typing . Optional [
vertexai . _genai . types . common . TaskStatusDetails
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TaskStatusDetailsChange
vertexai._genai.types.ToolCallValidInput
ToolCallValidInput (
* ,
instances : typing . Optional [
list [ vertexai . _genai . types . common . ToolCallValidInstance ]
] = None ,
metricSpec : typing . Optional [ vertexai . _genai . types . common . ToolCallValidSpec ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolCallValidInput
vertexai._genai.types.ToolCallValidInstance
ToolCallValidInstance (
* , prediction : typing . Optional [ str ] = None , reference : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolCallValidInstance
vertexai._genai.types.ToolCallValidMetricValue
ToolCallValidMetricValue ( * , score : typing . Optional [ float ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolCallValidMetricValue
vertexai._genai.types.ToolCallValidResults
ToolCallValidResults (
* ,
toolCallValidMetricValues : typing . Optional [
list [ vertexai . _genai . types . common . ToolCallValidMetricValue ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolCallValidResults
vertexai._genai.types.ToolCallValidSpec
ToolCallValidSpec ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolCallValidSpec
vertexai._genai.types.ToolNameMatchInput
ToolNameMatchInput (
* ,
instances : typing . Optional [
list [ vertexai . _genai . types . common . ToolNameMatchInstance ]
] = None ,
metricSpec : typing . Optional [ vertexai . _genai . types . common . ToolNameMatchSpec ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolNameMatchInput
vertexai._genai.types.ToolNameMatchInstance
ToolNameMatchInstance (
* , prediction : typing . Optional [ str ] = None , reference : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolNameMatchInstance
vertexai._genai.types.ToolNameMatchMetricValue
ToolNameMatchMetricValue ( * , score : typing . Optional [ float ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolNameMatchMetricValue
vertexai._genai.types.ToolNameMatchResults
ToolNameMatchResults (
* ,
toolNameMatchMetricValues : typing . Optional [
list [ vertexai . _genai . types . common . ToolNameMatchMetricValue ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolNameMatchResults
vertexai._genai.types.ToolNameMatchSpec
ToolNameMatchSpec ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolNameMatchSpec
vertexai._genai.types.ToolParameterKVMatchInput
ToolParameterKVMatchInput (
* ,
instances : typing . Optional [
list [ vertexai . _genai . types . common . ToolParameterKVMatchInstance ]
] = None ,
metricSpec : typing . Optional [
vertexai . _genai . types . common . ToolParameterKVMatchSpec
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKVMatchInput
vertexai._genai.types.ToolParameterKVMatchInstance
ToolParameterKVMatchInstance (
* , prediction : typing . Optional [ str ] = None , reference : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKVMatchInstance
vertexai._genai.types.ToolParameterKVMatchMetricValue
ToolParameterKVMatchMetricValue ( * , score : typing . Optional [ float ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKVMatchMetricValue
vertexai._genai.types.ToolParameterKVMatchResults
ToolParameterKVMatchResults (
* ,
toolParameterKvMatchMetricValues : typing . Optional [
list [ vertexai . _genai . types . common . ToolParameterKVMatchMetricValue ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKVMatchResults
vertexai._genai.types.ToolParameterKVMatchSpec
ToolParameterKVMatchSpec ( * , useStrictStringMatch : typing . Optional [ bool ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKVMatchSpec
vertexai._genai.types.ToolParameterKeyMatchInput
ToolParameterKeyMatchInput (
* ,
instances : typing . Optional [
list [ vertexai . _genai . types . common . ToolParameterKeyMatchInstance ]
] = None ,
metricSpec : typing . Optional [
vertexai . _genai . types . common . ToolParameterKeyMatchSpec
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKeyMatchInput
vertexai._genai.types.ToolParameterKeyMatchInstance
ToolParameterKeyMatchInstance (
* , prediction : typing . Optional [ str ] = None , reference : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKeyMatchInstance
vertexai._genai.types.ToolParameterKeyMatchMetricValue
ToolParameterKeyMatchMetricValue ( * , score : typing . Optional [ float ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKeyMatchMetricValue
vertexai._genai.types.ToolParameterKeyMatchResults
ToolParameterKeyMatchResults (
* ,
toolParameterKeyMatchMetricValues : typing . Optional [
list [ vertexai . _genai . types . common . ToolParameterKeyMatchMetricValue ]
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKeyMatchResults
vertexai._genai.types.ToolParameterKeyMatchSpec
ToolParameterKeyMatchSpec ()
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.ToolParameterKeyMatchSpec
vertexai._genai.types.TuningResourceUsageAssessmentConfig
TuningResourceUsageAssessmentConfig ( * , modelName : typing . Optional [ str ] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TuningResourceUsageAssessmentConfig
vertexai._genai.types.TuningResourceUsageAssessmentResult
TuningResourceUsageAssessmentResult (
* ,
tokenCount : typing . Optional [ int ] = None ,
billableCharacterCount : typing . Optional [ int ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TuningResourceUsageAssessmentResult
vertexai._genai.types.TuningValidationAssessmentConfig
TuningValidationAssessmentConfig (
* , modelName : typing . Optional [ str ] = None , datasetUsage : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TuningValidationAssessmentConfig
vertexai._genai.types.TuningValidationAssessmentResult
TuningValidationAssessmentResult ( * , errors : typing . Optional [ list [ str ]] = None )
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.TuningValidationAssessmentResult
vertexai._genai.types.UnifiedMetric
UnifiedMetric (
* ,
bleuSpec : typing . Optional [ google . genai . types . BleuSpec ] = None ,
rougeSpec : typing . Optional [ google . genai . types . RougeSpec ] = None ,
pointwiseMetricSpec : typing . Optional [ google . genai . types . PointwiseMetricSpec ] = None ,
llmBasedMetricSpec : typing . Optional [ google . genai . types . LLMBasedMetricSpec ] = None ,
customCodeExecutionSpec : typing . Optional [
vertexai . _genai . types . common . CustomCodeExecutionSpec
] = None ,
predefinedMetricSpec : typing . Optional [
google . genai . types . PredefinedMetricSpec
] = None ,
computationBasedMetricSpec : typing . Optional [
google . genai . types . ComputationBasedMetricSpec
] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.UnifiedMetric
vertexai._genai.types.UpdateAgentEngineConfig
UpdateAgentEngineConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
displayName : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
spec : typing . Optional [ vertexai . _genai . types . common . ReasoningEngineSpec ] = None ,
contextSpec : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineContextSpec
] = None ,
pscInterfaceConfig : typing . Optional [
vertexai . _genai . types . common . PscInterfaceConfig
] = None ,
minInstances : typing . Optional [ int ] = None ,
maxInstances : typing . Optional [ int ] = None ,
resourceLimits : typing . Optional [ dict [ str , str ]] = None ,
containerConcurrency : typing . Optional [ int ] = None ,
encryptionSpec : typing . Optional [ google . genai . types . EncryptionSpec ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
classMethods : typing . Optional [ list [ dict [ str , typing . Any ]]] = None ,
sourcePackages : typing . Optional [ list [ str ]] = None ,
developerConnectSource : typing . Optional [
vertexai . _genai . types . common . ReasoningEngineSpecSourceCodeSpecDeveloperConnectConfig
] = None ,
entrypointModule : typing . Optional [ str ] = None ,
entrypointObject : typing . Optional [ str ] = None ,
requirementsFile : typing . Optional [ str ] = None ,
agentFramework : typing . Optional [
typing . Literal [
"google-adk" , "langchain" , "langgraph" , "ag2" , "llama-index" , "custom"
]
] = None ,
pythonVersion : typing . Optional [
typing . Literal [ "3.9" , "3.10" , "3.11" , "3.12" , "3.13" , "3.14" ]
] = None ,
buildOptions : typing . Optional [ dict [ str , list [ str ]]] = None ,
updateMask : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.UpdateAgentEngineConfig
vertexai._genai.types.UpdateAgentEngineMemoryConfig
UpdateAgentEngineMemoryConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
displayName : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
waitForCompletion : typing . Optional [ bool ] = True ,
ttl : typing . Optional [ str ] = None ,
expireTime : typing . Optional [ datetime . datetime ] = None ,
revisionExpireTime : typing . Optional [ datetime . datetime ] = None ,
revisionTtl : typing . Optional [ str ] = None ,
disableMemoryRevisions : typing . Optional [ bool ] = None ,
topics : typing . Optional [ list [ vertexai . _genai . types . common . MemoryTopicId ]] = None ,
metadata : typing . Optional [
dict [ str , vertexai . _genai . types . common . MemoryMetadataValue ]
] = None ,
memoryId : typing . Optional [ str ] = None ,
updateMask : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.UpdateAgentEngineMemoryConfig
vertexai._genai.types.UpdateAgentEngineSessionConfig
UpdateAgentEngineSessionConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
displayName : typing . Optional [ str ] = None ,
sessionState : typing . Optional [ dict [ str , typing . Any ]] = None ,
waitForCompletion : typing . Optional [ bool ] = True ,
ttl : typing . Optional [ str ] = None ,
expireTime : typing . Optional [ datetime . datetime ] = None ,
labels : typing . Optional [ dict [ str , str ]] = None ,
updateMask : typing . Optional [ str ] = None ,
userId : typing . Optional [ str ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.UpdateAgentEngineSessionConfig
vertexai._genai.types.UpdateDatasetConfig
UpdateDatasetConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.UpdateDatasetConfig
vertexai._genai.types.UpdateMultimodalDatasetConfig
UpdateMultimodalDatasetConfig (
* ,
httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None ,
timeout : typing . Optional [ int ] = 90
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.UpdateMultimodalDatasetConfig
vertexai._genai.types.VertexBaseConfig
VertexBaseConfig (
* , httpOptions : typing . Optional [ google . genai . types . HttpOptions ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.VertexBaseConfig
vertexai._genai.types.WinRateStats
WinRateStats (
* ,
winRates : typing . Optional [ list [ float ]] = None ,
tieRate : typing . Optional [ float ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.WinRateStats
vertexai._genai.types.WorkerPoolSpec
WorkerPoolSpec (
* ,
containerSpec : typing . Optional [ vertexai . _genai . types . common . ContainerSpec ] = None ,
diskSpec : typing . Optional [ vertexai . _genai . types . common . DiskSpec ] = None ,
lustreMounts : typing . Optional [
list [ vertexai . _genai . types . common . LustreMount ]
] = None ,
machineSpec : typing . Optional [ vertexai . _genai . types . common . MachineSpec ] = None ,
nfsMounts : typing . Optional [ list [ vertexai . _genai . types . common . NfsMount ]] = None ,
pythonPackageSpec : typing . Optional [
vertexai . _genai . types . common . PythonPackageSpec
] = None ,
replicaCount : typing . Optional [ int ] = None
)
Create a new model by parsing and validating input data from keyword arguments.
See more: vertexai._genai.types.WorkerPoolSpec
vertexai.agent_engines.AG2Agent
AG2Agent (
model : str ,
runnable_name : str ,
* ,
api_type : typing . Optional [ str ] = None ,
llm_config : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
system_instruction : typing . Optional [ str ] = None ,
runnable_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
runnable_builder : typing . Optional [ typing . Callable [[ ... ], ConversableAgent ]] = None ,
tools : typing . Optional [ typing . Sequence [ typing . Callable [[ ... ], typing . Any ]]] = None ,
enable_tracing : bool = False ,
instrumentor_builder : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None
)
Initializes the AG2 Agent.
See more: vertexai.agent_engines.AG2Agent
vertexai.agent_engines.AG2Agent.clone
clone () - > vertexai . agent_engines . templates . ag2 . AG2Agent
Returns a clone of the AG2Agent.
See more: vertexai.agent_engines.AG2Agent.clone
vertexai.agent_engines.AG2Agent.query
query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
max_turns : typing . Optional [ int ] = None ,
** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Queries the Agent with the given input.
See more: vertexai.agent_engines.AG2Agent.query
vertexai.agent_engines.AG2Agent.set_up
set_up ()
Sets up the agent for execution of queries at runtime.
See more: vertexai.agent_engines.AG2Agent.set_up
vertexai.agent_engines.AdkApp
AdkApp (
* ,
app : App = None ,
agent : BaseAgent = None ,
app_name : typing . Optional [ str ] = None ,
plugins : typing . Optional [ typing . List [ BasePlugin ]] = None ,
enable_tracing : typing . Optional [ bool ] = None ,
session_service_builder : typing . Optional [
typing . Callable [[ ... ], BaseSessionService ]
] = None ,
artifact_service_builder : typing . Optional [
typing . Callable [[ ... ], BaseArtifactService ]
] = None ,
memory_service_builder : typing . Optional [
typing . Callable [[ ... ], BaseMemoryService ]
] = None ,
instrumentor_builder : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None
)
An ADK Application.
See more: vertexai.agent_engines.AdkApp
vertexai.agent_engines.AdkApp.async_add_session_to_memory
async_add_session_to_memory ( * , session : typing . Dict [ str , typing . Any ])
Generates memories.
See more: vertexai.agent_engines.AdkApp.async_add_session_to_memory
vertexai.agent_engines.AdkApp.async_create_session
async_create_session (
* ,
user_id : str ,
session_id : typing . Optional [ str ] = None ,
state : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
** kwargs
)
Creates a new session.
See more: vertexai.agent_engines.AdkApp.async_create_session
vertexai.agent_engines.AdkApp.async_delete_session
async_delete_session ( * , user_id : str , session_id : str , ** kwargs )
Deletes a session for the given user.
See more: vertexai.agent_engines.AdkApp.async_delete_session
vertexai.agent_engines.AdkApp.async_get_session
async_get_session ( * , user_id : str , session_id : str , ** kwargs )
Get a session for the given user.
See more: vertexai.agent_engines.AdkApp.async_get_session
vertexai.agent_engines.AdkApp.async_list_sessions
async_list_sessions ( * , user_id : str , ** kwargs )
List sessions for the given user.
See more: vertexai.agent_engines.AdkApp.async_list_sessions
vertexai.agent_engines.AdkApp.async_search_memory
async_search_memory ( * , user_id : str , query : str )
Searches memories for the given user.
See more: vertexai.agent_engines.AdkApp.async_search_memory
vertexai.agent_engines.AdkApp.async_stream_query
async_stream_query (
* ,
message : typing . Union [ str , typing . Dict [ str , typing . Any ]],
user_id : str ,
session_id : typing . Optional [ str ] = None ,
session_events : typing . Optional [ typing . List [ typing . Dict [ str , typing . Any ]]] = None ,
run_config : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
** kwargs
) - > typing . AsyncIterable [ typing . Dict [ str , typing . Any ]]
Streams responses asynchronously from the ADK application.
See more: vertexai.agent_engines.AdkApp.async_stream_query
vertexai.agent_engines.AdkApp.clone
clone ()
Returns a clone of the ADK application.
See more: vertexai.agent_engines.AdkApp.clone
vertexai.agent_engines.AdkApp.create_session
create_session (
* ,
user_id : str ,
session_id : typing . Optional [ str ] = None ,
state : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
** kwargs
)
Deprecated.
See more: vertexai.agent_engines.AdkApp.create_session
vertexai.agent_engines.AdkApp.delete_session
delete_session ( * , user_id : str , session_id : str , ** kwargs )
Deprecated.
See more: vertexai.agent_engines.AdkApp.delete_session
vertexai.agent_engines.AdkApp.get_session
get_session ( * , user_id : str , session_id : str , ** kwargs )
Deprecated.
See more: vertexai.agent_engines.AdkApp.get_session
vertexai.agent_engines.AdkApp.list_sessions
list_sessions ( * , user_id : str , ** kwargs )
Deprecated.
See more: vertexai.agent_engines.AdkApp.list_sessions
vertexai.agent_engines.AdkApp.register_operations
register_operations () - > typing . Dict [ str , typing . List [ str ]]
Registers the operations of the ADK application.
See more: vertexai.agent_engines.AdkApp.register_operations
vertexai.agent_engines.AdkApp.set_up
set_up ()
Sets up the ADK application.
See more: vertexai.agent_engines.AdkApp.set_up
vertexai.agent_engines.AdkApp.stream_query
stream_query (
* ,
message : typing . Union [ str , typing . Dict [ str , typing . Any ]],
user_id : str ,
session_id : typing . Optional [ str ] = None ,
run_config : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
** kwargs
)
Deprecated.
See more: vertexai.agent_engines.AdkApp.stream_query
vertexai.agent_engines.AdkApp.streaming_agent_run_with_events
streaming_agent_run_with_events ( request_json : str )
Streams responses asynchronously from the ADK application.
See more: vertexai.agent_engines.AdkApp.streaming_agent_run_with_events
vertexai.agent_engines.AgentEngine
AgentEngine ( resource_name : str )
Retrieves an Agent Engine resource.
See more: vertexai.agent_engines.AgentEngine
vertexai.agent_engines.AgentEngine.create
create (
agent_engine : typing . Union [
None ,
vertexai . agent_engines . AsyncQueryable ,
vertexai . agent_engines . AsyncStreamQueryable ,
vertexai . agent_engines . _agent_engines . BidiStreamQueryable ,
vertexai . agent_engines . OperationRegistrable ,
vertexai . agent_engines . Queryable ,
vertexai . agent_engines . StreamQueryable ,
] = None ,
* ,
requirements : typing . Optional [ typing . Union [ str , typing . Sequence [ str ]]] = None ,
display_name : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
gcs_dir_name : typing . Optional [ str ] = None ,
extra_packages : typing . Optional [ typing . Sequence [ str ]] = None ,
env_vars : typing . Optional [
typing . Union [
typing . Sequence [ str ],
typing . Dict [
str ,
typing . Union [ str , google . cloud . aiplatform_v1 . types . env_var . SecretRef ],
],
]
] = None ,
build_options : typing . Optional [ typing . Dict [ str , typing . Sequence [ str ]]] = None ,
service_account : typing . Optional [ str ] = None ,
psc_interface_config : typing . Optional [
google . cloud . aiplatform_v1 . types . service_networking . PscInterfaceConfig
] = None ,
min_instances : typing . Optional [ int ] = None ,
max_instances : typing . Optional [ int ] = None ,
resource_limits : typing . Optional [ typing . Dict [ str , str ]] = None ,
container_concurrency : typing . Optional [ int ] = None ,
encryption_spec : typing . Optional [
google . cloud . aiplatform_v1 . types . encryption_spec . EncryptionSpec
] = None
) - > vertexai . agent_engines . AgentEngine
Creates a new Agent Engine.
See more: vertexai.agent_engines.AgentEngine.create
vertexai.agent_engines.AgentEngine.delete
delete ( * , force : bool = False , ** kwargs ) - > None
Deletes the ReasoningEngine.
See more: vertexai.agent_engines.AgentEngine.delete
vertexai.agent_engines.AgentEngine.list
list (
filter : typing . Optional [ str ] = None ,
order_by : typing . Optional [ str ] = None ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
parent : typing . Optional [ str ] = None ,
) - > typing . List [ google . cloud . aiplatform . base . VertexAiResourceNoun ]
List all instances of this Vertex AI Resource.
See more: vertexai.agent_engines.AgentEngine.list
vertexai.agent_engines.AgentEngine.operation_schemas
operation_schemas () - > typing . Sequence [ typing . Dict [ str , typing . Any ]]
Returns the (Open)API schemas for the Agent Engine.
See more: vertexai.agent_engines.AgentEngine.operation_schemas
vertexai.agent_engines.AgentEngine.to_dict
to_dict () - > typing . Dict [ str , typing . Any ]
Returns the resource proto as a dictionary.
See more: vertexai.agent_engines.AgentEngine.to_dict
vertexai.agent_engines.AgentEngine.update
update (
* ,
agent_engine : typing . Union [
None ,
vertexai . agent_engines . AsyncQueryable ,
vertexai . agent_engines . AsyncStreamQueryable ,
vertexai . agent_engines . _agent_engines . BidiStreamQueryable ,
vertexai . agent_engines . OperationRegistrable ,
vertexai . agent_engines . Queryable ,
vertexai . agent_engines . StreamQueryable ,
] = None ,
requirements : typing . Optional [ typing . Union [ str , typing . Sequence [ str ]]] = None ,
display_name : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
gcs_dir_name : typing . Optional [ str ] = None ,
extra_packages : typing . Optional [ typing . Sequence [ str ]] = None ,
env_vars : typing . Optional [
typing . Union [
typing . Sequence [ str ],
typing . Dict [
str ,
typing . Union [ str , google . cloud . aiplatform_v1 . types . env_var . SecretRef ],
],
]
] = None ,
build_options : typing . Optional [ typing . Dict [ str , typing . Sequence [ str ]]] = None ,
service_account : typing . Optional [ str ] = None ,
psc_interface_config : typing . Optional [
google . cloud . aiplatform_v1 . types . service_networking . PscInterfaceConfig
] = None ,
min_instances : typing . Optional [ int ] = None ,
max_instances : typing . Optional [ int ] = None ,
resource_limits : typing . Optional [ typing . Dict [ str , str ]] = None ,
container_concurrency : typing . Optional [ int ] = None ,
encryption_spec : typing . Optional [
google . cloud . aiplatform_v1 . types . encryption_spec . EncryptionSpec
] = None
) - > vertexai . agent_engines . AgentEngine
Updates an existing Agent Engine.
See more: vertexai.agent_engines.AgentEngine.update
vertexai.agent_engines.AgentEngine.wait
wait ()
Helper method that blocks until all futures are complete.
See more: vertexai.agent_engines.AgentEngine.wait
vertexai.agent_engines.AsyncQueryable.async_query
async_query ( ** kwargs ) - > typing . Coroutine [ typing . Any , typing . Any , typing . Any ]
Runs the Agent Engine to serve the user query asynchronously.
See more: vertexai.agent_engines.AsyncQueryable.async_query
vertexai.agent_engines.AsyncStreamQueryable.async_stream_query
async_stream_query ( ** kwargs ) - > typing . AsyncIterable [ typing . Any ]
Asynchronously stream responses to serve the user query.
See more: vertexai.agent_engines.AsyncStreamQueryable.async_stream_query
vertexai.agent_engines.Cloneable.clone
clone () - > typing . Any
Return a clone of the object.
See more: vertexai.agent_engines.Cloneable.clone
vertexai.agent_engines.LangchainAgent
LangchainAgent (
model : str ,
* ,
system_instruction : typing . Optional [ str ] = None ,
prompt : typing . Optional [ RunnableSerializable ] = None ,
tools : typing . Optional [ _ToolsType ] = None ,
output_parser : typing . Optional [ RunnableSerializable ] = None ,
chat_history : typing . Optional [ GetSessionHistoryCallable ] = None ,
model_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
model_tool_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
agent_executor_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
runnable_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
model_builder : typing . Optional [ typing . Callable ] = None ,
runnable_builder : typing . Optional [ typing . Callable ] = None ,
enable_tracing : bool = False ,
instrumentor_builder : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None
)
Initializes the LangchainAgent.
See more: vertexai.agent_engines.LangchainAgent
vertexai.agent_engines.LangchainAgent.clone
clone () - > vertexai . agent_engines . templates . langchain . LangchainAgent
Returns a clone of the LangchainAgent.
See more: vertexai.agent_engines.LangchainAgent.clone
vertexai.agent_engines.LangchainAgent.query
query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
config : typing . Optional [ RunnableConfig ] = None ,
** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Queries the Agent with the given input and config.
See more: vertexai.agent_engines.LangchainAgent.query
vertexai.agent_engines.LangchainAgent.set_up
set_up ()
Sets up the agent for execution of queries at runtime.
See more: vertexai.agent_engines.LangchainAgent.set_up
vertexai.agent_engines.LangchainAgent.stream_query
stream_query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
config : typing . Optional [ RunnableConfig ] = None ,
** kwargs
) - > typing . Iterable [ typing . Any ]
Stream queries the Agent with the given input and config.
See more: vertexai.agent_engines.LangchainAgent.stream_query
vertexai.agent_engines.LanggraphAgent
LanggraphAgent (
model : str ,
* ,
tools : typing . Optional [ typing . Sequence [ _ToolLike ]] = None ,
model_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
model_tool_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
model_builder : typing . Optional [ typing . Callable [[ ... ], BaseLanguageModel ]] = None ,
runnable_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
runnable_builder : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None ,
checkpointer_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
checkpointer_builder : typing . Optional [
typing . Callable [[ ... ], BaseCheckpointSaver ]
] = None ,
enable_tracing : bool = False ,
instrumentor_builder : typing . Optional [ typing . Callable [[ ... ], typing . Any ]] = None
)
Initializes the LangGraph Agent.
See more: vertexai.agent_engines.LanggraphAgent
vertexai.agent_engines.LanggraphAgent.clone
clone () - > vertexai . agent_engines . templates . langgraph . LanggraphAgent
Returns a clone of the LanggraphAgent.
See more: vertexai.agent_engines.LanggraphAgent.clone
vertexai.agent_engines.LanggraphAgent.get_state
get_state (
config : typing . Optional [ dict [ str , typing . Any ]] = None , ** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Gets the current state of the Agent.
See more: vertexai.agent_engines.LanggraphAgent.get_state
vertexai.agent_engines.LanggraphAgent.get_state_history
get_state_history (
config : typing . Optional [ dict [ str , typing . Any ]] = None , ** kwargs : typing . Any
) - > typing . Iterable [ typing . Any ]
Gets the state history of the Agent.
See more: vertexai.agent_engines.LanggraphAgent.get_state_history
vertexai.agent_engines.LanggraphAgent.query
query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
config : typing . Optional [ dict [ str , typing . Any ]] = None ,
** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Queries the Agent with the given input and config.
See more: vertexai.agent_engines.LanggraphAgent.query
vertexai.agent_engines.LanggraphAgent.register_operations
register_operations () - > typing . Mapping [ str , typing . Sequence [ str ]]
Registers the operations of the Agent.
See more: vertexai.agent_engines.LanggraphAgent.register_operations
vertexai.agent_engines.LanggraphAgent.set_up
set_up ()
Sets up the agent for execution of queries at runtime.
See more: vertexai.agent_engines.LanggraphAgent.set_up
vertexai.agent_engines.LanggraphAgent.stream_query
stream_query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
config : typing . Optional [ dict [ str , typing . Any ]] = None ,
** kwargs
) - > typing . Iterable [ typing . Any ]
Stream queries the Agent with the given input and config.
See more: vertexai.agent_engines.LanggraphAgent.stream_query
vertexai.agent_engines.LanggraphAgent.update_state
update_state (
config : typing . Optional [ dict [ str , typing . Any ]] = None , ** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Updates the state of the Agent.
See more: vertexai.agent_engines.LanggraphAgent.update_state
vertexai.agent_engines.ModuleAgent
ModuleAgent (
* ,
module_name : str ,
agent_name : str ,
register_operations : typing . Dict [ str , typing . Sequence [ str ]],
sys_paths : typing . Optional [ typing . Sequence [ str ]] = None ,
agent_framework : typing . Optional [ str ] = None
)
Initializes a module-based agent.
See more: vertexai.agent_engines.ModuleAgent
vertexai.agent_engines.ModuleAgent.clone
clone ()
Return a clone of the agent.
See more: vertexai.agent_engines.ModuleAgent.clone
vertexai.agent_engines.ModuleAgent.register_operations
register_operations ( ** kwargs ) - > typing . Dict [ str , typing . Sequence [ str ]]
Register the user provided operations (modes and methods).
See more: vertexai.agent_engines.ModuleAgent.register_operations
vertexai.agent_engines.ModuleAgent.set_up
set_up () - > None
Sets up the agent for execution of queries at runtime.
See more: vertexai.agent_engines.ModuleAgent.set_up
vertexai.agent_engines.OperationRegistrable.register_operations
register_operations ( ** kwargs ) - > typing . Dict [ str , typing . Sequence [ str ]]
Register the user provided operations (modes and methods).
See more: vertexai.agent_engines.OperationRegistrable.register_operations
vertexai.agent_engines.Queryable.query
query ( ** kwargs ) - > typing . Any
Runs the Agent Engine to serve the user query.
See more: vertexai.agent_engines.Queryable.query
vertexai.agent_engines.StreamQueryable.stream_query
stream_query ( ** kwargs ) - > typing . Iterable [ typing . Any ]
Stream responses to serve the user query.
See more: vertexai.agent_engines.StreamQueryable.stream_query
vertexai.evaluation.CustomMetric
CustomMetric (
name : str ,
metric_function : typing . Callable [
[ typing . Dict [ str , typing . Any ]], typing . Dict [ str , typing . Any ]
],
)
Initializes the evaluation metric.
See more: vertexai.evaluation.CustomMetric
vertexai.evaluation.EvalTask
EvalTask (
* ,
dataset : typing . Union [ pd . DataFrame , str , typing . Dict [ str , typing . Any ]],
metrics : typing . List [
typing . Union [
typing . Literal [
"exact_match" ,
"bleu" ,
"rouge_1" ,
"rouge_2" ,
"rouge_l" ,
"rouge_l_sum" ,
"tool_call_valid" ,
"tool_name_match" ,
"tool_parameter_key_match" ,
"tool_parameter_kv_match" ,
],
vertexai . evaluation . CustomMetric ,
vertexai . evaluation . metrics . _base . _AutomaticMetric ,
vertexai . evaluation . metrics . _base . _TranslationMetric ,
vertexai . evaluation . metrics . pointwise_metric . PointwiseMetric ,
vertexai . evaluation . metrics . pairwise_metric . PairwiseMetric ,
]
],
experiment : typing . Optional [ str ] = None ,
metric_column_mapping : typing . Optional [ typing . Dict [ str , str ]] = None ,
output_uri_prefix : typing . Optional [ str ] = ""
)
Initializes an EvalTask.
See more: vertexai.evaluation.EvalTask
vertexai.evaluation.EvalTask.display_runs
display_runs ()
Displays experiment runs associated with this EvalTask.
See more: vertexai.evaluation.EvalTask.display_runs
vertexai.evaluation.EvalTask.evaluate
evaluate (
* ,
model : typing . Optional [
typing . Union [
vertexai . generative_models . GenerativeModel , typing . Callable [[ str ], str ]
]
] = None ,
prompt_template : typing . Optional [ str ] = None ,
experiment_run_name : typing . Optional [ str ] = None ,
response_column_name : typing . Optional [ str ] = None ,
baseline_model_response_column_name : typing . Optional [ str ] = None ,
evaluation_service_qps : typing . Optional [ float ] = None ,
retry_timeout : float = 120.0 ,
output_file_name : typing . Optional [ str ] = None
) - > vertexai . evaluation . EvalResult
Runs an evaluation for the EvalTask.
See more: vertexai.evaluation.EvalTask.evaluate
vertexai.evaluation.MetricPromptTemplateExamples.get_prompt_template
get_prompt_template ( metric_name : str ) - > str
Returns the prompt template for the given metric name.
See more: vertexai.evaluation.MetricPromptTemplateExamples.get_prompt_template
vertexai.evaluation.MetricPromptTemplateExamples.list_example_metric_names
list_example_metric_names () - > typing . List [ str ]
Returns a list of all metric prompt templates.
See more: vertexai.evaluation.MetricPromptTemplateExamples.list_example_metric_names
vertexai.evaluation.PairwiseMetric
PairwiseMetric (
* ,
metric : str ,
metric_prompt_template : typing . Union [
vertexai . evaluation . metrics . metric_prompt_template . PairwiseMetricPromptTemplate ,
str ,
],
baseline_model : typing . Optional [
typing . Union [
vertexai . generative_models . GenerativeModel , typing . Callable [[ str ], str ]
]
] = None
)
Initializes a pairwise evaluation metric.
See more: vertexai.evaluation.PairwiseMetric
vertexai.evaluation.PairwiseMetricPromptTemplate
PairwiseMetricPromptTemplate (
* ,
criteria : typing . Dict [ str , str ],
rating_rubric : typing . Dict [ str , str ],
input_variables : typing . Optional [ typing . List [ str ]] = None ,
instruction : typing . Optional [ str ] = None ,
metric_definition : typing . Optional [ str ] = None ,
evaluation_steps : typing . Optional [ typing . Dict [ str , str ]] = None ,
few_shot_examples : typing . Optional [ typing . List [ str ]] = None
)
Initializes a pairwise metric prompt template.
See more: vertexai.evaluation.PairwiseMetricPromptTemplate
vertexai.evaluation.PairwiseMetricPromptTemplate.__str__
__str__ ()
Serializes the pairwise metric prompt template to a string.
See more: vertexai.evaluation.PairwiseMetricPromptTemplate. str
vertexai.evaluation.PairwiseMetricPromptTemplate.assemble
assemble ( ** kwargs ) - > vertexai . evaluation . prompt_template . PromptTemplate
Replaces only the provided variables in the template with specific values.
See more: vertexai.evaluation.PairwiseMetricPromptTemplate.assemble
vertexai.evaluation.PairwiseMetricPromptTemplate.get_default_pairwise_evaluation_steps
get_default_pairwise_evaluation_steps () - > typing . Dict [ str , str ]
Returns the default evaluation steps for the metric prompt template.
See more: vertexai.evaluation.PairwiseMetricPromptTemplate.get_default_pairwise_evaluation_steps
vertexai.evaluation.PairwiseMetricPromptTemplate.get_default_pairwise_instruction
get_default_pairwise_instruction () - > str
Returns the default instruction for the metric prompt template.
See more: vertexai.evaluation.PairwiseMetricPromptTemplate.get_default_pairwise_instruction
vertexai.evaluation.PointwiseMetric
PointwiseMetric (
* ,
metric : str ,
metric_prompt_template : typing . Union [
vertexai . evaluation . metrics . metric_prompt_template . PointwiseMetricPromptTemplate ,
str ,
]
)
Initializes a pointwise evaluation metric.
See more: vertexai.evaluation.PointwiseMetric
vertexai.evaluation.PointwiseMetricPromptTemplate
PointwiseMetricPromptTemplate (
* ,
criteria : typing . Dict [ str , str ],
rating_rubric : typing . Dict [ str , str ],
input_variables : typing . Optional [ typing . List [ str ]] = None ,
instruction : typing . Optional [ str ] = None ,
metric_definition : typing . Optional [ str ] = None ,
evaluation_steps : typing . Optional [ typing . Dict [ str , str ]] = None ,
few_shot_examples : typing . Optional [ typing . List [ str ]] = None
)
Initializes a pointwise metric prompt template.
See more: vertexai.evaluation.PointwiseMetricPromptTemplate
vertexai.evaluation.PointwiseMetricPromptTemplate.__str__
__str__ ()
Serializes the pointwise metric prompt template to a string.
See more: vertexai.evaluation.PointwiseMetricPromptTemplate. str
vertexai.evaluation.PointwiseMetricPromptTemplate.assemble
assemble ( ** kwargs ) - > vertexai . evaluation . prompt_template . PromptTemplate
Replaces only the provided variables in the template with specific values.
See more: vertexai.evaluation.PointwiseMetricPromptTemplate.assemble
vertexai.evaluation.PointwiseMetricPromptTemplate.get_default_pointwise_evaluation_steps
get_default_pointwise_evaluation_steps () - > typing . Dict [ str , str ]
Returns the default evaluation steps for the metric prompt template.
See more: vertexai.evaluation.PointwiseMetricPromptTemplate.get_default_pointwise_evaluation_steps
vertexai.evaluation.PointwiseMetricPromptTemplate.get_default_pointwise_instruction
get_default_pointwise_instruction () - > str
Returns the default instruction for the metric prompt template.
See more: vertexai.evaluation.PointwiseMetricPromptTemplate.get_default_pointwise_instruction
vertexai.evaluation.PromptTemplate
PromptTemplate ( template : str )
Initializes the PromptTemplate with a given template.
See more: vertexai.evaluation.PromptTemplate
vertexai.evaluation.PromptTemplate.__repr__
__repr__ () - > str
Returns a string representation of the PromptTemplate.
See more: vertexai.evaluation.PromptTemplate. repr
vertexai.evaluation.PromptTemplate.__str__
__str__ () - > str
Returns the template string.
See more: vertexai.evaluation.PromptTemplate. str
vertexai.evaluation.PromptTemplate.assemble
assemble ( ** kwargs ) - > vertexai . evaluation . prompt_template . PromptTemplate
Replaces only the provided variables in the template with specific values.
See more: vertexai.evaluation.PromptTemplate.assemble
vertexai.evaluation.Rouge
Rouge (
* ,
rouge_type : typing . Literal [
"rouge1" ,
"rouge2" ,
"rouge3" ,
"rouge4" ,
"rouge5" ,
"rouge6" ,
"rouge7" ,
"rouge8" ,
"rouge9" ,
"rougeL" ,
"rougeLsum" ,
],
use_stemmer : bool = False ,
split_summaries : bool = False
)
Initializes the ROUGE metric.
See more: vertexai.evaluation.Rouge
vertexai.generative_models.ChatSession.send_message
Generates content.
See more: vertexai.generative_models.ChatSession.send_message
vertexai.generative_models.ChatSession.send_message_async
Generates content asynchronously.
See more: vertexai.generative_models.ChatSession.send_message_async
vertexai.generative_models.FunctionDeclaration
FunctionDeclaration (
* ,
name : str ,
parameters : typing . Dict [ str , typing . Any ],
description : typing . Optional [ str ] = None ,
response : typing . Optional [ typing . Dict [ str , typing . Any ]] = None
)
Constructs a FunctionDeclaration.
See more: vertexai.generative_models.FunctionDeclaration
vertexai.generative_models.GenerationConfig
GenerationConfig (
* ,
temperature : typing . Optional [ float ] = None ,
top_p : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
candidate_count : typing . Optional [ int ] = None ,
max_output_tokens : typing . Optional [ int ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
presence_penalty : typing . Optional [ float ] = None ,
frequency_penalty : typing . Optional [ float ] = None ,
response_mime_type : typing . Optional [ str ] = None ,
response_schema : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
seed : typing . Optional [ int ] = None ,
audio_timestamp : typing . Optional [ bool ] = None ,
routing_config : typing . Optional [ RoutingConfig ] = None ,
logprobs : typing . Optional [ int ] = None ,
response_logprobs : typing . Optional [ bool ] = None ,
response_modalities : typing . Optional [ typing . List [ GenerationConfig . Modality ]] = None ,
model_config : typing . Optional [ GenerationConfig . ModelConfig ] = None
)
Constructs a GenerationConfig object.
See more: vertexai.generative_models.GenerationConfig
vertexai.generative_models.GenerationConfig.ModelConfig.__delattr__
__delattr__ ( key )
Delete the value on the given field.
See more: vertexai.generative_models.GenerationConfig.ModelConfig. delattr
vertexai.generative_models.GenerationConfig.ModelConfig.__eq__
__eq__ ( other )
Return True if the messages are equal, False otherwise.
See more: vertexai.generative_models.GenerationConfig.ModelConfig. eq
vertexai.generative_models.GenerationConfig.ModelConfig.__ne__
__ne__ ( other )
Return True if the messages are unequal, False otherwise.
See more: vertexai.generative_models.GenerationConfig.ModelConfig. ne
vertexai.generative_models.GenerationConfig.ModelConfig.__setattr__
__setattr__ ( key , value )
Set the value on the given field.
See more: vertexai.generative_models.GenerationConfig.ModelConfig. setattr
vertexai.generative_models.GenerationConfig.RoutingConfig.AutoRoutingMode
AutoRoutingMode (
* ,
model_routing_preference : google . cloud . aiplatform_v1beta1 . types . content . GenerationConfig . RoutingConfig . AutoRoutingMode . ModelRoutingPreference
)
AutoRouingMode constructor
.
See more: vertexai.generative_models.GenerationConfig.RoutingConfig.AutoRoutingMode
vertexai.generative_models.GenerationConfig.RoutingConfig.ManualRoutingMode
ManualRoutingMode ( * , model_name : str )
ManualRoutingMode constructor
.
See more: vertexai.generative_models.GenerationConfig.RoutingConfig.ManualRoutingMode
vertexai.generative_models.GenerativeModel.compute_tokens
compute_tokens (
contents : ContentsType ,
) - > google . cloud . aiplatform_v1beta1 . types . llm_utility_service . ComputeTokensResponse
Computes tokens.
See more: vertexai.generative_models.GenerativeModel.compute_tokens
vertexai.generative_models.GenerativeModel.compute_tokens_async
compute_tokens_async (
contents : ContentsType ,
) - > google . cloud . aiplatform_v1beta1 . types . llm_utility_service . ComputeTokensResponse
Computes tokens asynchronously.
See more: vertexai.generative_models.GenerativeModel.compute_tokens_async
vertexai.generative_models.GenerativeModel.count_tokens
count_tokens (
contents : ContentsType ,
* ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None
) - > google . cloud . aiplatform_v1beta1 . types . prediction_service . CountTokensResponse
Counts tokens.
See more: vertexai.generative_models.GenerativeModel.count_tokens
vertexai.generative_models.GenerativeModel.count_tokens_async
count_tokens_async (
contents : ContentsType ,
* ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None
) - > google . cloud . aiplatform_v1beta1 . types . prediction_service . CountTokensResponse
Counts tokens asynchronously.
See more: vertexai.generative_models.GenerativeModel.count_tokens_async
vertexai.generative_models.GenerativeModel.from_cached_content
from_cached_content (
cached_content : typing . Union [ str , CachedContent ],
* ,
generation_config : typing . Optional [ GenerationConfigType ] = None ,
safety_settings : typing . Optional [ SafetySettingsType ] = None
) - > _GenerativeModel
Creates a model from cached content.
See more: vertexai.generative_models.GenerativeModel.from_cached_content
vertexai.generative_models.GenerativeModel.generate_content
generate_content (
contents : ContentsType ,
* ,
generation_config : typing . Optional [ GenerationConfigType ] = None ,
safety_settings : typing . Optional [ SafetySettingsType ] = None ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None ,
tool_config : typing . Optional [
vertexai . generative_models . _generative_models . ToolConfig
] = None ,
labels : typing . Optional [ typing . Dict [ str , str ]] = None ,
stream : bool = False
) - > typing . Union [
vertexai . generative_models . _generative_models . GenerationResponse ,
typing . Iterable [ vertexai . generative_models . _generative_models . GenerationResponse ],
]
Generates content.
See more: vertexai.generative_models.GenerativeModel.generate_content
vertexai.generative_models.GenerativeModel.generate_content_async
generate_content_async (
contents : ContentsType ,
* ,
generation_config : typing . Optional [ GenerationConfigType ] = None ,
safety_settings : typing . Optional [ SafetySettingsType ] = None ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None ,
tool_config : typing . Optional [
vertexai . generative_models . _generative_models . ToolConfig
] = None ,
labels : typing . Optional [ typing . Dict [ str , str ]] = None ,
stream : bool = False
) - > typing . Union [
vertexai . generative_models . _generative_models . GenerationResponse ,
typing . AsyncIterable [
vertexai . generative_models . _generative_models . GenerationResponse
],
]
Generates content asynchronously.
See more: vertexai.generative_models.GenerativeModel.generate_content_async
vertexai.generative_models.GenerativeModel.start_chat
start_chat (
* ,
history : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Content ]
] = None ,
response_validation : bool = True
) - > vertexai . generative_models . _generative_models . ChatSession
Creates a stateful chat session.
See more: vertexai.generative_models.GenerativeModel.start_chat
vertexai.generative_models.Image.from_bytes
from_bytes ( data : bytes ) - > vertexai . generative_models . _generative_models . Image
Loads image from image bytes.
See more: vertexai.generative_models.Image.from_bytes
vertexai.generative_models.Image.load_from_file
load_from_file (
location : str ,
) - > vertexai . generative_models . _generative_models . Image
Loads image from file.
See more: vertexai.generative_models.Image.load_from_file
vertexai.generative_models.ResponseValidationError.with_traceback
Exception.with_traceback(tb) --
set self. traceback to tb and return self.
See more: vertexai.generative_models.ResponseValidationError.with_traceback
vertexai.generative_models.SafetySetting
SafetySetting (
* ,
category : google . cloud . aiplatform_v1beta1 . types . content . HarmCategory ,
threshold : google . cloud . aiplatform_v1beta1 . types . content . SafetySetting . HarmBlockThreshold ,
method : typing . Optional [
google . cloud . aiplatform_v1beta1 . types . content . SafetySetting . HarmBlockMethod
] = None
)
Safety settings.
See more: vertexai.generative_models.SafetySetting
vertexai.generative_models.grounding.DynamicRetrievalConfig
DynamicRetrievalConfig (
mode : google . cloud . aiplatform_v1beta1 . types . tool . DynamicRetrievalConfig . Mode = Mode . MODE_UNSPECIFIED ,
dynamic_threshold : typing . Optional [ float ] = None ,
)
Initializes a DynamicRetrievalConfig.
See more: vertexai.generative_models.grounding.DynamicRetrievalConfig
vertexai.generative_models.grounding.GoogleSearchRetrieval
GoogleSearchRetrieval (
dynamic_retrieval_config : typing . Optional [
vertexai . generative_models . _generative_models . grounding . DynamicRetrievalConfig
] = None ,
)
Initializes a Google Search Retrieval tool.
See more: vertexai.generative_models.grounding.GoogleSearchRetrieval
vertexai.generative_models.grounding.Retrieval
Retrieval (
source : vertexai . generative_models . _generative_models . grounding . VertexAISearch ,
disable_attribution : typing . Optional [ bool ] = None ,
)
Initializes a Retrieval tool.
See more: vertexai.generative_models.grounding.Retrieval
vertexai.generative_models.grounding.VertexAISearch
VertexAISearch (
datastore : str ,
* ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None
)
Initializes a Vertex AI Search tool.
See more: vertexai.generative_models.grounding.VertexAISearch
vertexai.language_models.ChatModel
ChatModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a LanguageModel.
See more: vertexai.language_models.ChatModel
vertexai.language_models.ChatModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.language_models.ChatModel.from_pretrained
vertexai.language_models.ChatModel.get_tuned_model
get_tuned_model (
tuned_model_name : str ,
) - > vertexai . language_models . _language_models . _LanguageModel
Loads the specified tuned language model.
See more: vertexai.language_models.ChatModel.get_tuned_model
vertexai.language_models.ChatModel.list_tuned_model_names
list_tuned_model_names () - > typing . Sequence [ str ]
Lists the names of tuned models.
See more: vertexai.language_models.ChatModel.list_tuned_model_names
vertexai.language_models.ChatModel.start_chat
start_chat (
* ,
context : typing . Optional [ str ] = None ,
examples : typing . Optional [
typing . List [ vertexai . language_models . InputOutputTextPair ]
] = None ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
top_p : typing . Optional [ float ] = None ,
message_history : typing . Optional [
typing . List [ vertexai . language_models . ChatMessage ]
] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None
) - > vertexai . language_models . ChatSession
Starts a chat session with the model.
See more: vertexai.language_models.ChatModel.start_chat
vertexai.language_models.ChatModel.tune_model
tune_model (
training_data : typing . Union [ str , pandas . core . frame . DataFrame ],
* ,
train_steps : typing . Optional [ int ] = None ,
learning_rate_multiplier : typing . Optional [ float ] = None ,
tuning_job_location : typing . Optional [ str ] = None ,
tuned_model_location : typing . Optional [ str ] = None ,
model_display_name : typing . Optional [ str ] = None ,
default_context : typing . Optional [ str ] = None ,
accelerator_type : typing . Optional [ typing . Literal [ "TPU" , "GPU" ]] = None ,
tuning_evaluation_spec : typing . Optional [
vertexai . language_models . TuningEvaluationSpec
] = None
) - > vertexai . language_models . _language_models . _LanguageModelTuningJob
Tunes a model based on training data.
See more: vertexai.language_models.ChatModel.tune_model
vertexai.language_models.ChatModel.tune_model_rlhf
tune_model_rlhf (
* ,
prompt_data : typing . Union [ str , pandas . core . frame . DataFrame ],
preference_data : typing . Union [ str , pandas . core . frame . DataFrame ],
model_display_name : typing . Optional [ str ] = None ,
prompt_sequence_length : typing . Optional [ int ] = None ,
target_sequence_length : typing . Optional [ int ] = None ,
reward_model_learning_rate_multiplier : typing . Optional [ float ] = None ,
reinforcement_learning_rate_multiplier : typing . Optional [ float ] = None ,
reward_model_train_steps : typing . Optional [ int ] = None ,
reinforcement_learning_train_steps : typing . Optional [ int ] = None ,
kl_coeff : typing . Optional [ float ] = None ,
default_context : typing . Optional [ str ] = None ,
tuning_job_location : typing . Optional [ str ] = None ,
accelerator_type : typing . Optional [ typing . Literal [ "TPU" , "GPU" ]] = None ,
tuning_evaluation_spec : typing . Optional [
vertexai . language_models . TuningEvaluationSpec
] = None
) - > vertexai . language_models . _language_models . _LanguageModelTuningJob
Tunes a model using reinforcement learning from human feedback.
See more: vertexai.language_models.ChatModel.tune_model_rlhf
vertexai.language_models.ChatSession.send_message
send_message (
message : str ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
top_p : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
candidate_count : typing . Optional [ int ] = None ,
grounding_source : typing . Optional [
typing . Union [
vertexai . language_models . _language_models . WebSearch ,
vertexai . language_models . _language_models . VertexAISearch ,
vertexai . language_models . _language_models . InlineContext ,
]
] = None
) - > vertexai . language_models . MultiCandidateTextGenerationResponse
Sends message to the language model and gets a response.
See more: vertexai.language_models.ChatSession.send_message
vertexai.language_models.ChatSession.send_message_async
send_message_async (
message : str ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
top_p : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
candidate_count : typing . Optional [ int ] = None ,
grounding_source : typing . Optional [
typing . Union [
vertexai . language_models . _language_models . WebSearch ,
vertexai . language_models . _language_models . VertexAISearch ,
vertexai . language_models . _language_models . InlineContext ,
]
] = None
) - > vertexai . language_models . MultiCandidateTextGenerationResponse
Asynchronously sends message to the language model and gets a response.
See more: vertexai.language_models.ChatSession.send_message_async
vertexai.language_models.ChatSession.send_message_streaming
send_message_streaming (
message : str ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
top_p : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None
) - > typing . Iterator [ vertexai . language_models . TextGenerationResponse ]
Sends message to the language model and gets a streamed response.
See more: vertexai.language_models.ChatSession.send_message_streaming
vertexai.language_models.ChatSession.send_message_streaming_async
send_message_streaming_async (
message : str ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
top_p : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None
) - > typing . AsyncIterator [ vertexai . language_models . TextGenerationResponse ]
Asynchronously sends message to the language model and gets a streamed response.
See more: vertexai.language_models.ChatSession.send_message_streaming_async
vertexai.language_models.CodeChatModel
CodeChatModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a LanguageModel.
See more: vertexai.language_models.CodeChatModel
vertexai.language_models.CodeChatModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.language_models.CodeChatModel.from_pretrained
vertexai.language_models.CodeChatModel.get_tuned_model
get_tuned_model (
tuned_model_name : str ,
) - > vertexai . language_models . _language_models . _LanguageModel
Loads the specified tuned language model.
See more: vertexai.language_models.CodeChatModel.get_tuned_model
vertexai.language_models.CodeChatModel.list_tuned_model_names
list_tuned_model_names () - > typing . Sequence [ str ]
Lists the names of tuned models.
See more: vertexai.language_models.CodeChatModel.list_tuned_model_names
vertexai.language_models.CodeChatModel.start_chat
start_chat (
* ,
context : typing . Optional [ str ] = None ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
message_history : typing . Optional [
typing . List [ vertexai . language_models . ChatMessage ]
] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None
) - > vertexai . language_models . CodeChatSession
Starts a chat session with the code chat model.
See more: vertexai.language_models.CodeChatModel.start_chat
vertexai.language_models.CodeChatModel.tune_model
tune_model (
training_data : typing . Union [ str , pandas . core . frame . DataFrame ],
* ,
train_steps : typing . Optional [ int ] = None ,
learning_rate_multiplier : typing . Optional [ float ] = None ,
tuning_job_location : typing . Optional [ str ] = None ,
tuned_model_location : typing . Optional [ str ] = None ,
model_display_name : typing . Optional [ str ] = None ,
default_context : typing . Optional [ str ] = None ,
accelerator_type : typing . Optional [ typing . Literal [ "TPU" , "GPU" ]] = None ,
tuning_evaluation_spec : typing . Optional [
vertexai . language_models . TuningEvaluationSpec
] = None
) - > vertexai . language_models . _language_models . _LanguageModelTuningJob
Tunes a model based on training data.
See more: vertexai.language_models.CodeChatModel.tune_model
vertexai.language_models.CodeChatSession.send_message
send_message (
message : str ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
candidate_count : typing . Optional [ int ] = None
) - > vertexai . language_models . MultiCandidateTextGenerationResponse
Sends message to the code chat model and gets a response.
See more: vertexai.language_models.CodeChatSession.send_message
vertexai.language_models.CodeChatSession.send_message_async
send_message_async (
message : str ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
candidate_count : typing . Optional [ int ] = None
) - > vertexai . language_models . MultiCandidateTextGenerationResponse
Asynchronously sends message to the code chat model and gets a response.
See more: vertexai.language_models.CodeChatSession.send_message_async
vertexai.language_models.CodeChatSession.send_message_streaming
send_message_streaming (
message : str ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None
) - > typing . Iterator [ vertexai . language_models . TextGenerationResponse ]
Sends message to the language model and gets a streamed response.
See more: vertexai.language_models.CodeChatSession.send_message_streaming
vertexai.language_models.CodeChatSession.send_message_streaming_async
send_message_streaming_async (
message : str ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None
) - > typing . AsyncIterator [ vertexai . language_models . TextGenerationResponse ]
Asynchronously sends message to the language model and gets a streamed response.
See more: vertexai.language_models.CodeChatSession.send_message_streaming_async
vertexai.language_models.CodeGenerationModel.batch_predict
batch_predict (
* ,
dataset : typing . Union [ str , typing . List [ str ]],
destination_uri_prefix : str ,
model_parameters : typing . Optional [ typing . Dict ] = None
) - > google . cloud . aiplatform . jobs . BatchPredictionJob
Starts a batch prediction job with the model.
See more: vertexai.language_models.CodeGenerationModel.batch_predict
vertexai.language_models.CodeGenerationModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.language_models.CodeGenerationModel.from_pretrained
vertexai.language_models.CodeGenerationModel.get_tuned_model
get_tuned_model (
tuned_model_name : str ,
) - > vertexai . language_models . _language_models . _LanguageModel
Loads the specified tuned language model.
See more: vertexai.language_models.CodeGenerationModel.get_tuned_model
vertexai.language_models.CodeGenerationModel.list_tuned_model_names
list_tuned_model_names () - > typing . Sequence [ str ]
Lists the names of tuned models.
See more: vertexai.language_models.CodeGenerationModel.list_tuned_model_names
vertexai.language_models.CodeGenerationModel.predict
predict (
prefix : str ,
suffix : typing . Optional [ str ] = None ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
candidate_count : typing . Optional [ int ] = None
) - > vertexai . language_models . TextGenerationResponse
Gets model response for a single prompt.
See more: vertexai.language_models.CodeGenerationModel.predict
vertexai.language_models.CodeGenerationModel.predict_async
predict_async (
prefix : str ,
suffix : typing . Optional [ str ] = None ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
candidate_count : typing . Optional [ int ] = None
) - > vertexai . language_models . TextGenerationResponse
Asynchronously gets model response for a single prompt.
See more: vertexai.language_models.CodeGenerationModel.predict_async
vertexai.language_models.CodeGenerationModel.predict_streaming
predict_streaming (
prefix : str ,
suffix : typing . Optional [ str ] = None ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None
) - > typing . Iterator [ vertexai . language_models . TextGenerationResponse ]
Predicts the code based on previous code.
See more: vertexai.language_models.CodeGenerationModel.predict_streaming
vertexai.language_models.CodeGenerationModel.predict_streaming_async
predict_streaming_async (
prefix : str ,
suffix : typing . Optional [ str ] = None ,
* ,
max_output_tokens : typing . Optional [ int ] = None ,
temperature : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None
) - > typing . AsyncIterator [ vertexai . language_models . TextGenerationResponse ]
Asynchronously predicts the code based on previous code.
See more: vertexai.language_models.CodeGenerationModel.predict_streaming_async
vertexai.language_models.CodeGenerationModel.tune_model
tune_model (
training_data : typing . Union [ str , pandas . core . frame . DataFrame ],
* ,
train_steps : typing . Optional [ int ] = None ,
learning_rate_multiplier : typing . Optional [ float ] = None ,
tuning_job_location : typing . Optional [ str ] = None ,
tuned_model_location : typing . Optional [ str ] = None ,
model_display_name : typing . Optional [ str ] = None ,
tuning_evaluation_spec : typing . Optional [
vertexai . language_models . TuningEvaluationSpec
] = None ,
accelerator_type : typing . Optional [ typing . Literal [ "TPU" , "GPU" ]] = None ,
max_context_length : typing . Optional [ str ] = None
) - > vertexai . language_models . _language_models . _LanguageModelTuningJob
Tunes a model based on training data.
See more: vertexai.language_models.CodeGenerationModel.tune_model
vertexai.language_models.TextEmbeddingModel.batch_predict
batch_predict (
* ,
dataset : typing . Union [ str , typing . List [ str ]],
destination_uri_prefix : str ,
model_parameters : typing . Optional [ typing . Dict ] = None
) - > google . cloud . aiplatform . jobs . BatchPredictionJob
Starts a batch prediction job with the model.
See more: vertexai.language_models.TextEmbeddingModel.batch_predict
vertexai.language_models.TextEmbeddingModel.count_tokens
count_tokens (
prompts : typing . List [ str ],
) - > vertexai . preview . language_models . CountTokensResponse
Counts the tokens and billable characters for a given prompt.
See more: vertexai.language_models.TextEmbeddingModel.count_tokens
vertexai.language_models.TextEmbeddingModel.deploy_tuned_model
deploy_tuned_model (
tuned_model_name : str ,
machine_type : typing . Optional [ str ] = None ,
accelerator : typing . Optional [ str ] = None ,
accelerator_count : typing . Optional [ int ] = None ,
) - > vertexai . language_models . _language_models . _LanguageModel
Loads the specified tuned language model.
See more: vertexai.language_models.TextEmbeddingModel.deploy_tuned_model
vertexai.language_models.TextEmbeddingModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.language_models.TextEmbeddingModel.from_pretrained
vertexai.language_models.TextEmbeddingModel.get_embeddings
get_embeddings (
texts : typing . List [ typing . Union [ str , vertexai . language_models . TextEmbeddingInput ]],
* ,
auto_truncate : bool = True ,
output_dimensionality : typing . Optional [ int ] = None
) - > typing . List [ vertexai . language_models . TextEmbedding ]
Calculates embeddings for the given texts.
See more: vertexai.language_models.TextEmbeddingModel.get_embeddings
vertexai.language_models.TextEmbeddingModel.get_embeddings_async
get_embeddings_async (
texts : typing . List [ typing . Union [ str , vertexai . language_models . TextEmbeddingInput ]],
* ,
auto_truncate : bool = True ,
output_dimensionality : typing . Optional [ int ] = None
) - > typing . List [ vertexai . language_models . TextEmbedding ]
Asynchronously calculates embeddings for the given texts.
See more: vertexai.language_models.TextEmbeddingModel.get_embeddings_async
vertexai.language_models.TextEmbeddingModel.get_tuned_model
get_tuned_model ( * args , ** kwargs )
Loads the specified tuned language model.
See more: vertexai.language_models.TextEmbeddingModel.get_tuned_model
vertexai.language_models.TextEmbeddingModel.list_tuned_model_names
list_tuned_model_names () - > typing . Sequence [ str ]
Lists the names of tuned models.
See more: vertexai.language_models.TextEmbeddingModel.list_tuned_model_names
vertexai.language_models.TextEmbeddingModel.tune_model
tune_model (
* ,
training_data : typing . Optional [ str ] = None ,
corpus_data : typing . Optional [ str ] = None ,
queries_data : typing . Optional [ str ] = None ,
test_data : typing . Optional [ str ] = None ,
validation_data : typing . Optional [ str ] = None ,
batch_size : typing . Optional [ int ] = None ,
train_steps : typing . Optional [ int ] = None ,
tuned_model_location : typing . Optional [ str ] = None ,
model_display_name : typing . Optional [ str ] = None ,
task_type : typing . Optional [ str ] = None ,
machine_type : typing . Optional [ str ] = None ,
accelerator : typing . Optional [ str ] = None ,
accelerator_count : typing . Optional [ int ] = None ,
output_dimensionality : typing . Optional [ int ] = None ,
learning_rate_multiplier : typing . Optional [ float ] = None
) - > vertexai . language_models . _language_models . _TextEmbeddingModelTuningJob
Tunes a model based on training data.
See more: vertexai.language_models.TextEmbeddingModel.tune_model
vertexai.language_models.TextGenerationModel.batch_predict
batch_predict (
* ,
dataset : typing . Union [ str , typing . List [ str ]],
destination_uri_prefix : str ,
model_parameters : typing . Optional [ typing . Dict ] = None
) - > google . cloud . aiplatform . jobs . BatchPredictionJob
Starts a batch prediction job with the model.
See more: vertexai.language_models.TextGenerationModel.batch_predict
vertexai.language_models.TextGenerationModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.language_models.TextGenerationModel.from_pretrained
vertexai.language_models.TextGenerationModel.get_tuned_model
get_tuned_model (
tuned_model_name : str ,
) - > vertexai . language_models . _language_models . _LanguageModel
Loads the specified tuned language model.
See more: vertexai.language_models.TextGenerationModel.get_tuned_model
vertexai.language_models.TextGenerationModel.list_tuned_model_names
list_tuned_model_names () - > typing . Sequence [ str ]
Lists the names of tuned models.
See more: vertexai.language_models.TextGenerationModel.list_tuned_model_names
vertexai.language_models.TextGenerationModel.predict
predict (
prompt : str ,
* ,
max_output_tokens : typing . Optional [ int ] = 128 ,
temperature : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
top_p : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
candidate_count : typing . Optional [ int ] = None ,
grounding_source : typing . Optional [
typing . Union [
vertexai . language_models . _language_models . WebSearch ,
vertexai . language_models . _language_models . VertexAISearch ,
vertexai . language_models . _language_models . InlineContext ,
]
] = None ,
logprobs : typing . Optional [ int ] = None ,
presence_penalty : typing . Optional [ float ] = None ,
frequency_penalty : typing . Optional [ float ] = None ,
logit_bias : typing . Optional [ typing . Dict [ str , float ]] = None ,
seed : typing . Optional [ int ] = None
) - > vertexai . language_models . MultiCandidateTextGenerationResponse
Gets model response for a single prompt.
See more: vertexai.language_models.TextGenerationModel.predict
vertexai.language_models.TextGenerationModel.predict_async
predict_async (
prompt : str ,
* ,
max_output_tokens : typing . Optional [ int ] = 128 ,
temperature : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
top_p : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
candidate_count : typing . Optional [ int ] = None ,
grounding_source : typing . Optional [
typing . Union [
vertexai . language_models . _language_models . WebSearch ,
vertexai . language_models . _language_models . VertexAISearch ,
vertexai . language_models . _language_models . InlineContext ,
]
] = None ,
logprobs : typing . Optional [ int ] = None ,
presence_penalty : typing . Optional [ float ] = None ,
frequency_penalty : typing . Optional [ float ] = None ,
logit_bias : typing . Optional [ typing . Dict [ str , float ]] = None ,
seed : typing . Optional [ int ] = None
) - > vertexai . language_models . MultiCandidateTextGenerationResponse
Asynchronously gets model response for a single prompt.
See more: vertexai.language_models.TextGenerationModel.predict_async
vertexai.language_models.TextGenerationModel.predict_streaming
predict_streaming (
prompt : str ,
* ,
max_output_tokens : int = 128 ,
temperature : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
top_p : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
logprobs : typing . Optional [ int ] = None ,
presence_penalty : typing . Optional [ float ] = None ,
frequency_penalty : typing . Optional [ float ] = None ,
logit_bias : typing . Optional [ typing . Dict [ str , float ]] = None ,
seed : typing . Optional [ int ] = None
) - > typing . Iterator [ vertexai . language_models . TextGenerationResponse ]
Gets a streaming model response for a single prompt.
See more: vertexai.language_models.TextGenerationModel.predict_streaming
vertexai.language_models.TextGenerationModel.predict_streaming_async
predict_streaming_async (
prompt : str ,
* ,
max_output_tokens : int = 128 ,
temperature : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
top_p : typing . Optional [ float ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
logprobs : typing . Optional [ int ] = None ,
presence_penalty : typing . Optional [ float ] = None ,
frequency_penalty : typing . Optional [ float ] = None ,
logit_bias : typing . Optional [ typing . Dict [ str , float ]] = None ,
seed : typing . Optional [ int ] = None
) - > typing . AsyncIterator [ vertexai . language_models . TextGenerationResponse ]
Asynchronously gets a streaming model response for a single prompt.
See more: vertexai.language_models.TextGenerationModel.predict_streaming_async
vertexai.language_models.TextGenerationModel.tune_model
tune_model (
training_data : typing . Union [ str , pandas . core . frame . DataFrame ],
* ,
train_steps : typing . Optional [ int ] = None ,
learning_rate_multiplier : typing . Optional [ float ] = None ,
tuning_job_location : typing . Optional [ str ] = None ,
tuned_model_location : typing . Optional [ str ] = None ,
model_display_name : typing . Optional [ str ] = None ,
tuning_evaluation_spec : typing . Optional [
vertexai . language_models . TuningEvaluationSpec
] = None ,
accelerator_type : typing . Optional [ typing . Literal [ "TPU" , "GPU" ]] = None ,
max_context_length : typing . Optional [ str ] = None
) - > vertexai . language_models . _language_models . _LanguageModelTuningJob
Tunes a model based on training data.
See more: vertexai.language_models.TextGenerationModel.tune_model
vertexai.language_models.TextGenerationModel.tune_model_rlhf
tune_model_rlhf (
* ,
prompt_data : typing . Union [ str , pandas . core . frame . DataFrame ],
preference_data : typing . Union [ str , pandas . core . frame . DataFrame ],
model_display_name : typing . Optional [ str ] = None ,
prompt_sequence_length : typing . Optional [ int ] = None ,
target_sequence_length : typing . Optional [ int ] = None ,
reward_model_learning_rate_multiplier : typing . Optional [ float ] = None ,
reinforcement_learning_rate_multiplier : typing . Optional [ float ] = None ,
reward_model_train_steps : typing . Optional [ int ] = None ,
reinforcement_learning_train_steps : typing . Optional [ int ] = None ,
kl_coeff : typing . Optional [ float ] = None ,
default_context : typing . Optional [ str ] = None ,
tuning_job_location : typing . Optional [ str ] = None ,
accelerator_type : typing . Optional [ typing . Literal [ "TPU" , "GPU" ]] = None ,
tuning_evaluation_spec : typing . Optional [
vertexai . language_models . TuningEvaluationSpec
] = None
) - > vertexai . language_models . _language_models . _LanguageModelTuningJob
Tunes a model using reinforcement learning from human feedback.
See more: vertexai.language_models.TextGenerationModel.tune_model_rlhf
vertexai.language_models._language_models._TunableModelMixin
_TunableModelMixin ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a LanguageModel.
See more: vertexai.language_models._language_models._TunableModelMixin
vertexai.language_models._language_models._TunableModelMixin.tune_model
tune_model (
training_data : typing . Union [ str , pandas . core . frame . DataFrame ],
* ,
corpus_data : typing . Optional [ str ] = None ,
queries_data : typing . Optional [ str ] = None ,
test_data : typing . Optional [ str ] = None ,
validation_data : typing . Optional [ str ] = None ,
batch_size : typing . Optional [ int ] = None ,
train_steps : typing . Optional [ int ] = None ,
learning_rate : typing . Optional [ float ] = None ,
learning_rate_multiplier : typing . Optional [ float ] = None ,
tuning_job_location : typing . Optional [ str ] = None ,
tuned_model_location : typing . Optional [ str ] = None ,
model_display_name : typing . Optional [ str ] = None ,
tuning_evaluation_spec : typing . Optional [
vertexai . language_models . TuningEvaluationSpec
] = None ,
default_context : typing . Optional [ str ] = None ,
task_type : typing . Optional [ str ] = None ,
machine_type : typing . Optional [ str ] = None ,
accelerator : typing . Optional [ str ] = None ,
accelerator_count : typing . Optional [ int ] = None ,
accelerator_type : typing . Optional [ typing . Literal [ "TPU" , "GPU" ]] = None ,
max_context_length : typing . Optional [ str ] = None ,
output_dimensionality : typing . Optional [ int ] = None
) - > vertexai . language_models . _language_models . _LanguageModelTuningJob
Tunes a model based on training data.
See more: vertexai.language_models._language_models._TunableModelMixin.tune_model
vertexai.preview.generative_models.AutomaticFunctionCallingResponder
AutomaticFunctionCallingResponder ( max_automatic_function_calls : int = 1 )
Initializes the responder.
See more: vertexai.preview.generative_models.AutomaticFunctionCallingResponder
vertexai.preview.generative_models.CallableFunctionDeclaration
CallableFunctionDeclaration (
name : str ,
function : typing . Callable [[ ... ], typing . Any ],
parameters : typing . Dict [ str , typing . Any ],
description : typing . Optional [ str ] = None ,
)
Constructs a FunctionDeclaration.
See more: vertexai.preview.generative_models.CallableFunctionDeclaration
vertexai.preview.generative_models.CallableFunctionDeclaration.from_func
from_func (
func : typing . Callable [[ ... ], typing . Any ],
) - > vertexai . generative_models . _generative_models . CallableFunctionDeclaration
Automatically creates a CallableFunctionDeclaration from a Python function.
See more: vertexai.preview.generative_models.CallableFunctionDeclaration.from_func
vertexai.preview.generative_models.ChatSession.send_message
send_message (
content : PartsType ,
* ,
generation_config : typing . Optional [ GenerationConfigType ] = None ,
safety_settings : typing . Optional [ SafetySettingsType ] = None ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None ,
labels : typing . Optional [ typing . Dict [ str , str ]] = None ,
stream : bool = False
) - > typing . Union [
vertexai . generative_models . _generative_models . GenerationResponse ,
typing . Iterable [ vertexai . generative_models . _generative_models . GenerationResponse ],
]
Generates content.
See more: vertexai.preview.generative_models.ChatSession.send_message
vertexai.preview.generative_models.ChatSession.send_message_async
send_message_async (
content : PartsType ,
* ,
generation_config : typing . Optional [ GenerationConfigType ] = None ,
safety_settings : typing . Optional [ SafetySettingsType ] = None ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None ,
labels : typing . Optional [ typing . Dict [ str , str ]] = None ,
stream : bool = False
) - > typing . Union [
typing . Awaitable [ vertexai . generative_models . _generative_models . GenerationResponse ],
typing . Awaitable [
typing . AsyncIterable [
vertexai . generative_models . _generative_models . GenerationResponse
]
],
]
Generates content asynchronously.
See more: vertexai.preview.generative_models.ChatSession.send_message_async
vertexai.preview.generative_models.FunctionDeclaration
FunctionDeclaration (
* ,
name : str ,
parameters : typing . Dict [ str , typing . Any ],
description : typing . Optional [ str ] = None ,
response : typing . Optional [ typing . Dict [ str , typing . Any ]] = None
)
Constructs a FunctionDeclaration.
See more: vertexai.preview.generative_models.FunctionDeclaration
vertexai.preview.generative_models.GenerationConfig
GenerationConfig (
* ,
temperature : typing . Optional [ float ] = None ,
top_p : typing . Optional [ float ] = None ,
top_k : typing . Optional [ int ] = None ,
candidate_count : typing . Optional [ int ] = None ,
max_output_tokens : typing . Optional [ int ] = None ,
stop_sequences : typing . Optional [ typing . List [ str ]] = None ,
presence_penalty : typing . Optional [ float ] = None ,
frequency_penalty : typing . Optional [ float ] = None ,
response_mime_type : typing . Optional [ str ] = None ,
response_schema : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
seed : typing . Optional [ int ] = None ,
audio_timestamp : typing . Optional [ bool ] = None ,
routing_config : typing . Optional [ RoutingConfig ] = None ,
logprobs : typing . Optional [ int ] = None ,
response_logprobs : typing . Optional [ bool ] = None ,
response_modalities : typing . Optional [ typing . List [ GenerationConfig . Modality ]] = None ,
model_config : typing . Optional [ GenerationConfig . ModelConfig ] = None
)
Constructs a GenerationConfig object.
See more: vertexai.preview.generative_models.GenerationConfig
vertexai.preview.generative_models.GenerationConfig.ModelConfig.__delattr__
__delattr__ ( key )
Delete the value on the given field.
See more: vertexai.preview.generative_models.GenerationConfig.ModelConfig. delattr
vertexai.preview.generative_models.GenerationConfig.ModelConfig.__eq__
__eq__ ( other )
Return True if the messages are equal, False otherwise.
See more: vertexai.preview.generative_models.GenerationConfig.ModelConfig. eq
vertexai.preview.generative_models.GenerationConfig.ModelConfig.__ne__
__ne__ ( other )
Return True if the messages are unequal, False otherwise.
See more: vertexai.preview.generative_models.GenerationConfig.ModelConfig. ne
vertexai.preview.generative_models.GenerationConfig.ModelConfig.__setattr__
__setattr__ ( key , value )
Set the value on the given field.
See more: vertexai.preview.generative_models.GenerationConfig.ModelConfig. setattr
vertexai.preview.generative_models.GenerationConfig.RoutingConfig.AutoRoutingMode
AutoRoutingMode (
* ,
model_routing_preference : google . cloud . aiplatform_v1beta1 . types . content . GenerationConfig . RoutingConfig . AutoRoutingMode . ModelRoutingPreference
)
AutoRouingMode constructor
.
See more: vertexai.preview.generative_models.GenerationConfig.RoutingConfig.AutoRoutingMode
vertexai.preview.generative_models.GenerationConfig.RoutingConfig.ManualRoutingMode
ManualRoutingMode ( * , model_name : str )
ManualRoutingMode constructor
.
See more: vertexai.preview.generative_models.GenerationConfig.RoutingConfig.ManualRoutingMode
vertexai.preview.generative_models.GenerativeModel.compute_tokens
compute_tokens (
contents : ContentsType ,
) - > google . cloud . aiplatform_v1beta1 . types . llm_utility_service . ComputeTokensResponse
Computes tokens.
See more: vertexai.preview.generative_models.GenerativeModel.compute_tokens
vertexai.preview.generative_models.GenerativeModel.compute_tokens_async
compute_tokens_async (
contents : ContentsType ,
) - > google . cloud . aiplatform_v1beta1 . types . llm_utility_service . ComputeTokensResponse
Computes tokens asynchronously.
See more: vertexai.preview.generative_models.GenerativeModel.compute_tokens_async
vertexai.preview.generative_models.GenerativeModel.count_tokens
count_tokens (
contents : ContentsType ,
* ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None
) - > google . cloud . aiplatform_v1beta1 . types . prediction_service . CountTokensResponse
Counts tokens.
See more: vertexai.preview.generative_models.GenerativeModel.count_tokens
vertexai.preview.generative_models.GenerativeModel.count_tokens_async
count_tokens_async (
contents : ContentsType ,
* ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None
) - > google . cloud . aiplatform_v1beta1 . types . prediction_service . CountTokensResponse
Counts tokens asynchronously.
See more: vertexai.preview.generative_models.GenerativeModel.count_tokens_async
vertexai.preview.generative_models.GenerativeModel.from_cached_content
from_cached_content (
cached_content : typing . Union [ str , CachedContent ],
* ,
generation_config : typing . Optional [ GenerationConfigType ] = None ,
safety_settings : typing . Optional [ SafetySettingsType ] = None
) - > _GenerativeModel
Creates a model from cached content.
See more: vertexai.preview.generative_models.GenerativeModel.from_cached_content
vertexai.preview.generative_models.GenerativeModel.generate_content
generate_content (
contents : ContentsType ,
* ,
generation_config : typing . Optional [ GenerationConfigType ] = None ,
safety_settings : typing . Optional [ SafetySettingsType ] = None ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None ,
tool_config : typing . Optional [
vertexai . generative_models . _generative_models . ToolConfig
] = None ,
labels : typing . Optional [ typing . Dict [ str , str ]] = None ,
stream : bool = False
) - > typing . Union [
vertexai . generative_models . _generative_models . GenerationResponse ,
typing . Iterable [ vertexai . generative_models . _generative_models . GenerationResponse ],
]
Generates content.
See more: vertexai.preview.generative_models.GenerativeModel.generate_content
vertexai.preview.generative_models.GenerativeModel.generate_content_async
generate_content_async (
contents : ContentsType ,
* ,
generation_config : typing . Optional [ GenerationConfigType ] = None ,
safety_settings : typing . Optional [ SafetySettingsType ] = None ,
tools : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Tool ]
] = None ,
tool_config : typing . Optional [
vertexai . generative_models . _generative_models . ToolConfig
] = None ,
labels : typing . Optional [ typing . Dict [ str , str ]] = None ,
stream : bool = False
) - > typing . Union [
vertexai . generative_models . _generative_models . GenerationResponse ,
typing . AsyncIterable [
vertexai . generative_models . _generative_models . GenerationResponse
],
]
Generates content asynchronously.
See more: vertexai.preview.generative_models.GenerativeModel.generate_content_async
vertexai.preview.generative_models.GenerativeModel.set_request_response_logging_config
set_request_response_logging_config (
* ,
enabled : bool ,
sampling_rate : float ,
bigquery_destination : str ,
enable_otel_logging : typing . Optional [ bool ] = None
) - > typing . Union [
google . cloud . aiplatform_v1beta1 . types . endpoint . PublisherModelConfig ,
google . cloud . aiplatform_v1beta1 . types . endpoint . Endpoint ,
]
Sets the request/response logging config.
See more: vertexai.preview.generative_models.GenerativeModel.set_request_response_logging_config
vertexai.preview.generative_models.GenerativeModel.start_chat
start_chat (
* ,
history : typing . Optional [
typing . List [ vertexai . generative_models . _generative_models . Content ]
] = None ,
response_validation : bool = True ,
responder : typing . Optional [
vertexai . generative_models . _generative_models . AutomaticFunctionCallingResponder
] = None
) - > vertexai . generative_models . _generative_models . ChatSession
Creates a stateful chat session.
See more: vertexai.preview.generative_models.GenerativeModel.start_chat
vertexai.preview.generative_models.Image.from_bytes
from_bytes ( data : bytes ) - > vertexai . generative_models . _generative_models . Image
Loads image from image bytes.
See more: vertexai.preview.generative_models.Image.from_bytes
vertexai.preview.generative_models.Image.load_from_file
load_from_file (
location : str ,
) - > vertexai . generative_models . _generative_models . Image
Loads image from file.
See more: vertexai.preview.generative_models.Image.load_from_file
vertexai.preview.generative_models.ResponseBlockedError.with_traceback
Exception.with_traceback(tb) --
set self. traceback to tb and return self.
See more: vertexai.preview.generative_models.ResponseBlockedError.with_traceback
vertexai.preview.generative_models.ResponseValidationError.with_traceback
Exception.with_traceback(tb) --
set self. traceback to tb and return self.
See more: vertexai.preview.generative_models.ResponseValidationError.with_traceback
vertexai.preview.generative_models.SafetySetting
SafetySetting (
* ,
category : google . cloud . aiplatform_v1beta1 . types . content . HarmCategory ,
threshold : google . cloud . aiplatform_v1beta1 . types . content . SafetySetting . HarmBlockThreshold ,
method : typing . Optional [
google . cloud . aiplatform_v1beta1 . types . content . SafetySetting . HarmBlockMethod
] = None
)
Safety settings.
See more: vertexai.preview.generative_models.SafetySetting
vertexai.preview.reasoning_engines.A2aAgent
A2aAgent (
* ,
agent_card : AgentCard ,
task_store_builder : typing . Callable [[ ... ], TaskStore ] = None ,
task_store_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
agent_executor_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
agent_executor_builder : typing . Optional [
typing . Callable [[ ... ], AgentExecutor ]
] = None ,
request_handler_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
request_handler_builder : typing . Optional [
typing . Callable [[ ... ], RequestHandler ]
] = None ,
extended_agent_card : AgentCard = None
)
Initializes the A2A agent.
See more: vertexai.preview.reasoning_engines.A2aAgent
vertexai.preview.reasoning_engines.A2aAgent.clone
clone () - > vertexai . preview . reasoning_engines . templates . a2a . A2aAgent
Clones the A2A agent.
See more: vertexai.preview.reasoning_engines.A2aAgent.clone
vertexai.preview.reasoning_engines.A2aAgent.on_message_send_stream
on_message_send_stream (
request : Request , context : ServerCallContext
) - > collections . abc . AsyncIterator [ str ]
Handles A2A streaming requests via SSE.
See more: vertexai.preview.reasoning_engines.A2aAgent.on_message_send_stream
vertexai.preview.reasoning_engines.A2aAgent.on_resubscribe_to_task
on_resubscribe_to_task (
request : Request , context : ServerCallContext
) - > collections . abc . AsyncIterator [ str ]
Handles A2A task resubscription requests via SSE.
See more: vertexai.preview.reasoning_engines.A2aAgent.on_resubscribe_to_task
vertexai.preview.reasoning_engines.A2aAgent.register_operations
register_operations () - > typing . Dict [ str , typing . List [ str ]]
Registers the operations of the A2A Agent.
See more: vertexai.preview.reasoning_engines.A2aAgent.register_operations
vertexai.preview.reasoning_engines.A2aAgent.set_up
set_up ()
Sets up the A2A application.
See more: vertexai.preview.reasoning_engines.A2aAgent.set_up
vertexai.preview.reasoning_engines.AG2Agent
AG2Agent (
model : str ,
runnable_name : str ,
* ,
api_type : typing . Optional [ str ] = None ,
llm_config : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
system_instruction : typing . Optional [ str ] = None ,
runnable_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
runnable_builder : typing . Optional [ typing . Callable [[ ... ], ConversableAgent ]] = None ,
tools : typing . Optional [ typing . Sequence [ typing . Callable [[ ... ], typing . Any ]]] = None ,
enable_tracing : bool = False
)
Initializes the AG2 Agent.
See more: vertexai.preview.reasoning_engines.AG2Agent
vertexai.preview.reasoning_engines.AG2Agent.clone
clone () - > vertexai . preview . reasoning_engines . templates . ag2 . AG2Agent
Returns a clone of the AG2Agent.
See more: vertexai.preview.reasoning_engines.AG2Agent.clone
vertexai.preview.reasoning_engines.AG2Agent.query
query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
max_turns : typing . Optional [ int ] = None ,
** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Queries the Agent with the given input.
See more: vertexai.preview.reasoning_engines.AG2Agent.query
vertexai.preview.reasoning_engines.AG2Agent.set_up
set_up ()
Sets up the agent for execution of queries at runtime.
See more: vertexai.preview.reasoning_engines.AG2Agent.set_up
vertexai.preview.reasoning_engines.AdkApp
AdkApp (
* ,
agent : BaseAgent ,
plugins : typing . Optional [ typing . List [ BasePlugin ]] = None ,
enable_tracing : typing . Optional [ bool ] = None ,
session_service_builder : typing . Optional [
typing . Callable [[ ... ], BaseSessionService ]
] = None ,
artifact_service_builder : typing . Optional [
typing . Callable [[ ... ], BaseArtifactService ]
] = None ,
memory_service_builder : typing . Optional [
typing . Callable [[ ... ], BaseMemoryService ]
] = None ,
credential_service_builder : typing . Optional [
typing . Callable [[ ... ], BaseCredentialService ]
] = None ,
env_vars : typing . Optional [ typing . Dict [ str , str ]] = None
)
An ADK Application.
See more: vertexai.preview.reasoning_engines.AdkApp
vertexai.preview.reasoning_engines.AdkApp.async_add_session_to_memory
async_add_session_to_memory ( * , session : typing . Dict [ str , typing . Any ])
Generates memories.
See more: vertexai.preview.reasoning_engines.AdkApp.async_add_session_to_memory
vertexai.preview.reasoning_engines.AdkApp.async_create_session
async_create_session (
* ,
user_id : str ,
session_id : typing . Optional [ str ] = None ,
state : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
** kwargs
)
Creates a new session.
See more: vertexai.preview.reasoning_engines.AdkApp.async_create_session
vertexai.preview.reasoning_engines.AdkApp.async_delete_session
async_delete_session ( * , user_id : str , session_id : str , ** kwargs )
Deletes a session for the given user.
See more: vertexai.preview.reasoning_engines.AdkApp.async_delete_session
vertexai.preview.reasoning_engines.AdkApp.async_get_session
async_get_session ( * , user_id : str , session_id : str , ** kwargs )
Get a session for the given user.
See more: vertexai.preview.reasoning_engines.AdkApp.async_get_session
vertexai.preview.reasoning_engines.AdkApp.async_list_sessions
async_list_sessions ( * , user_id : str , ** kwargs )
List sessions for the given user.
See more: vertexai.preview.reasoning_engines.AdkApp.async_list_sessions
vertexai.preview.reasoning_engines.AdkApp.async_search_memory
async_search_memory ( * , user_id : str , query : str )
Searches memories for the given user.
See more: vertexai.preview.reasoning_engines.AdkApp.async_search_memory
vertexai.preview.reasoning_engines.AdkApp.async_stream_query
async_stream_query (
* ,
message : typing . Union [ str , typing . Dict [ str , typing . Any ]],
user_id : str ,
session_id : typing . Optional [ str ] = None ,
run_config : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
** kwargs
) - > typing . AsyncIterable [ typing . Dict [ str , typing . Any ]]
Streams responses asynchronously from the ADK application.
See more: vertexai.preview.reasoning_engines.AdkApp.async_stream_query
vertexai.preview.reasoning_engines.AdkApp.bidi_stream_query
bidi_stream_query ( request_queue : typing . Any ) - > typing . AsyncIterable [ typing . Any ]
Bidi streaming query the ADK application.
See more: vertexai.preview.reasoning_engines.AdkApp.bidi_stream_query
vertexai.preview.reasoning_engines.AdkApp.clone
clone ()
Returns a clone of the ADK application.
See more: vertexai.preview.reasoning_engines.AdkApp.clone
vertexai.preview.reasoning_engines.AdkApp.create_session
create_session (
* ,
user_id : str ,
session_id : typing . Optional [ str ] = None ,
state : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
** kwargs
)
Creates a new session.
See more: vertexai.preview.reasoning_engines.AdkApp.create_session
vertexai.preview.reasoning_engines.AdkApp.delete_session
delete_session ( * , user_id : str , session_id : str , ** kwargs )
Deletes a session for the given user.
See more: vertexai.preview.reasoning_engines.AdkApp.delete_session
vertexai.preview.reasoning_engines.AdkApp.get_session
get_session ( * , user_id : str , session_id : str , ** kwargs )
Get a session for the given user.
See more: vertexai.preview.reasoning_engines.AdkApp.get_session
vertexai.preview.reasoning_engines.AdkApp.list_sessions
list_sessions ( * , user_id : str , ** kwargs )
List sessions for the given user.
See more: vertexai.preview.reasoning_engines.AdkApp.list_sessions
vertexai.preview.reasoning_engines.AdkApp.register_operations
register_operations () - > typing . Dict [ str , typing . List [ str ]]
Registers the operations of the ADK application.
See more: vertexai.preview.reasoning_engines.AdkApp.register_operations
vertexai.preview.reasoning_engines.AdkApp.set_up
set_up ()
Sets up the ADK application.
See more: vertexai.preview.reasoning_engines.AdkApp.set_up
vertexai.preview.reasoning_engines.AdkApp.stream_query
stream_query (
* ,
message : typing . Union [ str , typing . Dict [ str , typing . Any ]],
user_id : str ,
session_id : typing . Optional [ str ] = None ,
run_config : typing . Optional [ typing . Dict [ str , typing . Any ]] = None ,
** kwargs
)
Streams responses from the ADK application in response to a message.
See more: vertexai.preview.reasoning_engines.AdkApp.stream_query
vertexai.preview.reasoning_engines.LangchainAgent
LangchainAgent (
model : str ,
* ,
system_instruction : typing . Optional [ str ] = None ,
prompt : typing . Optional [ RunnableSerializable ] = None ,
tools : typing . Optional [ _ToolsType ] = None ,
output_parser : typing . Optional [ RunnableSerializable ] = None ,
chat_history : typing . Optional [ GetSessionHistoryCallable ] = None ,
model_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
model_tool_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
agent_executor_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
runnable_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
model_builder : typing . Optional [ typing . Callable ] = None ,
runnable_builder : typing . Optional [ typing . Callable ] = None ,
enable_tracing : bool = False
)
Initializes the LangchainAgent.
See more: vertexai.preview.reasoning_engines.LangchainAgent
vertexai.preview.reasoning_engines.LangchainAgent.clone
clone () - > vertexai . preview . reasoning_engines . templates . langchain . LangchainAgent
Returns a clone of the LangchainAgent.
See more: vertexai.preview.reasoning_engines.LangchainAgent.clone
vertexai.preview.reasoning_engines.LangchainAgent.query
query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
config : typing . Optional [ RunnableConfig ] = None ,
** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Queries the Agent with the given input and config.
See more: vertexai.preview.reasoning_engines.LangchainAgent.query
vertexai.preview.reasoning_engines.LangchainAgent.set_up
set_up ()
Sets up the agent for execution of queries at runtime.
See more: vertexai.preview.reasoning_engines.LangchainAgent.set_up
vertexai.preview.reasoning_engines.LangchainAgent.stream_query
stream_query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
config : typing . Optional [ RunnableConfig ] = None ,
** kwargs
) - > typing . Iterable [ typing . Any ]
Stream queries the Agent with the given input and config.
See more: vertexai.preview.reasoning_engines.LangchainAgent.stream_query
vertexai.preview.reasoning_engines.LanggraphAgent
LanggraphAgent (
model : str ,
* ,
tools : typing . Optional [ typing . Sequence [ _ToolLike ]] = None ,
model_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
model_tool_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
model_builder : typing . Optional [ typing . Callable [[ ... ], BaseLanguageModel ]] = None ,
runnable_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
runnable_builder : typing . Optional [
typing . Callable [[ ... ], RunnableSerializable ]
] = None ,
checkpointer_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
checkpointer_builder : typing . Optional [
typing . Callable [[ ... ], BaseCheckpointSaver ]
] = None ,
enable_tracing : bool = False
)
Initializes the LangGraph Agent.
See more: vertexai.preview.reasoning_engines.LanggraphAgent
vertexai.preview.reasoning_engines.LanggraphAgent.clone
clone () - > vertexai . preview . reasoning_engines . templates . langgraph . LanggraphAgent
Returns a clone of the LanggraphAgent.
See more: vertexai.preview.reasoning_engines.LanggraphAgent.clone
vertexai.preview.reasoning_engines.LanggraphAgent.get_state
get_state (
config : typing . Optional [ RunnableConfig ] = None , ** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Gets the current state of the Agent.
See more: vertexai.preview.reasoning_engines.LanggraphAgent.get_state
vertexai.preview.reasoning_engines.LanggraphAgent.get_state_history
get_state_history (
config : typing . Optional [ RunnableConfig ] = None , ** kwargs : typing . Any
) - > typing . Iterable [ typing . Any ]
Gets the state history of the Agent.
See more: vertexai.preview.reasoning_engines.LanggraphAgent.get_state_history
vertexai.preview.reasoning_engines.LanggraphAgent.query
query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
config : typing . Optional [ RunnableConfig ] = None ,
** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Queries the Agent with the given input and config.
See more: vertexai.preview.reasoning_engines.LanggraphAgent.query
vertexai.preview.reasoning_engines.LanggraphAgent.register_operations
register_operations () - > typing . Mapping [ str , typing . Sequence [ str ]]
Registers the operations of the Agent.
See more: vertexai.preview.reasoning_engines.LanggraphAgent.register_operations
vertexai.preview.reasoning_engines.LanggraphAgent.set_up
set_up ()
Sets up the agent for execution of queries at runtime.
See more: vertexai.preview.reasoning_engines.LanggraphAgent.set_up
vertexai.preview.reasoning_engines.LanggraphAgent.stream_query
stream_query (
* ,
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]],
config : typing . Optional [ RunnableConfig ] = None ,
** kwargs
) - > typing . Iterable [ typing . Any ]
Stream queries the Agent with the given input and config.
See more: vertexai.preview.reasoning_engines.LanggraphAgent.stream_query
vertexai.preview.reasoning_engines.LanggraphAgent.update_state
update_state (
config : typing . Optional [ RunnableConfig ] = None , ** kwargs : typing . Any
) - > typing . Dict [ str , typing . Any ]
Updates the state of the Agent.
See more: vertexai.preview.reasoning_engines.LanggraphAgent.update_state
vertexai.preview.reasoning_engines.LlamaIndexQueryPipelineAgent
LlamaIndexQueryPipelineAgent (
model : str ,
* ,
system_instruction : typing . Optional [ str ] = None ,
prompt : typing . Optional [ QueryComponent ] = None ,
model_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
model_builder : typing . Optional [ typing . Callable [[ ... ], FunctionCallingLLM ]] = None ,
retriever_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
retriever_builder : typing . Optional [ typing . Callable [[ ... ], QueryComponent ]] = None ,
response_synthesizer_kwargs : typing . Optional [
typing . Mapping [ str , typing . Any ]
] = None ,
response_synthesizer_builder : typing . Optional [
typing . Callable [[ ... ], QueryComponent ]
] = None ,
runnable_kwargs : typing . Optional [ typing . Mapping [ str , typing . Any ]] = None ,
runnable_builder : typing . Optional [ typing . Callable [[ ... ], QueryPipeline ]] = None ,
enable_tracing : bool = False
)
Initializes the LlamaIndexQueryPipelineAgent.
See more: vertexai.preview.reasoning_engines.LlamaIndexQueryPipelineAgent
vertexai.preview.reasoning_engines.LlamaIndexQueryPipelineAgent.clone
clone () - > (
vertexai . preview . reasoning_engines . templates . llama_index . LlamaIndexQueryPipelineAgent
)
Returns a clone of the LlamaIndexQueryPipelineAgent.
See more: vertexai.preview.reasoning_engines.LlamaIndexQueryPipelineAgent.clone
vertexai.preview.reasoning_engines.LlamaIndexQueryPipelineAgent.query
query (
input : typing . Union [ str , typing . Mapping [ str , typing . Any ]], ** kwargs : typing . Any
) - > typing . Union [
str ,
typing . Dict [ str , typing . Any ],
typing . Sequence [ typing . Union [ str , typing . Dict [ str , typing . Any ]]],
]
Queries the Agent with the given input and config.
See more: vertexai.preview.reasoning_engines.LlamaIndexQueryPipelineAgent.query
vertexai.preview.reasoning_engines.LlamaIndexQueryPipelineAgent.set_up
set_up ()
Sets up the agent for execution of queries at runtime.
See more: vertexai.preview.reasoning_engines.LlamaIndexQueryPipelineAgent.set_up
vertexai.preview.reasoning_engines.Queryable.query
query ( ** kwargs )
Runs the Reasoning Engine to serve the user query.
See more: vertexai.preview.reasoning_engines.Queryable.query
vertexai.preview.reasoning_engines.ReasoningEngine
ReasoningEngine ( reasoning_engine_name : str )
Retrieves a Reasoning Engine resource.
See more: vertexai.preview.reasoning_engines.ReasoningEngine
vertexai.preview.reasoning_engines.ReasoningEngine.create
create (
reasoning_engine : typing . Union [
vertexai . reasoning_engines . _reasoning_engines . Queryable ,
vertexai . reasoning_engines . _reasoning_engines . OperationRegistrable ,
],
* ,
requirements : typing . Optional [ typing . Union [ str , typing . Sequence [ str ]]] = None ,
reasoning_engine_name : typing . Optional [ str ] = None ,
display_name : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
gcs_dir_name : str = "reasoning_engine" ,
sys_version : typing . Optional [ str ] = None ,
extra_packages : typing . Optional [ typing . Sequence [ str ]] = None
) - > vertexai . reasoning_engines . _reasoning_engines . ReasoningEngine
Creates a new ReasoningEngine.
See more: vertexai.preview.reasoning_engines.ReasoningEngine.create
vertexai.preview.reasoning_engines.ReasoningEngine.delete
delete ( sync : bool = True ) - > None
Deletes this Vertex AI resource.
See more: vertexai.preview.reasoning_engines.ReasoningEngine.delete
vertexai.preview.reasoning_engines.ReasoningEngine.list
list (
filter : typing . Optional [ str ] = None ,
order_by : typing . Optional [ str ] = None ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
parent : typing . Optional [ str ] = None ,
) - > typing . List [ google . cloud . aiplatform . base . VertexAiResourceNoun ]
List all instances of this Vertex AI Resource.
See more: vertexai.preview.reasoning_engines.ReasoningEngine.list
vertexai.preview.reasoning_engines.ReasoningEngine.operation_schemas
operation_schemas () - > typing . Sequence [ typing . Dict [ str , typing . Any ]]
Returns the (Open)API schemas for the Reasoning Engine.
See more: vertexai.preview.reasoning_engines.ReasoningEngine.operation_schemas
vertexai.preview.reasoning_engines.ReasoningEngine.to_dict
to_dict () - > typing . Dict [ str , typing . Any ]
Returns the resource proto as a dictionary.
See more: vertexai.preview.reasoning_engines.ReasoningEngine.to_dict
vertexai.preview.reasoning_engines.ReasoningEngine.update
update (
* ,
reasoning_engine : typing . Optional [
typing . Union [
vertexai . reasoning_engines . _reasoning_engines . Queryable ,
vertexai . reasoning_engines . _reasoning_engines . OperationRegistrable ,
]
] = None ,
requirements : typing . Optional [ typing . Union [ str , typing . Sequence [ str ]]] = None ,
display_name : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
gcs_dir_name : str = "reasoning_engine" ,
sys_version : typing . Optional [ str ] = None ,
extra_packages : typing . Optional [ typing . Sequence [ str ]] = None
) - > vertexai . reasoning_engines . _reasoning_engines . ReasoningEngine
Updates an existing ReasoningEngine.
See more: vertexai.preview.reasoning_engines.ReasoningEngine.update
vertexai.preview.reasoning_engines.ReasoningEngine.wait
wait ()
Helper method that blocks until all futures are complete.
See more: vertexai.preview.reasoning_engines.ReasoningEngine.wait
vertexai.preview.tuning.SourceModel
SourceModel ( base_model : str , custom_base_model : str = "" )
Initializes SourceModel.
See more: vertexai.preview.tuning.SourceModel
vertexai.preview.tuning.TuningJob
TuningJob ( tuning_job_name : str )
Initializes class with project, location, and api_client.
See more: vertexai.preview.tuning.TuningJob
vertexai.preview.tuning.TuningJob.list
list (
filter : typing . Optional [ str ] = None ,
) - > typing . List [ vertexai . tuning . _tuning . TuningJob ]
Lists TuningJobs.
See more: vertexai.preview.tuning.TuningJob.list
vertexai.preview.tuning.TuningJob.refresh
refresh () - > vertexai . tuning . _tuning . TuningJob
Refreshed the tuning job from the service.
See more: vertexai.preview.tuning.TuningJob.refresh
vertexai.preview.tuning.TuningJob.to_dict
to_dict () - > typing . Dict [ str , typing . Any ]
Returns the resource proto as a dictionary.
See more: vertexai.preview.tuning.TuningJob.to_dict
vertexai.preview.tuning.sft.SupervisedTuningJob.list
list (
filter : typing . Optional [ str ] = None ,
) - > typing . List [ vertexai . tuning . _tuning . TuningJob ]
Lists TuningJobs.
See more: vertexai.preview.tuning.sft.SupervisedTuningJob.list
vertexai.preview.tuning.sft.SupervisedTuningJob.refresh
refresh () - > vertexai . tuning . _tuning . TuningJob
Refreshed the tuning job from the service.
See more: vertexai.preview.tuning.sft.SupervisedTuningJob.refresh
vertexai.preview.tuning.sft.SupervisedTuningJob.to_dict
to_dict () - > typing . Dict [ str , typing . Any ]
Returns the resource proto as a dictionary.
See more: vertexai.preview.tuning.sft.SupervisedTuningJob.to_dict
vertexai.preview.vision_models.ControlReferenceImage
ControlReferenceImage (
reference_id ,
image : typing . Optional [
typing . Union [ bytes , vertexai . vision_models . Image , str ]
] = None ,
control_type : typing . Optional [
typing . Literal [ "default" , "scribble" , "face_mesh" , "canny" ]
] = None ,
enable_control_image_computation : typing . Optional [ bool ] = False ,
)
Creates a ControlReferenceImage object.
See more: vertexai.preview.vision_models.ControlReferenceImage
vertexai.preview.vision_models.GeneratedImage
GeneratedImage (
image_bytes : typing . Optional [ bytes ],
generation_parameters : typing . Dict [ str , typing . Any ],
gcs_uri : typing . Optional [ str ] = None ,
)
Creates a GeneratedImage object.
See more: vertexai.preview.vision_models.GeneratedImage
vertexai.preview.vision_models.GeneratedImage.load_from_file
load_from_file ( location : str ) - > vertexai . preview . vision_models . GeneratedImage
Loads image from file.
See more: vertexai.preview.vision_models.GeneratedImage.load_from_file
vertexai.preview.vision_models.GeneratedImage.save
save ( location : str , include_generation_parameters : bool = True )
Saves image to a file.
See more: vertexai.preview.vision_models.GeneratedImage.save
vertexai.preview.vision_models.GeneratedImage.show
show ()
Shows the image.
See more: vertexai.preview.vision_models.GeneratedImage.show
vertexai.preview.vision_models.GeneratedMask
GeneratedMask (
image_bytes : typing . Optional [ bytes ],
gcs_uri : typing . Optional [ str ] = None ,
labels : typing . Optional [
typing . List [ vertexai . preview . vision_models . EntityLabel ]
] = None ,
)
Creates a GeneratedMask object.
See more: vertexai.preview.vision_models.GeneratedMask
vertexai.preview.vision_models.GeneratedMask.load_from_file
load_from_file ( location : str ) - > vertexai . vision_models . Image
Loads image from local file or Google Cloud Storage.
See more: vertexai.preview.vision_models.GeneratedMask.load_from_file
vertexai.preview.vision_models.GeneratedMask.save
save ( location : str )
Saves image to a file.
See more: vertexai.preview.vision_models.GeneratedMask.save
vertexai.preview.vision_models.GeneratedMask.show
show ()
Shows the image.
See more: vertexai.preview.vision_models.GeneratedMask.show
vertexai.preview.vision_models.Image
Image (
image_bytes : typing . Optional [ bytes ] = None , gcs_uri : typing . Optional [ str ] = None
)
Creates an Image object.
See more: vertexai.preview.vision_models.Image
vertexai.preview.vision_models.Image.load_from_file
load_from_file ( location : str ) - > vertexai . vision_models . Image
Loads image from local file or Google Cloud Storage.
See more: vertexai.preview.vision_models.Image.load_from_file
vertexai.preview.vision_models.Image.save
save ( location : str )
Saves image to a file.
See more: vertexai.preview.vision_models.Image.save
vertexai.preview.vision_models.Image.show
show ()
Shows the image.
See more: vertexai.preview.vision_models.Image.show
vertexai.preview.vision_models.ImageCaptioningModel
ImageCaptioningModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageCaptioningModel
vertexai.preview.vision_models.ImageCaptioningModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageCaptioningModel.from_pretrained
vertexai.preview.vision_models.ImageCaptioningModel.get_captions
get_captions (
image : vertexai . vision_models . Image ,
* ,
number_of_results : int = 1 ,
language : str = "en" ,
output_gcs_uri : typing . Optional [ str ] = None
) - > typing . List [ str ]
Generates captions for a given image.
See more: vertexai.preview.vision_models.ImageCaptioningModel.get_captions
vertexai.preview.vision_models.ImageGenerationModel
ImageGenerationModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageGenerationModel
vertexai.preview.vision_models.ImageGenerationModel.edit_image
edit_image (
* ,
prompt : str ,
base_image : typing . Optional [ vertexai . vision_models . Image ] = None ,
mask : typing . Optional [ vertexai . vision_models . Image ] = None ,
reference_images : typing . Optional [
typing . List [ vertexai . vision_models . ReferenceImage ]
] = None ,
negative_prompt : typing . Optional [ str ] = None ,
number_of_images : int = 1 ,
guidance_scale : typing . Optional [ float ] = None ,
edit_mode : typing . Optional [
typing . Literal [
"inpainting-insert" , "inpainting-remove" , "outpainting" , "product-image"
]
] = None ,
mask_mode : typing . Optional [
typing . Literal [ "background" , "foreground" , "semantic" ]
] = None ,
segmentation_classes : typing . Optional [ typing . List [ str ]] = None ,
mask_dilation : typing . Optional [ float ] = None ,
product_position : typing . Optional [ typing . Literal [ "fixed" , "reposition" ]] = None ,
output_mime_type : typing . Optional [ typing . Literal [ "image/png" , "image/jpeg" ]] = None ,
compression_quality : typing . Optional [ float ] = None ,
language : typing . Optional [ str ] = None ,
seed : typing . Optional [ int ] = None ,
output_gcs_uri : typing . Optional [ str ] = None ,
safety_filter_level : typing . Optional [
typing . Literal [ "block_most" , "block_some" , "block_few" , "block_fewest" ]
] = None ,
person_generation : typing . Optional [
typing . Literal [ "dont_allow" , "allow_adult" , "allow_all" ]
] = None
) - > vertexai . preview . vision_models . ImageGenerationResponse
Edits an existing image based on text prompt.
See more: vertexai.preview.vision_models.ImageGenerationModel.edit_image
vertexai.preview.vision_models.ImageGenerationModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageGenerationModel.from_pretrained
vertexai.preview.vision_models.ImageGenerationModel.generate_images
generate_images (
prompt : str ,
* ,
negative_prompt : typing . Optional [ str ] = None ,
number_of_images : int = 1 ,
aspect_ratio : typing . Optional [
typing . Literal [ "1:1" , "9:16" , "16:9" , "4:3" , "3:4" ]
] = None ,
guidance_scale : typing . Optional [ float ] = None ,
language : typing . Optional [ str ] = None ,
seed : typing . Optional [ int ] = None ,
output_gcs_uri : typing . Optional [ str ] = None ,
add_watermark : typing . Optional [ bool ] = True ,
safety_filter_level : typing . Optional [
typing . Literal [ "block_most" , "block_some" , "block_few" , "block_fewest" ]
] = None ,
person_generation : typing . Optional [
typing . Literal [ "dont_allow" , "allow_adult" , "allow_all" ]
] = None
) - > vertexai . preview . vision_models . ImageGenerationResponse
Generates images from text prompt.
See more: vertexai.preview.vision_models.ImageGenerationModel.generate_images
vertexai.preview.vision_models.ImageGenerationModel.upscale_image
upscale_image (
image : typing . Union [
vertexai . vision_models . Image , vertexai . preview . vision_models . GeneratedImage
],
new_size : typing . Optional [ int ] = 2048 ,
upscale_factor : typing . Optional [ typing . Literal [ "x2" , "x4" ]] = None ,
output_mime_type : typing . Optional [
typing . Literal [ "image/png" , "image/jpeg" ]
] = "image/png" ,
output_compression_quality : typing . Optional [ int ] = None ,
output_gcs_uri : typing . Optional [ str ] = None ,
) - > vertexai . vision_models . Image
Upscales an image.
See more: vertexai.preview.vision_models.ImageGenerationModel.upscale_image
vertexai.preview.vision_models.ImageGenerationResponse.__getitem__
__getitem__ ( idx : int ) - > vertexai . preview . vision_models . GeneratedImage
Gets the generated image by index.
See more: vertexai.preview.vision_models.ImageGenerationResponse. getitem
vertexai.preview.vision_models.ImageGenerationResponse.__iter__
__iter__ () - > typing . Iterator [ vertexai . preview . vision_models . GeneratedImage ]
Iterates through the generated images.
See more: vertexai.preview.vision_models.ImageGenerationResponse. iter
vertexai.preview.vision_models.ImageQnAModel
ImageQnAModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageQnAModel
vertexai.preview.vision_models.ImageQnAModel.ask_question
ask_question (
image : vertexai . vision_models . Image , question : str , * , number_of_results : int = 1
) - > typing . List [ str ]
Answers questions about an image.
See more: vertexai.preview.vision_models.ImageQnAModel.ask_question
vertexai.preview.vision_models.ImageQnAModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageQnAModel.from_pretrained
vertexai.preview.vision_models.ImageSegmentationModel
ImageSegmentationModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageSegmentationModel
vertexai.preview.vision_models.ImageSegmentationModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageSegmentationModel.from_pretrained
vertexai.preview.vision_models.ImageSegmentationModel.segment_image
segment_image (
base_image : vertexai . vision_models . Image ,
prompt : typing . Optional [ str ] = None ,
scribble : typing . Optional [ vertexai . preview . vision_models . Scribble ] = None ,
mode : typing . Literal [
"foreground" , "background" , "semantic" , "prompt" , "interactive"
] = "foreground" ,
max_predictions : typing . Optional [ int ] = None ,
confidence_threshold : typing . Optional [ float ] = 0.1 ,
mask_dilation : typing . Optional [ float ] = None ,
binary_color_threshold : typing . Optional [ float ] = None ,
) - > vertexai . preview . vision_models . ImageSegmentationResponse
Segments an image.
See more: vertexai.preview.vision_models.ImageSegmentationModel.segment_image
vertexai.preview.vision_models.ImageSegmentationResponse.__getitem__
__getitem__ ( idx : int ) - > vertexai . preview . vision_models . GeneratedMask
Gets the generated masks by index.
See more: vertexai.preview.vision_models.ImageSegmentationResponse. getitem
vertexai.preview.vision_models.ImageSegmentationResponse.__iter__
__iter__ () - > typing . Iterator [ vertexai . preview . vision_models . GeneratedMask ]
Iterates through the generated masks.
See more: vertexai.preview.vision_models.ImageSegmentationResponse. iter
vertexai.preview.vision_models.ImageTextModel
ImageTextModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageTextModel
vertexai.preview.vision_models.ImageTextModel.ask_question
ask_question (
image : vertexai . vision_models . Image , question : str , * , number_of_results : int = 1
) - > typing . List [ str ]
Answers questions about an image.
See more: vertexai.preview.vision_models.ImageTextModel.ask_question
vertexai.preview.vision_models.ImageTextModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.preview.vision_models.ImageTextModel.from_pretrained
vertexai.preview.vision_models.ImageTextModel.get_captions
get_captions (
image : vertexai . vision_models . Image ,
* ,
number_of_results : int = 1 ,
language : str = "en" ,
output_gcs_uri : typing . Optional [ str ] = None
) - > typing . List [ str ]
Generates captions for a given image.
See more: vertexai.preview.vision_models.ImageTextModel.get_captions
vertexai.preview.vision_models.MaskReferenceImage
MaskReferenceImage (
reference_id ,
image : typing . Optional [
typing . Union [ bytes , vertexai . vision_models . Image , str ]
] = None ,
mask_mode : typing . Optional [
typing . Literal [
"default" , "user_provided" , "background" , "foreground" , "semantic"
]
] = None ,
dilation : typing . Optional [ float ] = None ,
segmentation_classes : typing . Optional [ typing . List [ int ]] = None ,
)
Creates a MaskReferenceImage object.
See more: vertexai.preview.vision_models.MaskReferenceImage
vertexai.preview.vision_models.MultiModalEmbeddingModel
MultiModalEmbeddingModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.preview.vision_models.MultiModalEmbeddingModel
vertexai.preview.vision_models.MultiModalEmbeddingModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.preview.vision_models.MultiModalEmbeddingModel.from_pretrained
vertexai.preview.vision_models.MultiModalEmbeddingModel.get_embeddings
get_embeddings (
image : typing . Optional [ vertexai . vision_models . Image ] = None ,
video : typing . Optional [ vertexai . vision_models . Video ] = None ,
contextual_text : typing . Optional [ str ] = None ,
dimension : typing . Optional [ int ] = None ,
video_segment_config : typing . Optional [
vertexai . vision_models . VideoSegmentConfig
] = None ,
) - > vertexai . vision_models . MultiModalEmbeddingResponse
Gets embedding vectors from the provided image.
See more: vertexai.preview.vision_models.MultiModalEmbeddingModel.get_embeddings
vertexai.preview.vision_models.RawReferenceImage
RawReferenceImage (
reference_id ,
image : typing . Optional [
typing . Union [ bytes , vertexai . vision_models . Image , str ]
] = None ,
)
Creates a ReferenceImage object.
See more: vertexai.preview.vision_models.RawReferenceImage
vertexai.preview.vision_models.ReferenceImage
ReferenceImage (
reference_id ,
image : typing . Optional [
typing . Union [ bytes , vertexai . vision_models . Image , str ]
] = None ,
)
Creates a ReferenceImage object.
See more: vertexai.preview.vision_models.ReferenceImage
vertexai.preview.vision_models.Scribble
Scribble ( image_bytes : typing . Optional [ bytes ], gcs_uri : typing . Optional [ str ] = None )
Creates a Scribble object.
See more: vertexai.preview.vision_models.Scribble
vertexai.preview.vision_models.StyleReferenceImage
StyleReferenceImage (
reference_id ,
image : typing . Optional [
typing . Union [ bytes , vertexai . vision_models . Image , str ]
] = None ,
style_description : typing . Optional [ str ] = None ,
)
Creates a StyleReferenceImage object.
See more: vertexai.preview.vision_models.StyleReferenceImage
vertexai.preview.vision_models.SubjectReferenceImage
SubjectReferenceImage (
reference_id ,
image : typing . Optional [
typing . Union [ bytes , vertexai . vision_models . Image , str ]
] = None ,
subject_description : typing . Optional [ str ] = None ,
subject_type : typing . Optional [
typing . Literal [ "default" , "person" , "animal" , "product" ]
] = None ,
)
Creates a SubjectReferenceImage object.
See more: vertexai.preview.vision_models.SubjectReferenceImage
vertexai.preview.vision_models.Video
Video (
video_bytes : typing . Optional [ bytes ] = None , gcs_uri : typing . Optional [ str ] = None
)
Creates a Video object.
See more: vertexai.preview.vision_models.Video
vertexai.preview.vision_models.Video.load_from_file
load_from_file ( location : str ) - > vertexai . vision_models . Video
Loads video from local file or Google Cloud Storage.
See more: vertexai.preview.vision_models.Video.load_from_file
vertexai.preview.vision_models.Video.save
save ( location : str )
Saves video to a file.
See more: vertexai.preview.vision_models.Video.save
vertexai.preview.vision_models.VideoEmbedding
VideoEmbedding (
start_offset_sec : int , end_offset_sec : int , embedding : typing . List [ float ]
)
Creates a VideoEmbedding object.
See more: vertexai.preview.vision_models.VideoEmbedding
vertexai.preview.vision_models.VideoSegmentConfig
VideoSegmentConfig (
start_offset_sec : int = 0 , end_offset_sec : int = 120 , interval_sec : int = 16
)
Creates a VideoSegmentConfig object.
See more: vertexai.preview.vision_models.VideoSegmentConfig
vertexai.preview.vision_models.WatermarkVerificationModel
WatermarkVerificationModel (
model_id : str , endpoint_name : typing . Optional [ str ] = None
)
Creates a _ModelGardenModel.
See more: vertexai.preview.vision_models.WatermarkVerificationModel
vertexai.preview.vision_models.WatermarkVerificationModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.preview.vision_models.WatermarkVerificationModel.from_pretrained
vertexai.preview.vision_models.WatermarkVerificationModel.verify_image
verify_image (
image : vertexai . vision_models . Image ,
) - > vertexai . preview . vision_models . WatermarkVerificationResponse
Verifies the watermark of an image.
See more: vertexai.preview.vision_models.WatermarkVerificationModel.verify_image
vertexai.resources.preview.ml_monitoring.ModelMonitor
ModelMonitor (
model_monitor_name : str ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
)
Initializes class with project, location, and api_client.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor
vertexai.resources.preview.ml_monitoring.ModelMonitor.create
create (
model_name : str ,
model_version_id : str ,
training_dataset : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput
] = None ,
display_name : typing . Optional [ str ] = None ,
model_monitoring_schema : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . schema . ModelMonitoringSchema
] = None ,
tabular_objective_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . TabularObjective
] = None ,
output_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . output . OutputSpec
] = None ,
notification_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . notification . NotificationSpec
] = None ,
explanation_spec : typing . Optional [
google . cloud . aiplatform_v1beta1 . types . explanation . ExplanationSpec
] = None ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
model_monitor_id : typing . Optional [ str ] = None ,
) - > vertexai . resources . preview . ml_monitoring . model_monitors . ModelMonitor
Creates a new ModelMonitor.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.create
vertexai.resources.preview.ml_monitoring.ModelMonitor.create_schedule
create_schedule (
cron : str ,
target_dataset : vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput ,
display_name : typing . Optional [ str ] = None ,
model_monitoring_job_display_name : typing . Optional [ str ] = None ,
start_time : typing . Optional [ google . protobuf . timestamp_pb2 . Timestamp ] = None ,
end_time : typing . Optional [ google . protobuf . timestamp_pb2 . Timestamp ] = None ,
tabular_objective_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . TabularObjective
] = None ,
baseline_dataset : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput
] = None ,
output_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . output . OutputSpec
] = None ,
notification_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . notification . NotificationSpec
] = None ,
explanation_spec : typing . Optional [
google . cloud . aiplatform_v1beta1 . types . explanation . ExplanationSpec
] = None ,
) - > google . cloud . aiplatform_v1beta1 . types . schedule . Schedule
Creates a new Scheduled run for model monitoring job.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.create_schedule
vertexai.resources.preview.ml_monitoring.ModelMonitor.delete
delete ( force : bool = False , sync : bool = True ) - > None
Force delete the model monitor.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.delete
vertexai.resources.preview.ml_monitoring.ModelMonitor.delete_model_monitoring_job
delete_model_monitoring_job ( model_monitoring_job_name : str ) - > None
Delete a model monitoring job.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.delete_model_monitoring_job
vertexai.resources.preview.ml_monitoring.ModelMonitor.delete_schedule
delete_schedule ( schedule_name : str ) - > None
Deletes an existing Schedule.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.delete_schedule
vertexai.resources.preview.ml_monitoring.ModelMonitor.get_model_monitoring_job
get_model_monitoring_job (
model_monitoring_job_name : str ,
) - > vertexai . resources . preview . ml_monitoring . model_monitors . ModelMonitoringJob
Get the specified ModelMonitoringJob.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.get_model_monitoring_job
vertexai.resources.preview.ml_monitoring.ModelMonitor.get_schedule
get_schedule (
schedule_name : str ,
) - > google . cloud . aiplatform_v1beta1 . types . schedule . Schedule
Gets an existing Schedule.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.get_schedule
vertexai.resources.preview.ml_monitoring.ModelMonitor.get_schema
get_schema () - > (
google . cloud . aiplatform_v1beta1 . types . model_monitor . ModelMonitoringSchema
)
Get the schema of the model monitor.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.get_schema
vertexai.resources.preview.ml_monitoring.ModelMonitor.list
list (
filter : typing . Optional [ str ] = None ,
order_by : typing . Optional [ str ] = None ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
parent : typing . Optional [ str ] = None ,
) - > typing . List [ google . cloud . aiplatform . base . VertexAiResourceNoun ]
List all instances of this Vertex AI Resource.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.list
vertexai.resources.preview.ml_monitoring.ModelMonitor.list_jobs
list_jobs (
page_size : typing . Optional [ int ] = None , page_token : typing . Optional [ str ] = None
) - > ListJobsResponse . list_jobs
List ModelMonitoringJobs.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.list_jobs
vertexai.resources.preview.ml_monitoring.ModelMonitor.list_schedules
list_schedules (
filter : typing . Optional [ str ] = None ,
page_size : typing . Optional [ int ] = None ,
page_token : typing . Optional [ str ] = None ,
) - > ListSchedulesResponse . list_schedules
List Schedules.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.list_schedules
vertexai.resources.preview.ml_monitoring.ModelMonitor.pause_schedule
pause_schedule ( schedule_name : str ) - > None
Pauses an existing Schedule.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.pause_schedule
vertexai.resources.preview.ml_monitoring.ModelMonitor.resume_schedule
resume_schedule ( schedule_name : str ) - > None
Resumes an existing Schedule.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.resume_schedule
vertexai.resources.preview.ml_monitoring.ModelMonitor.run
run (
target_dataset : vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput ,
display_name : typing . Optional [ str ] = None ,
model_monitoring_job_id : typing . Optional [ str ] = None ,
sync : typing . Optional [ bool ] = False ,
tabular_objective_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . TabularObjective
] = None ,
baseline_dataset : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput
] = None ,
output_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . output . OutputSpec
] = None ,
notification_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . notification . NotificationSpec
] = None ,
explanation_spec : typing . Optional [
google . cloud . aiplatform_v1beta1 . types . explanation . ExplanationSpec
] = None ,
) - > vertexai . resources . preview . ml_monitoring . model_monitors . ModelMonitoringJob
Creates a new ModelMonitoringJob.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.run
vertexai.resources.preview.ml_monitoring.ModelMonitor.search_alerts
search_alerts (
stats_name : typing . Optional [ str ] = None ,
objective_type : typing . Optional [ str ] = None ,
model_monitoring_job_name : typing . Optional [ str ] = None ,
start_time : typing . Optional [ google . protobuf . timestamp_pb2 . Timestamp ] = None ,
end_time : typing . Optional [ google . protobuf . timestamp_pb2 . Timestamp ] = None ,
page_size : typing . Optional [ int ] = None ,
page_token : typing . Optional [ str ] = None ,
) - > typing . Dict [ str , typing . Any ]
Search ModelMonitoringAlerts.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.search_alerts
vertexai.resources.preview.ml_monitoring.ModelMonitor.search_metrics
search_metrics (
stats_name : typing . Optional [ str ] = None ,
objective_type : typing . Optional [ str ] = None ,
model_monitoring_job_name : typing . Optional [ str ] = None ,
schedule_name : typing . Optional [ str ] = None ,
algorithm : typing . Optional [ str ] = None ,
start_time : typing . Optional [ google . protobuf . timestamp_pb2 . Timestamp ] = None ,
end_time : typing . Optional [ google . protobuf . timestamp_pb2 . Timestamp ] = None ,
page_size : typing . Optional [ int ] = None ,
page_token : typing . Optional [ str ] = None ,
) - > MetricsSearchResponse . monitoring_stats
Search ModelMonitoringStats.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.search_metrics
vertexai.resources.preview.ml_monitoring.ModelMonitor.show_feature_attribution_drift_stats
show_feature_attribution_drift_stats ( model_monitoring_job_name : str ) - > None
The method to visualize the feature attribution drift result from a model monitoring job as a histogram chart and a table.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.show_feature_attribution_drift_stats
vertexai.resources.preview.ml_monitoring.ModelMonitor.show_feature_drift_stats
show_feature_drift_stats ( model_monitoring_job_name : str ) - > None
The method to visualize the feature drift result from a model monitoring job as a histogram chart and a table.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.show_feature_drift_stats
vertexai.resources.preview.ml_monitoring.ModelMonitor.show_output_drift_stats
show_output_drift_stats ( model_monitoring_job_name : str ) - > None
The method to visualize the prediction output drift result from a model monitoring job as a histogram chart and a table.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.show_output_drift_stats
vertexai.resources.preview.ml_monitoring.ModelMonitor.to_dict
to_dict () - > typing . Dict [ str , typing . Any ]
Returns the resource proto as a dictionary.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.to_dict
vertexai.resources.preview.ml_monitoring.ModelMonitor.update
update (
display_name : typing . Optional [ str ] = None ,
training_dataset : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput
] = None ,
model_monitoring_schema : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . schema . ModelMonitoringSchema
] = None ,
tabular_objective_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . TabularObjective
] = None ,
output_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . output . OutputSpec
] = None ,
notification_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . notification . NotificationSpec
] = None ,
explanation_spec : typing . Optional [
google . cloud . aiplatform_v1beta1 . types . explanation . ExplanationSpec
] = None ,
) - > vertexai . resources . preview . ml_monitoring . model_monitors . ModelMonitor
Updates an existing ModelMonitor.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.update
vertexai.resources.preview.ml_monitoring.ModelMonitor.update_schedule
update_schedule (
schedule_name : str ,
display_name : typing . Optional [ str ] = None ,
model_monitoring_job_display_name : typing . Optional [ str ] = None ,
cron : typing . Optional [ str ] = None ,
baseline_dataset : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput
] = None ,
target_dataset : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput
] = None ,
tabular_objective_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . TabularObjective
] = None ,
output_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . output . OutputSpec
] = None ,
notification_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . notification . NotificationSpec
] = None ,
explanation_spec : typing . Optional [
google . cloud . aiplatform_v1beta1 . types . explanation . ExplanationSpec
] = None ,
end_time : typing . Optional [ google . protobuf . timestamp_pb2 . Timestamp ] = None ,
) - > google . cloud . aiplatform_v1beta1 . types . schedule . Schedule
Updates an existing Schedule.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.update_schedule
vertexai.resources.preview.ml_monitoring.ModelMonitor.wait
wait ()
Helper method that blocks until all futures are complete.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitor.wait
vertexai.resources.preview.ml_monitoring.ModelMonitoringJob
ModelMonitoringJob (
model_monitoring_job_name : str ,
model_monitor_id : typing . Optional [ str ] = None ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
)
Initializes class with project, location, and api_client.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitoringJob
vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.create
create (
model_monitor_name : typing . Optional [ str ] = None ,
target_dataset : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput
] = None ,
display_name : typing . Optional [ str ] = None ,
model_monitoring_job_id : typing . Optional [ str ] = None ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
baseline_dataset : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . MonitoringInput
] = None ,
tabular_objective_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . objective . TabularObjective
] = None ,
output_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . output . OutputSpec
] = None ,
notification_spec : typing . Optional [
vertexai . resources . preview . ml_monitoring . spec . notification . NotificationSpec
] = None ,
explanation_spec : typing . Optional [
google . cloud . aiplatform_v1beta1 . types . explanation . ExplanationSpec
] = None ,
sync : bool = False ,
) - > vertexai . resources . preview . ml_monitoring . model_monitors . ModelMonitoringJob
Creates a new ModelMonitoringJob.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.create
vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.delete
delete () - > None
Deletes an Model Monitoring Job.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.delete
vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.done
done () - > bool
Method indicating whether a job has completed.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.done
vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.list
list (
filter : typing . Optional [ str ] = None ,
order_by : typing . Optional [ str ] = None ,
project : typing . Optional [ str ] = None ,
location : typing . Optional [ str ] = None ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
parent : typing . Optional [ str ] = None ,
) - > typing . List [ google . cloud . aiplatform . base . VertexAiResourceNoun ]
List all instances of this Vertex AI Resource.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.list
vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.to_dict
to_dict () - > typing . Dict [ str , typing . Any ]
Returns the resource proto as a dictionary.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.to_dict
vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.wait
wait ()
Helper method that blocks until all futures are complete.
See more: vertexai.resources.preview.ml_monitoring.ModelMonitoringJob.wait
vertexai.resources.preview.ml_monitoring.spec.ModelMonitoringSchema.to_json
to_json ( output_dir : typing . Optional [ str ] = None ) - > str
Transform ModelMonitoringSchema to json format.
See more: vertexai.resources.preview.ml_monitoring.spec.ModelMonitoringSchema.to_json
vertexai.vision_models.GeneratedImage
GeneratedImage (
image_bytes : typing . Optional [ bytes ],
generation_parameters : typing . Dict [ str , typing . Any ],
gcs_uri : typing . Optional [ str ] = None ,
)
Creates a GeneratedImage object.
See more: vertexai.vision_models.GeneratedImage
vertexai.vision_models.GeneratedImage.load_from_file
load_from_file ( location : str ) - > vertexai . preview . vision_models . GeneratedImage
Loads image from file.
See more: vertexai.vision_models.GeneratedImage.load_from_file
vertexai.vision_models.GeneratedImage.save
save ( location : str , include_generation_parameters : bool = True )
Saves image to a file.
See more: vertexai.vision_models.GeneratedImage.save
vertexai.vision_models.GeneratedImage.show
show ()
Shows the image.
See more: vertexai.vision_models.GeneratedImage.show
vertexai.vision_models.Image
Image (
image_bytes : typing . Optional [ bytes ] = None , gcs_uri : typing . Optional [ str ] = None
)
Creates an Image object.
See more: vertexai.vision_models.Image
vertexai.vision_models.Image.load_from_file
load_from_file ( location : str ) - > vertexai . vision_models . Image
Loads image from local file or Google Cloud Storage.
See more: vertexai.vision_models.Image.load_from_file
vertexai.vision_models.Image.save
save ( location : str )
Saves image to a file.
See more: vertexai.vision_models.Image.save
vertexai.vision_models.Image.show
show ()
Shows the image.
See more: vertexai.vision_models.Image.show
vertexai.vision_models.ImageCaptioningModel
ImageCaptioningModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.vision_models.ImageCaptioningModel
vertexai.vision_models.ImageCaptioningModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.vision_models.ImageCaptioningModel.from_pretrained
vertexai.vision_models.ImageCaptioningModel.get_captions
get_captions (
image : vertexai . vision_models . Image ,
* ,
number_of_results : int = 1 ,
language : str = "en" ,
output_gcs_uri : typing . Optional [ str ] = None
) - > typing . List [ str ]
Generates captions for a given image.
See more: vertexai.vision_models.ImageCaptioningModel.get_captions
vertexai.vision_models.ImageGenerationModel
ImageGenerationModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.vision_models.ImageGenerationModel
vertexai.vision_models.ImageGenerationModel.edit_image
edit_image (
* ,
prompt : str ,
base_image : typing . Optional [ vertexai . vision_models . Image ] = None ,
mask : typing . Optional [ vertexai . vision_models . Image ] = None ,
reference_images : typing . Optional [
typing . List [ vertexai . vision_models . ReferenceImage ]
] = None ,
negative_prompt : typing . Optional [ str ] = None ,
number_of_images : int = 1 ,
guidance_scale : typing . Optional [ float ] = None ,
edit_mode : typing . Optional [
typing . Literal [
"inpainting-insert" , "inpainting-remove" , "outpainting" , "product-image"
]
] = None ,
mask_mode : typing . Optional [
typing . Literal [ "background" , "foreground" , "semantic" ]
] = None ,
segmentation_classes : typing . Optional [ typing . List [ str ]] = None ,
mask_dilation : typing . Optional [ float ] = None ,
product_position : typing . Optional [ typing . Literal [ "fixed" , "reposition" ]] = None ,
output_mime_type : typing . Optional [ typing . Literal [ "image/png" , "image/jpeg" ]] = None ,
compression_quality : typing . Optional [ float ] = None ,
language : typing . Optional [ str ] = None ,
seed : typing . Optional [ int ] = None ,
output_gcs_uri : typing . Optional [ str ] = None ,
safety_filter_level : typing . Optional [
typing . Literal [ "block_most" , "block_some" , "block_few" , "block_fewest" ]
] = None ,
person_generation : typing . Optional [
typing . Literal [ "dont_allow" , "allow_adult" , "allow_all" ]
] = None
) - > vertexai . preview . vision_models . ImageGenerationResponse
Edits an existing image based on text prompt.
See more: vertexai.vision_models.ImageGenerationModel.edit_image
vertexai.vision_models.ImageGenerationModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.vision_models.ImageGenerationModel.from_pretrained
vertexai.vision_models.ImageGenerationModel.generate_images
generate_images (
prompt : str ,
* ,
negative_prompt : typing . Optional [ str ] = None ,
number_of_images : int = 1 ,
aspect_ratio : typing . Optional [
typing . Literal [ "1:1" , "9:16" , "16:9" , "4:3" , "3:4" ]
] = None ,
guidance_scale : typing . Optional [ float ] = None ,
language : typing . Optional [ str ] = None ,
seed : typing . Optional [ int ] = None ,
output_gcs_uri : typing . Optional [ str ] = None ,
add_watermark : typing . Optional [ bool ] = True ,
safety_filter_level : typing . Optional [
typing . Literal [ "block_most" , "block_some" , "block_few" , "block_fewest" ]
] = None ,
person_generation : typing . Optional [
typing . Literal [ "dont_allow" , "allow_adult" , "allow_all" ]
] = None
) - > vertexai . preview . vision_models . ImageGenerationResponse
Generates images from text prompt.
See more: vertexai.vision_models.ImageGenerationModel.generate_images
vertexai.vision_models.ImageGenerationModel.upscale_image
upscale_image (
image : typing . Union [
vertexai . vision_models . Image , vertexai . preview . vision_models . GeneratedImage
],
new_size : typing . Optional [ int ] = 2048 ,
upscale_factor : typing . Optional [ typing . Literal [ "x2" , "x4" ]] = None ,
output_mime_type : typing . Optional [
typing . Literal [ "image/png" , "image/jpeg" ]
] = "image/png" ,
output_compression_quality : typing . Optional [ int ] = None ,
output_gcs_uri : typing . Optional [ str ] = None ,
) - > vertexai . vision_models . Image
Upscales an image.
See more: vertexai.vision_models.ImageGenerationModel.upscale_image
vertexai.vision_models.ImageGenerationResponse.__getitem__
__getitem__ ( idx : int ) - > vertexai . preview . vision_models . GeneratedImage
Gets the generated image by index.
See more: vertexai.vision_models.ImageGenerationResponse. getitem
vertexai.vision_models.ImageGenerationResponse.__iter__
__iter__ () - > typing . Iterator [ vertexai . preview . vision_models . GeneratedImage ]
Iterates through the generated images.
See more: vertexai.vision_models.ImageGenerationResponse. iter
vertexai.vision_models.ImageQnAModel
ImageQnAModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.vision_models.ImageQnAModel
vertexai.vision_models.ImageQnAModel.ask_question
ask_question (
image : vertexai . vision_models . Image , question : str , * , number_of_results : int = 1
) - > typing . List [ str ]
Answers questions about an image.
See more: vertexai.vision_models.ImageQnAModel.ask_question
vertexai.vision_models.ImageQnAModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.vision_models.ImageQnAModel.from_pretrained
vertexai.vision_models.ImageTextModel
ImageTextModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.vision_models.ImageTextModel
vertexai.vision_models.ImageTextModel.ask_question
ask_question (
image : vertexai . vision_models . Image , question : str , * , number_of_results : int = 1
) - > typing . List [ str ]
Answers questions about an image.
See more: vertexai.vision_models.ImageTextModel.ask_question
vertexai.vision_models.ImageTextModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.vision_models.ImageTextModel.from_pretrained
vertexai.vision_models.ImageTextModel.get_captions
get_captions (
image : vertexai . vision_models . Image ,
* ,
number_of_results : int = 1 ,
language : str = "en" ,
output_gcs_uri : typing . Optional [ str ] = None
) - > typing . List [ str ]
Generates captions for a given image.
See more: vertexai.vision_models.ImageTextModel.get_captions
vertexai.vision_models.MultiModalEmbeddingModel
MultiModalEmbeddingModel ( model_id : str , endpoint_name : typing . Optional [ str ] = None )
Creates a _ModelGardenModel.
See more: vertexai.vision_models.MultiModalEmbeddingModel
vertexai.vision_models.MultiModalEmbeddingModel.from_pretrained
from_pretrained ( model_name : str ) - > vertexai . _model_garden . _model_garden_models . T
Loads a _ModelGardenModel.
See more: vertexai.vision_models.MultiModalEmbeddingModel.from_pretrained
vertexai.vision_models.MultiModalEmbeddingModel.get_embeddings
get_embeddings (
image : typing . Optional [ vertexai . vision_models . Image ] = None ,
video : typing . Optional [ vertexai . vision_models . Video ] = None ,
contextual_text : typing . Optional [ str ] = None ,
dimension : typing . Optional [ int ] = None ,
video_segment_config : typing . Optional [
vertexai . vision_models . VideoSegmentConfig
] = None ,
) - > vertexai . vision_models . MultiModalEmbeddingResponse
Gets embedding vectors from the provided image.
See more: vertexai.vision_models.MultiModalEmbeddingModel.get_embeddings
vertexai.vision_models.Video
Video (
video_bytes : typing . Optional [ bytes ] = None , gcs_uri : typing . Optional [ str ] = None
)
Creates a Video object.
See more: vertexai.vision_models.Video
vertexai.vision_models.Video.load_from_file
load_from_file ( location : str ) - > vertexai . vision_models . Video
Loads video from local file or Google Cloud Storage.
See more: vertexai.vision_models.Video.load_from_file
vertexai.vision_models.Video.save
save ( location : str )
Saves video to a file.
See more: vertexai.vision_models.Video.save
vertexai.vision_models.VideoEmbedding
VideoEmbedding (
start_offset_sec : int , end_offset_sec : int , embedding : typing . List [ float ]
)
Creates a VideoEmbedding object.
See more: vertexai.vision_models.VideoEmbedding
vertexai.vision_models.VideoSegmentConfig
VideoSegmentConfig (
start_offset_sec : int = 0 , end_offset_sec : int = 120 , interval_sec : int = 16
)
Creates a VideoSegmentConfig object.
See more: vertexai.vision_models.VideoSegmentConfig
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
