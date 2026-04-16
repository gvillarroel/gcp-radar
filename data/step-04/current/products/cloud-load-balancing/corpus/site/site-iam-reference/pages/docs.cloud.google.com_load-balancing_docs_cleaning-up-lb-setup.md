---
title: "Clean up a load balancing setup \_|\_ Cloud Load Balancing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/cleaning-up-lb-setup
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/cleaning-up-lb-setup
  title: "Clean up a load balancing setup \_|\_ Cloud Load Balancing \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Clean up a load balancing setup
Stay organized with collections
Save and categorize content based on your preferences.
After you set up a load balancer, you can delete the resources that you made so
that you aren't billed for them in the future. If these resources were created
within their own project, you can delete the entire project. Otherwise, you can
delete the resources individually.
Deleting the project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an
existing project, when you delete it, you also delete
any other work that you've done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project
ID that you want to use in the future. To preserve the URLs that use the
project ID, such as a YOUR_PROJECT_ID.REGION_ID.r.appspot.com
URL, delete selected resources inside the project instead of deleting the
project.
Console
In the Google Cloud console, go to the Projects page.
Go to Projects
In the project list, select the project that you want to delete, and then
click delete Delete .
In the dialog, type the PROJECT_ID , and then click
Shut down to delete the project.
gcloud
Run the following command, replacing PROJECT_ID with your
project ID:
gcloud projects delete PROJECT_ID
Deleting individual resources
Deleting the load balancer
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Select the checkbox next to your load balancer name.
At the top of the page, click delete Delete .
Select the checkboxes next to all the additional resources, including
backend services, backend buckets, health checks, and SSL certificates.
Click Delete load balancer and the selected resources .
Note: If you try to delete a regional external passthrough Network Load Balancer with target pool backends by using
a mixed TCP/UDP configuration from the Google Cloud console, you might get the
following message: This load balancer has TCP/UDP mixed configuration. Use
Google Cloud CLI or REST API to delete it. You first need to remove the individual
resources (forwarding rules, target proxy, URL map, health checks or target pool)
by using the Google Cloud CLI or REST API depending on whatever is configured for
the load balancer.
Deleting the Cloud Storage buckets
If you created backend buckets, deleting the load balancer and backend buckets
doesn't delete the underlying Cloud Storage buckets or the objects
contained within them.
For information about deleting Cloud Storage buckets and the objects
contained within them, see Deleting buckets .
Deleting the instance groups
If you created instance groups, delete them. Deleting the instance group
also deletes the individual VMs.
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
To select all instance groups, select the checkbox next to Name , and then
click delete Delete .
In the confirmation window, click delete Delete .
Deleting the VM instances
If you created standalone VM instances, delete them.
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Select the checkbox next to Name to select all instances, and
then click delete Delete .
In the confirmation window, click delete Delete .
Deleting the NEGs
If you created any network endpoint groups (NEGs), delete them. Deleting a NEG
also deletes network
endpoints
contained in the NEG.
In the Google Cloud console, go to the Network Endpoint Groups page.
Go to Network Endpoint Groups
Locate the network endpoint group that you want to delete.
In that row, click delete Delete .
Releasing reserved IP addresses
If your load balancer uses one or more a reserved IP addresses, make sure you
delete them.
In the Google Cloud console, go to the External IP addresses page.
Go to External IP addresses
Select the checkboxes next to your reserved IP addresses.
Click Release static address .
In the confirmation window, click delete Delete .
Deleting the VPC network
If you created a custom VPC network, delete it. Deleting a
VPC network also deletes its subnetworks, routes, and firewall
rules.
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click your custom VPC network.
On the network details page, click Delete VPC network .
In the confirmation window, click delete Delete .
Deleting custom firewall rules in the default VPC network
If you created custom firewall rules in the default VPC network,
delete them.
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
Select the checkboxes next to your custom firewall rules.
Click delete Delete .
In the confirmation window, click delete Delete .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
