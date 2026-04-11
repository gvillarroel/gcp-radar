---
title: "AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/AccessApprovalSettings
  title: "AccessApprovalSettings \_|\_ Access Approval \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Approval
Reference
Send feedback
AccessApprovalSettings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
EnrolledService
JSON representation
EnrollmentLevel
RequestScopeMaxWidthPreference
CustomerApprovalApprovalPolicy
JSON representation
JustificationBasedApprovalPolicy
Settings on a Project/Folder/Organization related to Access Approval.
JSON representation
{
"name" : string ,
"notificationEmails" : [
string
] ,
"enrolledServices" : [
{
object ( EnrolledService )
}
] ,
"enrolledAncestor" : boolean ,
"activeKeyVersion" : string ,
"ancestorHasActiveKeyVersion" : boolean ,
"invalidKeyVersion" : boolean ,
"preferredRequestExpirationDays" : integer ,
"preferNoBroadApprovalRequests" : boolean ,
"notificationPubsubTopic" : string ,
"requireCustomerVisibleJustification" : boolean ,
"requestScopeMaxWidthPreference" : enum ( RequestScopeMaxWidthPreference ) ,
"approvalPolicy" : {
object ( CustomerApprovalApprovalPolicy )
} ,
"effectiveApprovalPolicy" : {
object ( CustomerApprovalApprovalPolicy )
}
}
Fields
name
string
The resource name of the settings. Format is one of:
"projects/{project}/accessApprovalSettings"
"folders/{folder}/accessApprovalSettings"
"organizations/{organization}/accessApprovalSettings"
notificationEmails[]
string
A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed.
enrolledServices[]
object ( EnrolledService )
A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis.
If a cloudProduct is repeated in this list, the first entry will be honored and all following entries will be discarded.
enrolledAncestor
boolean
Output only. This field is read only (not settable via projects.updateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors).
activeKeyVersion
string
The asymmetric crypto key version to use for signing approval requests. Empty activeKeyVersion indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set.
ancestorHasActiveKeyVersion
boolean
Output only. This field is read only (not settable via projects.updateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set activeKeyVersion (this field will always be unset for the organization since organizations do not have ancestors).
invalidKeyVersion
boolean
Output only. This field is read only (not settable via projects.updateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the activeKeyVersion configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down.
preferredRequestExpirationDays
integer
Set the default access approval request expiration time. This value is able to be set directly by the customer at the time of approval, overriding this suggested value. We recommend setting this value to 30 days.
preferNoBroadApprovalRequests
boolean
This field is used to set a preference for granularity of an access approval request. If true, Google personnel will be asked to send resource-level requests when possible. If false, Google personnel will be asked to send requests at the project level.
notificationPubsubTopic
string
Optional. A pubsub topic that notifications relating to access approval are published to. Notifications include pre-approved accesses.
requireCustomerVisibleJustification
boolean
Optional. When enabled, Google will only be able to send approval requests for access reasons with a customer accessible case ID in the reason detail. Also known as "Require customer initiated support case justification"
requestScopeMaxWidthPreference
enum ( RequestScopeMaxWidthPreference )
Optional. A setting that indicates the maximum scope of an Access Approval request: either organization, folder, or project. Google administrators will be asked to send requests no broader than the configured scope.
approvalPolicy
object ( CustomerApprovalApprovalPolicy )
Optional. Policy configuration for Access Approval that sets the operating mode. The available policies are Transparency, Streamlined Support, and Approval Required.
effectiveApprovalPolicy
object ( CustomerApprovalApprovalPolicy )
Output only. Effective policy applied for Access Approval, inclusive of inheritance.
EnrolledService
Represents the enrollment of a cloud resource into a specific service.
JSON representation
{
"cloudProduct" : string ,
"enrollmentLevel" : enum ( EnrollmentLevel )
}
Fields
cloudProduct
string
The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive):
all
GA
Access Context Manager
Anthos Identity Service
AlloyDB for PostgreSQL
Apigee
Application Integration
App Hub
Artifact Registry
Anthos Service Mesh
Access Transparency
BigQuery
Certificate Authority Service
Cloud Bigtable
CCAI Assist and Knowledge
Cloud Dataflow
Cloud Dataproc
CEP Security Gateway
Compliance Evaluation Service
Cloud Firestore
Cloud Healthcare API
Chronicle
Cloud AI Companion Gateway - Titan
Google Cloud Armor
Cloud Asset Inventory
Cloud Asset Search
Cloud Deploy
Cloud DNS
Cloud Latency
Cloud Memorystore for Redis
CloudNet Control
Cloud Riptide
Cloud Tasks
Cloud Trace
Cloud Data Transfer
Cloud Composer
Integration Connectors
Contact Center AI Insights
Cloud Pub/Sub
Cloud Run
Resource Manager
Cloud Spanner
Database Center
Cloud Dataform
Cloud Data Fusion
Dataplex
Dialogflow Customer Experience Edition
Cloud DLP
Document AI
Edge Container
Edge Network
Cloud EKM
Eventarc
Firebase Data Connect
Firebase Rules
App Engine
Cloud Build
Compute Engine
Cloud Functions (2nd Gen)
Cloud Filestore
Cloud Interconnect
Cloud NetApp Volumes
Cloud Storage
Generative AI App Builder
Google Kubernetes Engine
Backup for GKE API
GKE Connect
GKE Hub
Hoverboard
Cloud HSM
Cloud Identity and Access Management
Cloud Identity-Aware Proxy
Infrastructure Manager
Identity Storage Service
Key Access Justifications
Cloud Key Management Service
Cloud Logging
Looker (Google Cloud core)
Looker Studio
Management Hub
Model Armor
Cloud Monitoring
Cloud NAT
Connectivity Hub
External passthrough Network Load Balancer
OIDC One
Organization Policy Service
Org Lifecycle
Persistent Disk
Parameter Manager
Private Services Access
Regional Internal Application Load Balancer
Storage Batch Operations
Cloud Security Command Center
Secure Source Manager
Seeker
Service Provisioning
Speaker ID
Secret Manager
Cloud SQL
Cloud Speech-to-Text
Traffic Director
Cloud Text-to-Speech
USPS Andromeda
Vertex AI
Virtual Private Cloud (VPC)
VPC Access
VPC Service Controls Troubleshooter
VPC virtnet
Cloud Workstations
Web Risk
Note: These values are supported as input for legacy purposes, but will not be returned from the API.
all
ga-only
appengine.googleapis.com
artifactregistry.googleapis.com
bigquery.googleapis.com
bigtable.googleapis.com
container.googleapis.com
cloudkms.googleapis.com
cloudresourcemanager.googleapis.com
cloudsql.googleapis.com
compute.googleapis.com
dataflow.googleapis.com
dataproc.googleapis.com
dlp.googleapis.com
iam.googleapis.com
logging.googleapis.com
orgpolicy.googleapis.com
pubsub.googleapis.com
spanner.googleapis.com
secretmanager.googleapis.com
speakerid.googleapis.com
storage.googleapis.com
Calls to projects.updateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.).
Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels.
More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services
enrollmentLevel
enum ( EnrollmentLevel )
The enrollment level of the service.
EnrollmentLevel
Represents the type of enrollment for a given service to Access Approval.
Enums
ENROLLMENT_LEVEL_UNSPECIFIED
Default value if not set, defaults to "BLOCK_ALL". This value is not available to be set by the user, do not use.
BLOCK_ALL
Service is enrolled in Access Approval for all requests
RequestScopeMaxWidthPreference
Represents the desired maximum scope of an Access Approval request request from Google personnel. Administrators will be asked to send requests no broader than the configured scope (organization, folder, or project).
Enums
REQUEST_SCOPE_MAX_WIDTH_PREFERENCE_UNSPECIFIED
Default value, defaults to ORGANIZATION if not set. This value is not able to be configured by the user, do not use.
ORGANIZATION
This is the widest scope possible. It means the customer has no scope restriction when it comes to Access Approval requests.
FOLDER
Customer allows the scope of Access Approval requests as broad as the Folder level.
PROJECT
Customer allows the scope of Access Approval requests as broad as the Project level.
CustomerApprovalApprovalPolicy
Represents all the policies that can be set for Customer Approval.
JSON representation
{
"justificationBasedApprovalPolicy" : enum ( JustificationBasedApprovalPolicy )
}
Fields
justificationBasedApprovalPolicy
enum ( JustificationBasedApprovalPolicy )
Optional. Policy for approval based on the justification given.
JustificationBasedApprovalPolicy
Access approval policy configured for the configured resource.
Enums
JUSTIFICATION_BASED_APPROVAL_POLICY_UNSPECIFIED
Default value, defaults to JUSTIFICATION_BASED_APPROVAL_NOT_ENABLED if not set. This value is not able to be configured by the user, do not use.
JUSTIFICATION_BASED_APPROVAL_ENABLED_ALL
Audit-only mode. All accesses are pre-approved instantly.
JUSTIFICATION_BASED_APPROVAL_ENABLED_EXTERNAL_JUSTIFICATIONS
Customer initiated support access reasons are pre-approved instantly. All other accesses require customer approval.
JUSTIFICATION_BASED_APPROVAL_NOT_ENABLED
All access approval requests require customer approval. This is the default value if the policy is not set.
JUSTIFICATION_BASED_APPROVAL_INHERITED
Defer configuration to parent settings. This is the default value if the policy is not set and the parent has a value set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
