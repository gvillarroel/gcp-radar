---
title: "Class Prompts (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.prompts.Prompts
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vertexai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.prompts.Prompts
  title: "Class Prompts (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Prompts (1.144.0)
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
Prompts ( api_client_ : google . genai . _api_client . BaseApiClient )
API documentation for Prompts class.
Methods
create
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
This method waits for prompt creation to be complete before returning.
create_version
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
When creating new prompt version resources, this waits for
the create operation to complete before returning.
delete
delete (
* ,
prompt_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . DeletePromptConfig ] = None
) - > None
Deletes a prompt resource.
Exceptions
Type
Description
TimeoutError
If the delete operation does not complete within the timeout.
ValueError
If the delete operation fails.
delete_version
delete_version (
* ,
prompt_id : str ,
version_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . DeletePromptConfig ] = None
) - > None
Deletes a prompt version resource.
Exceptions
Type
Description
TimeoutError
If the delete operation does not complete within the timeout.
ValueError
If the delete operation fails.
get
get (
* ,
prompt_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . GetPromptConfig ] = None
) - > vertexai . _genai . types . common . Prompt
Gets a prompt resource from a Vertex Dataset.
get_version
get_version (
* ,
prompt_id : str ,
version_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . GetPromptConfig ] = None
) - > vertexai . _genai . types . common . Prompt
Gets a prompt resource from a Vertex Dataset.
launch_optimization_job
launch_optimization_job (
method : vertexai . _genai . types . common . PromptOptimizerMethod ,
config : typing . Union [
vertexai . _genai . types . common . PromptOptimizerConfig ,
vertexai . _genai . types . common . PromptOptimizerConfigDict ,
],
) - > vertexai . _genai . types . common . CustomJob
Call PO-Data optimizer.
list
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
This method retrieves all the prompts from the project provided in the
vertexai.Client constructor and returns a list of prompt references containing the prompt_id and model for the prompt.
To get the full types.Prompt resource for a PromptRef after calling this method, use the get() method with the prompt_id as the prompt_id argument.
Example usage:
# Using an iterator
prompt_refs = client.prompt_management.list_prompts()
for prompt_ref in prompt_refs:
client.prompt_management.get(prompt_id=prompt_ref.prompt_id)
# Using a list
prompts_list = list(client.prompt_management.list_prompts())
client.prompt_management.get(prompt_id=prompts_list[0].prompt_id)
list_versions
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
This method retrieves all the prompt versions for a provided prompt_id.
To get the full types.Prompt resource for a PromptVersionRef after calling this method, use the get() method with the returned prompt_id and version_id.
Example usage:
# Using an iterator
prompt_version_refs = client.prompt_management.list_versions(prompt_id="123")
for version_ref in prompt_version_refs:
client.prompt_management.get(prompt_id=version_ref.prompt_id, version_id=version_ref.version_id)
# Using a list
prompt_versions_list = list(client.prompt_management.list_versions(prompt_id="123"))
client.prompt_management.get(prompt_id=prompt_versions_list[0].prompt_id, version_id=prompt_versions_list[0].version_id)
optimize
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
Example usage:
client = vertexai.Client (project=PROJECT_NAME, location='us-central1')
prompt = "Generate system instructions for analyzing medical articles"
response = client.prompts.optimize(prompt=prompt)
restore_version
restore_version (
* ,
prompt_id : str ,
version_id : str ,
config : typing . Optional [ vertexai . _genai . types . common . RestoreVersionConfig ] = None
) - > vertexai . _genai . types . common . Prompt
Restores the provided prompt version to the latest version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
