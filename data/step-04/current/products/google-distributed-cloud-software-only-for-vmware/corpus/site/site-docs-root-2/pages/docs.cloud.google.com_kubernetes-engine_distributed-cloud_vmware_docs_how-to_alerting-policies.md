---
title: "Creating alerting policies \_|\_ Google Distributed Cloud (software only)\
  \ for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/alerting-policies
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/alerting-policies
  title: "Creating alerting policies \_|\_ Google Distributed Cloud (software only)\
    \ for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Creating alerting policies
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to create metric-based alerting policies for Google Distributed Cloud clusters.
For more information about metric-based alerting policies, see
Create metric-threshold alerting
policies in Google Cloud observability documentation.
Before you begin
You must have the following permissions to create alerting policies:
monitoring.alertPolicies.create
monitoring.alertPolicies.delete
monitoring.alertPolicies.update
You have these permissions if you have any one of the following
roles :
monitoring.alertPolicyEditor
monitoring.editor
Project editor
Project owner
To create a log-based alerting policy by using the
Google Cloud CLI, you must also have the serviceusage.serviceUsageConsumer
role. For instructions to set up log-based alerting policies, see
Configure log-based alerts
in Google Cloud Observability documentation.
To check your roles, go to the IAM page
in the Google Cloud console.
Creating an example policy: API server unavailable
In this exercise, you create an alerting policy for Kubernetes API servers. With this policy in place, you can arrange to be notified
whenever the API server of a cluster is unavailable.
Download the policy configuration file:
apiserver-unavailable.json
Create the policy:
gcloud monitoring policies create --policy-from-file= POLICY_CONFIG
Replace POLICY_CONFIG with the path of the configuration file you just
downloaded.
View your alerting policies:
Console
In the Google Cloud console, go to the Monitoring page.
Go to Monitoring
On the left, select Alerting .
Under Policies , you can see a list of your alerting policies.
In the list, select Anthos cluster API server
unavailable (critical) to see details about your new policy. Under
Conditions , you can see a description of the policy. For example:
Policy violates when ANY condition is met
Anthos cluster API server uptime is absent for 5m
gcloud
gcloud monitoring policies list
The output shows detailed information about the policy. For example:
combi ner : OR
co n di t io ns :
- co n di t io n Abse nt :
aggrega t io ns :
- alig n me nt Period : 60 s
crossSeriesReducer : REDUCE_MEAN
groupByFields :
- resource.label.projec t _id
- resource.label.loca t io n
- resource.label.clus ter _ na me
- resource.label. na mespace_ na me
- resource.label.co nta i ner _ na me
- resource.label.pod_ na me
perSeriesAlig ner : ALIGN_MAX
dura t io n : 300 s
f il ter : resource. t ype = "k8s_container" AND me tr ic. t ype = "kubernetes.io/anthos/container/uptime"
AND resource.label. "container_name" =mo n i t ori n g.regex. full _ma t ch( "kube-apiserver" )
tr igger :
cou nt : 1
displayName : A nt hos clus ter API server up t ime is abse nt f or 5 m
na me : projec ts /…/aler t Policies/…/co n di t io ns /…
displayName : A nt hos clus ter API server u na vailable (cri t ical)
e na bled : true
mu tat io n Record :
mu tate Time : …
mu tate dBy : …
na me : projec ts /…/aler t Policies/…
Creating additional alerting policies
This section provides descriptions and configuration files for a set of
recommended alerting policies.
To create a policy, follow the same steps that you used in the preceding
exercise:
To download the configuration file, click the link in the right column.
Optionally, tune the conditions to better fit your specific needs, for
example, you can add additional filters for a subset of clusters, or adjust the
threshold values to balance between noisiness and criticality.
Run gcloud monitoring policies create to create the policy.
Control plane components availability
Alert name
Description
Alerting policy definition in Cloud Monitoring
API server unavailable (critical)
API server uptime metric is unavailable
apiserver-unavailable.json
Scheduler unavailable (critical)
Scheduler uptime metric is unavailable
scheduler-unavailable.json
Controller manager unavailable (critical)
Controller manager uptime metric is unavailable
controller-manager-unavailable.json
Kubernetes system
Alert name
Description
Alerting policy definition in Cloud Monitoring
Pod crash looping (warning)
Pod keeps restarting and might be in a crash loop status
pod-crash-looping.json
Pod not ready for more than one hour (critical)
Pod is in a non-ready state for more than one hour
pod-not-ready-1h.json
Container cpu usage exceeds 80 percent (warning)
Container cpu usage is over 80% of limit
container-cpu-usage-high-reaching-limit.json
Container memory usage exceeds 85 percent (warning)
Container memory usage is over 85% of limit
container-memory-usage-high-reaching-limit.json
Persistent volume high usage (critical)
Claimed persistent volume has less than 3 percent of free space
persistent-volume-usage-high.json
Node cpu usage exceeds 80 percent (warning)
Node cpu usage is over 80% of total allocatable for 5m
node-cpu-usage-high.json
Node disk usage exceeds 85 percent (warning)
Less than 15 percent is free per disk mountpoint for 10 mins
node-disk-usage-high.json
Node memory usage exceeds 80 percent (warning)
Node memory usage is over 80% of total allocatable for 5m
node-memory-usage-high.json
Node not ready for more than one hour (critical)
Node is in a non-ready state for more than one hour
node-not-ready-1h.json
Kubernetes performance
Alert name
Description
Alerting policy definition in Cloud Monitoring
API server error ratio exceeds 20 percent (critical)
API server gives 5xx or 429 errors on more than 20% of all requests per verb for 15m
apiserver-error-ratio-high.json
ETCD leader change or proposal failure too frequent (warning)
The etcd leader changes or proposal failures happen too frequently
etcd-leader-changes-or-proposal-failures-frequent.json
ETCD server is not in quorum (critical)
No etcd server proposals committed for 5 min, so they might have lost quorum
etcd-server-not-in-quorum.yaml
ETCD storage exceeds 90 percent limit (warning)
The etcd storage usage is more than 90% of limit
etcd-storage-usage-high.json
Alert Policies with PromQL
The queries in alert policies can also be expressed in PromQL instead of MQL.
For example, the PromQL version of the API server error ratio exceeds 20
percent (critical) policy is available to download: apiserver-error-ratio-high-promql.json .
For more information, see
Use Managed Service for Prometheus
for Google Distributed Cloud documentation and the
Alerting policies with PromQL
for Cloud Monitoring documentation.
Getting notified
After you create an alerting policy, you can define one or more notification
channels for the policy. There are
several kinds of notification channels.
For example, you can be notified by email, a Slack channel, or a mobile app.
You can choose the channels that suit your needs.
For instructions about how to configure notification channels, see
Managing notification channels .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
