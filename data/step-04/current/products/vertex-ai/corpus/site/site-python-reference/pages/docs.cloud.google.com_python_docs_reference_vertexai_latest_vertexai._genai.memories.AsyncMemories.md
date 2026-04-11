---
title: "Class AsyncMemories (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.memories.AsyncMemories
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vertexai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.memories.AsyncMemories
  title: "Class AsyncMemories (1.144.0) \_|\_ Python client libraries \_|\_ Google\
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
Class AsyncMemories (1.144.0)
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
AsyncMemories ( api_client_ : google . genai . _api_client . BaseApiClient )
API documentation for AsyncMemories class.
Properties
revisions
API documentation for revisions property.
Methods
create
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
Parameters
Name
Description
name
str
Required. The name of the memory to create.
fact
str
Required. The fact to be stored in the memory.
scope
dict[str, str]
Required. The scope of the memory. For example, {"user_id": "123"}.
config
AgentEngineMemoryConfigOrDict
Optional. The configuration for the memory.
Returns
Type
Description
AgentEngineMemoryOperation
The operation for creating the memory.
delete
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
Parameters
Name
Description
name
str
Required. The name of the Agent Engine memory to be deleted. Format: projects/{project}/locations/{location}/reasoningEngines/{resource_id}/memories/{memory} .
config
DeleteAgentEngineMemoryConfig
Optional. Additional configurations for deleting the Agent Engine.
generate
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
Parameters
Name
Description
name
str
Required. The name of the agent engine to generate memories for.
vertex_session_source
GenerateMemoriesRequestVertexSessionSource
Optional. The vertex session source to use for generating memories. Only one of vertex_session_source, direct_contents_source, or direct_memories_source can be specified.
direct_contents_source
GenerateMemoriesRequestDirectContentsSource
Optional. The direct contents source to use for generating memories. Only one of vertex_session_source, direct_contents_source, or direct_memories_source can be specified.
direct_memories_source
GenerateMemoriesRequestDirectMemoriesSource
Optional. The direct memories source to use for generating memories. Only one of vertex_session_source, direct_contents_source, or direct_memories_source can be specified.
scope
dict[str, str]
Optional. The scope of the memories to generate. This is optional if vertex_session_source is used, otherwise it must be specified.
config
GenerateMemoriesConfig
Optional. The configuration for the memories to generate.
Returns
Type
Description
AgentEngineGenerateMemoriesOperation
The operation for generating the memories.
get
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
Parameter
Name
Description
name
str
Required. A fully-qualified resource name or ID such as "projects/123/locations/us-central1/reasoningEngines/456/memories/789" or a shortened name such as "reasoningEngines/456/memories/789".
list
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
Parameters
Name
Description
name
str
Required. The name of the agent engine to list memories for.
config
ListAgentEngineMemoryConfig
Optional. The configuration for the memories to list.
Returns
Type
Description
AsyncPager[Memory]
An async pager of memories.
purge
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
Parameters
Name
Description
name
str
Required. The name of the Agent Engine to purge memories from.
filter
str
Optional. The standard list filter to determine which memories to purge.
filter_groups
list[MemoryConjunctionFilter]
Optional. Metadata filters that will be applied to the memories' metadata using OR logic. Filters are defined using disjunctive normal form (OR of ANDs).
force
bool
Optional. Whether to force the purge operation. If false, the operation will be staged but not executed.
config
PurgeAgentEngineMemoriesConfig
Optional. The configuration for the purge operation.
Returns
Type
Description
AgentEnginePurgeMemoriesOperation
The operation for purging the memories.
retrieve
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
Parameters
Name
Description
name
str
Required. The name of the agent engine to retrieve memories for.
scope
dict[str, str]
Required. The scope of the memories to retrieve. For example, {"user_id": "123"}.
similarity_search_params
RetrieveMemoriesRequestSimilaritySearchParams
Optional. The similarity search parameters to use for retrieving memories.
simple_retrieval_params
RetrieveMemoriesRequestSimpleRetrievalParams
Optional. The simple retrieval parameters to use for retrieving memories.
config
RetrieveAgentEngineMemoriesConfig
Optional. The configuration for the memories to retrieve.
Returns
Type
Description
AsyncPager[RetrieveMemoriesResponseRetrievedMemory]
An async pager of retrieved memories.
rollback
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
Parameters
Name
Description
name
str
Required. The name of the memory to rollback.
target_revision_id
str
Required. The revision ID to roll back to
config
RollbackAgentEngineMemoryConfig
Optional. The configuration for the rollback.
Returns
Type
Description
AgentEngineRollbackMemoryOperation
The operation for rolling back the memory.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
