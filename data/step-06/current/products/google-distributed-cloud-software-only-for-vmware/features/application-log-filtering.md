---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.102Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Application log filtering"
feature_slug: "application-log-filtering"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring"
keywords:
  - "application"
  - "log"
  - "filtering"
  - "anthos"
  - "clusters"
  - "vmware"
  - "adds"
  - "preview"
---

# Application log filtering

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on VMware adds preview support for filtering application logs by namespace, Pod labels, and content regex.

## Extended Definition

Application log filtering in Google Distributed Cloud (software only) for VMware is configured via the `appLogFilter` section of the `addons.gke.io/v1alpha1` Stackdriver resource in the cluster add-on spec used for application logging. It supports at least keep rules based on Kubernetes namespaces and drop rules based on pod label selectors, which lets operators reduce application logging volume before logs are sent to Cloud Logging. The guide also shows that changes are applied by updating the spec and can be refreshed (for pod label selector changes) by restarting the log-forwarder DaemonSet.

## Evidence Summary

The cited documentation provides an explicit example of the `appLogFilter` fields (`keepLogRules` and `dropLogRules`) and operational steps for configuring and applying those filters in the application logging workflow.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring)

## Supporting Pages

### "Enable application logging and monitoring \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/application-logging-monitoring)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: This page is about sending application logs and metrics, but does not document filtering by namespace, labels, or regex.

