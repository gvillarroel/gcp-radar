---
title: "Call Vertex AI Agents from ABAP environment \_|\_ SAP on Google Cloud \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/quickstart-call-vertex-ai-agent
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/sap-hana-ha-dm-deployment
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/abap-sdk/on-premises-or-any-cloud/latest/quickstart-call-vertex-ai-agent
  title: "Call Vertex AI Agents from ABAP environment \_|\_ SAP on Google Cloud \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
SAP on Google Cloud
Guides
Send feedback
Call Vertex AI Agents from ABAP environment
Stay organized with collections
Save and categorize content based on your preferences.
On-premises or any cloud edition v1.13 keyboard_arrow_down
SAP BTP edition v1.1
On-premises or any cloud edition v1.13
This quickstart shows you how to call Vertex AI Agents, built
with the Agent Development Kit (ADK) , from your ABAP environment.
This guide explains the process of calling an AI agent by using the on-premises or any cloud edition of ABAP SDK for Google Cloud,
and does not cover
creation or deployment procedures. You create an AI agent using the
Agent Development Kit (ADK) , which is an
open-source framework for designing agents, built on the same framework that powers
Gemini Enterprise and Gemini Enterprise for Customer Experience .
You then deploy your agent to Vertex AI Agent Engine, which is a fully managed
runtime in Vertex AI that helps you deploy your custom agents
to production with built-in testing, release, and reliability at a global, secure scale.
Before you begin
Before you run this quickstart, make sure that you or your administrators have
completed the following prerequisites:
You have a Google Cloud account and project.
Billing is enabled for your project. See how to confirm that billing is enabled for your project .
The on-premises or any cloud edition of ABAP SDK for Google Cloud is installed and configured. See how to install and configure the on-premises or any cloud edition of ABAP SDK for Google Cloud .
Authentication to access Google Cloud APIs is set up. See how to set up authentication .
Make sure the Vertex AI API is enabled in your Google Cloud project.
Go to API library
Created a Cloud Storage bucket to store the agent deployment files. For more information, see Create buckets .
Deploy agent to Vertex AI Agent Engine
Create, test, and deploy your agent to Vertex AI Agent Engine.
For this quickstart, you can create a weather and time agent and deploy
the agent to Vertex AI Agent Engine.
For information about how to create, test, and deploy your agent, see the following:
Create your agent
Try your agent locally
Deploy your agent to Agent Engine
Make sure that you've granted the required permissions for the agent to use managed sessions.
After deployment, you get a resource identifier similar to the following example,
which enables agent invocation within your ABAP program:
AgentEngine created. Resource name: projects/project_id/locations/us-central1/reasoningEngines/ REASONING_ENGINE_ID
From the resource identifier, make a note of the REASONING_ENGINE_ID , for example, 6384464913570601984 .
You need this in a later step.
Create a program to call Vertex AI Agents from ABAP environment
In the SAP system, create an executable program in your
custom namespace (for example, Z or Y) by using transaction SE38 .
In the SAP GUI, enter transaction code SE38 .
In the Program field, enter a name for your program,
for example, ZDEMO_CALL_AGENT .
Click Create .
Specify the program attributes:
In the Title field, enter a title of your program,
for example, Call Vertex AI Agent .
In the Type field, choose Executable Program .
Click Save .
Save the program as a Local Object .
In the ABAP Editor , add the following code:
REPORT zdemo_call_agent .
DATA lv_p_projects_id TYPE string .
DATA lv_p_locations_id TYPE string .
DATA lv_p_reasoning_engines_id TYPE string .
DATA ls_input TYPE / goog / cl_aiplatform_v1 = > ty_1072 .
TYPES : BEGIN OF ty_agent_input ,
message TYPE string ,
session_id TYPE string ,
user_id TYPE string ,
END OF ty_agent_input .
DATA ls_agent_input TYPE ty_agent_input .
TYPES : BEGIN OF ty_response ,
content TYPE / goog / cl_aiplatform_v1 = > ty_695 ,
END OF ty_response .
DATA ls_agent_response TYPE ty_response .
TRY .
" Open HTTP Connection
DATA ( lo_client ) = NEW / goog / cl_aiplatform_v1 ( iv_key_name = ' DEMO_AIPLATFORM ' ).
DATA lv_agent_response_txt TYPE string .
" Populate relevant parameters
lv_p_projects_id = lo_client - > gv_project_id .
lv_p_locations_id = ' LOCATION_ID ' .
lv_p_reasoning_engines_id = ' REASONING_ENGINE_ID ' .
ls_agent_input - message = 'What is the weather in New York' . "Prompt
ls_agent_input - user_id = 'use-101' .
ls_input - class_method = 'stream_query' .
GET REFERENCE OF ls_agent_input INTO ls_input - input .
lo_client - > add_json_name_mapping ( iv_abap = 'CLASS_METHOD' iv_json = 'class_method' ).
lo_client - > add_json_name_mapping ( iv_abap = 'SESSION_ID' iv_json = 'session_id' ).
lo_client - > add_json_name_mapping ( iv_abap = 'USER_ID' iv_json = 'user_id' ).
" Call API method: aiplatform.projects.locations.reasoningEngines.streamQuery
lo_client - > stream_query_reasoning_engi ( EXPORTING iv_p_projects_id = lv_p_projects_id
iv_p_locations_id = lv_p_locations_id
iv_p_reasoning_engines_id = lv_p_reasoning_engines_id
is_input = ls_input
IMPORTING es_raw = lv_agent_response_txt
ev_ret_code = DATA ( lv_ret_code )
ev_err_text = DATA ( lv_err_text )
es_err_resp = DATA ( ls_err_resp ) ).
" Handle the output
IF lo_client - > is_success ( lv_ret_code ).
SPLIT lv_agent_response_txt AT cl_abap_char_utilities = > newline INTO TABLE DATA ( lt_result_event_tab ).
" Deserialize to read the final response event from agent
/ goog / cl_json_util = > deserialize_json ( EXPORTING iv_json = lt_result_event_tab [ 3 ]
iv_pretty_name = / ui2 / cl_json = > pretty_mode - extended
IMPORTING es_data = ls_agent_response ).
cl_demo_output = > display ( ls_agent_response - content - parts [ 1 ] - text ).
ELSE .
MESSAGE lv_err_text TYPE 'E' .
ENDIF .
" Close HTTP Connection
lo_client - > close ( ).
CATCH / goog / cx_sdk INTO DATA ( lo_exception ).
MESSAGE lo_exception - > get_text ( ) TYPE 'E' .
ENDTRY .
Replace the following:
DEMO_AIPLATFORM : The client key for authentication to Google Cloud.
LOCATION_ID : The location where the agent is deployed. You specify the location when you initialize the agent. For more information, see Initialize the agent .
REASONING_ENGINE_ID : The resource identifier for the agent that you've noted in the Deploy agent to Vertex AI Agent Engine section.
Run your application in SE38 .
Validate that the results are consistent with those observed when the agent was run locally.
Example response: OK. The weather in New York is sunny with a temperature of 25 degrees Celsius (41 degrees Fahrenheit).
What's next
Explore other quickstarts available on the GitHub repository, GoogleCloudPlatform/google-cloud-abap/abap-sdk
/ZGOOG_SDK_QUICKSTART/ .
Read the guide Application development with the on-premises or any cloud edition of ABAP SDK for Google Cloud .
View the code samples .
Ask your questions and discuss ABAP SDK for Google Cloud with the community on
Cloud Forums .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
