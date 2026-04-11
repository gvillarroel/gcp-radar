---
title: "Roles required to install Cloud Service Mesh \_|\_ Cloud Service Mesh v1.20\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/installation-permissions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/installation-permissions
  title: "Roles required to install Cloud Service Mesh \_|\_ Cloud Service Mesh v1.20\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing legacy v1.20 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.20
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Roles required to install Cloud Service Mesh
Roles required to install managed Anthos Service Mesh
The following table describes the roles that are required to install managed
Cloud Service Mesh.
Role name
Role ID
Grant location
Description
GKE Hub Admin
roles/gkehub.admin
Fleet project
Full access to GKE Hubs and related resources.
Service Usage Admin
roles/serviceusage.serviceUsageAdmin
Fleet project
Ability to enable, disable, and inspect service states, inspect
operations, and consume quota and billing for a consumer project.
(Note 1)
CA Service Admin Beta
roles/privateca.admin
Fleet project
Full access to all CA Service resources.
(Note 2)
Roles required to install in-cluster Anthos Service Mesh
The following table describes the roles that are required to install in-cluster
Cloud Service Mesh.
Role name
Role ID
Grant location
Description
GKE Hub Admin
roles/gkehub.admin
Fleet project
Full access to GKE Hubs and related resources.
Kubernetes Engine Admin
roles/container.admin
Cluster project. Note that this role must be granted in both Fleet and
cluster project for cross-project bindings.
Provides access to full management of Container Clusters and their
Kubernetes API objects.
Mesh Config Admin
roles/meshconfig.admin
Fleet and cluster project
Provides permissions required to initialize managed components of
Cloud Service Mesh, such as managed control plane and backend permission that
allows workloads to talk to Stackdriver without each being
individually authorized (for both managed and in-cluster control planes).
Project IAM Admin
roles/resourcemanager.projectIamAdmin
Cluster project
Provides permissions to administer IAM policies on
projects.
Service Account Admin
roles/iam.serviceAccountAdmin
Fleet project
Authenticate as a service account.
Service Management Admin
roles/servicemanagement.admin
Fleet project
Full control of Google Service Management resources.
Service Usage Admin
roles/serviceusage.serviceUsageAdmin
Fleet project
Ability to enable, disable, and inspect service states, inspect
operations, and consume quota and billing for a consumer
project. (Note 1)
CA Service Admin Beta
roles/privateca.admin
Fleet project
Full access to all CA Service resources.
(Note 2)
Notes:
Service Usage Admin - This role is necessary
as a prerequisite to enable the mesh.googleapis.com API when
initially provisioning managed Cloud Service Mesh.
CA Service Admin - This role is only required if you
are integrating with CA Service.
What's next
For a list of the specific permissions in each role, copy the role and search
for it Understanding roles .
To learn more about how to grant IAM roles, see
Granting, changing, and revoking access to resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
