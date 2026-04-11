---
title: "Configure a cluster and workload for staging \_|\_ Kubernetes Engine \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/admin-workflow
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/admin-workflow
  title: "Configure a cluster and workload for staging \_|\_ Kubernetes Engine \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Configure a cluster and workload for staging
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
While GKE clusters in Autopilot mode provide reasonable
defaults for most settings, it's likely that you'll need different settings
in your development, staging, and production environments.
Objectives
Learn some basic tasks for configuring a staging and testing cluster:
Limit access to the cluster's administrative service, which is called
the control plane . This prevents unauthorized users from viewing or
changing cluster and workload settings.
Specify that your app needs computing resources that efficiently scale up
and down to meet demand.
Test autoscaling, which automatically replicates Pods when demand increases
beyond a threshold you specify.
Adjust log retention so you only keep the logs you need.
Enable the GKE security posture dashboard.
These are just some of the tasks for promoting a cluster from development
to staging. Read the
GKE documentation for the full
list of tasks to consider.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Costs
In this document, you use the following billable components of Google Cloud:
GKE
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Create a Kubernetes cluster and deploy a workload.
Create a cluster and deploy a workload
shows you how.
Limit access to the control plane
To improve your security posture, allow only an authorized network and
Google Cloud console and Cloud Shell to access your cluster's
control plane.
Configure an authorized network
In the Google Cloud console, go to the
GKE Clusters page.
Go to Clusters
In the Name column, click the name of your cluster, hello-world-cluster .
In the Control plane authorized networks
row of the Networking table, click edit Edit .
In the Edit control plane authorized networks dialog, select
Enable control plane authorized networks .
Select Allow access through Google Cloud public IP addresses .
This lets you manage the cluster from Google Cloud console and
Cloud Shell
Click Add authorized network .
Enter a name, such as My example on-prem network .
In Network , enter the range of IP addresses that you want to grant
access to your cluster's control plane. Use CIDR notation.
For example, enter the following range:
198.51.100.0/24
Click Done .
Click Save changes .
This operation takes a few minutes to complete.
Click the
Notifications button and wait until you see a green
check mark next to Update control plane authorized networks setting in Kubernetes Engine cluster "hello-world-cluster" .
You have configured a cluster control plane that is accessible only
from your authorized network and from Google Cloud public IP
addresses (which lets you manage the cluster from
Google Cloud console and Cloud Shell).
To see the IP address of your cluster's control plane and confirm the addresses
of the authorized network, click Next .
View IP addresses
Go to the GKE Clusters page.
Go to Clusters
In the Name column, click the name of your cluster, hello-world-cluster .
In the Cluster basics table, the External endpoint row shows the
IP address of the cluster's control plane.
In the Networking table, the Control plane authorized networks row
shows the IP addresses of your authorized network.
Your cluster's control plane can now only be accessed from an authorized network,
Google Cloud console, and Cloud Shell.
Specify a compute class
By default, GKE Autopilot Pods use compute resources
that are optimized for general-purpose workloads. For workloads that need to
scale optimally or that have other unique requirements, you can specify a
different compute class.
Update the Deployment specification
In the Google Cloud console, go to the GKE Workloads page.
Go to Workloads
In the Name column, click the name of the app you deployed,
hello-world-app .
Click Edit
to edit the deployment specification.
In the YAML tab, find the line that starts with containers:
Just above this line, add the following lines:
nodeSelector:
cloud.google.com/compute-class: "Scale-Out"
Make sure your file matches the indentation in the following example:
apiVersion: apps/v1
kind: Deployment
...
spec:
...
template:
...
spec:
nodeSelector:
cloud.google.com/compute-class: "Scale-Out"
containers:
- name: hello-app
image: us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0
To download this file and use it as the basis for other workload
configurations, click Download .
Click Save .
Any Pod replicas that are created to run your workload will use the compute
class you specified.
Test autoscaling
Now that you have a workload that can scale efficiently, update autoscaling
settings to more easily cause your workload to scale up. Then generate load to
trigger autoscaling.
Update Pod autoscaling settings
Go to the GKE Workloads page.
Go to Workloads
In the Name column, click the name of your deployment, hello-world-app .
Click Actions .
Select Autoscale and click Horizontal pod autoscaling .
In the Configure Horizontal Pod Autoscaler dialog, under
Autoscaling metrics , click CPU .
Change the value of Target to 2, which automatically scales up your Pods
when they use at least 2% of their configured CPU resources. This low target
value ensures that you can easily trigger autoscaling in the next step.
Click Save .
To trigger autoscaling, click Next .
Generate load to trigger autoscaling
Open Cloud Shell by clicking
Cloud
Shell .
Paste the following command into Cloud Shell:
for i in $(seq -s' ' 1 10000); do wget -q -O- <var>external-IP-address</var>; done
Replace external-IP-address with the IP address that appears
in the
Endpoints
column.
Press Enter to run the command and send 10,000 requests to hello-world-app.
Wait for the wget command to finish running and the command-line prompt to
reappear.
You can close Cloud Shell when the wget command finishes.
To watch your workload scale to accommodate the increased traffic, click Next .
Watch your workload scale
On the Deployment details page for your workload, look in the
CPU
chart for a spike in CPU usage.
You might need to wait up to 5 minutes to see the spike.
Click refresh Refresh
to make sure the Deployment details page shows the latest data.
Look in the Managed Pods table to see that three replicas of your workload
are now running.
You might initially see errors about unschedulable Pods, but these messages
are transient as the replicas start up.
You can wait for about 10 minutes, click refresh Refresh ,
and see that CPU usage has dropped and so the number of Pods in
Managed Pods returns to one.
You have tested autoscaling and watched your workload scale.
Adjust logs retention
By default, Cloud Logging ingests all logs from your GKE
clusters. Ingesting large amounts of logs data could result in a fee. To ensure
that you're only ingesting the logs data that you need for the staging environment,
adjust logs retention.
Create a logs filter
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Notice that the Query results
pane shows logs from all resources in your project.
Above the query results:
Click Resource .
Search for Kubernetes cluster , then click it.
Click us-central-1 .
Click hello-world-cluster .
Click Apply .
Click Severity and
select Info (which changes to Info and higher on hover).
Click Run query .
Note that Query results now only contains INFO messages from your
staging cluster.
Copy the query from the query editor. You'll paste this query when you
create a filter for your log sink.
To create a log sink and storage bucket, click Next .
Create a log sink and storage bucket
Go to the Logging Log router page.
Go to Log router
Click Create sink .
In Name , enter the following name:
hello-world-cluster-sink
Click Next .
In Select sink service , select Logging bucket .
In Select a log bucket , select Create new log bucket .
In Bucket details , enter a unique name, such as:
hello-world-bucket-<var>user-id</var>
Click Create bucket .
Under Sink destination , click Next .
In Build inclusion filter , paste the query you created in the Logs Explorer.
Click Create sink .
To view your cluster's logs, which are stored in the log bucket you
created, click Next .
View your cluster's logs
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Click Refine scope .
Select Log View .
Select the _AllLogs view for your log bucket.
Click Apply .
Query results shows only the logs that are stored in your log bucket.
You have adjusted the logs retention so your staging cluster doesn't store
DEBUG messages. You can set permissions
so that only certain users can view the logs in your cluster's bucket.
Enable the security posture dashboard
The security posture dashboard scans your GKE
clusters and workloads to provide you with opinionated, actionable
recommendations to improve your security posture.
Explore any concerns
Go to the GKE Security posture page.
Go to Security posture
If you are asked to enable the Container Security API, click Enable .
The Dashboards tab summarizes concerns for your project's clusters and
workloads.
Click the Concerns tab.
If any concerns appear on the tab, click the concern for more information.
You have completed some of the basic tasks for configuring a cluster for staging and
testing your app.
What's next
Guidelines for creating scalable clusters
Set up a CI/CD pipeline
Clean up to avoid billing charges .
If you plan to take additional tutorials, wait until you finish those tutorials
before you clean up. You can use the sample Kubernetes cluster in most
GKE tutorials.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
