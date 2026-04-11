---
title: "Class AsyncEvals (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.evals.AsyncEvals
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vertexai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.evals.AsyncEvals
  title: "Class AsyncEvals (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class AsyncEvals (1.144.0)
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
AsyncEvals ( api_client_ : google . genai . _api_client . BaseApiClient )
API documentation for AsyncEvals class.
Methods
batch_evaluate
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
create_evaluation_item
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
create_evaluation_metric
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
create_evaluation_run
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
create_evaluation_set
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
evaluate_instances
evaluate_instances (
* , metric_config : vertexai . _genai . types . common . _EvaluateInstancesRequestParameters
) - > vertexai . _genai . types . common . EvaluateInstancesResponse
Evaluates an instance of a model.
generate_conversation_scenarios
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
get_evaluation_item
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
get_evaluation_metric
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
get_evaluation_run
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
Exceptions
Type
Description
ValueError
If the name is empty or invalid.
get_evaluation_set
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
list_evaluation_metrics
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
