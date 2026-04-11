---
title: "Securing access to resources with IAM \_|\_ Config Connector \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources
  title: "Securing access to resources with IAM \_|\_ Config Connector \_|\_ Google\
    \ Cloud Documentation"
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
Securing access to resources with IAM
Kubernetes users and service accounts need permissions to manage
Config Connector resources. With Config Connector, your project's
control plane
can be managed by identities that use Kubernetes
Role-Based Access Control
(RBAC). You can also reference Identity and Access Management (IAM) Policies.
Resources that can reference IAMPolicy and IAMPolicyMember are listed in the
Resource reference .
These resources have the property "Can Be Referenced by
IAMPolicy/IAMPolicyMember".
This topic explains how to secure access to Google Cloud resources
using Identity and Access Management.
Before you begin
Install Config Connector on your cluster .
Securing control plane access with RBAC
In this example, you will create a service account and grant it permissions to
manage a PubSubTopic . This service account cannot manage other types of
Config Connector resources.
Create a file named pubsub-topic-service-account.yaml with the
following contents:
apiVersion : v1
kind : ServiceAccount
metadata :
name : pubsub-topic-service-account
namespace : default
Apply this to create the pubsub-topic-service-account service account:
kubectl apply -f pubsub-topic-service-account.yaml --namespace CC_NAMESPACE
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Confirm pubsub-topic-service-account cannot create
PubSubTopic resources by verifying the output of the following command
contains no :
kubectl auth can-i get pubsubtopics --as=system:serviceaccount:default:pubsub-topic-service-account
Next, create a
ClusterRole
that allows Pub/Sub topic creation.
The ClusterRole can only manage resources that have values specified in
rules.apiGroups and rules.resources . To find values for apiGroups and
resources , see the
reference for your
resources.
Create a file named pubsub-topic-editor-role.yaml with the following
contents:
apiVersion : rbac.authorization.k8s.io/v1
kind : ClusterRole
metadata :
creationTimestamp : null
name : pubsub-topic-editor
rules :
- apiGroups :
- pubsub.cnrm.cloud.google.com
resources :
- pubsubtopics
verbs :
- get
- list
- watch
- create
- update
- patch
- delete
Apply pubsub-topic-editor.yaml to create the ClusterRole :
kubectl apply -f pubsub-topic-editor-role.yaml --namespace CC_NAMESPACE
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Next, create a RoleBinding between the ClusterRole and your service account.
Create a file named pubsub-topic-editor-rolebinding.yaml with the
following contents:
apiVersion : rbac.authorization.k8s.io/v1
kind : RoleBinding
metadata :
name : pubsub-topic-editor-rolebinding.
subjects :
- kind : ServiceAccount
name : pubsub-topic-service-account
roleRef :
apiGroup : rbac.authorization.k8s.io
kind : ClusterRole
name : pubsub-topic-editor
Apply pubsub-topic-editor-rolebinding.yaml to your cluster.
kubectl apply -f pubsub-topic-editor-rolebinding.yaml --namespace CC_NAMESPACE
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Confirm the pubsub-topic-service-account is allowed to create
PubSubTopic resources by confirming the output of the following command is
yes :
kubectl auth can-i get pubsubtopics \
--as=system:serviceaccount:default:pubsub-topic-service-account
Cleaning up
Use kubectl delete to remove the Service Account, IAM Role and
Rolebinding.
kubectl delete -f pubsub-topic-editor-rolebinding.yaml --namespace CC_NAMESPACE
kubectl delete -f pubsub-topic-editor-role.yaml --namespace CC_NAMESPACE
kubectl delete -f pubsub-topic-service-account.yaml --namespace CC_NAMESPACE
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Securing the data plane with IAM Policies
In this example, you use the permissions granted earlier to create a
PubSubTopic and limit access to it with an IAMPolicyMember resource.
Create a file named pubsub-topic-sample.yaml with the following content:
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
name : pubsubtopic-sample
Apply pubsub-topic-sample.yaml with kubectl :
kubectl apply -f pubsub-topic-sample.yaml --namespace CC_NAMESPACE
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Create a file named iampolicymember.yaml with the following content,
replacing EMAIL_ADDRESS with your Google Cloud account's
email address:
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicyMember
metadata :
name : iampolicymember-sample
spec :
resourceRef :
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
name : pubsubtopic-sample
role : roles/pubsub.admin
member : "user: EMAIL_ADDRESS "
Apply the iampolicymember.yaml .
kubectl apply -f iampolicymember.yaml --namespace CC_NAMESPACE
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Confirm the policy has been applied to Google Cloud by running this command
and looking for your email address in the output, replacing
PROJECT_ID with your project ID:
gcloud beta pubsub topics get-iam-policy projects/ PROJECT_ID /topics/pubsubtopic-sample
Access to your Pub/Sub topics is now protected with an IAMPolicyMember .
Cleaning up
Use kubectl delete to remove the Pub/Sub topic and IAMPolicyMember
from your Google Cloud Project.
kubectl delete -f iampolicymember.yaml --namespace CC_NAMESPACE
kubectl delete -f pubsub-topic-sample.yaml --namespace CC_NAMESPACE
What's next
Use Secrets to pass information securely to Google Cloud resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
