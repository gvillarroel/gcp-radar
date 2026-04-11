---
title: "Datastore mode client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/reference/libraries
  title: "Datastore mode client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Guides
Send feedback
Datastore mode client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Datastore API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C#
Install-Package Google.Cloud.Datastore.V1
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/datastore
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
< version>26 .62.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - datastore < / artifactId >
< / dependency >
If you are using Gradle ,
add the following to your dependencies:
implementation platform ( ' com . google . cloud : libraries - bom : 26.74.0 ' )
implementation ' com . google . cloud : google - cloud - datastore '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-datastore" % "2.34.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/datastore
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-datastore
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-datastore
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-datastore
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
C#
using Google.Cloud.Datastore.V1 ;
namespace GoogleCloudSamples
{
public class QuickStart
{
public static void Main ( string [] args )
{
// Your Google Cloud Platform project ID
string projectId = "YOUR-PROJECT-ID" ;
// Instantiates a client
DatastoreDb db = DatastoreDb . Create ( projectId );
// The kind for the new entity
string kind = "Task" ;
// The name/ID for the new entity
string name = "sampletask1" ;
KeyFactory keyFactory = db . CreateKeyFactory ( kind );
// The Cloud Datastore key for the new entity
Key key = keyFactory . CreateKey ( name );
var task = new Entity
{
Key = key ,
["description"] = "Buy milk"
};
using ( DatastoreTransaction transaction = db . BeginTransaction ())
{
// Saves the task
transaction . Upsert ( task );
transaction . Commit ();
Console . WriteLine ( $"Saved {task. Key . Path [0].Name}: {(string)task[" description "]}" );
}
}
}
}
Go
// Sample datastore-quickstart fetches an entity from Google Cloud Datastore.
package main
import (
"context"
"fmt"
"log"
"cloud.google.com/go/datastore"
)
type Task struct {
Description string
}
func main () {
ctx := context . Background ()
// Set your Google Cloud Platform project ID.
projectID := "YOUR_PROJECT_ID"
// Creates a client.
client , err := datastore . NewClient ( ctx , projectID )
if err != nil {
log . Fatalf ( "Failed to create client: %v" , err )
}
defer client . Close ()
// Sets the kind for the new entity.
kind := "Task"
// Sets the name/ID for the new entity.
name := "sampletask1"
// Creates a Key instance.
taskKey := datastore . NameKey ( kind , name , nil )
// Creates a Task instance.
task := Task {
Description : "Buy milk" ,
}
// Saves the new entity.
if _ , err := client . Put ( ctx , taskKey , & task ); err != nil {
log . Fatalf ( "Failed to save task: %v" , err )
}
fmt . Printf ( "Saved %v: %v\n" , taskKey , task . Description )
}
Java
// Imports the Google Cloud client library
import com.google.cloud.datastore. Datastore ;
import com.google.cloud.datastore. DatastoreOptions ;
import com.google.cloud.datastore. Entity ;
import com.google.cloud.datastore. Key ;
public class QuickstartSample {
public static void main ( String ... args ) throws Exception {
// Instantiates a client
Datastore datastore = DatastoreOptions . getDefaultInstance (). getService ();
// The kind for the new entity
String kind = "Task" ;
// The name/ID for the new entity
String name = "sampletask1" ;
// The Cloud Datastore key for the new entity
Key taskKey = datastore . newKeyFactory (). setKind ( kind ). newKey ( name );
// Prepares the new entity
Entity task = Entity . newBuilder ( taskKey ). set ( "description" , "Buy milk" ). build ();
// Saves the entity
datastore . put ( task );
System . out . printf ( "Saved %s: %s%n" , task . getKey (). getName (), task . getString ( "description" ));
// Retrieve entity
Entity retrieved = datastore . get ( taskKey );
System . out . printf ( "Retrieved %s: %s%n" , taskKey . getName (), retrieved . getString ( "description" ));
}
}
Node.js
// Imports the Google Cloud client library
const { Datastore } = require ( ' @google-cloud/datastore ' );
// Creates a client
const datastore = new Datastore ();
async function quickstart () {
// The kind for the new entity
const kind = 'Task' ;
// The name/ID for the new entity
const name = 'sampletask1' ;
// The Cloud Datastore key for the new entity
const taskKey = datastore . key ([ kind , name ]);
// Prepares the new entity
const task = {
key : taskKey ,
data : {
description : 'Buy milk' ,
},
};
// Saves the entity
await datastore . save ( task );
console . log ( `Saved ${ task . key . name } : ${ task . data . description } ` );
}
quickstart ();
PHP
# Includes the autoloader for libraries installed with composer
require __DIR__ . '/vendor/autoload.php';
# Imports the Google Cloud client library
use Google\Cloud\Datastore\DatastoreClient;
# Your Google Cloud Platform project ID
$projectId = 'YOUR_PROJECT_ID';
# Instantiates a client
$datastore = new DatastoreClient([
'projectId' => $projectId
]);
# The kind for the new entity
$kind = 'Task';
# The name/ID for the new entity
$name = 'sampletask1';
# The Cloud Datastore key for the new entity
$taskKey = $datastore->key($kind, $name);
# Prepares the new entity
$task = $datastore->entity($taskKey, ['description' => 'Buy milk']);
# Saves the entity
$datastore->upsert($task);
echo 'Saved ' . $task->key() . ': ' . $task['description'] . PHP_EOL;
Python
# Imports the Google Cloud client library
from google.cloud import datastore
# Instantiates a client
datastore_client = datastore . Client ()
# The kind for the new entity
kind = "Task"
# The name/ID for the new entity
name = "sampletask1"
# The Cloud Datastore key for the new entity
task_key = datastore_client . key ( kind , name )
# Prepares the new entity
task = datastore . Entity ( key = task_key )
task [ "description" ] = "Buy milk"
# Saves the entity
datastore_client . put ( task )
print ( f "Saved { task . key . name } : { task [ 'description' ] } " )
Ruby
# Imports the Google Cloud client library
require "google/cloud/datastore"
# Instantiate a client
datastore = Google :: Cloud :: Datastore . new
# The kind for the new entity
kind = "Task"
# The name/ID for the new entity
# task_name = "sampleTask"
# The Cloud Datastore key for the new entity
task_key = datastore . key kind , task_name
# Prepares the new entity
task = datastore . entity task_key do | t |
t [ "description" ] = "Buy milk"
end
# Saves the entity
datastore . save task
puts "Saved #{ task . key . name } : #{ task [ 'description' ] } "
task_key = datastore . find task_key
Additional resources
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-datastore on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-datastore on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-datastore on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-datastore on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-datastore on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-datastore on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-datastore on Stack Overflow
Source code
Dependency on App Engine application
See App Engine Requirement .
Google App Engine Standard Environment Client Libraries
Integrate Firestore in Datastore mode with your App Engine Standard Environment
applications by using the App Engine client libraries.
Language
Library
Go
Google App Engine SDK for Go
Java
Google App Engine SDK for Java
Python 3
Google Cloud Datastore client library or the Google Cloud NDB Client Library .
Python 2
Google Cloud NDB Client Library
Warning: For App Engine applications that are written in Python 2, the
Google Datastore DB Client Library and the App Engine NDB Library are no
longer recommended; use the Google Cloud NDB Client Library instead. See
Migrating to Cloud NDB .
Third-party Datastore API client libraries
In addition to the Google-supported client libraries listed in the tables above,
a set of third-party libraries are available.
Language
Library
Java
Objectify
PHP
Datastore Library for PHP
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
