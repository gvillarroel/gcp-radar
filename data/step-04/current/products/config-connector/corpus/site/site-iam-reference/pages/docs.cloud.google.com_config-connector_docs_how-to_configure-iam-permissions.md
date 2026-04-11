---
title: "Access control with IAM \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/concepts/installation-types
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions
  title: "Access control with IAM \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
Access control with IAM
This document describes how to use Identity and Access Management to control how Config Connector can
create and manage Google Cloud resources.
To install Config Connector, you authenticate by creating an IAM
service account and then using Workload Identity Federation for GKE for GKE to
bind the IAM
service accounts with the Kubernetes service accounts. IAM lets
Config Connector take action on specific resources. By limiting the permissions
assigned to your service accounts, you have greater control over what kinds of
resources Config Connector can create.
You can choose to manage resources with a single service account or multiple
service accounts.
Note: Your organization administrator might
disable the creation
of service accounts. If this setting is applied, coordinate with your
organization administrator before installing Config Connector.
Single service account
When you install Config Connector with the GKE add-on or manual
installation, you can set cluster mode in your ConfigConnector
CustomResource .
With cluster mode, you can use a single IAM service account to
create and manage resources, even if you are using Config Connector to manage
multiple projects.
The following diagram shows you how this mode works, where the same service account, which is called my-service-account , manages two projects:
Multiple service accounts
You can use multiple service accounts by setting namespaced mode in your
ConfigConnector
CustomResource .
Namespaced mode lets you divide permissions based on the respective concerns of
different IAM service accounts and isolate permissions among
different Kubernetes namespaces since you can associate a different service
account for each namespace.
Choose namespaced mode if you:
Want to isolate IAM permissions at Kubernetes namespace
level.
Expect to manage a large number of Google Cloud resources from
multiple Google Cloud projects on a single cluster.
As an example, you create one IAM service account for each
project, organize resources from each project in the same Kubernetes namespace,
and then bind the corresponding IAM service account to the
Kubernetes namespace. This lets you separate IAM permissions for
each project so that each project has a distinct, unrelated set of permissions.
The following diagram shows you an overview of how namespaced mode works, where each of project is managed by a different service account. Project 1 is managed by my-service-account , and Project 2 is managed by another-service-account :
In namespaced mode, each IAM service account is bound to a
namespace by default. When you create resources within that namespace,
Config Connector uses this service account to create Google Cloud
resources. There is a dedicated Config Connector cnrm-controller-manager pod
for each namespace which impersonates the IAM service account
associated with the namespace.
To learn how to configure namespaced mode, see Installing Config Connector
using a namespaced mode .
Adjust permissions after installation
During the installation of Config Connector, you might have selected a temporary
basic role and assigned the role to the
service account for which you configured
Config Connector. If you have configured Config Connector in namespaced
mode , you might have more
than one IAM service account.
After completing the installation, you might need to remove or update the broad
permissions to align with security considerations and best practices.
One core advantage of Config Connector is unified tooling. This means you can
use Config Connector itself to fine-tune IAM roles and
permissions. You can use the
IAMPolicyMember
or
IAMPartialPolicy
resources in Config Connector to configure IAM permissions. This
requires an IAM service account with administrator permissions
across your projects, folders, or organization. This service account must be
configured to bind to the Config Connector
installation through either cluster mode or namespaced mode.
The following sections list different policy examples that use Config Connector
to manage IAM permissions.
Organization owner permission
To expand Config Connector's permissions so it can manage all projects and
folders for a given organization, complete the following steps:
Create the following YAML manifest:
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicyMember
metadata :
name : iampolicymember-orglevel-permission
namespace : NAMESPACE
spec :
member : serviceAccount: SERVICE_ACCOUNT_NAME @ HOST_PROJECT_ID . iam.gserviceaccount.com
role : roles/owner
resourceRef :
kind : Organization
external : ORGANIZATION_ID
Replace the following:
NAMESPACE with the name of your namespace
SERVICE_ACCOUNT_NAME with your service account name
HOST_PROJECT_ID with the host project ID of your service account
roles/owner with the appropriate role
ORGANIZATION_ID with your organization ID
Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
Folder owner permission
To expand Config Connector's permissions so it can manage all projects and
folders in a
given folder, complete the following steps:
Create the following YAML manifest:
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicyMember
metadata :
name : iampolicymember-orglevel-permission
namespace : NAMESPACE
spec :
member : serviceAccount: SERVICE_ACCOUNT_NAME @ HOST_PROJECT_ID . iam.gserviceaccount.com
role : roles/owner
resourceRef :
kind : Folder
external : folders/ FOLDER_ID
Replace the following:
NAMESPACE with the name of your namespace
SERVICE_ACCOUNT_NAME with your service account name
HOST_PROJECT_ID with the host project ID of your service account
roles/owner with the appropriate role
FOLDER_ID with your folder ID
Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
Project owner permissions
To allow Config Connector to manage a specific project's resources,
complete the following steps:
Create the following YAML manifest:
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicyMember
metadata :
name : iampolicymember-orglevel-permission
namespace : NAMESPACE
spec :
member : serviceAccount: SERVICE_ACCOUNT_NAME @ HOST_PROJECT_ID . iam.gserviceaccount.com
role : roles/owner
resourceRef :
kind : Project
external : projects/ PROJECT_ID
Replace the following:
NAMESPACE with the name of your namespace
SERVICE_ACCOUNT_NAME with your service account name
HOST_PROJECT_ID with the host project ID of your service account
roles/owner with the appropriate role
PROJECT_ID with your target project ID
Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
Predefined roles
If you prefer to grant more limited permissions to Config Connector, you can
assign one or more IAM roles to your Config Connector
installation by creating a few
IAMPolicyMember
resources or a combined
IAMPartialPolicy
resource. The following roles are commonly assigned to the Config Connector
service account:
Editor : Granting the editor role
allows most Config Connector features except Project or Organization wide
configurations such as IAM modifications.
IAM Service Account Admin role : Granting the
roles/iam.serviceAccountAdmin
permissions allows Config Connector to configure IAM service
accounts.
Resource Manager : Granting a
Resource Manager role
such as roles/resourcemanager.folderCreator allows Config Connector to
manage folders and
organizations.
Custom roles
If predefined roles don't meet your needs, you can create
custom roles with permissions that you define.
To learn how to create and assign custom roles, refer to
Creating and managing custom roles .
What's next
Learn how to organize your resources by folder, project, or organization .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
