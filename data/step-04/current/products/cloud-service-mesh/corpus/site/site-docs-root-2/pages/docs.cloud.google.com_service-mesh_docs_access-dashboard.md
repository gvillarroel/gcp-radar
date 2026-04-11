---
title: "Controlling access to Cloud Service Mesh in the Google Cloud console \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/access-dashboard
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/access-dashboard
  title: "Controlling access to Cloud Service Mesh in the Google Cloud console \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Controlling access to Cloud Service Mesh in the Google Cloud console
Access to Cloud Service Mesh in the Google Cloud console is controlled by
Identity and Access Management (IAM) .
To get access, a Project Owner must grant users the Project Editor or Viewer
role, or the more restrictive roles described in the following tables. For
information about how to grant roles to users, see
Granting, changing, and revoking access to resources .
Minimum read-only roles
Users with the following roles can access the Cloud Service Mesh pages for
monitoring purposes only. Users with these roles can't create or modify service
level objects (SLOs) or make changes to the GKE
infrastructure.
IAM role name
Role title
Description
Monitoring Viewer
roles/monitoring.viewer
Provides read-only access to get and list information about all
monitoring data and configurations.
Kubernetes Engine Viewer
roles/container.viewer
Provides read-only access to GKE resources. This
role is not required for GKE clusters on
Google Cloud.
Logs Viewer
roles/logging.viewer
Provides read-only access to the Diagnostics page in the service details
view. If access to this page is not needed, then this permission may be
omitted.
Service Usage Viewer
roles/serviceusage.serviceUsageViewer
Ability to inspect service states and operations for a consumer project.
Minimum write roles
Users with the following roles can create or modify SLOs in the Cloud Service Mesh
pages and create or modify alerting policies based on the SLOs. Users with
these roles can't make changes to the GKE infrastructure.
IAM role name
Role title
Description
Monitoring Editor
roles/monitoring.editor
Provides full access to information about all monitoring data and
configurations.
Kubernetes Engine Editor
roles/container.editor
Provides write permissions needed to managed GKE
resources.
Logs Editor
roles/logging.editor
Provides write permissions needed to the Diagnostics page in the service
details view.
Special cases
The following roles are required for particular mesh configurations.
IAM role name
Role title
Description
GKE Hub Viewer
roles/gkehub.viewer
Provides view access to clusters outside Google Cloud in the Google Cloud console. This role is required for users to view off-Google Cloud clusters in the mesh. Also, you will need to grant the user the cluster-admin RBAC role to allow the dashboard to query the cluster on their behalf.
Additional roles and permissions
IAM has additional roles and granular permissions if the above roles
don't meet your needs. For example, you might want to grant the Kubernetes
Engine Admin role or the Kubernetes Engine Cluster Admin role to let a user
administer your GKE infrastructure.
For more information see the following:
Understanding roles
Kubernetes Engine roles
Monitoring roles
What's next
Explore Cloud Service Mesh in the Google Cloud console
Service level objectives overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
