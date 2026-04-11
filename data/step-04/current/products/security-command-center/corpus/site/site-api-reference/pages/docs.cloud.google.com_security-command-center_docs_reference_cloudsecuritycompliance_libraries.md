---
title: "Compliance Manager client libraries \_|\_ Security Command Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/libraries
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/libraries
  title: "Compliance Manager client libraries \_|\_ Security Command Center \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Reference
Send feedback
Compliance Manager client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Security Compliance API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
C#
Install-Package Google.Cloud.CloudSecurityCompliance.V1
For more information, see Setting Up a C# Development Environment .
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - cloudsecuritycompliance < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - cloudsecuritycompliance : 0.15.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-cloudsecuritycompliance" % "0.15.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/google-cloud-cloudsecuritycompliance
For more information, see Setting Up a Node.js Development Environment .
Python
pip install --upgrade google-cloud-cloudsecuritycompliance
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
// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//! [all]
#include "google/cloud/cloudsecuritycompliance/v1/config_client.h"
#include "google/cloud/location.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 3 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " organization-id location-id \n " ;
return 1 ;
}
auto const parent =
std :: string ( "organizations/" ) + argv [ 1 ] + "/locations/" + argv [ 2 ];
namespace cloudsecuritycompliance =
:: google :: cloud :: cloudsecuritycompliance_v1 ;
auto client = cloudsecuritycompliance :: ConfigClient (
cloudsecuritycompliance :: MakeConfigConnection ());
for ( auto r : client . ListFrameworks ( parent )) {
if ( ! r ) throw std :: move ( r ). status ();
std :: cout << r - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
//! [all]
C#
using Google.Cloud.CloudSecurityCompliance.V1 ;
public sealed partial class GeneratedConfigClientSnippets
{
/// <summary>Snippet for CreateCloudControl</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void CreateCloudControl ()
{
// Create client
ConfigClient configClient = ConfigClient . Create ();
// Initialize request argument(s)
string parent = "organizations/[ORGANIZATION]/locations/[LOCATION]" ;
CloudControl cloudControl = new CloudControl ();
string cloudControlId = "" ;
// Make the request
CloudControl response = configClient . CreateCloudControl ( parent , cloudControl , cloudControlId );
}
}
Java
import com.google.cloud.cloudsecuritycompliance.v1. ConfigClient ;
import com.google.cloud.cloudsecuritycompliance.v1. CreateFrameworkRequest ;
import com.google.cloud.cloudsecuritycompliance.v1. Framework ;
import com.google.cloud.cloudsecuritycompliance.v1. OrganizationLocationName ;
public class SyncCreateFramework {
public static void main ( String [] args ) throws Exception {
syncCreateFramework ();
}
public static void syncCreateFramework () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ConfigClient configClient = ConfigClient . create ()) {
CreateFrameworkRequest request =
CreateFrameworkRequest . newBuilder ()
. setParent ( OrganizationLocationName . of ( "[ORGANIZATION]" , "[LOCATION]" ). toString ())
. setFrameworkId ( "frameworkId886666169" )
. setFramework ( Framework . newBuilder (). build ())
. build ();
Framework response = configClient . createFramework ( request );
}
}
}
Node.js
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Required. The parent resource name, in the format
* `organizations/{organization}/locations/{location}`.
* The only supported location is `global`.
*/
// const parent = 'abc123'
/**
* Required. The identifier (ID) of the framework. The ID is not the full name
* of the framework; it's the last part of the full name of the framework.
*/
// const frameworkId = 'abc123'
/**
* Required. The resource being created.
*/
// const framework = {}
// Imports the Cloudsecuritycompliance library
const { ConfigClient } = require ( '@google-cloud/cloudsecuritycompliance' ). v1 ;
// Instantiates a client
const cloudsecuritycomplianceClient = new ConfigClient ();
async function callCreateFramework () {
// Construct request
const request = {
parent ,
frameworkId ,
framework ,
};
// Run request
const response = await cloudsecuritycomplianceClient . createFramework ( request );
console . log ( response );
}
callCreateFramework ();
Python
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import cloudsecuritycompliance_v1
def sample_create_framework ():
# Create a client
client = cloudsecuritycompliance_v1 . ConfigClient ()
# Initialize request argument(s)
framework = cloudsecuritycompliance_v1 . Framework ()
framework . name = "name_value"
request = cloudsecuritycompliance_v1 . CreateFrameworkRequest (
parent = "parent_value" ,
framework_id = "framework_id_value" ,
framework = framework ,
)
# Make the request
response = client . create_framework ( request = request )
# Handle the response
print ( response )
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-securitycompliance on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-securitycompliance on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-securitycompliance on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-securitycompliance on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-securitycompliance on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
