---
title: "Configuring Pub/Sub notifications \_|\_ Cloud Source Repositories \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/configuring-notifications
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/configuring-notifications
  title: "Configuring Pub/Sub notifications \_|\_ Cloud Source Repositories \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Effective June 17, 2024, Cloud Source Repositories isn't available to new customers. For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
If your organization hasn't previously used Cloud Source Repositories, you can't enable the API or use Cloud Source Repositories. New projects not connected to an organization can't enable the Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to June 17, 2024 are not affected by this change.
Home
Documentation
Application development
Cloud Source Repositories
Guides
Send feedback
Configuring Pub/Sub notifications
Stay organized with collections
Save and categorize content based on your preferences.
You can receive notifications of changes to your Google Cloud
repositories by using Pub/Sub. These
notifications inform you when a user creates a new repository, deletes a
repository, or pushes a change to an existing repository. You can choose to
configure notifications for specific repositories or across an entire
Google Cloud project.
To learn more about Pub/Sub, see
What is Pub/Sub?
Before you begin
If you haven't already done so, create a repository .
Verify that you have the appropriate permissions to create topics and
subscriptions. For more information, see
Access control .
Ensure you have a service account that can publish to your topic. By
default, Cloud Source Repositories uses the Compute Engine default service
account to publish messages. For more information, see
Pub/Sub notifications for Cloud Source Repositories .
Create a Pub/Sub topic
For each Cloud Source Repositories project or repository for which you'd like
notifications, you need to create a Pub/Sub topic. You can create
a topic using either the Google Cloud console or the gcloud command-line
tool.
When you create a topic, you need to use a qualified URI for your repository.
The qualified URI is:
projects /[ PROJECT_ID ]/ topics /[ TOPIC_NAME ]
Where:
[PROJECT_ID] is your Google Cloud project ID.
[TOPIC_NAME] is the name of the topic.
To create a topic, follow these steps.
Console
In the Google Cloud console, go to the Pub/Sub Topics
page.
Go to the Topics page
Click Create Topic .
Enter a topic name with the URI:
projects/[PROJECT_ID]/topics/[TOPIC_NAME]
Where:
[PROJECT_ID] is your Google Cloud project ID.
[TOPIC_NAME] is the name of the topic.
Click Create .
The Topic details page opens.
gcloud
In a terminal window, run the following command:
gcloud pubsub topics create projects /[ PROJECT_ID ]/ topics /[ TOPIC_NAME ]
Where:
[PROJECT_ID] is your Google Cloud project ID.
[TOPIC_NAME] is the name of the topic.
Note: If this command returns a Resource already exists in the project
error, you might already have a Cloud Source Repositories topic.
To learn more about the gcloud pubsub topics command, see the
topics documentation .
Create a Pub/Sub subscription
To receive events published to a topic, you need to create a
Pub/Sub subscription .
A subscriber app
receives messages from your repository's topic. Subscribers can respond to your
repository events by sending notifications or triggering a build.
To create a subscription, follow these steps.
Console
In the Google Cloud console, go to the Pub/Sub Topics
page.
Go to the Topics page
Click the name of your project's topic.
Click Create Subscription .
The Add subscription to topic page opens.
Enter a subscription name:
projects/[PROJECT_ID]/subscriptions/[SUBSCRIPTION_NAME]
Where:
[PROJECT_ID] is your Google Cloud project ID.
[SUBSCRIPTION_NAME] is the name of the Pub/Sub
subscription.
Leave Delivery type set to Pull .
Click Create .
gcloud
In a terminal window, run the following command:
gcloud pubsub subscriptions create [ SUBSCRIPTION_NAME ] --topic=[TOPIC_NAME]
Where:
[SUBSCRIPTION_NAME] is the name of the Pub/Sub
subscription.
[TOPIC_NAME] is the name of the topic.
Note: Use the optional flag --ack-deadline to configure how many seconds
the system waits for acknowledgement from the subscriber before re-
attempting delivery. Without this flag, the default deadline is 10 seconds.
To learn more about the gcloud pubsub subscriptions command, see the
subscriptions documentation .
Add a topic
You can associate a Pub/Sub topic with a Google Cloud
project or repository by using the Google Cloud CLI.
To associate a topic with an entire project, enter the following command:
gcloud source project - configs update --add-topic=[TOPIC_NAME] --service-account=[SERVICE_ACCOUNT_NAME]
Where:
[TOPIC_NAME] is the name of the Pub/Sub topic.
[SERVICE_ACCOUNT_NAME] is the name of your Cloud Build service account.
To associate a topic with a specific repository, enter the following command:
gcloud source repos update [ REPOSITORY_NAME ] --add-topic=[TOPIC_NAME] --service-account=[SERVICE_ACCOUNT_NAME]
Where:
[REPOSITORY_NAME] is the name of your Google Cloud repository.
[TOPIC_NAME] is the name of the Pub/Sub topic.
[SERVICE_ACCOUNT_NAME] is the name of your Cloud Build
service account.
The service account must be in the same project as the repository, and it
must have pubsub.topics.publish permission to publish a message on the
specified topic. You must have iam.serviceAccounts.actAs permission on the
service account. If the service account isn't specified, it defaults to the
Compute Engine default service account.
Note: For information on how to delete a Pub/Sub topic, see
Managing topics and subscriptions .
Remove a topic
You can remove an association between a project or repository and a
Pub/Sub topic by using the Google Cloud CLI.
To remove a topic from an entire project, enter the following command:
gcloud source project - configs update --remove-topic=[TOPIC_NAME]
To remove a topic from a specific repository, enter the following command:
gcloud source repos update [ REPOSITORY_NAME ] --remove-topic=[TOPIC_NAME]
Note: For information on how to delete a Pub/Sub topic, see
Managing topics and subscriptions .
Set the topic format
Notifications for Cloud Source Repositories can use either the JSON or Protocol
Buffers format. To set the format for a topic, you can use the
--message-format parameter when you add the topic:
gcloud source project - configs update --add-topic=[TOPIC_NAME] --message-format=[json|protobuf]
You can also use the set-format command:
gcloud source project - configs update --update-topic=[TOPIC_NAME] --message-format=[json|protobuf]
What's next
Learn more about
Pub/Sub notifications for Cloud Source Repositories .
Read the
Pub/Sub documentation .
For an in-depth explanation of Pub/Sub, see
What is Pub/Sub? .
Learn more about
Pub/Sub access control roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
