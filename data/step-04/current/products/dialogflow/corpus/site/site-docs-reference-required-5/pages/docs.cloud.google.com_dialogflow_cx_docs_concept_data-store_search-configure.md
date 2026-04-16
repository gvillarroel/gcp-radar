---
title: "Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/search-configure
  title: "Data store search configuration \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Data store search configuration
Stay organized with collections
Save and categorize content based on your preferences.
You can influence search results retrieved from Dialogflow CX data store tools by
configuring boost and filter specifications. This allows for more personalized
and context-aware interactions when your agent uses a data store to find
information.
Optionally, you can include dynamic expressions to fine-tune your results
based on conversation context. For example, your agent has captured information
indicating that the end-user owns a "mobile phone". You can configure the data
store tool to boost documents related to mobile phones when answering a general
query later in the conversation such as "How do I check my voicemail?".
You can configure data store search results using the Console ,
API ,
or Dialogflow CX Messenger integration .
Search condition inputs
Search results are configured using the
boost specification ( BoostSpec )
and filter specification ( FilterSpec )
fields in a SearchConfig
object. These configurations are applied per data store within the tool, giving
you fine-grained control over how each connected data store will behave.
You can configure search conditions in one of two ways: By using the
console ,
or by sending a direct API call .
There are important distinctions between the two.
API call : BoostSpec and FilterSpec are sent in a SearchConfig using
a DetectIntent API call. A full
SearchConfig
object must be provided in the request. A SearchConfig sent by direct API
call always overrides a SearchConfig sent using the console. Dynamic
expressions and parameter references are not supported.
Console : Your BoostSpec and FilterSpec configurations are used to
construct a SearchConfig object that is sent with the search request.
Optionally, you can include parameter references and
dynamic expressions
to tailor results to context data recorded from the conversation. You are
only required to provide ConditionBoostSpec objects and a list of filter
strings to construct FilterSpecs rather than a full SearchConfig object.
End-user information is provided as JSON .
There is no expected schema, so you are free to define the object properties.
Boost specifications (Boost specs)
Boost specs
enable you to change search result ranking by applying a boost value to specific
documents. You can add multiple boost specifications to a single data store.
Each Boost Spec is entered as a JSON string. This JSON string must represent
a single ConditionBoostSpec object.
Key fields:
condition : (String) An expression that specifies when the boost should
apply. This uses the standard filter expression syntax .
You can use Dialogflow CX expressions to make the results
dynamic, such as $session.params.YOUR_PARAM_NAME or
$request.end-user-metadata.YOUR_KEY .
boost : (Number) A value between -1.0 and 1.0 that determines the strength of
the boost.
A positive value promotes matching documents. A value of 1.0 gives
a strong promotion.
A negative value demotes matching documents. A value of -1.0 gives
a strong demotion.
A value of 0.0 applies no boost and is not allowed.
boostControlSpec : Provides more controls for a customized ranking than the
basic combination of condition and boost. For more information about
configuring this field, see the
reference documentation .
Example Console input:
If you are configuring your agent in the Console, you need to provide a list
of ConditionBoostSpecs
in the following format.
In this example, documents with a URI matching the value of the
$session.params.doc_id session parameter will be boosted with a strength of
0.5. JSON of this format
{
"condition" : "uri: ANY(\"http://www.example.com/docs/$session.params.doc_id\")" ,
"boost" : 0.5
}
Example API input:
If you are calling the API directly, you must provide ConditionBoostSpecs in a
full SearchConfig
object.The following search configuration describes a boost spec:
"searchConfig" : {
"boostSpecs" : [
{
"dataStores" : [ "DATASTORE_ID" ],
"spec" : [
{
"conditionBoostSpecs" : {
"condition" : "CONDITION" ,
"boost" : "1.0"
}
}
]
}
]
}
Note: DATASTORE_ID is the full name of the data store:
projects/your_project_id/locations/your_location/collections/your_collection_name/dataStores/your_datastore_name ,
CONDITION must follow the Vertex AI Search's
filter expression syntax ,
and the boost value
must be between -1.0 and 1.0.
Filter Specifications (Filter specs)
Filter specifications restrict search results to only include documents that
match the defined criteria. You can add multiple filter specifications to a
single data store.
Each Filter Spec must be entered as a string expression. The string must
conform to the standard filter expression syntax .
You can use Dialogflow CX expressions within this string to make the
results dynamic, such as $session.params.YOUR_PARAM_NAME or
$request.end-user-metadata.YOUR_KEY .
Example Console Filter Spec string:
If you configure your agent using the Console, you must provide a list of
filter strings to form a FilterSpec
object.
In this example, the filter only returns documents with numeric_field greater
than or equal to the value of $session.params.min_value AND where
stock_availability is "IN_STOCK" .
"numeric_field >= $session.params.min_value AND stock_availability: ANY(\"IN_STOCK\")"
Example API filter configuration:
If you are calling the API directly, you must provide filter strings in a
full SearchConfig object:
"searchConfig" : {
"filterSpecs" : [
{
"dataStores" : [ "DATASTORE_ID" ],
"filter" : "CONDITION"
}
]
}
Note: DATASTORE_ID is the full name of the data store:
projects/your_project_id/locations/your_location/collections/your_collection_name/dataStores/your_datastore_name ,
and CONDITION must follow the Vertex AI Search's
filter expression syntax .
Dialogflow CX dynamic expressions
Note: Dynamic expressions are available for
data store tools
only. They are not available for
data store handlers .
Both BoostSpec conditions and FilterSpec strings can incorporate
Dialogflow CX expressions to make them dynamic. This lets you tailor
search behavior based context data retrieved from an ongoing conversation.
Dynamic expressions are not supported in direct API calls and can only be used
if you're configuring using the console .
You can access conversation context data in two ways:
Session parameters: Values collected during the conversation
using $session.params.YOUR_PARAMETER_ID .
End-user metadata: Metadata about the end-user passed in the
DetectIntentRequest using $request.end-user-metadata.YOUR_KEY . For this
option to be available, verify that end_user_metadata is included in the
QueryParameters of your DetectIntent calls. For more information, see
endUserMetadata .
For more details about available system functions and expression syntax, see the
conditions and system functions reference .
Search conditions applied at runtime
When your data store tool executes a search:
The JSON strings you provided for Boost Specs are evaluated. Each valid JSON
string is converted into a ConditionBoostSpec object. These are then
grouped into a BoostSpecs object for the specific data store connection,
which is added to the overall SearchConfig .
The strings you provided for Filter Specs are evaluated as
Dialogflow CX expressions. Each resulting filter string is used to
create a FilterSpecs object for the data store, which is also added to the
SearchConfig .
This dynamically constructed SearchConfig is then included in the
QueryParameters of the search request sent to the data store.
Configure search conditions
Before you configure search conditions, verify that you have:
An existing Dialogflow CX agent.
A data store tool
configured for your agent with one or more data stores enabled.
Console configuration
Open the Conversational Agents console and choose a Google Cloud
project.
Select an agent from the drop-down menu.
Navigate to the left-hand menu and click Tools . Select the data store
tool that you want to configure.
In the tool editing page, navigate to the Data stores section. Click the
Settings icon (⚙️) next to the data store you want to modify.
The Configure Data Store menu appears. Here you can add Boost Specs and
Filter Specs to modify your search results.
For a Boost Spec , provide a JSON object that defines a
ConditionBoostSpec . See Boost
Specifications for details.
For a Filter Spec , provide a string that defines the filter
criteria. See Filter
Specifications for details.
After adding and configuring your specifications, click Confirm at the
bottom of the side panel.
Click Save on the data store tool edit page to save the changes.
API configuration
You can provide search configuration data to Dialogflow CX when sending detect
intent requests. This information must be provided in every detect intent
request, because it is not persisted in the session.
Provide this information in the queryParams.searchConfig field in the
Sessions.detectIntent method.
Go to the Session API reference
Select a protocol and version for the Session reference:
Protocol
V3
V3beta1
REST
Session resource
Session resource
RPC
Session interface
Session interface
C++
SessionsClient
Not available
C#
SessionsClient
Not available
Go
SessionsClient
Not available
Java
SessionsClient
SessionsClient
Node.js
SessionsClient
SessionsClient
PHP
Not available
Not available
Python
SessionsClient
SessionsClient
Ruby
Not available
Not available
Close
Dialogflow CX Messenger configuration
You can provide search configuration data to the Dialogflow CX Messenger
integration. See the
setContext
method for more information.
To apply a search spec or search config, the following snippet needs to be added
to the Dialogflow CX Messenger code when embedding it into a website:
<script>
document.addEventListener('df-messenger-loaded', () => {
const dfMessenger = document.querySelector('df-messenger');
const searchConfig = { ... }
dfMessenger.setQueryParameters(searchConfig);
});
</script>
See the
setQueryParameters
method.
Troubleshooting
This section outlines the solutions to some common issues encountered during
configuration. Always test your configurations thoroughly by simulating
conversations that trigger different session parameters and end-user metadata
values.
Invalid expressions
If a Boost Spec condition or a Filter Spec string contains an invalid
Dialogflow CX expression (for example, incorrect syntax or reference to a
non-existent parameter), the expression compilation will fail. Errors related to
expression compilation are typically returned in the DetectIntentResponse
within the diagnostic_info
field as SystemFunctionResults .
Invalid ConditionBoostSpec JSON
The Conversational Agents console performs some validation on the
ConditionBoostSpec JSON string when saving it. This is to check that it's
valid JSON and its structure can be mapped to a ConditionBoostSpec object. If
the JSON is valid but it results in an invalid SearchConfig according to the
underlying search service (for example, an invalid condition string after
parameter substitution), the search service will return an error.
Runtime substitution errors
If a ConditionBoostSpec JSON string is valid and parsable but an error occurs
during the runtime substitution of Dialogflow CX expressions within its
fields (such as the condition string), these errors will be reported in
diagnostic_info
as SystemFunctionResults .
Review the compiled SearchConfig
The SearchConfig applied when the query is run is available in
search_signals
in the response. Reviewing the SearchConfig might provide insight into
additional issues not outlined here.
What's next
For more information about the structure of the SearchConfig and its
components, see the search_config documentation .
For more information about expression syntax, see the
Dialogflow CX conditions and system functions reference .
For more information about filter expression syntax for search, see
Filter and order results .
Previous
arrow_back
Data store hybrid agents
Next
Flow-based agent basics
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
