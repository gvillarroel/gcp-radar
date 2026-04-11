---
title: "Service instance autoscaling \_|\_ Immersive Stream for XR \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/immersive-stream/xr/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling
  title: "Service instance autoscaling \_|\_ Immersive Stream for XR \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Immersive Stream for XR
Guides
Send feedback
Service instance autoscaling
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how autoscaling automatically resizes your Immersive Stream for XR
service instance and how to configure autoscaling on a service instance. By
default, service instances have static capacity. With autoscaling enabled, your
service instance automatically scales up and down to meet demand.
How autoscaler works
The autoscaler is region-specific and scales capacity based on the following
values:
Minimum capacity: This represents the minimum amount of capacity. It
includes both allocated capacity and ready capacity that the autoscaler
should maintain. Ready streaming servers are available to serve new streaming
sessions requests from users. Allocated streaming servers actively serve a
streaming session.
Buffer: This represents the amount of ready capacity
that the autoscaler should maintain.
Maximum capacity: This is the maximum amount of the total of combined allocated and
ready streaming servers that the autoscaler can provision.
While the autoscaler scales to maintain the buffer, new streaming
servers are not immediately available and can take some time to be provisioned
before they can serve a streaming session. This makes the autoscaler ideal for
periods of consistently high or low traffic where it can scale up or down to
meet demand. You are billed for the amount of capacity your instance has, so
during periods of low traffic, the autoscaler should scale down and allow for
some cost-savings when compared with a non-autoscaled service instance.
Configure the buffer, minimum capacity, and maximum capacity values such that
the buffer is less than or equal to the minimum capacity and both are less
than the maximum capacity . All three values must be greater than zero.
Using the autoscaler
The following section explains how to configure autoscaling for your service
instance regions.
Create a service instance with an autoscaled region
Console
In the Google Cloud console, go to the Create a service instance page.
Go to Create a service instance
Complete the initial steps in the instance creation form. For more details,
see the
Quickstart guide .
In the Enable service instance locations step, select a region and
select the Enable autoscaling checkbox.
Enter the maximum capacity, minimum capacity, and buffer size values and
then click Done .
Add additional regions as needed and then complete the remaining steps in
the form before clicking CREATE to create your service instance.
gcloud
To create a service instance with autoscaled and non-autoscaled regions,
use the following command:
gcloud immersive-stream xr instances create INSTANCE_NAME \
--content = CONTENT_NAME \
--version = CONTENT_VERSION \
--add-region = "region= REGION_1 ,capacity= MAXIMUM_CAPACITY ,enable_autoscaling=true,autoscaling_buffer= BUFFER ,autoscaling_min_capacity= MINIMUM_CAPACITY " \
--add-region = "region= REGION_2 ,capacity= CAPACITY " \
--async
Replace the following:
INSTANCE_NAME : the name of the service instance.
CONTENT_NAME : the name of the content resource to deploy to the instance.
REGION_1 : the first region for the new service instance. See Locations and Pricing for all options.
MAXIMUM_CAPACITY : the maximum capacity in the first region.
BUFFER : the buffer in the first region.
MINIMUM_CAPACITY : the minimum capacity in the first region.
REGION_2 : the second region for the new service instance. See Locations and Pricing for all options.
CAPACITY : the capacity for the non-autoscaled region
This is an asynchronous operation. To check the status of the creation,
describe the instance. A lifecycle state of Ready indicates that the operation is complete.
gcloud immersive-stream xr instances describe INSTANCE_NAME
Example:
The following command creates a service instance with two regions, an
autoscaled region with maximum capacity of 5, minimum capacity of 3 and a
buffer of 2, and a non-autoscaled region with capacity of 3:
gcloud immersive-stream xr instances create my_instance \
--content=my_content \
--version=v1 \
--add-region="region=us-west4,capacity=5,enable_autoscaling=true,autoscaling_buffer=2,autoscaling_min_capacity=3" \
--add-region="region=us-central1,capacity=3" \
--async
Add a region with autoscaling enabled
Console
In the Google Cloud console, go to the Service instances list page.
Go to Service instances list
In the Service instance column, click the name of your instance
to go to the Service instance detail page.
Above the Regions table, click Add . This opens the Add region panel.
Select a region.
Select the Enable autoscaling checkbox.
Enter the maximum capacity, minimum capacity, and buffer size values and
then click ADD .
gcloud
To add a region with autoscaling, use the following command:
gcloud immersive-stream xr instances update INSTANCE_NAME \
--add-region == "region= REGION ,capacity= MAXIMUM_CAPACITY ,enable_autoscaling=true,autoscaling_buffer= BUFFER ,autoscaling_min_capacity= MINIMUM_CAPACITY " \
--async
Replace the following:
INSTANCE_NAME : the name of the service instance.
REGION : the region to add.
MAXIMUM_CAPACITY : the maximum capacity in the region.
BUFFER : the buffer in the region.
MINIMUM_CAPACITY : the minimum capacity in the region.
This is an asynchronous operation. To check the status of the update,
describe the instance. A lifecycle state of Ready indicates that the operation is complete.
gcloud immersive-stream xr instances describe INSTANCE_NAME
Example:
The following command adds a region with maximum capacity of 5, minimum
capacity of 3 and a buffer of 2:
gcloud immersive-stream xr instances update my_instance \
--add-region="region=us-west4,capacity=5,enable_autoscaling=true,autoscaling_buffer=2,autoscaling_min_capacity=3" \
--async
Enable autoscaling in a region
Console
In the Google Cloud console, go to the Service instances list page.
Go to Service instances list
In the Service instance column, click the name of your instance
to go to the Service instance detail page.
Find the row containing the region that you want to update in the
Regions table, and click the overflow action button
(three vertical dots) on the right side of the row. Click Edit .
This opens the Edit capacity panel.
Check the Enable autoscaling checkbox.
Fill out the maximum capacity, minimum capacity, and buffer size fields and
then click SAVE .
gcloud
To enable autoscaling in a region, use the following command:
gcloud immersive-stream xr instances update INSTANCE_NAME \
--update-region = "region= REGION ,capacity= MAXIMUM_CAPACITY ,enable_autoscaling=true,autoscaling_buffer= BUFFER ,autoscaling_min_capacity= MINIMUM_CAPACITY " \
--async
Replace the following:
INSTANCE_NAME : the name of the service instance.
REGION : the region to enable autoscaling in.
MAXIMUM_CAPACITY : the maximum capacity in the region.
BUFFER : the buffer in the region.
MINIMUM_CAPACITY : the minimum capacity in the region.
This is an asynchronous operation. To check the status of the update,
describe the instance. A lifecycle state of Ready indicates that the operation is complete.
gcloud immersive-stream xr instances describe INSTANCE_NAME
Example:
The following command enables autoscaling in a region with maximum capacity
of 5, minimum capacity of 3 and a buffer of 2:
gcloud immersive-stream xr instances update my_instance \
--update-region="region=us-west4,capacity=5,enable_autoscaling=true,autoscaling_buffer=2,autoscaling_min_capacity=3" \
--async
Disable autoscaling in a region
Console
In the Google Cloud console, go to the Service instances list page.
Go to Service instances list
In the Service instance column, click the name of your instance
to go to the Service instance detail page.
Find the row containing the region that you want to update in the
Regions table, and click the overflow action button
(three vertical dots) on the right side of the row. Click Edit .
This opens the Edit capacity panel.
Clear the Enable autoscaling checkbox.
Enter the capacity value and then click SAVE .
gcloud
To disable autoscaling in a region, use the following command:
gcloud immersive-stream xr instances update INSTANCE_NAME \
--update-region = "region= REGION ,capacity= CAPACITY ,enable_autoscaling=false" \
--async
Replace the following:
INSTANCE_NAME : the name of the service instance.
REGION : the region to disable autoscaling in.
CAPACITY : the capacity in the region.
This is an asynchronous operation. To check the status of the update,
describe the instance. A lifecycle state of Ready indicates that the operation is complete.
gcloud immersive-stream xr instances describe INSTANCE_NAME
Example:
The following command disables autoscaling in a region:
gcloud immersive-stream xr instances update my_instance \
--update-region="region=us-west4,capacity=5,enable_autoscaling=false" \
--async
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
