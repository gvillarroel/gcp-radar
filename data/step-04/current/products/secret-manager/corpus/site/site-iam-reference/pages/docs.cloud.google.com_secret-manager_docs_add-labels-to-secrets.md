---
title: "Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets
  title: "Add labels to secrets \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
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
Add labels to secrets
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of labels, describes how to add labels to a
secret, and how to view and update labels attached to a secret.
What are labels?
A label is a key-value pair that you can assign to Google Cloud Secret Manager secrets.
They help you organize these resources and manage your costs at scale, with the
granularity you need. You can attach a label to each resource, then filter the
resources based on their labels. Information about labels is forwarded to the billing system that
lets you break down your billed charges by label. With built-in billing reports ,
you can filter and group costs by resource labels.
You can also use labels to
query billing data exports .
Requirements for labels
The labels applied to a resource must meet the following
requirements:
Each resource can have up to 64 labels.
Each label must be a key-value pair.
Keys have a minimum length of 1 character and a maximum length of 63
characters, and cannot be empty. Values can be empty, and have a maximum length
of 63 characters.
Keys and values can contain only lowercase letters, numeric characters,
underscores, and dashes. All characters must use UTF-8 encoding, and
international characters are allowed. Keys must start with a lowercase letter or
international character.
The key portion of a label must be unique within a single resource.
However, you can use the same key with multiple resources.
These limits apply to the key and value for each label, and to the
individual Google Cloud resources that have labels. There
is no limit on how many labels you can apply across all resources
within a project.
Common uses of labels
Here are some common use cases for labels:
Team or cost center labels : Add labels based on team or
cost center to distinguish Secret Manager secrets owned by different
teams (for example, team:research and team:analytics ). You can use this
type of label for cost accounting or budgeting.
Component labels : For example, component:redis ,
component:frontend , component:ingest , and component:dashboard .
Environment or stage labels : For example,
environment:production and environment:test .
State labels : For example, state:active ,
state:readytodelete , and state:archive .
Ownership labels : Used to identify the teams that are
responsible for operations, for example: team:shopping-cart .
Note: Don't include sensitive information in labels, including
personally identifiable information, such as an individual's name or title.
Labels are not designed to handle sensitive information.
We don't recommend creating large numbers of unique labels, such as
for timestamps or individual values for every API call.
The problem with this approach is that when the values change frequently or with
keys that clutter the catalog, this makes it difficult to effectively filter and
report on resources.
Labels and tags
Labels can be used as queryable annotations for resources, but can't be used
to set conditions on policies. Tags provide a way to conditionally allow or
deny policies based on whether a resource has a specific tag, by providing fine-grained
control over policies. For more information, see the
Tags overview .
Create a secret with labels
To add a label when creating the secret, follow these steps:
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
On the Secret Manager page, click Create secret .
On the Create secret page, enter a name for the secret in the Name field.
Enter a value for the secret (for example, abcd1234 ). You can also upload a text file containing the secret value using
the Upload file option. This action automatically creates the secret version.
Go to the Labels section, and then click Add label .
Enter the key and corresponding value to create a label.
Click Create secret .
gcloud
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret.
KEY : the key of the label.
VALUE : the value of the label.
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
gcloud secrets create SECRET_ID --labels = KEY = VALUE
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID --labels = KEY = VALUE
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets create SECRET_ID --labels = KEY = VALUE
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID.
SECRET_ID : the ID of the secret.
KEY : the key of the label.
VALUE : the value of the label.
HTTP method and URL:
POST https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID ?update_mask=labels
Request JSON body:
{
"labels": {
" KEY ": " VALUE "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID ?update_mask=labels"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID ?update_mask=labels" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /secrets/ SECRET_ID ",
"createTime": "2024-03-25T08:24:13.153705Z",
"labels": {
"key": "value"
},
"etag": "\"161477e6071da9\""
}
C#
To run this code, first set up a C# development environment and
install the Secret Manager C# SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.SecretManager.V1 ;
using System.Collections.Generic ;
public class CreateSecretWithLabelsSample
{
public Secret CreateSecretWithLabels (
string projectId = "my-project" , string secretId = "my-secret" , string labelKey = "my-label-key" , string labelValue = "my-label-value" )
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
Labels =
{
{ labelKey , labelValue }
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
secretmanager "cloud.google.com/go/secretmanager/apiv1"
"cloud.google.com/go/secretmanager/apiv1/secretmanagerpb"
)
// createSecretWithLabels creates a new secret with the given name and labels.
func createSecretWithLabels ( w io . Writer , parent , id string ) error {
// parent := "projects/my-project"
// id := "my-secret"
labelKey := "labelkey"
labelValue := "labelvalue"
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
Labels : map [ string ] string {
labelKey : labelValue ,
},
},
}
// Call the API.
result , err := client . CreateSecret ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to create secret: %w" , err )
}
fmt . Fprintf ( w , "Created secret with labels: %s\n" , result . Name )
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
import java.io.IOException ;
public class CreateSecretWithLabels {
public static void createSecretWithLabels () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// This is the id of the GCP project
String projectId = "your-project-id" ;
// This is the id of the secret to act on
String secretId = "your-secret-id" ;
// This is the key of the label to be added
String labelKey = "your-label-key" ;
// This is the value of the label to be added
String labelValue = "your-label-value" ;
createSecretWithLabels ( projectId , secretId , labelKey , labelValue );
}
// Create a secret with labels.
public static Secret createSecretWithLabels (
String projectId , String secretId , String labelKey , String labelValue ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) {
// Build the name.
ProjectName projectName = ProjectName . of ( projectId );
// Build the secret to create with labels.
Secret secret =
Secret . newBuilder ()
. setReplication (
Replication . newBuilder ()
. setAutomatic ( Replication . Automatic . newBuilder (). build ())
. build ())
. putLabels ( labelKey , labelValue )
. build ();
// Create the secret.
Secret createdSecret = client . createSecret ( projectName , secretId , secret );
System . out . printf ( "Created secret %s\n" , createdSecret . getName ());
return createdSecret ;
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
// const labelKey = 'secretmanager';
// const labelValue = 'rocks';
// Imports the Secret Manager library
const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' );
// Instantiates a client
const client = new SecretManagerServiceClient ();
async function createSecretWithLabels () {
const [ secret ] = await client . createSecret ({
parent : parent ,
secretId : secretId ,
secret : {
replication : {
automatic : {},
},
labels : {
[ labelKey ] : labelValue ,
},
},
});
console . log ( `Created secret ${ secret . name } ` );
}
createSecretWithLabels ();
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
* @param string $labelKey Your label key (e.g. 'label-key')
* @param string $labelValue Your label value (e.g. 'label-value')
*/
function create_secret_with_labels(string $projectId, string $secretId, string $labelKey, string $labelValue): void
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
// set the labels.
$labels = [$labelKey => $labelValue];
$secret->setLabels($labels);
// Build the request.
$request = CreateSecretRequest::build($parent, $secretId, $secret);
// Create the secret.
$newSecret = $client->createSecret($request);
// Print the new secret name.
printf('Created secret %s with labels', $newSecret->getName());
}
Python
To run this code, first set up a Python development environment and
install the Secret Manager Python SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import argparse
import typing
# Import the Secret Manager client library.
from google.cloud import secretmanager
def create_secret_with_labels (
project_id : str ,
secret_id : str ,
labels : typing . Dict [ str , str ],
ttl : typing . Optional [ str ] = None ,
) - > secretmanager . Secret :
"""
Create a new secret with the given name. A secret is a logical wrapper
around a collection of secret versions. Secret versions hold the actual
secret material.
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
"secret" : { "replication" : { "automatic" : {}}, "ttl" : ttl , "labels" : labels },
}
)
# Print the new secret name.
print ( f "Created secret: { response . name } " )
return response
Ruby
To run this code, first set up a Ruby development environment and
install the Secret Manager Ruby SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
require "google/cloud/secret_manager"
##
# Create a secret with labels.
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param secret_id [String] Your secret name (e.g. "my-secret")
# @param label_key [String] Your label key (e.g. "my-label-key")
# @param label_value [String] Your label value (e.g. "my-label-value")
#
def create_secret_with_labels project_id :, secret_id :, label_key :, label_value :
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
},
labels : {
label_key = > label_value
}
}
)
# Print the new secret name.
puts "Created secret with label: #{ secret . name } "
end
View labels on a secret
To view assigned labels, follow these steps:
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
On the Secret Manager page, select the secret whose labels you want to view.
If the Info Panel is closed, click Show Info Panel to display it.
In the panel, click the Labels tab. All the labels added to the secret are displayed.
gcloud
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret.
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
gcloud secrets describe SECRET_ID
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets describe SECRET_ID
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets describe SECRET_ID
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID.
SECRET_ID : the ID of the secret.
HTTP method and URL:
GET https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID
Request JSON body:
{}
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /secrets/ SECRET_ID ",
"createTime": "2024-03-25T08:24:13.153705Z",
"labels": {
"key": "value"
},
"etag": "\"161477e6071da9\""
}
C#
To run this code, first set up a C# development environment and
install the Secret Manager C# SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.SecretManager.V1 ;
using Google.Protobuf.Collections ;
using Google.Protobuf.WellKnownTypes ;
using System ;
public class ViewSecretLabelsSample
{
public Secret ViewSecretLabels (
string projectId = "my-project" , string secretId = "my-secret" )
{
// Create the client.
SecretManagerServiceClient client = SecretManagerServiceClient . Create ();
// Build the resource name.
SecretName secretName = new SecretName ( projectId , secretId );
// Fetch the secret.
Secret secret = client . GetSecret ( secretName );
// Get the secret's labels.
MapField<string , string > secretLabels = secret . Labels ;
// Print the labels.
foreach ( var label in secret . Labels )
{
Console . WriteLine ( $"Annotation Key: {label.Key}, Annotation Value: {label. Value }" );
}
return secret ;
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
secretmanager "cloud.google.com/go/secretmanager/apiv1"
"cloud.google.com/go/secretmanager/apiv1/secretmanagerpb"
)
// getSecret gets information about the given secret. This only returns metadata
// about the secret container, not any secret material.
func viewSecretLabels ( w io . Writer , name string ) error {
// name := "projects/my-project/secrets/my-secret"
// Create the client.
ctx := context . Background ()
client , err := secretmanager . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create secretmanager client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & secretmanagerpb . GetSecretRequest {
Name : name ,
}
// Call the API.
result , err := client . GetSecret ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to get secret: %w" , err )
}
labels := result . Labels
fmt . Fprintf ( w , "Found secret %s\n" , result . Name )
for key , value := range labels {
fmt . Fprintf ( w , "Label key %s : Label Value %s" , key , value )
}
return nil
}
Java
To run this code, first set up a Java development environment and
install the Secret Manager Java SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import com.google.cloud.secretmanager.v1. Secret ;
import com.google.cloud.secretmanager.v1. SecretManagerServiceClient ;
import com.google.cloud.secretmanager.v1. SecretName ;
import java.io.IOException ;
import java.util.Map ;
public class ViewSecretLabels {
public static void viewSecretLabels () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// This is the id of the GCP project
String projectId = "your-project-id" ;
// This is the id of the secret whose labels to view
String secretId = "your-secret-id" ;
viewSecretLabels ( projectId , secretId );
}
// View the labels of an existing secret.
public static Map<String , String > viewSecretLabels (
String projectId ,
String secretId
) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) {
// Build the name.
SecretName secretName = SecretName . of ( projectId , secretId );
// Create the secret.
Secret secret = client . getSecret ( secretName );
Map<String , String > labels = secret . getLabels ();
System . out . printf ( "Secret %s \n" , secret . getName ());
for ( Map . Entry<String , String > label : labels . entrySet ()) {
System . out . printf ( "Label key : %s, Label Value : %s\n" , label . getKey (), label . getValue ());
}
return secret . getLabels ();
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
// const parent = 'projects/my-project/secrets/my-secret';
// Imports the Secret Manager library
const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' );
// Instantiates a client
const client = new SecretManagerServiceClient ();
async function getSecretLabels () {
const [ secret ] = await client . getSecret ({
name : name ,
});
for ( const key in secret . labels ) {
console . log ( ` ${ key } : ${ secret . labels [ key ] } ` );
}
}
getSecretLabels ();
PHP
To run this code, first learn about using PHP on Google Cloud and
install the Secret Manager PHP SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
// Import the Secret Manager client library.
use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient;
use Google\Cloud\SecretManager\V1\GetSecretRequest;
/**
* @param string $projectId Your Google Cloud Project ID (e.g. 'my-project')
* @param string $secretId Your secret ID (e.g. 'my-secret')
*/
function view_secret_labels(string $projectId, string $secretId): void
{
// Create the Secret Manager client.
$client = new SecretManagerServiceClient();
// Build the resource name of the parent project.
$name = $client->secretName($projectId, $secretId);
// Build the request.
$request = GetSecretRequest::build($name);
// get the secret.
$getSecret = $client->getSecret($request);
// get the secret labels
$labels = $getSecret->getLabels();
// print the secret name
printf('Get secret %s with labels:' . PHP_EOL, $getSecret->getName());
// we can even loop over all the labels
foreach ($labels as $key => $val) {
printf("\t$key: $val" . PHP_EOL);
}
}
Python
To run this code, first set up a Python development environment and
install the Secret Manager Python SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import argparse
# Import the Secret Manager client library.
from google.cloud import secretmanager
def view_secret_labels ( project_id : str , secret_id : str ) - > None :
"""
List all secret labels in the given secret.
"""
# Create the Secret Manager client.
client = secretmanager . SecretManagerServiceClient ()
# Build the resource name of the parent secret.
name = client . secret_path ( project_id , secret_id )
response = client . get_secret ( request = { "name" : name })
print ( f "Got secret { response . name } with labels :" )
for key in response . labels :
print ( f " { key } : { response . labels [ key ] } " )
Ruby
To run this code, first set up a Ruby development environment and
install the Secret Manager Ruby SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
require "google/cloud/secret_manager"
##
# View labels of a secret.
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param secret_id [String] Your secret name (e.g. "my-secret")
#
def view_secret_labels project_id :, secret_id :
# Create a Secret Manager client.
client = Google :: Cloud :: SecretManager . secret_manager_service
# Build the resource name of the secret.
name = client . secret_path project : project_id , secret : secret_id
# Get the existing secret.
existing_secret = client . get_secret name : name
# Get the existing secret's labels.
existing_secret_labels = existing_secret . labels . to_h
# Print the secret name and the labels.
puts "Secret: #{ existing_secret . name } "
existing_secret_labels . each do | key , value |
puts "Label Key: #{ key } , Label Value: #{ value } "
end
end
Update labels
To update labels, follow these steps:
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
Select the secret that you want to edit.
Open the Info Panel , and then click the Labels tab.
Update the existing value of a label and click Save .
You can also delete an existing label or add a new label. To edit the key of a label, add a new
label with the same key name, and then delete the old label.
gcloud
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret.
KEY : the key of the label.
VALUE : the value of the label.
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
gcloud secrets update SECRET_ID --update-labels = KEY = VALUE
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID --update-labels = KEY = VALUE
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID --update-labels = KEY = VALUE
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID.
SECRET_ID : the ID of the secret.
KEY : the key of the label.
VALUE : the value of the label.
HTTP method and URL:
PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID ?update_mask=labels
Request JSON body:
{
"labels": {
" KEY ": " VALUE "
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID ?update_mask=labels"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID ?update_mask=labels" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /secrets/ SECRET_ID ",
"createTime": "2024-03-25T08:24:13.153705Z",
"labels": {
"key": "value"
},
"etag": "\"161477e6071da9\""
}
C#
To run this code, first set up a C# development environment and
install the Secret Manager C# SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
using Google.Protobuf.WellKnownTypes ;
using Google.Cloud.SecretManager.V1 ;
public class UpdateSecretSample
{
public Secret UpdateSecret ( string projectId = "my-project" , string secretId = "my-secret" )
{
// Create the client.
SecretManagerServiceClient client = SecretManagerServiceClient . Create ();
// Build the secret with updated fields.
Secret secret = new Secret
{
SecretName = new SecretName ( projectId , secretId ),
};
secret . Labels [ "secretmanager" ] = "rocks" ;
// Build the field mask.
FieldMask fieldMask = FieldMask . FromString ( "labels" );
// Call the API.
Secret updatedSecret = client . UpdateSecret ( secret , fieldMask );
return updatedSecret ;
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
secretmanager "cloud.google.com/go/secretmanager/apiv1"
"cloud.google.com/go/secretmanager/apiv1/secretmanagerpb"
"google.golang.org/genproto/protobuf/field_mask"
)
// createUpdateSecretLabel updates the labels about an existing secret.
// If the label key exists, it updates the label, otherwise it creates a new one.
func createUpdateSecretLabel ( w io . Writer , name string ) error {
// name := "projects/my-project/secrets/my-secret"
labelKey := "labelkey"
labelValue := "updatedlabelvalue"
// Create the client.
ctx := context . Background ()
client , err := secretmanager . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create secretmanager client: %w" , err )
}
defer client . Close ()
// Build the request to get the secret.
req := & secretmanagerpb . GetSecretRequest {
Name : name ,
}
// Call the API.
result , err := client . GetSecret ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to get secret: %w" , err )
}
labels := result . Labels
labels [ labelKey ] = labelValue
// Build the request to update the secret.
update_req := & secretmanagerpb . UpdateSecretRequest {
Secret : & secretmanagerpb . Secret {
Name : name ,
Labels : labels ,
},
UpdateMask : & field_mask . FieldMask {
Paths : [] string { "labels" },
},
}
// Call the API.
update_result , err := client . UpdateSecret ( ctx , update_req )
if err != nil {
return fmt . Errorf ( "failed to update secret: %w" , err )
}
fmt . Fprintf ( w , "Updated secret: %s\n" , update_result . Name )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Secret Manager Java SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import com.google.cloud.secretmanager.v1. Secret ;
import com.google.cloud.secretmanager.v1. SecretManagerServiceClient ;
import com.google.cloud.secretmanager.v1. SecretName ;
import com.google.protobuf. FieldMask ;
import com.google.protobuf.util. FieldMaskUtil ;
import java.io.IOException ;
import java.util.HashMap ;
import java.util.Map ;
public class CreateUpdateSecretLabel {
public static void createUpdateSecretLabel () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// This is the id of the GCP project
String projectId = "your-project-id" ;
// This is the id of the secret to act on
String secretId = "your-secret-id" ;
// This is the key of the label to be added/updated
String labelKey = "your-label-key" ;
// This is the value of the label to be added/updated
String labelValue = "your-label-value" ;
createUpdateSecretLabel ( projectId , secretId , labelKey , labelValue );
}
// Update an existing secret, by creating a new label or updating an existing label.
public static Secret createUpdateSecretLabel (
String projectId , String secretId , String labelKey , String labelValue ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) {
// Build the name.
SecretName secretName = SecretName . of ( projectId , secretId );
// Get the existing secret
Secret existingSecret = client . getSecret ( secretName );
Map<String , String > existingLabelsMap =
new HashMap<String , String > ( existingSecret . getLabels ());
// Add a new label key and value.
existingLabelsMap . put ( labelKey , labelValue );
// Build the updated secret.
Secret secret =
Secret . newBuilder ()
. setName ( secretName . toString ())
. putAllLabels ( existingLabelsMap )
. build ();
// Build the field mask.
FieldMask fieldMask = FieldMaskUtil . fromString ( "labels" );
// Update the secret.
Secret updatedSecret = client . updateSecret ( secret , fieldMask );
System . out . printf ( "Updated secret %s\n" , updatedSecret . getName ());
return updatedSecret ;
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
// const name = 'projects/my-project/secrets/my-secret';
// const labelKey = 'gcp';
// const labelValue = 'rocks';
// Imports the Secret Manager library
const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' );
// Instantiates a client
const client = new SecretManagerServiceClient ();
async function getSecret () {
const [ secret ] = await client . getSecret ({
name : name ,
});
return secret ;
}
async function createUpdateSecretLabel () {
const oldSecret = await getSecret ();
oldSecret . labels [ labelKey ] = labelValue ;
const [ secret ] = await client . updateSecret ({
secret : {
name : name ,
labels : oldSecret . labels ,
},
updateMask : {
paths : [ 'labels' ],
},
});
console . info ( `Updated secret ${ secret . name } ` );
}
createUpdateSecretLabel ();
PHP
To run this code, first learn about using PHP on Google Cloud and
install the Secret Manager PHP SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
// Import the Secret Manager client library.
use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient;
use Google\Cloud\SecretManager\V1\GetSecretRequest;
use Google\Cloud\SecretManager\V1\UpdateSecretRequest;
use Google\Protobuf\FieldMask;
/**
* @param string $projectId Your Google Cloud Project ID (e.g. 'my-project')
* @param string $secretId Your secret ID (e.g. 'my-secret')
* @param string $labelKey Your label key (e.g. 'label-key')
* @param string $labelValue Your label value (e.g. 'label-value')
*/
function edit_secret_labels(string $projectId, string $secretId, string $labelKey, string $labelValue): void
{
// Create the Secret Manager client.
$client = new SecretManagerServiceClient();
// Build the resource name of the parent project.
$name = $client->secretName($projectId, $secretId);
// Build the request.
$request = GetSecretRequest::build($name);
// get the secret.
$getSecret = $client->getSecret($request);
// get the secret labels
$labels = $getSecret->getLabels();
// update the label - need to create a new labels map with the updated values
$newLabels = [];
foreach ($labels as $key => $value) {
$newLabels[$key] = $value;
}
$newLabels[$labelKey] = $labelValue;
$getSecret->setLabels($newLabels);
// set the field mask
$fieldMask = new FieldMask();
$fieldMask->setPaths(['labels']);
// build the secret
$request = new UpdateSecretRequest();
$request->setSecret($getSecret);
$request->setUpdateMask($fieldMask);
// update the secret
$updateSecret = $client->updateSecret($request);
// print the updated secret
printf('Updated secret %s labels' . PHP_EOL, $updateSecret->getName());
}
Python
To run this code, first set up a Python development environment and
install the Secret Manager Python SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import argparse
from typing import Dict
# Import the Secret Manager client library.
from google.cloud import secretmanager
def create_update_secret_label (
project_id : str , secret_id : str , new_labels : Dict [ str , str ]
) - > secretmanager . UpdateSecretRequest :
"""
Create or update a label on an existing secret.
"""
# Create the Secret Manager client.
client = secretmanager . SecretManagerServiceClient ()
# Build the resource name of the secret.
name = client . secret_path ( project_id , secret_id )
# Get the secret.
response = client . get_secret ( request = { "name" : name })
labels = response . labels
# Update the labels
for label_key in new_labels :
labels [ label_key ] = new_labels [ label_key ]
# Update the secret.
secret = { "name" : name , "labels" : labels }
update_mask = { "paths" : [ "labels" ]}
response = client . update_secret (
request = { "secret" : secret , "update_mask" : update_mask }
)
# Print the new secret name.
print ( f "Updated secret: { response . name } " )
return response
Ruby
To run this code, first set up a Ruby development environment and
install the Secret Manager Ruby SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
require "google/cloud/secret_manager"
##
# Update a secret's labels
#
# @param project_id [String] Your Google Cloud project (e.g. "my-project")
# @param secret_id [String] Your secret name (e.g. "my-secret")
#
def update_secret project_id :, secret_id :
# Create a Secret Manager client.
client = Google :: Cloud :: SecretManager . secret_manager_service
# Build the resource name of the secret.
name = client . secret_path project : project_id , secret : secret_id
# Create the secret.
secret = client . update_secret (
secret : {
name : name ,
labels : {
secretmanager : "rocks"
}
},
update_mask : {
paths : [ "labels" ]
}
)
# Print the updated secret name and the new label value.
puts "Updated secret: #{ secret . name } "
puts "New label: #{ secret . labels [ 'secretmanager' ] } "
end
Remove labels
To remove labels, follow these steps:
Console
In the Google Cloud console, go to the Secret Manager page.
Go to Secret Manager
Select the secret that you want to edit.
Open the Info Panel , and then click the Labels tab.
Click delete Delete
to remove the labels that you no longer require.
Click Save .
gcloud
Before using any of the command data below,
make the following replacements:
SECRET_ID : the ID of the secret.
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
gcloud secrets update SECRET_ID --clear-labels
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID --clear-labels
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud secrets update SECRET_ID --clear-labels
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : the Google Cloud project ID.
SECRET_ID : the ID of the secret.
HTTP method and URL:
PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID ?update_mask=labels
Request JSON body:
{
"labels": {}
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID ?update_mask=labels"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT_ID /secrets?secretId= SECRET_ID ?update_mask=labels" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /secrets/ SECRET_ID ",
"createTime": "2024-03-25T08:24:13.153705Z",
"etag": "\"161477e6071da9\"",
"labels": {}
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
secretmanager "cloud.google.com/go/secretmanager/apiv1"
"cloud.google.com/go/secretmanager/apiv1/secretmanagerpb"
"google.golang.org/genproto/protobuf/field_mask"
)
// deleteSecret updates the metadata about an existing secret and remove an existing label.
func deleteSecretLabel ( w io . Writer , name string ) error {
// name := "projects/my-project/secrets/my-secret"
labelKey := "labelkey"
// Create the client.
ctx := context . Background ()
client , err := secretmanager . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create secretmanager client: %w" , err )
}
defer client . Close ()
// Build the request to get the secret.
req := & secretmanagerpb . GetSecretRequest {
Name : name ,
}
// Call the API.
result , err := client . GetSecret ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to get secret: %w" , err )
}
labels := result . Labels
delete ( labels , labelKey )
// Build the request to update the secret.
updateReq := & secretmanagerpb . UpdateSecretRequest {
Secret : & secretmanagerpb . Secret {
Name : name ,
Labels : labels ,
},
UpdateMask : & field_mask . FieldMask {
Paths : [] string { "labels" },
},
}
// Call the API.
updateResult , err := client . UpdateSecret ( ctx , updateReq )
if err != nil {
return fmt . Errorf ( "failed to update secret: %w" , err )
}
fmt . Fprintf ( w , "Updated secret: %s\n" , updateResult . Name )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Secret Manager Java SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import com.google.cloud.secretmanager.v1. Secret ;
import com.google.cloud.secretmanager.v1. SecretManagerServiceClient ;
import com.google.cloud.secretmanager.v1. SecretName ;
import com.google.protobuf. FieldMask ;
import com.google.protobuf. FieldMaskOrBuilder ;
import com.google.protobuf.util. FieldMaskUtil ;
import java.io.IOException ;
import java.util.HashMap ;
import java.util.Map ;
public class DeleteSecretLabel {
public static void deleteSecretLabel () throws IOException {
// TODO(developer): Replace these variables before running the sample.
// This is the id of the GCP project
String projectId = "your-project-id" ;
// This is the id of the secret to act on
String secretId = "your-secret-id" ;
// This is the key of the label to be deleted
String labelKey = "your-label-key" ;
deleteSecretLabel ( projectId , secretId , labelKey );
}
// Update an existing secret, by deleting a label.
public static Secret deleteSecretLabel (
String projectId , String secretId , String labelKey ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( SecretManagerServiceClient client = SecretManagerServiceClient . create ()) {
// Build the name.
SecretName secretName = SecretName . of ( projectId , secretId );
// Get the existing secret
Secret existingSecret = client . getSecret ( secretName );
Map<String , String > existingLabelsMap =
new HashMap<String , String > ( existingSecret . getLabels ());
existingLabelsMap . remove ( labelKey );
// Build the updated secret.
Secret secret =
Secret . newBuilder ()
. setName ( secretName . toString ())
. putAllLabels ( existingLabelsMap )
. build ();
// Build the field mask.
FieldMask fieldMask = FieldMaskUtil . fromString ( "labels" );
// Update the secret.
Secret updatedSecret = client . updateSecret ( secret , fieldMask );
System . out . printf ( "Updated secret %s\n" , updatedSecret . getName ());
return updatedSecret ;
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
// const name = 'projects/my-project/secrets/my-secret';
// const labelKey = 'secretmanager';
// Imports the Secret Manager library
const { SecretManagerServiceClient } = require ( ' @google-cloud/secret-manager ' );
// Instantiates a client
const client = new SecretManagerServiceClient ();
async function getSecret () {
const [ secret ] = await client . getSecret ({
name : name ,
});
return secret ;
}
async function deleteSecretLabel () {
const oldSecret = await getSecret ();
delete oldSecret . labels [ labelKey ];
const [ secret ] = await client . updateSecret ({
secret : {
name : name ,
labels : oldSecret . labels ,
},
updateMask : {
paths : [ 'labels' ],
},
});
console . info ( `Updated secret ${ secret . name } ` );
}
deleteSecretLabel ();
PHP
To run this code, first learn about using PHP on Google Cloud and
install the Secret Manager PHP SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
// Import the Secret Manager client library.
use Google\Cloud\SecretManager\V1\Client\SecretManagerServiceClient;
use Google\Cloud\SecretManager\V1\GetSecretRequest;
use Google\Cloud\SecretManager\V1\Secret;
use Google\Cloud\SecretManager\V1\UpdateSecretRequest;
use Google\Protobuf\FieldMask;
/**
* @param string $projectId Your Google Cloud Project ID (e.g. 'my-project')
* @param string $secretId Your secret ID (e.g. 'my-secret')
* @param string $labelKey Your label key (e.g. 'label-key')
*/
function delete_secret_label(string $projectId, string $secretId, string $labelKey): void
{
// Create the Secret Manager client.
$client = new SecretManagerServiceClient();
// Build the resource name of the parent project.
$name = $client->secretName($projectId, $secretId);
// Build the request.
$request = GetSecretRequest::build($name);
// get the secret.
$getSecret = $client->getSecret($request);
// get the secret labels
$labels = $getSecret->getLabels();
// delete the label
unset($labels[$labelKey]);
// set the field mask
$fieldMask = new FieldMask();
$fieldMask->setPaths(['labels']);
// build the secret
$secret = new Secret();
$secret->setLabels($labels);
$secret->setName($getSecret->getName());
// build the request
$request = new UpdateSecretRequest();
$request->setSecret($getSecret);
$request->setUpdateMask($fieldMask);
// update the secret
$updateSecret = $client->updateSecret($request);
// print the secret name
printf('Updated secret %s' . PHP_EOL, $updateSecret->getName());
}
Python
To run this code, first set up a Python development environment and
install the Secret Manager Python SDK .
On Compute Engine or GKE, you must
authenticate with the cloud-platform scope .
import argparse
# Import the Secret Manager client library.
from google.cloud import secretmanager
def delete_secret_label (
project_id : str , secret_id : str , label_key : str
) - > secretmanager . UpdateSecretRequest :
"""
Delete a label on an existing secret.
"""
# Create the Secret Manager client.
client = secretmanager . SecretManagerServiceClient ()
# Build the resource name of the secret.
name = client . secret_path ( project_id , secret_id )
# Get the secret.
response = client . get_secret ( request = { "name" : name })
labels = response . labels
# Delete the label
labels . pop ( label_key , None )
# Update the secret.
secret = { "name" : name , "labels" : labels }
update_mask = { "paths" : [ "labels" ]}
response = client . update_secret (
request = { "secret" : secret , "update_mask" : update_mask }
)
# Print the new secret name.
print ( f "Updated secret: { response . name } " )
return response
What's next
Create rotation schedules
Set an expiration date for a secret
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
