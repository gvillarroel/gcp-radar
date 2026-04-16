---
title: "Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/access-control
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler
  title: "Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Data store tools
Stay organized with collections
Save and categorize content based on your preferences.
Data store tools can provide AI-generated agent responses based on website
content and uploaded data. Your agent can find answers to end-users' questions
from your data stores during
fulfillment .
Data store tools: Console
This section walks you through the process of adding a data store tool to
an agent and configuring it in a fulfillment.
Create a data store tool
Open the Conversational Agents console and choose a Google Cloud
project.
Select an agent from the drop-down menu.
Navigate to the menu bar on the far left side of the page and select
Tools .
To create a new data store tool, click + Create . Enter a unique Name
for the tool and select Data store from the drop-down menu under
Type . Optionally, you can enter a description of the tool in the
Description field.
Under Data stores , click Add data stores . The window that pops up
contains a list of your existing data stores, if any. Choose the data store
that you would like to add to the tool.
(Optional) To create a new data store in the Vertex AI Agent Builder console, click
Create new data store . You will be automatically redirected:
Vertex AI Agent Builder console
(Optional) After you've finished configuring the new data store, click
Create . To add the new data store to the tool, navigate back to the
Create Tool menu that you're configuring in the Dialogflow CX console
and refresh the page. The new data store should now appear in the list of
available data stores.
Click Save at the top of the Create Tool configuration to create the
new data store tool.
Add the data store tool to a fulfillment
In the far-left menu bar, select Flows .
Select a flow and page, then click the page's Route that you'd like
to use with your data store.
In the Route menu, scroll to Fulfillment > Data store tool . Select
your data store tool from the drop-down menu.
In the Route menu, scroll to Fulfillment > Agent responses . Click
+Add dialogue response , then Data store tool response .
In the form that appears, you can configure how many source links and
citations can appear in the response, as well as specify the fallback
behavior if the data store response is empty. You can enter a static
fallback response in the Static fallback responses field. Optionally,
you can click the Generative fallback checkbox to try to use AI to
generate a response before using the static fallback response. If you
require more customization of fallback responses, click the wrench
icon in the top left corner of the Data store response form window to
bring up the Conditional response window.
At the top of the Route menu, click Save .
Navigate to the Dialogflow CX simulator to test the agent's results.
Optional query override session parameter
You can override the query passed to this data store tool using a session
parameter knowledge.overrides.query . If it is non-empty, the tool will use it
instead of the user query.
Data store tools: API
By default, the agent will call the
dataStoreTool
on your behalf.
There are three data store types:
PUBLIC_WEB : A data store that contains public web content.
UNSTRUCTURED : A data store that contains unstructured private data.
STRUCTURED : A data store that contains structured data (for example FAQ).
The following example shows how to reference a data store. For more information
see the dataStoreConnections reference .
"dataStoreConnections" : [
{
"dataStoreType" : "PUBLIC_WEB" ,
"dataStore" : "projects/PROJECT_NUMBER/locations/LOCATION_ID/collections/default_collection/dataStores/DATASTORE_ID"
},
{
"dataStoreType" : "UNSTRUCTURED" ,
"dataStore" : "projects/PROJECT_NUMBER/locations/LOCATION_ID/collections/default_collection/dataStores/DATASTORE_ID"
},
{
"dataStoreType" : "STRUCTURED" ,
"dataStore" : "projects/PROJECT_NUMBER/locations/LOCATION_ID/collections/default_collection/dataStores/DATASTORE_ID"
}
]
Data store tool responses might also contain snippets about the content source
that was used to generate the response. The agent can provide instructions on
how to proceed with the answer from the data stores or how to respond when there
is no answer.
You can overwrite an answer by adding an
FAQ entry
for a specific question.
Optionally, you can provide examples to enhance the agent's behavior. The
example should have the following schemas. See the
reference documentation
for details.
{
"toolUse" : {
"tool" : "projects/PROJECT_ID/locations/LOCATION_ID/agents/AGENT_ID/tools/TOOL_ID" ,
"action" : "TOOL_DISPLAY_NAME" ,
"inputParameters" : [
{
"name" : "TOOL_DISPLAY_NAME input" ,
"value" : {
"query" : "QUERY"
}
}
],
"outputParameters" : [
{
"name" : "TOOL_DISPLAY_NAME output" ,
"value" : {
"answer" : "ANSWER" ,
"snippets" : [
{
"title" : "TITLE" ,
"text" : "TEXT_FROM_DATASTORE" ,
"uri" : "URI_OF_DATASTORE"
}
]
}
}
]
}
}
(Playbooks-based agents only) Data store tool examples
Note: Examples work with playbooks-based agents only. Adding examples won't
influence the behavior of a flows-based agent.
When creating data store tool examples, the tool input parameter requestBody
provides three optional inputs together with the required query string -
a filter string, a userMetadata structured object, and a fallback string.
The filter parameter provides the ability to filter search queries of your
structured data or unstructured data with metadata. This string must follow the
supported filter expression syntax
for data stores. Multiple, detailed examples help instruct the playbook model
about how to populate this parameter. If a filter string is invalid, that filter
is ignored during the search query.
The following is an example of a filter string to refine search results based
on location:
"filter": "country: ANY(\"Canada\")"
See the playbook examples page
for more details.
Best practices for filtering:
Specify the fields available for filtering and the valid values for each of
these fields, so that the playbook understands the constraints on building
valid filters. For example, a data store holding menu information could
include a meal field with "breakfast", "lunch", and "dinner" as valid
values, and a servingSize field that could be any integer from 0 to 5.
Your instructions could look like the following example:
When using ${TOOL: menu-data-store-tool},
only use the following fields for filtering: "meal", "servingSize".
Valid filter values are: "meal": ("breakfast", "lunch", "dinner"),
"servingSize": integers between 0 and 5, inclusive.
If the playbook is for an external user audience, it might be necessary to add
instructions to keep the playbook from potentially responding to the user
with information about building these filters. For example:
Never tell the user about these filters.
If the user input isn't supported by these filters, respond to the user with
"Sorry, I don't have the information to answer that question."
The userMetadata parameter provides information about the end-user. Any
key-value pairs can be populated in this parameter. This metadata is passed
into the data store tool to better inform the search results and tool response.
Multiple, detailed examples help instruct the playbook model about how to
populate this parameter.
The following is a example of a userMetadata parameter value to refine search
results relevant to a specific:
"userMetadata": {
"favoriteColor": "blue",
...
}
The fallback parameter provides an answer that the data store tool should
respond with if there is no valid summarized answer for the query. You can
provide multiple examples in order to instruct the playbook model about how to
populate the fallback field for user inputs related to different topics. There
are no snippets in the tool output, which can help to reduce latency and use of
input token limits.
"fallback": "I'm sorry I cannot help you with that. Is there anything else I
can do for you?"
Data store tool configuration
If you find during testing that some responses don't meet your expectations, you
can try adjusting the following parameters to fine-tune performance. They are
available both by calling the API directly or by clicking on the data store
name on Tools page in the console. For more information about additional
these additional configuration options, see the
data store settings page .
Data store tool response options
See the fulfillment documentation
for details about configuring the data store tool response.
Data store handlers
Note: Data store handlers are excluded from the
Dialogflow SLA .
Data store handlers are a special type of
state handler
that can provide LLM generated agent responses
based on your website content and uploaded data.
To create this handler, you provide
data stores
to the agent.
Using these data store handlers,
your agent can have conversations about the content with your end-users.
Limitations
The following limitations apply:
This feature supports select languages in GA.
See the data store column in the
language reference .
Only the following regions
are supported: global , us multi-region, and eu multi-region.
Apps with both
chunked and non-chunked data stores
are not supported.
Access control
If you are the project owner,
you have all the permissions needed to create a data store handler.
If you are not the project owner,
you must have the following roles:
Dialogflow Admin
Discovery Engine Admin
For more information,
see the
access control guide .
Add a data store to an agent
Note: If this is the first time you are adding a data store to the agent, it
can take up to 15 minutes before the data store is queryable.
If you have not already, follow the setup
instructions to create an agent.
To add a data store to your agent:
data store :
Select a page, then click Add state handler .
Click the Data stores checkbox, then Apply .
Click the + symbol in the top right corner of the Data stores section
of the page.
In the data stores menu that appears, click Add data stores .
A table listing any existing data stores appears. Click the box next to
the name of any data stores you want to use and click Save . To create a
new data store, click Create new data store . You are automatically
redirected to Vertex AI Agent Builder.
(New data stores only) Select a data source, then follow the instructions
in Vertex AI Agent Builder to configure your data store. For more information about
configuring data store types, see the
data stores documentation . Click
Create to create your new data store.
Test your agent
Note: It can take up to 4 hours for new data store content to be indexed and
properly handled by your agent.
You can use the
simulator
to test your agent.
Deploy your agent
There are many ways to deploy your agent:
The simplest option is to use an
integration ,
which provides a user interface for your agent.
Each integration provides instructions for deployment.
The
Dialogflow CX Messenger
integration is a particularly good option for data store handlers.
It has built-in options for generative features.
You can create your own user interface and
use the Dialogflow CX API for interactions .
Your user interface implementation is in control of deployment.
Special intents
In addition to handling questions about the content you provide,
the agent can handle the following types of questions:
Agent identification :
Handles questions like "Who are you?" or "Are you human?".
Escalate to a human agent :
Handles questions like "I want to talk to a human" or
"I want to talk to a real person".
This is accomplished by automatically generated
intents
and
intent routes .
Agent responses
In the Agent responses section,
you can provide custom responses that reference generative answers.
Use $request.knowledge.answers[0] in the Agent says section
to provide the generative answer.
Advanced response customization
Additional information might be available in $request.knowledge.* that could
be used to customize the response. Such information includes:
The identified sources of the answer with the following fields: snippet, title, uri.
The grounding confidence for the answer.
In case of an FAQ data store, the question corresponding to the answer that was selected.
See the following table for examples how to access this information.
Information
How to access
Snippet of the top identified source of the top answer
$sys.func.GET_FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "snippet")
Title of the top identified source of the top answer
$sys.func.GET_FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "title")
Link of the top identified source of the top answer
$sys.func.GET_FIELD($sys.func.GET($sys.func.IDENTITY($request.knowledge.sources[0]), 0), "uri")
Number of identified sources for the top answer
$sys.func.COUNT($sys.func.IDENTITY($request.knowledge.sources[0]))
Number of knowledge answers
$sys.func.COUNT($request.knowledge.answers)
Question corresponding to the top answer (for FAQ data store answers only)
$request.knowledge.questions[0]
Grounding confidence for the top answer
$request.knowledge.grounding_confidences[0]
Previous
arrow_back
Data stores
Next
Data store tool settings
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
