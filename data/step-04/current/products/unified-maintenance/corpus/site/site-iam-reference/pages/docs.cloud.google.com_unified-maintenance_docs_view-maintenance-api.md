---
title: "View resource maintenances by using the API \_|\_ Unified Maintenance \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/view-maintenance-api
  title: "View resource maintenances by using the API \_|\_ Unified Maintenance \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Unified Maintenance
Guides
Send feedback
View resource maintenances by using the API
Stay organized with collections
Save and categorize content based on your preferences.
You can use the Unified Maintenance API to return information about maintenance on your resources.
This document describes how to use Cloud Shell to call the
Unified Maintenance API to return resource maintenance.
To view upcoming and historical maintenance activities in Cloud Hub,
see View maintenance activities .
Before you begin
Before you view maintenance on your resources using
Unified Maintenance, verify that Unified Maintenance supports your
resource types .
Filters
You can filter which maintenance activities are returned by several parameters:
State ( SUCCEEDED , or STARTED , for example)
Resource name
Resource location
Resource type
Maintenance name
Maintenance start time
Maintenance end time
For more information, see
Unified Maintenance API documentation.
View resource maintenances
You can use the Unified Maintenance API to return maintenance activity
information for a Google Cloud project.
To list all maintenance activities:
Go to Cloud Shell.
Go to Cloud Shell
Run the command:
curl \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type:
application/json" \
https://maintenance.googleapis.com/v1beta/projects/ PROJECT_ID /locations/ LOCATION /resourceMaintenances
Replace:
PROJECT_ID : The project ID of your project.
LOCATION : Region or zone containing your project. Set
to global , region , or - (to match all locations).
Unified Maintenance returns information about resource maintenances for
your specified project.
View maintenances for a resource
You can use the Unified Maintenance API to return maintenances for a
specified resource.
To filter and print maintenances for a specified resource:
Go to Cloud Shell.
Go to Cloud Shell
Run the command:
curl \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type:
application/json" \
https://maintenance.googleapis.com/v1beta/projects/ PROJECT_ID /locations/ LOCATION /resourceMaintenances?filter=FILTER=%22 RESOURCE_NAME %22
Replace:
PROJECT_ID : The project ID of your project.
LOCATION : Region or zone containing your project. Set
to global , region , or - (to match all locations).
RESOURCE_NAME : The full resource name of your resource.
Note: For target resources that are regional and global, the location of
ResourceMaintenance is always the same as the target resource location.
For target resources that are zonal, the ResourceMaintenance location is a region
corresponding to the zone of target resource. For example, for a Cloud SQL
instance in the us-west1-a zone, the ResourceMaintenance is in the
us-west1 region.
What's next
Learn how to configure alerts and notifications
based on different webhooks.
Use Unified Maintenance to reschedule or perform on-demand updates .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
