---
title: "Transmitting HL7v2 messages over TCP/IP connections \_|\_ Cloud Healthcare\
  \ API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/how-tos/mllp-adapter
  title: "Transmitting HL7v2 messages over TCP/IP connections \_|\_ Cloud Healthcare\
    \ API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Guides
Send feedback
Transmitting HL7v2 messages over TCP/IP connections
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial provides instructions for transmitting HL7v2 messages over TCP/IP
connections using the minimal lower layer protocol (MLLP). To require the MLLP
image to be signed by an attestor, follow the steps in
Transmitting HL7v2 messages over TCP/IP connections using a signed MLLP image .
This tutorial provides instructions for running the open source MLLP adapter
hosted in GitHub in the following environments:
Locally/on-premises .
In a container on GKE
with Cloud VPN .
In a container on GKE without Cloud VPN .
Objectives
After completing this tutorial, you'll know how to:
Locally build and configure the MLLP adapter with the Cloud Healthcare API and test
sending HL7v2 messages into an HL7v2 store .
Deploy the MLLP adapter to GKE and send HL7v2 messages from a Compute Engine VM instance .
Configure a VPN
that secures the connection between an "on-premises" instance and the MLLP
adapter and
send HL7v2 messages from the "on-premises" instance .
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Healthcare API
Google Kubernetes Engine
Compute Engine
Cloud VPN
Pub/Sub
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Before beginning this tutorial, familiarize yourself with the
conceptual documentation on minimal lower layer protocol (MLLP) by reviewing
MLLP and the Google Cloud MLLP adapter .
The conceptual documentation provides an overview of MLLP, how care systems
can send and receive messages to and from the Cloud Healthcare API over an
MLLP connection, and the basics of MLLP security.
Before you can set up the MLLP adapter, you must choose or create a
Google Cloud project and enable the required APIs by completing the following
steps:
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Healthcare API, Google Kubernetes Engine, Container Registry, and Pub/Sub APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Healthcare API, Google Kubernetes Engine, Container Registry, and Pub/Sub APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Wait for the Kubernetes Engine API and related services to be enabled.
This can take several minutes.
Choosing a shell
To complete this tutorial, you can use Cloud Shell or your
local shell.
Cloud Shell is a shell environment for managing resources hosted
on Google Cloud. Cloud Shell comes
preinstalled with the gcloud CLI and
the kubectl
tool. The gcloud CLI provides the primary command-line interface
for Google Cloud. kubectl provides the command-line interface for
running commands against GKE clusters.
If you prefer using your local shell, you must install the
gcloud CLI.
To open Cloud Shell or configure your local shell, complete the
following steps:
Cloud Shell
To launch Cloud Shell, complete the following steps:
Go to Google Cloud console.
Google Cloud console
From the top-right corner of the console, click the Activate Google
Cloud Shell button:
A Cloud Shell session opens inside a frame at the bottom of the console. You
use this shell to run gcloud and kubectl commands.
Local Shell
To install the gcloud CLI and the kubectl tool, complete the
following steps:
Install and initialize the Google Cloud CLI .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
If you're only
testing the adapter locally ,
you don't need to complete any more steps and can continue to
Creating a dataset . If you're deploying the
adapter to GKE, install the kubectl command-line tool
by running the following command:
gcloud components install kubectl
Creating a dataset
If you haven't already created a Cloud Healthcare API dataset, create a
dataset by completing the following steps:
Console
In the Google Cloud console, go to the Datasets page.
Go to Datasets
Click Create dataset .
In the Name field, enter an identifier for the dataset. The dataset ID must have the following:
A unique ID in its location
A Unicode string from 1-256 characters consisting of the following:
Numbers
Letters
Underscores
Dashes
Periods
In the Location type section, choose one of the following types of locations:
Region : the dataset permanently resides within one Google Cloud region. After
selecting, type or select the location in the Region field.
Multi-region : the dataset permanently resides within one location that spans
multiple Google Cloud regions. After selecting, type or select the multi-region location in
the Multi-region field .
Click Create .
The new dataset appears in the list of datasets.
gcloud
To create a dataset, run the
gcloud healthcare datasets create
command:
gcloud healthcare datasets create DATASET_ID \
--location = LOCATION
If the request is successful, the command returns the following output:
Create request issued for : [ DATASET_ID ]
Waiting for operation [ OPERATION_ID ] to complete...done.
Created dataset [ DATASET_ID ] .
Creating a Pub/Sub topic and subscription
To receive notifications when messages are created or ingested, you need to configure a
Pub/Sub topic with your HL7v2 store. For more information, see
Configuring Pub/Sub notifications .
To create a topic, complete the following steps:
Console
Go to the Pub/Sub Topics page in the Google Cloud console.
Go to the Pub/Sub topics page
Click Create Topic .
Enter a topic name with the URI:
projects/ PROJECT_ID /topics/ TOPIC_NAME
where PROJECT_ID is your Google Cloud project ID.
Click Create .
gcloud
To create a topic, run the
gcloud pubsub topics create
command:
gcloud pubsub topics create projects/ PROJECT_ID /topics/ TOPIC_NAME
If the request is successful, the command returns the following output:
Created topic [ projects/ PROJECT_ID /topics/ TOPIC_NAME ] .
To create a subscription, complete the following steps:
Console
Go to the Pub/Sub Topics page in the Google Cloud console.
Go to the Pub/Sub topics page
Click your project's topic.
Click Create Subscription .
Enter a subscription name:
projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_NAME
Leave Delivery Type set to Pull and then click Create .
gcloud
To create a subscription, run the
gcloud pubsub subscriptions create
command:
gcloud pubsub subscriptions create SUBSCRIPTION_NAME \
--topic = projects/ PROJECT_ID /topics/ TOPIC_NAME
Note: To configure the number of seconds that the system waits for
acknowledgement from the subscriber before re-attempting delivery, use the
optional --ack-deadline flag. Without this flag, the default deadline is
10 seconds.
If the request is successful, the command returns the following output:
Created subscription [ projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_NAME ] .
Creating an HL7v2 store configured with a Pub/Sub topic
Create an HL7v2 store and configure it with a Pub/Sub topic.
To create an HL7v2 store, you must already have
created a dataset .
For the purposes of this tutorial, use the same project for your HL7v2 store and
for the Pub/Sub topic.
To create an HL7v2 store configured with a Pub/Sub topic,
complete the following steps:
curl
curl -X POST \
--data "{
'notificationConfigs': [
{
'pubsubTopic': 'projects/ PROJECT_ID /topics/ PUBSUB_TOPIC ',
'filter': ''
}
]
}" \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores?hl7V2StoreId= HL7V2_STORE_ID "
Note: In this sample, filter is not defined so that the
Cloud Healthcare API sends a Pub/Sub notification for every
message that is created or ingested.
If the request is successful, the server returns the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID ",
"notificationConfigs": [
{
"pubsubTopic": "projects/ PROJECT_ID /topics/ PUBSUB_TOPIC "
}
]
}
PowerShell
$cred = gcloud auth application-default print-access-token
$headers = @ { Authorization = "Bearer $cred " }
Invoke-WebRequest `
-Method Post `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-Body "{
'notificationConfigs': [
{
'pubsubTopic': 'projects/ PROJECT_ID /topics/ PUBSUB_TOPIC ',
'filter': ''
}
]
}" `
-Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores?hl7V2StoreId= HL7V2_STORE_ID " | Select-Object -Expand Content
Note: In this sample, filter is not defined so that the
Cloud Healthcare API sends a Pub/Sub notification for every
message that is created or ingested.
If the request is successful, the server returns the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID ",
"notificationConfigs": [
{
"pubsubTopic": "projects/ PROJECT_ID /topics/ PUBSUB_TOPIC "
}
]
}
Configuring Pub/Sub permissions
To send notifications to Pub/Sub when an HL7v2 message is
created or ingested, you need to
configure Pub/Sub permissions
on the Cloud Healthcare API. This step needs to be done once per project.
To add the required pubsub.publisher role to your project's service account,
complete the following steps:
Console
On the
IAM page
in the Google Cloud console, verify that the role
Healthcare Service Agent appears in the Role column for the
relevant project service account. The account name is
service- PROJECT_NUMBER @gcp-sa-healthcare.iam.gserviceaccount.com.
For information about finding the PROJECT_NUMBER , see
Identifying projects .
In the Inheritance column that matches the role, click the
pencil icon. The Edit permissions pane opens.
Click Add another role and then search for the Pub/Sub Publisher
role.
Select the role and then click Save . The pubsub.publisher role is
added to the service account.
gcloud
To add the service account permissions, run the
gcloud projects add-iam-policy-binding
command. For information about finding the PROJECT_ID and
PROJECT_NUMBER , see
Identifying projects .
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-healthcare.iam.gserviceaccount.com \
--role = roles/pubsub.publisher
Pulling the pre-built Docker image
The MLLP adapter is a containerized application staged in a pre-built Docker
image in Container Registry .
To pull the latest version of the image, run the following command:
docker pull gcr.io/cloud-healthcare-containers/mllp-adapter:latest
Testing the MLLP adapter locally
When testing the adapter locally, you can configure it to run as a
receiver , a publisher , or both. The receiver and publisher configurations
have the following key differences:
When the adapter runs as a receiver, it receives HL7v2 messages from an
external source and calls
messages.ingest
to ingest the messages into an HL7v2 store, thereby creating a
Pub/Sub notification. The notification is sent to
applications that are subscribed to the HL7v2 store's Pub/Sub
topic.
When the adapter runs as a publisher, it listens for HL7v2 messages that were
created or ingested in an HL7v2 store using
messages.create
or messages.ingest .
After a message is created, a Pub/Sub notification is sent to
the adapter and the adapter publishes the messages to an external receiver.
The following sections show how to run the adapter so that it acts as either a
receiver or a
publisher .
After verifying that you can run the MLLP adapter on your local machine,
you can continue to the next section on
Deploying the MLLP adapter to Google Kubernetes Engine .
Testing the MLLP adapter locally as a receiver
When the adapter receives an HL7v2 message from an external source, such as a
care center, the adapter calls
messages.ingest
and ingests the HL7v2 message into the configured HL7v2 store. You can
observe this in the source code for the adapter.
To test the adapter locally as a receiver, complete the following steps:
On the machine where you pulled the pre-built Docker image, run the following
command:
docker run \
--network = host \
-v ~/.config:/root/.config \
gcr.io/cloud-healthcare-containers/mllp-adapter \
/usr/mllp_adapter/mllp_adapter \
--hl7_v2_project_id = PROJECT_ID \
--hl7_v2_location_id = LOCATION \
--hl7_v2_dataset_id = DATASET_ID \
--hl7_v2_store_id = HL7V2_STORE_ID \
--export_stats = false \
--receiver_ip = 0 .0.0.0 \
--port = 2575 \
--api_addr_prefix = https://healthcare.googleapis.com:443/v1 \
--logtostderr
where:
PROJECT_ID is the ID for the Google Cloud project
containing your HL7v2 store.
LOCATION is the region where your HL7v2 store is located.
DATASET_ID is the ID for the parent dataset of your HL7v2 store.
HL7V2_STORE_ID is the ID for the HL7v2 store to which you're
sending HL7v2 messages.
After running the previous command, the adapter prints a message similar to
the following and starts to run on your local machine at the 127.0.0.1 IP
address on port 2575:
I0000 00:00:00.000000 1 healthapiclient.go:171] Dialing connection to https://healthcare.googleapis.com:443/v1
I0000 00:00:00.000000 1 mllp_adapter.go:89] Either --pubsub_project_id or --pubsub_subscription is not provided, notifications of the new messages are not read and no outgoing messages will be sent to the target MLLP address.
If you encounter any errors, follow these troubleshooting steps:
If you're using Mac OS and the previous command fails with a
Connection refused error, see
Connection refused error when running locally .
If the previous command fails with a
healthapiclient.NewHL7V2Client: oauth2google.DefaultTokenSource: google: could not find default credentials. See https://developers.google.com/accounts/docs/application-default-credentials for more information.
error, see
could not find default credentials error when running locally .
If you encounter any other authentication errors, see Authentication errors .
To continue with testing while the adapter runs as a foreground process, open
a different terminal on your local machine.
In the new terminal, to install Netcat ,
run the following command:
sudo apt install netcat
Download the
hl7v2-mllp-sample.txt
file and save it to your local machine.
To send the HL7v2 message to the adapter, in the directory where you
downloaded the file, run the following command. The MLLP adapter is listening
on your local host on port 2575. The command sends the message through the
MLLP adapter into your HL7v2 store.
Linux
echo -n -e "\x0b $( cat hl7v2-mllp-sample.txt ) \x1c\x0d" | nc -q1 localhost 2575 | less
If the message was successfully ingested into the HL7v2 store, the command
returns the following output:
^KMSH|^~\&|TO_APP|TO_FACILITY|FROM_APP|FROM_FACILITY|19700101010000||ACK|c507a97e-438d-44b0-b236-ea95e5ecbbfb|P|2.5^MMSA|AA|20150503223000^\
This output indicates that the HL7v2 store responded with an
AA ( Application Accept ) response type, meaning that the message was
validated and successfully ingested.
You can also verify that the message was successfully sent by opening
the terminal where you ran the adapter. The output should look like the
following sample:
I0000 00 :00:00.000000 1 healthapiclient.go:171 ] Dialing connection to https://healthcare.googleapis.com:443/v1
I0000 00 :00:00.000000 1 mllp_adapter.go:89 ] Either --pubsub_project_id or --pubsub_subscription is not provided, notifications of the new messages are not read and no outgoing messages will be sent to the target MLLP address.
I0213 00 :00:00.000000 1 healthapiclient.go:190 ] Sending message of size 319 .
I0213 00 :00:00.000000 1 healthapiclient.go:223 ] Message was successfully sent.
The message is stored in your HL7v2 store, so you can call
messages.list
to view the message:
curl
curl -X GET \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages"
If the request is successful, the server returns the message's ID in a resource path:
{
"hl7V2Messages": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID "
}
]
}
PowerShell
$cred = gcloud auth application-default print-access-token
$headers = @ { Authorization = "Bearer $cred " }
Invoke-WebRequest `
-Method Get `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages" | Select-Object -Expand Content
If the request is successful, the server returns the message's ID in a resource path:
{
"hl7V2Messages": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID "
}
]
}
Testing the MLLP adapter locally as a publisher
When testing the adapter as a publisher, you create messages by calling
messages.create
or messages.ingest
and supplying a message file as binary data.
The adapter automatically acknowledges Pub/Sub messages sent
through messages.create and messages.ingest .
The adapter notifies you when it successfully fetches and sends
Pub/Sub messages. The adapter is a Pub/Sub
subscriber, so it automatically acknowledges these messages. As a result,
they're removed from the message queue in the Pub/Sub
subscription that you configured with the adapter.
To pull from the Pub/Sub subscription and separately verify that
the messages were published, you need to create a second Pub/Sub
subscription assigned to the topic you created previously. The messages sent to
the second subscription aren't automatically acknowledged by the adapter and
persist so that you can pull them.
To create a second Pub/Sub subscription assigned to the topic
you created previously, complete the following steps:
Console
Go to the Pub/Sub Topics page in the Google Cloud console.
Go to the Pub/Sub topics page
Click your project's topic. This is the topic that you used to
create the initial subscription.
Click Create Subscription .
Enter a subscription name:
projects/ PROJECT_ID /subscriptions/ SECOND_SUBSCRIPTION_NAME
Leave Delivery Type set to Pull .
Click Create .
gcloud
To create a second Pub/Sub subscription assigned to the
topic you created previously, run the
gcloud pubsub subscriptions create
command:
gcloud pubsub subscriptions create SECOND_SUBSCRIPTION_NAME --topic = projects/ PROJECT_ID /topics/ TOPIC_NAME
Note: To configure the number of seconds that the system waits for
acknowledgement from the subscriber before re-attempting delivery, use the
optional --ack-deadline flag. Without this flag, the default deadline is
10 seconds.
If the request is successful, the command returns the following output:
Created subscription [ projects/ PROJECT_ID /subscriptions/ SECOND_SUBSCRIPTION_NAME ] .
To test the adapter locally as a publisher, complete the following steps on
the machine where you pulled the pre-built Docker image:
Install Netcat :
sudo apt install netcat
Download the
hl7v2-mllp-ack-sample.txt
file and save it to your local machine. The file contains an ACK message
that the adapter requires as a response when it attempts to publish a message.
To allow Netcat to listen for incoming connections on port 2525, in the
directory where you downloaded the file, run the following command.
Linux
echo -n -e "\x0b $( cat hl7v2-mllp-ack-sample.txt ) \x1c\x0d" | nc -q1 -lv -p 2525 | less
After starting Netcat, an output message similar to the following sample
displays:
listening on [any] 2525 ...
Netcat runs as a foreground process, so to continue with testing, open a
different terminal on your local machine.
To start the adapter, in the new terminal, run the following command:
docker run \
--network = host \
gcr.io/cloud-healthcare-containers/mllp-adapter \
/usr/mllp_adapter/mllp_adapter \
--hl7_v2_project_id = PROJECT_ID \
--hl7_v2_location_id = LOCATION \
--hl7_v2_dataset_id = DATASET_ID \
--hl7_v2_store_id = HL7V2_STORE_ID \
--export_stats = false \
--receiver_ip = 127 .0.0.1 --port 2575 \
--mllp_addr = 127 .0.0.1:2525 \
--pubsub_project_id = PROJECT_ID \
--pubsub_subscription = PUBSUB_SUBSCRIPTION \
--api_addr_prefix = https://healthcare.googleapis.com:443/v1 \
--logtostderr
where:
PROJECT_ID is the ID for the Google Cloud project
containing your HL7v2 store.
LOCATION is the region where your HL7v2 store is located.
DATASET_ID is the ID for the parent dataset of your HL7v2 store.
HL7V2_STORE_ID is the ID for the HL7v2 store to which you're
sending HL7v2 messages.
PROJECT_ID is the ID for the Google Cloud project
containing the Pub/Sub topic.
PUBSUB_SUBSCRIPTION is the name of the first subscription you
created that was associated with your Pub/Sub topic. The
adapter consumes messages from this subscription and automatically
acknowledges them, so to view the messages published to the topic you must
pull messages from the second subscription you created previously.
After running the previous command, the adapter starts to run on your local
machine at the 127.0.0.1 IP address on port 2575.
If you encounter any errors, follow these troubleshooting steps:
If you're using Mac OS and the previous command fails with a
Connection refused error, see
Connection refused error when running locally .
If the previous command fails with a
healthapiclient.NewHL7V2Client: oauth2google.DefaultTokenSource: google: could not find default credentials. See https://developers.google.com/accounts/docs/application-default-credentials for more information.
error, see
could not find default credentials error when running locally .
If you encounter any other authentication errors, see Authentication errors .
The adapter runs as a foreground process, so to continue with testing, open a
different terminal on your local machine.
Download the
hl7v2-sample.json
file and save it to your local machine. In the directory where you downloaded
the file, call the
messages.create
method to create the message in an HL7v2 store:
curl
To create an HL7v2 message, make a POST request and specify the
following information:
The name of the parent dataset
The name of the HL7v2 store
A message
An access token
The following sample shows a POST request using curl and a sample JSON file
called
hl7v2-sample.json .
curl -X POST \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
--data-binary @hl7v2-sample.json \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages"
If the request is successful, the server returns
the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID ",
"data": "TVNIfF5+XCZ8QXxTRU5EX0ZBQ0lMSVRZfEF8QXwyMDE4MDEwMTAwMDAwMHx8VFlQRV5BfDIwMTgwMTAxMDAwMDAwfFR8MC4wfHx8QUF8fDAwfEFTQ0lJDUVWTnxBMDB8MjAxODAxMDEwNDAwMDANUElEfHwxNAExMTFeXl5eTVJOfDExMTExMTExXl5eXk1STn4xMTExMTExMTExXl5eXk9SR05NQlI=",
"sendFacility": "SEND_FACILITY",
"sendTime": "2018-01-01T00:00:00Z",
"messageType": "TYPE",
"createTime": "1970-01-01T00:00:00Z",
"patientIds": [
{
"value": "14\u0001111",
"type": "MRN"
},
{
"value": "11111111",
"type": "MRN"
},
{
"value": "1111111111",
"type": "ORGNMBR"
}
]
}
PowerShell
To create an HL7v2 message, make a POST request and specify the
following information:
The name of the parent dataset
The name of the HL7v2 store
A message
An access token
The following sample shows a POST request using Windows PowerShell and a
sample JSON file called
hl7v2-sample.json .
$cred = gcloud auth application-default print-access-token
$headers = @ { Authorization = "Bearer $cred " }
Invoke-WebRequest `
-Method Post `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-InFile hl7v2-sample.json `
-Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages" | Select-Object -Expand Content
If the request is successful, the server returns
the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID ",
"data": "TVNIfF5+XCZ8QXxTRU5EX0ZBQ0lMSVRZfEF8QXwyMDE4MDEwMTAwMDAwMHx8VFlQRV5BfDIwMTgwMTAxMDAwMDAwfFR8MC4wfHx8QUF8fDAwfEFTQ0lJDUVWTnxBMDB8MjAxODAxMDEwNDAwMDANUElEfHwxNAExMTFeXl5eTVJOfDExMTExMTExXl5eXk1STn4xMTExMTExMTExXl5eXk9SR05NQlI=",
"sendFacility": "SEND_FACILITY",
"sendTime": "2018-01-01T00:00:00Z",
"messageType": "TYPE",
"createTime": "1970-01-01T00:00:00Z",
"patientIds": [
{
"value": "14\u0001111",
"type": "MRN"
},
{
"value": "11111111",
"type": "MRN"
},
{
"value": "1111111111",
"type": "ORGNMBR"
}
]
}
After creating the message, the MLLP adapter returns a response similar
to the following:
I0214 00:00:00.000000 1 healthapiclient.go:244] Started to fetch message from the Cloud Healthcare API HL7V2 Store
I0214 00:00:00.000000 1 healthapiclient.go:283] Message was successfully fetched from the Cloud Healthcare API HL7V2 Store.
In the terminal where you ran Netcat, an output similar to the following
sample displays. This output indicates that the message was published:
connect to [127.0.0.1] from localhost [127.0.0.1] 39522
^KMSH|^~\&|A|SEND_FACILITY|A|A|20180101000000||TYPE^A|20180101000000|T|0.0|||AA||00|ASCII^MEVN|A00|20180101040000^MPID||14^A111^^^^MRN|11111111^^^^MRN~1111111111^^^^ORGNMBR^\
This corresponds to the value in the data field of the response that you
received when you created the message. It's the same as the data value in
the hl7v2-sample.json file.
To view the message that the adapter published to the Pub/Sub
topic, run the
gcloud pubsub subscriptions pull
command on the second Pub/Sub subscription you created:
gcloud pubsub subscriptions pull --auto-ack SECOND_SUBSCRIPTION
The command returns the following output about the created HL7v2 message.
Note the publish=true value in the ATTRIBUTES column, which indicates
that the message was published to Pub/Sub:
┌----------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------┐
| DATA | MESSAGE_ID | ATTRIBUTES |
├----------------------------------------------------------------------------------------------------------------- | ----------------- | --------------- |
| projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ HL7V2_MESSAGE_ID | 123456789012345 | msgType = ADT |
| | | publish = true |
└----------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------┘
Publishing messages to different external receivers
You can configure the HL7v2 store with multiple Pub/Sub topics
and use filters to send notifications to different Pub/Sub
topics. You can then run an MLLP adapter for each Pub/Sub topic
to publish the messages to a different external receiver.
Important: Publishing messages to different external receivers, and testing
them, requires opening five terminals. Because the maximum number of open
terminals in Cloud Shell is four, you must perform the steps in the following
sections in a local shell.
To configure the HL7v2 store with multiple Pub/Sub
topics and a filter for each topic, complete the following steps:
Create two Pub/Sub topics and a subscription for each topic.
For more information, see Creating a Pub/Sub topic and subscription .
Run the following command:
curl
curl -X PATCH \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
--data "{
'notificationConfigs': [
{
'pubsubTopic': 'projects/ PROJECT_ID /topics/ PUBSUB_TOPIC ',
'filter' : 'sendFacility=\"SEND_FACILITY_1\"'
},
{
'pubsubTopic': 'projects/ PROJECT_ID /topics/ SECOND_PUBSUB_TOPIC ',
'filter': 'sendFacility=\"SEND_FACILITY_2\"'
}
]
}" "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID ?updateMask=notificationConfigs"
If the request is successful, the server returns the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID ",
"notificationConfigs": [
{
"pubsubTopic": "projects/ PROJECT_ID /topics/ PUBSUB_TOPIC ",
"filter": "sendFacility=\"SEND_FACILITY_1\""
},
{
"pubsubTopic": "projects/ PROJECT_ID /topics/ SECOND_PUBSUB_TOPIC ",
"filter": "sendFacility=\"SEND_FACILITY_2\""
}
]
}
PowerShell
$cred = gcloud auth application-default print-access-token
$headers = @ { Authorization = "Bearer $cred " }
Invoke-WebRequest `
-Method Patch `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-Body "{
'notificationConfigs': [
{
'pubsubTopic' : 'projects/ PROJECT_ID /topics/ PUBSUB_TOPIC ',
'filter': 'sendFacility=\"SEND_FACILITY_1\"'
},
{
'pubsubTopic' : 'projects/ PROJECT_ID /topics/ SECOND_PUBSUB_TOPIC ',
'filter' : 'sendFacility=\"SEND_FACILITY_2\"'
}
]
}" `
-Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores?hl7V2StoreId= HL7V2_STORE_ID ?updateMask=notificationConfigs" | Select-Object -Expand Content
If the request is successful, the server returns the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID ",
"notificationConfigs": [
{
"pubsubTopic": "projects/ PROJECT_ID /topics/ PUBSUB_TOPIC ",
"filter": "sendFacility=\"SEND_FACILITY_1\""
},
{
"pubsubTopic": "projects/ PROJECT_ID /topics/ SECOND_PUBSUB_TOPIC ",
"filter": "sendFacility=\"SEND_FACILITY_2\""
}
]
}
Testing the message routing
To test the message routing, complete the steps in the following sections.
Configuring and starting the first receiver and adapter
To configure and start the first receiver and adapter, complete the following steps:
On the machine where you pulled the pre-built Docker image, run
the following command to install Netcat :
sudo apt install netcat
Download hl7v2-mllp-ack-sample.txt ,
if you haven't done so. The file contains an ACK message used as a
response by the adapter when it attempts to publish a message.
To set port 2525 for the first receiver, run the following command:
Linux
echo -n -e "\x0b $( cat hl7v2-mllp-ack-sample.txt ) \x1c\x0d" | nc -q1 -lv -p 2525 | less
When the Netcat process starts, the following output displays:
listening on [any] 2525 ...
To start the first adapter, in a new terminal, run the following command:
docker run \
--network = host \
gcr.io/cloud-healthcare-containers/mllp-adapter \
/usr/mllp_adapter/mllp_adapter \
--hl7_v2_project_id = PROJECT_ID \
--hl7_v2_location_id = LOCATION \
--hl7_v2_dataset_id = DATASET_ID \
--hl7_v2_store_id = HL7V2_STORE_ID \
--export_stats = false \
--receiver_ip = 127 .0.0.1 --port 2575 \
--mllp_addr = 127 .0.0.1:2525 \
--pubsub_project_id = PROJECT_ID \
--pubsub_subscription = PUBSUB_SUBSCRIPTION \
--api_addr_prefix = https://healthcare.googleapis.com:443/v1 \
--logtostderr
where:
PROJECT_ID is the ID for the Google Cloud project
containing your HL7v2 store.
LOCATION is the region where your HL7v2 store is located.
DATASET_ID is the ID for the parent dataset of your HL7v2 store.
HL7V2_STORE_ID is the ID for the HL7v2 store to which you're
sending HL7v2 messages.
PROJECT_ID is the ID for the Google Cloud project
containing the Pub/Sub topic.
PUBSUB_SUBSCRIPTION is the name of the first subscription you
created that is associated with your first Pub/Sub topic.
The adapter consumes messages from this subscription and automatically
acknowledges them.
After running this command, the adapter starts to run on your local
machine on 127.0.0.1:2575. It publishes new
messages to the first external receiver on port 2525.
Important: If you're using Mac OS and this command fails with a
Connection refused error, see Connection refused error when running locally .
If this command fails with a
could not find default credentials error, see
could not find default credentials error when running locally .
Configuring and starting the second receiver and adapter
To configure and start the second receiver and adapter, complete the following steps:
On the machine where you pulled the pre-built Docker image, run
the following command to install Netcat :
sudo apt install netcat
Download hl7v2-mllp-ack-sample.txt ,
if you haven't done so. The file contains an ACK message used as a
response by the adapter when it attempts to publish a message.
To set port 2526 for the second receiver, run the following command.
Linux
echo -n -e "\x0b $( cat hl7v2-mllp-ack-sample.txt ) \x1c\x0d" | nc -q1 -lv -p 2526 | less
When the Netcat process starts, the following output displays:
listening on [any] 2526 ...
To start the second adapter, in a new terminal, run the following command:
docker run \
--network = host \
gcr.io/cloud-healthcare-containers/mllp-adapter \
/usr/mllp_adapter/mllp_adapter \
--hl7_v2_project_id = PROJECT_ID \
--hl7_v2_location_id = LOCATION \
--hl7_v2_dataset_id = DATASET_ID \
--hl7_v2_store_id = HL7V2_STORE_ID \
--export_stats = false \
--receiver_ip = 127 .0.0.1 --port 2576 \
--mllp_addr = 127 .0.0.1:2526 \
--pubsub_project_id = PROJECT_ID \
--pubsub_subscription = SECOND_PUBSUB_SUBSCRIPTION \
--api_addr_prefix = https://healthcare.googleapis.com:443/v1 \
--logtostderr
where:
PROJECT_ID is the ID for the Google Cloud project
containing your HL7v2 store.
LOCATION is the region where your HL7v2 store is located.
DATASET_ID is the ID for the parent dataset of your HL7v2 store.
HL7V2_STORE_ID is the ID for the HL7v2 store to which you're
sending HL7v2 messages.
PROJECT_ID is the ID for the Google Cloud project
containing the Pub/Sub topic.
SECOND_PUBSUB_SUBSCRIPTION is the name of the second subscription
you created that is associated with your second Pub/Sub
topic. The adapter consumes messages from this subscription and
automatically acknowledges them.
After running this command, the adapter starts to run on your local
machine on port 127.0.0.1:2576 IP address. It publishes new
messages to the second external receiver on port 2526.
Important: If you're using Mac OS and this command fails with a
Connection refused error, see Connection refused error when running locally .
If this command fails with a
could not find default credentials. error, see
could not find default credentials error when running locally .
Publishing a message to the first receiver
To create a message that will only be published to the first external receiver,
complete the following steps:
Download hl7v2-sample1.json .
In the directory where you downloaded hl7v2-sample1.json , call the
messages.create
method to create the message in an HL7v2 store:
curl
To create an HL7v2 message, make a POST request and specify the following
information:
The name of the parent dataset
The name of the HL7v2 store
A message
An access token
The following sample shows a POST request using curl and a sample JSON
file, hl7v2-sample1.json .
curl -X POST \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
--data-binary @hl7v2-sample1.json \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages"
If the request is successful, the server returns
the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID ",
"data": "TVNIfF5+XCZ8QXxTRU5EX0ZBQ0lMSVRZXzF8QXxBfDIwMTgwMTAxMDAwMDAwfHxUWVBFXkF8MjAxODAxMDEwMDAwMDB8VHwwLjB8fHxBQXx8MDB8QVNDSUkNRVZOfEEwMHwyMDE4MDEwMTA0MDAwMA1QSUR8fDE0ATExMV5eXl5NUk58MTExMTExMTFeXl5eTVJOfjExMTExMTExMTFeXl5eT1JHTk1CUg==",
"sendFacility": "SEND_FACILITY_1",
"sendTime": "2018-01-01T00:00:00Z",
"messageType": "TYPE",
"createTime": "1970-01-01T00:00:00Z",
"patientIds": [
{
"value": "14\u0001111",
"type": "MRN"
},
{
"value": "11111111",
"type": "MRN"
},
{
"value": "1111111111",
"type": "ORGNMBR"
}
]
}
PowerShell
To create an HL7v2 message, make a POST request and specify the following
information:
The name of the parent dataset
The name of the HL7v2 store
A message
An access token
The following sample shows a POST request using Windows PowerShell and a
sample JSON file called
hl7v2-sample1.json .
$cred = gcloud auth application-default print-access-token
$headers = @ { Authorization = "Bearer $cred " }
Invoke-WebRequest `
-Method Post `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-InFile hl7v2-sample1.json `
-Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages" | Select-Object -Expand Content
If the request is successful, the server returns
the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID ",
"data": "TVNIfF5+XCZ8QXxTRU5EX0ZBQ0lMSVRZXzF8QXxBfDIwMTgwMTAxMDAwMDAwfHxUWVBFXkF8MjAxODAxMDEwMDAwMDB8VHwwLjB8fHxBQXx8MDB8QVNDSUkNRVZOfEEwMHwyMDE4MDEwMTA0MDAwMA1QSUR8fDE0ATExMV5eXl5NUk58MTExMTExMTFeXl5eTVJOfjExMTExMTExMTFeXl5eT1JHTk1CUg==",
"sendFacility": "SEND_FACILITY_1",
"sendTime": "2018-01-01T00:00:00Z",
"messageType": "TYPE",
"createTime": "1970-01-01T00:00:00Z",
"patientIds": [
{
"value": "14\u0001111",
"type": "MRN"
},
{
"value": "11111111",
"type": "MRN"
},
{
"value": "1111111111",
"type": "ORGNMBR"
}
]
}
In this response, sendFacility is set to SEND_FACILITY_1 , therefore the
Pub/Sub notification is only sent to the first
Pub/Sub topic. After creating the message, the first MLLP
adapter returns the following response:
I0214 00:00:00.000000 1 healthapiclient.go:266] Started to fetch message.
I0214 00:00:00.000000 1 healthapiclient.go:283] Message was successfully fetched.
The second MLLP adapter does not return any response because no
notification is sent to the second Pub/Sub topic.
In the terminal where you ran the first Netcat process, the following output
displays. This output indicates that the message was published.
connect to [127.0.0.1] from localhost [127.0.0.1] 39522
^KMSH|^~\&|A|SEND_FACILITY_1|A|A|20180101000000||TYPE^A|20180101000000|T|0.0|||AA||00|ASCII^MEVN|A00|20180101040000^MPID||14^A111^^^^MRN|11111111^^^^MRN~1111111111^^^^ORGNMBR^\
This output corresponds to the value in the data field of the response that you
received when you created the message. It's the same as the data value in
the hl7v2-sample1.json file.
Publishing a message to the second receiver
To create a message that will only be published to the second external receiver,
complete the following steps:
Open a new terminal on your local machine.
To create a message that will only be published to the second external
receiver, download hl7v2-sample2.json .
In the directory where you downloaded hl7v2-sample2.json , call the
messages.create
method to create the message in an HL7v2 store:
curl
To create an HL7v2 message, make a POST request and specify the following
information:
The name of the parent dataset
The name of the HL7v2 store
A message
An access token
The following sample shows a POST request using curl and a sample JSON
file, hl7v2-sample2.json .
curl -X POST \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
--data-binary @hl7v2-sample2.json \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages"
If the request is successful, the server returns
the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID ",
"data": "TVNIfF5+XCZ8QXxTRU5EX0ZBQ0lMSVRZXzJ8QXxBfDIwMTgwMTAxMDAwMDAwfHxUWVBFXkF8MjAxODAxMDEwMDAwMDB8VHwwLjB8fHxBQXx8MDB8QVNDSUkNRVZOfEEwMHwyMDE4MDEwMTA0MDAwMA1QSUR8fDE0ATExMV5eXl5NUk58MTExMTExMTFeXl5eTVJOfjExMTExMTExMTFeXl5eT1JHTk1CUg==",
"sendFacility": "SEND_FACILITY_2",
"sendTime": "2018-01-01T00:00:00Z",
"messageType": "TYPE",
"createTime": "1970-01-01T00:00:00Z",
"patientIds": [
{
"value": "14\u0001111",
"type": "MRN"
},
{
"value": "11111111",
"type": "MRN"
},
{
"value": "1111111111",
"type": "ORGNMBR"
}
]
}
PowerShell
To create an HL7v2 message, make a POST request and specify the
following information:
The name of the parent dataset
The name of the HL7v2 store
A message
An access token
The following sample shows a POST request using Windows PowerShell and a
sample JSON file, hl7v2-sample2.json .
$cred = gcloud auth application-default print-access-token
$headers = @ { Authorization = "Bearer $cred " }
Invoke-WebRequest `
-Method Post `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-InFile hl7v2-sample2.json `
-Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages" | Select-Object -Expand Content
If the request is successful, the server returns
the response in JSON format:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID ",
"data": "TVNIfF5+XCZ8QXxTRU5EX0ZBQ0lMSVRZXzJ8QXxBfDIwMTgwMTAxMDAwMDAwfHxUWVBFXkF8MjAxODAxMDEwMDAwMDB8VHwwLjB8fHxBQXx8MDB8QVNDSUkNRVZOfEEwMHwyMDE4MDEwMTA0MDAwMA1QSUR8fDE0ATExMV5eXl5NUk58MTExMTExMTFeXl5eTVJOfjExMTExMTExMTFeXl5eT1JHTk1CUg==",
"sendFacility": "SEND_FACILITY_2",
"sendTime": "2018-01-01T00:00:00Z",
"messageType": "TYPE",
"createTime": "1970-01-01T00:00:00Z",
"patientIds": [
{
"value": "14\u0001111",
"type": "MRN"
},
{
"value": "11111111",
"type": "MRN"
},
{
"value": "1111111111",
"type": "ORGNMBR"
}
]
}
Note that the sendFacility is SEND_FACILITY_2 , therefore the
Pub/Sub notification is only sent to the second
Pub/Sub topic. After creating the message, the first MLLP
adapter does not return any response, while the second MLLP adapter returns
the following response:
I0214 00:00:00.000000 1 healthapiclient.go:266] Started to fetch message.
I0214 00:00:00.000000 1 healthapiclient.go:283] Message was successfully fetched.
In the terminal where you ran the second Netcat process, the following output
displays. This output indicates that the message was published.
connect to [127.0.0.1] from localhost [127.0.0.1] 39522
^KMSH|^~\&|A|SEND_FACILITY_2|A|A|20180101000000||TYPE^A|20180101000000|T|0.0|||AA||00|ASCII^MEVN|A00|20180101040000^MPID||14^A111^^^^MRN|11111111^^^^MRN~1111111111^^^^ORGNMBR^\
This output corresponds to the value in the data field of the response that you
received when you created the message. It's the same as the data value in
the hl7v2-sample2.json file.
Deploying the MLLP adapter to Google Kubernetes Engine
When transmitting HL7v2 messages over MLLP from your care center, one possible
configuration is to send the messages to an adapter that is deployed in
Google Cloud and can forward them to the Cloud Healthcare API.
The MLLP adapter runs as a
stateless application
on a GKE cluster. A GKE cluster is a managed
group of VM instances for running containerized applications. Stateless
applications are applications that don't store data or application state to the
cluster or to
persistent storage. Instead, data and application state stay with the client,
which makes stateless applications more scalable.
GKE uses the
Deployment
controller to deploy stateless applications as uniform, non-unique
Pods .
Deployments manage the desired state of your application: how many Pods
should run your application, what version of the container image should run,
what the Pods should be labelled, and so on. The desired state can be
changed dynamically through updates to the deployment's
Pod specification .
At the same time that you deploy the adapter, you create a Service
controller that allows you to connect the adapter to the Cloud Healthcare API
using internal load balancing .
If you're new to GKE, you should complete the
GKE quickstart to learn
how the product works.
Adding Pub/Sub API permissions to the GKE service account
As stated in the GKE documentation on Authenticating to Cloud Platform with service accounts ,
each node in a container cluster
is a Compute Engine instance . Therefore,
when the MLLP adapter runs on a container cluster, it automatically inherits
the scopes of the Compute Engine instances to which it is deployed.
Google Cloud automatically creates a service account named
"Compute Engine default service account" and GKE associates
this service account with the nodes that GKE creates.
Depending on how your project is configured,
the default service account might or might not have permissions to use other
Cloud Platform APIs. GKE also assigns some limited access
scopes to Compute Engine instances.
For best results, don't authenticate to other Google Cloud services
(such as Pub/Sub) from
Pods running on GKE by updating the default service account's
permissions or assigning more access scopes to Compute Engine
instances. Instead, create your own service
accounts .
You have to grant the necessary Pub/Sub
permissions to the container cluster, but you also have the option of
granting permissions to write metrics to
Cloud Monitoring .
To create a new service account that contains only the scopes that the container
cluster requires, complete the following steps:
Console
Create a service account:
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select a project.
In the Service account name field, enter a name. The
Google Cloud console fills in the Service account ID field based on
this name.
Optional: In the Service account description field, enter a
description.
Click Create .
Click the Select a role field.
Under All roles , click Pub/Sub > Pub/Sub Subscriber .
Click Add another role , then click the Select a role field.
Under All roles , click Cloud Healthcare >
Healthcare HL7v2 Message Ingest .
Optional: If you want to enable monitoring, click Add another role ,
then click the Select a role field.
Under All roles , click Monitoring >
Monitoring Metric Writer .
Click Continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use the window in the next
procedure.
gcloud
To create the service account, run the
gcloud iam service-accounts create
command.
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
The output is the service account:
Created service account SERVICE_ACCOUNT_NAME .
To grant each role to the service account, run the
gcloud projects add-iam-policy-binding
command.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--role = roles/pubsub.subscriber
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--role = roles/healthcare.hl7V2Ingest
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--role = roles/monitoring.metricWriter
The output includes the updated policy:
bindings:
- members:
- user: SERVICE_ACCOUNT_NAME
role: roles/pubsub.publisher
- members:
- user: SERVICE_ACCOUNT_NAME
roles/healthcare.hl7V2Ingest
- members:
- user: SERVICE_ACCOUNT_NAME
roles/monitoring.metricWriter
etag: ETAG
version: 1
Creating the cluster
To create the cluster in GKE, run the
gcloud container clusters create
command:
gcloud container clusters create mllp-adapter \
--zone = COMPUTE_ZONE \
--service-account CLIENT_EMAIL
where:
COMPUTE_ZONE is the zone
in which your cluster is deployed. A zone is an approximate regional location
in which your clusters and their resources live. For example, us-west1-a is
a zone in the us-west region. If you've set a default zone using
gcloud config set compute/zone , the value of this flag overrides the
default.
CLIENT_EMAIL is the identifier for the service account you want
to use. It uses the format
SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com.
The command returns output similar to the following sample:
Creating cluster mllp-adapter in COMPUTE_ZONE ...
Cluster is being configured...
Cluster is being deployed...
Cluster is being health-checked...
Cluster is being health-checked ( master is healthy ) ...done.
Created [ https://container.googleapis.com/v1/projects/ PROJECT_ID /zones/ COMPUTE_ZONE /clusters/mllp-adapter ] .
To inspect the contents of your cluster, go to: https://console.cloud.google.com/kubernetes/workload_/gcloud/ COMPUTE_ZONE /mllp-adapter?project = PROJECT_ID
kubeconfig entry generated for mllp-adapter.
NAME LOCATION MASTER_VERSION MASTER_IP MACHINE_TYPE NODE_VERSION NUM_NODES STATUS
mllp-adapter COMPUTE_ZONE 1 .11.7-gke.4 203 .0.113.1 n1-standard-1 1 .11.7-gke.4 3 RUNNING
After creating the cluster, GKE creates three
Compute Engine VM instances .
You can verify this by listing the instances with the following command:
gcloud compute instances list
Configuring the deployment
When deploying an application to GKE, you define properties
of the deployment using a deployment manifest file , which is typically
a YAML file. For a sample, see
Creating a deployment .
Open a separate terminal.
Using a text editor, create a deployment manifest file called
mllp_adapter.yaml with the following content:
apiVersion : apps/v1
kind : Deployment
metadata :
name : mllp-adapter-deployment
spec :
replicas : 1
selector :
matchLabels :
app : mllp-adapter
template :
metadata :
labels :
app : mllp-adapter
spec :
containers :
- name : mllp-adapter
imagePullPolicy : Always
image : gcr.io/cloud-healthcare-containers/mllp-adapter
ports :
- containerPort : 2575
protocol : TCP
name : "port"
command :
- "/usr/mllp_adapter/mllp_adapter"
- "--port=2575"
- "--hl7_v2_project_id= PROJECT_ID "
- "--hl7_v2_location_id= LOCATION "
- "--hl7_v2_dataset_id= DATASET_ID "
- "--hl7_v2_store_id= HL7V2_STORE_ID "
- "--api_addr_prefix=https://healthcare.googleapis.com:443/v1"
- "--logtostderr"
- "--receiver_ip=0.0.0.0"
where:
PROJECT_ID is the ID for the Google Cloud project
containing your HL7v2 store.
LOCATION is the region where your HL7v2 store is located.
DATASET_ID is the ID for the parent dataset of your HL7v2 store.
HL7V2_STORE_ID is the ID for the HL7v2 store to which you're
sending HL7v2 messages.
The deployment has the following properties:
spec: replicas: is the number of replicated pods that the deployment manages.
spec: template: metadata: labels: is the label given to each Pod, which
the deployment uses to manage the pods.
spec: template: spec: is the
Pod specification ,
which defines how each Pod should run.
spec: containers includes the name of the container to run in each Pod and
the container image that should run.
For more information about the deployment specification, see the
Deployment API reference .
Configuring the Service
To make the MLLP adapter accessible to applications outside of the cluster
(such as a care center), you must configure an internal load balancer .
If you haven't configured a VPN, applications can access the MLLP adapter
through the internal load balancer as long as the applications use the same VPC
network and are located in the same Google Cloud region.
For example, to make the adapter accessible to a Compute Engine
VM instance in the same region
and on the same VPC network, you could add an internal load balancer to the
cluster's
Service
resource.
In the directory where you created the deployment manifest file, use
the text editor to create a Service manifest file called
mllp_adapter_service.yaml with the following content. This file is
responsible for configuring internal load balancing:
apiVersion : v1
kind : Service
metadata :
name : mllp-adapter-service
annotations :
cloud.google.com/load-balancer-type : "Internal"
spec :
type : LoadBalancer
ports :
- name : port
port : 2575
targetPort : 2575
protocol : TCP
selector :
app : mllp-adapter
The Service has the following properties:
metadata: name: is the name you choose for the Service. In this case, it's
mllp-adapter-service .
metadata: annotations: is an annotation that specifies that an internal load
balancer is to be configured.
spec: type: is the type of load balancer.
ports: port: is used to specify the port on which the service can receive
traffic from other services in the same cluster. The default MLLP port of
2575 is used.
ports: targetPort: is used to specify the port on each Pod where the service
is running.
spec: selector: app: specifies the Pods that the Service targets.
Although it's possible to specify an IP address for the load balancer
(using the clusterIP field ), the
load balancer can generate its own IP address to which you can send
messages. For now, let the cluster generate the IP address, which you
use later on in this tutorial.
For more information on internal load balancing, see the
GKE
documentation.
For more information about the Service specification, see the
Service API reference .
Deploying the deployment
To deploy the adapter to a GKE cluster, in the directory
containing the mllp_adapter.yaml deployment manifest file, run the following
command:
kubectl apply -f mllp_adapter.yaml
The command returns the following output:
deployment.extensions "mllp-adapter-deployment" created
Note: kubectl apply fails if you don't have an active cluster.
Inspecting the deployment
After you create the deployment, you can use the kubectl tool to inspect it.
To get detailed information about the deployment, run the following command:
kubectl describe deployment mllp-adapter
To list the Pod created by the deployment, run the following command:
kubectl get pods -l app = mllp-adapter
To get information about the created Pod:
kubectl describe pod POD_NAME
If the deployment was successful, the last part of the output from the previous
command should contain the following information:
Events:
Type Reason Age From Message
---- ------ ---- ---- -------
Normal Scheduled 1m default-scheduler Successfully assigned default/mllp-adapter-deployment-85b46f8-zxw68 to gke-mllp-adapter-default-pool-9c42852d-95sn
Normal Pulling 1m kubelet, gke-mllp-adapter-default-pool-9c42852d-95sn pulling image "gcr.io/cloud-healthcare-containers/mllp-adapter"
Normal Pulled 1m kubelet, gke-mllp-adapter-default-pool-9c42852d-95sn Successfully pulled image "gcr.io/cloud-healthcare-containers/mllp-adapter"
Normal Created 1m kubelet, gke-mllp-adapter-default-pool-9c42852d-95sn Created container
Normal Started 1m kubelet, gke-mllp-adapter-default-pool-9c42852d-95sn Started container
Deploying the Service and creating the internal load balancer
To create the internal load balancer, in the directory containing the
mllp_adapter_service.yaml Service manifest file, run the following command:
kubectl apply -f mllp_adapter_service.yaml
The command returns the following output:
service "mllp-adapter-service" created
Note: kubectl apply fails if you don't have an active cluster.
Inspecting the Service
After creating the Service, inspect it to verify that it has been configured
successfully.
To inspect the internal load balancer, run the following command:
kubectl describe service mllp-adapter-service
The command's output is similar to the following sample:
Name: mllp-adapter-service
Namespace: default
Labels: <none>
Annotations: cloud.google.com/load-balancer-type = Internal
kubectl.kubernetes.io/last-applied-configuration ={ "apiVersion" : "v1" , "kind" : "Service" , "metadata" : { "annotations" : { "cloud.google.com/load-balancer-type" : "Internal" } , "name" : "mllp-adapter-service" , "namespa...
Selector: app=mllp-adapter
Type: LoadBalancer
IP: 203.0.113.1
LoadBalancer Ingress: 203.0.113.1
Port: port 2575/TCP
TargetPort: 2575/TCP
NodePort: port 30660/TCP
Endpoints: <none>
Session Affinity: None
External Traffic Policy: Cluster
Events:
Type Reason Age From Message
---- ------ ---- ---- -------
Normal EnsuringLoadBalancer 1m service-controller Ensuring load balancer
Normal EnsuredLoadBalancer 1m service-controller Ensured load balancer
Note: When you view the output, IP and LoadBalancer Ingress won't have the
same value. They use the same value here for demonstration purposes.
The LoadBalancer Ingress IP address might
take up to a minute to populate. You'll use this IP
address and the 2575 port to access the Service from outside the cluster
in the next step.
Creating a Compute Engine VM and sending messages
Whereas earlier in this tutorial you
tested the MLLP adapter locally
and sent HL7v2 messages to your HL7v2 store, you'll now send messages from
a Compute Engine VM to the MLLP adapter running on GKE.
The messages are then forwarded to an HL7v2 store.
To send requests from the new instance to the GKE cluster,
the instance and the existing instances must be
in the same region and use the same VPC network .
At the end of this section, you'll list the notifications published to your
Pub/Sub topic and the HL7v2 messages in your HL7v2 store. The
Compute Engine VM instance must be granted permissions to perform
these tasks. Before creating the instance, create a new service account with the
required permissions by completing the following steps:
Console
Create a service account:
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select a project.
In the Service account name field, enter a name. The
Google Cloud console fills in the Service account ID field based on
this name.
Optional: In the Service account description field, enter a
description.
Click Create .
Click the Select a role field.
Under All roles , click Pub/Sub > Pub/Sub Subscriber .
Click Add another role , then click the Select a role field.
Under All roles , click Cloud Healthcare >
Healthcare HL7v2 Message Consumer .
Click Continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use the window in the next
procedure.
gcloud
To create the service account, run the
gcloud iam service-accounts create
command.
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
The output is the service account:
Created service account SERVICE_ACCOUNT_NAME .
To grant each role to the service account, run the
gcloud projects add-iam-policy-binding
command.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--role = roles/pubsub.publisher
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--role = roles/healthcare.hl7V2Consumer
The output includes the updated policy:
bindings:
- members:
- user: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
role: roles/pubsub.publisher
- members:
- user: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
roles/healthcare.hl7V2Consumer
etag: ETAG
version: 1
The following steps show how to create a Linux virtual machine instance in
Compute Engine:
Console
In the Google Cloud console, go to the VM Instances page.
Go to the VM Instances page
Click Create instance .
Choose a Region and Zone for the instance that matches the zone you
selected when you created the cluster . For
example, if you used us-central1-a for the COMPUTE_ZONE when
you created the cluster, then in the instance creation screen, select
us-central1 (Iowa) for the Region and us-central1-a for the
Zone .
In the Boot disk section, click Change to begin configuring your
boot disk.
On the Public images tab, choose version 9 of the Debian
operating system.
Click Select .
In the Identity and API access section, select the service account you
created.
In the Firewall section, select Allow HTTP traffic .
Click Create to create the instance.
gcloud
To create a compute instance, run the
gcloud compute instances create
method with the following options:
The ZONE that you selected when you
created the cluster
The http-server tag to allow HTTP traffic
The SERVICE_ACCOUNT that you created
gcloud compute instances create COMPUTE_NAME \
--project = PROJECT_ID \
--zone = ZONE \
--image-family = debian-10 \
--image-project = debian-cloud \
--tags = http-server \
--service-account = SERVICE_ACCOUNT
The output is similar to the following sample:
Created [ https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ COMPUTE_NAME ] .
NAME ZONE MACHINE_TYPE PREEMPTIBLE INTERNAL_IP EXTERNAL_IP STATUS
COMPUTE_NAME ZONE n1-standard-1 INTERNAL_IP EXTERNAL_IP RUNNING
Allow a short time for the instance to start up. After the instance is started,
it's listed on the VM Instances page with a green status icon.
By default, the instance uses the same
default VPC network
that the cluster uses, which means that traffic can be sent from the instance
to the cluster.
To connect to the instance, complete the following steps:
Console
In the Google Cloud console, go to the VM Instances page.
Go to the VM Instances page
In the list of virtual machine instances, click SSH in the row of the
instance that you created.
gcloud
To connect to the instance, run the
gcloud compute ssh command:
gcloud compute ssh INSTANCE_NAME \
--project PROJECT_ID \
--zone ZONE
You now have a terminal window for interacting with your Linux instance.
In the terminal window, install Netcat :
sudo apt install netcat
Download the
hl7v2-mllp-sample.txt
file and save it to the instance. For information on the encoding and segment
terminators used in the file, see
HL7v2 message segment separators and encoding .
To start sending HL7v2 messages through the MLLP adapter to your HL7v2 store,
in the directory where you downloaded the file, run the following command.
Use the value of LoadBalancer Ingress that was displayed when you
inspected the Service .
echo -n -e "\x0b $( cat hl7v2-mllp-sample.txt ) \x1c\x0d" | nc LOAD_BALANCER_INGRESS_IP_ADDRESS 2575
After running the command, the message is sent through the MLLP adapter to
your HL7v2 store. If the message was successfully ingested into the HL7v2
store, the command returns the following output:
MSA | AA | 20150503223000 | ILITY | FROM_APP | FROM_FACILITY | 20190312162410 || ACK | f4c59243-19c2-4373-bea0-39c1b2ba616b | P | 2 .5
This output indicates that the HL7v2 store responded with an AA ( Application Accept )
response type, meaning that the message was validated and successfully ingested.
To view the message published to the Pub/Sub topic, run the
gcloud pubsub subscriptions pull
command:
gcloud pubsub subscriptions pull --auto-ack PUBSUB_SUBSCRIPTION
The command returns the following output about the ingested HL7v2 message:
┌----------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------┐
| DATA | MESSAGE_ID | ATTRIBUTES |
├----------------------------------------------------------------------------------------------------------------- | ----------------- | --------------- |
| projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ HL7V2_MESSAGE_ID | 123456789012345 | msgType = ADT |
└----------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------┘
You can also list the messages in your HL7v2 store to see if the message was
added:
curl
curl -X GET \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages"
If the request is successful, the server returns
the message's ID in a resource path:
{
"hl7V2Messages": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID "
}
]
}
PowerShell
$cred = gcloud auth application-default print-access-token
$headers = @ { Authorization = "Bearer $cred " }
Invoke-WebRequest `
-Method Get `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages" | Select-Object -Expand Content
If the request is successful, the server returns
the message's ID in a resource path:
{
"hl7V2Messages": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID "
}
]
}
After completing this section, you have successfully deployed the MLLP adapter
to GKE and sent an HL7v2 message from a remote instance through
the adapter and to the Cloud Healthcare API.
In the rest of this tutorial, you learn how to securely encrypt the transmitted
HL7v2 messages by configuring a VPN between a Compute Engine instance,
which acts as an "on-premises" instance, and the adapter.
Configuring a VPN
Using a VPN allows you to extend the private network on which you send HL7v2
messages across a public network, such as the internet. By using a VPN, you can
send messages from your care center through the MLLP adapter and to
Google Cloud. The systems in this flow act as if they were on a
single private network.
There are two methods of securing your MLLP connection using VPN:
Using Cloud VPN
Using the Strongswan on Docker
end-to-end VPN solution
Configuring Cloud VPN
Cloud VPN securely connects your on-premises network to your
Google Cloud Virtual Private Cloud (VPC) network through an
IPsec VPN connection. Traffic traveling
between the two networks is encrypted by one VPN gateway, then decrypted by the
other VPN gateway. This protects your data as it travels over the internet or
over a care center network.
In this tutorial, each VPN gateway you configure is located on a different
custom network and subnet in a different Google Cloud region.
The VPN gateway configured in us-central1 acts as the Cloud VPN
gateway on the Google Cloud side, while the Cloud VPN
gateway in europe-west1 simulates your "on-premises" gateway.
Naming and addressing reference
For reference, this tutorial uses the following naming and IP addressing:
Google Cloud side
Network name: cloud-vpn-network
Subnet name: subnet-us-central-10-0-1
Region: us-central1
Subnet range: 10.0.1.0/24
External IP address name: cloud-vpn-ip
VPN gateway name: vpn-us-central
VPN tunnel name: vpn-us-central-tunnel-1
"On-premises" side
Network name: on-prem-vpn-network
Subnet name: subnet-europe-west-10-0-2
Region: europe-west1
Subnet range: 10.0.2.0/24
External IP address name: on-prem-vpn-ip
VPN gateway name: vpn-europe-west
VPN tunnel name: vpn-europe-west-tunnel-1
Creating custom VPC networks and subnets
The first step in configuring Cloud VPN is to create two
VPC networks. One network, called on-prem-vpn-network ,
is configured in the "on-premises" environment and runs on a
Compute Engine VM instance called on-prem-instance . The other network,
called cloud-vpn-network , is what the GKE cluster running the
MLLP adapter uses. You'll connect to the on-prem-instance VM and send HL7v2
messages to the MLLP adapter running under the cloud-vpn-network network
through the MLLP adapter's internal load balancer.
Create two custom VPC networks and their subnets by completing the following
steps:
To create the first VPC network, cloud-vpn-network , run the following
command:
gcloud compute networks create cloud-vpn-network \
--project = PROJECT_ID \
--subnet-mode = custom
To create the subnet-us-central-10-0-1 subnet for the cloud-vpn-network
network, run the following command:
gcloud compute networks subnets create subnet-us-central-10-0-1 \
--project = PROJECT_ID \
--region = us-central1 \
--network = cloud-vpn-network \
--range = 10 .0.1.0/24
To create the on-prem-vpn-network VPC network, run the following
command:
gcloud compute networks create on-prem-vpn-network \
--project = PROJECT_ID \
--subnet-mode = custom
To create the subnet-europe-west-10-0-2 subnet for the
on-prem-vpn-network VPC network, run the following command:
gcloud compute networks subnets create subnet-europe-west-10-0-2 \
--project = PROJECT_ID \
--region = europe-west1 \
--network = on-prem-vpn-network \
--range = 10 .0.2.0/24
Creating an external IP address
Before creating the VPN
gateways , reserve an external
IP address for each gateway by completing the following steps:
To reserve a regional external (static) IP address for the cloud-vpn-ip
address, run the following command:
gcloud compute addresses create cloud-vpn-ip \
--project = PROJECT_ID \
--region = us-central1
To reserve a regional external (static) IP address for the on-prem-vpn-ip
address, run the following command:
gcloud compute addresses create on-prem-vpn-ip \
--project = PROJECT_ID \
--region = europe-west1
Make note of the external IP addresses so that you can use them to configure
the VPN gateways in the next section. To retrieve the external IP addresses,
run the following command:
Cloud VPN IP address :
gcloud compute addresses describe cloud-vpn-ip \
--project PROJECT_ID \
--region us-central1 \
--format = 'flattened(address)'
"On-premises" VPN IP address :
gcloud compute addresses describe on-prem-vpn-ip \
--project PROJECT_ID \
--region europe-west1 \
--format = 'flattened(address)'
The commands return output similar to the following:
address: 203 .0.113.1
Creating the VPN gateways, tunnels, and routes
Complete the following steps to create the VPN gateway, tunnel, and route
for the Cloud VPN:
Create a cryptographically strong pre-shared key (shared secret) by following
the instructions in
Generating a strong pre-shared key .
This key is referenced as SHARED_SECRET in this section.
To create the target VPN gateway object, run the following command:
gcloud compute target-vpn-gateways create vpn-us-central \
--project PROJECT_ID \
--region us-central1 \
--network cloud-vpn-network
To create three forwarding rules , run the following commands, replacing the
CLOUD_VPN_EXTERNAL_ADDRESS variable with the value from the
Cloud VPN IP address in the previous section:
Send ESP (IPsec) traffic to the gateway :
gcloud compute forwarding-rules create vpn-us-central-rule-esp \
--project PROJECT_ID \
--region us-central1 \
--address CLOUD_VPN_EXTERNAL_ADDRESS \
--ip-protocol ESP \
--target-vpn-gateway vpn-us-central
Send UDP 500 traffic to the gateway :
gcloud compute forwarding-rules create vpn-us-central-rule-udp500 \
--project PROJECT_ID \
--region us-central1 \
--address CLOUD_VPN_EXTERNAL_ADDRESS \
--ip-protocol UDP \
--ports 500 \
--target-vpn-gateway vpn-us-central
Send UDP 4500 traffic to the gateway :
gcloud compute forwarding-rules create vpn-us-central-rule-udp4500 \
--project PROJECT_ID \
--region us-central1 \
--address CLOUD_VPN_EXTERNAL_ADDRESS \
--ip-protocol UDP \
--ports 4500 \
--target-vpn-gateway vpn-us-central
To create a tunnel into the Cloud VPN gateway, run the following
command. Replace ON_PREM_VPN_IP with the value from the
"On-premises" VPN IP address in the previous section.
gcloud compute vpn-tunnels create vpn-us-central-tunnel-1 \
--project PROJECT_ID \
--region us-central1 \
--peer-address ON_PREM_VPN_IP \
--shared-secret SHARED_SECRET \
--ike-version 2 \
--local-traffic-selector 0 .0.0.0/0 \
--target-vpn-gateway vpn-us-central
To create a static route to 10.0.2.0/24 , run the following command:
gcloud compute routes create "vpn-us-central-tunnel-1-route-1" \
--project PROJECT_ID \
--network "cloud-vpn-network" \
--next-hop-vpn-tunnel "vpn-us-central-tunnel-1" \
--next-hop-vpn-tunnel-region "us-central1" \
--destination-range "10.0.2.0/24"
Complete the following steps to create the VPN gateway, tunnel, and route
for the "on-premises" VPN:
To create the target VPN gateway object, run the following command:
gcloud compute target-vpn-gateways create "vpn-europe-west" \
--project PROJECT_ID \
--region "europe-west1" \
--network "on-prem-vpn-network"
To create three forwarding rules , run the following commands, replacing the
ON_PREMISES_VPN_EXTERNAL_ADDRESS variable with the
value from the "On-premises" VPN IP address in the previous section:
Send ESP (IPsec) traffic to the gateway :
gcloud compute forwarding-rules create vpn-europe-west-rule-esp \
--project PROJECT_ID \
--region europe-west1 \
--address ON_PREMISES_VPN_EXTERNAL_ADDRESS \
--ip-protocol ESP \
--target-vpn-gateway vpn-europe-west
Send UDP 500 traffic to the gateway :
gcloud compute forwarding-rules create vpn-europe-west-rule-udp500 \
--project PROJECT_ID \
--region europe-west1 \
--address ON_PREMISES_VPN_EXTERNAL_ADDRESS \
--ip-protocol UDP \
--ports 500 \
--target-vpn-gateway vpn-europe-west
Send UDP 4500 traffic to the gateway :
gcloud compute forwarding-rules create vpn-europe-west-rule-udp4500 \
--project PROJECT_ID \
--region europe-west1 \
--address ON_PREMISES_VPN_EXTERNAL_ADDRESS \
--ip-protocol UDP \
--ports 4500 \
--target-vpn-gateway vpn-europe-west
To create a tunnel into the "on-premises" gateway, run the following
command:
gcloud compute vpn-tunnels create vpn-europe-west-tunnel-1 \
--project PROJECT_ID \
--region europe-west1 \
--peer-address CLOUD_VPN_IP \
--shared-secret SHARED_SECRET \
--ike-version 2 \
--local-traffic-selector 0 .0.0.0/0 \
--target-vpn-gateway vpn-europe-west
To create a static route to 10.0.1.0/24 , run the following command:
gcloud compute routes create "vpn-europe-west-tunnel-1-route-1" \
--project PROJECT_ID \
--network "on-prem-vpn-network" \
--next-hop-vpn-tunnel "vpn-europe-west-tunnel-1" \
--next-hop-vpn-tunnel-region "europe-west1" \
--destination-range "10.0.1.0/24"
You've created the Cloud VPN and "on-premises" gateways and initiated their
tunnels. The VPN gateways won't connect until you've created firewall rules to
allow traffic through the tunnel between them.
Creating firewall rules
You must create firewall rules for both sides of the VPN tunnel. These rules
allow all TCP, UDP, and ICMP traffic to ingress from the subnet on one side
of the VPN tunnel to the other.
To create the firewall rules for the Cloud VPN subnet, run the
following command:
gcloud compute firewall-rules create allow-tcp-udp-icmp-cloud-vpn \
--project = PROJECT_ID \
--direction = INGRESS \
--priority = 1000 \
--network = cloud-vpn-network \
--action = ALLOW \
--rules = tcp,udp,icmp \
--source-ranges = 10 .0.2.0/24
To create the firewall rules for the "on-premises" subnet, run the
following command:
gcloud compute firewall-rules create allow-tcp-udp-icmp-on-prem-vpn \
--project = PROJECT_ID \
--direction = INGRESS \
--priority = 1000 \
--network = on-prem-vpn-network \
--action = ALLOW \
--rules = tcp,udp,icmp \
--source-ranges = 10 .0.1.0/24
Create a firewall rule that lets you SSH into the VM instance on port 22 by
running the following command:
gcloud compute firewall-rules create on-prem-vpn-allow-ssh \
--project = PROJECT_ID \
--direction = INGRESS \
--priority = 1000 \
--network = on-prem-vpn-network \
--action = ALLOW \
--rules = tcp:22 \
--source-ranges = 0 .0.0.0/0
Checking the status of the VPN tunnel
To verify that your tunnel is up, complete the following steps:
Go to the VPN page in the Google Cloud console.
Go to the VPN page
Click the Google VPN Tunnels tab.
In the Status field for each tunnel, look for a green check mark and
the word "Established." If these items are there, your gateways have
negotiated a tunnel. If no mark appears after a few minutes, see
Troubleshooting .
For additional logging information related to your VPN tunnels, see
Checking VPN Logs
on the Troubleshooting page . For
example, you can view metrics about dropped packets, tunnel status,
received bytes, and sent bytes.
Now that you've successfully configured Cloud VPN with the necessary
gateways, tunnels, and firewall rules, you can create a secure connection
between the "on-premises" VM instance and the MLLP adapter running on
GKE.
Combining deployment to GKE and Cloud VPN
Whereas earlier in this tutorial you
tested the MLLP adapter locally
and sent HL7v2 messages over a non-VPN connection to the MLLP adapter ,
you'll now send messages from a Compute Engine VM over a secure
connection using Cloud VPN to the MLLP adapter running on
GKE. The messages are then forwarded to an HL7v2 store.
Re-creating the deployment
First, re-create the deployment on GKE so that the cluster
uses the settings you configured in
Configuring Cloud VPN :
To delete the mllp-adapter cluster you created, run the
gcloud container clusters delete
command. Enter the COMPUTE_ZONE value that you used when you
created the cluster .
gcloud container clusters delete mllp-adapter --zone = COMPUTE_ZONE
Follow the steps in
Deploying the MLLP adapter to Kubernetes Engine ,
but when you create the cluster in
GKE, add the cloud-vpn-network network and the
subnet-us-central-10-0-1 subnet that you created in
Creating custom VPN networks and subnets .
Make sure that the cluster creation command looks like the following:
gcloud container clusters create mllp-adapter \
--zone = COMPUTE_ZONE \
--service-account = CLIENT_EMAIL \
--network = cloud-vpn-network \
--subnetwork = subnet-us-central-10-0-1
where:
COMPUTE_ZONE is the zone
in which your cluster is deployed. When you configured Cloud VPN
in the previous section,
you set the "Google Cloud side" network to use us-central1 .
This "Google Cloud side" network is what the
GKE cluster runs on.
Use any of the following zones in us-central1 : us-central1-c ,
us-central1-a , us-central1-f , us-central1-b .
Note: The GKE cluster and the "Google Cloud side"
network must be in the same region or else routing won't work.
CLIENT_EMAIL is the identifier for the service account you want
to use. It uses the format
SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com.
Creating a new Compute Engine VM with network settings
The following steps show how to create a Linux virtual machine instance in
Compute Engine using the Google Cloud console. Unlike the
Compute Engine VM you created ,
this VM uses the
"'on-premises' side" network settings
to communicate with the GKE cluster over a VPN.
Console
In the Google Cloud console, go to the VM Instances page.
Go to the VM Instances page
Click Create instance .
Choose a Region and Zone for the instance that matches the
"'on-premises' side"
network settings: europe-west1 (Belgium) for the Region and
europe-west1-b for the Zone .
In the Boot disk section, click Change to begin configuring your boot disk.
On the Public images tab, choose version 9 of the Debian operating system.
Click Select .
In the Identity and API access section, select the service account you created.
In the Firewall section, select Allow HTTP traffic .
Expand the Management, security, disks, networking, sole tenancy section.
Under Network interfaces in the Networking tab, specify the network
details for the
"'on-premises' side"
network settings:
In the Network field, select on-prem-vpn-network .
In the Subnetwork field, select
subnet-europe-west-10-0-2 (10.0.2.0/24) .
Click Create to create the instance.
Allow a short time for the instance to start up. When it's ready, it's listed
on the VM Instances page with a green status icon.
gcloud
To create a compute instance, run the
gcloud compute instances create
method with the following options:
The ZONE that matches the
"'on-premises' side"
network settings: europe-west1-b for the Zone .
Allow HTTP traffic by specifying the http-server tag
The SERVICE_ACCOUNT that you created
gcloud compute instances create COMPUTE_NAME \
--project = PROJECT_ID
--zone = ZONE
--image-family = debian-10 \
--tags = http-server,https-server
--service-account = SERVICE_ACCOUNT
The output is similar to the following sample:
Created [ https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ COMPUTE_NAME ] .
NAME ZONE MACHINE_TYPE PREEMPTIBLE INTERNAL_IP EXTERNAL_IP STATUS
COMPUTE_NAME ZONE n1-standard-1 INTERNAL_IP EXTERNAL_IP RUNNING
To connect to the instance, complete the following steps:
Console
In the Google Cloud console, go to the VM Instances page.
Go to the VM Instances page
In the list of virtual machine instances, click SSH in the row of the
instance that you created.
gcloud
To connect to the instance, run the
gcloud compute ssh command:
gcloud compute ssh INSTANCE_NAME \
--project PROJECT_ID \
--zone ZONE
You now have a terminal window for interacting with your Linux instance.
In the terminal window, install Netcat :
sudo apt install netcat
Download the
hl7v2-mllp-sample.txt
file and save it to the instance.
To start sending HL7v2 messages through the MLLP adapter to your HL7v2 store,
in the directory where you downloaded the file, run the following command.
Use the value of LoadBalancer Ingress that was displayed when you
inspected the Service .
echo -n -e "\x0b $( cat hl7v2-mllp-sample.txt ) \x1c\x0d" | nc LOAD_BALANCER_INGRESS_IP_ADDRESS 2575
After running the command, the message is sent through the MLLP adapter to
your HL7v2 store. If the message was successfully ingested into the HL7v2
store, the command returns the following output:
MSA | AA | 20150503223000 | ILITY | FROM_APP | FROM_FACILITY | 20190312162410 || ACK | f4c59243-19c2-4373-bea0-39c1b2ba616b | P | 2 .5
This output indicates that the HL7v2 store responded with an AA
( Application Accept ) response type, meaning that the message was validated
and successfully ingested.
To view the message published to the Pub/Sub topic, run the
gcloud pubsub subscriptions pull
command:
gcloud pubsub subscriptions pull --auto-ack PUBSUB_SUBSCRIPTION
The command returns the following output about the ingested HL7v2 message:
┌----------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------┐
| DATA | MESSAGE_ID | ATTRIBUTES |
├----------------------------------------------------------------------------------------------------------------- | ----------------- | --------------- |
| projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ HL7V2_MESSAGE_ID | 123456789012345 | msgType = ADT |
└----------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------┘
You can also list the messages in your HL7v2 store to see if the message was
added:
curl
curl -X GET \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages"
If the request is successful, the server returns
the message's ID in a resource path:
{
"hl7V2Messages": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID "
}
]
}
PowerShell
$cred = gcloud auth application-default print-access-token
$headers = @ { Authorization = "Bearer $cred " }
Invoke-WebRequest `
-Method Get `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages" | Select-Object -Expand Content
If the request is successful, the server returns the message's ID in a resource path:
{
"hl7V2Messages": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /hl7V2Stores/ HL7V2_STORE_ID /messages/ MESSAGE_ID "
}
]
}
After completing this section, you have successfully deployed the MLLP adapter
to GKE and, over a VPN, securely sent an HL7v2 message from an
"on-premises" instance through the adapter and to the Cloud Healthcare API.
Clean up
To avoid incurring charges to your Google Cloud account for the
resources used in this tutorial, you can clean up the resources you created on
Google Cloud.
Delete the project
Follow the steps below to delete the project you created in this tutorial:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Troubleshooting
Adapter failures
After deploying the MLLP adapter to GKE, the adapter encounters
a failure.
Follow the steps in
Troubleshooting issues with deployed workloads .
Connection refused error when running locally
When testing the MLLP adapter locally , you
encounter the error Connection refused .
This error occurs with some Mac OS users. Instead of using the
--network=host flag, use -p 2575:2575 . Also, instead of setting
--receiver_ip=127.0.0.0 , set --receiver_ip=0.0.0.0 . The command should
look like this:
Note: When providing a value for
--pubsub_subscription , only enter the
subscription's name; do not enter the full URI. For example, if the URI
for your subscription is projects/my-projects/subscriptions/my-subscription ,
then provide only my-subscription .
docker run \
-p 2575 :2575 \
gcr.io/cloud-healthcare-containers/mllp-adapter \
/usr/mllp_adapter/mllp_adapter \
--hl7_v2_project_id = PROJECT_ID \
--hl7_v2_location_id = LOCATION \
--hl7_v2_dataset_id = DATASET_ID \
--hl7_v2_store_id = HL7V2_STORE_ID \
--export_stats = false \
--receiver_ip = 0 .0.0.0 \
--pubsub_project_id = PROJECT_ID \
--pubsub_subscription = PUBSUB_SUBSCRIPTION \
--api_addr_prefix = https://healthcare.googleapis.com:443/v1 \
--logtostderr
could not find default credentials error when running locally
When testing the MLLP adapter locally , you
encounter the error
healthapiclient.NewHL7V2Client: oauth2google.DefaultTokenSource: google: could not find default credentials. .
This error occurs when the adapter can't find your local
ADC credentials .
Make sure that you have
set up Application Default Credentials in your local environment .
Authentication errors
If you encounter any authentication errors when testing the MLLP adapter locally
that aren't covered in the rest of this section, re-run the docker run
command and add the -v ~/.config:/root/.config flag to the end of the command,
like so:
docker run \
-v ~/.config:/root/.config \
...
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
