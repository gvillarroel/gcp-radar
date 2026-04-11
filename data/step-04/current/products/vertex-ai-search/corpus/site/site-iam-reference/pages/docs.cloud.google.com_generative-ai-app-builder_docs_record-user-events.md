---
title: "Record real-time user events \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/record-user-events
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/record-user-events
  title: "Record real-time user events \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Record real-time user events
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to record user events in real time. User events are
required for media apps. If you don't use media apps, importing user events
isn't required. However, recording user events is recommended for custom search
and recommendations apps.
To see an example of record user events,
run the "Record user events" notebook in one of the following
environments:
Open in Colab
|
View on GitHub
For the user event types that you can record, see the eventType field of the
userEvents object. By ingesting user events, you can improve the
quality of your results. For example, user events affect the ranking of search
results. Results with higher click-through rates are boosted, while results with
lower click-through rates are buried. Don't record user events for documents
that you have not yet imported.
If you are using an app with multiple data stores attached, ingest user events
at the location level instead of the data-store level. This allows a given user
event to be sent to the data store that it's associated with. When recording
user events at a location level, you must include the engine field in the user
events to associate the event with the correct app. For examples of user events
that include the engine field, see the following:
Custom apps user event type examples and schemas
Media apps user event type examples and schemas
To import historical user events in bulk, see Import historical user events .
You can record user events in the following ways:
With a JavaScript pixel .
With the userEvents.write method .
For the JSON representation for user events, see
userEvents in the API reference.
Note: The search widget also records user events. If you
add the widget to a web page and the user clicks a search result,
the widget records a view-item user event for that click.
Before you begin
Before you import user events:
Create a data store and an app.
Review
About media user events
or About user events for custom apps
for user event requirements.
Record real-time user events with a JavaScript pixel
To record user events with a JavaScript pixel:
Create an API key for calls to the userEvents.collect
method.
See the JavaScript pixel example for an example of a
JavaScript tag that collects user events.
Create an API key
An API key is required if you use a JavaScript pixel to collect user events from
users' browsers.
To create an API key for calls to the userEvents.collect
method, complete the following steps:
In the Google Cloud console, go to the Credentials page.
Credentials
In the project list at the top of the Google Cloud console page, select
your project (the project might already be selected).
Click Create credentials and then select API key .
Don't add any referrer restrictions . Some user privacy settings don't
pass the referrer URL.
Take note of the generated API key, which you will use when calling
user event logging.
For increased security, add an
HTTP restriction
to your API Key to restrict access to the Vertex AI Search service
at https://discoveryengine.googleapis.com/* .
Note: The API key is only for authenticating the
userEvents.collect method and the
servingConfigs.searchLite method.
Other Vertex AI Search methods require OAuth 2.0 through a service account
or a user account.
JavaScript pixel example
The following example records a view-item user event using a JavaScript
pixel.
For the JSON representation for user events, see userEvents in
the API reference.
< script type = "text/javascript" >
var user_event = {
"eventType" : "view-item" ,
"userPseudoId" : " USER_PSEUDO_ID " ,
"engine" : "projects/ PROJECT_ID /locations/ LOCATION_ID /collections/default_collection/engines/ APP_ID " ,
"userInfo" : {
"userId" : " USER_ID "
},
"attributionToken" : " ATTRIBUTION_TOKEN " ,
"tagIds" : " TAG_ID " ,
"documents" : [
{
"id" : " DOCUMENT_ID "
}
]
};
var _gre = _gre || {};
// Credentials for project.
_gre . apiKey = '[API_KEY]' ;
_gre . logEvent = user_event ;
_gre . projectId = ' PROJECT_ID ' ;
_gre . locationId = ' LOCATION_ID ' ;
_gre . dataStoreId = ' DATA_STORE_ID ' ;
( function () {
var gre = document . createElement ( 'script' ); gre . type = 'text/javascript' ; gre . async = true ;
gre . src = 'https://www.gstatic.com/discoveryengine/v1beta_event.js' ;
var s = document . getElementsByTagName ( 'script' )[ 0 ]; s . parentNode . insertBefore ( gre , s );
})();
< /script >
Record real-time user events with the userEvents.write method
REST
You can use the userEvents.write
method to send user events directly to the API from your backend server.
To record user events, send a POST request to the userEvents.write method and
provide the appropriate request body. For the JSON representation for user
events, see userEvents in the API reference.
If you are recording user events at the location level, use the endpoint
https://discoveryengine.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/ LOCATION /userEvents:write .
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
"https://discoveryengine.googleapis.com/v1/projects/ PROJECT_NUMBER /locations/global/userEvents:write" \
-d '{
"eventType": "view-item",
"userPseudoId": "visitor0",
"engine": "projects/ PROJECT_NUMBER /locations/global/collections/default_collection/engines/ APP_ID ",
"eventTime": "2020-01-01T03:33:33.000001Z",
"tagIds": ["321"],
"attributionToken": "ABC",
"attributes": {
"example_text_attribute": {
"text": ["text_1", "text_2"]
},
"example_number_attribute": {
"numbers": [3.14, 42, 1.2345]
}
},
"documents": [{
"id": "abc"
}],
"userInfo": {
"userId": "abc",
"userAgent": "Mozilla/5.0"
},
"pageInfo": {
"uri": "http://example",
"referrerUri": "http://example",
"pageViewId": "currentPageUri"
}
}'
C#
For more information, see the
Vertex AI Search C# API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.DiscoveryEngine.V1 ;
public sealed partial class GeneratedUserEventServiceClientSnippets
{
/// <summary>Snippet for WriteUserEvent</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void WriteUserEventRequestObject ()
{
// Create client
UserEventServiceClient userEventServiceClient = UserEventServiceClient . Create ();
// Initialize request argument(s)
WriteUserEventRequest request = new WriteUserEventRequest
{
ParentAsDataStoreName = DataStoreName . FromProjectLocationDataStore ( "[PROJECT]" , "[LOCATION]" , "[DATA_STORE]" ),
UserEvent = new UserEvent (),
WriteAsync = false ,
};
// Make the request
UserEvent response = userEventServiceClient . WriteUserEvent ( request );
}
}
Go
For more information, see the
Vertex AI Search Go API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
discoveryengine "cloud.google.com/go/discoveryengine/apiv1"
discoveryenginepb "cloud.google.com/go/discoveryengine/apiv1/discoveryenginepb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := discoveryengine . NewUserEventClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & discoveryenginepb . WriteUserEventRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/discoveryengine/apiv1/discoveryenginepb#WriteUserEventRequest.
}
resp , err := c . WriteUserEvent ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
For more information, see the
Vertex AI Search Java API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.discoveryengine.v1. DataStoreName ;
import com.google.cloud.discoveryengine.v1. UserEvent ;
import com.google.cloud.discoveryengine.v1. UserEventServiceClient ;
import com.google.cloud.discoveryengine.v1. WriteUserEventRequest ;
public class SyncWriteUserEvent {
public static void main ( String [] args ) throws Exception {
syncWriteUserEvent ();
}
public static void syncWriteUserEvent () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( UserEventServiceClient userEventServiceClient = UserEventServiceClient . create ()) {
WriteUserEventRequest request =
WriteUserEventRequest . newBuilder ()
. setParent (
DataStoreName . ofProjectLocationDataStoreName (
"[PROJECT]" , "[LOCATION]" , "[DATA_STORE]" )
. toString ())
. setUserEvent ( UserEvent . newBuilder (). build ())
. setWriteAsync ( true )
. build ();
UserEvent response = userEventServiceClient . writeUserEvent ( request );
}
}
}
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import discoveryengine_v1
def sample_write_user_event ():
# Create a client
client = discoveryengine_v1 . UserEventServiceClient ()
# Initialize request argument(s)
request = discoveryengine_v1 . WriteUserEventRequest (
parent = "parent_value" ,
)
# Make the request
response = client . write_user_event ( request = request )
# Handle the response
print ( response )
Ruby
For more information, see the
Vertex AI Search Ruby API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/discovery_engine/v1"
##
# Snippet for the write_user_event call in the UserEventService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::DiscoveryEngine::V1::UserEventService::Client#write_user_event.
#
def write_user_event
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: DiscoveryEngine :: V1 :: UserEventService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: DiscoveryEngine :: V1 :: WriteUserEventRequest . new
# Call the write_user_event method.
result = client . write_user_event request
# The returned object is of type Google::Cloud::DiscoveryEngine::V1::UserEvent.
p result
end
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
