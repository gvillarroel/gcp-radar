---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.265Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Ubuntu image compliance configurations"
feature_slug: "ubuntu-image-compliance-configurations"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark"
keywords:
  - "ubuntu"
  - "image"
  - "compliance"
  - "configurations"
  - "conforms"
  - "pci"
  - "dss"
  - "nist"
---

# Ubuntu image compliance configurations

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The Ubuntu image conforms to PCI DSS, NIST Baseline High, and DoD SRG IL2 compliance configurations.

## Extended Definition

Google Distributed Cloud (software only) for VMware publishes a CIS Ubuntu Benchmark compliance reference indicating that its Ubuntu images are hardened to the CIS Level 2 Server profile. It also provides compliance-related configuration guidance, including an example AIDE DaemonSet manifest and a recommendation to run SCAP evaluation to validate installation compliance at Level 2.

## Evidence Summary

The cited pages document the feature’s compliance posture (CIS Level 2 Server) and include both hardening examples and guidance to self-assess Ubuntu image compliance using SCAP.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark)

## Supporting Pages

### "CIS Ubuntu Benchmark \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: It provides Ubuntu image security compliance status, but only for CIS Ubuntu Benchmark levels, not PCI DSS, NIST High, or DoD SRG IL2.

Evidence snippets:
- Here's a manifest for a DaemonSet: apiVersion: apps/v1 kind: DaemonSet metadata: name: enable-aide-pool1 spec: selector: matchLabels: app: enable-aide-pool1 template: metadata: labels: app: enable-aide-pool1 spec: hostIPC: true hostPID: true nodeSelector: cloud.google.com/gke-nodepool: pool-1 containers: - name: update-audit-rule image: ubuntu command: ["chroot", "/host", "bash", "-c"] args: - set -x while true; do change daily cronjob schedule minute=30;hour=5 sed -E "s/([0-9]+ [0-9]+)(. run-parts --report \/etc\/cron.daily. )/$minute $hour\2/g" -i /etc/crontab enable aide chmod 755 /etc/cron.daily/aide sleep 3600 done volumeMounts: - name: host mountPath: /host securityContext: privileged: true volumes: - name: host hostPath: path: / In the preceding manifest: The AIDE cron job will only run on node pool pool-1 as specified by the nodeSelector cloud.google.com/gke-nodepool: pool-1 .
- Use Security Content Automation Protocol (SCAP) evaluation We recommend that you scan your installation yourself to evaluate its Level 2 compliance with the Ubuntu Linux CIS benchmark .
- Status of Google Distributed Cloud The Ubuntu images used with Google Distributed Cloud are hardened to meet the CIS Level 2 - Server profile.
- This document describes the level of compliance that Google Distributed Cloud has with the CIS Ubuntu Benchmark.

### "CIS Ubuntu Benchmark \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/cis-ubuntu-benchmark)
- Source ID: `site-docs-reference-3`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: The page only addresses CIS Ubuntu Benchmark levels and failures, not PCI DSS, NIST Baseline High, or DoD SRG IL2 compliance.

Evidence snippets:
- Here's a manifest for a DaemonSet: apiVersion: apps/v1 kind: DaemonSet metadata: name: enable-aide-pool1 spec: selector: matchLabels: app: enable-aide-pool1 template: metadata: labels: app: enable-aide-pool1 spec: hostIPC: true hostPID: true nodeSelector: cloud.google.com/gke-nodepool: pool-1 containers: - name: update-audit-rule image: ubuntu command: ["chroot", "/host", "bash", "-c"] args: - set -x while true; do change daily cronjob schedule minute=30;hour=5 sed -E "s/([0-9]+ [0-9]+)(. run-parts --report \/etc\/cron.daily. )/$minute $hour\2/g" -i /etc/crontab enable aide chmod 755 /etc/cron.daily/aide sleep 3600 done volumeMounts: - name: host mountPath: /host securityContext: privileged: true volumes: - name: host hostPath: path: / In the preceding manifest: The AIDE cron job will only run on node pool pool-1 as specified by the nodeSelector cloud.google.com/gke-nodepool: pool-1 .
- Use Security Content Automation Protocol (SCAP) evaluation We recommend that you scan your installation yourself to evaluate its Level 2 compliance with the Ubuntu Linux CIS benchmark .
- Status of Google Distributed Cloud The Ubuntu images used with Google Distributed Cloud are hardened to meet the CIS Level 2 - Server profile.
- This document describes the level of compliance that Google Distributed Cloud has with the CIS Ubuntu Benchmark.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".
- It is recommended that you use a user account with the minimum permissions required for an Active Directory domain join, instead of using an Administrator user. (Optional) To avoid storing the password as cleartext in this script, place the password in a file on the VM template, let the script read from that password file, then delete the file after the domain join. $domain = "[DOMAIN NAME]" $password = "[PASSWORD]" ConvertTo-SecureString -asPlainText -Force $username = "$domain\[USERNAME]" $credential = New-Object System.Management.Automation.PSCredential($username,$password) Add-Computer -DomainName $domain -Credential $credential -restart –force Create a Windows VM template with a customized script: gkectl prepare windows --base-vm-template BASE WINDOWS VM TEMPLATE NAME --bundle-path BUNDLE PATH --kubeconfig ADMIN CLUSTER KUBECONFIG --customized-script CUSTOMIZED SCRIPT PATH Replace BUNDLE PATH with the path to the bundle.
- To schedule Windows Server containers on Windows Server nodes, your manifest file must include this nodeSelector section: nodeSelector: kubernetes.io/os: windows With nodeSelector configured, an admission webhook running in the cluster checks new workloads for the presence of this Windows node selector and when found, applies the following toleration to the workload which allows it to run on the tainted Windows Server nodes: tolerations: - key: "node.kubernetes.io/os" operator: "Equal" value: "windows" effect: "NoSchedule" Step 1: Create an Internet Information Services (IIS) deployment file Here is a sample configuration, which deploys Microsoft's official IIS image to a single Pod.

