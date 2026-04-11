---
title: "Code Execution quickstart \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/overview
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/code-execution/quickstart
  title: "Code Execution quickstart \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Agent Builder
Guides
Send feedback
Code Execution quickstart
Stay organized with collections
Save and categorize content based on your preferences.
This page demonstrates how to make direct API calls to
Vertex AI Agent Engine Code Execution to run untrusted code in
an isolated sandbox environment. Direct API calls are useful when you don't want
the agent framework to orchestrate calls for you or if you'd like to integrate
Code Execution with other agent frameworks.
In this quickstart, you perform the follow tasks:
Create an Vertex AI Agent Engine instance to access Code Execution
Create a Code Execution sandbox
(Optional) List and get sandboxes
Execute code in a sandbox
Execute more code using the same sandbox. Notice that the sandbox automatically maintains its state.
Clean up
For more information about using Code Execution with Agent Development Kit
(ADK), see Code Execution tool with
Vertex AI Agent Engine .
Before you begin
Set up your project and environment.
Set up your project
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Note: To enable APIs, you need the serviceusage.services.enable permission.
If you don't have this permission, ask your administrator to grant you
the Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) role.
Get the required roles
To get the permissions that
you need to use Vertex AI Agent Engine,
ask your administrator to grant you the
Vertex AI User ( roles/aiplatform.user )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Set up your environment
This section assumes that you have set up a Python development environment ,
or are using a runtime with a Python development environment (such as Colab).
Install libraries
Install the Vertex AI SDK:
pip install google-cloud-aiplatform> = 1 .112.0
Authenticate to Vertex AI
To authenticate:
Local shell
gcloud init
gcloud auth application - default login
Colab
from google.colab import auth
auth . authenticate_user ()
Create an Vertex AI Agent Engine instance
To use Code Execution, first create an Vertex AI Agent Engine
instance. You don't need to deploy an agent to use Code Execution.
Without deployment, creating an Vertex AI Agent Engine instance should
take a few seconds.
import vertexai
client = vertexai . Client ( project = PROJECT_ID , location = LOCATION )
agent_engine = client . agent_engines . create ()
agent_engine_name = agent_engine . api_resource . name
Replace the following:
PROJECT_ID : Your Google Cloud project ID.
LOCATION : The Google Cloud region for your Vertex AI Agent Engine instance.
See Supported regions for
Vertex AI Agent Engine .
Create a sandbox
Create a sandbox for code execution.
operation = client . agent_engines . sandboxes . create (
spec = { "code_execution_environment" : {}},
name = agent_engine_name ,
config = types . CreateAgentEngineSandboxConfig ( display_name = SANDBOX_DISPLAY_NAME )
)
sandbox_name = operation . response . name
Replace the following:
SANDBOX_DISPLAY_NAME : the human readable name of the code execution sandbox environment.
You can also configure the sandbox settings like coding language and machine config:
operation = client . agent_engines . sandboxes . create (
spec = {
"code_execution_environment" : {
"code_language" : "LANGUAGE_JAVASCRIPT" ,
"machine_config" : "MACHINE_CONFIG_VCPU4_RAM4GIB"
}
},
name = 'projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ AGENT_ENGINE_ID ' ,
config = types . CreateAgentEngineSandboxConfig (
display_name = sandbox_display_name , ttl = "3600s" ),
)
Replace the following:
PROJECT_ID : Your Google Cloud project ID.
LOCATION : The Google Cloud region for your Vertex AI Agent Engine
instance. See Supported regions for
Vertex AI Agent Engine .
AGENT_ENGINE_ID : The ID for your Vertex AI Agent Engine instance.
Only LANGUAGE_PYTHON and LANGUAGE_JAVASCRIPT are supported. If machine_config is not specified, the default configuration is 2 vCPU and 1.5 GB of RAM. If you specify MACHINE_CONFIG_VCPU4_RAM4GIB , the sandbox has 4 vCPU and 4GB of RAM.
(Optional) List and get sandboxes
List all the sandboxes associated with the specified Agent Engine instance:
sandboxes = client . agent_engines . sandboxes . list ( name = agent_engine_name )
for sandbox in sandboxes :
pprint . pprint ( sandbox )
Here's the sample output:
SandboxEnvironment (
create_time = datetime . datetime ( 2025 , 9 , 7 , 3 , 42 , 17 , 93656 , tzinfo = TzInfo ( UTC )),
display_name = 'test_sandbox' ,
name = SANDBOX_NAME ,
spec = SandboxEnvironmentSpec (
code_execution_environment = SandboxEnvironmentSpecCodeExecutionEnvironment ()
),
state = < State . STATE_RUNNING : 'STATE_RUNNING' > ,
update_time = datetime . datetime ( 2025 , 9 , 7 , 3 , 42 , 17 , 93656 , tzinfo = TzInfo ( UTC ))
)
To get an existing sandbox:
sandbox = client . agent_engines . sandboxes . get ( name = sandbox_name )
pprint . pprint ( sandbox )
Here's the sample output:
SandboxEnvironment (
create_time = datetime . datetime ( 2025 , 9 , 7 , 3 , 42 , 17 , 93656 , tzinfo = TzInfo ( UTC )),
display_name = 'test_sandbox' ,
name = SANDBOX_NAME ,
spec = SandboxEnvironmentSpec (
code_execution_environment = SandboxEnvironmentSpecCodeExecutionEnvironment ()
),
state = < State . STATE_RUNNING : 'STATE_RUNNING' > ,
update_time = datetime . datetime ( 2025 , 9 , 7 , 3 , 42 , 17 , 93656 , tzinfo = TzInfo ( UTC ))
)
Execute code in a sandbox
To execute code, call execute_code :
my_code = """
with open("input.txt", "r") as input:
with open("output.txt", "w") as output:
for line in input:
print(line)
output.write(line)
"""
input_data = {
"code" : my_code ,
"files" : [{
"name" : "input.txt" ,
"content" : b "Hello, world!"
}]
}
response = client . agent_engines . sandboxes . execute_code (
name = sandbox_name ,
input_data = input_data
)
Here's the sample output:
ExecuteSandboxEnvironmentResponse (
outputs = [
Chunk (
data = b '{
"msg_err" : "" ,
"msg_out" : "" ,
} ',
mime_type = 'application/json' ,
),
chunk (
data = b "hello world!" ,
mime_type = "text/plain"
attributes = {
"file_name" : "output.txt"
}
)
]
)
Note the following:
execute_code resets the sandbox's time to live (TTL).
The output is in raw bytes.
Each request or response can contain up to 100MB of files.
Execute more code in a sandbox
To demonstrate that the sandbox maintains its state, execute more code in the same sandbox:
python_code = """
with open("output2.txt", "w") as output:
for line in lines:
output.write(line + "World \n ")
"""
input_data = { "code" : python_code }
response = client . agent_engines . sandboxes . execute_code (
name = sandbox_name ,
input_data = input_data
)
pprint . pprint ( response )
Here's the sample output:
ExecuteSandboxEnvironmentResponse (
outputs = [
Chunk (
data = b '{
"msg_err" : "" ,
"msg_out" : "" ,
} ',
mime_type = 'application/json' ,
),
chunk (
data = b "hello world!" ,
mime_type = "text/plain"
attributes = {
"file_name" : "output2.txt"
}
)
]
)
The response includes a file that needs to be decoded. Here's an example of
how to decode the output:
import base64
import json
if response . outputs [ 0 ] . mime_type == "application/json" :
json_output = json . loads ( response . outputs [ 0 ] . data . decode ( "utf-8" ))
output_file_content = json_output . get ( "output_files" )[ 0 ] . get ( "content" )
print ( output_file_content . b64decode ( output_file_content ))
Here's the sample output:
b 'HelloWorld \n '
Clean up
To clean up resources created by this quickstart, delete your sandbox and
Vertex AI Agent Engine instance.
client . agent_engines . sandboxes . delete ( name = sandbox_name )
agent_engine . delete ()
What's next
Code Execution troubleshooting
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
