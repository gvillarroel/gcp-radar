---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.741Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Configurable Cloud Storage bucket for Anthos AWS configuration data"
feature_slug: "configurable-cloud-storage-bucket-for-anthos-aws-configuration-data"
latest_feature_date: "2021-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage"
keywords:
  - "configurable"
  - "storage"
  - "bucket"
  - "configuration"
---

# Configurable Cloud Storage bucket for Anthos AWS configuration data

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS can now use a specified Cloud Storage bucket to store configuration data.

## Extended Definition

Anthos clusters on AWS can now use a specified Cloud Storage bucket to store configuration data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)

## Supporting Pages

### Storage overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)
- Source ID: `site-iam-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using persistent storage in your GKE on AWS workloads In GKE on AWS, you use the Kubernetes PersistentVolume (PV), PersistentVolumeClaim (PVC), and StorageClass resources to provide persistent file and block storage to workloads.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE on AWS Guides Send feedback Storage overview Stay organized with collections Save and categorize content based on your preferences.
- Configuring cluster storage If you want to provision storage volumes with a non-default StorageClass, you can Create a custom StorageClass in a cluster that uses different parameters or a different storage driver.
- The driver pre-installed with GKE on AWS provides the following StorageClasses by default: standard-rwo (default): Used for provisioning EBS gp2 volumes. premium-rwo : Used for provisioning EBS io1 volumes.

### "Method: projects.locations.awsClusters.well-known.getOpenid-configuration\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration)
- Source ID: `site-api-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback Method: projects.locations.awsClusters.well-known.getOpenid-configuration Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://{endpoint}/v1/{awsCluster=projects/ /locations/ /awsClusters/ }/.well-known/openid-configuration Where {endpoint} is one of the supported service endpoints .

