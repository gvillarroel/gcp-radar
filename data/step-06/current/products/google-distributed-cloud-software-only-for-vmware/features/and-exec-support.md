---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.047Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "and exec support"
feature_slug: "and-exec-support"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console"
keywords:
  - "exec"
  - "connect"
  - "gateway"
  - "supports"
  - "kubectl"
  - "attach"
  - "cp"
  - "through"
---

# and exec support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Connect Gateway supports kubectl attach, cp, and exec through the gcloud beta container fleet memberships get-credentials command.

## Extended Definition

Connect Gateway for Google Distributed Cloud (software only) for VMware is a cluster access path in which users connect to clusters via a kubeconfig/context and issue kubectl commands through Google-supplied gateway access. The cited docs confirm that this gateway-backed access supports at least read-only kubectl operations (for example, `kubectl get pods -A`) and requires RBAC-related setup via `gcloud` commands for Connect gateway access. Based on the provided excerpts, explicit support for kubectl `attach`, `cp`, or `exec` is not shown, so that part of the feature claim is not directly evidenced.

## Evidence Summary

The pages show how Connect gateway access is established and used with kubectl and RBAC, but they only explicitly demonstrate read-only kubectl usage and do not explicitly document attach/cp/exec support.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)

## Supporting Pages

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- You can now run read-only kubectl commands through the connect gateway, such as the following: kubectl get pods -A If you need full administrative privileges to the admin cluster, see Set up the connect gateway .
- You can now run read-only kubectl commands through the connect gateway, such as the following: kubectl get pods -A If you need full administrative privileges to the admin cluster, see Set up the connect gateway .
- Additionally, you can run read-only kubectl commands through the connect gateway.
- Additionally, you can run read-only kubectl commands through the connect gateway.

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Microsoft registry URLs, needed by every Windows node if using GCR mcr.microsoft.com .data.mcr.microsoft.com go.microsoft.com winlayers.cdn.mscr.io Microsoft WSUS server URLs, needed by gkectl prepare windows on the Windows VM windowsupdate.microsoft.com .windowsupdate.microsoft.com .windowsupdate.microsoft.com .update.microsoft.com .windowsupdate.com download.windowsupdate.com download.microsoft.com .download.windowsupdate.com wustat.windows.com ntservicepack.microsoft.com go.microsoft.com dl.delivery.mp.microsoft.com Cloudbase-Init URL, needed by gkectl prepare windows on the Windows VM https://cloudbase.it Powershell Gallery URLs, needed by gkectl prepare windows on the Windows VM psg-prod-eastus.azureedge.net az818661.vo.msecnd.net devopsgallerystorage.blob.core.windows.net .powershellgallery.com Windows Update Service, needed by gkectl prepare windows on the Windows VM onegetcdn.azureedge.net sws.update.microsoft.com tsfe.trafficshaping.dsp.mp.microsoft.com fe3.delivery.mp.microsoft.com .prod.do.dsp.mp.microsoft.com emdl.ws.microsoft.com adl.windows.com activation-v2.sls.microsoft.com crl.microsoft.com ocsp.digicert.com ctldl.windowsupdate.com login.live.com licensing.mp.microsoft.com www.msftconnecttest.com settings-win.data.microsoft.com wdcp.microsoft.com smartscreen-prod.microsoft.com checkappexec.microsoft.com arc.msn.com ris.api.iris.microsoft.com .tlu.dl.delivery.mp.microsoft.com .au.windowsupdate.com www.microsoft.com fe3.delivery.dsp.mp.microsoft.com.nsatc.net cs9.wac.phicdn.net geo-prod.do.dsp.mp.microsoft.com slscr.update.microsoft.com v10.events.data.microsoft.com Access for Installing docker, needed by gkectl prepare windows on the Windows VM dockermsft.azureedge.net Note: See a full list of URLs used by Windows Server .
- For example: [INPUT] # https://docs.fluentbit.io/manual/input/tail Name tail Tag Regex var.log.containers.(?<pod name>a-z0-9?(?:.a-z0-9?) ) (?<namespace name>[^ ]+) (?<container name>.+)-(?<docker id>[a-z0-9]{64}).log$ Tag k8s container.<namespace name>.<pod name>.<container name> Path C:\var\log\containers\ .log Exclude Path kube-system .log, gke-connect .log, knative-serving .log, gke-system .log, istio-system .log, monitoring-system .log, config-management-system .log, gatekeeper-system .log, cnrm-system .log DB C:\var\log\fluent-bit-k8s-container-application.db Mem Buf Limit 30MB Skip Long Lines On Refresh Interval 10 # storage.type filesystem Buffer Chunk Size 512KB Buffer Max Size 5M Rotate Wait 30 Ignore Older 4h Run the rollout restart command to restart the fluent-bit-windows daemonset: kubectl --kubeconfig KUBECONFIG rollout restart daemonset fluent-bit-windows -n kube-system Node resource type: kubelet, kube-proxy and Windows event-logs You can access logs using the Logs Explorer in the console.
- To check this, get an SSH connection to the Windows VM and run the following command: ls "HKLM:\\Software\Cloudbase Solutions\Cloudbase-Init\id-ovf\" If you find UserDataPlugin: 1 in the output, that means the cloudbase-init has already executed that plugin, which will cause the startup script execution to be skipped, and windows node won't be bootstrapped at all.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".

### "Manage clusters from the Google Cloud console \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Be sure to include your Google Account in the command because the command overwrites the grant list with the users that you specify in the command. gcloud container vmware clusters update USER CLUSTER NAME \ --admin-users YOUR GOOGLE ACCOUNT \ --admin-users ADMIN GOOGLE ACCOUNT 1 \ In addition to granting the Kubernetes clusterrole/cluster-admin role, the command grants the RBAC policies the users need to access the cluster through the Connect gateway .
- This is the context for accessing the cluster through the Connect gateway .
- Whether you use the current context or not, make sure that it works for accessing the cluster by running a simple command such as: kubectl get namespaces \ --kubeconfig= KUBECONFIG PATH \ --context= KUBECONFIG CONTEXT After running gcloud container fleet memberships generate-gateway-rbac , you see something like the following at the end of the output, which is truncated for readability: Validating input arguments.
- The gcloud ... update command can be run on either your admin workstation or any computer that has access to the GKE On-Prem API. generate-gateway-rbac Connect to your admin workstation.

