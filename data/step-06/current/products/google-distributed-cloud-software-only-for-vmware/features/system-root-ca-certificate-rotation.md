---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.206Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "System root CA certificate rotation"
feature_slug: "system-root-ca-certificate-rotation"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation"
keywords:
  - "system"
  - "root"
  - "ca"
  - "certificate"
  - "rotation"
  - "gkectl"
  - "can"
  - "rotate"
---

# System root CA certificate rotation

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Gkectl can rotate system root CA certificates for user clusters.

## Extended Definition

System root CA certificate rotation in Google Distributed Cloud (software only) for VMware is performed with `gkectl` via `gkectl update credentials certificate-authorities rotate`, which starts a certificate-authority rotation for a cluster. For user clusters, the command can run in asynchronous mode when advanced cluster is not enabled, and the rotation’s progress/state is checked with the `status` command that reports the CAVersion integer and current rotation state. For admin clusters, rotation is a multi-step operation that replaces core system CA certificates and can be completed with an explicit `--complete` step, with kubeconfig update handled separately.

## Evidence Summary

The cited pages describe the `gkectl` CA rotation commands, their execution flow, and behavior (including advanced-cluster vs non-advanced behavior) for rotating system CA certificates in user and admin clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation)

## Supporting Pages

### "Rotating user cluster certificate authorities \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/ca-rotation)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: STRONG
- Re-rank rationale: It directly documents rotating user-cluster system CAs (etcd, cluster, front-proxy), including issuance and distribution of new certificates.

Evidence snippets:
- If the CA rotation starts successfully, you see a message similar to following: successfully started the CA rotation with CAVersion 2, use gkectl update credentials certificate-authorities status command to view the current state of CA rotation If a CA rotation is already in progress, you see an error message similar to the following: Exit with error: admission webhook "vonpremusercluster.onprem.cluster.gke.io" denied the request: requests must not modify CAVersion when cluster is not ready: ready condition is not true: ClusterCreateOrUpdate: Creating or updating user cluster control plane workloads To view the status of the rotation: gkectl update credentials certificate-authorities status \ --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG The preceding command reports the CAVersion , which is an integer the system automatically increments to differentiate the CAs used before and after a rotation.
- Perform a CA rotation Start the rotation: gkectl update credentials certificate-authorities rotate \ --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Replace the following: USER CLUSTER CONFIG : the path of the user cluster configuration file ADMIN CLUSTER KUBECONFIG : the path of the admin cluster kubeconfig file The behavior of the command differs depending on whether advanced cluster is enabled: Not enabled If advanced cluster isn't enabled on the cluster, the command is asynchronous and starts the CA rotation and then exits.
- To view the last version a user cluster has been upgraded to when control-plane certificates were rotated: gkectl update credentials certificate-authorities status \ --config USER CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG The information appears at the end of the message field within ten hours of an upgrade.
- Get a new kubeconfig file: kubectl --kubeconfig ADMIN CLUSTER KUBECONFIG get secret admin \ -n USER CLUSTER NAME -o jsonpath='{.data.admin\.conf}' \ base64 --decode > USER CLUSTER NAME -kubeconfig Enabled If advanced cluster is enabled, the gkectl update credentials certificate-authorities rotate command is synchronous.

### "Rotating admin cluster CA certificates \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-ca-rotation)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: The page covers rotating core system CA certificates for admin clusters, but not system root CA rotation for user clusters.

Evidence snippets:
- Start the rotation To start the certificate rotation, run the following command: gkectl update credentials certificate-authorities rotate \ --admin-cluster \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Replace the following: ADMIN CLUSTER CONFIG : the path of the admin cluster configuration file ADMIN CLUSTER KUBECONFIG : the path of the admin cluster kubeconfig file The behavior of the command differs depending on whether advanced cluster is enabled: Not enabled The gkectl update credentials certificate-authorities rotate command starts and performs the first half of the rotation.
- The command doesn't proceed until gkectl verifies that the updated kubeconfig file is in the current directory. gkectl update credentials certificate-authorities rotate \ --admin-cluster \ --complete \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG When the rotation is complete, it reports the current CA version.
- During a rotation, gkectl replaces the core system CA certificates for the admin cluster with newly generated certificates.
- The old client certificate is removed from the kubeconfig file, and the old CA certificate remains in the kubeconfig file. gkectl update credentials certificate-authorities update-kubeconfig \ --admin-cluster \ --config ADMIN CLUSTER CONFIG \ --kubeconfig ADMIN CLUSTER KUBECONFIG Continue the rotation Run the following command to perform the second half of the procedure.

### "Create an admin workstation \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud CLI latest version : See Install the gcloud CLI . kubectl : Run gcloud components install kubectl , or use apt-get : sudo apt-get update sudo apt-get -y install kubectl RHEL Install the following software: Docker 19.03 or later Remove any previous Docker version: sudo dnf remove docker \ docker-client \ docker-client-latest \ docker-common \ docker-latest \ docker-latest-logrotate \ docker-logrotate \ docker-engine Remove podman-manpages: sudo dnf remove podman-manpages Install Docker 19.03+: sudo dnf install -y yum-utils sudo yum-config-manager \ --add-repo \ https://download.docker.com/linux/centos/docker-ce.repo sudo dnf install -y --allowerasing docker-ce docker-ce-cli containerd.io sudo systemctl start docker Verify that you are now running version 19.03+: sudo docker version Compare your output with the following example to ensure the Client and Server versions are 19.03+: Client: Docker Engine - Community Version: 19.03.13 ...
- If you choose not to enable passwordless sudo, and you intend to use a private registry for your admin cluster, then do the following manual configuration before you create the admin cluster: Place the CA root certificate for the private registry in this directory: /etc/docker/certs.d/ REGISTRY ADDRESS / Replace REGISTRY ADDRESS with the address of the machine that runs the private registry.
- For information, see: vSphere requirements Determine your vCenter server address Getting your vCenter CA root certificate Set up an NTP server When your cluster is configured to use an NTP server, you need to set up a time sync service on your admin workstation to ensure that timedatectl reports time that is in sync with the cluster.
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ VERSION /gke-onprem-vsphere- VERSION .tgz ./ Service accounts and keys Make sure you have created the following required service accounts and JSON key files: component access connect-register logging-monitoring Also Make sure you have created any optional service service accounts and JSON key files that you need: audit logging Binary Authorization Place all of your JSON key files in the home directory of your admin workstation.

