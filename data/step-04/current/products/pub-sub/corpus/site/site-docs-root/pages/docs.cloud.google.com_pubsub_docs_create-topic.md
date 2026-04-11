---
title: "Create a topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/create-topic
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/create-topic
  title: "Create a topic \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Guides
Send feedback
Create a topic
Stay organized with collections
Save and categorize content based on your preferences.
Within Pub/Sub, a topic is a named resource that represents
a feed of messages. You must create a topic before you can publish or subscribe
to it. Pub/Sub supports two kinds of topics: a standard topic and
an import topic.
This document describes how to create a Pub/Sub standard topic. If
you want to learn more about an import topic and how to create one, see
About import topics .
To create a topic you can use the Google Cloud console, the Google Cloud CLI,
the client library, or the Pub/Sub API.
Before you begin
Learn about the Pub/Sub service and its terminology .
Learn about the publish process .
Required roles and permissions
To get the permissions that
you need to create a topic,
ask your administrator to grant you the
Pub/Sub Editor( roles/pubsub.editor )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create a topic. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a topic:
Grant this permission to create a topic on the project:
pubsub.topics.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
You can configure access control at the project level and at the individual
resource level. You can create a subscription in one project and
attach it to a topic located in a different project.
Ensure that you have the required permissions for
each project.
Properties of a topic
When you create or update a topic, you must specify its properties.
Add a default subscription
Adds a default subscription to the Pub/Sub topic.
You can create another subscription for the topic after the topic is created.
The default subscription has the following properties:
Subscription ID of -sub
Pull delivery type
Message retention duration of seven days
Expiration after 31 days of inactivity
Acknowledgment deadline of 10 seconds
Immediate retry policy
Use a schema
A schema is a format that the message data field must follow.
A schema is a contract between the publisher and subscriber that
Pub/Sub enforces. Topic schemas help standardize message
types and permissions to allow them to be consumed by different teams
in your organization. Pub/Sub creates a central authority
for message types and permissions. To create a topic with schema,
see Schema overview .
Enable ingestion
Enabling this property lets you ingest streaming data
from external sources into a topic so that you can use the
features of Google Cloud. To create an import topic for
ingestion, see the following:
Create an Amazon Kinesis Data Streams import topic
Create a Cloud Storage import topic
Create an Azure Event Hubs topic
Create an Amazon MSK topic
Create a Confluent Cloud topic
Enable message retention
Specifies how long the Pub/Sub topic retains messages
after publication. After the message retention duration is over,
Pub/Sub might discard the message regardless of its
acknowledgment state. Message storage fees are charged for storing all
messages published to the topic
Default = Not enabled
Minimum value = 10 minutes
Maximum value = 31 days
Export message data to BigQuery
Enabling this property lets you create a BigQuery subscription
that writes messages to an existing BigQuery table as
they are received. You don't need to configure a separate subscriber
client. For more information about BigQuery subscriptions,
see BigQuery subscriptions .
Backup message data to Cloud Storage
Enabling this property lets you create a Cloud Storage
subscription that writes messages to an existing Cloud Storage
table as they are received. You don't need to configure a separate subscriber
client. For more information about Cloud Storage subscriptions,
see Cloud Storage subscriptions .
Transforms
Topic SMTs allow for lightweight modifications to message data and attributes
directly within Pub/Sub. This feature enables data cleaning,
filtering, or format conversion before the messages are published to the topic.
For more information about SMTs, see the SMTs overview .
Google-owned and Google-managed encryption key
Specifies that the topic is encrypted using
Google-owned and Google-managed encryption keys. Pub/Sub encrypts
messages with Google-owned and Google-managed encryption keys by default, so choosing
this option maintains the default behavior. Google handles key management and
rotation automatically, ensuring your messages are always protected with the
strongest available encryption. This option requires no further configuration.
For more information about Google-owned and Google-managed encryption keys,
see Default encryption with Google-owned and Google-managed encryption keys .
Cloud KMS key
Specifies if the topic is encrypted with a customer-managed encryption
key (CMEK). Pub/Sub
encrypts messages with Google-owned and Google-managed encryption keys by default. If you specify
this option, Pub/Sub uses the envelope encryption pattern with
CMEK. In this approach, Cloud KMS does not encrypt the messages. Instead,
Cloud KMS encrypts the Data Encryption Keys (DEKs) that Pub/Sub
creates for each topic. Pub/Sub encrypts the messages using
the newest DEK that was generated for the topic. Pub/Sub
decrypts the messages shortly before they are delivered to subscribers.
For more information about creating a key, see Configure message encryption .
Create a topic
Create a topic before you can publish or subscribe to it.
Console
To create a topic, follow these steps:
In the Google Cloud console, go to the Pub/Sub Create topic
page.
Go to Create topic
In the Topic ID field, enter an ID for your topic. For more information
about naming topics, see the
naming guidelines .
To create a default subscription for the
topic, select Add a default subscription . This option is enabled by
default.
Optional. To use a schema with the topic, click Use a schema and
provide the schema. For more information, see
Create and associate a schema when you create a topic .
For a standard topic, leave Enable ingestion unselected.
Optional. To retain messages after they are published, select
Enable message retention . Select the retention period in days, hours,
and minutes. For more information, see
Enable message retention .
Optional. To export published messages to a BigQuery table,
select Export data to BigQuery and enter the details for the table.
For more information, see
Create BigQuery subscriptions .
Optional. To back up published messages to a Cloud Storage bucket,
select Backup message data to Cloud Storage and enter the details for
the Cloud Storage bucket. For more information, see
Create Cloud Storage subscriptions .
Optional. Under Transforms , add one or more
Single Message Transforms (SMTs) to
manipulate and filter message data. For more information, see
Create a topic with SMTs .
Optional. To use a customer-managed encryption key (CMEK) to encrypt
messages, select Cloud KMS key . By default, Pub/Sub
uses Google default encryption, which doesn't require a CMEK. For more
information, see Configure message encryption .
Optional. To manage the keys associated with the topic, click
add Manage keys . For more
information, see
Tags overview .
Click Create topic .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
To create a topic, run the
gcloud pubsub topics create
command:
gcloud pubsub topics create TOPIC_ID
REST
To create a topic, use the
projects.topics.create
method:
The request must be authenticated with an access token in the Authorization
header. To obtain an access token for the current Application Default
Credentials:
gcloud auth application-default print-access-token .
PUT https://pubsub.googleapis.com/v1/projects/ PROJECT_ID /topics/ TOPIC_ID
Authorization: Bearer ACCESS_TOKEN
Where:
PROJECT_ID is your project ID.
TOPIC_ID is your topic ID.
Response:
{
"name" : "projects/ PROJECT_ID /topics/ TOPIC_ID "
}
C++
Before trying this sample, follow the C++ setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub C++ API reference documentation .
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
Before trying this sample, follow the C# setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub C# API reference documentation .
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
The following sample uses the major version of the Go Pub/Sub client library (v2). If you are still using the v1 library, see
the migration guide to v2 .
To see a list of v1 code samples, see
the deprecated code samples .
Before trying this sample, follow the Go setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Go API reference documentation .
import (
"context"
"fmt"
"io"
"cloud.google.com/go/pubsub/v2"
"cloud.google.com/go/pubsub/v2/apiv1/pubsubpb"
)
func create ( w io . Writer , projectID , topicID string ) error {
// projectID := "my-project-id"
// topicID := "my-topic"
ctx := context . Background ()
client , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "pubsub.NewClient: %w" , err )
}
defer client . Close ()
topic := & pubsubpb . Topic {
Name : fmt . Sprintf ( "projects/%s/topics/%s" , projectID , topicID ),
}
t , err := client . TopicAdminClient . CreateTopic ( ctx , topic )
if err != nil {
return fmt . Errorf ( "CreateTopic: %w" , err )
}
fmt . Fprintf ( w , "Topic created: %v\n" , t )
return nil
}
Java
Before trying this sample, follow the Java setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Java API reference documentation .
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
Before trying this sample, follow the Node.js setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Node.js API reference documentation .
/**
* TODO ( developer ): Uncomment this variable before running the sample .
*/
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID' ;
// Imports the Google Cloud client library
const { PubSub } = require ( '@google-cloud/pubsub' );
// Creates a client ; cache this for further use
const pubSubClient = new PubSub ();
async function createTopic ( topicNameOrId ) {
// Creates a new topic
await pubSubClient . createTopic ( topicNameOrId );
console . log ( ` Topic $ { topicNameOrId } created . ` );
}
Node.ts
Before trying this sample, follow the Node.js setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Node.js API reference documentation .
/**
* TODO ( developer ): Uncomment this variable before running the sample .
*/
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID' ;
// Imports the Google Cloud client library
import { PubSub } from '@google-cloud/pubsub' ;
// Creates a client ; cache this for further use
const pubSubClient = new PubSub ();
async function createTopic ( topicNameOrId : string ) {
// Creates a new topic
await pubSubClient . createTopic ( topicNameOrId );
console . log ( ` Topic $ { topicNameOrId } created . ` );
}
PHP
Before trying this sample, follow the PHP setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub PHP API reference documentation .
use Google\Cloud\PubSub\PubSubClient;
/**
* Creates a Pub/Sub topic.
*
* @param string $projectId The Google project ID.
* @param string $topicName The Pub/Sub topic name.
*/
function create_topic($projectId, $topicName)
{
$pubsub = new PubSubClient([
'projectId' => $projectId,
]);
$topic = $pubsub->createTopic($topicName);
printf('Topic created: %s' . PHP_EOL, $topic->name());
}
Python
Before trying this sample, follow the Python setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Python API reference documentation .
from google.cloud import pubsub_v1
# TODO(developer)
# project_id = "your-project-id"
# topic_id = "your-topic-id"
publisher = pubsub_v1 . PublisherClient ()
topic_path = publisher . topic_path ( project_id , topic_id )
topic = publisher . create_topic ( request = { "name" : topic_path })
print ( f "Created topic: { topic . name } " )
Ruby
The following sample uses Ruby Pub/Sub client library v3. If you are still using the v2 library, see
the migration guide to v3 .
To see a list of Ruby v2 code samples, see
the deprecated code samples .
Before trying this sample, follow the Ruby setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Ruby API reference documentation .
# topic_id = "your-topic-id"
pubsub = Google :: Cloud :: PubSub . new
topic_admin = pubsub . topic_admin
topic = topic_admin . create_topic name : pubsub . topic_path ( topic_id )
puts "Topic #{ topic . name } created."
Organization policy constraints
Organizational policies can restrict topic creation, for example,
a policy can restrict message storage in a Compute Engine
region. To avoid topic creation errors, examine and update
organizational policies, as needed, before creating a topic.
If your project is newly created, wait a few minutes for
the organization policy to initialize before creating a topic.
Go to Organization Policies
For more information, see Configure message storage policies .
What's next
Choose the type of subscription for your topic.
Learn how to publish a message to a topic .
Troubleshoot a topic .
Create or modify a topic with gcloud CLI ,
REST APIs , or Client libraries .
Apache Kafka® is a registered
trademark of The Apache Software Foundation or its affiliates in the United
States and/or other countries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
