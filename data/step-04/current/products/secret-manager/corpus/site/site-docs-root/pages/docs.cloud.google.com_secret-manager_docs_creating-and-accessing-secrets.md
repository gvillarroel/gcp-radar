---
title: "Create a secret \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets
  title: "Create a secret \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
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
Create a secret
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create a secret. A secret contains one or more secret versions, along
with metadata such as labels and replication policies. The actual contents of a secret are stored
in a secret version .
Important: To use Secret Manager with workloads running on
Compute Engine or Google Kubernetes Engine, the underlying instance or node must have
the cloud-platform OAuth scope. See
accessing the Secret Manager API
for more information.
Before you begin
Enable the Secret Manager API .
Set up authentication.
Select the tab for how you plan to use the samples on this page:
Console
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
REST
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Required roles
To get the permissions that
you need to create a secret,
ask your administrator to grant you the
Secret Manager Admin ( roles/secretmanager.admin )
IAM role on the project, folder, or organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a secret
You can create secrets using the Google Cloud console, the Google Cloud CLI, the Secret Manager API, or the
Secret Manager client libraries.
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
On the Secret Manager page, click Create secret .
On the Create secret page, enter a name for the secret in the Name field.
A secret name can contain uppercase and lowercase letters, numerals, hyphens, and underscores. The maximum allowed length for a name is 255 characters.
Enter a value for the secret (for example, abcd1234 ). The secret value can be in any format
but must not be larger than 64 KiB. You can also upload a text file containing the secret value using
the Upload file option. This action automatically creates the secret version.
Click Create secret .
gcloud
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret.
REPLICATION_POLICY : the replication policy for the secret, which can be either automatic or user-managed.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID \
--replication-policy = " REPLICATION_POLICY "
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID `
--replication-policy = " REPLICATION_POLICY "
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID ^
--replication-policy = " REPLICATION_POLICY "
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID.
SECRET_ID : the ID of the secret.
REPLICATION_POLICY : the replication policy for the secret, which can be either automatic or user-managed.
HTTP method and URL:
POST https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID
Request JSON body:
{
"replication": {
" REPLICATION_POLICY ": {}
}
}
To send your request, choose one of these options:
curl
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID "
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /secrets/ SECRET_ID ",
"createTime": "2024-03-25T08:24:13.153705Z",
"etag": "\"161477e6071da9\""
}
C#
To run this code, first set up a C# development environment and
install the Secret Manager C# SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.SecretManager.V1 ;
public class CreateSecretSample
{
public Secret CreateSecret (
string projectId = "my-project" , string secretId = "my-secret" )
{
// Create the client.
SecretManagerServiceClient client = SecretManagerServiceClient . Create ();
// Build the parent resource name.
ProjectName projectName = new ProjectName ( projectId );
// Build the secret.
Secret secret = new Secret
{
Replication = new Replication
{
Automatic = new Replication . Types . Automatic (),
},
};
// Call the API.
Secret createdSecret = client . CreateSecret ( projectName , secretId , secret );
return createdSecret ;
}
}
Go
To run this code, first set up a Go development environment and
install the Secret Manager Go SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import (
"context"
"fmt"
"io"
"time"
secretmanager "cloud.google.com/go/secretmanager/apiv1"
"cloud.google.com/go/secretmanager/apiv1/secretmanagerpb"
"google.golang.org/protobuf/types/known/durationpb"
)
// createSecretWithTTL creates a new secret with the given name and ttl.
func createSecretWithTTL ( w io . Writer , parent , id string , d time . Duration ) error {
// parent := "projects/my-project"
// id := "my-secret"
expiration := & secretmanagerpb . Secret_Ttl { Ttl : durationpb . New ( d )}
// Create the client.
ctx := context . Background ()
client , err := secretmanager . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create secretmanager client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & secretmanagerpb . CreateSecretRequest {
Parent : parent ,
SecretId : id ,
Secret : & secretmanagerpb . Secret {
Replication : & secretmanagerpb . Replication {
Replication : & secretmanagerpb . Replication_Automatic_ {
Automatic : & secretmanagerpb . Replication_Automatic {},
},
},
Expiration : expiration ,
},
}
// Call the API.
result , err := client . CreateSecret ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to create secret: %w" , err )
}
fmt . Fprintf ( w , "Created secret with ttl: %s\n" , result . Name )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Secret Manager Java SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import com.google.cloud.secretmanager.v1. ProjectName ;
import com.google.cloud.secretmanager.v1. Replication ;
import com.google.cloud.secretmanager.v1. Secret ;
import com.google.cloud.secretmanager.v1. SecretManagerServiceClient ;
import com.google.protobuf. Duration ;
import java.io.IOException ;
public class CreateSecret {
public static void createSecret () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String secretId = "your-secret-id" ;
createSecret ( projectId , secretId );
}
// Create a new secret with automatic replication.
public static void createSecret ( String projectId , String secretId ) throws IOException {
// Initialize the client that will be used to send requests. This client only needs to be
// created once, and can be reused for multiple requests. After completing all of your requests,
// call the "close" method on the client to safely clean up any remaining background resources.
try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) {
// Build the parent name from the project.
ProjectName projectName = ProjectName . of ( projectId );
// Optionally set a TTL for the secret. This demonstrates how to configure
// a secret to be automatically deleted after a certain period. The TTL is
// specified in seconds (e.g., 900 for 15 minutes). This can be useful
// for managing sensitive data and reducing storage costs.
Duration ttl = Duration . newBuilder (). setSeconds ( 900 ). build ();
// Build the secret to create.
Secret secret =
Secret . newBuilder ()
. setReplication (
Replication . newBuilder ()
. setAutomatic ( Replication . Automatic . newBuilder (). build ())
. build ())
. setTtl ( ttl )
. build ();
// Create the secret.
Secret createdSecret = client . createSecret ( projectName , secretId , secret );
System . out . printf ( "Created secret %s\n" , createdSecret . getName ());
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Secret Manager Node.js SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const parent = 'projects/my-project';
// const secretId = 'my-secret';
// const ttl = undefined // Optional: Specify TTL in seconds (e.g., '900s' for 15 minutes).
// Imports the Secret Manager library
const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' );
// Instantiates a client
const client = new SecretManagerServiceClient ();
async function createSecret () {
const secretConfig = {
replication : {
automatic : {},
},
};
// Add TTL to the secret configuration if provided
if ( ttl ) {
secretConfig . ttl = {
seconds : parseInt ( ttl . replace ( 's' , '' ), 10 ),
};
console . log ( `Secret TTL set to ${ ttl } ` );
}
const [ secret ] = await client . createSecret ({
parent : parent ,
secretId : secretId ,
secret : secretConfig ,
});
console . log ( `Created secret ${ secret . name } ` );
}
createSecret ();
PHP
To run this code, first learn about using PHP on Google Cloud and
install the Secret Manager PHP SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
// Import the Secret Manager client library.
use Google\Cloud\SecretManager\V1\CreateSecretRequest;
use Google\Cloud\SecretManager\V1\Replication;
use Google\Cloud\SecretManager\V1\Replication\Automatic;
use Google\Cloud\SecretManager\V1\Secret;
use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient;
/**
* @param string $projectId Your Google Cloud Project ID (e.g. 'my-project')
* @param string $secretId Your secret ID (e.g. 'my-secret')
*/
function create_secret(string $projectId, string $secretId): void
{
// Create the Secret Manager client.
$client = new SecretManagerServiceClient();
// Build the resource name of the parent project.
$parent = $client->projectName($projectId);
$secret = new Secret([
'replication' => new Replication([
'automatic' => new Automatic(),
]),
]);
// Build the request.
$request = CreateSecretRequest::build($parent, $secretId, $secret);
// Create the secret.
$newSecret = $client->createSecret($request);
// Print the new secret name.
printf('Created secret: %s', $newSecret->getName());
}
Python
To run this code, first set up a Python development environment and
install the Secret Manager Python SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
# Import the Secret Manager client library.
from google.cloud import secretmanager
def create_secret (
project_id : str , secret_id : str , ttl : Optional [ str ] = None
) - > secretmanager . Secret :
"""
Create a new secret with the given name. A secret is a logical wrapper
around a collection of secret versions. Secret versions hold the actual
secret material.
Args:
project_id (str): The project ID where the secret is to be created.
secret_id (str): The ID to assign to the new secret. This ID must be unique within the project.
ttl (Optional[str]): An optional string that specifies the secret's time-to-live in seconds with
format (e.g., "900s" for 15 minutes). If specified, the secret
versions will be automatically deleted upon reaching the end of the TTL period.
Returns:
secretmanager.Secret: An object representing the newly created secret, containing details like the
secret's name, replication settings, and optionally its TTL.
Example:
# Create a secret with automatic replication and no TTL
new_secret = create_secret("my-project", "my-new-secret")
# Create a secret with a TTL of 30 days
new_secret_with_ttl = create_secret("my-project", "my-timed-secret", "7776000s")
"""
# Create the Secret Manager client.
client = secretmanager . SecretManagerServiceClient ()
# Build the resource name of the parent project.
parent = f "projects/ { project_id } "
# Create the secret.
response = client . create_secret (
request = {
"parent" : parent ,
"secret_id" : secret_id ,
"secret" : { "replication" : { "automatic" : {}}, "ttl" : ttl },
}
)
# Print the new secret name.
print ( f "Created secret: { response . name } " )
Ruby
To run this code, first set up a Ruby development environment and
install the Secret Manager Ruby SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
# project_id = "YOUR-GOOGLE-CLOUD-PROJECT" # (e.g. "my-project")
# secret_id = "YOUR-SECRET-ID" # (e.g. "my-secret")
# Require the Secret Manager client library.
require "google/cloud/secret_manager"
# Create a Secret Manager client.
client = Google :: Cloud :: SecretManager . secret_manager_service
# Build the resource name of the parent project.
parent = client . project_path project : project_id
# Create the secret.
secret = client . create_secret (
parent : parent ,
secret_id : secret_id ,
secret : {
replication : {
automatic : {}
}
}
)
# Print the new secret name.
puts "Created secret: #{ secret . name } "
To select the right replication policy for your secret, see
Choose a replication policy .
Add a secret version
Secret Manager automatically versions secret data using secret versions. Key operations, such
as access, destroy, disable, and enable, are applied to specific secret versions. With Secret Manager, you
can associate secrets with specific versions such as 42 or with dynamic aliases
such as latest . To learn more, see Add a secret version .
Access a secret version
To access the secret data from a particular secret version for successful authentication, see
Access a secret version .
What's next
Check the quotas and rate limits for different types of API requests (access, read, and write) per project.
Learn how to manage access to secrets .
Learn how to set up notifications on a secret .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
