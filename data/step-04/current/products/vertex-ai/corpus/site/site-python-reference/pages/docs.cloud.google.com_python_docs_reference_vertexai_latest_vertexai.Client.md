---
title: "Class Client (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai.Client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vertexai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai.Client
  title: "Class Client (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Client (1.144.0)
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
Gen AI Client for the Vertex SDK.
Use this client to interact with Vertex-specific Gemini features.
Properties
agent_engines
API documentation for agent_engines property.
aio
API documentation for aio property.
datasets
API documentation for datasets property.
evals
API documentation for evals property.
prompt_optimizer
API documentation for prompt_optimizer property.
prompts
API documentation for prompts property.
Methods
Client
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
Parameters
Name
Description
api_key
str
The `API key
credentials
google.auth.credentials.Credentials
The credentials to use for authentication when calling the Vertex AI APIs. Credentials can be obtained from environment variables and default credentials. For more information, see Set up Application Default Credentials https://cloud.google.com/docs/authentication/provide-credentials-adc _.
project
str
The Google Cloud project ID https://cloud.google.com/vertex-ai/docs/start/cloud-environment _ to use for quota. Can be obtained from environment variables (for example, GOOGLE_CLOUD_PROJECT ).
location
str
The location https://cloud.google.com/vertex-ai/generative-ai/docs/learn/locations _ to send API requests to (for example, us-central1 ). Can be obtained from environment variables.
debug_config
DebugConfig
Config settings that control network behavior of the client. This is typically used when running test code.
http_options
Union[HttpOptions, HttpOptionsDict]
Http options to use for the client.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
