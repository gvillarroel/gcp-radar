---
title: "Configure Workload Identity Federation with Kubernetes \_|\_ Identity and\
  \ Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-kubernetes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-kubernetes
  title: "Configure Workload Identity Federation with Kubernetes \_|\_ Identity and\
    \ Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure Workload Identity Federation with Kubernetes | Identity and Access Management (IAM) | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
IAM
Identity and Access Management (IAM)
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X. 509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin
Configure Workload Identity Federation Define an attribute mapping and condition
Create the workload identity pool and provider
Grant access to a Kubernetes workload Use Workload Identity Federation to grant direct resource access
Alternative: Use IAM service account impersonation to grant access
Deploy the Kubernetes workload
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Configure Workload Identity Federation with Kubernetes
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Configure Workload Identity Federation Define an attribute mapping and condition
Create the workload identity pool and provider
Grant access to a Kubernetes workload Use Workload Identity Federation to grant direct resource access
Alternative: Use IAM service account impersonation to grant access
Deploy the Kubernetes workload
What's next
This guide describes how to use Workload Identity Federation to let
workloads that run on Azure Kubernetes Service (AKS), Amazon Elastic Kubernetes
Service, or on a self-hosted Kubernetes cluster authenticate to Google Cloud.
Kubernetes lets you configure a cluster so that workloads can obtain Kubernetes
ServiceAccount tokens from a projected volume .
By setting up Workload Identity Federation, you can let workloads use these
Kubernetes ServiceAccount tokens to authenticate to Google Cloud.
If you're using GKE, use Workload Identity Federation for GKE
instead of configuring Workload Identity Federation.
Before you begin
Before you configure Workload Identity Federation, make sure that your
Kubernetes cluster meets the following criteria:
GKE AKS EKS Kubernetes
More
For Google Kubernetes Engine (GKE) users, see Authenticate to Google Cloud APIs from GKE workloads .
Make sure your cluster meets the following criteria:
You've enabled the OIDC issuer
feature.
You must enable this feature so that Workload Identity Federation
can access the OpenID Connect metadata and the JSON Web Key Set (JWKS) for
the cluster.
You don't need to make any changes in your EKS configuration.
Make sure your cluster meets the following criteria:
You're running Kubernetes 1.20 or later.
Previous versions of Kubernetes used a different ServiceAccount token
format that is not compatible with the instructions in this document.
You configured kube-apiserver so that it
supports ServiceAccount token volume projections .
The cluster doesn't need to be accessible over the internet.
Configure Workload Identity Federation
You only need to perform these steps once for each Kubernetes cluster. You can then use
the same workload identity pool and provider for multiple Kubernetes pods and across
multiple Google Cloud projects.
To start configuring Workload Identity Federation, do the following:
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
Go to project selector
We recommend that you
use a dedicated project to manage workload identity pools and providers .
Verify that billing is enabled for your Google Cloud project .
Enable the IAM, Resource Manager, Service Account Credentials, and Security Token Service APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Define an attribute mapping and condition
Kubernetes ServiceAccount tokens contain multiple claims, including the following:
sub : Contains the namespace and name of the ServiceAccount-for example,
system:serviceaccount: NAMESPACE : KSA_NAME ,
where NAMESPACE is the namespace of the
ServiceAccount and KSA_NAME is the name of the
ServiceAccount.
"kubernetes.io".namespace : Contains the namespace of the ServiceAccount.
"kubernetes.io".serviceaccount.name : Contains the name of the ServiceAccount.
"kubernetes.io".pod.name : Contains the name of the pod.
To use sub as subject identifier ( google.subject ) in Google Cloud,
use the following mapping:
google.subject=assertion.sub
Optionally, you can map additional attributes .
You can then refer to these attributes when granting access to resources.
For example:
google.subject=assertion.sub,
attribute.namespace=assertion['kubernetes.io']['namespace'],
attribute.service_account_name=assertion['kubernetes.io']['serviceaccount']['name'],
attribute.pod=assertion['kubernetes.io']['pod']['name']
Optionally, define an attribute condition .
Attribute conditions are CEL expressions that can check assertion attributes and
target attributes. If the attribute condition evaluates to true for a given
credential, the credential is accepted. Otherwise, the credential is rejected.
You can use an attribute condition to restrict which Kubernetes ServiceAccounts
can use Workload Identity Federation to obtain short-lived Google Cloud
tokens.
For example, the following condition restricts access to Kubernetes
ServiceAccounts from the backend and monitoring namespaces:
assertion['kubernetes.io']['namespace'] in ['backend', 'monitoring']
Create the workload identity pool and provider
Required roles
To get the permissions that
you need to configure Workload Identity Federation,
ask your administrator to grant you the
following IAM roles on the project:
Workload Identity Pool Admin ( roles/iam.workloadIdentityPoolAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Alternatively, the IAM Owner ( roles/owner ) basic role also
includes permissions to configure identity federation.
You should not grant basic roles in a production environment, but you can grant them in a
development or test environment.
To create a workload identity pool and provider, do the following:
AKS EKS Kubernetes
More
Determine the issuer URL of your AKS cluster:
az aks show -n NAME -g RESOURCE_GROUP --query "oidcIssuerProfile.issuerUrl" -otsv
Replace the following:
NAME : The name of the cluster
RESOURCE_GROUP : The resource group of the cluster
The command outputs the issuer URL. You need the issuer URL in one of the following steps.
If the command doesn't return an issuer URL, verify that you've
enabled the OIDC issuer
feature.
Create a new workload identity pool:
gcloud iam workload-identity-pools create POOL_ID \
--location="global" \
--description=" DESCRIPTION " \
--display-name=" DISPLAY_NAME "
Replace the following:
POOL_ID : The unique ID for the pool.
DISPLAY_NAME : The name of the pool.
DESCRIPTION : A description of the pool that
you choose. This description appears when you grant access to pool
identities.
Add the AKS cluster as a workload identity pool provider:
gcloud iam workload-identity-pools providers create-oidc WORKLOAD_PROVIDER_ID \
--location="global" \
--workload-identity-pool=" POOL_ID " \
--issuer-uri=" ISSUER " \
--attribute-mapping=" MAPPINGS " \
--attribute-condition=" CONDITIONS "
Replace the following:
WORKLOAD_PROVIDER_ID : A unique workload identity
pool provider ID of your choice.
POOL_ID : The workload identity pool ID
that you created earlier.
ISSUER : The issuer URI that you determined
earlier.
MAPPINGS : A comma-separated list of
attribute mappings that you created
earlier in this guide.
CONDITIONS : An optional
attribute condition that you created
earlier in this guide. Remove the parameter if
you don't have an attribute condition.
Determine the issuer URL of your EKS cluster:
aws eks describe-cluster --name NAME --query "cluster.identity.oidc.issuer" --output text
Replace NAME with the name of the cluster.
The command outputs the issuer URL. You need the issuer URL in one of the following steps.
Create a new workload identity pool:
gcloud iam workload-identity-pools create POOL_ID \
--location="global" \
--description=" DESCRIPTION " \
--display-name=" DISPLAY_NAME "
Replace the following:
POOL_ID : The unique ID for the pool.
DISPLAY_NAME : The name of the pool.
DESCRIPTION : A description of the pool that
you choose. This description appears when you grant access to pool
identities.
Add the EKS cluster as a workload identity pool provider:
gcloud iam workload-identity-pools providers create-oidc WORKLOAD_PROVIDER_ID \
--location="global" \
--workload-identity-pool=" POOL_ID " \
--issuer-uri=" ISSUER " \
--attribute-mapping=" MAPPINGS " \
--attribute-condition=" CONDITIONS "
Replace the following:
WORKLOAD_PROVIDER_ID : A unique workload identity
pool provider ID of your choice.
POOL_ID : The workload identity pool ID
that you created earlier.
ISSUER : The issuer URI that you determined
earlier.
MAPPINGS : A comma-separated list of
attribute mappings that you created
earlier in this guide.
CONDITIONS : An optional
attribute condition that you created
earlier in this guide. Remove the parameter if
you don't have an attribute condition.
Connect to your Kubernetes cluster and use kubectl to determine
your cluster's issuer URL:
kubectl get --raw /.well-known/openid-configuration | jq -r .issuer
You need the issuer URL in one of the following steps.
Download the cluster's JSON Web Key Set (JWKS):
kubectl get --raw /openid/v1/jwks > cluster-jwks.json
In one of the following steps, you upload the JWKS
so that Workload Identity Federation can verify the authenticity of
the Kubernetes ServiceAccount tokens issued by your cluster.
Create a new workload identity pool:
gcloud iam workload-identity-pools create POOL_ID \
--location="global" \
--description=" DESCRIPTION " \
--display-name=" DISPLAY_NAME "
Replace the following:
POOL_ID : The unique ID for the pool.
DISPLAY_NAME : The name of the pool.
DESCRIPTION : A description of the pool that
you choose. This description appears when you grant access to pool
identities.
Add the Kubernetes cluster as a workload identity pool provider and upload
the cluster's JWKS:
gcloud iam workload-identity-pools providers create-oidc WORKLOAD_PROVIDER_ID \
--location="global" \
--workload-identity-pool=" POOL_ID " \
--issuer-uri=" ISSUER " \
--attribute-mapping=" MAPPINGS " \
--attribute-condition=" CONDITIONS " \
--jwk-json-path="cluster-jwks.json"
Replace the following:
WORKLOAD_PROVIDER_ID : Enter a unique ID for
the workload identity pool provider.
POOL_ID : The workload identity pool ID
that you created earlier.
ISSUER : The issuer URI that you determined
earlier.
MAPPINGS : A comma-separated list of
attribute mappings that you created
earlier in this guide.
CONDITIONS : An optional
attribute condition that you created
earlier in this guide. Remove the parameter if
you don't have an attribute condition.
Note: The command doesn't validate the cluster's JWKS. If the JWKS
is malformed or expired, subsequent authentication attempts might fail
with an error message Error connecting to the given credential's issuer .
Grant access to a Kubernetes workload
This section describes how to configure a Kubernetes workload to access
Google Cloud APIs by using either Workload Identity Federation direct
resource access or service account impersonation.
You must perform these steps once for each Kubernetes workload that needs access
to Google Cloud.
We recommend that you use Workload Identity Federation . However,
when using identity federation, certain API methods might have limitations. For
a list of limitations, see Identity federation: products and limitations .
If the methods that your workload uses have such limitations, you can instead
use IAM impersonation .
Use Workload Identity Federation to grant direct resource access
In this section, you use Workload Identity Federation to grant an
IAM role to a Kubernetes ServiceAccount so that it can directly
access Google Cloud resources.
To create a Kubernetes ServiceAccount and grant it a role, do the following:
Create a Kubernetes ServiceAccount:
kubectl create serviceaccount KSA_NAME --namespace NAMESPACE
Replace the following:
KSA_NAME : A name of the ServiceAccount.
NAMESPACE : The namespace in which to create the
ServiceAccount.
Grant IAM access to the Kubernetes ServiceAccount for a
Google Cloud resource.
Following the principle of least privilege ,
we recommend that you grant only roles that are specific to the resources
that your application must access.
In the following example, the command grants the Kubernetes Engine Cluster Viewer
( roles/container.clusterViewer ) role to the ServiceAccount that you
created. The command uses the subject that you mapped earlier in this
document.
gcloud projects add-iam-policy-binding projects/ PROJECT_ID \
--role = roles/container.clusterViewer \
--member = principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ MAPPED_SUBJECT \
--condition = None
Replace the following:
PROJECT_NUMBER : the numerical
Google Cloud project number that is associated with your project
ID.
POOL_ID : the workload identity pool ID.
MAPPED_SUBJECT : the Kubernetes ServiceAccount
from the claim in your ID token that you mapped to
google.subject . For example, if you mapped google.subject=assertions.sub
and your ID token contains "sub": "system:serviceaccount:default:my-kubernetes-serviceaccount" ,
then MAPPED_SUBJECT is system:serviceaccount:default:my-kubernetes-serviceaccount .
You can grant roles on any Google Cloud resource that supports
IAM allow policies. The syntax of the principal identifier
depends on the Kubernetes resource. For a list of supported identifiers, see
Principal identifiers for Workload Identity Federation for GKE .
You can now deploy a workload that uses the Kubernetes
ServiceAccount to access the Google Cloud resources to which you granted
access.
Alternative: Use IAM service account impersonation to grant access
To configure your Kubernetes ServiceAccount to use IAM service
account impersonation, do the following:
Create a Kubernetes ServiceAccount, if you haven't already:
kubectl create serviceaccount KSA_NAME --namespace NAMESPACE
Replace the following:
KSA_NAME : a name for the ServiceAccount
NAMESPACE : the namespace in which to create
the ServiceAccount
Create an IAM service account
that represents the workload.
The service account doesn't need to be in the same project as the workload
identity pool, but you must specify the project that contains the service
account when referring to it.
gcloud iam service-accounts create IAM_SA_NAME \
--project= IAM_SA_PROJECT_ID
Replace the following:
IAM_SA_NAME : the name of the service account
IAM_SA_PROJECT_ID : the project ID of the service
account
Grant your IAM service account access
to the specific Google Cloud resources that you want the Kubernetes
workload to access.
gcloud projects add-iam-policy-binding IAM_SA_PROJECT_ID \
--member = "serviceAccount: IAM_SA_NAME @ IAM_SA_PROJECT_ID .iam.gserviceaccount.com" \
--role = " ROLE "
Replace the following:
IAM_SA_PROJECT_ID : the ID of the project where
you created your service account
IAM_SA_NAME : the name of the service account
ROLE : with the name of the role—for example,
roles/container.clusterViewer
Grant the Kubernetes ServiceAccount access to impersonate the
IAM service account:
gcloud iam service-accounts add-iam-policy-binding \
IAM_SA_NAME @ IAM_SA_PROJECT_ID .iam.gserviceaccount.com \
--member = "principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ MAPPED_SUBJECT " \
--role = roles/iam.workloadIdentityUser
Replace the following:
IAM_SA_NAME : the name of the service account
PROJECT_ID : the ID of the project where you run Kubernetes
IAM_SA_PROJECT_NUMBER : the project number
of the project where you created your service account
POOL_ID : the workload identity pool ID.
MAPPED_SUBJECT : the Kubernetes ServiceAccount
from the claim in your ID token that you mapped to
google.subject . For example, if you mapped google.subject=assertions.sub
and your ID token contains "sub": "system:serviceaccount:default:my-kubernetes-serviceaccount" ,
then MAPPED_SUBJECT is system:serviceaccount:default:my-kubernetes-serviceaccount .
Note: You must use the project number in the member identifier. Using the
project ID is not supported.
For information on authorizing IAM service accounts to access
Google Cloud APIs, see Understanding service accounts .
You can now deploy a workload that uses the Kubernetes ServiceAccount
and the IAM service account to access the Google Cloud
resources to which you granted access.
Deploy the Kubernetes workload
To deploy a Kubernetes workload that can access Google Cloud resources, do
the following:
Create a credential configuration file:
gcloud iam workload-identity-pools create-cred-config \
projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /providers/ WORKLOAD_PROVIDER_ID \
--service-account = SERVICE_ACCOUNT_EMAIL \
--credential-source-file = /var/run/service-account/token \
--credential-source-type = text \
--sts-location = REGION \
--output-file = credential-configuration.json
Replace the following:
PROJECT_NUMBER : The project number of the
project that contains the workload identity pool
POOL_ID : The ID of the workload identity pool
WORKLOAD_PROVIDER_ID : The ID of the workload identity
pool provider
SERVICE_ACCOUNT_EMAIL : Email address of the
service account, if you configured your Kubernetes ServiceAccount to
use IAM service account impersonation. Omit this flag
if you configured your Kubernetes ServiceAccount to use direct
resource access.
REGION : Optional. Specify the region of the
regional Security Token Service endpoints ,
if they are available.
The credential configuration file lets the
Cloud Client Libraries , the
gcloud CLI, and Terraform determine the following:
Where to obtain external credentials from
Which workload identity pool and provider to use
Which service account to impersonate
Note: Unlike a service account key ,
a credential configuration file doesn't contain a private key and doesn't need
to be kept confidential. Details about the credential configuration file are
available at https://google.aip.dev/auth/4117 .
Import the credential configuration file as a ConfigMap
kubectl create configmap CONFIGMAP_NAME \
--from-file credential-configuration.json \
--namespace NAMESPACE
Replace the following:
CONFIGMAP_NAME : The name of the ConfigMap.
NAMESPACE : The namespace in which to create the ConfigMap.
Deploy a workload and let it use the Kubernetes ServiceAccount and ConfigMap.
Create a manifest and configure as follows:
Mount a projected token volume
so that the workload can obtain a Kubernetes ServiceAccount token
from a local file. Configure the volume so that the Kubernetes
ServiceAccount token uses the audience expected by your workload
identity pool provider.
Mount the ConfigMap that contains the credential configuration file
so that the workload can access the necessary configuration for using
Workload Identity Federation.
Add an environment variable GOOGLE_APPLICATION_CREDENTIALS that
contains the path of the credential configuration file so that
workloads can find the file.
The following is an example manifest that uses the Kubernetes ServiceAccount
and ConfigMap to let the Google Cloud CLI authenticate to Google Cloud:
apiVersion : v1
kind : Pod
metadata :
name : example
namespace : NAMESPACE
spec :
containers :
- name : example
image : google / cloud - sdk : alpine
command : [ "/bin/sh" , "-c" , "gcloud auth login --cred-file $GOOGLE_APPLICATION_CREDENTIALS && gcloud auth list && sleep 600" ]
volumeMounts :
- name : token
mountPath : "/var/run/service-account"
readOnly : true
- name : workload - identity - credential - configuration
mountPath : "/etc/workload-identity"
readOnly : true
env :
- name : GOOGLE_APPLICATION_CREDENTIALS
value : "/etc/workload-identity/credential-configuration.json"
serviceAccountName : KSA_NAME
volumes :
- name : token
projected :
sources :
- serviceAccountToken :
audience : https : // iam . googleapis . com / projects / PROJECT_NUMBER / locations / global / workloadIdentityPools / POOL_ID / providers / WORKLOAD_PROVIDER_ID
expirationSeconds : 3600
path : token
- name : workload - identity - credential - configuration
configMap :
name : CONFIGMAP_NAME
You can follow the same approach to let tools and workloads that use one of the following
client libraries find credentials automatically :
C++ Go Java Node.js Python gcloud Terraform bq
More
The
Google Cloud Client Libraries for C++
support Workload Identity Federation since version
v2.6.0 .
To use Workload Identity Federation, you must build the client libraries
with version 1.36.0 or later of gRPC.
Client libraries for Go support Workload Identity Federation if they use version
v0.0.0-20210218202405-ba52d332ba99 or later of the golang.org/x/oauth2 module.
To check which version of this module your client library uses, run the
following commands:
cd $GOPATH /src/cloud.google.com/go
go list -m golang.org/x/oauth2
Client libraries for Java support Workload Identity Federation if they use version 0.24.0
or later of the
com.google.auth:google-auth-library-oauth2-http artifact .
To check which version of this artifact your client library uses, run the
following Maven command in your application directory:
mvn dependency:list -DincludeArtifactIds = google-auth-library-oauth2-http
Client libraries for Node.js support Workload Identity Federation if they use version
7.0.2 or later of the
google-auth-library package .
To check which version of this package your client library uses, run the
following command in your application directory:
npm list google-auth-library
When you create a GoogleAuth object, you can specify a project ID, or you can
allow GoogleAuth to find the project ID automatically. To find the project ID
automatically, the service account in the configuration file must have the
Browser role ( roles/browser ), or a role with equivalent permissions, on your
project. For details, see the
README for the google-auth-library package .
Client libraries for Python support Workload Identity Federation if they use version
1.27.0 or later of the
google-auth package .
To check which version of this package your client library uses, run the
following command in the environment where the package is installed:
pip show google-auth
To specify a project ID for the authentication client, you can set the
GOOGLE_CLOUD_PROJECT environment variable, or you can allow the client to find
the project ID automatically. To find the project ID automatically, the service
account in the configuration file must have the Browser role ( roles/browser ),
or a role with equivalent permissions, on your project. For details, see the
user guide for the google-auth package .
To authenticate using Workload Identity Federation, use the
gcloud auth login command:
gcloud auth login --cred-file= FILEPATH .json
Replace FILEPATH with the path to the
credential configuration file.
Support for Workload Identity Federation in gcloud CLI is available in
version 363.0.0 and later versions of the gcloud CLI .
The Google Cloud provider
supports Workload Identity Federation if you use version 3.61.0 or later:
terraform {
required_providers {
google = {
source = "hashicorp/google"
version = "~> 3.61.0"
}
}
}
To authenticate using Workload Identity Federation, use the
gcloud auth login command, as follows:
gcloud auth login --cred-file= FILEPATH .json
Replace FILEPATH with the path to the
credential configuration file.
Support for Workload Identity Federation in bq is available in
version 390.0.0 and later versions of the gcloud CLI .
Optionally, verify that authentication works correctly by running the following command:
kubectl exec example --namespace NAMESPACE -- gcloud auth print-access-token
What's next
Read more about Workload Identity Federation .
Learn about best practices for using Workload Identity Federation .
See how you can manage workload identity pools and providers .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
