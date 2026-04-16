---
title: "Audit logging \_|\_ Google Distributed Cloud (software only) for VMware \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/audit-logging
  title: "Audit logging \_|\_ Google Distributed Cloud (software only) for VMware\
    \ \_|\_ Google Cloud Documentation"
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
Audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Overview
This document describes how to use Cloud Audit Logs for Google Distributed Cloud (software only). Google Distributed Cloud uses Kubernetes Audit Logging , which keeps a chronological record of calls made to a cluster Kubernetes API server. Audit logs are useful for investigating suspicious API requests and for collecting statistics. For information about audit logging for the GKE On-Prem API, see Cloud API audit logging .
About Cloud Audit Logs
Audit logs are written to Cloud Audit Logs in your Google Cloud project. Writing to Cloud Audit Logs has several benefits over writing to disk or capturing logs in an on-premises logging system:
Audit logs for all clusters can be centralized.
Log entries written to Cloud Audit Logs are immutable.
Cloud Audit Logs entries are retained for 400 days.
The Cloud Audit Logs feature is included in the price of Google Distributed Cloud.
You can configure Google Distributed Cloud to write logs to disk or to Cloud Audit Logs.
Disk-based audit logging
By default, audit logs are written to a persistent
disk so that VM restarts and upgrades don't cause the logs to disappear.
If advanced cluster isn't enabled:
Google Distributed Cloud retains up to 12 GB of audit log entries.
If advanced cluster is enabled
Google Distributed Cloud retains up to 1 GB of audit log entries.
Cloud Audit Logs
If you enable Cloud Audit Logs for a cluster, then Admin Activity audit log
entries from the cluster's Kubernetes API server are sent to Google Cloud,
using the Google Cloud project that you specify in the
cloudAuditLogging.projectID field of your cluster configuration file.
This Google Cloud project is called your
audit logging project .
Your audit logging project must be the same as your
fleet host project .
To buffer and write log entries to Cloud Audit Logs,
Google Distributed Cloud deploys an audit-proxy Pod to the admin cluster.
This component is also available as a sidecar container on user clusters.
Limitations
Cloud Audit Logs has the following limitations:
Data access logging (get, list, watch requests) isn't supported.
Modifying the Kubernetes audit policy is not supported.
Cloud Audit Logs isn't resilient to extended network outages. If the log entries can't be exported to Google Cloud, they are cached in a 10GB disk buffer. If that buffer fills, then the oldest entries are dropped.
One project can support up to approximately 1000 service accounts for use with Cloud Audit Logs. Multiple clusters can use the same service account.
Enable the Anthos Audit API
Enable the Anthos Audit API in your audit logging project.
Enable the Anthos Audit API
Create a service account for Cloud Audit Logs
You already have one or more
service accounts
that you created to use with Google Distributed Cloud. For this feature,
you need to create an additional service account called the
audit logging service account .
Create your audit logging service account:
gcloud iam service-accounts create audit-logging-service-account
Create a JSON key file for your Cloud Audit Logs service account:
gcloud iam service-accounts keys create audit-logging-key.json \
--iam-account AUDIT_LOGGING_SERVICE_ACCOUNT_EMAIL
where AUDIT_LOGGING_SERVICE_ACCOUNT_EMAIL is the email
address of your service account.
Save audit-logging-key.json on the admin workstation in the same location as
your other service account keys.
WARNING Before deleting this service account, be sure to replace it with the new service account in the cluster configuration first! The process is the similar to Enable Cloud Audit Logs for an existing user cluster . If you forget to do this, follow the guide to clean up .
Create an admin cluster with Cloud Audit Logs enabled
You can enable Cloud Audit Logs for an admin cluster only when you first
create the admin cluster. You cannot modify an existing admin cluster to enable
Cloud Audit Logs.
Refer to
Creating an admin cluster .
In your admin cluster configuration file, fill in the cloudAuditLogging
section.
Set cloudAuditLogging.projectID to the ID of your audit logging project.
Set cloudAuditLogging.clusterLocation to a Google Cloud region where
you want to store audit logs. For improved latency, choose a region that is
near your on-premises data center.
Set cloudAuditLogging.serviceAccountKeyPath to the path of the JSON key
file for your audit logging service account.
For example:
cloudAuditLogging :
projectID : "my-project"
clusterLocation : "us-west1"
serviceAccountKeyPath : "/my-key-folder/audit-logging-key.json"
Continue the cluster creation as usual.
Create a user cluster with Cloud Audit Logs enabled
Refer to
Creating a user cluster .
In your user cluster configuration file, fill in the cloudAuditLogging
section.
Set cloudAuditLogging.projectID to the ID of your audit logging project.
Set cloudAuditLogging.clusterLocation to a Google Cloud region where
you want to store audit logs. For improved latency, choose a region that is
near your on-premises data center.
Set cloudAuditLogging.serviceAccounKeyPath to the path of the JSON key
file for your Cloud Audit Logs service account.
Ensure that the gkeConnect section is filled in and gkeConnect.projectID
is the same as cloudAuditLogging.projectID .
For example:
gkeConnect:
projectID: "my-project"
registerServiceAccountKeyPath: "/my-key-fokder/connect-register-key.json"
cloudAuditLogging:
projectID: "my-project"
clusterLocation: "us-west1"
serviceAccountKeyPath: "/my-key-folder/audit-logging-key.json"
Continue the cluster creation as usual.
Enable Cloud Audit Logs for an existing user cluster
Cloud Audit Logs can be enabled only in the Google Cloud project
where the user cluster is registered.
If an existing user cluster is not registered, register it by following these steps
before you enable Cloud Audit Logs:
Add a gkeConnect section to the
user cluster configuration file .
For example:
gkeConnect:
projectID: "my-project"
registerServiceAccountKeyPath: "/my-key-fokder/connect-register-key.json"
Update the cluster:
gkectl update cluster --config USER_CLUSTER_CONFIG --kubeconfig ADMIN_CLUSTER_KUBECONFIG
After the user cluster is registered, follow these steps to enable
Cloud Audit Logs:
Fill in the cloudAuditLogging section of your
user cluster configuration file .
See
Create a user cluster with Cloud Audit Logs enabled
for details on the individual fields. The projectID in the cloudAuditLogging
section must be the same as that in the gkeConnect section.
Update the cluster:
gkectl update cluster --config USER_CLUSTER_CONFIG --kubeconfig ADMIN_CLUSTER_KUBECONFIG
Disable Cloud Audit Logs for an existing user cluster
In the user cluster configuration file, delete the cloudAuditLogging
section.
Update the user cluster:
gkectl update cluster --kubeconfig [ADMIN_CLUSTER_KUBECONFIG] --config [USER_CLUSTER_CONFIG]
Access audit logs
Disk-based audit logging
You can find the audit logs for the admin cluster on the
control-plane nodes under /var/log/kube-audit/kube-apiserver-audit.log . The
audit logs for the user cluster are in the PersistentVolumeClaim
named kube-audit-kube-apiserver-0 . You can access this data within your own
Pods via volumes entries:
Add this entry for the admin cluster :
volumes:
- name: kube-audit
hostPath:
path: /var/log/kube-audit
type: ""
Add this entry for the user cluster :
volumes:
- name: kube-audit
persistentVolumeClaim:
claimName: kube-audit-kube-apiserver-0
To schedule your Pod on the appropriate admin cluster node (and only this
node) you will need to add nodeSelector and tolerations sections to
your Pod spec, like this:
spec:
nodeSelector:
node-role.kubernetes.io/master: ''
tolerations:
- key: node-role.kubernetes.io/master
value: ""
effect: NoSchedule
For the user cluster , set namespace as the user cluster name, then set
nodeName to the same as kube-apiserver-0 :
spec:
nodeName: NODE_NAME
To point out the nodeName of kube-apiserver-0 , run the following command:
kubectl get pod kube-apiserver-0 -n USER_CLUSTER_NAME --kubeconfig kubeconfig -o jsonpath='{.spec.nodeName}'
Each audit log's filename has a timestamp that indicates when the file was
rotated. A file contains audit logs up to that time and date.
Access Cloud Audit Logs
Console
In the Google Cloud console, go to the Logs Explorer page in the Logging menu.
Go to the Logs Explorer
If the Legacy Logs Viewer page opens, choose Upgrade to the new Logs Explorer from the Upgrade drop-down menu.
Click in the Query field to enter a query.
Enter the following query into the Query field:
resource.type="k8s_cluster"
logName="projects/ PROJECT_ID /logs/externalaudit.googleapis.com%2Factivity"
protoPayload.serviceName="anthosgke.googleapis.com"
Replace PROJECT_ID with your project ID.
Click Run query to display all audit logs from clusters that were configured to sign in to this project.
gcloud
List the first two log entries in your project's Admin Activity log that apply to the k8s_cluster resource type:
gcloud logging read \
'logName="projects/ PROJECT_ID /logs/externalaudit.googleapis.com%2Factivity" \
AND resource.type="k8s_cluster" \
AND protoPayload.serviceName="anthosgke.googleapis.com" ' \
--limit 2 \
--freshness 300d
Replace PROJECT_ID with your project ID.
The output shows two log entries. Notice that for each log entry, the logName field has the value projects/ PROJECT_ID /logs/externalaudit.googleapis.com%2Factivity and protoPayload.serviceName is equal to anthosgke.googleapis.com .
Audit policy
The Kubernetes audit policy defines rules for which events are recorded as log entries and specifies what data the log entries should include. Cloud Audit Logs behavior is determined by a statically-configured Kubernetes audit logging policy. Changing this policy to modify Cloud Audit Logs behavior isn't supported.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