### CIS benchmarks \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cis-benchmarks)
- Source ID: `site-iam-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Status of GKE on AWS clusters: Recommendation Level Status 1 Control Plane Security Configuration 1.1 Control Plane Node Configuration Files 1.1.1 Ensure that the API server pod specification file permissions are set to 644 or more restrictive (Automated) L1 Pass 1.1.2 Ensure that the API server pod specification file ownership is set to root:root (Automated) L1 Pass 1.1.3 Ensure that the controller manager pod specification file permissions are set to 644 or more restrictive (Automated) L1 Pass 1.1.4 Ensure that the controller manager pod specification file ownership is set to root:root (Automated) L1 Pass 1.1.5 Ensure that the scheduler pod specification file permissions are set to 644 or more restrictive (Automated) L1 Pass 1.1.6 Ensure that the scheduler pod specification file ownership is set to root:root (Automated) L1 Pass 1.1.7 Ensure that the etcd pod specification file permissions are set to 644 or more restrictive (Automated) L1 Pass 1.1.8 Ensure that the etcd pod specification file ownership is set to root:root (Automated) L1 Pass 1.1.9 Ensure that the Container Network Interface file permissions are set to 644 or more restrictive (Manual) L1 Equivalent Control 1.1.10 Ensure that the Container Network Interface file ownership is set to root:root (Manual) L1 Equivalent Control 1.1.11 Ensure that the etcd data directory permissions are set to 700 or more restrictive (Automated) L1 Equivalent Control 1.1.12 Ensure that the etcd data directory ownership is set to etcd:etcd (Automated) L1 Equivalent Control 1.1.13 Ensure that the admin . conf file permissions are set to 600 or more restrictive (Automated) L1 Equivalent Control 1.1.14 Ensure that the admin . conf file ownership is set to root:root (Automated) L1 Equivalent Control 1.1.15 Ensure that the scheduler . conf file permissions are set to 644 or more restrictive (Automated) L1 Pass 1.1.16 Ensure that the scheduler . conf file ownership is set to root:root (Automated) L1 Pass 1.1.17 Ensure that the controller-manager . conf file permissions are set to 644 or more restrictive (Automated) L1 Pass 1.1.18 Ensure that the controller-manager . conf file ownership is set to root:root (Automated) L1 Pass 1.1.19 Ensure that the Kubernetes PKI directory and file ownership is set to root:root (Automated) L1 Pass 1.1.20 Ensure that the Kubernetes PKI certificate file permissions are set to 644 or more restrictive (Manual) L1 Pass 1.1.21 Ensure that the Kubernetes PKI key file permissions are set to 600 (Manual) L1 Pass 1.2 API Server 1.2.1 Ensure that the --anonymous-auth argument is set to false (Manual) L1 Pass 1.2.2 Ensure that the --token-auth-file parameter is not set (Automated) L1 Pass 1.2.3 Ensure that the -- DenyServiceExternalIPs is not set (Automated) L1 Pass 1.2.4 Ensure that the --kubelet-https argument is set to true (Automated) L1 Pass 1.2.5 Ensure that the --kubelet-client-certificate and --kubelet-client-key arguments are set as appropriate (Automated) L1 Pass 1.2.6 Ensure that the --kubelet-certificate-authority argument is set as appropriate (Automated) L1 Pass 1.2.7 Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated) L1 Pass 1.2.8 Ensure that the --authorization-mode argument includes Node (Automated) L1 Pass 1.2.9 Ensure that the --authorization-mode argument includes RBAC (Automated) L1 Pass 1.2.10 Ensure that the admission control plugin EventRateLimit is set (Manual) L1 Warn 1.2.11 Ensure that the admission control plugin AlwaysAdmit is not set (Automated) L1 Pass 1.2.12 Ensure that the admission control plugin AlwaysPullImages is set (Manual) L1 Warn 1.2.13 Ensure that the admission control plugin SecurityContextDeny is set if PodSecurityPolicy is not used (Manual) L1 Equivalent Control 1.2.14 Ensure that the admission control plugin ServiceAccount is set (Automated) L1 Pass 1.2.15 Ensure that the admission control plugin NamespaceLifecycle is set (Automated) L1 Pass 1.2.16 Ensure that the admission control plugin NodeRestriction is set (Automated) L1 Pass 1.2.17 Ensure that the --secure-port argument is not set to 0 (Automated) L1 Pass 1.2.18 Ensure that the --profiling argument is set to false (Automated) L1 Pass 1.2.19 Ensure that the --audit-log-path argument is set (Automated) L1 Equivalent Control 1.2.20 Ensure that the --audit-log-maxage argument is set to 30 or as appropriate (Automated) L1 Equivalent Control 1.2.21 Ensure that the --audit-log-maxbackup argument is set to 10 or as appropriate (Automated) L1 Equivalent Control 1.2.22 Ensure that the --audit-log-maxsize argument is set to 100 or as appropriate (Automated) L1 Equivalent Control 1.2.23 Ensure that the --request-timeout argument is set as appropriate (Manual) L1 Pass 1.2.24 Ensure that the --service-account-lookup argument is set to true (Automated) L1 Pass 1.2.25 Ensure that the --service-account-key-file argument is set as appropriate (Automated) L1 Pass 1.2.26 Ensure that the --etcd-certfile and --etcd-keyfile arguments are set as appropriate (Automated) L1 Pass 1.2.27 Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Automated) L1 Pass 1.2.28 Ensure that the --client-ca-file argument is set as appropriate (Automated) L1 Pass 1.2.29 Ensure that the --etcd-cafile argument is set as appropriate (Automated) L1 Pass 1.2.30 Ensure that the --encryption-provider-config argument is set as appropriate (Manual) L1 Pass 1.2.31 Ensure that encryption providers are appropriately configured (Manual) L1 Pass 1.2.32 Ensure that the API Server only makes use of Strong Cryptographic Ciphers (Manual) L1 Pass 1.3 Controller Manager 1.3.1 Ensure that the --terminated-pod-gc-threshold argument is set as appropriate (Manual) L1 Pass 1.3.2 Ensure that the --profiling argument is set to false (Automated) L1 Pass 1.3.3 Ensure that the --use-service-account-credentials argument is set to true (Automated) L1 Pass 1.3.4 Ensure that the --service-account-private-key-file argument is set as appropriate (Automated) L1 Pass 1.3.5 Ensure that the --root-ca-file argument is set as appropriate (Automated) L1 Pass 1.3.6 Ensure that the RotateKubeletServerCertificate argument is set to true (Automated) L2 Pass 1.3.7 Ensure that the --bind-address argument is set to 127.0.0.1 (Automated) L1 Pass 1.4 Scheduler 1.4.1 Ensure that the --profiling argument is set to false (Automated) L1 Pass 1.4.2 Ensure that the --bind-address argument is set to 127.0.0.1 (Automated) L1 Pass 2 Etcd Node Configuration 2 Etcd Node Configuration 2.1 Ensure that the --cert-file and --key-file arguments are set as appropriate (Automated) L1 Pass 2.2 Ensure that the --client-cert-auth argument is set to true (Automated) L1 Pass 2.3 Ensure that the --auto-tls argument is not set to true (Automated) L1 Pass 2.4 Ensure that the --peer-cert-file and --peer-key-file arguments are set as appropriate (Automated) L1 Pass 2.5 Ensure that the --peer-client-cert-auth argument is set to true (Automated) L1 Pass 2.6 Ensure that the --peer-auto-tls argument is not set to true (Automated) L1 Pass 2.7 Ensure that a unique Certificate Authority is used for etcd (Manual) L2 Pass 3 Control Plane Configuration 3.1 Authentication and Authorization 3.1.1 Client certificate authentication should not be used for users (Manual) L2 Equivalent Control 3.2 Logging 3.2.1 Ensure that a minimal audit policy is created (Manual) L1 Pass 3.2.2 Ensure that the audit policy covers key security concerns (Manual) L2 Equivalent Control 4 Worker Node Security Configuration 4.1 Worker Node Configuration Files 4.1.1 Ensure that the kubelet service file permissions are set to 644 or more restrictive (Automated) L1 Pass 4.1.2 Ensure that the kubelet service file ownership is set to root:root (Automated) L1 Pass 4.1.3 If proxy kubeconfig file exists ensure permissions are set to 644 or more restrictive (Manual) L1 Pass 4.1.4 If proxy kubeconfig file exists ensure ownership is set to root:root (Manual) L1 Pass 4.1.5 Ensure that the --kubeconfig kubelet . conf file permissions are set to 644 or more restrictive (Automated) L1 Pass 4.1.6 Ensure that the --kubeconfig kubelet . conf file ownership is set to root:root (Automated) L1 Pass 4.1.7 Ensure that the certificate authorities file permissions are set to 644 or more restrictive (Manual) L1 Pass 4.1.8 Ensure that the client certificate authorities file ownership is set to root:root (Manual) L1 Pass 4.1.9 Ensure that the kubelet --config configuration file has permissions set to 644 or more restrictive (Automated) L1 Pass 4.1.10 Ensure that the kubelet --config configuration file ownership is set to root:root (Automated) L1 Pass 4.2 Kubelet 4.2.1 Ensure that the --anonymous-auth argument is set to false (Automated) L1 Pass 4.2.2 Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated) L1 Pass 4.2.3 Ensure that the --client-ca-file argument is set as appropriate (Automated) L1 Pass 4.2.4 Ensure that the --read-only-port argument is set to 0 (Manual) L1 Fail 4.2.5 Ensure that the --streaming-connection-idle-timeout argument is not set to 0 (Manual) L1 Pass 4.2.6 Ensure that the --protect-kernel-defaults argument is set to true (Automated) L1 Fail 4.2.7 Ensure that the --make-iptables-util-chains argument is set to true (Automated) L1 Pass 4.2.8 Ensure that the --hostname-override argument is not set (Manual) L1 Pass 4.2.9 Ensure that the --event-qps argument is set to 0 or a level which ensures appropriate event capture (Manual) L2 Warn 4.2.10 Ensure that the --tls-cert-file and --tls-private-key-file arguments are set as appropriate (Manual) L1 Equivalent Control 4.2.11 Ensure that the --rotate-certificates argument is not set to false (Automated) L1 Pass 4.2.12 Verify that the RotateKubeletServerCertificate argument is set to true (Manual) L1 Pass 4.2.13 Ensure that the Kubelet only makes use of Strong Cryptographic Ciphers (Manual) L1 Pass Descriptions of Failures and Equivalent Controls for GKE on AWS admin cluster: Recommendation Level Status Value Justification 1.1.9 Ensure that the Container Network Interface file permissions are set to 644 or more restrictive (Manual) L1 Equivalent Control 755 Anthos clusters on AWS Container Network Interface path is /opt/cni/bin , and its permission is set to 755 for the normal cluster operation.
- Automated auditing of the CIS Kubernetes Benchmark You can use an open-source tool kube-bench to test your cluster configuration against the CIS Kubernetes Benchmark.
- The user's configuration determines whether their environment complies with a Benchmark Recommendation.
- Security relevant events that need permanent storage should be sent to logs.

