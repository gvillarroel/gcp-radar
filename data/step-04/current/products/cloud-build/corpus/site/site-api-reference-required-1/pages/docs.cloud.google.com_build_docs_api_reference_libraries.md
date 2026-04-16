---
title: "Cloud Build client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/api/reference/libraries
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/build/docs/api/reference/libraries
  title: "Cloud Build client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Reference
Send feedback
Cloud Build client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Build API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
However, we recommend using the older Google API Client
Libraries if running on
App Engine standard environment . Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
Go
go get cloud.google.com/go/cloudbuild
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven, add this to your pom.xml file:
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - build < / artifactId >
< version>3 .8.0 < / version >
< / dependency >
If you are using Gradle, add this to your dependencies:
compile group : ' com . google . cloud ' , name : ' google - cloud - build ' , version : ' 3.8.0 '
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/cloudbuild
For more information, see Setting Up a Node.js Development Environment .
Python
pip install --upgrade google-cloud-build
For more information, see Setting Up a Python Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library.
C++
#include "google/cloud/cloudbuild/v1/cloud_build_client.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 2 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id \n " ;
return 1 ;
}
namespace cloudbuild = :: google :: cloud :: cloudbuild_v1 ;
auto client =
cloudbuild :: CloudBuildClient ( cloudbuild :: MakeCloudBuildConnection ());
auto const * filter = R " ""( status="WORKING" )"" " ; // List only running builds
for ( auto b : client . ListBuilds ( argv [ 1 ], filter )) {
if ( ! b ) throw std :: move ( b ). status ();
std :: cout << b - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
Node.js
async function quickstart (
projectId = 'YOUR_PROJECT_ID' , // Your Google Cloud Platform project ID
triggerId = 'YOUR_TRIGGER_ID' , // UUID for build trigger.
branchName = 'BRANCH_TO_BUILD' // Branch to run build against.
) {
// Imports the Google Cloud client library
const { CloudBuildClient } = require ( ' @google-cloud/cloudbuild ' );
// Creates a client
const cb = new CloudBuildClient ();
// Note: for Private Pools, you'll have to specify an API endpoint value
// For example:
// const cb = new CloudBuildClient({ apiEndpoint: '<YOUR_POOL_REGION>-cloudbuild.googleapis.com' });
// Starts a build against the branch provided.
const [ resp ] = await cb . runBuildTrigger ({
projectId ,
triggerId ,
source : {
projectId ,
dir : './' ,
branchName ,
},
});
console . info ( `triggered build for ${ triggerId } ` );
const [ build ] = await resp . promise ();
const STATUS_LOOKUP = [
' UNKNOWN ' ,
'Queued' ,
'Working' ,
'Success' ,
'Failure' ,
'Error' ,
'Timeout' ,
'Cancelled' ,
];
for ( const step of build . steps ) {
console . info (
`step:\n\tname: ${ step . name } \n\tstatus: ${ STATUS_LOOKUP [ build . status ] } `
);
}
}
Python
import google.auth
from google.cloud.devtools import cloudbuild_v1
def quickstart () - > None :
"""Create and execute a simple Google Cloud Build configuration,
print the in-progress status and print the completed status."""
# Authorize the client with Google defaults
credentials , project_id = google . auth . default ()
client = cloudbuild_v1 . services . cloud_build . CloudBuildClient ()
# If you're using Private Pools or a non-global default pool, add a regional
# `api_endpoint` to `CloudBuildClient()`
# For example, '<YOUR_POOL_REGION>-cloudbuild.googleapis.com'
#
# from google.api_core import client_options
# client_options = client_options.ClientOptions(
# api_endpoint="us-central1-cloudbuild.googleapis.com"
# )
# client = cloudbuild_v1.services.cloud_build.CloudBuildClient(client_options=client_options)
build = cloudbuild_v1 . Build ()
# The following build steps will output "hello world"
# For more information on build configuration, see
# https://cloud.google.com/build/docs/configuring-builds/create-basic-configuration
build . steps = [
{ "name" : "ubuntu" , "entrypoint" : "bash" , "args" : [ "-c" , "echo hello world" ]}
]
operation = client . create_build ( project_id = project_id , build = build )
# Print the in-progress operation
print ( "IN PROGRESS:" )
print ( operation . metadata )
result = operation . result ()
# Print the completed status
print ( "RESULT:" , result . status )
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloudbuild on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloudbuild on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloudbuild on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloudbuild on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloudbuild on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
