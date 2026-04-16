---
title: "Generative knowledge assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist
  title: "Generative knowledge assist \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Agent Assist
Guides
Send feedback
Generative knowledge assist
Stay organized with collections
Save and categorize content based on your preferences.
Generative knowledge assist provides answers to your agent's questions based on information in documents you provide. You can specify your domain name or upload documents for a flow-based data store agent or a playbook-based data store agent . to index. Generative knowledge assist synthesizes that information with the ongoing conversation and available customer metadata to give a more relevant and timely answer to your agent.
Proactive generative knowledge assist follows the ongoing conversation between your agent and the customer. It proactively provides search query suggestions based on the current conversation context and the answer.
Before you begin
Unless you're the project owner, you need these roles to create a data store agent:
- Dialogflow API Admin
- Discovery Engine Admin
Create a flow-based data store agent
Activate the AI Applications API in the Vertex AI console.
To create the agent, follow the steps in Flow-based data store agents .
Create a playbook-based data store agent
Activate the AI Applications API in the Vertex AI console.
To create the agent, follow the steps in Playbook-based data store agents .
To connect the agent to a data store, create a data store tool . See Playbook data store tool examples for more information.
Answer questions from your human agents
The flow-based or playbook-based data store agent can answer the questions from your human agents based on the documents you provided.
Step 1: Create a conversation profile
Create a conversation profile using the Agent Assist console or the API.
Create from console
You must enable the generative knowledge assist suggestion type and link it to the flow-based or playbook-based data store agent from the previous step.
Optional: Use the Disable agent search query logging checkbox to indicate whether you would like Google to collect and store redacted search queries for potential quality improvement.
You can use the Enable conversation augmented query checkbox to indicate whether you would like to take the conversation context between the human agent and the user into consideration when generating the answer for the search query.
Create from API
The following steps illustrate how to create a ConversationProfile with a HumanAgentAssistantConfig object. You can also perform these actions using the Agent Assist console .
To create a conversation profile, call the create method on the ConversationProfile resource.
Before using any of the request data, make the following replacements:
PROJECT_ID : your project ID
LOCATION_ID : the ID for your location
AGENT_ID : your flow-based or playbook-based data store agent ID from the previous step
The following is a JSON example:
{
"displayName" : "my-conversation-profile-display-name" ,
"humanAgentAssistantConfig" : {
"humanAgentSuggestionConfig" : {
"featureConfigs" : [
{
"suggestionFeature" : {
"type" : "KNOWLEDGE_SEARCH"
},
"queryConfig" : {
"dialogflowQuerySource" : {
"humanAgentSideConfig" : {
"agent" : "projects/ PROJECT_ID /locations/ LOCATION_ID /agents/ AGENT_ID "
}
}
},
"disableAgentQueryLogging" : false ,
"enableConversationAugmentedQuery" : false ,
}
]
}
}
}
When you create a conversation profile in the Agent Assist console, Agent Assist automatically enables both generative knowledge assist and proactive generative knowledge assist. To disable proactive generative knowledge assist, you must create your conversation profile using the API.
Step 2: Use a data store agent
Optionally, use the
SearchKnowledge
API to get the answers from the data store agent. You can also use the following configurations as part of your SearchKnowledge request:
querySource : Set this field to indicate whether an agent typed the query or proactive generative knowledge assist automatically suggested it.
exactSearch : Set this field to indicate whether to search the exact input query without query rewrite.
endUserMetadata : Set this field to include additional information about the end user that improves the generated answer. For more details, see the Data Store agent performance personalization page .
searchConfig : Set this field for additional control to boost and filter knowledge documents. For more details, see the Data Store agent performance search configuration page .
Before using any of the request data, make the following replacements:
PROJECT_ID : your project ID
LOCATION_ID : the ID for your location
CONVERSATION_PROFILE_ID : your conversation profile ID from the previous step
SESSION_ID : your search session ID
The search history of the same session can impact the search result. You can use the following conversation ID for the session ID.
CONVERSATION_ID : the conversation (between human agent and end user) where the search request is triggered
MESSAGE_ID : the latest conversation message when the search
request is triggered
Here is an example JSON request:
{
"parent" : "projects/ PROJECT_ID /locations/ LOCATION_ID "
"query" : {
"text" : "What is the return policy?"
}
"conversationProfile" : "projects/ PROJECT_ID /locations/ LOCATION_ID /conversationProfiles/ CONVERSATION_PROFILE_ID "
"sessionId" : " SESSION_ID
" co n versa t io n ": " projec ts / PROJECT_ID /loca t io ns / LOCATION_ID /co n versa t io ns / CONVERSATION_ID "
" la test Message ": " projec ts / PROJECT_ID /loca t io ns / LOCATION_ID /co n versa t io ns / CONVERSATION_ID /messages/ MESSAGE_ID
"querySource" : AGENT_QUERY
"exactSearch" : false
"searchConfig" : {
"filterSpecs" : {
"filter" : "category: ANY(\"persona_B\")"
}
}
"endUserMetadata" : {
"deviceOwned" : "Google Pixel 7"
}
}
Optionally, provide conversation and latest_message resource names if
the agent's search happens during a conversation with a user. These two fields
are required if you enable the enable_conversation_augmented_query option and
prefer enhancing the query answer experience with the conversational context
between your agent and the user.
Simulator
Test your flow-based or playbook-based data store agent in the
Agent Assist simulator .
In the preceding example, the flow-based data store agent answers the user query What is the refund
processing time? with the following information:
Generative AI generated answer : When the package with your return arrives at the seller's return center, it may take up to 7 additional business days to process. Check the status of your refund with the return tracking number found on your orders page.
Title of the relevant knowledge document : Returns & refunds .
Proactively suggest Q & A for your agents
Proactive generative knowledge assist follows an ongoing conversation and proactively provides search query suggestions and answers.
Step 1: Create a conversation profile
We recommend that you create a conversation profile using the Agent Assist console , but you can also use the API.
Create from console
Enable the Generative knowledge assist suggestion type and link it to the flow-based data store agent or playbook-based data store agent from the previous step. This enables the flow-based or playbook-based data store agent to proactively provide query and answer suggestions and answer manual search queries from your human agents.
Optional: Use the Show all suggested queries for conversation checkbox to have the flow-based data store agent or playbook-based data store agent show all these queries, even when there's no answer found from your knowledge documents. This is for testing which queries can be pulled from the ongoing conversation.
Optional: Use the Load proactive answers asynchronously checkbox to only get query suggestions. You can manually submit the suggested query to the SearchKnowledge API and automatically submit in the Agent Assist console simulator and UI modules.
Create from API
The following steps create a ConversationProfile with a HumanAgentAssistantConfig object. You can also perform these actions using the Agent Assist console .
To create a conversation profile, call the create method on the ConversationProfile resource.
Before using any of the request data, make the following replacements:
PROJECT_ID : your project ID
LOCATION_ID : the ID for your location
AGENT_ID : your flow-based or playbook-based data store agent ID from the previous step
The following is a JSON example:
{
"displayName" : "my-conversation-profile-display-name" ,
"humanAgentAssistantConfig" : {
"humanAgentSuggestionConfig" : {
"featureConfigs" : [
{
"suggestionFeature" : {
"type" : "KNOWLEDGE_ASSIST"
},
"queryConfig" : {
"dialogflowQuerySource" : {
"agent" : "projects/ PROJECT_ID /locations/ LOCATION_ID /agents/ AGENT_ID "
}
},
"enableQuerySuggestionWhenNoAnswer" : false ,
}
]
}
}
}
Step 2: Handle conversations at runtime
Proactive generative knowledge assist processes conversations at runtime to proactively provide search query suggestions based on the current conversation context and the answer.
Create a conversation
First, you must create a conversation :
REST
To create a conversation,
call the create method on the
Conversation
resource.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Cloud project ID
LOCATION_ID : your location ID
CONVERSATION_PROFILE_ID : the ID you received when creating the conversation profile
HTTP method and URL:
POST https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /conversations
Request JSON body:
{
"conversationProfile": "projects/ PROJECT_ID /locations/ LOCATION_ID /conversationProfiles/ CONVERSATION_PROFILE_ID ",
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /conversations"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /conversations" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION_ID /conversations/ CONVERSATION_ID ",
"lifecycleState": "IN_PROGRESS",
"conversationProfile": "projects/ PROJECT_ID /locations/ LOCATION_ID /conversationProfiles/ CONVERSATION_PROFILE_ID ",
"startTime": "2018-11-05T21:05:45.622Z"
}
The path segment after conversations contains your new conversation ID.
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def create_conversation ( project_id , conversation_profile_id ):
"""Creates a conversation with given values
Args:
project_id: The GCP project linked with the conversation.
conversation_profile_id: The conversation profile id used to create
conversation."""
client = dialogflow . ConversationsClient ()
conversation_profile_client = dialogflow . ConversationProfilesClient ()
project_path = client . common_project_path ( project_id )
conversation_profile_path = conversation_profile_client . conversation_profile_path (
project_id , conversation_profile_id
)
conversation = { "conversation_profile" : conversation_profile_path }
response = client . create_conversation (
parent = project_path , conversation = conversation
)
print ( "Life Cycle State: {} " . format ( response . lifecycle_state ))
print ( "Conversation Profile Name: {} " . format ( response . conversation_profile ))
print ( "Name: {} " . format ( response . name ))
return response
Create a user-participant
Add user- and agent- participants to the conversation to see suggestions. First, add the user-participant to the conversation:
REST
To create a user-participant, call the create method on the
Participant
resource.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Cloud project ID
LOCATION_ID : your location ID
CONVERSATION_ID : your conversation ID
HTTP method and URL:
POST https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /conversations/ CONVERSATION_ID /participants
Request JSON body:
{
"role": "END_USER",
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /conversations/ CONVERSATION_ID /participants"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /conversations/ CONVERSATION_ID /participants" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID ",
"role": "END_USER"
}
The path segment after participants contains your new user-participant ID.
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def create_participant ( project_id : str , conversation_id : str , role : str ):
from google.cloud import dialogflow_v2beta1 as dialogflow
"""Creates a participant in a given conversation.
Args:
project_id: The GCP project linked with the conversation profile.
conversation_id: Id of the conversation.
participant: participant to be created."""
client = dialogflow . ParticipantsClient ()
conversation_path = dialogflow . ConversationsClient . conversation_path (
project_id , conversation_id
)
if role in ROLES :
response = client . create_participant (
parent = conversation_path , participant = { "role" : role }, timeout = 600
)
print ( "Participant Created." )
print ( f "Role: { response . role } " )
print ( f "Name: { response . name } " )
return response
Create an agent-participant
Add an agent-participant to the conversation:
REST
To create an agent-participant, call the create method on the
Participant
resource.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Cloud project ID
LOCATION_ID : your location ID
CONVERSATION_ID : your conversation ID
HTTP method and URL:
POST https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /conversations/ CONVERSATION_ID /participants
Request JSON body:
{
"role": "HUMAN_AGENT",
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /conversations/ CONVERSATION_ID /participants"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION_ID /conversations/ CONVERSATION_ID /participants" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID ",
"role": "HUMAN_AGENT"
}
The path segment after participants contains your new human agent-participant ID.
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def create_participant ( project_id : str , conversation_id : str , role : str ):
from google.cloud import dialogflow_v2beta1 as dialogflow
"""Creates a participant in a given conversation.
Args:
project_id: The GCP project linked with the conversation profile.
conversation_id: Id of the conversation.
participant: participant to be created."""
client = dialogflow . ParticipantsClient ()
conversation_path = dialogflow . ConversationsClient . conversation_path (
project_id , conversation_id
)
if role in ROLES :
response = client . create_participant (
parent = conversation_path , participant = { "role" : role }, timeout = 600
)
print ( "Participant Created." )
print ( f "Role: { response . role } " )
print ( f "Name: { response . name } " )
return response
Add and analyze a message from the agent
Each time either participant types a message in the conversation, you need to
send that message to the API for processing. The data store agent bases its
suggestions on analysis of human agent and user messages. In the following
example, the human agent starts the conversation by asking "How may I help
you?"
No suggestions are returned yet in the response.
REST
To add and analyze a human agent message in the conversation,
call the analyzeContent method on the
Participant
resource.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
CONVERSATION_ID : your conversation ID
PARTICIPANT_ID : your human agent participant ID
HTTP method and URL:
POST https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID :analyzeContent
Request JSON body:
{
"textInput": {
"text": "How may I help you?",
"languageCode": "en-US"
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID :analyzeContent"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID :analyzeContent" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"message": {
"name": "projects/ PROJECT_ID /conversations/ CONVERSATION_ID /messages/ MESSAGE_ID ",
"content": "How may I help you?",
"languageCode": "en-US",
"participant": " PARTICIPANT_ID ",
"participantRole": "HUMAN_AGENT",
"createTime": "2020-02-13T00:01:30.683Z"
}
}
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def analyze_content_text (
project_id : str , conversation_id : str , participant_id : str , text : str
):
from google.cloud import dialogflow_v2beta1 as dialogflow
"""Analyze text message content from a participant.
Args:
project_id: The GCP project linked with the conversation profile.
conversation_id: Id of the conversation.
participant_id: Id of the participant.
text: the text message that participant typed."""
client = dialogflow . ParticipantsClient ()
participant_path = client . participant_path (
project_id , conversation_id , participant_id
)
text_input = { "text" : text , "language_code" : "en-US" }
response = client . analyze_content (
participant = participant_path , text_input = text_input
)
print ( "AnalyzeContent Response:" )
print ( f "Reply Text: { response . reply_text } " )
for suggestion_result in response . human_agent_suggestion_results :
if suggestion_result . error is not None :
print ( f "Error: { suggestion_result . error . message } " )
if suggestion_result . suggest_articles_response :
for answer in suggestion_result . suggest_articles_response . article_answers :
print ( f "Article Suggestion Answer: { answer . title } " )
print ( f "Answer Record: { answer . answer_record } " )
if suggestion_result . suggest_faq_answers_response :
for answer in suggestion_result . suggest_faq_answers_response . faq_answers :
print ( f "Faq Answer: { answer . answer } " )
print ( f "Answer Record: { answer . answer_record } " )
if suggestion_result . suggest_smart_replies_response :
for (
answer
) in suggestion_result . suggest_smart_replies_response . smart_reply_answers :
print ( f "Smart Reply: { answer . reply } " )
print ( f "Answer Record: { answer . answer_record } " )
for suggestion_result in response . end_user_suggestion_results :
if suggestion_result . error :
print ( f "Error: { suggestion_result . error . message } " )
if suggestion_result . suggest_articles_response :
for answer in suggestion_result . suggest_articles_response . article_answers :
print ( f "Article Suggestion Answer: { answer . title } " )
print ( f "Answer Record: { answer . answer_record } " )
if suggestion_result . suggest_faq_answers_response :
for answer in suggestion_result . suggest_faq_answers_response . faq_answers :
print ( f "Faq Answer: { answer . answer } " )
print ( f "Answer Record: { answer . answer_record } " )
if suggestion_result . suggest_smart_replies_response :
for (
answer
) in suggestion_result . suggest_smart_replies_response . smart_reply_answers :
print ( f "Smart Reply: { answer . reply } " )
print ( f "Answer Record: { answer . answer_record } " )
return response
Add a message from the user for suggestions
In response to the agent, the user says "When can I get my return refund?"
This time, the API response contains a suggested query and the generative AI
answer based on the knowledge documents.
REST
To add and analyze a user message for the conversation, call the
analyzeContent method on the
Participant
resource.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
CONVERSATION_ID : your conversation ID
PARTICIPANT_ID : your end-user participant ID
HTTP method and URL:
POST https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID :analyzeContent
Request JSON body:
{
"textInput": {
"text": "When can I get my return refund?",
"languageCode": "en-US"
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID :analyzeContent"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID /participants/ PARTICIPANT_ID :analyzeContent" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"message": {
"name": "projects/ PROJECT_ID /conversations/ CONVERSATION_ID /messages/ MESSAGE_ID ",
"content": "When can I get my return refund?",
"languageCode": "en-US",
"participant": " PARTICIPANT_ID ",
"participantRole": "END_USER",
"createTime": "2020-02-13T00:07:35.925Z"
},
"humanAgentSuggestionResults": [
{
"suggestKnowledgeAssistResponse": {
"knowledgeAssistAnswer": {
"suggestedQuery": {
"queryText": "Refund processing time"
},
"suggestedQueryAnswer": {
"answerText": "After your return is processed, you receive your refund in 7 days. The refund amount should be for the full value of the items returned, but doesn't include shipping & service fees.",
"generativeSource": {
"snippets": [
{
"title": "Returns & refunds - Help",
"uri": "https://example.com/",
"text": "When the package with your return arrives at the seller's return center, it may take up to 7 additional business days to process. Check the status of your refund with the return tracking number found on your orders page."
}
]
},
},
"answerRecord": "projects/ PROJECT_ID /answerRecords/ ANSWER_RECORD_ID "
},
}
}
]
}
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def analyze_content_text (
project_id : str , conversation_id : str , participant_id : str , text : str
):
from google.cloud import dialogflow_v2beta1 as dialogflow
"""Analyze text message content from a participant.
Args:
project_id: The GCP project linked with the conversation profile.
conversation_id: Id of the conversation.
participant_id: Id of the participant.
text: the text message that participant typed."""
client = dialogflow . ParticipantsClient ()
participant_path = client . participant_path (
project_id , conversation_id , participant_id
)
text_input = { "text" : text , "language_code" : "en-US" }
response = client . analyze_content (
participant = participant_path , text_input = text_input
)
print ( "AnalyzeContent Response:" )
print ( f "Reply Text: { response . reply_text } " )
for suggestion_result in response . human_agent_suggestion_results :
if suggestion_result . error is not None :
print ( f "Error: { suggestion_result . error . message } " )
if suggestion_result . suggest_articles_response :
for answer in suggestion_result . suggest_articles_response . article_answers :
print ( f "Article Suggestion Answer: { answer . title } " )
print ( f "Answer Record: { answer . answer_record } " )
if suggestion_result . suggest_faq_answers_response :
for answer in suggestion_result . suggest_faq_answers_response . faq_answers :
print ( f "Faq Answer: { answer . answer } " )
print ( f "Answer Record: { answer . answer_record } " )
if suggestion_result . suggest_smart_replies_response :
for (
answer
) in suggestion_result . suggest_smart_replies_response . smart_reply_answers :
print ( f "Smart Reply: { answer . reply } " )
print ( f "Answer Record: { answer . answer_record } " )
for suggestion_result in response . end_user_suggestion_results :
if suggestion_result . error :
print ( f "Error: { suggestion_result . error . message } " )
if suggestion_result . suggest_articles_response :
for answer in suggestion_result . suggest_articles_response . article_answers :
print ( f "Article Suggestion Answer: { answer . title } " )
print ( f "Answer Record: { answer . answer_record } " )
if suggestion_result . suggest_faq_answers_response :
for answer in suggestion_result . suggest_faq_answers_response . faq_answers :
print ( f "Faq Answer: { answer . answer } " )
print ( f "Answer Record: { answer . answer_record } " )
if suggestion_result . suggest_smart_replies_response :
for (
answer
) in suggestion_result . suggest_smart_replies_response . smart_reply_answers :
print ( f "Smart Reply: { answer . reply } " )
print ( f "Answer Record: { answer . answer_record } " )
return response
Complete the conversation
When the conversation ends, use the API to complete the conversation.
REST
To complete the conversation,
call the complete method on the
conversations
resource.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your GCP project ID
CONVERSATION_ID : the ID you received when creating the conversation
HTTP method and URL:
POST https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID :complete
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID :complete"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://dialogflow.googleapis.com/v2/projects/ PROJECT_ID /conversations/ CONVERSATION_ID :complete" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /conversations/ CONVERSATION_ID ",
"lifecycleState": "COMPLETED",
"conversationProfile": "projects/ PROJECT_ID /conversationProfiles/ CONVERSATION_PROFILE_ID ",
"startTime": "2018-11-05T21:05:45.622Z",
"endTime": "2018-11-06T03:50:26.930Z"
}
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def complete_conversation ( project_id , conversation_id ):
"""Completes the specified conversation. Finished conversations are purged from the database after 30 days.
Args:
project_id: The GCP project linked with the conversation.
conversation_id: Id of the conversation."""
client = dialogflow . ConversationsClient ()
conversation_path = client . conversation_path ( project_id , conversation_id )
conversation = client . complete_conversation ( name = conversation_path )
print ( "Completed Conversation." )
print ( "Life Cycle State: {} " . format ( conversation . lifecycle_state ))
print ( "Conversation Profile Name: {} " . format ( conversation . conversation_profile ))
print ( "Name: {} " . format ( conversation . name ))
return conversation
Simulator
You can test your flow- or playbook-based data store agent in the
Agent Assist simulator .
In the preceding example, the flow-based data store agent provides the following suggestions:
Suggested query : Refund processing time .
Generative AI generated answer : After your return is processed, you receive your refund in 7 days. The refund amount should be for the full value of the items returned, but doesn't include shipping & service fees.
Title of the relevant knowledge document : Returns & refunds - Help .
Step 3: Pub/Sub suggestion notifications
You can set the notificationConfig field when creating a conversation profile to receive notifications for suggestions. This option uses Pub/Sub to send suggestion notifications to your application as the conversation proceeds and new suggestions become
available.
If you're integrating through the AnalyzeContent API, you have the option to enable the disable_high_latency_features_sync_delivery config in ConversationProfile to ensure that the AnalyzeContent API will respond, without waiting for the proactive generative knowledge assist suggestions, and deliver the suggestions through Pub/Sub.
You can also enable this configuration from the Agent Assist console.
Access data through Customer Experience Insights
Alternatively, your proactive generative knowledge assist generated queries and answers are automatically populated to Customer Experience Insights. To access this data there, follow the instructions at Enable Dialogflow runtime integration .
Send feedback
For the steps to send feedback, go to Send feedback to Agent Assist .
Answer agent questions
The following is an example JSON request for sending feedback about answering agent questions.
{
"name" : "projects/ PROJECT_ID /locations/ LOCATION_ID /answerRecords/ ANSWER_RECORD_ID " ,
"answerFeedback" : {
"displayed" : true
"clicked" : true
"correctnessLevel" : "FULLY_CORRECT"
"agentAssistantDetailFeedback" : {
"knowledgeSearchFeedback" : {
"answerCopied" : true
"clickedUris" : [
"url_1" ,
"url_2" ,
"url_3" ,
]
}
}
}
}
Proactively suggest Q&A
The following is an example JSON request for sending feedback about proactive suggestions.
{
"name" : "projects/PROJECT_ID/locations/LOCATION_ID/answerRecords/ANSWER_RECORD_ID" ,
"answerFeedback" : {
"displayed" : true
"clicked" : true
"correctnessLevel" : "FULLY_CORRECT"
"agentAssistantDetailFeedback" : {
"knowledgeAssistFeedback" : {
"answerCopied" : true
"clickedUris" : [
"url_1" ,
"url_2" ,
"url_3" ,
]
}
}
}
}
Metadata
If you configure metadata for a knowledge document, both generative knowledge assist and proactive generative knowledge assist will return the document's metadata along with the response.
For example, you can use metadata to mark whether the knowledge document is your internal private article or an external public article. Within both the Agent Assist simulator and UI modules , both generative knowledge assist and proactive generative knowledge assist automatically display a document metadata value for certain keys.
gka_source_label : Value is displayed in the suggestion card directly.
gka_source_tooltip : When the value is struct type, holding your cursor over the source link expands and displays the value in a tooltip.
If you have the following metadata for a knowledge document, then the suggestion card lists the source as External Doc and the tooltip adds doc_visibility: public doc .
Metadata:
None
{
"title": "Public Sample Doc",
"gka_source_label": "External Doc",
"gka_source_tooltip": {
"doc_visibility": "public doc"
}
}
End user Metadata
Attach end user metadata to improve and personalize the answer generated by the Datastore agent. For generative knowledge assist, you can attach end user metadata to the end_user_metadata field or ingest it to a conversation with the IngestContextReferences API. You can use ingested end user metadata for both generative knowledge assist and proactive generative knowledge assist.
Example 1: Attach end user metadata
{
"query" : {
"text" : "test query"
},
"conversationProfile" : "projects/PROJECT_ID/locations/LOCATION_ID/conversationProfiles/CONVERSATION_PROFILE_ID" ,
"sessionId" : "SESSION_ID" ,
"conversation" : "projects/PROJECT_ID/locations/LOCATION_ID/conversations/CONVERSATION_ID" ,
"querySource" : "AGENT_QUERY" ,
"endUserMetadata" : {
"Name" : "Jack" ,
"Age" : 33 ,
"City" : "Tokyo"
}
}
Example 2: Ingest end user metadata
{
"conversation" : "projects/PROJECT_ID/locations/global/conversations/CONVERSATION_ID" ,
"contextReferences" : {
"gka_end_user_metadata" : {
"contextContents" : [{
"content" : "{\"Name\":\"Jack\",\"Age\":33,\"city\":\"Tokyo\"}" ,
"contentFormat" : "JSON"
}],
"updateMode" : "OVERWRITE" ,
"languageCode" : "en-US"
}
}
}
For more details about end user metadata in Datastore, see the information about Dialogflow personalization .
Language support
Important: Set the same language code in the conversation profile and the data store agent .
See the full list of supported languages .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
