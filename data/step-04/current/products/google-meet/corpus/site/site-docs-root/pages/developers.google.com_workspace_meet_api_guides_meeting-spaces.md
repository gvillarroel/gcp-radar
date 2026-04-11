---
title: "Create and manage meeting spaces \_|\_ Google Meet \_|\_ Google for Developers"
url: https://developers.google.com/workspace/meet/api/guides/meeting-spaces
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/guides/overview
source_metadata:
  url: https://developers.google.com/workspace/meet/api/guides/meeting-spaces
  title: "Create and manage meeting spaces \_|\_ Google Meet \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Meet
Guides
Send feedback
Create and manage meeting spaces
Stay organized with collections
Save and categorize content based on your preferences.
This guide explains how to create, get, and update a meeting space plus end an
active conference on the spaces resource of the Google Meet REST API.
Create a meeting space
To create a meeting space ,
use the create method
on the spaces resource.
The method returns an instance of a spaces resource, which includes the
SpaceConfig object
that's the configuration for the meeting space. It also contains the
ActiveConference
object that's a link to the current
conferenceRecords
resource within the meeting space.
The following code sample shows how to create a meeting space:
Java
java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/createspace/AsyncCreateSpace.java
View on GitHub
import com.google.api.core.ApiFuture ;
import com.google.apps.meet.v2.CreateSpaceRequest ;
import com.google.apps.meet.v2.Space ;
import com.google.apps.meet.v2.SpacesServiceClient ;
public class AsyncCreateSpace {
public static void main ( String [] args ) throws Exception {
asyncCreateSpace ();
}
public static void asyncCreateSpace () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) {
CreateSpaceRequest request =
CreateSpaceRequest . newBuilder (). setSpace ( Space . newBuilder (). build ()). build ();
ApiFuture<Space> future = spacesServiceClient . createSpaceCallable (). futureCall ( request );
// Do something.
Space response = future . get ();
}
}
}
Node.js
packages/google-apps-meet/samples/generated/v2/spaces_service.create_space.js
View on GitHub
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Space to be created. As of May 2023, the input space can be empty. Later on
* the input space can be non-empty when space configuration is introduced.
*/
// const space = {}
// Imports the Meet library
const { SpacesServiceClient } = require ( '@google-apps/meet' ). v2 ;
// Instantiates a client
const meetClient = new SpacesServiceClient ();
async function callCreateSpace () {
// Construct request
const request = {
};
// Run request
const response = await meetClient . createSpace ( request );
console . log ( response );
}
callCreateSpace ();
Python
packages/google-apps-meet/samples/generated_samples/meet_v2_generated_spaces_service_create_space_async.py
View on GitHub
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.apps import meet_v2
async def sample_create_space ():
# Create a client
client = meet_v2 . SpacesServiceAsyncClient ()
# Initialize request argument(s)
request = meet_v2 . CreateSpaceRequest ()
# Make the request
response = await client . create_space ( request = request )
# Handle the response
print ( response )
cURL
curl -X POST "https://meet.googleapis.com/v2/spaces" \
-H "Authorization: Bearer ACCESS_TOKEN " \
-H "Content-Type: application/json" \
-d '{}'
Replace ACCESS_TOKEN with the access token that grants access to the API.
Get details about a meeting space
To get details about an active meeting space and its settings, use the
get method on the
spaces resource. Set the
name path parameter using the format spaces/{space} or
spaces/{meetingCode} . For more information, see How Meet
identifies a meeting
space .
The method returns a meeting space as an instance of the
spaces resource. To determine
if an active conference exists, examine the activeConference field.
The following code sample shows how to retrieve a meeting space:
Java
java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/getspace/AsyncGetSpace.java
View on GitHub
import com.google.api.core.ApiFuture ;
import com.google.apps.meet.v2.GetSpaceRequest ;
import com.google.apps.meet.v2.Space ;
import com.google.apps.meet.v2.SpaceName ;
import com.google.apps.meet.v2.SpacesServiceClient ;
public class AsyncGetSpace {
public static void main ( String [] args ) throws Exception {
asyncGetSpace ();
}
public static void asyncGetSpace () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) {
GetSpaceRequest request =
GetSpaceRequest . newBuilder (). setName ( SpaceName . of ( "[SPACE]" ). toString ()). build ();
ApiFuture<Space> future = spacesServiceClient . getSpaceCallable (). futureCall ( request );
// Do something.
Space response = future . get ();
}
}
}
Node.js
packages/google-apps-meet/samples/generated/v2/spaces_service.get_space.js
View on GitHub
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Required. Resource name of the space.
* Format: `spaces/{space}` or `spaces/{meetingCode}`.
* `{space}` is the resource identifier for the space. It's a unique,
* server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`.
* `{meetingCode}` is an alias for the space. It's a typeable, unique
* character string and is non-case sensitive. For example, `abc-mnop-xyz`.
* The maximum length is 128 characters.
* A `meetingCode` shouldn't be stored long term as it can become
* dissociated from a meeting space and can be reused for different meeting
* spaces in the future. Generally, a `meetingCode` expires 365 days after
* last use. For more information, see Learn about meeting codes in Google
* Meet (https://support.google.com/meet/answer/10710509).
* For more information, see How Meet identifies a meeting
* space (https://developers.google.com/meet/api/guides/meeting-spaces#identify-meeting-space).
*/
// const name = 'abc123'
// Imports the Meet library
const { SpacesServiceClient } = require ( '@google-apps/meet' ). v2 ;
// Instantiates a client
const meetClient = new SpacesServiceClient ();
async function callGetSpace () {
// Construct request
const request = {
name ,
};
// Run request
const response = await meetClient . getSpace ( request );
console . log ( response );
}
callGetSpace ();
Python
packages/google-apps-meet/samples/generated_samples/meet_v2_generated_spaces_service_get_space_async.py
View on GitHub
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.apps import meet_v2
async def sample_get_space ():
# Create a client
client = meet_v2 . SpacesServiceAsyncClient ()
# Initialize request argument(s)
request = meet_v2 . GetSpaceRequest (
name = "name_value" ,
)
# Make the request
response = await client . get_space ( request = request )
# Handle the response
print ( response )
cURL
curl -X GET "https://meet.googleapis.com/v2/spaces/ SPACE_NAME " \
-H "Authorization: Bearer ACCESS_TOKEN "
Replace ACCESS_TOKEN with the access token that grants access to the API.
Replace the space name value with the unique server-generated ID for the meeting
space.
Update a meeting space
To update the details of a meeting space, use the
patch method on the
spaces resource. Set the
space.name path parameter using the format spaces/{space} . For more
information, see How Meet identifies a meeting
space .
The patch method also takes an optional updateMask query parameter. The
field is of type
FieldMask .
This is a comma-delimited list of fields you want to update in the space.
The method returns a meeting space as an instance of the
spaces resource.
The following code sample shows how to update a meeting space:
Java
java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/updatespace/AsyncUpdateSpace.java
View on GitHub
import com.google.api.core.ApiFuture ;
import com.google.apps.meet.v2.Space ;
import com.google.apps.meet.v2.SpacesServiceClient ;
import com.google.apps.meet.v2.UpdateSpaceRequest ;
import com.google.protobuf.FieldMask ;
public class AsyncUpdateSpace {
public static void main ( String [] args ) throws Exception {
asyncUpdateSpace ();
}
public static void asyncUpdateSpace () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) {
UpdateSpaceRequest request =
UpdateSpaceRequest . newBuilder ()
. setSpace ( Space . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Space> future = spacesServiceClient . updateSpaceCallable (). futureCall ( request );
// Do something.
Space response = future . get ();
}
}
}
Node.js
packages/google-apps-meet/samples/generated/v2/spaces_service.update_space.js
View on GitHub
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Required. Space to be updated.
*/
// const space = {}
/**
* Optional. Field mask used to specify the fields to be updated in the space.
* If update_mask isn't provided(not set, set with empty paths, or only has ""
* as paths), it defaults to update all fields provided with values in the
* request.
* Using "*" as update_mask will update all fields, including deleting fields
* not set in the request.
*/
// const updateMask = {}
// Imports the Meet library
const { SpacesServiceClient } = require ( '@google-apps/meet' ). v2 ;
// Instantiates a client
const meetClient = new SpacesServiceClient ();
async function callUpdateSpace () {
// Construct request
const request = {
space ,
};
// Run request
const response = await meetClient . updateSpace ( request );
console . log ( response );
}
callUpdateSpace ();
Python
packages/google-apps-meet/samples/generated_samples/meet_v2_generated_spaces_service_update_space_async.py
View on GitHub
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.apps import meet_v2
async def sample_update_space ():
# Create a client
client = meet_v2 . SpacesServiceAsyncClient ()
# Initialize request argument(s)
request = meet_v2 . UpdateSpaceRequest ()
# Make the request
response = await client . update_space ( request = request )
# Handle the response
print ( response )
cURL
curl -X PATCH "https://meet.googleapis.com/v2/spaces/ SPACE_NAME ?updateMask=config.accessType" \
-H "Authorization: Bearer ACCESS_TOKEN " \
-H "Content-Type: application/json" \
-d '{
"config": {
"accessType": "RESTRICTED"
}
}'
Replace ACCESS_TOKEN with the access token that grants access to the API.
Replace the space name value with the unique server-generated ID for the meeting
space.
End active conference
To end an active conference within a meeting space (if there's one), use the
endActiveConference
method on the spaces resource.
Set the name path parameter using the format spaces/{space} . Both the
request and response body are empty. For more information, see How
Meet identifies a meeting
space .
The following code sample shows how to end an active conference:
Java
java-meet/samples/snippets/generated/com/google/apps/meet/v2/spacesservice/endactiveconference/AsyncEndActiveConference.java
View on GitHub
import com.google.api.core.ApiFuture ;
import com.google.apps.meet.v2.EndActiveConferenceRequest ;
import com.google.apps.meet.v2.SpaceName ;
import com.google.apps.meet.v2.SpacesServiceClient ;
import com.google.protobuf.Empty ;
public class AsyncEndActiveConference {
public static void main ( String [] args ) throws Exception {
asyncEndActiveConference ();
}
public static void asyncEndActiveConference () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SpacesServiceClient spacesServiceClient = SpacesServiceClient . create ()) {
EndActiveConferenceRequest request =
EndActiveConferenceRequest . newBuilder ()
. setName ( SpaceName . of ( "[SPACE]" ). toString ())
. build ();
ApiFuture<Empty> future =
spacesServiceClient . endActiveConferenceCallable (). futureCall ( request );
// Do something.
future . get ();
}
}
}
Node.js
packages/google-apps-meet/samples/generated/v2/spaces_service.end_active_conference.js
View on GitHub
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Required. Resource name of the space.
* Format: `spaces/{space}`.
* `{space}` is the resource identifier for the space. It's a unique,
* server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`.
* For more information, see How Meet identifies a meeting
* space (https://developers.google.com/meet/api/guides/meeting-spaces#identify-meeting-space).
*/
// const name = 'abc123'
// Imports the Meet library
const { SpacesServiceClient } = require ( '@google-apps/meet' ). v2 ;
// Instantiates a client
const meetClient = new SpacesServiceClient ();
async function callEndActiveConference () {
// Construct request
const request = {
name ,
};
// Run request
const response = await meetClient . endActiveConference ( request );
console . log ( response );
}
callEndActiveConference ();
Python
packages/google-apps-meet/samples/generated_samples/meet_v2_generated_spaces_service_end_active_conference_async.py
View on GitHub
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.apps import meet_v2
async def sample_end_active_conference ():
# Create a client
client = meet_v2 . SpacesServiceAsyncClient ()
# Initialize request argument(s)
request = meet_v2 . EndActiveConferenceRequest (
name = "name_value" ,
)
# Make the request
await client . end_active_conference ( request = request )
cURL
curl -X POST "https://meet.googleapis.com/v2/spaces/ SPACE_NAME :endActiveConference" \
-H "Authorization: Bearer ACCESS_TOKEN " \
-H "Content-Type: application/json" \
-d '{}'
Replace ACCESS_TOKEN with the access token that grants access to the API.
Replace the space name value with the unique server-generated ID for the meeting
space.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
