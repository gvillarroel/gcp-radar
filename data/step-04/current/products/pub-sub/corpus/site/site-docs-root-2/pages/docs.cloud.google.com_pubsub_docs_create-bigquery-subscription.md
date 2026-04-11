---
title: "Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription
  title: "Create BigQuery subscriptions \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
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
Create BigQuery subscriptions
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to create a BigQuery subscription.
You can use the Google Cloud console, the Google Cloud CLI, the client library,
or the Pub/Sub API to create a BigQuery subscription.
Before you begin
Before reading this document, ensure that you're familiar with the following:
How subscriptions work.
The workflow for BigQuery subscriptions .
How to configure a
dead letter topic
to handle message failures.
In addition to your familiarity with Pub/Sub and
BigQuery, ensure that you meet the following prerequisites
before you create a BigQuery subscription:
A BigQuery table exists. Alternatively, you can create one
when you create the BigQuery subscription as described in
the later sections of this document.
Compatibility between the schema of the Pub/Sub topic and
the BigQuery table. If you add a non-compatible
BigQuery table, you get a compatibility-related error
message. For more information, see
Schema compatibility .
Required roles and permissions
To get the permissions that
you need to create a BigQuery subscription,
ask your administrator to grant you the
Pub/Sub Editor ( roles/pubsub.editor )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create a BigQuery subscription. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a BigQuery subscription:
pubsub.subscriptions.create
on the project
pubsub.topics.attachSubscription
on the topic
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Cross-project subscriptions
If you create a subscription in one project for a topic in another project, you
must have pubsub.subscriptions.create permission on the project in which you
are creating the subscription, and pubsub.topics.attachSubscription permission
on the topic.
Grant IAM roles to the service account
Pub/Sub uses an Identity and Access Management (IAM) service account to
access Google Cloud resources. By default, it uses the
Pub/Sub service agent
( service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com ).
To enable Pub/Sub to write to a BigQuery table,
the service account requires the BigQuery Data Editor
( roles/bigquery.dataEditor ) role. You can give the service account permissions
either for the project or the table, as follows:
Project
In the Google Cloud console, go to the IAM page.
Go to IAM
Select Include Google-provided role grants .
Find the row for the Cloud Pub/Sub service account and click
mode_edit Edit principal .
Click Add another role and select the
BigQuery Data Editor role.
For more information, see
Grant an IAM role by using the console .
Table
In the Google Cloud console, go to BigQuery Studio .
Go to BigQuery Studio
In the Explorer pane search box labeled Filter by name and labels ,
type the name of the table and press Enter .
In the search results, click the name of the table to which you want to
grant permission.
In the Details tab, click
person_add Share >
Manage permissions .
Click person_add
Add principal , then enter the service account identifier, in the
following format:
service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com .
In the Assign roles list, select
BigQuery Data Editor .
Click Save . The principal is granted the role on the resource.
Use a custom service account
By granting the BigQuery Data Editor role to the
Cloud Pub/Sub service account, any user who has permission to create a
subscription in your project can write to the BigQuery table. If
you want to provide more granular permissions, configure a
user-managed service account instead.
The following permissions are required to configure a user-managed service
account to write to BigQuery:
The user-managed service account must have the
BigQuery Data Editor role.
The Cloud Pub/Sub service account must have the
iam.serviceAccounts.getAccessToken permission on the user-managed service
account.
The user creating the subscription must have the iam.serviceAccounts.actAs
permission on the user-managed service account.
When you create the subscription, specify the user-managed service account as
the subscription service account .
BigQuery subscription properties
BigQuery subscriptions support all of the
common subscription properties . The
following sections describe properties that are specific to
BigQuery subscriptions.
Use topic schema
This option lets Pub/Sub use the schema
of the Pub/Sub topic to which the
subscription is attached. In addition, Pub/Sub
writes the fields in messages to the corresponding
columns in the BigQuery table.
Caution: Deleting a schema or a schema revision is permanent. Any messages that
validated against a deleted schema revision at the time of publish cannot be
written to BigQuery using a BigQuery subscription with
Use topic schema enabled. Instead of deleting a schema or revision,
consider rolling back a schema .
When you use this option, remember to check the following additional requirements:
The fields in the topic schema and the BigQuery schema
must have the same names and their types must be compatible with each other.
Any optional field in the topic schema must also be
optional in the BigQuery schema.
Required fields in the topic schema don't need to be
required in the BigQuery schema.
If there are BigQuery fields that are not present in
the topic schema, these BigQuery fields
must be in mode NULLABLE .
If the topic schema has additional fields that
are not present in the BigQuery schema and these
fields can be dropped, select the option Drop unknown fields .
You can select only one of the subscription properties, Use topic schema
or Use table schema .
If you don't select the Use topic schema or Use table schema option,
ensure that the BigQuery table has a column called data of
type BYTES , STRING , or JSON . Pub/Sub writes the message to
this BigQuery column.
You might not see changes to the Pub/Sub topics schema or
BigQuery table schema take effect immediately with messages
written to the BigQuery table. For example, if the Drop
unknown fields option is enabled and a field is present in the
Pub/Sub schema, but not the BigQuery schema,
messages written to the BigQuery table might still not contain
the field after adding it to the BigQuery schema. Eventually,
the schemas synchronize and subsequent messages include the field.
When you use the Use topic schema option for your BigQuery
subscription, you can also take advantage of BigQuery change
data capture (CDC). CDC updates your BigQuery tables by
processing and applying changes to existing rows.
To learn more about this feature, see Stream table updates with change data capture .
To learn how to use this feature with BigQuery subscriptions,
see BigQuery change data capture .
Use table schema
This option lets Pub/Sub use the schema of the
BigQuery table to write the fields of a JSON
message to the corresponding columns. When you use this option, remember to
check the following additional requirements:
The names of each column in the BigQuery table must only
contain letters (a-z, A-Z), numbers (0-9), or underscores (_).
Published messages must be in JSON format.
If a BigQuery table column has the JSON data type, the
corresponding field in your Pub/Sub message must be valid,
JSON in an escaped string. For example, for a column named myData , the
message field must be "myData": "{\"key\":\"value\"}" .
BigQuery rejects messages that don't contain valid JSON.
The following JSON conversions are supported:
JSON Type
BigQuery Data Type
string
NUMERIC , BIGNUMERIC , DATE , TIME , DATETIME , or TIMESTAMP
number
NUMERIC , BIGNUMERIC , DATE , TIME , DATETIME , or TIMESTAMP
When using number to DATE , DATETIME , TIME , or TIMESTAMP conversions, the number must adhere to the supported representations .
When using number to NUMERIC or BIGNUMERIC conversion, the precision and range of values is limited to those accepted by the IEEE 754 standard for floating-point arithmetic . If you require high precision or a wider range of values, use string to NUMERIC or BIGNUMERIC conversions instead.
When using string to NUMERIC or BIGNUMERIC conversions, Pub/Sub assumes the string is a human readable number (e.g. "123.124" ). If processing the string as a human readable number fails, Pub/Sub treats the string as bytes encoded with the BigDecimalByteStringEncoder .
If the subscription's topic
has a schema associated with it , then
the message encoding property must be set to JSON .
If there are BigQuery fields that are not present in
the messages, these BigQuery fields must be in mode NULLABLE .
If the messages have additional fields that are not present in the
BigQuery schema and these fields can be dropped, select the
option Drop unknown fields .
You can select only one of the subscription properties, Use topic schema
or Use table schema .
If you don't select the Use topic schema or Use table schema option,
ensure that the BigQuery table has a column called data of
type BYTES , STRING , or JSON . Pub/Sub writes the message to
this BigQuery column.
You might not see changes to the BigQuery table schema take
effect immediately with messages written to the BigQuery table.
For example, if the Drop unknown fields option is enabled and a field is
present in the messages, but not in the BigQuery schema,
messages written to the BigQuery table might still not contain
the field after adding it to the BigQuery schema. Eventually,
the schema synchronizes and subsequent messages include the field.
When you use the Use table schema option for your BigQuery subscription, you
can also take advantage of BigQuery change data capture (CDC).
CDC updates your BigQuery tables by processing and applying changes to existing
rows.
To learn more about this feature, see Stream table updates with change data capture .
To learn how to use this feature with BigQuery subscriptions, see BigQuery change data capture .
Drop unknown fields
This option is used with the Use topic schema or Use table schema
option. When enabled, this option lets Pub/Sub drop any field
that is present in the topic schema or message but not in the
BigQuery schema. The fields that are not part
of the BigQuery schema are dropped when writing the
message to the BigQuery table.
Without Drop unknown fields set, messages with extra fields are not
written to BigQuery and remain in the subscription backlog
unless you configure a dead letter topic .
The Drop unknown fields setting does not affect fields that are not defined
in either the Pub/Sub topic schema or the
BigQuery table schema. In this case, a valid
Pub/Sub message is delivered to the subscription. However,
because BigQuery does not have columns defined for these extra
fields, these fields are dropped during the BigQuery writing
process. To prevent this behaviour, ensure that any field contained in the
Pub/Sub message is also contained in the
BigQuery table schema.
The behavior regarding extra fields can also depend on the specific schema type
(Avro, Protocol Buffer) and encoding (JSON, Binary) used. For information about
how these factors affect the handling of extra fields, see the documentation for
your specific schema type and encoding.
Write metadata
This option lets Pub/Sub
write the metadata of each message to additional columns in the
BigQuery table. Else, the metadata
is not written to the BigQuery table.
If you select the Write metadata option, ensure that the
BigQuery table has the fields described in the following table.
If you don't select the Write metadata option, then the destination BigQuery table only requires the data field unless
use_topic_schema is true. If you select both the Write metadata and
Use topic schema options, then the schema of the topic must
not contain any fields with names that match those of the metadata parameters.
This limitation includes camelcase versions of these snake case parameters.
Parameters
subscription_name
STRING
Name of a subscription.
message_id
STRING
ID of a message
publish_time
TIMESTAMP
The time of publishing a message.
data
BYTES, STRING, or JSON
The message body.
The data field is required for all destination
BigQuery tables that don't select Use
topic schema or Use table schema . If the
field is of type JSON, then the message body must be
valid JSON.
attributes
STRING or JSON
A JSON object containing all message attributes. It also
contains additional fields that are part of the
Pub/Sub message including the ordering key,
if present.
Service account
You have the following options to write messages to a BigQuery
table:
Configure a custom service account so
that only users who have the iam.serviceAccounts.actAs permission on the
service account can create a subscription that writes to the table. An
example role that includes the iam.serviceAccounts.actAs permission is the
Service Account User ( roles/iam.serviceAccountUser ) role.
Use the default Pub/Sub service agent that lets any user with
the ability to create subscriptions in the project to create a subscription
that writes to the table. The Pub/Sub service agent is the
default setting when you don't specify a custom service account.
Create a BigQuery subscription
To create a subscription with BigQuery delivery, perform the following
steps.
Console
In the Google Cloud console, go to the Create subscription page.
Go to Subscriptions
For the Subscription ID field, enter a name. For information on how
to name a subscription, see
Guidelines to name a topic or a subscription .
In the Select a Cloud Pub/Sub topic box, type or select the topic to
receive messages from.
For Delivery type , select Write to BigQuery .
Select the BigQuery table:
For Project , select the Google Cloud project that contains
the BigQuery table.
For Dataset , select an existing dataset or click
Create new dataset to create a new dataset. For information about
creating a dataset, see Create datasets .
In the Table field, enter the name of the table. To create a new
table, click the link that takes you to the BigQuery
Create new table page. The page opens in a separate tab. For
information about creating a table, see
Create and use tables .
For Schema Configuration , select one of the following options:
Don't use a schema . Pub/Sub writes the message bytes
to a column named data .
Use topic schema . Pub/Sub uses the schema that is
associated with the topic. For more information, see
Use topic schema .
Use table schema . Pub/Sub uses the schema of the
BigQuery table. For more information, see
Use table schema .
Optional. To write message metadata to the BigQuery table,
select Write metadata . For more information, see
Write metadata .
Optional. To drop fields that are not present in the
BigQuery table schema, select Drop unknown fields . For
more information, see Drop unknown fields .
Configure the
common subscription properties
as needed. We strongly recommend that you enable Dead lettering to
handle message failures. For more information, see
Dead letter topic .
Click Create .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
To create a Pub/Sub subscription, use the gcloud pubsub subscriptions create command:
gcloud pubsub subscriptions create SUBSCRIPTION_ID \
--topic = TOPIC_ID \
--bigquery-table = PROJECT_ID . DATASET_ID . TABLE_ID
If you want to use a custom service account, provide it as an additional argument:
gcloud pubsub subscriptions create SUBSCRIPTION_ID \
--topic = TOPIC_ID \
--bigquery-table = PROJECT_ID . DATASET_ID . TABLE_ID \
--bigquery-service-account-email = SERVICE_ACCOUNT_NAME
Replace the following:
SUBSCRIPTION_ID : Specifies the ID of the subscription.
TOPIC_ID : Specifies the ID of the topic. The topic requires a schema.
PROJECT_ID : Specifies the ID of the project.
DATASET_ID : Specifies the ID of an existing dataset. To create a dataset, see Create datasets .
TABLE_ID : Specifies the ID of an existing table. The table requires a data field if your topic doesn't have a schema. To create a table, see Create an empty table with a schema definition .
SERVICE_ACCOUNT_NAME : Specifies the name of the service account to use to write to BigQuery.
C++
Before trying this sample, follow the C++ setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub C++ API reference documentation .
namespace pubsub = :: google :: cloud :: pubsub ;
namespace pubsub_admin = :: google :: cloud :: pubsub_admin ;
[]( pubsub_admin :: SubscriptionAdminClient client ,
std :: string const & project_id , std :: string const & topic_id ,
std :: string const & subscription_id , std :: string const & table_id ) {
google :: pubsub :: v1 :: Subscription request ;
request . set_name (
pubsub :: Subscription ( project_id , subscription_id ). FullName ());
request . set_topic ( pubsub :: Topic ( project_id , topic_id ). FullName ());
request . mutable_bigquery_config () - > set_table ( table_id );
auto sub = client . CreateSubscription ( request );
if ( ! sub ) {
if ( sub . status (). code () == google :: cloud :: StatusCode :: kAlreadyExists ) {
std :: cout << "The subscription already exists \n " ;
return ;
}
throw std :: move ( sub ). status ();
}
std :: cout << "The subscription was successfully created: "
<< sub - > DebugString () << " \n " ;
}
C#
Before trying this sample, follow the C# setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub C# API reference documentation .
using Google.Cloud.PubSub.V1 ;
public class CreateBigQuerySubscriptionSample
{
public Subscription CreateBigQuerySubscription ( string projectId , string topicId , string subscriptionId , string bigqueryTableId )
{
SubscriberServiceApiClient subscriber = SubscriberServiceApiClient . Create ();
TopicName topicName = TopicName . FromProjectTopic ( projectId , topicId );
SubscriptionName subscriptionName = SubscriptionName . FromProjectSubscription ( projectId , subscriptionId );
var subscriptionRequest = new Subscription
{
SubscriptionName = subscriptionName ,
TopicAsTopicName = topicName ,
BigqueryConfig = new BigQueryConfig
{
Table = bigqueryTableId
}
};
var subscription = subscriber . CreateSubscription ( subscriptionRequest );
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
// createBigQuerySubscription creates a Pub/Sub subscription that exports messages to BigQuery.
func createBigQuerySubscription ( w io . Writer , projectID , topic , subscription , table string ) error {
// projectID := "my-project"
// topic := "projects/my-project-id/topics/my-topic"
// subscription := "projects/my-project/subscriptions/my-sub"
// table := "my-project-id.dataset_id.table_id"
ctx := context . Background ()
client , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "pubsub.NewClient: %w" , err )
}
defer client . Close ()
sub , err := client . SubscriptionAdminClient . CreateSubscription ( ctx , & pubsubpb . Subscription {
Name : subscription ,
Topic : topic ,
BigqueryConfig : & pubsubpb . BigQueryConfig {
Table : table ,
WriteMetadata : true ,
},
})
if err != nil {
return fmt . Errorf ( "failed to create subscription: %w" , err )
}
fmt . Fprintf ( w , "Created BigQuery subscription: %v\n" , sub )
return nil
}
Java
Before trying this sample, follow the Java setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Java API reference documentation .
import com.google.cloud.pubsub.v1. SubscriptionAdminClient ;
import com.google.pubsub.v1. BigQueryConfig ;
import com.google.pubsub.v1. ProjectSubscriptionName ;
import com.google.pubsub.v1. ProjectTopicName ;
import com.google.pubsub.v1. Subscription ;
import java.io.IOException ;
public class CreateBigQuerySubscriptionExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String topicId = "your-topic-id" ;
String subscriptionId = "your-subscription-id" ;
String bigqueryTableId = "your-project.your-dataset.your-table" ;
createBigQuerySubscription ( projectId , topicId , subscriptionId , bigqueryTableId );
}
public static void createBigQuerySubscription (
String projectId , String topicId , String subscriptionId , String bigqueryTableId )
throws IOException {
try ( SubscriptionAdminClient subscriptionAdminClient = SubscriptionAdminClient . create ()) {
ProjectTopicName topicName = ProjectTopicName . of ( projectId , topicId );
ProjectSubscriptionName subscriptionName =
ProjectSubscriptionName . of ( projectId , subscriptionId );
BigQueryConfig bigqueryConfig =
BigQueryConfig . newBuilder (). setTable ( bigqueryTableId ). setWriteMetadata ( true ). build ();
Subscription subscription =
subscriptionAdminClient . createSubscription (
Subscription . newBuilder ()
. setName ( subscriptionName . toString ())
. setTopic ( topicName . toString ())
. setBigqueryConfig ( bigqueryConfig )
. build ());
System . out . println ( "Created a BigQuery subscription: " + subscription . getAllFields ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Node.js API reference documentation .
/**
* TODO ( developer ): Uncomment these variables before running the sample .
*/
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID' ;
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID' ;
// const bigqueryTableId = 'YOUR_TABLE_ID' ;
// Imports the Google Cloud client library
const { PubSub } = require ( '@google-cloud/pubsub' );
// Creates a client ; cache this for further use
const pubSubClient = new PubSub ();
async function createBigQuerySubscription (
topicNameOrId ,
subscriptionNameOrId ,
bigqueryTableId ,
) {
const options = {
bigqueryConfig : {
table : bigqueryTableId ,
writeMetadata : true ,
},
};
await pubSubClient
. topic ( topicNameOrId )
. createSubscription ( subscriptionNameOrId , options );
console . log ( ` Subscription $ { subscriptionNameOrId } created . ` );
}
Node.ts
Before trying this sample, follow the Node.js setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Node.js API reference documentation .
/**
* TODO ( developer ): Uncomment these variables before running the sample .
*/
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID' ;
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID' ;
// const bigqueryTableId = 'YOUR_TABLE_ID' ;
// Imports the Google Cloud client library
import { PubSub , CreateSubscriptionOptions } from '@google-cloud/pubsub' ;
// Creates a client ; cache this for further use
const pubSubClient = new PubSub ();
async function createBigQuerySubscription (
topicNameOrId : string ,
subscriptionNameOrId : string ,
bigqueryTableId : string ,
) {
const options : CreateSubscriptionOptions = {
bigqueryConfig : {
table : bigqueryTableId ,
writeMetadata : true ,
},
};
await pubSubClient
. topic ( topicNameOrId )
. createSubscription ( subscriptionNameOrId , options );
console . log ( ` Subscription $ { subscriptionNameOrId } created . ` );
}
PHP
Before trying this sample, follow the PHP setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub PHP API reference documentation .
use Google\Cloud\PubSub\PubSubClient;
use Google\Cloud\PubSub\V1\BigQueryConfig;
/**
* Creates a Pub/Sub BigQuery subscription.
*
* @param string $projectId The Google project ID.
* @param string $topicName The Pub/Sub topic name.
* @param string $subscriptionName The Pub/Sub subscription name.
* @param string $table The BigQuery table to which to write.
*/
function create_bigquery_subscription($projectId, $topicName, $subscriptionName, $table)
{
$pubsub = new PubSubClient([
'projectId' => $projectId,
]);
$topic = $pubsub->topic($topicName);
$subscription = $topic->subscription($subscriptionName);
$config = new BigQueryConfig(['table' => $table]);
$subscription->create([
'bigqueryConfig' => $config
]);
printf('Subscription created: %s' . PHP_EOL, $subscription->name());
}
Python
Before trying this sample, follow the Python setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Python API reference documentation .
from google.cloud import pubsub_v1
# TODO(developer)
# project_id = "your-project-id"
# topic_id = "your-topic-id"
# subscription_id = "your-subscription-id"
# bigquery_table_id = "your-project.your-dataset.your-table"
publisher = pubsub_v1 . PublisherClient ()
subscriber = pubsub_v1 . SubscriberClient ()
topic_path = publisher . topic_path ( project_id , topic_id )
subscription_path = subscriber . subscription_path ( project_id , subscription_id )
bigquery_config = pubsub_v1 . types . BigQueryConfig (
table = bigquery_table_id , write_metadata = True
)
# Wrap the subscriber in a 'with' block to automatically call close() to
# close the underlying gRPC channel when done.
with subscriber :
subscription = subscriber . create_subscription (
request = {
"name" : subscription_path ,
"topic" : topic_path ,
"bigquery_config" : bigquery_config ,
}
)
print ( f "BigQuery subscription created: { subscription } ." )
print ( f "Table for subscription is: { bigquery_table_id } " )
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
# bigquery_table_id = "my-project:dataset-id.table-id"
pubsub = Google :: Cloud :: PubSub . new project_id : project_id
subscription_admin = pubsub . subscription_admin
subscription = subscription_admin . create_subscription \
name : pubsub . subscription_path ( subscription_id ),
topic : pubsub . topic_path ( topic_id ),
bigquery_config : {
table : bigquery_table_id ,
write_metadata : true
}
puts "BigQuery subscription created: #{ subscription_id } ."
puts "Table for subscription is: #{ bigquery_table_id } "
Monitor a BigQuery subscription
Cloud Monitoring provides a number of metrics to
monitor subscriptions .
For a list of all the available metrics related to Pub/Sub
and their descriptions, see the
Monitoring documentation for Pub/Sub .
You can also monitor subscriptions from within Pub/Sub .
What's next
Create or modify a subscription with gcloud commands .
Create or modify a subscription with REST APIs .
Troubleshoot a BigQuery subscription .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
