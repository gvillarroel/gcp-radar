---
title: "Migrate from Pub/Sub Lite to Google Cloud Managed Service for Apache Kafka\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/migrate-pubsub-lite-to-managed-service-for-apache-kafka
  title: "Migrate from Pub/Sub Lite to Google Cloud Managed Service for Apache Kafka\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Guides
Send feedback
Migrate from Pub/Sub Lite to Google Cloud Managed Service for Apache Kafka
Stay organized with collections
Save and categorize content based on your preferences.
Note: Pub/Sub Lite is deprecated. Effective June 30, 2026,
Pub/Sub Lite will be turned down.
Current customers: Pub/Sub Lite remains functional until June 30, 2026.
If you have not used Pub/Sub Lite within the 90-day period preceding July 15, 2025
(April 15, 2025 - July 15, 2025), you won't be able to access Pub/Sub Lite starting on
July 15, 2025.
New customers: Pub/Sub Lite is no longer available for new customers after September 24, 2024.
You can migrate your Pub/Sub Lite service to
Google Cloud Managed Service for Apache Kafka
or Pub/Sub .
This document details how to migrate data from a Pub/Sub Lite topic to
a Managed Service for Apache Kafka topic.
Before you begin
Enable the Google Kubernetes Engine API.
Identify a Pub/Sub Lite topic to migrate. Decide on a name for
the target topic in Google Cloud Managed Service for Apache Kafka. Also determine which Managed Service for Apache Kafka Cluster you are migrating to.
Migration workflow
To migrate your data, you complete the following tasks. The specific details of these
tasks are shown later on this page.
Create a Google Kubernetes Engine service account .
Create a Google Kubernetes Engine cluster .
Customize a docker image with the configuration
details of your topics.
Deploy the docker image to a Google Kubernetes Engine cluster.
Inside the image, Kafka Connect and the Pub/Sub Lite plugin for Kafka
Connect are used to subscribe to a new Pub/Sub Lite subscription, and
publish to Managed Service for Apache Kafka.
Create a Google Kubernetes Engine service account
This section describes how to create a IAM service account that has
the required permissions to run a Google Kubernetes Engine cluster.
In the Google Cloud console , Create a new IAM service account with the minimum permissions required to operate Google Kubernetes Engine.
Grant the following additional IAM roles to the service account. These
roles facilitate the migration process.
Managed Kafka Client Role ( roles/managedkafka.client )
Pub/Sub Lite Subscriber Role ( roles/pubsublite.subscriber )
Pub/Sub Lite Viewer Role ( roles/pubsublite.Viewer )
Artifact Registry Reader Role ( roles/artifactregistry.reader )
Create a GKE cluster
This section describes how to create a GKE cluster that uses the service
account you created from the previous step.
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
Click add_box Create .
The Create an Autopilot cluster page appears.
Under the Advanced Settings tab, change the service account to the IAM
service account that you created in the previous step.
Optionally, configure other settings
as needed.
To create the cluster, click Create .
Create a Kafka Connect docker image
This section describes how to create and customize a Kafka Connect docker image
for your topic.
Clone the Pub/Sub Lite migration GitHub repository.
For the IAM service account you created earlier, generate a json account key .
Use a base64 tool to encode the json key. For example,
Linux
base64 -w 0 < my_service_account.json > password.txt
Mac
base64 < account_key_json > password.txt
In the secrets files in the
GitHub repository, update the following files with the appropriate
information to link the repository to your Google Cloud project,
Pub/Sub Lite, and Kafka.
.gcp/gmk_sasl_service_account → sensitive
<service-account-name>@<gcp-project>.iam.gserviceaccount.com
.gcp/gmk_sasl_service_account_key → sensitive
<base64 encoded sasl service account key>
.gcp/kafka_ssl_truststore_location → sensitive
<full path of the ssl truststore jks file location>
.gcp/kafka_ssl_truststore_password → sensitive
<password for the ssl truststore jks>
.gcp/gmk_bootstrap_servers → environment specific
bootstrap.<google-managed-kafka-cluster-name>.<google-managed-kafka-cluster-region name>.managedkafka.<google-managed-cluster-host-project-name>.cloud.goog:9092
.gcp/kafka_connect_group_id → environment specific
<Kafka Connect group id (unique per worker group) for the Kafka connect workers in distributed mode>
.gcp/kafka_config_storage_topic → environment specific
<Kafka topic name used by Kafka Connect for tracking the config>
.gcp/kafka_offset_storage_topic → environment specific
<Kafka topic name used by Kafka Connect for tracking the offsets>
.gcp/kafka_status_storage_topic → environment specific
<Kafka topic name used by Kafka Connect for tracking the status>
.gcp/kafka_sink_topic → environment specific
<target sink Kafka topic name used by Kafka Connect for migrating the data from the Pub/Sub Lite topic>
.gcp/pubsub_lite_gcp_project → environment specific
<Google Cloud project that hosts the Pub/Sub Lite source subscription to be used for migrating the Pub/Sub Lite topic to sink the Kafka topic>
.gcp/pubsub_lite_gcp_location → environment specific
<Google Cloud location for the Pub/Sub Lite source subscription tor migrate the Pub/Sub Lite topic to sink Kafka topic>
.gcp/pubsub_lite_subscription → environment specific
<Pub/Sub Lite source subscription name to be used for migrating the pubsub lite topic to Kafka topic>
Build the docker image by running the docker/build-image.sh file.
./push-image.sh
Update the docker/push-image.sh image with your Google Cloud project name.
Push the image to Artifact Registry by running the docker/push-image.sh
file.
./push-image.sh
Deploy a Kafka Connect Workload
This section describes how to deploy the Kafka Connect docker image to a
Google Kubernetes Engine cluster.
Install and configure
kubectl with
the authentication plugin.
Generate the
kubeconfig
for your Google Kubernetes Engine cluster.
Create and grant a Google Kubernetes Engine service account with the correct permissions
to impersonate your IAM account.
$KSA_NAME = KUBERNETES_SERVICE_ACCOUNT_NAME
$PROJECT_ID = GOOGLE_CLOUD_PROJECT_ID
$IAM_SA_NAME = IAM_SERVICE_ACCOUNT_NAME
kubectl create serviceaccount $KSA_NAME \
--namespace=default
gcloud iam service-accounts add-iam-policy-binding \
$IAM_SA_NAME@$PROJECT_ID.iam.gserviceaccount.com \
--role roles/iam.workloadIdentityUser \
--member "serviceAccount:$PROJECT_ID.svc.id.goog[default/$KSA_NAME]"
kubectl annotate serviceaccount $KSA_NAME \
--namespace default \
iam.gke.io/gcp-service-account=$IAM_SA_NAME@$PROJECT_ID.iam.gserviceaccount.com
Open the K8s.yaml file in a text editor and update the following values.
Replace <workflow_name> with the name for your Kafka Connect workflow.
Replace <gke_service_account> with the Google Kubernetes Engine service account
name.
Run the K8s.yaml file.
kubectl create -f k8s.yaml
This creates a Kafka Connect workload running in your Google Kubernetes Engine
cluster and launches the Pub/Sub Lite connector to move data from your
Pub/Sub Lite topic to Google Cloud Managed Service for Apache Kafka.
Monitor a job
Once a job is running, you can inspect it by connecting to the Kafka Connect
REST endpoint.
In the Google Cloud console, go to the Deployment detail > Workload page .
Click your Kubernetes deployment.
The deployment details page opens.
Under Exposing services , click Expose , then add port 8083 .
Enable port forwarding.
The default link that you get from setting up port forwarding returns
an output similar to the following:
{"version":"3.4.0","commit":"2e1947d240607d53","kafka_cluster_id":"6H6qWA0dQnuK31hBPqYUDg"}
If you append the /connectors to the link, it lists the running connector,
For example:
["PubSubLiteSourceConnector"]
For example, checking this link
url:8083/connectors/PubSubLiteSourceConnector/status yields a list of tasks,
and their status.
{"name":"PubSubLiteSourceConnector","connector":{"state":"RUNNING","worker_id":"10.53.0.157:8083"},"tasks":[{"id":0,"state":"RUNNING","worker_id":"10.53.0.139:8083"},{"id":1,"state":"RUNNING","worker_id":"10.53.0.157:8083"},{"id":2,"state":"RUNNING","worker_id":"10.53.0.139:8083"},{"id":3,"state":"RUNNING","worker_id":"10.53.0.157:8083"},{"id":4,"state":"RUNNING","worker_id":"10.53.0.157:8083"},{"id":5,"state":"RUNNING","worker_id":"10.53.0.139:8083"},{"id":6,"state":"RUNNING","worker_id":"10.53.0.139:8083"},{"id":7,"state":"RUNNING","worker_id":"10.53.0.157:8083"},{"id":8,"state":"RUNNING","worker_id":"10.53.0.139:8083"},{"id":9,"state":"RUNNING","worker_id":"10.53.0.157:8083"}],"type":"source"}
Phased Migration
After your Pub/Sub Lite topic is migrated to Kafka, you can
migrate your subscribers and publishers. To do this, follow these
steps.
Migrate subscribers . Update your subscribers to consume
Kafka topics instead of Pub/Sub Lite topics.
This should be done gradually in a controlled development environment.
Ideally, you should maintain two sets of subscribers to verify that identical messages
are received from both Kafka and Pub/Sub Lite.
Once the correct behavior is verified,
you can decommission your Pub/Sub Lite
subscribers.
Migrate Publishers . Update your publishers to directly publish to
Kafka topics instead of Pub/Sub Lite topics.
Similar to migrating subscribers, this should be done gradually in a
controlled development environment. If duplicated data isn't a concern, you
can maintain two sets of publishers to verify the behavior. After you verify
the behavior, decommission your Pub/Sub Lite publishers.
After all of your subscribers and publishers are migrated, decommission the
migration tool by deleting the workload and the cluster.
Delete the original Pub/Sub Lite topic.
What's next
Learn more about Managed Service for Apache Kafka
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
