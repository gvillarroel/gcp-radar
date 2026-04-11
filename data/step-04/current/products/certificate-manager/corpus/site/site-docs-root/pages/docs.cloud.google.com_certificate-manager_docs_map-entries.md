---
title: "Manage certificate map entries \_|\_ Certificate Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/map-entries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/map-entries
  title: "Manage certificate map entries \_|\_ Certificate Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Manager
Guides
Send feedback
Manage certificate map entries
Stay organized with collections
Save and categorize content based on your preferences.
A certificate map entry associates a certificate with a target hostname and a
target certificate map . This page describes how to
create and manage certificate map entries.
For more information, see Certificate map
entries .
Note: The Google Cloud CLI instructions on this page assume that you are using
Cloud Shell or another environment with bash installed. For
more information about the gcloud CLI commands used on this page, see
the Certificate Manager CLI
reference .
Create a certificate map entry
You can create a certificate map entry and associate a maximum of four
certificates with it. We recommend that you use a different key algorithm for
each certificate when specifying multiple certificates for a hostname. For
example, you can use ECDSA for one certificate and RSA for another. Associating
multiple certificates with a single certificate map entry also helps when
migrating self-managed certificates to Google-managed certificates.
To associate multiple certificates with a certificate map entry, provide a
comma-delimited list of certificate names. For each subdomain, you must create a
separate certificate map entry.
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Editor role ( roles/certificatemanager.editor )
Certificate Manager Owner role ( roles/certificatemanager.owner )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
gcloud
To create a certificate map entry, use the gcloud certificate-manager maps
entries create
command :
gcloud certificate-manager maps entries create CERTIFICATE_MAP_ENTRY_NAME \
--map=" CERTIFICATE_MAP_NAME " \
--certificates=" CERTIFICATE_NAMES " \
--hostname=" HOSTNAME "
Replace the following:
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
CERTIFICATE_NAMES : a comma-separated list of the names of the certificates you want to associate with this certificate map entry.
HOSTNAME : the hostname that you want to associate with the certificate map entry.
API
Create the certificate map entry by making a POST request to the certificateMaps.certificateMapEntries.create
method as follows:
POST /v1/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME /certificateMapEntries?certificate_map_entry_id= CERTIFICATE_MAP_ENTRY_NAME "
{
hostname: " HOSTNAME "
certificates: ["projects/ PROJECT_ID /locations/global/certificates/ CERTIFICATE_NAME1 ","projects/ PROJECT_ID /locations/global/certificates/ CERTIFICATE_NAME2 "]
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
HOSTNAME : the hostname that you want to associate with the certificate map entry.
CERTIFICATE_NAME1 : the name of the first certificate
you want to associate with this certificate map entry.
CERTIFICATE_NAME2 : the name of the second certificate
you want to associate with this certificate map entry.
Terraform
To create a certificate map entry, you can use a
google_certificate_manager_certificate_map_entry
resource .
resource "google_certificate_manager_certificate_map_entry" "default" {
name = "${local.name}-first-entry-${random_id.tf_prefix.hex}"
description = "example certificate map entry"
map = google_certificate_manager_certificate_map.default.name
labels = {
"terraform" : true
}
certificates = [google_certificate_manager_certificate.default.id]
hostname = local.domain
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For information about how the load balancer selects certificates during a
handshake, see Certificate selection
logic .
Create a primary certificate map entry
You can specify a primary certificate for the load balancer to serve if the
client doesn't provide a hostname, or if the load balancer can't match the
hostname to a configured certificate map entry.
Note: When using Certificate Manager with
Identity-Aware Proxy (IAP), create a dedicated certificate map entry for each
hostname. Primary certificate map entry is incompatible with IAP.
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Editor role ( roles/certificatemanager.editor )
Certificate Manager Owner role ( roles/certificatemanager.owner )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
gcloud
To create a primary certificate map entry, use the gcloud
certificate-manager maps entries create
command
with the set-primary flag:
gcloud certificate-manager maps entries create CERTIFICATE_MAP_ENTRY_NAME \
--map=" CERTIFICATE_MAP_NAME " \
--certificates=" CERTIFICATE_NAMES " \
--set-primary
Replace the following:
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
CERTIFICATE_NAMES : a comma-separated list of the names of the certificates you want to associate with this certificate map entry.
API
Create the certificate map entry by making a POST request to the
certificateMaps.certificateMapEntries.create method as follows:
POST /v1/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME /certificateMapEntries?certificate_map_entry_id= CERTIFICATE_MAP_ENTRY_NAME "
{
matcher: "PRIMARY",
certificates: ["projects/ PROJECT_ID /locations/global/certificates/ CERTIFICATE_NAME1 ","projects/ PROJECT_ID /locations/global/certificates/ CERTIFICATE_NAME2 "]
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
CERTIFICATE_NAME1 : the name of the first certificate
you want to associate with the primary certificate map entry.
CERTIFICATE_NAME2 : the name of the second certificate
you want to associate with the primary certificate map entry.
For information about how the load balancer selects certificates during a
handshake, see Certificate selection
logic .
Update a certificate map entry
When you update a certificate map entry, you can do the following:
Assign or unassign certificates
Modify the description
Modify the labels
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Editor role ( roles/certificatemanager.editor )
Certificate Manager Owner role ( roles/certificatemanager.owner )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
gcloud
To update a certificate map entry, use the gcloud certificate-manager maps
entries update
command :
gcloud certificate-manager maps entries update CERTIFICATE_MAP_ENTRY_NAME \
--map=" CERTIFICATE_MAP_NAME " \
--certificates=" CERTIFICATE_NAME , CERTIFICATE_NAME " \
--description=" DESCRIPTION " \
--update-labels=" LABELS "
Replace the following:
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
CERTIFICATE_NAME : the name of the certificate you want to associate with the certificate map entry.
DESCRIPTION : a meaningful description for this
certificate map entry.
LABELS : a list of labels applied to this certificate
map entry.
API
Update the certificate map entry by making a PATCH request to the
certificateMaps.certificateMapEntries.patch
method as follows:
PATCH /v1/projects/example-project/locations/global/certificateMaps/ CERTIFICATE_MAP_NAME /certificateMapEntries/ CERTIFICATE_MAP_ENTRY_NAME ?updateMask=labels,description,certificates
{
"certificates": ["projects/ PROJECT_ID /locations/global/certificates/ CERTIFICATE_NAME "],
"description": " DESCRIPTION ",
"labels": { " LABEL_KEY ": " LABEL_VALUE " }
}
Replace the following:
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_NAME : the name of the certificate.
DESCRIPTION : a meaningful description for this
certificate map entry.
LABEL_KEY : a label key applied to this certificate
map entry.
LABEL_VALUE : a label value applied to this
certificate map entry.
List certificate map entries
You can list, filter, and sort all configured certificate map entries of the
project.
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Viewer role ( roles/certificatemanager.viewer )
Certificate Manager Editor role ( roles/certificatemanager.editor )
Certificate Manager Owner role ( roles/certificatemanager.owner )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
Console
In the Google Cloud console, go to the Certificate maps tab on the
Certificate Manager page.
Go to Certificate Manager
Click the name of the certificate map that contains the map entries. The
Certificate Map Details page shows detailed information about the
selected certificate map and its associated list of map entries.
gcloud
gcloud certificate-manager maps entries list --map= CERTIFICATE_MAP_NAME \
--filter=" FILTER " \
--page-size=" PAGE_SIZE " \
--limit=" LIMIT " \
--sort-by=" SORT_BY "
Replace the following:
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
FILTER : an expression that constrains the returned results to specific values.
For example, you can filter the results by the following criteria:
Serving state: --filter='state=ACTIVE'
Matcher (set as primary): --filter='-matcher=PRIMARY'
Hostname: --filter='hostname=example.com'
Assigned certificates: --filter='certificates:my-cert'
Labels and creation time: --filter='labels.key:value AND create_time > "2021-09-01T00:00:00Z"'
For more filtering examples that you can use with
Certificate Manager, see Sorting and filtering list
results in the Cloud Key Management Service
documentation.
PAGE_SIZE : the number of results to return per page.
LIMIT : the maximum number of results to return.
SORT_BY : a comma-separated list of name fields by which
the returned results are sorted. The default sort order is ascending; for
descending sort order, prefix the field with a tilde ( ~ ).
API
List certificate map entries configured within a given certificate map by
making a LIST request to the certificateMaps.certificateMapEntries.list
method as follows:
GET /v1/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME /certificateMapEntries?filter= FILTER &pageSize= PAGE_SIZE &sortBy= SORT_BY
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_MAP_NAME : the name of the target certificate map.
FILTER : an expression that constrains the returned results to specific values.
For example, you can filter the results by the following criteria:
Serving state: --filter='state=ACTIVE'
Matcher (set as primary): --filter='-matcher=PRIMARY'
Hostname: --filter='hostname=example.com'
Assigned certificates: --filter='certificates:my-cert'
Labels and creation time: --filter='labels.key:value AND create_time > "2021-09-01T00:00:00Z"'
For more filtering examples that you can use with
Certificate Manager, see Sorting and filtering list
results in the Cloud Key Management Service
documentation.
PAGE_SIZE : the number of results to return per page.
SORT_BY : a comma-separated list of name fields by which
the returned results are sorted. The default sort order is ascending; for
descending sort order, prefix the field with a tilde ( ~ ).
View the state of a certificate map entry
You can view the state of a certificate map entry.
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Viewer role ( roles/certificatemanager.viewer )
Certificate Manager Editor role ( roles/certificatemanager.editor )
Certificate Manager Owner role ( roles/certificatemanager.owner )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
Console
In the Google Cloud console, go to the Certificate maps tab on the
Certificate Manager page.
Go to Certificate Manager
Click the name of the certificate map that contains the map entries.
The Certificate Map Details page shows detailed information about
the selected certificate map and its associated list of map entries.
In the Map entries section, click the name of the map entry that
you want to view. The Map entry details page displays detailed
information about the selected map entry.
gcloud
gcloud certificate-manager maps entries describe CERTIFICATE_MAP_ENTRY_NAME \
--map=" CERTIFICATE_MAP_NAME "
Replace the following:
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
API
View the state of the certificate map entry by making a GET request to the
certificateMaps.certificateMapEntries.get
method as follows:
GET /v1/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME /certificateMapEntries/ CERTIFICATE_MAP_ENTRY_NAME
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
Delete a certificate map entry
Deleting a certificate map entry detaches the certificates associated with the
certificate map entry from the target proxy. Deleting a certificate map entry
doesn't delete the associated certificates from Google Cloud. You must
manually delete those
certificates .
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Editor role ( roles/certificatemanager.editor )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
gcloud
gcloud certificate-manager maps entries delete CERTIFICATE_MAP_ENTRY_NAME \
--map=" CERTIFICATE_MAP_NAME "
Replace the following:
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
API
Delete a certificate map entry by making a DELETE request to the
certificateMaps.certificateMapEntries.delete
method as follows:
DELETE /v1/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME /certificateMapEntries/ CERTIFICATE_MAP_ENTRY_NAME
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_MAP_NAME : the name of the certificate map to which the certificate map entry is attached.
CERTIFICATE_MAP_ENTRY_NAME : the name of the certificate map entry.
What's next
Manage certificates
Manage certificate maps
Manage DNS authorizations
Manage certificate issuance configuration resources
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
