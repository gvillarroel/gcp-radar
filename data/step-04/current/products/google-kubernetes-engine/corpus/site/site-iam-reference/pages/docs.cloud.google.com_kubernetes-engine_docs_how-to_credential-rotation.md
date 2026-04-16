---
title: "Rotate your cluster credentials \_|\_ GKE security \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/credential-rotation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/credential-rotation
  title: "Rotate your cluster credentials \_|\_ GKE security \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE security
Send feedback
Rotate your cluster credentials
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Planning for and regularly rotating your cluster credentials is crucial for
keeping your clusters in a healthy state. This document shows you how to perform
credential rotations and provides best practices for planning regular rotations.
This document is for Security specialists who are responsible for the lifecycle of
credentials on GKE clusters. To learn more about
common roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
About credential rotations in GKE
The cluster root Certificate Authority (CA) has a limited lifetime. When the CA
expires, any credentials that were signed by the CA are no longer valid,
including the cluster client certificate (from the MasterAuth API field), the
key and certificate for the API server, and the kubelet client certificates.
Your cluster credential lifetime depends on when you created the cluster or when
you last rotated your credentials. For details, check the credential
lifetime .
You can revoke and reissue these credentials by performing one of the following
types of rotations. In most scenarios, we recommend that you perform a full
credential rotation, which is more comprehensive than an IP address rotation.
Credential rotation :
Rotates the IP address that the control plane uses for the Kubernetes
API server.
Rotates the cluster root CA.
Rotates Kubernetes ServiceAccount keys, which are used to sign and
verify ServiceAccount credentials.
Rotates the
aggregation layer CA .
IP address rotation :
Rotates the IP address that the control plane uses for the Kubernetes
API server.
Rotates the cluster root CA.
For both of these rotation types, nodes must be re-created before they can use
new credentials.
You must
start and finish a credential rotation
for your cluster before your current credentials expire.
When to perform a credential rotation
Key Point: Plan for and perform credential rotations well in advance of your
cluster root CA expiring. Your cluster enters the DEGRADED state seven days
before the current credentials expire. This is your last opportunity to rotate
your credentials before your cluster and workloads become unrecoverable.
You should perform credential rotations regularly and in advance of your current
credential expiry date. Credential rotations require node re-creation to use the
new credentials, which might be disruptive to running workloads. Plan
maintenance periods and perform the rotations during maintenance
windows
to avoid unexpected workload downtime or unresponsive API clients outside the
cluster.
To learn more about how maintenance availability affects cluster credential
rotation, and what type of disruption your cluster experiences during the steps
of a rotation, see the row for credential rotation in the table of manual
changes that recreate the nodes using a node upgrade strategy and respecting
maintenance
policies .
GKE depends on resource
availability for updating
the nodes. To learn more about node updates, see Planning for node update
disruptions .
Cluster credential lifetime
Cluster credential lifetime typically depends on when the cluster was
created or when credentials were most recently rotated:
Clusters created prior to approximately October 2021 have a 5 year CA
lifetime.
Clusters created after approximately October 2021 have a 30 year CA
lifetime.
Clusters rotated after approximately January 2022 have a 30 year CA
lifetime.
Find clusters with expiring or expired credentials
If your cluster's credentials will expire in the next 180 days, or your
cluster's credentials have already expired, GKE delivers guidance
with an insight and recommendation to explain that you must perform a credential
rotation for this cluster. This guidance includes the date of the expiration of
the credentials. You can view this guidance in the Google Cloud console. Or,
you can view this
guidance
with the gcloud CLI, or the Recommender API, specifying the
CLUSTER_CA_EXPIRATION subtype.
If you receive an insight and recommendation for a cluster, you must perform a
credential rotation , or GKE
automatically starts a credential rotation within 30 days of the current CA
expiry date, as explained in the next section. Once the
credential rotation has completed it can take up to
36 hours for the insight and recommendation to resolve.
GKE automation policy to prevent cluster outages
To prevent your cluster from entering an unrecoverable state if your current
credentials expire, GKE automatically starts a credential
rotation within 30 days of your current CA expiry date. For example, your
cluster CA expires on January 6, 2024 and you don't rotate your credentials by
December 5, 2023. GKE starts an automatic rotation on or after
December 7, 2023, and attempts to complete this rotation seven days after the
operation starts. This automatic rotation is a last-resort attempt to prevent a
cluster outage, and has the following considerations:
Automatic rotations generally respect maintenance windows or maintenance
exclusions, however GKE reserves the right to perform steps
within 30 days of expiration to rotate the credentials, regardless of
maintenance availability. Within 30 days, GKE ignores
maintenance availability for the first step, which is starting the
rotation .
If maintenance availability prevents GKE from completing the
rotation initially, GKE continues to attempt to complete the
rotation until the date that the credentials expire, after which the cluster
becomes unrecoverable.
When the credential rotation completes, the expiring credentials are
revoked. Kubernetes API clients outside the cluster, like kubectl in local
environments, won't work until you configure the clients to use the new
credentials.
Node pool re-creations during the rotation might cause disruptions to
running workloads.
Warning: GKE-initiated automatic rotations are a last-resort
outage prevention measure . Don't rely only on these automatic rotations;
they're a preventative emergency measure to avoid complete outages and can be
blocked by maintenance availability and related constraints. To learn more about
these constraints, see Maintenance window preventing node update
completion .
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Ensure that you have an existing Autopilot or Standard
cluster. If you need one, create an Autopilot cluster .
Check credential lifetime
We recommend that you check your credential lifetime before and after you perform
a credential rotation so that you know the validity of your cluster root CA.
To check the credential lifetime for a single cluster, run the following command:
gcloud container clusters describe CLUSTER_NAME \
--location LOCATION \
--format "value(masterAuth.clusterCaCertificate)" \
| base64 --decode \
| openssl x509 -noout -dates
The output is similar to the following:
notBefore=Mar 17 16:45:34 2023 GMT
notAfter=Mar 9 17:45:34 2053 GMT
If you run this command after starting a credential rotation, the output
is the lifetime of your original certificate. This certificate remains valid
until you complete the rotation . After you complete
the rotation, the output is the lifetime of your new certificate.
To check the credential lifetime for all clusters in a project, run the following command:
gcloud container clusters list --project PROJECT_ID \
--format = "value(name,masterAuth.clusterCaCertificate)" | \
while read -r cluster ca ; do \
expiry_date = $( echo -e " $ca " | base64 --decode | openssl x509 -noout -enddate | awk -F '=' '{print $2}' ) ; \
printf "%-40s | %s\n" " $cluster " " $expiry_date " ; \
done | \
column -t | \
awk -F ',' 'BEGIN{print "Cluster Name | Certificate Expiry Date"} {print}'
Perform a credential rotation
Any credential rotation involves the following steps:
Start the rotation : the control plane starts serving on a new IP address
in addition to the original IP address. New credentials are issued to
workloads and the control plane.
Recreate nodes : GKE recreates cluster nodes so that the
nodes use the new IP address and credentials, respecting availability from
maintenance windows and exclusions. You can also manually recreate your
nodes by performing a node version upgrade to the same GKE
version that the nodes already run.
Update API clients : after starting the rotation, update any cluster API
clients, such as development machines using kubectl , to communicate with
the control plane using the new IP address.
Complete the rotation : the control plane stops serving traffic over the
original IP address. Old credentials are revoked, including any
existing static credentials for Kubernetes ServiceAccounts.
When you start a credential rotation, or when GKE automatically
starts a rotation , GKE performs these steps
automatically, including attempting to complete the rotation. At each step, if
cluster expiration is more than 30 days from now, GKE respects
maintenance availability. During automatic rotations before cluster expiration,
GKE reserves the right to ignore maintenance availability to
prevent your cluster from becoming unrecoverable. Within 30 days,
GKE ignores maintenance availability for the first step, which is
starting the rotation .
If you don't complete a credential rotation within seven days of starting it,
GKE attempts to complete the rotation for you. If any nodes in
your cluster still use the previous credentials, the automatic completion
operation fails, but GKE continues to attempt completion until
the credentials expire and the cluster becomes unrecoverable. You should plan to
manually track and complete any credential rotations that you start. To override
maintenance availability blockers, run the commands in each of the sections that
follow to manually trigger those phases of the rotation process. Don't rely on
automatic completion, which is a best-effort measure.
Start the rotation
To start a credential rotation, run the following command:
gcloud container clusters update CLUSTER_NAME \
--location LOCATION \
--start-credential-rotation
This command creates new credentials, issues these
credentials to the control plane, and configures the control plane to serve on
two IP addresses: the original IP address and a new IP address.
Caution: In zonal Standard clusters, which have a single-node control
plane, this command causes brief downtime for the cluster API server.
Autopilot clusters and regional Standard clusters have
replicated control plane nodes and don't experience downtime.
Restart in-cluster components with long-lived connections
After you start an IP address or credential rotation, the cluster's Certificate
Authority (CA) is also rotated. Some in-cluster components that maintain
long-lived TLS connections, for example metrics-server and
konnectivity-agent , might not automatically trust the new cluster CA.
This situation can cause those connections to fail when communicating with nodes or other
cluster endpoints, and you might see TLS handshake errors in the component logs,
such as x509: certificate signed by unknown authority .
If you observe these errors after starting a rotation, you might need to
manually restart your Pods. A restart forces the Pod to re-initialize its
connection and load the new cluster CA certificates. For example, to restart the
metrics-server and konnectivity-agent , run the following commands:
kubectl rollout restart deployment metrics-server -n kube-system
kubectl rollout restart deployment konnectivity-agent -n kube-system
Recreate nodes
Warning: Node recreation errors might occur if a rotation is attempted after
the cluster's CA has already expired. This error is indicated by logs that
contain the following message:
x509: certificate has expired or is not yet valid . To try and recover from
this error, complete the rotation , create new node
pools, migrate your workloads, and then delete the old node pools. However,
because clusters with expired CAs are usually unrecoverable, this effort might
fail and you might have to create a new cluster.
After reconfiguring the API server to serve on a new IP address,
GKE automatically updates your nodes to use the new IP address
and credentials if there is maintenance availability. GKE
upgrades all of your nodes to the same GKE version that the nodes
already run, which recreates the nodes. For more information, refer to Node
pool
upgrades .
By default, GKE automatically completes credential rotations
seven days after you start the operation. If an active maintenance window or
exclusion in your cluster prevents GKE from recreating some nodes
during this seven day period, the credential rotation initially fails to
complete. However, GKE continues to try to recreate the nodes and
complete the rotation until maintenance availability lets GKE
proceed. During major events like Google Cloud Next, GKE
might also pause automatic node recreations so that you don't experience
disruptions.
If you use maintenance exclusions or maintenance windows that could result in
a failed rotation, force GKE to re-create your nodes by doing one
of the following steps:
In Autopilot clusters, manually upgrade your control plane:
gcloud container clusters upgrade CLUSTER_NAME \
--location = LOCATION \
--cluster-version = VERSION
Replace VERSION with the same GKE
version that the cluster already uses.
In Standard clusters,
manually upgrade each node pool .
For more information, see
manual changes that respect GKE maintenance policies .
Note: When GKE recreates nodes during a credential rotation,
those nodes have certificates from the previous certificate authority (CA)
and the new CA. This is intended behavior to reduce the risk of disruptions
during the rotation. After the credential rotation is completed, all new and
existing nodes only have certificates from the new CA.
Check the progress of node pool recreation
To monitor the rotation operation, run the following command:
gcloud container operations list \
--filter = "operationType=UPGRADE_NODES AND status=RUNNING" \
--format = "value(name)"
This command returns the operation ID of the node upgrade operation.
To poll the operation, pass the operation ID to the following command:
gcloud container operations wait OPERATION_ID
Node pools are recreated one-by-one, and each has its own operation. If you have
multiple node pools, use these instructions to poll each operation.
Update API clients
After starting the credential rotation, you must update all API clients outside
the cluster (such as kubectl on developer machines) to use the new credentials
and point to the new IP address of the control plane.
To update your API clients, run the following command for each client:
gcloud container clusters get-credentials CLUSTER_NAME \
--location LOCATION
Warning: If you are using the Kubernetes Certificates API, you also must
issue new certificates .
Update Kubernetes ServiceAccount credentials
If you use static credentials for ServiceAccounts in your cluster,
switch to
short-lived credentials .
Completing the rotation invalidates existing ServiceAccount
credentials. If you don't want to use short-lived credentials,
ensure that you recreate your static credentials for all ServiceAccounts
in the cluster before you complete the rotation.
To find static ServiceAccount credentials that exist in your cluster, run the following command:
kubectl get secrets --all-namespaces --field-selector type = kubernetes.io/service-account-token
If the output of this command is No resources found , your cluster has no
static ServiceAccount credentials.
Note: If you store static credentials in secret management stores external to
GKE, you must also check for credentials in those tools.
Update hardcoded IP addresses and firewall rules
If you hardcoded the IP address of the control plane in your environment, or if
you have firewall rules that target the IP address of the control plane, update
the addresses to the new IP address. If you complete the rotation without
updating IP addresses in applications and in firewall rules, those resources
might experience disruptions when GKE stops serving on the
previous control plane IP address.
Complete the rotation
After updating API clients outside the cluster, complete the rotation to
configure the control plane to serve only with the new credentials and the new
IP address:
gcloud container clusters update CLUSTER_NAME \
--location = LOCATION \
--complete-credential-rotation
Caution: In zonal Standard clusters, which have a single-node control
plane, this command causes brief downtime for the cluster API server.
Autopilot clusters and regional Standard clusters have
replicated control plane nodes and don't experience downtime.
If the credential rotation fails to complete and returns an error message
similar to the following, refer to
Error 400: Node pool requires recreation :
ERROR: (gcloud.container.clusters.update) ResponseError: code=400, message=Node pool "test-pool-1" requires recreation.
GKE respects maintenance availability when automatically
completing the rotation, however GKE might ignore this
availability within 30 days of expiration to prevent the cluster from becoming
unrecoverable. If rotation completion initially fails, and the rotation started
at least seven days ago, GKE attempts to complete the rotation
until the date that the credentials expire, after which the cluster becomes
unrecoverable.
What's next
Learn more about the Kubernetes Secret object .
Learn how to rotate your control plane IP .
Learn about best practices for GKE RBAC .
Learn more about troubleshooting GKE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
