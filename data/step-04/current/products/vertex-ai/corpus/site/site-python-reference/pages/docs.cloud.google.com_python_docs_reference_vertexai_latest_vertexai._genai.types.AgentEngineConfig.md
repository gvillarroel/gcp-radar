---
title: "Class AgentEngineConfig (1.144.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.types.AgentEngineConfig
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vertexai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.types.AgentEngineConfig
  title: "Class AgentEngineConfig (1.144.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class AgentEngineConfig (1.144.0)
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
Config for agent engine methods.
Methods
AgentEngineConfig
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
Raises [ ValidationError ][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.
self is explicitly positional-only to allow self as a field name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
