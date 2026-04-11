---
title: "Class AzureBlobStorageData (1.20.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData
  title: "Class AzureBlobStorageData (1.20.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AzureBlobStorageData (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.1
1.12.0
1.11.5
1.10.0
1.9.2
1.8.1
1.7.1
1.6.0
1.5.2
1.4.1
1.3.1
1.2.1
1.1.1
1.0.2
0.1.0
AzureBlobStorageData ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An AzureBlobStorageData resource can be a data source, but not a
data sink. An AzureBlobStorageData resource represents one Azure
container. The storage account determines the Azure
endpoint <https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints> .
In an AzureBlobStorageData resource, a blobs's name is the Azure
Blob Storage blob's key
name <https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names> .
Attributes
Name
Description
storage_account
str
Required. The name of the Azure Storage
account.
azure_credentials
google.cloud.storage_transfer_v1.types.AzureCredentials
Required. Input only. Credentials used to authenticate API
requests to Azure.
For information on our data retention policy for user
credentials, see `User
credentials `__.
container
str
Required. The container to transfer from the
Azure Storage account.
path
str
Root path to transfer objects.
Must be an empty string or full path name that
ends with a '/'. This field is treated as an
object prefix. As such, it should generally not
begin with a '/'.
credentials_secret
str
Optional. The Resource name of a secret in Secret Manager.
The Azure SAS token must be stored in Secret Manager in JSON
format:
{ "sas_token" : "SAS_TOKEN" }
GoogleServiceAccount][google.storagetransfer.v1.GoogleServiceAccount]
must be granted roles/secretmanager.secretAccessor for
the resource.
See [Configure access to a source: Microsoft Azure Blob
Storage]
(https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret_manager)
for more information.
If credentials_secret is specified, do not specify
azure_credentials][google.storagetransfer.v1.AzureBlobStorageData.azure_credentials] .
Format: projects/{project_number}/secrets/{secret_name}
federated_identity_config
google.cloud.storage_transfer_v1.types.AzureBlobStorageData.FederatedIdentityConfig
Optional. Federated identity config of a user registered
Azure application.
If federated_identity_config is specified, do not
specify
azure_credentials][google.storagetransfer.v1.AzureBlobStorageData.azure_credentials]
or
credentials_secret][google.storagetransfer.v1.AzureBlobStorageData.credentials_secret] .
Classes
FederatedIdentityConfig
FederatedIdentityConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The identity of an Azure application through which Storage Transfer
Service can authenticate requests using Azure workload identity
federation.
Storage Transfer Service can issue requests to Azure Storage through
registered Azure applications, eliminating the need to pass
credentials to Storage Transfer Service directly.
To configure federated identity, see Configure access to Microsoft
Azure
Storage <https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#option_3_authenticate_using_federated_identity> __.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
