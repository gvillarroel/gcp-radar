---
title: "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources
  title: "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\
    \ Documentation"
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
Managing and deleting resources
This page explains how Config Connector
manages an existing resource and handles
deleting resources .
When you define a resource by using Config Connector, one of the following
actions occur:
If the resource doesn't exist, Config Connector creates the resource. For an example of creating a new resource, see
Getting started .
If a resource with the same name already exists, Config Connector acquires
that resource and starts managing it. Config Connector checks for the name in either the
organization, project, or folder .
This page explains in detail how Config Connector acquires, manages, and handles
deletion of resources.
You can alternatively manage resources using the resourceID field. Some resources
can be acquired only by using the resourceID field. Some resources can only be created
as new resources and not acquired. To learn more, see
Managing resources with the resourceID field .
Acquiring an existing resource
This section describes how you acquire an existing resource with Config Connector, using a BigQuery resource
as an example.
Before you begin
Enable the BigQuery API .
Confirm you have access to the bq
command line tool. If you don't have bq , use
Cloud Shell or
install it with the gcloud CLI .
Acquiring a BigQuery dataset
Config Connector acquires, or takes control of, resources when the values in the
manifest and the resource name
match. If a resource does not have a name (for example, a Project ID), the ID of
the resource is used.
By creating an empty BigQuery dataset and then acquiring the dataset
with Config Connector, you learn how Config Connector handles existing
resources.
Create a BigQuery dataset named bigquerydatasetsample with bq .
bq --location=US mk \
--dataset \
--default_table_expiration 3600 \
--description description \
PROJECT_ID :bigquerydatasetsample
Copy the following contents into a file named bq-sample.yaml .
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigquerydatasetsample
spec :
defaultTableExpirationMs : 3600000
description : "BigQuery Dataset Sample"
friendlyName : bigquerydataset-sample
location : US
Apply the yaml to your cluster.
kubectl apply --namespace CC_NAMESPACE -f bq-sample.yaml
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
Use kubectl describe to see details on the dataset.
kubectl describe --namespace CC_NAMESPACE bigquerydataset bigquerydatasetsample
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
The output from kubectl describe includes metadata on the resource's status
and ownership.
Deleting the dataset
By default, after Config Connector acquires and manages a resource, deleting the
object from your cluster will delete the resource. If you prefer to keep the
dataset, set the resource's
deletion-policy .
For example, deleting the manifest that acquired bigquerydataset-sample will
delete the dataset from BigQuery.
You can delete the bigquerydataset-sample dataset with kubectl delete .
kubectl delete --namespace CC_NAMESPACE -f bq-sample.yaml
Replace CC_NAMESPACE with the namespace Config Connector
manages resources from.
The output of kubectl confirms the deletion:
bigquerydataset.bigquery.cnrm.cloud.google.com "bigquerydatasetsample" deleted
Use bq to confirm the dataset no longer exists.
bq show PROJECT_ID :bigquerydatasetsample
The output of the command includes Not Found .
Keeping resources after deletion
Warning: When deleting a Config Connector resource the associated
Google Cloud resource is deleted by default. To keep the
Google Cloud resource, add the following to the Config Connector resource
YAML before deleting:
...
metadata :
annotations :
cnrm.cloud.google.com/deletion-policy : abandon
...
For example, the YAML for the BigQuery dataset described earlier
including the abandon deletion policy is below:
apiVersion : bigquery.cnrm.cloud.google.com/v1beta1
kind : BigQueryDataset
metadata :
name : bigquerydatasetsample
annotations :
cnrm.cloud.google.com/deletion-policy : abandon
spec :
defaultTableExpirationMs : 3600000
description : "BigQuery Dataset Sample"
friendlyName : bigquerydataset-sample
location : US
Resources with restrictions around acquisition
Some resources can't be acquired following the instructions in the preceding
section. This section details the limitations around acquisition for some resources.
Resources with a service-generated resource ID
You can only acquire Google Cloud resources which have a
service-generated resource
ID
by using the resourceID field.
The following Config Connector resources correspond to Google Cloud
resources which have a service-generated resource ID:
AccessContextManagerAccessPolicy
ApigeeOrganization
BillingBudgetsBudget
CloudIdentityGroup
CloudIdentityMembership
ComputeFirewallPolicy
DataCatalogPolicyTag
DataCatalogTaxonomy
DLPDeidentifyTemplate
DLPInspectTemplate
DLPJobTrigger
DLPStoredInfoType
EssentialContactsContact
Folder
IAPBrand
IAPIdentityAwareProxyClient
IdentityPlatformTenant
MonitoringAlertPolicy
MonitoringGroup
MonitoringNotificationChannel
MonitoringUptimeCheckConfig
RecaptchaEnterpriseKey
ResourceManagerLien
SQLSSLCert
SecretManagerSecretVersion
StorageNotification
StorageTransferJob
TagsTagBinding
TagsTagKey
TagsTagValue
VertexAIDataset
VertexAIIndex
Note: Folder is a special case. You can set its resourceID to the folder ID
of an existing folder to acquire that folder. However, if you leave
resourceID unspecified, Folder acquires the folder with the given
displayName in the given parent folder/organization. If none can be found,
then a new folder is created.
To learn about how to use the resourceID field, see Managing resources with
the resourceID field .
Resources that cannot be acquired
The following Config Connector resources do not have support for acquiring
existing Google Cloud resources:
DataflowFlexTemplateJob
FirestoreIndex
IAMServiceAccountKey
What's next
Learn about how Config Connector models Google Cloud resources
with Kubernetes constructs .
See the Google Cloud resources
Config Connector can manage.
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
