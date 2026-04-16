---
title: "Configure IAM roles in ingress and egress rules \_|\_ VPC Service Controls\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles
  title: "Configure IAM roles in ingress and egress rules \_|\_ VPC Service Controls\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Configure IAM roles in ingress and egress rules
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— IAM roles in ingress and egress rules
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes how to use Identity and Access Management (IAM) roles in ingress and
egress rules to allow access to resources protected by service perimeters.
VPC Service Controls uses ingress and egress
rules to allow access to and
from the resources and clients protected by service perimeters. Optionally, you
can constrain your ingress and egress rules using IAM
roles . When you specify an IAM
role in a rule, the rule only allows actions associated with the permissions
that are part of the IAM role.
Before you begin
Read about ingress and egress rules .
If you want to use a custom role in the
ingress and egress rules, make sure that you have the required
permissions .
Configure IAM roles in ingress rules
Console
When you update an ingress policy of a service perimeter
or set an ingress policy during perimeter creation
using the Google Cloud console, you can configure the ingress rule to use
IAM roles:
When you create a perimeter or edit a perimeter in the Google Cloud console,
select Ingress policy .
In the Ingress rules pane, select an existing ingress rule or click
Add an ingress rule .
In the To section of your ingress policy, select Select IAM roles
(Preview) from the Operations or IAM roles list.
Click Add IAM roles .
In the Add IAM roles pane, select the IAM roles that
you want to allow.
For information about the supported services and roles, see Supported products .
Click Add selected IAM roles .
Click Done .
For information about the other ingress rule attributes, see Ingress rules reference .
gcloud
You can configure an ingress rule to use IAM roles using a JSON
file or a YAML file. The following sample uses the YAML format:
- ingressFrom :
identityType : ANY_IDENTITY | ANY_USER_ACCOUNT | ANY_SERVICE_ACCOUNT
*OR *
identities :
- PRINCIPAL_IDENTIFIER
sources :
- resource : RESOURCE
*OR *
- accessLevel : ACCESS_LEVEL
ingressTo :
operations :
- serviceName : SERVICE_NAME
methodSelectors :
- method : METHOD_NAME
*OR *
roles :
- ROLE_NAME
resources :
- projects/ PROJECT_NUMBER
Replace ROLE_NAME with the IAM roles
that define the scope of access for the services specified in the rule.
Specify a single role or a combination of roles that include all the
permissions required to access the services. To specify a role, use the role
name formats mentioned in Role components ,
except the following format: projects/ PROJECT_ID /roles/ IDENTIFIER .
For information about the supported services and roles, see Supported products .
For information about the other ingress rule attributes, see Ingress rules reference .
After you update an existing ingress rule to configure IAM
roles, you need to update the rule policies of the service perimeter:
gcloud access-context-manager perimeters update PERIMETER_ID --set-ingress-policies= RULE_POLICY .yaml
Replace the following:
PERIMETER_ID : the ID of the service perimeter that
you want to update.
RULE_POLICY : the path of the modified ingress rule
file.
For more information, see Updating ingress and egress policies for a service
perimeter .
Configure IAM roles in egress rules
Console
When you update an egress policy of a service perimeter
or set an egress policy during perimeter creation
using the Google Cloud console, you can configure the egress rule to use
IAM roles:
When you create a perimeter or edit a perimeter in the Google Cloud console,
select Egress policy .
In the Egress rules pane, select an existing egress rule or click
Add an egress rule .
In the To section of your egress policy, select Select IAM roles
(Preview) from the Operations or IAM roles list.
Click Add IAM roles .
In the Add IAM roles pane, select the IAM roles that
you want to allow.
For information about the supported services and roles, see Supported products .
Click Add selected IAM roles .
Click Done .
For information about the other egress rule attributes, see Egress rules reference .
gcloud
You can configure an egress rule to use IAM roles using a JSON
file or a YAML file. The following sample uses the YAML format:
- egressTo :
operations :
- serviceName : SERVICE_NAME
methodSelectors :
- method : METHOD_NAME
*OR *
roles :
- ROLE_NAME
resources :
- projects/ PROJECT_NUMBER
egressFrom :
identityType : ANY_IDENTITY | ANY_USER_ACCOUNT | ANY_SERVICE_ACCOUNT
*OR *
identities :
- PRINCIPAL_IDENTIFIER
sources :
- resource : RESOURCE
*OR *
- accessLevel : ACCESS_LEVEL
sourceRestriction : RESTRICTION_STATUS
Replace ROLE_NAME with the IAM roles
that define the scope of access for the services specified in the rule.
Specify a single role or a combination of roles that include all the
permissions required to access the services. To specify a role, use the role
name formats mentioned in Role components ,
except the following format: projects/ PROJECT_ID /roles/ IDENTIFIER .
For information about the supported services and roles, see Supported products .
For information about the other egress rule attributes, see Egress rules reference .
After you update an existing egress rule to configure IAM
roles, you need to update the rule policies of the service perimeter:
gcloud access-context-manager perimeters update PERIMETER_ID --set-egress-policies= RULE_POLICY .yaml
Replace the following:
PERIMETER_ID : the ID of the service perimeter that
you want to update.
RULE_POLICY : the path of the modified egress rule
file.
For more information, see Updating ingress and egress policies for a service
perimeter .
Supported products
You can use the IAM roles of the following Google Cloud services
in the ingress and egress rules:
Product
Limitations
Artifact Registry artifactregistry.googleapis.com
No known limitations.
BigQuery bigquery.googleapis.com
No known limitations.
BigQuery Data Transfer Service bigquerydatatransfer.googleapis.com
No known limitations.
Bigtable bigtable.googleapis.com
No known limitations.
Binary Authorization binaryauthorization.googleapis.com
No known limitations.
Cloud Composer composer.googleapis.com
No known limitations.
Cloud Key Management Service cloudkms.googleapis.com
When you use customer-managed encryption keys (CMEK) , VPC Service Controls doesn't support the use of Cloud KMS roles in the ingress and egress rules.
Cloud Logging logging.googleapis.com
No known limitations.
Cloud Monitoring monitoring.googleapis.com
No known limitations.
Cloud Run run.googleapis.com
No known limitations.
Cloud Run functions cloudfunctions.googleapis.com
No known limitations.
Cloud SQL sqladmin.googleapis.com
No known limitations.
Cloud Storage storage.googleapis.com
VPC Service Controls supports custom roles for Cloud Storage in the ingress and egress rules, but not the predefined Cloud Storage roles . When you attempt to use a predefined Cloud Storage role in an ingress or egress rule, VPC Service Controls returns an INVALID_ARGUMENT error.
When you perform an insert object or write API request to projects protected by VPC Service Controls, you must configure ingress and egress rules allowing the storage.objects.delete and storage.objects.create permissions.
Compute Engine compute.googleapis.com
No known limitations.
Dataflow dataflow.googleapis.com
No known limitations.
Managed Service for Apache Spark dataproc.googleapis.com
No known limitations.
Google Kubernetes Engine container.googleapis.com
No known limitations.
Identity and Access Management iam.googleapis.com
No known limitations.
Pub/Sub pubsub.googleapis.com
No known limitations.
Resource Manager cloudresourcemanager.googleapis.com
No known limitations.
Secret Manager secretmanager.googleapis.com
No known limitations.
Spanner spanner.googleapis.com
No known limitations.
For the list of predefined IAM roles of these services that you
can use in the ingress and egress rules, see Predefined roles .
However, there are a few IAM roles in these services that are
either partially supported or not supported for use in the ingress and egress
rules, because some or all of the underlying permissions are not supported:
Using a partially supported IAM role in an ingress or egress
rule makes the rule ineffective for requests or actions specific to the
underlying unsupported permissions .
For the list of partially supported roles and the associated unsupported
permissions, see Partially supported IAM roles .
Using an unsupported IAM role in an ingress or egress rule
makes the rule ineffective.
For the list of unsupported roles, see Unsupported IAM roles .
If you want to use a custom role in the
ingress and egress rules, make sure that the custom role contains only the
supported permissions that are part of the supported services. For the list of
unsupported permissions for the supported services, see Partially supported
IAM roles
and Unsupported IAM roles .
You can't use custom roles that you have created at the project level. In other
words, you can't use a custom role that is in the following format: projects/ PROJECT_ID /roles/ IDENTIFIER .
Partially supported IAM roles
The following table lists the partially supported IAM roles from
specific services:
Product
Partially supported roles
Unsupported permissions
Cloud SQL
roles/cloudsql.viewer
cloudsql.backupRuns.list
cloudaicompanion.*
roles/cloudsql.editor
cloudsql.backupRuns.list
cloudaicompanion.*
Cloud Storage
roles/storage.objectUser
storage.objects.move
Identity and Access Management
roles/iam.serviceAccountTokenCreator
iam.serviceAccounts.signBlob
iam.serviceAccounts.signJwt
Resource Manager
roles/resourcemanager.tagAdmin
resourcemanager.tagKeys.get
resourcemanager.tagValues.get
roles/resourcemanager.tagUser
resourcemanager.tagKeys.get
resourcemanager.tagValues.get
alloydb.*
certificatemanager.*
clouddeploy.*
roles/resourcemanager.tagViewer
resourcemanager.tagKeys.get
resourcemanager.tagValues.get
alloydb.*
certificatemanager.*
clouddeploy.*
Spanner
roles/spanner.databaseReaderWithDataBoost
spanner.databases.useDataBoost
Other partially supported roles
All roles from the supported services that contain these underlying unsupported permissions.
alloydb.*
backupdr.*
bigquerymigration.*
certificatemanager.*
cloudaicompanion.*
cloudasset.*
cloudbuild.*
clouddeploy.*
dataform.*
dataplex.*
dns.*
eventarc.*
networkconnectivity.*
networkmanagement.*
networksecurity.*
networkservices.*
Unsupported IAM roles
The following table lists the unsupported IAM roles from specific
services:
Product
Unsupported roles
Identity and Access Management
roles/iam.denyReviewer
roles/iam.oauthClientViewer
roles/iam.operationViewer
roles/iam.workforcePoolEditor
roles/iam.workforcePoolViewer
roles/iam.workloadIdentityPoolViewer
roles/iam.workforcePoolEditor
roles/iam.workforcePoolViewer
Limitations
You can't use a role-based ingress or egress rule to allow requests to set
the IAM allow policy of a project
across the perimeter boundary.
If you encounter issues with loading the editing page for services in the
Google Cloud console due to VPC Service Controls restrictions, using
IAM roles in ingress rules might not resolve the issue. This
limitation doesn't affect the view-only page for these services.
When a request involves multiple resource types from different projects, the
ingress or egress rule that uses IAM roles might not work.
For example, when you launch a Dataflow template that reads text
from Cloud Storage in a different project.
If you delete a custom role after you reference the role in the ingress or
egress rule of two or more perimeters of an access policy, all perimeters
under this access policy become uneditable, and you might encounter a Custom
role in Ingress/Egress rules does not exist: CUSTOM_ROLE_NAME error. To overcome
this issue, remove all occurrences of the deleted custom role from the rules
by bulk replacing all impacted perimeters .
What's next
Configuring ingress and egress policies
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
