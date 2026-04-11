---
title: "Chart request counts per repository in the Metrics Explorer \_|\_ Artifact\
  \ Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts
  title: "Chart request counts per repository in the Metrics Explorer \_|\_ Artifact\
    \ Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Chart request counts per repository in the Metrics Explorer
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how you can chart Artifact Registry request count metrics in
the Metrics Explorer, and manipulate the chart by different parameters such
as read requests, write requests, method and repository ID.
Required roles
To get the permissions that
you need to view monitoring data and configuration information,
ask your administrator to grant you the
Monitoring Viewer ( roles/monitoring.viewer )
IAM role on the Google Cloud project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about controlling access to monitoring data, read
Control access with IAM .
Chart API request counts per repository
When using Metrics Explorer, you can select the data to chart by making
selections in the menus or by entering a PromQL query. For more information
about creating charts, see
Create a chart in the Metrics Explorer .
To view the metrics for a monitored resource by using the
Metrics Explorer, do the following:
In the Google Cloud console, go to the
leaderboard Metrics explorer page:
Go to Metrics explorer
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the toolbar of the Google Cloud console, select your Google Cloud project.
For App Hub configurations, select the
App Hub host project or the app-enabled folder's management project.
In the Metric element, expand the Select a metric menu,
enter Artifact Registry
in the filter bar, and then use the submenus to select a specific resource type and metric:
In the Active resources menu, select Artifact Registry Repository .
In the Active metric categories menu, select Repository .
In the Active metrics menu, select Data plane API request count per repository .
Data plane API requests are made by tools like
Docker, Maven, Pip, Twine, or Gradle tools that make requests to the data-plane
API. You can view all methods that create requests to the data-plane API in
Data plane API .
If you want to view control plane API requests made by methods listed in
google.devtools.artifactregistry.v1.ArtifactRegistry ,
then select Control plane API request count per repository .
Click Apply .
The fully qualified name for this metric is artifactregistry.googleapis.com/repository/request_count .
To add filters, which remove time series from the query results, use the
Filter element .
Configure how the data is viewed. To specify a subset of data to display, in the
Filter element, select Add filter , and then complete the dialog.
For example, you can view data for the following:
Read requests: apply a filter for the Metric label type equal to the
value READ .
Write requests: apply a filter for the Metric label type equal to the
value WRITE .
Method: apply a filter for the Metric label method with a value from
the methods listed in the Data plane API . For
example, apply a filter method equal to the value of Docker-DeleteBlob
to filter for image layer deletion.
Repository ID: apply a filter for the Metric label repository_id equal
to the repository ID. For example my-repo .
For more information about configuring a chart, see
Select metrics when using Metrics Explorer.
You can add multiple filters. For more information on filtering data, see
Filter charted data and
the labels descriptions for Artifact Registry metrics in the list of
Google Cloud Metrics .
For more information on selecting data, see
Select the data to chart .
What's next
Learn how to save a chart for future reference .
View Artifact Registry data-plane and control-plane methods that you
can use as filters in API interface audit logs .
Explore charted data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
