---
title: "Secret Manager client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/reference/libraries
  title: "Secret Manager client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Reference
Send feedback
Secret Manager client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Secret Manager API. Client libraries make it easier to access
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
Using PowerShell:
$ Install-Package Google.Cloud.SecretManager.V1 -Version 2.5.0
Using the dotnet CLI:
$ dotnet add package Google.Cloud.SecretManager.V1 --version 2.5.0
For more information, see Setting Up a C# Development Environment .
Go
$ go get cloud.google.com/go/secretmanager/apiv1
$ go get google.golang.org/genproto/googleapis/cloud/secretmanager/v1
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
< artifactId>google - cloud - secretmanager < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - secretmanager : 2.88.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-secretmanager" % "2.88.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
$ npm install @google-cloud/secret-manager
For more information, see Setting Up a Node.js Development Environment .
PHP
$ composer require google/cloud-secret-manager
For more information, see Using PHP on Google Cloud .
Python
$ pip install google-cloud-secret-manager
For more information, see Setting Up a Python Development Environment .
Ruby
$ gem install google-cloud-secret_manager
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
#include "google/cloud/secretmanager/v1/secret_manager_client.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 2 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id \n " ;
return 1 ;
}
namespace secretmanager = :: google :: cloud :: secretmanager_v1 ;
auto client = secretmanager :: SecretManagerServiceClient (
secretmanager :: MakeSecretManagerServiceConnection ());
auto const parent = std :: string ( "projects/" ) + argv [ 1 ];
for ( auto secret : client . ListSecrets ( parent )) {
if ( ! secret ) throw std :: move ( secret ). status ();
std :: cout << secret - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
C#
using System ;
using System.Text ;
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.SecretManager.V1 ;
using Google.Protobuf ;
public class QuickstartSample
{
public void Quickstart ( string projectId = "my-project" , string secretId = "my-secret" )
{
// Create the client.
SecretManagerServiceClient client = SecretManagerServiceClient . Create ();
// Build the parent project name.
ProjectName projectName = new ProjectName ( projectId );
// Build the secret to create.
Secret secret = new Secret
{
Replication = new Replication
{
Automatic = new Replication . Types . Automatic (),
},
};
Secret createdSecret = client . CreateSecret ( projectName , secretId , secret );
// Build a payload.
SecretPayload payload = new SecretPayload
{
Data = ByteString . CopyFrom ( "my super secret data" , Encoding . UTF8 ),
};
// Add a secret version.
SecretVersion createdVersion = client . AddSecretVersion ( createdSecret . SecretName , payload );
// Access the secret version.
AccessSecretVersionResponse result = client . AccessSecretVersion ( createdVersion . SecretVersionName );
// Print the results
//
// WARNING: Do not print secrets in production environments. This
// snippet is for demonstration purposes only.
string data = result . Payload . Data . ToStringUtf8 ();
Console . WriteLine ( $"Plaintext: {data}" );
}
}
Go
// Sample quickstart is a basic program that uses Secret Manager.
package main
import (
"context"
"fmt"
"log"
secretmanager "cloud.google.com/go/secretmanager/apiv1"
"cloud.google.com/go/secretmanager/apiv1/secretmanagerpb"
)
func main () {
// GCP project in which to store secrets in Secret Manager.
projectID := "your-project-id"
// Create the client.
ctx := context . Background ()
client , err := secretmanager . NewClient ( ctx )
if err != nil {
log . Fatalf ( "failed to setup client: %v" , err )
}
defer client . Close ()
// Create the request to create the secret.
createSecretReq := & secretmanagerpb . CreateSecretRequest {
Parent : fmt . Sprintf ( "projects/%s" , projectID ),
SecretId : "my-secret" ,
Secret : & secretmanagerpb . Secret {
Replication : & secretmanagerpb . Replication {
Replication : & secretmanagerpb . Replication_Automatic_ {
Automatic : & secretmanagerpb . Replication_Automatic {},
},
},
},
}
secret , err := client . CreateSecret ( ctx , createSecretReq )
if err != nil {
log . Fatalf ( "failed to create secret: %v" , err )
}
// Declare the payload to store.
payload := [] byte ( "my super secret data" )
// Build the request.
addSecretVersionReq := & secretmanagerpb . AddSecretVersionRequest {
Parent : secret . Name ,
Payload : & secretmanagerpb . SecretPayload {
Data : payload ,
},
}
// Call the API.
version , err := client . AddSecretVersion ( ctx , addSecretVersionReq )
if err != nil {
log . Fatalf ( "failed to add secret version: %v" , err )
}
// Build the request.
accessRequest := & secretmanagerpb . AccessSecretVersionRequest {
Name : version . Name ,
}
// Call the API.
result , err := client . AccessSecretVersion ( ctx , accessRequest )
if err != nil {
log . Fatalf ( "failed to access secret version: %v" , err )
}
// Print the secret payload.
//
// WARNING: Do not print the secret in a production environment - this
// snippet is showing how to access the secret material.
log . Printf ( "Plaintext: %s" , result . Payload . Data )
}
Java
import com.google.cloud.secretmanager.v1. AccessSecretVersionResponse ;
import com.google.cloud.secretmanager.v1. ProjectName ;
import com.google.cloud.secretmanager.v1. Replication ;
import com.google.cloud.secretmanager.v1. Secret ;
import com.google.cloud.secretmanager.v1. SecretManagerServiceClient ;
import com.google.cloud.secretmanager.v1. SecretPayload ;
import com.google.cloud.secretmanager.v1. SecretVersion ;
import com.google.protobuf. ByteString ;
public class Quickstart {
public void quickstart () throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String secretId = "your-secret-id" ;
quickstart ( projectId , secretId );
}
public void quickstart ( String projectId , String secretId ) throws Exception {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) {
// Build the parent name from the project.
ProjectName projectName = ProjectName . of ( projectId );
// Create the parent secret.
Secret secret =
Secret . newBuilder ()
. setReplication (
Replication . newBuilder ()
. setAutomatic ( Replication . Automatic . newBuilder (). build ())
. build ())
. build ();
Secret createdSecret = client . createSecret ( projectName , secretId , secret );
// Add a secret version.
SecretPayload payload =
SecretPayload . newBuilder (). setData ( ByteString . copyFromUtf8 ( "hello world!" )). build ();
SecretVersion addedVersion = client . addSecretVersion ( createdSecret . getName (), payload );
// Access the secret version.
AccessSecretVersionResponse response = client . accessSecretVersion ( addedVersion . getName ());
// Print the secret payload.
//
// WARNING: Do not print the secret in a production environment - this
// snippet is showing how to access the secret material.
String data = response . getPayload (). getData (). toStringUtf8 ();
System . out . printf ( "Plaintext: %s\n" , data );
}
}
}
Node.js
// Import the Secret Manager client and instantiate it:
const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' );
const client = new SecretManagerServiceClient ();
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// parent = 'projects/my-project', // Project for which to manage secrets.
// secretId = 'foo', // Secret ID.
// payload = 'hello world!' // String source data.
async function createAndAccessSecret () {
// Create the secret with automation replication.
const [ secret ] = await client . createSecret ({
parent : parent ,
secret : {
name : secretId ,
replication : {
automatic : {},
},
},
secretId ,
});
console . info ( `Created secret ${ secret . name } ` );
// Add a version with a payload onto the secret.
const [ version ] = await client . addSecretVersion ({
parent : secret . name ,
payload : {
data : Buffer . from ( payload , 'utf8' ),
},
});
console . info ( `Added secret version ${ version . name } ` );
// Access the secret.
const [ accessResponse ] = await client . accessSecretVersion ({
name : version . name ,
});
const responsePayload = accessResponse . payload . data . toString ( 'utf8' );
console . info ( `Payload: ${ responsePayload } ` );
}
createAndAccessSecret ();
PHP
// Import the Secret Manager client library.
use Google\Cloud\SecretManager\V1\AccessSecretVersionRequest;
use Google\Cloud\SecretManager\V1\AddSecretVersionRequest;
use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient;
use Google\Cloud\SecretManager\V1\CreateSecretRequest;
use Google\Cloud\SecretManager\V1\Replication;
use Google\Cloud\SecretManager\V1\Replication\Automatic;
use Google\Cloud\SecretManager\V1\Secret;
use Google\Cloud\SecretManager\V1\SecretPayload;
/** Uncomment and populate these variables in your code */
// $projectId = 'YOUR_GOOGLE_CLOUD_PROJECT' (e.g. 'my-project');
// $secretId = 'YOUR_SECRET_ID' (e.g. 'my-secret');
// Create the Secret Manager client.
$client = new SecretManagerServiceClient();
// Build the parent name from the project.
$parent = $client->projectName($projectId);
// Create the parent secret.
$createSecretRequest = (new CreateSecretRequest())
->setParent($parent)
->setSecretId($secretId)
->setSecret(new Secret([
'replication' => new Replication([
'automatic' => new Automatic(),
]),
]));
$secret = $client->createSecret($createSecretRequest);
// Add the secret version.
$addSecretVersionRequest = (new AddSecretVersionRequest())
->setParent($secret->getName())
->setPayload(new SecretPayload([
'data' => 'hello world',
]));
$version = $client->addSecretVersion($addSecretVersionRequest);
// Access the secret version.
$accessSecretVersionRequest = (new AccessSecretVersionRequest())
->setName($version->getName());
$response = $client->accessSecretVersion($accessSecretVersionRequest);
// Print the secret payload.
//
// WARNING: Do not print the secret in a production environment - this
// snippet is showing how to access the secret material.
$payload = $response->getPayload()->getData();
printf('Plaintext: %s' . PHP_EOL, $payload);
Python
# Import the Secret Manager client library.
from google.cloud import secretmanager
# GCP project in which to store secrets in Secret Manager.
project_id = "YOUR_PROJECT_ID"
# ID of the secret to create.
secret_id = "YOUR_SECRET_ID"
# Create the Secret Manager client.
client = secretmanager . SecretManagerServiceClient ()
# Build the parent name from the project.
parent = f "projects/ { project_id } "
# Create the parent secret.
secret = client . create_secret (
request = {
"parent" : parent ,
"secret_id" : secret_id ,
"secret" : { "replication" : { "automatic" : {}}},
}
)
# Add the secret version.
version = client . add_secret_version (
request = { "parent" : secret . name , "payload" : { "data" : b "hello world!" }}
)
# Access the secret version.
response = client . access_secret_version ( request = { "name" : version . name })
# Print the secret payload.
#
# WARNING: Do not print the secret in a production environment - this
# snippet is showing how to access the secret material.
payload = response . payload . data . decode ( "UTF-8" )
print ( f "Plaintext: { payload } " )
Ruby
require "google/cloud/secret_manager"
##
# Secret manager quickstart
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param secret_id [String] Your secret name (e.g. "my-secret")
#
def quickstart project_id :, secret_id :
# Create the Secret Manager client.
client = Google :: Cloud :: SecretManager . secret_manager_service
# Build the parent name from the project.
parent = "projects/ #{ project_id } "
# Create the parent secret.
secret = client . create_secret (
parent : parent ,
secret_id : secret_id ,
secret : {
replication : {
automatic : {}
}
}
)
# Add a secret version.
version = client . add_secret_version (
parent : secret . name ,
payload : {
data : "hello world!"
}
)
# Access the secret version.
response = client . access_secret_version name : version . name
# Print the secret payload.
#
# WARNING: Do not print the secret in a production environment - this
# snippet is showing how to access the secret material.
payload = response . payload . data
puts "Plaintext: #{ payload } "
end
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-secret-manager on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-secret-manager on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-secret-manager on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-secret-manager on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-secret-manager on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-secret-manager on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-secret-manager on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-secret-manager on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