Evidence snippets:
- For example: insertId : 1oa4vhg3qfxidt labels : k8s-pod/app : monitoring-example k8s- pod/pod-template-hash : 7685d96496 logName : projects/.../logs/stdout receiveTimestamp : '2020-11-14T01:24:39.562864735Z' resource : labels : cluster name : ... container name : prometheus-example-exporter location : us-west1 namespace name : default pod name : monitoring-example-7685d96496-xqfsf project id : ... type : k8s container textPayload : 2020/11/14 01:24:24 Starting to listen on :9090 timestamp : '2020-11-14T01:24:24.358600252Z' Filter application logs Application log filtering can reduce application logging billing and network traffic from the cluster to Cloud Logging.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Enable application logging and monitoring Stay organized with collections Save and categorize content based on your preferences.
- Save the following Deployment manifest to a file named my-app.yaml . apiVersion : apps/v1 kind : Deployment metadata : name : "monitoring-example" namespace : "default" labels : app : "monitoring-example" spec : replicas : 1 selector : matchLabels : app : "monitoring-example" template : metadata : labels : app : "monitoring-example" spec : containers : - image : gcr.io/google-samples/prometheus-dummy-exporter:latest name : prometheus-example-exporter imagePullPolicy : Always command : - /bin/sh - -c - ./prometheus-dummy-exporter --metric-name=example monitoring up --metric-value=1 --port=9090 resources : requests : cpu : 100m Create the deployment: kubectl --kubeconfig USER CLUSTER KUBECONFIG apply -f my-app.yaml View application logs Console Go to the Logs explorer in the Google Cloud console.
- Add an appLogFilter section to the spec : apiVersion : addons.gke.io/v1alpha1 kind : Stackdriver metadata : name : stackdriver namespace : kube-system spec : enableCloudLoggingForApplications : true projectID : ... clusterName : ... clusterLocation : ... appLogFilter : keepLogRules : - namespaces : - prod ruleName : include-prod-logs dropLogRules : - podLabelSelectors : - disableGCPLogging=yes ruleName : drop-logs Save and close the edited file. (Optional) If you're using podLabelSelectors , restart the stackdriver-log-forwarder DaemonSet to effect your changes as soon as possible: kubectl --kubeconfig USER CLUSTER KUBECONFIG --namespace kube-system \ rollout restart daemonset stackdriver-log-forwarder Normally, podLabelSelectors are effective after 10 minutes.

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Feature/capability 1.30 1.31 1.32 1.33 1.34 (latest) Advanced clusters Preview GA GA GA Topology domains Preview Preview Preview Preview Regional fleet membership GA GA GA GA GA Version skew n+2 admin cluster - user cluster GA GA GA GA GA Version skew n+2 node pool - user cluster GA GA GA GA GA Max surge setting for node pool updates Preview Preview Preview Preview Preview cgroup v2 for nodes GA GA GA GA GA DSR mode for Dataplane V2 GA GA GA GA GA BinAuthz for Controlplane V2 user clusters GA GA GA GA GA User-managed admin workstation GA GA GA GA GA StatefulSet CSI migration tool GA GA GA GA GA Seesaw to MetalLB migration GA GA GA GA GA Disable bundled ingress GA GA GA GA GA Admin cluster prepared credentials GA GA GA GA GA Storage policy for a user cluster GA GA GA GA GA Storage policy for an admin cluster GA GA GA GA GA Node auto repair GA GA GA GA GA High availability admin cluster GA GA GA GA GA VM-Host affinity GA GA GA GA GA Generate configuration files from an existing cluster GA GA GA GA GA Managed Service for Prometheus system metrics collection GA GA GA GA GA Upgrade and rollback of nodepools GA GA GA GA GA Update private registry credentials GA GA GA GA GA Admin cluster backup and restore with gkectl Preview Preview Preview Preview Preview User cluster nodepool autoscaling GA GA GA GA GA Cluster automatic node resizing GA GA GA GA GA Multiple vSphere cluster support GA GA GA GA GA Multiple vSphere data centers support GA GA GA GA GA OpenID Connect (OIDC) support for authentication to clusters GA GA GA GA GA CA certificate rotation GA GA GA GA GA Workload Identity support GA GA GA GA GA AIS with LDAP authentication support GA GA GA GA GA Always-on secrets encryption without hardware security module (HSM) GA GA GA GA GA Update vCenter CA certificates with gkectl GA GA GA GA GA Egress NAT gateway GA GA GA GA GA Admin cluster fleet registration GA GA GA GA GA Windows node pool support GA GA GA 1 1 containerd runtime for Windows node pool GA GA GA 1 1 Container-optimized OS node pool support GA GA GA GA GA CoreDNS as the cluster DNS provider GA GA GA GA GA User cluster lifecycle in the Google Cloud console GA GA GA GA GA Admin cluster node creation with Container-optimized OS GA GA GA GA GA Multi-NIC capability for Pods GA GA GA GA GA MetalLB load balancer option GA GA GA GA GA gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring GA GA GA GA GA Windows Dataplane V2 support GA GA GA 1 1 Summary API metrics GA GA GA GA GA gkectl update credentials support for updating component access service account key GA GA GA GA GA Prepared credentials for user cluster GA GA GA GA GA Dry run upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of admin cluster GA GA GA GA GA Sequential update of node pools GA GA GA GA GA Create volume snapshot with vSphere CSI driver Preview Preview Preview Preview Preview Create user cluster with Controlplane V2 enabled GA GA GA GA GA Storage migration with SPBM GA GA GA GA GA Migrate a datastore to a SPBM GA GA GA GA GA Migrate a user cluster to Controlplane V2 GA GA GA GA GA Migrate to an HA admin cluster GA GA GA GA GA Migrate configuration settings for F5 BIG-IP GA GA GA GA GA 1 Windows Server OS node pools are deprecated in version 1.32 and will be unavailable in version 1.33 and higher.
- In the Select your product field, enter the following: Google Distributed Cloud Virtual - vSphere (Anthos on VMWare) Click the item in the Matching products list, and then click Select .
- However, we do provide best-effort developer support to ensure your developers can run applications on clusters created using Google Distributed Cloud.
- The following table provides further details: Cloud Customer Care Collaborative Support Not Supported Kubernetes and the container runtime VMware vSphere (vCenter Server and ESXi) VMware products beyond vSphere Canonical Ubuntu for guest/node OS F5 BIG-IP load balancers Customer code (For more information, see the Developer Support section) vCenter controller Hardware and hyper-converged infrastructure solutions as listed in the Collaborative Support Partners page Customer choice of host OS F5 controller Physical server, storage, and network Calico and related network policies External DNS, DHCP, and identity systems Ingress controller Calico Enterprise Edition Prometheus and Grafana Stackdriver Monitoring, Stackdriver Logging, and Stackdriver agents Identity federation with OIDC compliant providers Hub, Connect, and the Connect Agent Knative serving / Knative Bundled LoadBalancer (Seesaw) Supported features This document lists the features for Google Distributed Cloud for supported releases.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Update the Windows node pools to use the new template by running: gkectl update cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If the new version requires changes from Anthos's side, you must wait for the next monthly Anthos patch release and upgrade the clusters .
- For example: [INPUT] # https://docs.fluentbit.io/manual/input/tail Name tail Tag Regex var.log.containers.(?<pod name>a-z0-9?(?:.a-z0-9?) ) (?<namespace name>[^ ]+) (?<container name>.+)-(?<docker id>[a-z0-9]{64}).log$ Tag k8s container.<namespace name>.<pod name>.<container name> Path C:\var\log\containers\ .log Exclude Path kube-system .log, gke-connect .log, knative-serving .log, gke-system .log, istio-system .log, monitoring-system .log, config-management-system .log, gatekeeper-system .log, cnrm-system .log DB C:\var\log\fluent-bit-k8s-container-application.db Mem Buf Limit 30MB Skip Long Lines On Refresh Interval 10 # storage.type filesystem Buffer Chunk Size 512KB Buffer Max Size 5M Rotate Wait 30 Ignore Older 4h Run the rollout restart command to restart the fluent-bit-windows daemonset: kubectl --kubeconfig KUBECONFIG rollout restart daemonset fluent-bit-windows -n kube-system Node resource type: kubelet, kube-proxy and Windows event-logs You can access logs using the Logs Explorer in the console.
- You can verify whether the Windows VMs in the current network can contact the AD domain DNS server by running this command: PS C:\> nslookup DOMAIN NAME DOMAIN SERVER IP Server: example-1-2-3-4.anthos Address: 1.2.3.4 Name: example.org Address: 1.2.3.4 Step 1: Create Windows VM template with a customized script Execute a customized script before the Windows node joins the user cluster for Active Directory domain join.
- The name has the following format: Successfully created Anthos Windows VM template "gke-on-prem-windows-server-2019- VERSION " Note: The created VM template will be used as the OS image for the Windows node pools and is prepared to trigger a script at first startup, which is required for the node to function correctly.

