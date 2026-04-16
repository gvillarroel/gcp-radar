---
title: "Application observability with Prometheus on GKE \_|\_ Kubernetes Engine \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/observability-with-prometheus
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/observability-with-prometheus
  title: "Application observability with Prometheus on GKE \_|\_ Kubernetes Engine\
    \ \_|\_ Google Cloud Documentation"
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
Application observability with Prometheus on GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
This tutorial shows you how to set up liveness probes to application
microservices deployed to Google Kubernetes Engine (GKE) using open source
Prometheus .
This tutorial uses open source Prometheus. However, each GKE
Autopilot cluster automatically deploys
Managed Service for Prometheus ,
Google Cloud's fully managed, multi-cloud, cross-project solution
for Prometheus metrics. Managed Service for Prometheus lets you globally monitor
and alert on your workloads using Prometheus, without having to manually manage
and operate Prometheus at scale.
You can also use open source tools like
Grafana
to visualize metrics collected by Prometheus.
Objectives
Create a cluster.
Deploy Prometheus .
Deploy the sample application,
Bank of Anthos .
Configure Prometheus liveness probes.
Configure Prometheus alerts.
Configure
Alertmanager
to get notification in a Slack channel.
Simulate an outage to test Prometheus.
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
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
click Create project to begin creating a new
Google Cloud project.
Roles required to create a project
To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains
the resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the GKE API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
click Create project to begin creating a new
Google Cloud project.
Roles required to create a project
To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains
the resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the GKE API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the
Helm API
Prepare the environment
In this tutorial, you use Cloud Shell to manage resources hosted on
Google Cloud.
Set the default environment variables:
gcloud config set project PROJECT_ID
gcloud config set compute/region CONTROL_PLANE_LOCATION
Replace the following:
PROJECT_ID : your Google Cloud
project ID .
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. For this tutorial, the region is us-central1 . Typically, you
want a region that is close to you.
Clone the sample repository used in this tutorial:
git clone https://github.com/GoogleCloudPlatform/bank-of-anthos.git
cd bank-of-anthos/
Create a cluster:
gcloud container clusters create-auto CLUSTER_NAME \
--release-channel = CHANNEL_NAME \
--location = CONTROL_PLANE_LOCATION
Replace the following:
CLUSTER_NAME : a name for the new cluster.
CHANNEL_NAME : the name of a
release channel .
Note: If you're using a local environment, get access credentials by running the
gcloud auth application-default login
command.
Deploy Prometheus
Install Prometheus using the sample Helm chart:
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install tutorial bitnami/kube-prometheus \
--version 8 .2.2 \
--values extras/prometheus/oss/values.yaml \
--wait
This command installs Prometheus with the following components:
Prometheus Operator :
a popular way to deploy and configure open source Prometheus.
Alertmanager :
handles alerts sent by the Prometheus server and routes them to applications,
such as Slack.
Blackbox exporter :
lets Prometheus probe endpoints using HTTP, HTTPS, DNS, TCP, ICMP, and
gRPC.
Deploy Bank of Anthos
Deploy the Bank of Anthos sample application:
kubectl apply -f extras/jwt/jwt-secret.yaml
kubectl apply -f kubernetes-manifests
Slack notifications
To set up Slack notifications, you must create a Slack application, activate
Incoming Webhooks for the application, and install the application to a Slack
workspace.
Create the Slack application
Join a Slack workspace ,
either by registering with your email or by using an invitation sent
by a Workspace Admin.
Note: If you are not an Admin for your Slack workspace, you might need
approval from a Workspace Admin before your app is deployed to your
workspace.
Sign in to Slack using your workspace name and your Slack account credentials.
Create a new Slack app
In the Create an app dialog, click From scratch .
Specify an App Name and choose your Slack workspace.
Click Create App .
Under Add features and functionality , click Incoming Webhooks .
Click the Activate Incoming Webhooks toggle.
In the Webhook URLs for Your Workspace section, click Add New Webhook to Workspace .
On the authorization page that opens, select a channel to receive notifications.
Click Allow .
A webhook for your Slack application is displayed in the Webhook URLs for Your Workspace section. Save the URL for later.
Configure Alertmanager
Create a Kubernetes Secret to store the webhook URL:
kubectl create secret generic alertmanager-slack-webhook --from-literal webhookURL = SLACK_WEBHOOK_URL
kubectl apply -f extras/prometheus/oss/alertmanagerconfig.yaml
Replace SLACK_WEBHOOK_URL with the URL of the webhook
from the previous section.
Configure Prometheus
Review the following manifest:
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
---
apiVersion : monitoring.coreos.com/v1
kind : Probe
metadata :
name : frontend-probe
spec :
jobName : frontend
prober :
url : tutorial-kube-prometheus-blackbox-exporter:19115
path : /probe
module : http_2xx
interval : 60s
scrapeTimeout : 30s
targets :
staticConfig :
labels :
app : bank-of-anthos
static :
- frontend:80
---
apiVersion : monitoring.coreos.com/v1
kind : Probe
metadata :
name : userservice-probe
spec :
jobName : userservice
prober :
url : tutorial-kube-prometheus-blackbox-exporter:19115
path : /probe
module : http_2xx
interval : 60s
scrapeTimeout : 30s
targets :
staticConfig :
labels :
app : bank-of-anthos
static :
- userservice:8080/ready
---
apiVersion : monitoring.coreos.com/v1
kind : Probe
metadata :
name : balancereader-probe
spec :
jobName : balancereader
prober :
url : tutorial-kube-prometheus-blackbox-exporter:19115
path : /probe
module : http_2xx
interval : 60s
scrapeTimeout : 30s
targets :
staticConfig :
labels :
app : bank-of-anthos
static :
- balancereader:8080/ready
---
apiVersion : monitoring.coreos.com/v1
kind : Probe
metadata :
name : contacts-probe
spec :
jobName : contacts
prober :
url : tutorial-kube-prometheus-blackbox-exporter:19115
path : /probe
module : http_2xx
interval : 60s
scrapeTimeout : 30s
targets :
staticConfig :
labels :
app : bank-of-anthos
static :
- contacts:8080/ready
---
apiVersion : monitoring.coreos.com/v1
kind : Probe
metadata :
name : ledgerwriter-probe
spec :
jobName : ledgerwriter
prober :
url : tutorial-kube-prometheus-blackbox-exporter:19115
path : /probe
module : http_2xx
interval : 60s
scrapeTimeout : 30s
targets :
staticConfig :
labels :
app : bank-of-anthos
static :
- ledgerwriter:8080/ready
---
apiVersion : monitoring.coreos.com/v1
kind : Probe
metadata :
name : transactionhistory-probe
spec :
jobName : transactionhistory
prober :
url : tutorial-kube-prometheus-blackbox-exporter:19115
path : /probe
module : http_2xx
interval : 60s
scrapeTimeout : 30s
targets :
staticConfig :
labels :
app : bank-of-anthos
static :
- transactionhistory:8080/ready
This manifest describes Prometheus liveness probes and includes the
following fields:
spec.jobName : the Job name assigned to scraped metrics.
spec.prober.url : the Service URL of the blackbox exporter. This includes
the default port for the blackbox exporter, which is defined in the Helm
chart.
spec.prober.path : the metrics collection path.
spec.targets.staticConfig.labels : the labels assigned to all metrics
scraped from the targets.
spec.targets.staticConfig.static : the list of hosts to probe.
Apply the manifest to your cluster:
kubectl apply -f extras/prometheus/oss/probes.yaml
Review the following manifest:
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
---
apiVersion : monitoring.coreos.com/v1
kind : PrometheusRule
metadata :
name : uptime-rule
spec :
groups :
- name : Micro services uptime
interval : 60s
rules :
- alert : BalancereaderUnavaiable
expr : probe_success{app="bank-of-anthos",job="balancereader"} == 0
for : 1m
annotations :
summary : Balance Reader Service is unavailable
description : Check Balance Reader pods and it's logs
labels :
severity : 'critical'
- alert : ContactsUnavaiable
expr : probe_success{app="bank-of-anthos",job="contacts"} == 0
for : 1m
annotations :
summary : Contacs Service is unavailable
description : Check Contacs pods and it's logs
labels :
severity : 'warning'
- alert : FrontendUnavaiable
expr : probe_success{app="bank-of-anthos",job="frontend"} == 0
for : 1m
annotations :
summary : Frontend Service is unavailable
description : Check Frontend pods and it's logs
labels :
severity : 'critical'
- alert : LedgerwriterUnavaiable
expr : probe_success{app="bank-of-anthos",job="ledgerwriter"} == 0
for : 1m
annotations :
summary : Ledger Writer Service is unavailable
description : Check Ledger Writer pods and it's logs
labels :
severity : 'critical'
- alert : TransactionhistoryUnavaiable
expr : probe_success{app="bank-of-anthos",job="transactionhistory"} == 0
for : 1m
annotations :
summary : Transaction History Service is unavailable
description : Check Transaction History pods and it's logs
labels :
severity : 'critical'
- alert : UserserviceUnavaiable
expr : probe_success{app="bank-of-anthos",job="userservice"} == 0
for : 1m
annotations :
summary : User Service is unavailable
description : Check User Service pods and it's logs
labels :
severity : 'critical'
This manifest describes a PrometheusRule and includes the following
fields:
spec.groups.[*].name : the name of the rule group.
spec.groups.[*].interval : how often rules in the group are evaluated.
spec.groups.[*].rules[*].alert : the name of the alert.
spec.groups.[*].rules[*].expr : the PromQL expression to evaluate.
spec.groups.[*].rules[*].for : the amount of time alerts must return for
before they are considered firing.
spec.groups.[*].rules[*].annotations : a list of annotations to add to
each alert. This is only valid for alerting rules.
spec.groups.[*].rules[*].labels : the labels to add or overwrite.
Apply the manifest to your cluster:
kubectl apply -f extras/prometheus/oss/rules.yaml
Simulate an outage
Simulate an outage by scaling the contacts Deployment to zero:
kubectl scale deployment contacts --replicas 0
You should see a notification message in your Slack workspace channel.
GKE might take up to 5 minutes to scale the Deployment.
Restore the contacts Deployment:
kubectl scale deployment contacts --replicas 1
You should see an alert resolution notification message in your Slack
workspace channel. GKE might take up to 5 minutes to scale
the Deployment.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete individual resources
Delete the Kubernetes resources:
kubectl delete -f kubernetes-manifests
Uninstall Prometheus:
helm uninstall tutorial
Delete the GKE cluster:
gcloud container clusters delete CLUSTER_NAME --quiet
What's next
Learn about
Google Cloud Managed Service for Prometheus ,
a fully managed, global metrics solution, based on Prometheus, that is
deployed by default in all Autopilot clusters.
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
