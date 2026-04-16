---
title: "Monitor disk availability \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/using-ood-recommender
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/using-ood-recommender
  title: "Monitor disk availability \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Monitor disk availability
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
The Cloud SQL out-of-disk recommender proactively
generates recommendations that help you reduce the risk
of downtime that might be caused by your instances running out of disk space.
You can apply these recommendations when a Cloud SQL instance is trending
toward a storage limit. This page describes how this recommender works and how
to use it.
How it works
The Cloud SQL out-of-disk recommender analyzes the storage utilization trend
over the last 30 days. When an instance is trending toward a limit
where it's likely to run out of space within the next 1 to 30 days, the recommender
generates related recommendations to manually increase the storage capacity, set
the storage capacity to automatically increase, or free up space.
Pricing
The Cloud SQL out-of-disk recommender is included in the Standard Google Cloud support package .
Before you begin
Before you can view recommendations and insights, do the following:
To get the permissions to view and work with insights and recommendations,
ensure that you have the required roles .
Tasks
Roles
View recommendations
One of these roles: recommender.cloudsqlViewer or
cloudsql.viewer .
Apply recommendations
One of these roles: recommender.cloudsqlAdmin , cloudsql.editor ,
or cloudsql.admin .
For more information about roles, see
understanding roles and
granting IAM permissions .
Enable the Recommender API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
List out-of-disk recommendations
You can list out-of-disk instance recommendations by
using the Google Cloud console, gcloud , or the Recommender API.
Out-of-disk recommendations are shown only if you have instances that
are nearing disk capacity.
Console
To list out-of-disk recommendations by using the Google Cloud console, follow these steps:
Go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Click View all on the out-of-disk recommendations banner.
Alternatively, follow these steps:
Go to the Active Assist . See also Getting started with Recommendation Hub .
Go to the Active Assist
In the Prevent Downtime for SQL instances card, click View all .
gcloud
To list out-of-disk recommendations by using gcloud , run the
gcloud recommender recommendations list
command as follows:
gcloud recommender recommendations list \
--project= PROJECT_ID \
--location= LOCATION \
--recommender=google.cloudsql.instance. RECOMMENDER
Replace the following:
PROJECT_ID : Your project ID
LOCATION : A region, such as us-central1
RECOMMENDER : The ID of the recommender as OutOfDiskRecommender .
API
To list out-of-disk recommendations by using the
Recommendations API , call the
recommendations.list
method as follows:
GET https://recommender.googleapis.com/v1beta1/projects/ PROJECT-ID /locations/ LOCATION /recommenders/google.cloudsql.instance. RECOMMENDER /recommendations
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : A region, such as us-central1 .
RECOMMENDER : The ID of the recommender as OutOfDiskRecommender .
View insights and detailed recommendations
You can view insights and detailed recommendations about instances
that are nearly out of disk space by using the Google Cloud console,
gcloud , or the Recommender API.
Console
To view insights and detailed recommendations about instances that are nearly
out of disk space by using the Google Cloud console, click the recommendation
button in the list of instances.
gcloud
To view insights and detailed recommendations about instances that are nearly
out of disk space by using gcloud , run the
gcloud recommender insights list
command as follows:
gcloud recommender insights list \
--project= PROJECT_ID \
--location= LOCATION \
--insight-type=google.cloudsql.instance. INSIGHT_TYPE
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : A region, such as us-central1 .
INSIGHT_TYPE : The ID of the insight type as DiskUsageTrendInsight .
API
To view insights and detailed recommendations about instances that are nearly
out of disk space by using the Recommendations API ,
call the insights.list
method as follows:
GET https://recommender.googleapis.com/v1beta1/projects/ PROJECT-ID /locations/ LOCATION /insightTypes/google.cloudsql.instance. INSIGHT_TYPE /insights
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : A region, such as us-central1 .
INSIGHT_TYPE : The ID of the insight type as DiskUsageTrendInsight .
The following table lists the insight and recommendation that the Cloud SQL
out-of-disk recommender generates. The subtypes are visible in the gcloud and
API results.
Insight
Recommendation
Based on the current storage use trend, the instance is likely to run
out of disk space, which can result in downtime.
Subtype: TRENDING_OUT_OF_DISK
Enable auto grow, manually increase storage capacity, or free up disk space.
Subtype: ENABLE_AUTO_STORAGE_INCREASE
Apply recommendations
Evaluate the recommendations carefully and do any of the following:
To examine the recommendation, click View instance .
A banner appears at the top of the page providing a recommendation.
Edit the instance, if required, to manually increase the storage capacity and set the storage
capacity to automatically increase .
Alternatively, delete data to free up space.
To dismiss the recommendation so that it's de-emphasized and appears dimmed,
click Dismiss .
To close the panel without applying or dismissing the recommendation, click
Cancel .
What's next
Reduce idle Cloud SQL instances
Reduce overprovisioned Cloud SQL instances
Blog: Maximize your Cloud ROI
Blog: Do more with less
Google Cloud recommenders
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
