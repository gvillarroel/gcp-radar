---
title: "Service Directory client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/reference/libraries
  title: "Service Directory client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Reference
Send feedback
Service Directory client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Service Directory API. Client libraries make it easier to access
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
Using PowerShell or the Visual Studio Package Manager Console:
Install-Package "Google.Cloud.ServiceDirectory.V1" -Version "1.0.0"
Using the dotnet CLI:
dotnet add package "Google.Cloud.ServiceDirectory.V1" -Version "1.0.0"
For more information, see Setting Up a C# Development Environment .
Go
go get "cloud.google.com/go/servicedirectory/apiv1beta1"
For more information, see Setting Up a Go Development Environment .
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
< artifactId>google - cloud - servicedirectory < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - servicedirectory : 2.89.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-servicedirectory" % "2.89.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/service-directory
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-service-directory
For more information, see Using PHP on Google Cloud .
Python
pip install google-cloud-service-directory
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-service_directory
For more information, see Setting Up a Ruby Development Environment .
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
#include "google/cloud/servicedirectory/v1/registration_client.h"
#include "google/cloud/location.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 3 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id location-id \n " ;
return 1 ;
}
auto const location = google :: cloud :: Location ( argv [ 1 ], argv [ 2 ]);
namespace servicedirectory = :: google :: cloud :: servicedirectory_v1 ;
auto client = servicedirectory :: RegistrationServiceClient (
servicedirectory :: MakeRegistrationServiceConnection ());
for ( auto ns : client . ListNamespaces ( location . FullName ())) {
if ( ! ns ) throw std :: move ( ns ). status ();
std :: cout << ns - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
Go
// Sample quickstart is a program that uses Cloud Service Directory
// create. delete, and resolve functionality.
package main
import (
"context"
"fmt"
"log"
servicedirectory "cloud.google.com/go/servicedirectory/apiv1"
sdpb "cloud.google.com/go/servicedirectory/apiv1/servicedirectorypb"
)
func main () {
projectID := "your-project-id"
location := "us-west1"
serviceID := "golang-quickstart-service"
namespaceID := "golang-quickstart-namespace"
endpointID := "golang-quickstart-endpoint"
ctx := context . Background ()
// Create a registration client.
registry , err := servicedirectory . NewRegistrationClient ( ctx )
if err != nil {
log . Fatalf ( "servicedirectory.NewRegistrationClient: %v" , err )
}
defer registry . Close ()
// Create a lookup client.
resolver , err := servicedirectory . NewLookupClient ( ctx )
if err != nil {
log . Fatalf ( "servicedirectory.NewLookupClient: %v" , err )
}
defer resolver . Close ()
// Create a Namespace.
createNsReq := & sdpb . CreateNamespaceRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
NamespaceId : namespaceID ,
}
namespace , err := registry . CreateNamespace ( ctx , createNsReq )
if err != nil {
log . Fatalf ( "servicedirectory.CreateNamespace: %v" , err )
}
// Create a Service.
createServiceReq := & sdpb . CreateServiceRequest {
Parent : namespace . Name ,
ServiceId : serviceID ,
Service : & sdpb . Service {
Annotations : map [ string ] string {
"key1" : "value1" ,
"key2" : "value2" ,
},
},
}
service , err := registry . CreateService ( ctx , createServiceReq )
if err != nil {
log . Fatalf ( "servicedirectory.CreateService: %v" , err )
}
// Create an Endpoint.
createEndpointReq := & sdpb . CreateEndpointRequest {
Parent : service . Name ,
EndpointId : endpointID ,
Endpoint : & sdpb . Endpoint {
Address : "8.8.8.8" ,
Port : 8080 ,
Annotations : map [ string ] string {
"key1" : "value1" ,
"key2" : "value2" ,
},
},
}
_ , err = registry . CreateEndpoint ( ctx , createEndpointReq )
if err != nil {
log . Fatalf ( "servicedirectory.CreateEndpoint: %v" , err )
}
// Now Resolve the service.
lookupRequest := & sdpb . ResolveServiceRequest {
Name : service . Name ,
}
result , err := resolver . ResolveService ( ctx , lookupRequest )
if err != nil {
log . Fatalf ( "servicedirectory.ResolveService: %v" , err )
return
}
fmt . Printf ( "Successfully Resolved Service %v" , result )
// Delete the namespace.
deleteNsReq := & sdpb . DeleteNamespaceRequest {
Name : fmt . Sprintf ( "projects/%s/locations/%s/namespaces/%s" ,
projectID , location , namespaceID ),
}
registry . DeleteNamespace ( ctx , deleteNsReq ) // Ignore results.
}
Java
import com.google.cloud.servicedirectory.v1. LocationName ;
import com.google.cloud.servicedirectory.v1. Namespace ;
import com.google.cloud.servicedirectory.v1. RegistrationServiceClient ;
import com.google.cloud.servicedirectory.v1. RegistrationServiceClient . ListNamespacesPagedResponse ;
import java.io.IOException ;
public class Quickstart {
public static void quickstart () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "your-region" ;
quickstart ( projectId , locationId );
}
public static void quickstart ( String projectId , String locationId ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( RegistrationServiceClient client = RegistrationServiceClient . create ()) {
// The project and location that hold the namespace to list.
LocationName parent = LocationName . of ( projectId , locationId );
// Call the API.
ListNamespacesPagedResponse response = client . listNamespaces ( parent );
// Iterate over each namespace and print its name.
System . out . println ( "Namespaces:" );
for ( Namespace namespace : response . iterateAll ()) {
System . out . println ( namespace . getName ());
}
}
}
}
Node.js
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-central1';
// Imports the Google Cloud client library
const {
RegistrationServiceClient ,
} = require ( ' @google-cloud/service-directory ' );
// Creates a client
const registrationServiceClient = new RegistrationServiceClient ();
// Build the location name
const locationName = registrationServiceClient . locationPath (
projectId ,
locationId
);
async function listNamespaces () {
const [ namespaces ] = await registrationServiceClient . listNamespaces ({
parent : locationName ,
});
console . log ( 'Namespaces: ' );
for ( const n of namespaces ) {
console . log ( ` ${ n . name } ` );
}
return namespaces ;
}
return listNamespaces ();
PHP
use Google\Cloud\ServiceDirectory\V1\Client\RegistrationServiceClient;
use Google\Cloud\ServiceDirectory\V1\ListNamespacesRequest;
/** Uncomment and populate these variables in your code */
// $projectId = '[YOUR_PROJECT_ID]';
// $locationId = '[YOUR_GCP_REGION]';
// Instantiate a client.
$client = new RegistrationServiceClient();
// Run request.
$locationName = RegistrationServiceClient::locationName($projectId, $locationId);
$listNamespacesRequest = (new ListNamespacesRequest())
->setParent($locationName);
$pagedResponse = $client->listNamespaces($listNamespacesRequest);
// Iterate over each namespace and print its name.
print('Namespaces: ' . PHP_EOL);
foreach ($pagedResponse->iterateAllElements() as $namespace) {
print($namespace->getName() . PHP_EOL);
}
Python
from google.cloud import servicedirectory_v1
from google.cloud.servicedirectory_v1.services.registration_service.pagers import (
ListNamespacesPager ,
)
def list_namespaces ( project_id : str , location : str ) - > ListNamespacesPager :
"""Lists all namespaces in the given location.
Args:
project_id: The Google Cloud project id.
location: The location which contains the namespaces to list.
Returns:
All namespaces in the given location.
"""
client = servicedirectory_v1 . RegistrationServiceClient ()
response = client . list_namespaces (
parent = f "projects/ { project_id } /locations/ { location } "
)
print ( f "Listed namespaces in { location } ." )
for namespace in response :
print ( f "Namespace: { namespace . name } " )
return response
Ruby
# Imports the Google Cloud client library
require "google/cloud/service_directory"
# Your Google Cloud Platform project ID
project = ENV [ "GOOGLE_CLOUD_PROJECT" ]
# Location of the Service Directory Namespace
location = "us-central1"
# Initialize a client
registration_service = Google :: Cloud :: ServiceDirectory . registration_service
# The resource name of the project
location_name = registration_service . location_path (
project : project , location : location
)
# Request list of namespaces in the project
response = registration_service . list_namespaces parent : location_name
# List all namespaces for your project
puts "Namespaces: "
response . each do | namespace |
puts namespace . name
end
Next steps
Learn how to programmatically configure Service Directory.
Configuring Service Directory
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
service-directory on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
service-directory on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
service-directory on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
service-directory on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
service-directory on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
service-directory on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
service-directory on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
service-directory on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
