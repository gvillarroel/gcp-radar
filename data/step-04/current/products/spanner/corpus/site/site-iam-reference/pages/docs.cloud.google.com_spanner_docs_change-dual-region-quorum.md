---
title: "Change dual-region quorum \_|\_ Spanner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/configure-fgac
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum
  title: "Change dual-region quorum \_|\_ Spanner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
Change dual-region quorum
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to check the health status of your Spanner
dual-region quorum, and how to manually change the quorum in case of service
disruptions.
For more information about dual-regions, see Spanner
Dual-region instance configurations .
Check dual-region quorum status
You can check the status of your dual-region quorum in the following ways:
On the Database overview page
Use the System insights dashboard
Use a Cloud Monitoring REST API or Google Cloud CLI
On the Database overview page
Go to the Spanner Instances page in the Google Cloud console.
Go to the Instances page
Click the name of the instance that is in a dual-region configuration.
Click the name of the database.
Under Overview, look for the Quorum row, which shows the dual-region
quorum status of your instance:
If quorum is met in both regions, the status shows Dual-region .
If a manual or Google-managed failover has been performed, you see the
name of the serving region (for example, asia-south1 ).
Use the System insights dashboard
After you create a dual-region configuration, you can view the
Dual-region quorum health timeline
metric on the Instance-level System insights dashboard.
For more information, see View the system insights dashboard .
Use the Monitoring REST API or gcloud CLI
You can use the Monitoring REST API or gcloud CLI
to check the health of your dual-region quorum.
Monitoring REST API
Use the Monitoring projects.timeSeries.list
API to query the Dual-region quorum health timeline
to check if a region is healthy at a given time.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID.
DUAL_REGION_LOCATION : the location of the region in the dual-region that you want to check.
START_TIME : the start time of the query. We recommend using 5 minutes before the current time.
END_TIME : the end time of the query. We recommend using the current time.
HTTP method and URL:
GET https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries
Request JSON body:
{
"name": " PROJECT_ID ",
"aggregation.alignmentPeriod": "60s",
"aggregation.crossSeriesReducer": "REDUCE_FRACTION_TRUE",
"aggregation.groupByFields": "resource.labels.location",
"aggregation.perSeriesAligner": "ALIGN_NEXT_OLDER",
"filter": "metric.labels.quorum_availability = "Healthy" AND metric.type = "spanner.googleapis.com/instance/dual_region_quorum_availability" AND resource.labels.location = " DUAL_REGION_LOCATION "",
"interval.startTime": " START_TIME ",
"interval.endTime": " END_TIME "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://monitoring.googleapis.com/v3/projects/ PROJECT_ID /timeSeries" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"timeSeries": [
{
"metric": {
"type": "spanner.googleapis.com/instance/dual_region_quorum_availability"
},
"resource": {
"type": "spanner_instance",
"labels": {
"project_id": "spanner-project",
"location": "australia-southeast1"
}
},
"metricKind": "GAUGE",
"valueType": "DOUBLE",
"points": [
{
"interval": {
"startTime": "2024-07-11T05:41:23Z",
"endTime": "2024-07-11T05:41:23Z"
},
"value": {
"doubleValue": 1
}
}
]
}
],
"unit": "10^2.%"
}
If you don't see a similar response, your region might not be healthy, and
you might need to
change the dual-region quorum from dual-region to single region .
gcloud CLI
Download the dual-region-quorum-health-check-script.sh
file.
This bash script checks the region health of your single region. If the
region is healthy, then the script runs the
gcloud spanner databases change-quorum
command to manually failover the dual-region quorum from dual-region to
single region.
Replace the following variables in the script:
PROJECT : your project ID.
INSTANCE : your instance ID.
DATABASE : your database ID.
SERVING_LOCATION : the location of the region in the dual-region that
you want to check.
Run the script in the development environment of your choice. For more
information, see
Install the gcloud CLI and set up the Spanner API .
Manually failback if your region was unhealthy and there
was a failover.
Change the dual-region quorum from dual-region to single region (failover)
To failover manually if there is a regional outage or a network partitioning
issue:
Google Cloud console
Go to the Spanner Instances page in the Google Cloud console.
Go to the Instances page
Click the name of the instance that is in a dual-region configuration.
Click System insights in the navigation menu.
Find the Dual-region quorum health timeline metric.
If the Dual-region quorum health timeline shows there is disruption
in a region, click Change region quorum .
The Cloud Shell opens.
To change the dual-region quorum from dual-region to a single region,
enter the following command found in the gcloud CLI tab:
gcloud spanner databases change-quorum . For detailed instructions,
refer to the gcloud tab.
gcloud CLI
Use the gcloud spanner databases change-quorum
command to change the dual-region quorum from dual-region to a single region.
gcloud spanner databases change - quorum
DATABASE_ID -- instance = INSTANCE_ID
-- single - region -- serving - location = SERVING_LOCATION
[ -- etag = ETAG ]
Replace the following:
DATABASE_ID : The permanent identifier of the
database.
INSTANCE_ID : The permanent identifier for the
instance.
SERVING_LOCATION : The regional instance
configuration to which you want to failover. For example, if asia-south1
(Mumbai) is unhealthy, and you want to failover to asia-south2 (Delhi),
input asia-south2 . Make sure the SERVING_LOCATION is the healthy
region. Choosing a wrong region to failover results in database
unavailability, which is unrecoverable before the region is back online.
Optional flags:
--etag= ETAG : The ETAG
argument can be used for replay protection.
To check the status of your quorum change operation, run the
gcloud spanner databases describe
command. The quorumInfo field provides information about the operation.
gcloud spanner databases describe DATABASE_ID
--instance= INSTANCE_ID
Change the dual-region quorum from single region to dual-region (failback)
To failback manually after the disrupted region is healthy or after the network
partition issue is resolved:
Google Cloud console
Go to the Spanner Instances page in the Google Cloud console.
Go to the Instances page
Click the name of the instance that is in a dual-region configuration.
Click System insights in the navigation menu.
Find the Dual-region quorum health timeline metric.
On the Dual-region quorum health timeline, click Change region quorum .
The Cloud Shell opens.
To change the dual-region quorum from single region to a dual-region,
enter the following command found in the gcloud CLI tab:
gcloud spanner databases change-quorum . For detailed instructions,
refer to the gcloud tab.
gcloud CLI
Use the gcloud spanner databases change-quorum
command to change the dual-region quorum from single region to a dual-region.
gcloud spanner databases change - quorum
DATABASE_ID -- instance = INSTANCE_ID
-- dual - region
[ -- etag = ETAG ]
Replace the following:
DATABASE_ID : The permanent identifier of the
database.
INSTANCE_ID : The permanent identifier for the
instance.
Optional flags:
--etag= ETAG : The ETAG
argument can be used for optimistic concurrency control.
To check the status of your quorum change operation, run the
gcloud spanner databases describe
command. The quorumInfo field provides information about the operation.
gcloud spanner databases describe DATABASE_ID
--instance= INSTANCE_ID
What's next
Learn more about Dual-region instance configurations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
