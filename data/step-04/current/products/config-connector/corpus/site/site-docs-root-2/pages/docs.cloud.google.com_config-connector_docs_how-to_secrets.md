---
title: "Using Secrets to store sensitive data \_|\_ Config Connector \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/secrets
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/secrets
  title: "Using Secrets to store sensitive data \_|\_ Config Connector \_|\_ Google\
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
Using Secrets to store sensitive data
You can use a
Secret
to store sensitive configuration information, such as passwords and access keys,
in your GKE cluster. This page describes how Config Connector
uses Secret values when configuring your Google Cloud resources.
Overview
This section presents an overview on using Secrets with Config Connector.
Using a Secret when creating a resource
You can use the data inside a Secret when you create a resource. In
Passing a Secret to a resource , you create
a Secret that contains a password, then reference the Secret for a user on a
Cloud SQL database.
Updating Secrets
When you apply an update to a Secret, Config Connector updates the resource when
it next reconciles your desired state. For example, if you update the Secret
that is referenced as the password for an SQLUser , Config Connector will then
update the user's password.
Deleting Secrets
If you delete a Secret that is in use by a resource, Config Connector will
not remove the resource's reference to the Secret. For example, if you create
an SQLUser with a password that references a Secret and then delete the Secret,
the password will remain on the SQLUser.
Troubleshooting
If you create a resource that references a Secret that does not exist,
Config Connector will create a DependencyNotFound or DependencyInvalid
Event .
Secrets and Kubernetes namespaces
Because Kubernetes does not allow access to secrets across Namespaces, if you
are using the same secret value for resources from different Namespaces, you
must apply secrets in every Namespace.
Passing a Secret to a resource
In this section, you will create a Cloud SQL server and set the default
user's password with a Secret.
Before you begin
To complete these steps, you need the following:
Config Connector installed on a Kubernetes cluster
The Cloud SQL Admin API enabled in your project. To confirm that the API
is enabled, run the following gcloud command:
gcloud services list --filter = sqladmin.googleapis.com
If the command prints Listed 0 items. , you need to enable the API. You can
enable the API with Config Connector and the Resource Manager API, or a gcloud
command.
Service Usage API
Config Connector uses the Service Usage API to enable service APIs. To perform
these steps, you need to enable the
Service Usage
API. You can enable this API by using the Google Cloud CLI:
gcloud services enable serviceusage.googleapis.com
Note: Enabling the API might take several minutes.
Copy the following YAML into a file named enable-sql.yaml
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
name : sqladmin.googleapis.com
Apply enable-sql.yaml to your cluster with kubectl :
kubectl apply -f enable-sql.yaml --namespace CC_NAMESPACE
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
gcloud
To enable the SQL Admin API with the Google Cloud CLI, run the following command:
gcloud services enable sqladmin.googleapis.com
Creating a Cloud SQL Server
Copy the YAML below into a file named sql-server-example.yaml . This
creates a Cloud SQL server named sqlserver-1 and a user named
sqluser-sample . The password for sqluser-sample is set by a
resource reference
to a secret named secret-1 .
apiVersion : sql.cnrm.cloud.google.com/v1beta1
kind : SQLInstance
metadata :
labels :
label-one : "sql-server-example"
name : sqlserver-1
spec :
region : us-central1
databaseVersion : MYSQL_5_7
settings :
tier : db-g1-small
---
apiVersion : sql.cnrm.cloud.google.com/v1beta1
kind : SQLUser
metadata :
name : sqluser-sample
spec :
instanceRef :
name : sqlserver-1
host : "%"
password :
valueFrom :
secretKeyRef :
name : secret-1 # Name of the Secret object to extract a value from
key : password # Key that identifies the value to be extracted
Copy the YAML below into a file named example-secret.yaml . Edit the
value for password before saving. This declares secret-1 , referenced
in the prior section.
apiVersion : v1
kind : Secret
metadata :
name : secret-1
stringData :
password : PASSWORD
Apply the configurations to your cluster.
kubectl apply -n CC_NAMESPACE -f example-secret.yaml
kubectl apply -n CC_NAMESPACE -f sql-server-example.yaml
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Config Connector creates the Cloud SQL instance and a user with the
password you specified. This might take several minutes.
Wait several minutes, and confirm the instance is available:
gcloud sql instances list --filter="name=sqlserver-1"
The output should include a server with a STATUS of RUNNABLE .
Confirm that you can connect to the SQL instance:
gcloud sql connect sqlserver-1 --user=sqluser-sample
You are prompted for your password.
Cleaning up
If you do not wish to keep the instance, delete the Cloud SQL instance, user,
and secret with kubectl .
kubectl delete -n CC_NAMESPACE -f sql-server-example.yaml
kubectl delete -n CC_NAMESPACE -f example-secret.yaml
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
What's next
Learn how to specify
Resource references
between Config Connector resources.
Take a deep dive into
Kubernetes Secrets .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
