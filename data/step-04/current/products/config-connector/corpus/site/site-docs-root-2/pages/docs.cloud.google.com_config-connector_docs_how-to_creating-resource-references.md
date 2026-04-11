---
title: "Creating resource references \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references
  title: "Creating resource references \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
Creating resource references
A Google Cloud resource created with Config Connector can
reference other resources. Config Connector defines these relationships through
resource references . This topic explains how to create resources with
references.
Types of references
In Config Connector, references can be dependencies or links .
Dependencies
A dependency reference refers to an existing Google Cloud
resource necessary for the Config Connector resource. For example, a firewall
rule cannot exist without a network
Links
A link reference ties independent resources together. For example, a
Project can be associated with a Billing Account.
Specifying resource references
You specify resource references in the resource's spec . The field's name
is the resource's short name followed by Ref . For example:
The reference to a PubSubTopic named topic is topicRef .
The reference to a StorageBucket named bucket is bucketRef .
The reference is an object with a single field ( name ). The resource in
resourceRef is replaced with the reference's name.
The following YAML file describes a Pub/Sub PubSubSubscription that references
a PubSubTopic named myTopic .
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubSubscription
metadata :
name : pubsubsubscription-referencing-topic
spec :
topicRef :
name : myTopic
Pub/Sub example
Create a PubSubTopic
In this example, you create a PubSubSubscription that depends on a
PubSubTopic .
Copy the following into a file named pubsub-topic.yaml :
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
name : TOPIC_NAME
Replace TOPIC_NAME with your desired PubSubTopic name
For example, to create a topic named myTopic you could use the following YAML
file:
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
name : myTopic
Create the PubSubTopic with kubectl apply .
kubectl --namespace CC_NAMESPACE apply -f pubsub-topic.yaml
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Create a PubSubSubscription
Copy the following into a file named `pubsub-subscription.yaml:
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubSubscription
metadata :
name : pubsubsubscription-referencing-topic
spec :
topicRef :
name : TOPIC_NAME
Replace TOPIC_NAME with the PubSubTopic name you used in step 1.
For example, the YAML referencing the topic myTopic you created earlier is:
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubSubscription
metadata :
name : pubsubsubscription-referencing-topic
spec :
topicRef :
name : myTopic
Create the PubSubSubscription with kubectl apply .
kubectl --namespace CC_NAMESPACE apply -f pubsub-subscription.yaml
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
External references
Beta
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Config Connector can reference resources that it does not manage. These are
known as External References . For example, the ComputeURLMap below
references a BackendService named test-backendservice .
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeURLMap
metadata :
name : test-urlmap
spec :
location : global
defaultService :
backendServiceRef :
external : https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/backendServices/test-backendservice
The format of values accepted by external depends on the resource. Consult the
documentation for particular resources in the Resource
reference . You can find out what
values external accepts by reading the descriptions of the resource's
external fields.
IAMPolicy, IAMPartialPolicy and IAMPolicyMember
IAMPolicy , IAMPartialPolicy and IAMPolicyMember also supports External
References. For example, the IAMPolicyMember below references a Project with
the project ID test-project .
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicyMember
metadata :
name : test-iampolicymember
spec :
member : serviceAccount:test-serviceaccount@test-project. iam.gserviceaccount.com
role : roles/storage.admin
resourceRef :
kind : Project
external : projects/test-project
Note: You must set values for kind when using external
references with IAMPolicy , IAMPartialPolicy and IAMPolicyMember .
You can find out what format the external field accepts by reading the
reference documentation . The
IAMPolicy ,
IAMPartialPolicy
and IAMPolicyMember
pages list the accepted format for all supported resources. The formats are listed
in the "External Reference Formats" column of the Supported Resources table.
You can also go to an individual resource's reference page (for example,
PubSubTopic )
and look at the value listed in the "IAM External Reference Format" row of the
resource's summary table.
Cross-namespace references
Config Connector allows resources to reference resources in other namespaces.
However, if Config Connector is installed in
namespaced-mode ,
you need to grant Config Connector additional permissions to allow for
cross-namespace references.
For example, if you want to create resources in NAMESPACE_A that
reference resources in NAMESPACE_B , you need create the following
RoleBinding :
apiVersion : rbac.authorization.k8s.io/v1
kind : RoleBinding
metadata :
namespace : NAMESPACE_B
name : allow-references-from- NAMESPACE_A
roleRef :
apiGroup : rbac.authorization.k8s.io
kind : ClusterRole
name : cnrm-viewer
subjects :
- kind : ServiceAccount
name : cnrm-controller-manager- NAMESPACE_A
namespace : cnrm-system
What's next
Review the Resource reference to
learn about the resources Config Connector supports.
See how you can use a resource reference to a
Secret in your Config Connector
cluster.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
