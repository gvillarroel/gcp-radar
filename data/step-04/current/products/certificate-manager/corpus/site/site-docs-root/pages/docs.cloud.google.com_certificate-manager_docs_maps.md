---
title: "Manage certificate maps \_|\_ Certificate Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-manager/docs/maps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/certificate-manager/docs/maps
  title: "Manage certificate maps \_|\_ Certificate Manager \_|\_ Google Cloud Documentation"
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
Manage certificate maps
Stay organized with collections
Save and categorize content based on your preferences.
A certificate map references one or more certificate map entries that assign
specific certificates to specific hostnames. This page describes how to create
and manage certificate maps.
For more information, see Certificate
maps .
Note: The Google Cloud CLI instructions on this page assume that you are using
Cloud Shell or another environment with bash installed. For
more information about the gcloud CLI commands used on this page, see
the Certificate Manager CLI
reference .
Create a certificate map
You create a certificate map to refer to the certificate map entry associated
with your certificate.
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Editor role ( roles/certificatemanager.editor )
Certificate Manager Owner role ( roles/certificatemanager.owner )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
gcloud
To create a certificate map, use the gcloud certificate-manager maps create
command :
gcloud certificate-manager maps create CERTIFICATE_MAP_NAME
Replace the following:
CERTIFICATE_MAP_NAME : the name of the certificate map.
API
To create a certificate map, make a POST request to the
certificateMaps.create method:
POST /v1/projects/ PROJECT_ID /locations/global/certificateMaps?certificate_map_id= CERTIFICATE_MAP_NAME
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_MAP_NAME : the name of the certificate map.
Terraform
To create a certificate map, you can use a
google_certificate_manager_certificate_map
resource .
resource "google_certificate_manager_certificate_map" "default" {
name = "${local.name}-certmap1-${random_id.tf_prefix.hex}"
description = "${local.domain} certificate map"
labels = {
"terraform" : true
}
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Attach a certificate map to a proxy
After creating and configuring a certificate map with certificate map
entries , attach the certificate map to the
target proxy. Certificate Manager supports both target HTTPS and
target SSL proxies with global scope. For more information about the differences
between these proxy types, see Use target
proxies .
If you attach a TLS (SSL) certificate to the target proxy and also attach
certificates through a certificate map, the proxy uses the certificates
referenced in the certificate map and ignores the directly attached certificate.
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Editor role ( roles/certificatemanager.editor )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
gcloud
To attach the certificate map to the target HTTPS proxy, use the gcloud
compute target-https-proxies update
command :
gcloud compute target-https-proxies update PROXY_NAME \
--certificate-map=" CERTIFICATE_MAP_NAME "
To attach the certificate map to the target SSL proxy, use the gcloud compute
target-ssl-proxies update
command :
gcloud compute target-ssl-proxies update PROXY_NAME \
--certificate-map=" CERTIFICATE_MAP_NAME "
Replace the following:
PROXY_NAME : the name of the target proxy.
CERTIFICATE_MAP_NAME : the name of the certificate map containing certificate map entries that
reference the target certificates.
API
To attach the certificate map to the target HTTPS proxy, make a POST request
to the targetHttpsProxies method:
POST /projects/ PROJECT_ID /global/targetHttpsProxies/ PROXY_NAME /setCertificateMap
{
certificateMap: "//certificatemanager.googleapis.com/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME ",
}
To attach the certificate map to the target SSL proxy, make a POST request to
the targetSslProxies method:
POST /projects/ PROJECT_ID /global/targetSslProxies/ PROXY_NAME /setCertificateMap
{
certificateMap: "//certificatemanager.googleapis.com/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME ",
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
PROXY_NAME : the name of the target proxy.
CERTIFICATE_MAP_NAME : the name of the certificate map containing certificate map entries that
reference the target certificates.
Detach a certificate map from a proxy
Before detaching a certificate map from a proxy, note the following:
If any TLS (SSL) certificates are attached directly to the proxy, detaching
the certificate map causes the proxy to resume using them.
If no TLS (SSL) certificates are attached directly to the proxy, certificate
map can't be detached. Attach at least one TLS certificate directly to the
proxy before detaching the certificate map.
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
gcloud
To detach any attached certificate map from the target HTTPS proxy, use the
gcloud compute target-https-proxies update
command :
gcloud compute target-https-proxies update PROXY_NAME \
--clear-certificate-map
To detach any attached certificate map from the target SSL proxy, use the
gcloud compute target-ssl-proxies update
command :
gcloud compute target-ssl-proxies update PROXY_NAME \
--clear-certificate-map
Replace the following:
PROXY_NAME : the name of the target proxy.
API
To detach any attached certificate map from the target HTTPS proxy, make a
POST request to the targetHttpsProxies method:
POST /projects/ PROJECT_ID /global/targetHttpsProxies/ PROXY_NAME /setCertificateMap
{
certificateMap: "",
}
To detach any attached certificate map from the target SSL proxy, make a
POST request to the targetSslProxies method:
POST /projects/ PROJECT_ID /global/targetSslProxies/ PROXY_NAME /setCertificateMap
{
certificateMap: "",
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
PROXY_NAME : the name of the target proxy.
Update a certificate map
You can update a certificate map's description and labels.
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Editor role ( roles/certificatemanager.editor )
Certificate Manager Owner role ( roles/certificatemanager.owner )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
gcloud
To update a certificate map, use the
gcloud certificate-manager maps update command :
gcloud certificate-manager maps update CERTIFICATE_MAP_NAME \
--description=" DESCRIPTION "
--update-labels=" LABELS "
Replace the following:
CERTIFICATE_MAP_NAME : the name of the certificate map.
DESCRIPTION : the new description for this certificate
map.
LABELS : a comma-separated list of labels applied to
this certificate map.
API
To update the certificate map, make a PATCH request to the
certificateMaps.patch method:
PATCH /v1/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME ?updateMask=labels,description"
{
"description": " DESCRIPTION ",
"labels": {
" LABEL_KEY ": " LABEL_VALUE ",
}
}
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_MAP_NAME : the name of the certificate map.
DESCRIPTION : the new description for this certificate
map.
LABEL_KEY : a label key applied to this certificate
map.
LABEL_VALUE : a label applied to this certificate
map.
List certificate maps
You can list, filter, and sort all configured certificate maps of the project.
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
On the Certificate maps tab, you can view a list of all the
configured certificate maps in the selected project.
gcloud
To list certificate maps, use the gcloud certificate-manager maps list
command :
gcloud certificate-manager maps list \
--filter=" FILTER " \
--page-size=" PAGE_SIZE " \
--limit=" LIMIT " \
--sort-by=" SORT_BY "
Replace the following:
FILTER : an expression that constrains the returned results to specific values.
For example, to filter results by the
labels and creation time, you can specify:
--filter='labels.key:value AND create_time > "2021-09-01T00:00:00Z"'
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
To list configured certificate maps, make a LIST request to the
certificateMaps.list method:
GET /v1/projects/ PROJECT_ID /locations/global/certificateMaps?filter= FILTER &pageSize= PAGE_SIZE &sortBy= SORT_BY
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
FILTER : an expression that constrains the returned results to specific values.
For example, to filter results by the
labels and creation time, you can specify:
--filter='labels.key:value AND create_time > "2021-09-01T00:00:00Z"'
For more filtering examples that you can use with
Certificate Manager, see Sorting and filtering list
results in the Cloud Key Management Service
documentation.
PAGE_SIZE : the number of results to return per page.
SORT_BY : a comma-separated list of name fields by which
the returned results are sorted. The default sort order is ascending; for
descending sort order, prefix the field with a tilde ( ~ ).
View the details of a certificate map
You can view the details of an existing certificate map, such as its creation
date-time and last update date-time.
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
selected certificate map.
gcloud
To view the state of a certificate map, use the
gcloud certificate-manager maps describe
command :
gcloud certificate-manager maps describe CERTIFICATE_MAP_NAME
Replace the following:
CERTIFICATE_MAP_NAME : the name of the certificate map.
API
To view the details of the certificate map, make a GET request to the
certificateMaps.get method:
GET /v1/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_MAP_NAME : the name of the certificate map.
Delete a certificate map
Before deleting a certificate map, do the following:
Detach the certificate map from the target proxy .
If any certificate map entries assigned to the map, delete certificate map
entries assigned to the certificate map .
Roles required for this task
To perform this task, you must have one of the following IAM roles on the target Google Cloud project.
Certificate Manager Owner role ( roles/certificatemanager.owner )
For more information, see Roles and permissions .
Note: If you aren't assigned the required roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
gcloud
To delete a certificate map, use the
gcloud certificate-manager maps delete command :
gcloud certificate-manager maps delete CERTIFICATE_MAP_NAME
Replace the following:
CERTIFICATE_MAP_NAME : the name of the certificate map.
API
To delete the certificate map, make a DELETE request to the
certificateMaps.delete method:
DELETE /v1/projects/ PROJECT_ID /locations/global/certificateMaps/ CERTIFICATE_MAP_NAME
Replace the following:
PROJECT_ID : the ID of the Google Cloud project.
CERTIFICATE_MAP_NAME : the name of the certificate map.
What's next
Manage certificates
Manage certificate map entries
Manage DNS authorizations
Manage certificate issuance configuration resources
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
