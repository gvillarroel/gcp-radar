---
title: "Filter messages from a subscription \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/filtering
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/filtering
  title: "Filter messages from a subscription \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
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
Filter messages from a subscription
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create Pub/Sub subscriptions with filters.
When you receive messages from a subscription with a filter, you only receive
the messages that match the filter. The Pub/Sub service
automatically acknowledges the messages that don't match the filter. You can
filter messages by their attributes ,
but not by the data in the message.
You can have multiple subscriptions attached to a
topic and each subscription can have a different filter.
For example, if you have a topic that receives news from different parts of
the world, you can configure a subscription to filter in news that
is published only from a specific region. For this configuration,
you must ensure that one of the topic message attributes
conveys the region of news publication.
When you receive messages from a subscription with a filter, you don't incur
outbound message fees for the messages that
Pub/Sub automatically acknowledges. You incur
message delivery fees and
seek-related storage fees for
these messages.
Create a subscription with a filter
Pull and push subscriptions can have filters. All subscribers can receive
messages from subscriptions with filters, including subscribers that use the
StreamingPull API .
You can create a subscription with a filter using the Google Cloud console,
the Google Cloud CLI, the client libraries, or the Pub/Sub API.
Console
To create a pull subscription with a filter, follow these steps:
In the Google Cloud console, go to the Subscriptions page.
Go to the Subscriptions page
Click Create subscription .
Enter the Subscription ID .
Choose or create a topic from the drop-down menu. The subscription receives messages from the topic.
In the Subscription filter section, enter the
filter expression .
Click Create .
To create a push subscription with a filter, follow these steps:
In the Google Cloud console, go to the Subscriptions page.
Go to the Subscriptions page
Click Create subscription .
Enter the Subscription ID .
Choose or create a topic from the drop-down menu. The subscription receives messages from the topic.
In the Delivery type section, click Push .
In the Endpoint URL field, enter the URL of the push endpoint.
In the Subscription filter section, enter the
filter expression .
Click Create .
gcloud
To create a pull subscription with a filter, use the
gcloud pubsub subscriptions create
command with the --message-filter flag:
gcloud pubsub subscriptions create SUBSCRIPTION_ID \
--topic = TOPIC_ID \
--message-filter = ' FILTER '
Replace the following:
SUBSCRIPTION_ID : the ID of the subscription to create
TOPIC_ID : the ID of the topic to attach to the subscription
FILTER : an expression in the
filtering syntax
To create a push subscription with a filter, use the
gcloud pubsub subscriptions create
command with the --push-endpoint and --message-filter flags:
gcloud pubsub subscriptions create SUBSCRIPTION_ID \
--topic = TOPIC_ID \
--push-endpoint = PUSH_ENDPOINT \
--message-filter = ' FILTER '
Replace the following:
SUBSCRIPTION_ID : the ID of the subscription to create
TOPIC_ID : the ID of the topic to attach to the subscription
PUSH_ENDPOINT : the URL of the server that the push subscriber
runs on
FILTER : an expression in the
filtering syntax
REST
To create a subscription with a filter, use the
projects.subscriptions.create
method.
PUT https://pubsub.googleapis.com/v1/projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_ID
Authorization: Bearer $(gcloud auth print-access-token)
Replace the following:
PROJECT_ID : the project ID for the project to create the
subscription in
SUBSCRIPTION_ID : the ID of the subscription to create
To create a pull subscription with a filter, specify the filter in the request
body:
{
"topic" : "projects/ PROJECT_ID /topics/ TOPIC_ID " ,
"filter" : " FILTER "
}
Replace the following:
PROJECT_ID : the project ID for the project with the topic
TOPIC_ID : the ID of the topic to attach to the subscription
FILTER : an expression in the
filtering syntax
To create a push subscription with a filter, specify the push endpoint and the
filter in the request body:
{
"topic" : "projects/ PROJECT_ID /topics/ TOPIC_ID " ,
"pushConfig" : {
"pushEndpoint" : " PUSH_ENDPOINT "
},
"filter" : " FILTER "
}
Replace the following:
PROJECT_ID : the project ID for the project with the topic
TOPIC_ID : the ID of the topic to attach to the subscription
PUSH_ENDPOINT : the URL of the server that the push subscriber
runs on
FILTER : an expression in the
filtering syntax
C++
Before trying this sample, follow the C++ setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub C++ API reference documentation .
namespace pubsub = :: google :: cloud :: pubsub ;
namespace pubsub_admin = :: google :: cloud :: pubsub_admin ;
[]( pubsub_admin :: SubscriptionAdminClient client ,
std :: string const & project_id , std :: string topic_id ,
std :: string subscription_id ) {
google :: pubsub :: v1 :: Subscription request ;
request . set_name (
pubsub :: Subscription ( project_id , std :: move ( subscription_id ))
. FullName ());
request . set_topic (
pubsub :: Topic ( project_id , std :: move ( topic_id )). FullName ());
request . set_filter ( R " ""( attributes.is-even = "false" )"" " );
auto sub = client . CreateSubscription ( request );
if ( sub . status (). code () == google :: cloud :: StatusCode :: kAlreadyExists ) {
std :: cout << "The subscription already exists \n " ;
return ;
}
if ( ! sub ) throw std :: move ( sub ). status ();
std :: cout << "The subscription was successfully created: "
<< sub - > DebugString () << " \n " ;
}
C#
Before trying this sample, follow the C# setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub C# API reference documentation .
using Google.Cloud.PubSub.V1 ;
using Grpc.Core ;
public class CreateSubscriptionWithFilteringSample
{
public Subscription CreateSubscriptionWithFiltering ( string projectId , string topicId , string subscriptionId , string filter )
{
SubscriberServiceApiClient subscriber = SubscriberServiceApiClient . Create ();
TopicName topicName = TopicName . FromProjectTopic ( projectId , topicId );
SubscriptionName subscriptionName = SubscriptionName . FromProjectSubscription ( projectId , subscriptionId );
Subscription subscription = null ;
var subscriptionRequest = new Subscription
{
SubscriptionName = subscriptionName ,
TopicAsTopicName = topicName ,
Filter = filter
};
try
{
subscription = subscriber . CreateSubscription ( subscriptionRequest );
}
catch ( RpcException e ) when ( e . Status . StatusCode == StatusCode . AlreadyExists )
{
// Already exists. That's fine.
}
return subscription ;
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
func createWithFilter ( w io . Writer , projectID , topic , subscription , filter string ) error {
// Receive messages with attribute key "author" and value "unknown".
// projectID := "my-project-id"
// topic := "projects/my-project-id/topics/my-topic"
// subscription := "projects/my-project/subscriptions/my-sub"
// filter := "attributes.author=\"unknown\""
ctx := context . Background ()
client , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "pubsub.NewClient: %w" , err )
}
defer client . Close ()
sub , err := client . SubscriptionAdminClient . CreateSubscription ( ctx , & pubsubpb . Subscription {
Name : subscription ,
Topic : topic ,
Filter : filter ,
})
if err != nil {
return fmt . Errorf ( "CreateSubscription: %w" , err )
}
fmt . Fprintf ( w , "Created subscription with filter: %v\n" , sub )
return nil
}
Java
Before trying this sample, follow the Java setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Java API reference documentation .
import com.google.cloud.pubsub.v1. SubscriptionAdminClient ;
import com.google.pubsub.v1. ProjectSubscriptionName ;
import com.google.pubsub.v1. ProjectTopicName ;
import com.google.pubsub.v1. Subscription ;
import java.io.IOException ;
public class CreateSubscriptionWithFiltering {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String topicId = "your-topic-id" ;
String subscriptionId = "your-subscription-id" ;
String filter = "attributes.author=\"unknown\"" ;
createSubscriptionWithFilteringExample ( projectId , topicId , subscriptionId , filter );
}
public static void createSubscriptionWithFilteringExample (
String projectId , String topicId , String subscriptionId , String filter ) throws IOException {
try ( SubscriptionAdminClient subscriptionAdminClient = SubscriptionAdminClient . create ()) {
ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId );
ProjectSubscriptionName subscriptionName =
ProjectSubscriptionName . of ( projectId , subscriptionId );
Subscription subscription =
subscriptionAdminClient . createSubscription (
Subscription . newBuilder ()
. setName ( subscriptionName . toString ())
. setTopic ( topicName . toString ())
// Receive messages with attribute key "author" and value "unknown".
. setFilter ( filter )
. build ());
System . out . println (
"Created a subscription with filtering enabled: " + subscription . getAllFields ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Node.js API reference documentation .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const filterString = 'YOUR_FILTER_STRING'; // e.g. 'attributes.author="unknown"'
// Imports the Google Cloud client library
const { PubSub } = require ( ' @google-cloud/pubsub ' );
// Creates a client; cache this for further use
const pubSubClient = new PubSub ();
async function createSubscriptionWithFilter (
topicNameOrId ,
subscriptionNameOrId ,
filterString ,
) {
// Creates a new subscription
await pubSubClient
. topic ( topicNameOrId )
. createSubscription ( subscriptionNameOrId , {
filter : filterString ,
});
console . log (
`Created subscription ${ subscriptionNameOrId } with filter ${ filterString } .` ,
);
}
Node.js
Before trying this sample, follow the Node.js setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Node.js API reference documentation .
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const filterString = 'YOUR_FILTER_STRING'; // e.g. 'attributes.author="unknown"'
// Imports the Google Cloud client library
import { PubSub } from '@google-cloud/pubsub' ;
// Creates a client; cache this for further use
const pubSubClient = new PubSub ();
async function createSubscriptionWithFilter (
topicNameOrId : string ,
subscriptionNameOrId : string ,
filterString : string ,
) {
// Creates a new subscription
await pubSubClient
. topic ( topicNameOrId )
. createSubscription ( subscriptionNameOrId , {
filter : filterString ,
});
console . log (
`Created subscription ${ subscriptionNameOrId } with filter ${ filterString } .` ,
);
}
PHP
Before trying this sample, follow the PHP setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub PHP API reference documentation .
use Google\Cloud\PubSub\PubSubClient;
/**
* Creates a Pub/Sub subscription.
*
* @param string $projectId The Google project ID.
* @param string $topicName The Pub/Sub topic name.
* @param string $subscriptionName The Pub/Sub subscription name.
* @param string $filter The Pub/Sub subscription filter.
*/
function create_subscription_with_filter(
string $projectId,
string $topicName,
string $subscriptionName,
string $filter
): void {
$pubsub = new PubSubClient([
'projectId' => $projectId,
]);
$topic = $pubsub->topic($topicName);
$subscription = $topic->subscription($subscriptionName);
$subscription->create(['filter' => $filter]);
printf('Subscription created: %s' . PHP_EOL, $subscription->name());
printf('Subscription info: %s' . PHP_EOL, json_encode($subscription->info()));
}
Python
Before trying this sample, follow the Python setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Python API reference documentation .
from google.cloud import pubsub_v1
# TODO(developer): Choose an existing topic.
# project_id = "your-project-id"
# topic_id = "your-topic-id"
# subscription_id = "your-subscription-id"
# filter = "attributes.author=\"unknown\""
publisher = pubsub_v1 . PublisherClient ()
subscriber = pubsub_v1 . SubscriberClient ()
topic_path = publisher . topic_path ( project_id , topic_id )
subscription_path = subscriber . subscription_path ( project_id , subscription_id )
with subscriber :
subscription = subscriber . create_subscription (
request = { "name" : subscription_path , "topic" : topic_path , "filter" : filter }
)
print ( f "Created subscription with filtering enabled: { subscription } " )
Ruby
The following sample uses Ruby Pub/Sub client library v3. If you are still using the v2 library, see
the migration guide to v3 .
To see a list of Ruby v2 code samples, see
the deprecated code samples .
Before trying this sample, follow the Ruby setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Ruby API reference documentation .
# project_id = "your-project-id"
# topic_id = "your-topic-id"
# subscription_id = "your-subscription-id"
# filter = "attributes.author=\"unknown\""
pubsub = Google :: Cloud :: PubSub . new project_id : project_id
subscription_admin = pubsub . subscription_admin
subscription = subscription_admin . create_subscription \
name : pubsub . subscription_path ( subscription_id ),
topic : pubsub . topic_path ( topic_id ),
filter : filter
puts "Created subscription with filtering enabled: #{ subscription_id } "
The maximum length of a filter is 256 bytes. The filter is
an immutable property of a subscription. After you create a subscription,
you cannot update the subscription to modify the filter.
How filters affect backlog metrics
To monitor the subscription you just created,
see Monitor subscriptions with filters .
If you have filtering enabled, the backlog metrics only include
data from messages that match the filter. The following is a list of the backlog metrics:
subscription/backlog_bytes
subscription/unacked_bytes_by_region
subscription/num_undelivered_messages
subscription/num_unacked_messages_by_region
subscription/oldest_unacked_message_age
subscription/oldest_unacked_message_age_by_region
topic/unacked_bytes_by_region
topic/num_unacked_messages_by_region
topic/oldest_unacked_messages_age_by_region
To learn more about these metrics, see the list of
Pub/Sub metrics .
Update the filter for a subscription
You cannot update the filter for an existing subscription.
Instead, follow this workaround.
Take a snapshot of the subscription for which you want to change the filter.
To know more about taking a snapshot using the console,
see Create a snapshot .
Create a new subscription with the new filter.
To know more about creating a subscription with a filter,
see Create a subscription with a filter .
In the Google Cloud console, go to the Pub/Sub subscriptions page.
Go to subscriptions
Click the subscription that you just created.
In the subscription details page, click Replay messages .
For Seek , click To a snapshot .
Select the snapshot that you created for the original subscription
in step 1 and then click Seek .
You don't lose any messages during the transition.
Change any subscribers to use the new subscription.
After completing this procedure, you can go ahead and delete the original
subscription.
Syntax to create a filter
To filter messages, write an expression that operates on attributes. You can
write an expression that matches the key or value of the attributes. The
attributes identifier selects the attributes in the message.
For example, the filters in the following table select the name attribute:
Filter
Description
attributes:name
Messages with the name attribute
NOT attributes:name
Messages without the name attribute
attributes.name = "com"
Messages with the name attribute and the value of com
attributes.name != "com"
Messages without the name attribute and the value of com
hasPrefix(attributes.name, "co")
Messages with the name attribute and a value that starts with co
NOT hasPrefix(attributes.name, "co")
Messages without the name attribute and a value that starts with co
Comparison operators for the filter expression
You can filter attributes with the following comparison operators:
:
=
!=
The : operator matches a key in a list of attributes.
attributes: KEY
The equality operators match keys and values. The value must be a string
literal.
attributes. KEY = " VALUE "
An expression with an equality operator must begin with a key, and the equality
operator must compare a key and a value.
Valid : Filter compares a key and a value
attributes.name = "com"
Invalid : The left-hand side of the filter is a value
"com" = attributes.name
Invalid : Filter compares two keys
attributes.name = attributes.website
The key and value are case-sensitive and must match the attribute exactly. If
a key contains characters other than hyphens, underscores, or alphanumeric
characters, use a string literal.
attributes."iana.org/language_tag" = "en"
To use backslashes, quotation marks, and
non-printing characters
in a filter, escape the characters within a string literal. You can also use
Unicode, hexadecimal, and octal escape sequences within a string literal.
Valid : Filter escapes characters within a string literal
attributes:"\u307F\u3093\u306A"
Invalid : Filter escapes characters without a string literal
attributes:\u307F\u3093\u306A
Boolean operators for the filter expression
You can use boolean operators AND , NOT , and OR in a filter. The operators
must be in uppercase letters. For example, the
following filter is for messages with the iana.org/language_tag attribute,
but without the name attribute and the com value.
attributes:"iana.org/language_tag" AND NOT attributes.name = "com"
The NOT operator has the highest precedence. To combine the AND and OR
operators, use parentheses and complete expressions.
Valid : AND and OR operators with parentheses
attributes:"iana.org/language_tag" AND (attributes.name = "net" OR attributes.name = "org")
Invalid : AND and OR operators without parentheses
attributes:"iana.org/language_tag" AND attributes.name = "net" OR attributes.name = "org"
Invalid : AND and OR operators combine incomplete expressions
attributes.name = "com" AND ("net" OR "org")
You can also use the unary minus operator instead of the NOT operator.
attributes.name = "com" AND -attributes:"iana.org/language_tag"
Functions for the filter expression
You can use the hasPrefix function to filter for attributes with values that
start with a substring. hasPrefix is the only supported function in a filter.
While prefix matching is supported with the hasPrefix function, general
regular expressions are not supported.
hasPrefix(attributes. KEY , " SUBSTRING ")
Replace the following:
KEY : the name of the attribute
SUBSTRING : a substring of the value
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
