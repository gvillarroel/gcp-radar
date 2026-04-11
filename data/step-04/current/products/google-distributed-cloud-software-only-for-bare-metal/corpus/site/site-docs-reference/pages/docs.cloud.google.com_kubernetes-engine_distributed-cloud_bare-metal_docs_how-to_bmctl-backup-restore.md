---
title: "Back up and restore clusters with bmctl \_|\_ Google Distributed Cloud (software\
  \ only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/bmctl-backup-restore
  title: "Back up and restore clusters with bmctl \_|\_ Google Distributed Cloud (software\
    \ only) for bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Back up and restore clusters with bmctl
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use bmctl to back up and restore clusters created
with Google Distributed Cloud (software only) on bare metal. These instructions apply to
all cluster types.
Warning: Using a backup file to restore your cluster is a last resort. The
restore process resets the existing cluster and overwrites the cluster
information. We don't recommend restoring from a backup file unless the cluster
has failed catastrophically. Contact Cloud Customer Care for help in deciding the
best course of action.
What is and isn't backed up
The bmctl backup and restore process is designed to safeguard the control plane's state.
The system backs up the following objects:
etcd store. All Kubernetes resources and custom objects that define the cluster's configuration and chosen state (for example, Pod specifications, Deployments, and ConfigMaps, Secrets).
PKI certificates. Certificates used for secure communication within the cluster.
Node configuration files and manifests. Configurations related to the cluster nodes.
The system does not back up the following objects:
Live pod and container runtime state. The actual running processes and in-memory state of applications on any nodes (the data plane).
Persistent volume storage. Data stored in Persistent Volumes is not included. Any volumes created by the local volume provisioner (LVP) are left unaltered.
Because the live runtime state is not backed up, after a restore, Kubernetes recreates pods based on the specifications in etcd. However, the exact in-memory state of applications at the moment of backup is lost.
If you need additional assistance, reach out to
Cloud Customer Care .
You can also see
Getting support for more information about support resources, including the following:
Requirements for opening a support case.
Tools to help you troubleshoot, such as your environment configuration, logs, and metrics.
Supported
components .
Back up a cluster
The bmctl backup cluster command adds the cluster information from the etcd
store and the PKI certificates for the specified cluster the cluster to a tar
file. The etcd store is the Kubernetes backing store for all cluster data and
contains all the Kubernetes objects and custom objects required to manage
cluster state. The PKI certificates are used for authentication over TLS. This
data is backed up from the cluster's control plane or from one of the control
planes for a
high-availability (HA)
deployment.
The backup tar file contains sensitive credentials, including your service
account keys and the SSH key. Store backup files in a secure location. To
prevent unintended file exposure, the Google Distributed Cloud backup process uses
in-memory files only.
Back up your clusters regularly to ensure your snapshot data is relatively
current. Adjust the rate of backups to reflect the frequency of significant
changes to your clusters.
The bmctl version you use to back up a cluster must match the version of
the managing cluster.
To back up a cluster:
Ensure your cluster is operating properly, with working credentials and SSH
connectivity to all nodes.
The intent of the backup process is to capture your cluster in a known good
state, so that you can restore operation if a catastrophic failure occurs.
Use the following command to check your cluster:
bmctl check cluster -c CLUSTER_NAME --kubeconfig ADMIN_KUBECONFIG
Replace the following:
CLUSTER_NAME : the name of the cluster you plan to
back up.
ADMIN_KUBECONFIG : the path of the kubeconfig file for
the admin cluster.
Run the following command to ensure the target cluster is not in
a reconciliation state:
kubectl describe cluster CLUSTER_NAME -n CLUSTER_NAMESPACE --kubeconfig ADMIN_KUBECONFIG
Replace the following:
CLUSTER_NAME : the name of the cluster to back up.
CLUSTER_NAMESPACE : the namespace for the
cluster. By default, the cluster namespaces for Google Distributed Cloud
are the name of the cluster prefaced with cluster- . For example, if
you name your cluster test , the namespace has a name like
cluster-test .
ADMIN_KUBECONFIG : the path of the kubeconfig file for
the admin cluster.
Check the Status section in the command output for Conditions of type
Reconciling .
As shown in the following example, a status of False for these
Conditions means the cluster is stable and ready to be backed up.
...
Status:
...
Cluster State: Running
...
Control Plane Node Pool Status:
...
Conditions:
Last Transition Time: 2023-11-03T16:37:15Z
Observed Generation: 1
Reason: ReconciliationCompleted
Status: False
Type: Reconciling
...
Run the following command to back up the cluster:
bmctl backup cluster -c CLUSTER_NAME --kubeconfig ADMIN_KUBECONFIG
Replace the following:
CLUSTER_NAME : the name of the cluster to back up.
ADMIN_KUBECONFIG : the path to the admin cluster
kubeconfig file.
By default, the backup tar file saved to the workspace directory
( bmctl-workspace , by default) on your admin workstation. The tar file is named
CLUSTER_NAME _backup_ TIMESTAMP .tar.gz ,
where CLUSTER_NAME is the name of the cluster being
backed up and TIMESTAMP is the date and time the backup
was made. For example, if the cluster name is testuser , the backup file
has a name like testuser_backup_2006-01-02T150405Z0700.tar.gz .
To specify a different name and location for your backup file, use the
--backup-file flag.
The backup file expires after a year and the cluster restore process doesn't
work with expired backup files.
Restore a cluster
Restoring a cluster from a backup is a last resort and should be used when a
cluster has failed catastrophically and cannot be returned to service any other
way. For example, the etcd data is corrupted or the etcd Pod is in a crash
loop.
Note: To improve cluster performance, Google Distributed Cloud uses a separate
etcd instance to store Event objects. These Event objects have a time to live
(TTL) of one hour. The cluster restore operation creates a new, empty
etcd-events instance, so you lose existing Event objects. However, the loss of
Event objects has no impact on cluster operation. Events should be treated as
informative, best-effort, supplemental data only.
The backup tar file contains sensitive credentials, including your service
account keys and the SSH key. To prevent unintended file exposure, the
Google Distributed Cloud restore process uses in-memory files only.
The bmctl version you use to restore a cluster must match the version of
the managing cluster.
To restore a cluster:
Ensure all node machines that were available for the cluster at the time of
the backup are operating properly and reachable.
Ensure that SSH connectivity between nodes works with the SSH keys that were
used at the time of the backup.
These SSH keys are reinstated as part of the restore process.
Ensure that the service account keys that were used at the time of the
backup are still active.
These service account keys are reinstated for the restored cluster.
To restore an admin, hybrid, or standalone cluster, run the following
command:
bmctl restore cluster -c CLUSTER_NAME --backup-file BACKUP_FILE
Replace the following:
CLUSTER_NAME : the name of the cluster you are
restoring.
BACKUP_FILE : the path and name of the backup file you
are using.
To restore a user cluster, run the following command:
bmctl restore cluster -c CLUSTER_NAME --backup-file BACKUP_FILE \
--kubeconfig ADMIN_KUBECONFIG
Replace the following:
CLUSTER_NAME : the name of the cluster you are
restoring.
BACKUP_FILE : the path and name of the backup file you
are using.
ADMIN_KUBECONFIG : the path to the admin cluster
kubeconfig file.
At the end of the restore process, a new kubeconfig file is generated for the
restored cluster.
When the restore finishes, use the following steps to verify that it was
successful:
Run the following commands to verify the node readiness and system pods
running with the generated kubeconfig file:
There are two types of etcd pods:
etcd- HOST_NAME , which corresponds to the main
etcd Pod
etcd-events- HOST_NAME , which corresponds to the
etcd-events Pod
kubectl get pods -n kube-system --kubeconfig GENERATED_KUBECONFIG
kubectl get nodes --kubeconfig GENERATED_KUBECONFIG
For each etcd pod, run following to verify etcd healthiness:
kubectl exec ETCD_POD_NAME -n kube-system \
--kubeconfig GENERATED_KUBECONFIG \
-- /bin/sh -c 'ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \
--cacert=/etc/kubernetes/pki/etcd/ca.crt --key=/etc/kubernetes/pki/etcd/peer.key \
--cert=/etc/kubernetes/pki/etcd/peer.crt endpoint health'
For a healthy etcd member, the response should look like the following:
https://127.0.0.1:2379 is healthy: successfully committed proposal: took = 11.514177ms
For each etcd-events Pod, run following command to verify etcd-events
healthiness:
kubectl exec ETCD_EVENTS_POD_NAME -n kube-system \
--kubeconfig GENERATED_KUBECONFIG \
-- /bin/sh -c 'ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2382 \
--cacert=/etc/kubernetes/pki/etcd/ca.crt --key=/etc/kubernetes/pki/etcd/peer.key \
--cert=/etc/kubernetes/pki/etcd/peer.crt endpoint health'
For a healthy etcd-events member, the response should look like the following:
https://127.0.0.1:2382 is healthy: successfully committed proposal: took = 14.308148ms
Troubleshoot
If you have problems with the backup or restore process, the following sections
might help you to troubleshoot the issue.
If you need additional assistance, reach out to
Google Support .
Running out of memory during a backup or restore
You might receive error messages during the backup or restore process that
aren't very self-explanatory or clear on next steps. If the workstation where
you run the bmctl command run doesn't have a lot of RAM, you might have
insufficient memory to perform the backup or restore process.
Google Distributed Cloud version 1.13 and later can use the --use-disk parameter in
the backup command. To preserve the file permissions, this parameter modifies
permissions of the files, so it requires the user that runs the command to be a
root user (or use sudo ).
Missing permissions to files during restore
After a successful restore task, deleting bootstrap can fail with an error
message similar to the following example:
Error: failed to restore node config files: sftp: "Failure" (SSH_FX_FAILURE)
This error could mean that some directories required by the restore aren't
writable.
Google Distributed Cloud version 1.14 and later have more clear error messages on
which directories must be writable. Make sure that the reported directories are
writable, and update permissions on directories as needed.
Refresh of SSH key after a backup breaks the restore process
SSH-related operations during the restore process might fail if the SSH key is
refreshed after backup was performed. In this case, the new SSH key becomes
invalid for the restore process.
To resolve this issue, you can temporarily add the original SSH key back, then
perform the restore. After the restore process is complete, you can rotate the
SSH key.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
