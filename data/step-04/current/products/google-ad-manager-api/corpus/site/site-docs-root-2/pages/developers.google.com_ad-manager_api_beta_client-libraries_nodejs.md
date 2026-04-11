---
title: "Node.js \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/client-libraries/nodejs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/client-libraries/nodejs
  title: "Node.js \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Node.js
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Ad Manager API can be interacted with using a Node.js client library.
To use the client library, Node.js must be installed and the @google-ads/admanager package needs to be added as a dependency.
Authentication for the client library uses OAuth2 and Application Default Credentials.
HTTP requests and responses can be logged for debugging purposes.
Ad Manager API errors throw a GaxiosError exception, which includes a requestId for support.
Google provides a Node.js client library for interacting with
the Ad Manager API.
Prerequisite
To use the Node.js client library, you must have Node.js installed. For more
information, see Download Node.js® .
Install the client library
To get started, create a new project in the IDE of your choice or add the
dependency to an existing project. Google publishes client library artifacts to
npm as
@google-ads/admanager .
package.json
"dependencies" : {
"@google-ads/admanager" : "^0.4.0"
}
Command line
npm install @google-ads/admanager
Configure credentials
To authenticate, the Node.js client library uses OAuth2 and Application Default
Credentials (ADC). For creating and configuring your ADC credentials, see
Authentication .
Make your first request
Each service has a ServiceClient object with methods for each REST method.
For examples of each method, see the GitHub repository
googleapis/google-cloud-node .
The following example reads a
Network object:
// Resource name of the Network
const name = 'networks/ NETWORK_CODE '
// Imports the Admanager library
const { NetworkServiceClient } = require ( '@google-ads/admanager' ). v1 ;
// Instantiates a client
const admanagerClient = new NetworkServiceClient ();
async function callGetNetwork () {
// Construct request
const request = {
name ,
};
// Run request
const response = await admanagerClient . getNetwork ( request );
console . log ( response );
}
callGetNetwork (); network_service . get_network . js
Log HTTP requests and responses
The Node.js client library supports logging HTTP requests and responses.
By default, the client library disables logging.
To enable default logging to standard output, set the environment variable
GOOGLE_SDK_NODE_LOGGING to a comma-separated list of Google API package names.
You can enable logging for all Google APIs by setting the variable value to
all . For all available client library package names, see
Google Cloud Node.js Client Libraries
Node.js
// Enable logging for the Google Ad Manager API
process . env . GOOGLE_SDK_NODE_LOGGING = 'admanager' ;
// Enable logging for the Google Ad Manager and pubsub APIs.
process . env . GOOGLE_SDK_NODE_LOGGING = 'admanager,pubsub' ;
// Enable logging for all Google APIs
process . env . GOOGLE_SDK_NODE_LOGGING = 'all' ;
Linux or macOS
# Enable logging for the Google Ad Manager API.
export GOOGLE_SDK_NODE_LOGGING = admanager
# Enable logging for the Google Ad Manager and pubsub APIs.
export GOOGLE_SDK_NODE_LOGGING = admanager,pubsub
# Enable logging for all Google APIs
export GOOGLE_SDK_NODE_LOGGING = all
Windows
# Enable logging for the Google Ad Manager API.
set GOOGLE_SDK_NODE_LOGGING = admanager
# Enable logging for the Google Ad Manager and pubsub APIs.
set GOOGLE_SDK_NODE_LOGGING = admanager , pubsub
# Enable logging for all Google APIs
set GOOGLE_SDK_NODE_LOGGING = all
Alternatively, you can change the logging backend or hook log events.
For more information, see Google Logging Tools .
Handle errors
In the Node.js client library, all Ad Manager API errors throw an exception of
type
GaxiosError .
Ad Manager API errors include an error message and a unique requestId value
you can provide to the API support team. For assistance with
troubleshooting, see Contact API support . The
following example extracts the requestId value and error message:
const admanagerClient = new NetworkServiceClient ();
try {
const network = admanagerClient . getNetwork (
{ name : 'networks/ NETWORK_CODE ' }
);
console . log ( network );
} catch ( e ) {
if ( e instanceof GaxiosError ) {
// Load the error
const apiError = JSON . parse ( e . message ). error ;
const requestInfoType = 'type.googleapis.com/google.rpc.RequestInfo' ;
const requestInfo = apiError . details . find ( detail = > detail [ '@type' ] === requestInfoType );
console . error ( apiError . status + ' - ' + apiError . message );
console . error ( 'RequestId: ' + requestInfo . requestId );
} else {
throw e ;
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
