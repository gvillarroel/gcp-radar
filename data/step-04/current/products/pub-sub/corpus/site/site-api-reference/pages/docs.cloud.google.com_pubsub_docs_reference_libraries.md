---
title: "Pub/Sub client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/libraries
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/libraries
  title: "Pub/Sub client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Reference
Send feedback
Pub/Sub client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Pub/Sub API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Note:
Instructions on this page apply to the Python 3 and Java 8
App Engine standard environments . To use Python 2 with App Engine Standard,
see
this sample . Read more about the Cloud Client Libraries
and the older Google API Client Libraries
in Client libraries explained .
Install the client library
C++
For information about this client library's requirements and install
dependencies, see Setting up a C++ development environment .
C#
Install-Package Google.Cloud.PubSub.V1 -Pre
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/pubsub
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
< version>26 .76.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - pubsub < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation platform ( ' com . google . cloud : libraries - bom : 26.78.0 ' )
implementation ' com . google . cloud : google - cloud - pubsub '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-pubsub" % "1.150.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/pubsub
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-pubsub
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-pubsub
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-pubsub
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
The following example shows how to use the client library to
create a Pub/Sub topic.
C++
namespace pubsub = :: google :: cloud :: pubsub ;
namespace pubsub_admin = :: google :: cloud :: pubsub_admin ;
[]( pubsub_admin :: TopicAdminClient client , std :: string project_id ,
std :: string topic_id ) {
auto topic = client . CreateTopic (
pubsub :: Topic ( std :: move ( project_id ), std :: move ( topic_id )). FullName ());
// Note that kAlreadyExists is a possible error when the library retries.
if ( topic . status (). code () == google :: cloud :: StatusCode :: kAlreadyExists ) {
std :: cout << "The topic already exists \n " ;
return ;
}
if ( ! topic ) throw std :: move ( topic ). status ();
std :: cout << "The topic was successfully created: " << topic - > DebugString ()
<< " \n " ;
}
C#
using Google.Cloud.PubSub.V1 ;
using Grpc.Core ;
using System ;
public class CreateTopicSample
{
public Topic CreateTopic ( string projectId , string topicId )
{
PublisherServiceApiClient publisher = PublisherServiceApiClient . Create ();
var topicName = TopicName . FromProjectTopic ( projectId , topicId );
Topic topic = null ;
try
{
topic = publisher . CreateTopic ( topicName );
Console . WriteLine ( $"Topic {topic. Name } created." );
}
catch ( RpcException e ) when ( e . Status . StatusCode == StatusCode . AlreadyExists )
{
Console . WriteLine ( $"Topic {topicName} already exists." );
}
return topic ;
}
}
Go
// Sample pubsub-quickstart creates a Google Cloud Pub/Sub topic.
package main
import (
"context"
"fmt"
"log"
"cloud.google.com/go/pubsub/v2"
"cloud.google.com/go/pubsub/v2/apiv1/pubsubpb"
)
func main () {
ctx := context . Background ()
// Sets your Google Cloud Platform project ID.
projectID := "YOUR_PROJECT_ID"
// Creates a client.
client , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
log . Fatalf ( "Failed to create client: %v" , err )
}
defer client . Close ()
// Sets the id for the new topic.
topicID := "my-topic"
pbTopic := & pubsubpb . Topic {
Name : fmt . Sprintf ( "projects/%s/topics/%s" , projectID , topicID ),
}
// Creates the new topic.
topic , err := client . TopicAdminClient . CreateTopic ( ctx , pbTopic )
if err != nil {
log . Fatalf ( "Failed to create topic: %v" , err )
}
fmt . Printf ( "Topic %v created.\n" , topic )
}
Java
import com.google.cloud.pubsub.v1. TopicAdminClient ;
import com.google.pubsub.v1. Topic ;
import com.google.pubsub.v1. TopicName ;
import java.io.IOException ;
public class CreateTopicExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String topicId = "your-topic-id" ;
createTopicExample ( projectId , topicId );
}
public static void createTopicExample ( String projectId , String topicId ) throws IOException {
try ( TopicAdminClient topicAdminClient = TopicAdminClient . create ()) {
TopicName topicName = TopicName . of ( projectId , topicId );
Topic topic = topicAdminClient . createTopic ( topicName );
System . out . println ( "Created topic: " + topic . getName ());
}
}
}
Node.js
// Imports the Google Cloud client library
const { PubSub } = require ( ' @google-cloud/pubsub ' );
async function quickstart (
projectId = 'your-project-id' , // Your Google Cloud Platform project ID
topicNameOrId = 'my-topic' , // Name for the new topic to create
subscriptionName = 'my-sub' , // Name for the new subscription to create
) {
// Instantiates a client
const pubsub = new PubSub ({ projectId });
// Creates a new topic
const [ topic ] = await pubsub . createTopic ( topicNameOrId );
console . log ( `Topic ${ topic . name } created.` );
// Creates a subscription on that new topic
const [ subscription ] = await topic . createSubscription ( subscriptionName );
// Receive callbacks for new messages on the subscription
subscripti on . on ( 'message' , message = > {
console . log ( 'Received message:' , message . data . toString ());
process . exit ( 0 );
});
// Receive callbacks for errors on the subscription
subscripti on . on ( 'error' , error = > {
console . error ( 'Received error:' , error );
process . exit ( 1 );
});
// Send a message to the topic
await topic . publishMessage ({ data : Buffer . from ( 'Test message!' )});
}
Python
from google.cloud import pubsub_v1
# TODO(developer)
# project_id = "your-project-id"
# topic_id = "your-topic-id"
publisher = pubsub_v1 . PublisherClient ()
topic_path = publisher . topic_path ( project_id , topic_id )
topic = publisher . create_topic ( request = { "name" : topic_path })
print ( f "Created topic: { topic . name } " )
Ruby
# Imports the Google Cloud client library
require "google/cloud/pubsub"
# Instantiates a client
pubsub = Google :: Cloud :: PubSub . new
topic_admin = pubsub . topic_admin
# The name for the new topic
# topic_id = "your-topic-id"
# Creates the new topic
topic = topic_admin . create_topic name : pubsub . topic_path ( topic_id )
puts "Topic #{ topic . name } created."
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-pubsub on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-pubsub on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-pubsub on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-pubsub on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-pubsub on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-pubsub on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-pubsub on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-pubsub on Stack Overflow
Source code
Additional Pub/Sub API libraries
Language
Library
Java
java-pubsub-group-kafka-connector
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
