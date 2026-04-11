---
title: "Create and access a secret using Secret Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart
  title: "Create and access a secret using Secret Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and access a secret using Secret Manager
Learn how to create and access secrets using Secret Manager on Google Cloud.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Enable the Secret Manager
API , once per project.
Assign the Secret Manager Admin role ( roles/secretmanager.admin ) on the project, folder, or organization.
Authenticate to the Secret Manager API using one of the following ways:
If you're using client libraries to access the Secret Manager API, set
up Application Default Credentials .
If you're using the Google Cloud CLI to access the Secret Manager API,
use your Google Cloud CLI credentials to authenticate.
To authenticate a REST call, use either Google Cloud CLI credentials or
Application Default Credentials.
Create a secret and access a secret version
The following examples demonstrate creating a secret and accessing a
secret version's contents.
Console
To create the secret and the secret version:
Go to the Secret Manager page in the Google Cloud console.
Go to the Secret Manager page
On the Secret Manager page, click Create Secret .
On the Create secret page, under Name , enter my-secret .
In the Secret value field, enter my super secret data .
Click the Create secret button.
To access the contents of the secret version:
Go to the Secret Manager page in the Google Cloud console.
Go to the Secret Manager page
On the Secret Manager page, click on my-secret .
On the Secret details page, in the Versions table, locate version 1 .
In the Actions column, click View more more_vert .
Click View secret value from the menu.
A dialog appears that shows the secret value. Click Done to close the dialog.
gcloud
To use Secret Manager on the command line, first
Install or upgrade to version 378.0.0 or higher of the Google Cloud CLI .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
To create a secret and store a string as the contents of the first secret version:
$ echo -n "my super secret data" | gcloud secrets create my-secret \
--replication-policy=" replication-policy " \
--data-file=-
Where replication-policy is one of automatic or user-managed .
To access the contents of a specific secret version:
$ gcloud secrets versions access 1 --secret=" my-secret "
To access the contents of the latest secret version:
$ gcloud secrets versions access latest --secret=" my-secret "
Note: Do not use the latest version specifier
for production applications. Instead, always specify a version by ID.
C#
To run this code, first set up a C# development environment and
install the Secret Manager C# SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
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
To run this code, first set up a Go development environment and
install the Secret Manager Go SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
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
To run this code, first set up a Java development environment and
install the Secret Manager Java SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
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
To run this code, first set up a Node.js development environment and
install the Secret Manager Node.js SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
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
To run this code, first learn about using PHP on Google Cloud and
install the Secret Manager PHP SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
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
To run this code, first set up a Python development environment and
install the Secret Manager Python SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
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
To run this code, first set up a Ruby development environment and
install the Secret Manager Ruby SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
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
API
These examples use curl to demonstrate using the API. You can generate access tokens with gcloud auth print-access-token .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
To create the secret and store a string as the contents of a secret version:
$ curl "https://secretmanager.googleapis.com/v1/projects/ project-id /secrets?secretId= my-secret " \
--request "POST" \
--header "authorization: Bearer $(gcloud auth print-access-token)" \
--header "content-type: application/json" \
--data "{\"replication\": {\"automatic\": {}}}"
To access the secret version's contents:
$ curl "https://secretmanager.googleapis.com/v1/projects/ project-id /secrets/ my-secret /versions/ 1 :access" \
--request "GET" \
--header "authorization: Bearer $(gcloud auth print-access-token)" \
--header "content-type: application/json"
What's next
Learn about editing a secret .
Learn about managing access to secrets .
Learn about assigning an alias to a secret version .
Learn about setting up notifications on a secret .
Learn about following best practices .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
