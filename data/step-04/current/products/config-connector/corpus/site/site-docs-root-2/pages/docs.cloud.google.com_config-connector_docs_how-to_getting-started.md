---
title: "Getting started with Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/getting-started
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/getting-started
  title: "Getting started with Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Getting started with Config Connector
Standard
This guide shows the basics of Config Connector resource management by
teaching you how to complete the following tasks:
Enable a Google Cloud API.
Create and manage a Pub/Sub topic .
Before you begin
Before you start the exercises on this page, complete the following tasks:
Install Config Connector by completing all of the steps in
Manually installing the Config Connector Operator .
Configure Config Connector
to use a default namespace .
The namespace that you set as your default should be the same namespace that
you added an annotation to when you specified where to create your resources .
Config Connector uses the Service Usage API to enable service APIs. To perform
these steps, you need to enable the
Service Usage
API. You can enable this API by using the Google Cloud CLI:
gcloud services enable serviceusage.googleapis.com
Note: Enabling the API might take several minutes.
Discovering available Google Cloud resources
To see what kinds of Google Cloud resources you can create with
Config Connector, run:
kubectl get crds --selector cnrm.cloud.google.com/managed-by-kcc=true
The output is a list of all the resources your version of Config Connector can
create and manage.
For example, you can view the API description for the PubSubTopic
resource with kubectl describe :
kubectl describe crd pubsubtopics.pubsub.cnrm.cloud.google.com
You can also see information on available resources in
Config Connector resources .
Enabling the Pub/Sub service
Use Config Connector to enable the Pub/Sub API by applying
a YAML configuration to your cluster:
Create a file named enable-pubsub.yaml and copy the following YAML into it:
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
name : pubsub.googleapis.com
spec :
projectRef :
external : projects/ PROJECT_ID
Replace PROJECT_ID with your Google Cloud
project ID.
Use
kubectl apply
to apply the configuration to your cluster. To enable the Pub/Sub
API, run the following command:
kubectl apply -f enable-pubsub.yaml
Note: Enabling an API might take several minutes.
Creating a Pub/Sub instance
Create a file named pubsub-topic.yaml with the following content:
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
annotations :
cnrm.cloud.google.com/project-id : PROJECT_ID
labels :
LABEL_KEY : LABEL_VALUE
name : TOPIC_NAME
Replace the following:
PROJECT_ID : your Google Cloud project ID.
LABEL_KEY: LABEL_VALUE : a key-value pair of labels .
For example, environment: production .
TOPIC_NAME : the Pub/Sub topic name.
When you create a resource, Config Connector creates the resource if it doesn't
exist. If a Google Cloud resource already exists with the same
name, then Config Connector acquires the resource and manages it. To learn more
about acquiring an existing resource, see
Managing and deleting resources .
Use the
kubectl apply
command to create resources. To create the Pub/Sub topic, run the
following command:
kubectl apply -f pubsub-topic.yaml
Describing a resource
Use kubectl describe
to get details on a resource.
For example, to view all your Pub/Sub topic, run the following command:
kubectl describe pubsubtopics
In this list, you should see the Pub/Sub topic you created in the
previous section.
Verifying that a resource is ready
After you have created a Pub/Sub topic, you can check its
status.condition .
For example, to check if your Pub/Sub topic resource is ready, run the
following command:
kubectl wait --for=condition=READY pubsubtopics TOPIC_NAME
Replace TOPIC_NAME with the name of your Pub/Sub
topic.
You should see output similar to the following example:
pubsubtopic.pubsub.cnrm.cloud.google.com/TOPIC_NAME condition met
Updating a resource
You can update
metadata
on your resources by updating your YAML file and re-applying it with kubectl .
To change the label on the Pub/Sub topic you created in the previous
section, complete the following steps:
Modify the metadata section of your pubsub-topic.yaml file to change the
label:
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
annotations :
cnrm.cloud.google.com/project-id : PROJECT_ID
labels :
NEW_LABEL_VALUE
name : TOPIC_NAME
Replace the following:
PROJECT_ID : your Google Cloud project ID.
NEW_LABEL_VALUE : an updated value for the label you
added previously. For example, environment: staging .
TOPIC_NAME : the Pub/Sub topic name
Use kubectl apply to update the resource. Run the following command:
kubectl apply -f pubsub-topic.yaml
Check the Pub/Sub instance for the change in name:
kubectl describe pubsubtopics
Your topic should have the new label.
Deleting a resource
Use kubectl delete
to delete resources. For example, to delete the PubSubTopic you created
earlier, run kubectl delete with your pubsub-topic.yaml file:
kubectl delete -f pubsub-topic.yaml
You receive confirmation that the resource was deleted:
pubsubtopic.pubsub.cnrm.cloud.google.com " TOPIC_NAME " deleted
By default, Config Connector deletes the PubSubTopic resource. If you prefer
to keep this resource, see the instructions in
Managing and deleting resources .
What's next
Learn about how Config Connector models Google Cloud resources
with Kubernetes constructs .
See the Google Cloud resources
Config Connector can manage.
Use Config Connector to
manage your existing Google Cloud resources .
See additional examples of how to use Config Connector on the
GitHub repository .
Learn how Kubernetes handles
declarative configuration
of objects.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
