---
title: "Visualize data profiles in the discovery dashboard \_|\_ Sensitive Data Protection\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-dashboard
knowledge_key: corpus
source_id: site-docs-root-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-dashboard
  title: "Visualize data profiles in the discovery dashboard \_|\_ Sensitive Data\
    \ Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Visualize data profiles in the discovery dashboard
Stay organized with collections
Save and categorize content based on your preferences.
This section describes the information displayed in the discovery dashboard
in the Google Cloud console.
For more information about the discovery service, see Overview of
sensitive data discovery .
If you want to query data profiles and perform custom visualizations through
Looker, see Analyze data
profiles .
Before you begin
Confirm that you have the IAM permissions that are required to
work with scan configurations and data profiles at the organization
or project
level.
Information in the discovery dashboard
The discovery dashboard provides a visual summary of data assets in the current
resource (organization or project) that have been profiled by the
Sensitive Data Protection discovery service. This dashboard provides the
following information:
Product coverage: Shows which discovery types are enabled in the resource.
For each enabled discovery type, this section shows high-level details, such
as profile counts categorized by data sensitivity level. Each data source
that discovery
supports
has a corresponding discovery type.
Data profiles by geography: Shows data profile counts in each region and
multi-region where you have data that was profiled.
Data profiles map: Plots the locations of the profiled data on a map.
Locations are represented by circles of varying sizes and colors. Locations
that have more data profiles are represented by larger circles on the map.
Locations with moderate-sensitivity or high-sensitivity data are red.
Locations with only low-sensitivity data are green. To see more details about
the data in a location, hold the pointer over the circle.
BigQuery profiles with infoType: If the BigQuery discovery type
is enabled, this pie chart shows the infoTypes detected in your
BigQuery data.
Cloud SQL profiles with infoType: If the Cloud SQL discovery type
is enabled, this pie chart shows the infoTypes detected in your
Cloud SQL data.
Risk over time: Plots the data risk levels of all profiled data in a time
series chart. For more information about how data risk and sensitivity levels
are calculated, see Data risk and sensitivity
levels .
Sensitivity over time: Plots the sensitivity levels of all profiled data
in a time series chart.
View the discovery dashboard
In the Google Cloud console, go to the discovery dashboard.
Go to Discovery dashboard
Select the organization or project that you want to view.
What's next
Learn how to analyze data profiles and visualize them in Looker .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
