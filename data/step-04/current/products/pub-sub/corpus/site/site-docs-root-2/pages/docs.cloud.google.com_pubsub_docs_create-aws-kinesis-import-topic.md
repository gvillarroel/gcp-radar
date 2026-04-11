---
title: "Create an Amazon Kinesis Data Streams import topic \_|\_ Pub/Sub \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/create-aws-kinesis-import-topic
  title: "Create an Amazon Kinesis Data Streams import topic \_|\_ Pub/Sub \_|\_ Google\
    \ Cloud Documentation"
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
Create an Amazon Kinesis Data Streams import topic
Stay organized with collections
Save and categorize content based on your preferences.
An Amazon Kinesis Data Streams import topic lets you continuously ingest data from
Amazon Kinesis Data Streams
as an external source and into Pub/Sub.
Then you can stream the data into any of the destinations that
Pub/Sub supports.
For more information about import topics, see About import topics .
Before you begin
Know more about the Pub/Sub publish
process .
Configure the required roles and permissions to manage Amazon Kinesis Data Streams
import topics including the following:
Add the Pub/Sub publisher role to the
Pub/Sub service account
Add the Pub/Sub service agent role to the Pub/Sub service account , if not already granted.
Add the service account user role to the service account
Set up workload identity federation so that
Google Cloud can access the external streaming service.
Required roles and permissions
To get the permissions that
you need to create and manage Amazon Kinesis Data Streams import topics,
ask your administrator to grant you the
Pub/Sub Editor ( roles/pubsub.editor )
IAM role on your topic or project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create and manage Amazon Kinesis Data Streams import topics. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create and manage Amazon Kinesis Data Streams import topics:
Create an import topic:
pubsub.topics.create
Delete an import topic:
pubsub.topics.delete
Get an import topic:
pubsub.topics.get
List an import topic:
pubsub.topics.list
Publish to an import topic:
pubsub.topics.publish and pubsub.serviceAgent
Update an import topic:
pubsub.topics.update
Get the IAM policy for an import topic:
pubsub.topics.getIamPolicy
Configure the IAM policy for an import topic:
pubsub.topics.setIamPolicy
You might also be able to get
these permissions
with custom roles or
other predefined roles .
You can configure access control at the project level and the
individual resource level.
Set up federated identity to access Amazon Kinesis Data Streams
Workload Identity Federation lets Google Cloud services access workloads
running outside of Google Cloud. With identity federation, you don't need
to maintain or pass credentials to Google Cloud to access your resources
in other clouds. Instead, you can use the identities of the workloads themselves
to authenticate to Google Cloud and access resources.
Create a service account in Google Cloud
This is an optional step. If you already have a service account, you can use
it in this procedure instead of creating a new service account.
If you are using an existing service account, go to
Record the service account unique ID for the
next step.
For Amazon Kinesis Data Streams import topics, Pub/Sub uses the
service account as the identity to access resources from AWS.
For more information about creating a service account, including prerequisites,
required roles and permissions, and naming guidelines, see
Create service accounts . After you create
a service account, you might need to wait for 60 seconds or more before you
use the service account. This behavior occurs because read operations are
eventually consistent; it can take time for the new service account to
become visible.
Record the service account unique ID
You need a service account unique ID to set up set up a role in AWS.
In the Google Cloud console, go to the Service account details page.
Go to service account
Click the service account that you just created or the one that you are
planning to use.
From the Service account details page, record the Unique ID number.
You need the ID as part of the workflow to set up set up a role in AWS .
Add the service account token creator role to the Pub/Sub service account
Note: Pub/Sub creates and maintains a service account for each
project. The service account has the following format:
service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com . Perform this procedure only if the
Pub/Sub service account does not have the Pub/Sub
Service Agent role ( roles/pubsub.serviceAgent ).
The Service account token creator role ( roles/iam.serviceAccountTokenCreator )
lets principals create short-lived credentials
for a service account. These tokens or credentials are used to impersonate
the service account.
For more information about service account impersonation, see
Service account impersonation .
You can also add the Pub/Sub publisher role ( roles/pubsub.publisher )
during this procedure. For more information about the role and why you are adding it,
see Add the Pub/Sub publisher role to the Pub/Sub service account .
In the Google Cloud console, go to the IAM page.
Go to IAM
Click the Include Google-provided role grants checkbox.
Look for the service account that has the format service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com .
For this service account, click the Edit Principal button.
If required, click Add another role .
Search and click the Service account token creator role ( roles/iam.serviceAccountTokenCreator ).
Click Save .
Create a policy in AWS
You need a policy in AWS to let Pub/Sub authenticate to AWS so
that Pub/Sub can ingest data from Amazon Kinesis Data Streams.
For more methods and information about how to create a policy in AWS, see
Creating IAM policies .
To create a policy in AWS, perform the following steps:
Sign in to the AWS Management Console and open the
IAM console .
In the navigation pane of the console for IAM ,
click Access Management > Policies .
Click Create policy .
For Select a service , click Kinesis .
For Action allowed , click the following:
List > ListShards .
This action grants permission to list the shards in a stream and
provides information about each shard.
Read > SubscribeToShard .
This action grants permission to listen to a specific shard with
enhanced fan-out.
Read > DescribeStreamConsumer .
This action grants permission to get the description of a
registered stream consumer.
These permissions cover reading from the stream. Pub/Sub
only supports reading from a Kinesis stream with
Enhanced Fan-Out by using the streaming SubscribeToShard API .
For Resources , if you'd like to restrict the policy to specific stream
or consumer (recommended), specify the consumer ARN and the stream ARN .
Click Add more permissions .
For Select a service , click STS .
For Action allowed , click Write > AssumeRoleWithWebIdentity .
This action grants permission to obtain a set of temporary security
credentials for Pub/Sub to authenticate to Amazon Kinesis Data Streams
by using identity federation.
Click Next .
Enter a policy name and description.
Click Create policy .
Create a role in AWS using a custom trust policy
You must create a role in AWS so that Pub/Sub can authenticate
to AWS to ingest data from Amazon Kinesis Data Streams.
Sign in to the AWS Management Console and open the IAM console .
In the navigation pane of the console for IAM , click Roles .
Click Create role .
For Select trusted entity , click Custom trust policy .
In the Custom trust policy section, enter or paste the following:
{
"Version" : "2012-10-17" ,
"Statement" : [
{
"Effect" : "Allow" ,
"Principal" : {
"Federated" : "accounts.google.com"
},
"Action" : "sts:AssumeRoleWithWebIdentity" ,
"Condition" : {
"StringEquals" : {
"accounts.google.com:sub" : "<SERVICE_ACCOUNT_UNIQUE_ID>"
}
}
}
]
}
Replace <SERVICE_ACCOUNT_UNIQUE_ID> with the unique ID of
the service account that you recorded in
Record the service account unique ID .
Click Next .
For Add permissions , search and click the custom policy that
you just created.
Click Next .
Enter a role name and description.
Click Create role .
Add the Pub/Sub publisher role to the Pub/Sub principal
To enable publishing, you must assign a publisher role to the
Pub/Sub service account so that Pub/Sub is able to
publish to the Amazon Kinesis Data Streams import topic.
Add the Pub/Sub service agent role to the Pub/Sub service account
Note: The Pub/Sub service agent role is granted by default for all projects after April 9, 2021. If your project has been created after this date and the Pub/Sub service agent role has not been removed, your Pub/Sub service account will already have this role.
To allow Pub/Sub to use your import topic project's publish quota, the Pub/Sub service agent requires the serviceusage.services.use permission on your import topic's project.
To provide this permission, we recommend you add the Pub/Sub service agent role to the Pub/Sub service account.
If the Pub/Sub service account does not have the Pub/Sub service agent role, it can be granted as follows:
In the Google Cloud console, go to the IAM page.
Go to IAM
Click the Include Google-provided role grants checkbox.
Look for the service account that has the format
service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com .
For this service account, click the Edit principal button.
If required, click Add another role .
Search and click the Pub/Sub Service Agent role ( roles/pubsub.serviceAgent ).
Click Save .
Enable publishing from all topics
Use this method if you have not created any Amazon Kinesis Data Streams import
topics.
In the Google Cloud console, go to the IAM page.
Go to IAM
Click the Include Google-provided role grants checkbox.
Look for the service account that has the format
service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com .
For this service account, click the Edit principal button.
If required, click Add another role .
Search and click the Pub/Sub publisher role ( roles/pubsub.publisher ).
Click Save .
Enable publishing from a single topic
Use this method only if the Amazon Kinesis Data Streams import topic already exists.
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Run the gcloud pubsub topics add-iam-policy-binding command:
gcloud pubsub topics add-iam-policy-binding TOPIC_ID \
--member = "serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com" \
--role = "roles/pubsub.publisher"
Replace the following:
TOPIC_ID : the topic ID of the Amazon Kinesis Data Streams import topic.
PROJECT_NUMBER : the project number. To view the project
number, see Identifying projects .
Add the service account user role to the service account
The Service Account User role ( roles/iam.serviceAccountUser ) includes the
permission iam.serviceAccounts.actAs that lets a principal attach a service
account to the Amazon Kinesis Data Streams import topic's ingestion settings and
use that service account for federated identity.
In the Google Cloud console, go to the IAM page.
Go to IAM
For the principal that's issuing the create or update topic calls, click the
Edit principal button.
If required, click Add another role .
Search and click the Service account user role
( roles/iam.serviceAccountUser ).
Click Save .
Use Amazon Kinesis Data Streams topics
You can create a new import topic or edit an existing topic.
Considerations
Caution: If you already have data in Amazon Kinesis Data Streams, first create a
standard topic and a default subscription without enabling the ingestion
settings. Then, convert the topic to an import topic . This method
ensures that all messages are received by the subscription.
Creating the topic and subscription separately, even if done in rapid
succession, can lead to data loss. There's a short window where the topic exists
without a subscription. If any data is sent to the topic during this time, it is
lost. By creating the topic first, creating the subscription, and then
converting the topic to an import topic, you guarantee that no messages are
missed during the import process.
Create an Amazon Kinesis Data Streams import topic
To know more about properties associated with a topic, see Properties of a
topic .
Ensure that you have completed the following procedures:
Set up federated identity to access Kinesis Data Streams
Add the Pub/Sub publisher role to the Pub/Sub
service account
Add the service account user role to the service account
To create an Amazon Kinesis Data Streams import topic, follow these steps:
Console
In the Google Cloud console, go to the Topics page.
Go to Topics
Click Create topic .
In the Topic ID field, enter an ID for your Amazon Kinesis Data Streams import topic.
For more information about naming topics, see the naming guidelines .
Select Add a default subscription .
Select Enable ingestion .
For ingestion source, select Amazon Kinesis Data Streams .
Enter the following details:
Kinesis Stream ARN : The ARN for the Kinesis Data Stream that
you are planning to ingest into Pub/Sub. The ARN format
is as follows:
arn:${Partition}:kinesis:${Region}:${Account}:stream/${StreamName} .
Kinesis Consumer ARN : The ARN of the consumer resource that is
registered to the AWS Kinesis Data Stream. The ARN format is as
follows:
arn:${Partition}:kinesis:${Region}:${Account}:${StreamType}/${StreamName}/consumer/${ConsumerName}:${ConsumerCreationTimestamp} .
AWS Role ARN : The ARN of the AWS role. The ARN format of the
role is as follows:
arn:aws:iam::${Account}:role/${RoleName}
Service account : The service account that you created in Create a service account in Google Cloud .
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
Run the gcloud pubsub topics create command:
gcloud pubsub topics create TOPIC_ID \
--kinesis-ingestion-stream-arn KINESIS_STREAM_ARN \
--kinesis-ingestion-consumer-arn KINESIS_CONSUMER_ARN \
--kinesis-ingestion-role-arn KINESIS_ROLE_ARN \
--kinesis-ingestion-service-account PUBSUB_SERVICE_ACCOUNT
Replace the following:
TOPIC_ID : The topic ID.
KINESIS_STREAM_ARN : The ARN for the Kinesis Data Streams
that you are planning to ingest into Pub/Sub. The ARN
format is as follows:
arn:${Partition}:kinesis:${Region}:${Account}:stream/${StreamName} .
KINESIS_CONSUMER_ARN : The ARN of the consumer resource
that is registered to the AWS Kinesis Data Streams. The ARN format is
as follows:
arn:${Partition}:kinesis:${Region}:${Account}:${StreamType}/${StreamName}/consumer/${ConsumerName}:${ConsumerCreationTimestamp} .
KINESIS_ROLE_ARN : The ARN of the AWS role. The ARN
format of the role is as follows:
arn:aws:iam::${Account}:role/${RoleName} .
PUBSUB_SERVICE_ACCOUNT : The service account that you
created in Create a service account in Google Cloud .
C++
Before trying this sample, follow the C++ setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub C++ API reference documentation .
namespace pubsub = :: google :: cloud :: pubsub ;
namespace pubsub_admin = :: google :: cloud :: pubsub_admin ;
[]( pubsub_admin :: TopicAdminClient client , std :: string project_id ,
std :: string topic_id , std :: string stream_arn , std :: string consumer_arn ,
std :: string aws_role_arn , std :: string gcp_service_account ) {
google :: pubsub :: v1 :: Topic request ;
request . set_name (
pubsub :: Topic ( std :: move ( project_id ), std :: move ( topic_id )). FullName ());
auto * aws_kinesis =
request . mutable_ingestion_data_source_settings () - > mutable_aws_kinesis ();
aws_kinesis - > set_stream_arn ( stream_arn );
aws_kinesis - > set_consumer_arn ( consumer_arn );
aws_kinesis - > set_aws_role_arn ( aws_role_arn );
aws_kinesis - > set_gcp_service_account ( gcp_service_account );
auto topic = client . CreateTopic ( request );
// Note that kAlreadyExists is a possible error when the library retries.
if ( topic . status (). code () == google :: cloud :: StatusCode :: kAlreadyExists ) {
std :: cout << "The topic already exists \n " ;
return ;
}
if ( ! topic ) throw std :: move ( topic ). status ();
std :: cout << "The topic was successfully created: " << topic - > DebugString ()
<< " \n " ;
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
pubsub "cloud.google.com/go/pubsub/v2"
"cloud.google.com/go/pubsub/v2/apiv1/pubsubpb"
)
func createTopicWithKinesisIngestion ( w io . Writer , projectID , topic string ) error {
// projectID := "my-project-id"
// topicID := "projects/my-project-id/topics/my-topic"
streamARN := "stream-arn"
consumerARN := "consumer-arn"
awsRoleARN := "aws-role-arn"
gcpServiceAccount := "gcp-service-account"
ctx := context . Background ()
client , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "pubsub.NewClient: %w" , err )
}
defer client . Close ()
topicpb := & pubsubpb . Topic {
Name : topic ,
IngestionDataSourceSettings : & pubsubpb . IngestionDataSourceSettings {
Source : & pubsubpb . IngestionDataSourceSettings_AwsKinesis_ {
AwsKinesis : & pubsubpb . IngestionDataSourceSettings_AwsKinesis {
StreamArn : streamARN ,
ConsumerArn : consumerARN ,
AwsRoleArn : awsRoleARN ,
GcpServiceAccount : gcpServiceAccount ,
},
},
},
}
topicpb , err = client . TopicAdminClient . CreateTopic ( ctx , topicpb )
if err != nil {
return fmt . Errorf ( "failed to create topic with kinesis: %w" , err )
}
fmt . Fprintf ( w , "Kinesis topic created: %v\n" , topicpb )
return nil
}
Java
Before trying this sample, follow the Java setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Java API reference documentation .
import com.google.cloud.pubsub.v1. TopicAdminClient ;
import com.google.pubsub.v1. IngestionDataSourceSettings ;
import com.google.pubsub.v1. Topic ;
import com.google.pubsub.v1. TopicName ;
import java.io.IOException ;
public class CreateTopicWithKinesisIngestionExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String topicId = "your-topic-id" ;
// Kinesis ingestion settings.
String streamArn = "stream-arn" ;
String consumerArn = "consumer-arn" ;
String awsRoleArn = "aws-role-arn" ;
String gcpServiceAccount = "gcp-service-account" ;
createTopicWithKinesisIngestionExample (
projectId , topicId , streamArn , consumerArn , awsRoleArn , gcpServiceAccount );
}
public static void createTopicWithKinesisIngestionExample (
String projectId ,
String topicId ,
String streamArn ,
String consumerArn ,
String awsRoleArn ,
String gcpServiceAccount )
throws IOException {
try ( TopicAdminClient topicAdminClient = TopicAdminClient . create ()) {
TopicName topicName = TopicName . of ( projectId , topicId );
IngestionDataSourceSettings . AwsKinesis awsKinesis =
IngestionDataSourceSettings . AwsKinesis . newBuilder ()
. setStreamArn ( streamArn )
. setConsumerArn ( consumerArn )
. setAwsRoleArn ( awsRoleArn )
. setGcpServiceAccount ( gcpServiceAccount )
. build ();
IngestionDataSourceSettings ingestionDataSourceSettings =
IngestionDataSourceSettings . newBuilder (). setAwsKinesis ( awsKinesis ). build ();
Topic topic =
topicAdminClient . createTopic (
Topic . newBuilder ()
. setName ( topicName . toString ())
. setIngestionDataSourceSettings ( ingestionDataSourceSettings )
. build ());
System . out . println ( "Created topic with Kinesis ingestion settings: " + topic . getAllFields ());
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
// const roleArn = 'arn:aws:iam:...' ;
// const gcpServiceAccount = 'ingestion-account@...' ;
// const streamArn = 'arn:aws:kinesis:...' ;
// const consumerArn = 'arn:aws:kinesis:...' ;
// Imports the Google Cloud client library
const { PubSub } = require ( '@google-cloud/pubsub' );
// Creates a client ; cache this for further use
const pubSubClient = new PubSub ();
async function createTopicWithKinesisIngestion (
topicNameOrId ,
awsRoleArn ,
gcpServiceAccount ,
streamArn ,
consumerArn ,
) {
// Creates a new topic with Kinesis ingestion .
await pubSubClient . createTopic ({
name : topicNameOrId ,
ingestionDataSourceSettings : {
awsKinesis : {
awsRoleArn ,
gcpServiceAccount ,
streamArn ,
consumerArn ,
},
},
});
console . log ( ` Topic $ { topicNameOrId } created with AWS Kinesis ingestion . ` );
}
Node.ts
Before trying this sample, follow the Node.js setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Node.js API reference documentation .
/**
* TODO ( developer ): Uncomment these variables before running the sample .
*/
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID' ;
// const roleArn = 'arn:aws:iam:...' ;
// const gcpServiceAccount = 'ingestion-account@...' ;
// const streamArn = 'arn:aws:kinesis:...' ;
// const consumerArn = 'arn:aws:kinesis:...' ;
// Imports the Google Cloud client library
import { PubSub } from '@google-cloud/pubsub' ;
// Creates a client ; cache this for further use
const pubSubClient = new PubSub ();
async function createTopicWithKinesisIngestion (
topicNameOrId : string ,
awsRoleArn : string ,
gcpServiceAccount : string ,
streamArn : string ,
consumerArn : string ,
) {
// Creates a new topic with Kinesis ingestion .
await pubSubClient . createTopic ({
name : topicNameOrId ,
ingestionDataSourceSettings : {
awsKinesis : {
awsRoleArn ,
gcpServiceAccount ,
streamArn ,
consumerArn ,
},
},
});
console . log ( ` Topic $ { topicNameOrId } created with AWS Kinesis ingestion . ` );
}
Python
Before trying this sample, follow the Python setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Python API reference documentation .
from google.cloud import pubsub_v1
from google.pubsub_v1.types import Topic
from google.pubsub_v1.types import IngestionDataSourceSettings
# TODO(developer)
# project_id = "your-project-id"
# topic_id = "your-topic-id"
# stream_arn = "your-stream-arn"
# consumer_arn = "your-consumer-arn"
# aws_role_arn = "your-aws-role-arn"
# gcp_service_account = "your-gcp-service-account"
publisher = pubsub_v1 . PublisherClient ()
topic_path = publisher . topic_path ( project_id , topic_id )
request = Topic (
name = topic_path ,
ingestion_data_source_settings = IngestionDataSourceSettings (
aws_kinesis = IngestionDataSourceSettings . AwsKinesis (
stream_arn = stream_arn ,
consumer_arn = consumer_arn ,
aws_role_arn = aws_role_arn ,
gcp_service_account = gcp_service_account ,
)
),
)
topic = publisher . create_topic ( request = request )
print ( f "Created topic: { topic . name } with AWS Kinesis Ingestion Settings" )
For more information about ARNs, see Amazon Resource Names (ARNs) and IAM Identifiers .
If you run into issues,
see Troubleshooting an Amazon Kinesis Data Streams import topic .
Edit an Amazon Kinesis Data Streams import topic
You can edit the ingestion data source settings of an Amazon Kinesis Data Streams import topic.
Perform the following steps:
Console
In the Google Cloud console, go to the Topics page.
Go to Topics
Click the Amazon Kinesis Data Streams import topic.
In the topic details page, click Edit .
Update the fields that you want to change.
Click Update .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
To avoid losing your settings for the import topic, make sure to
include all of them every time you update the topic. If you leave something
out, Pub/Sub resets the setting to its original default value.
Run the gcloud pubsub
topics update command with all the flags mentioned in the following
sample:
gcloud pubsub topics update TOPIC_ID
--kinesis-ingestion-stream-arn KINESIS_STREAM_ARN
--kinesis-ingestion-consumer-arn KINESIS_CONSUMER_ARN
--kinesis-ingestion-role-arn KINESIS_ROLE_ARN
--kinesis-ingestion-service-account PUBSUB_SERVICE_ACCOUNT
Replace the following:
TOPIC_ID is the topic ID. This field cannot be updated.
KINESIS_STREAM_ARN is the ARN for the Kinesis Data Streams
that you are planning to ingest into Pub/Sub. The ARN
format is as follows:
arn:${Partition}:kinesis:${Region}:${Account}:stream/${StreamName} .
KINESIS_CONSUMER_ARN is the ARN of the consumer resource
that is registered to the AWS Kinesis Data Streams. The ARN format is as
follows:
arn:${Partition}:kinesis:${Region}:${Account}:${StreamType}/${StreamName}/consumer/${ConsumerName}:${ConsumerCreationTimestamp} .
KINESIS_ROLE_ARN is the ARN of the AWS role. The ARN format
of the role is as follows:
arn:aws:iam::${Account}:role/${RoleName} .
PUBSUB_SERVICE_ACCOUNT is the service account that you
created in Create a service account in Google Cloud .
Quotas and limits for Amazon Kinesis Data Streams import topics
The publisher throughput for import topics is bound by the publish quota
of the topic. For more information, see
Pub/Sub quotas and limits .
What's next
Monitor an import topic .
Choose the type of subscription for your topic.
Learn how to publish a message to a topic .
Create or modify a topic with gcloud CLI ,
REST APIs , or Client libraries .
Troubleshoot an Amazon Kinesis Data Streams import topic .
Steps to configure storage transfer job to transfer data from AWS S3 to Cloud Storage .
Apache Kafka® is a registered
trademark of The Apache Software Foundation or its affiliates in the United
States and/or other countries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
