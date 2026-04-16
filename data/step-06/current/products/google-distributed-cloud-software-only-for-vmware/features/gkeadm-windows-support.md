---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.258Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkeadm Windows support"
feature_slug: "gkeadm-windows-support"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
keywords:
  - "gkeadm"
  - "windows"
---

# gkeadm Windows support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Gkeadm is supported on Windows.

## Extended Definition

Google Distributed Cloud (software-only) for VMware includes support for Windows Server node pools, with documented workflows for preparing Windows images, allowlisting required Windows registry/URL endpoints, loading Windows-specific container images, and running Windows container workloads on nodes labeled `kubernetes.io/os: windows`. In clusters that use Windows node pools, the upgrade documentation requires a Windows-specific preparation step (`gkectl prepare windows`) and updating the node-pool `osImage` value, showing that Windows node-pool management is part of the gkeadm/gkectl operational flow. Evidence also includes Windows-specific command syntax for setup tasks (for example, `gcloud` examples for Windows), but does not present a broad, explicit statement that the `gkeadm` binary itself is generally available as a Windows executable.

## Evidence Summary

These pages document Windows Server node-pool setup and lifecycle actions in GDC VMware, and tie Windows-specific prep steps into gkeadm/gkectl cluster management.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Microsoft registry URLs, needed by every Windows node if using GCR mcr.microsoft.com .data.mcr.microsoft.com go.microsoft.com winlayers.cdn.mscr.io Microsoft WSUS server URLs, needed by gkectl prepare windows on the Windows VM windowsupdate.microsoft.com .windowsupdate.microsoft.com .windowsupdate.microsoft.com .update.microsoft.com .windowsupdate.com download.windowsupdate.com download.microsoft.com .download.windowsupdate.com wustat.windows.com ntservicepack.microsoft.com go.microsoft.com dl.delivery.mp.microsoft.com Cloudbase-Init URL, needed by gkectl prepare windows on the Windows VM https://cloudbase.it Powershell Gallery URLs, needed by gkectl prepare windows on the Windows VM psg-prod-eastus.azureedge.net az818661.vo.msecnd.net devopsgallerystorage.blob.core.windows.net .powershellgallery.com Windows Update Service, needed by gkectl prepare windows on the Windows VM onegetcdn.azureedge.net sws.update.microsoft.com tsfe.trafficshaping.dsp.mp.microsoft.com fe3.delivery.mp.microsoft.com .prod.do.dsp.mp.microsoft.com emdl.ws.microsoft.com adl.windows.com activation-v2.sls.microsoft.com crl.microsoft.com ocsp.digicert.com ctldl.windowsupdate.com login.live.com licensing.mp.microsoft.com www.msftconnecttest.com settings-win.data.microsoft.com wdcp.microsoft.com smartscreen-prod.microsoft.com checkappexec.microsoft.com arc.msn.com ris.api.iris.microsoft.com .tlu.dl.delivery.mp.microsoft.com .au.windowsupdate.com www.microsoft.com fe3.delivery.dsp.mp.microsoft.com.nsatc.net cs9.wac.phicdn.net geo-prod.do.dsp.mp.microsoft.com slscr.update.microsoft.com v10.events.data.microsoft.com Access for Installing docker, needed by gkectl prepare windows on the Windows VM dockermsft.azureedge.net Note: See a full list of URLs used by Windows Server .
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- For example: [INPUT] # https://docs.fluentbit.io/manual/input/tail Name tail Tag Regex var.log.containers.(?<pod name>a-z0-9?(?:.a-z0-9?) ) (?<namespace name>[^ ]+) (?<container name>.+)-(?<docker id>[a-z0-9]{64}).log$ Tag k8s container.<namespace name>.<pod name>.<container name> Path C:\var\log\containers\ .log Exclude Path kube-system .log, gke-connect .log, knative-serving .log, gke-system .log, istio-system .log, monitoring-system .log, config-management-system .log, gatekeeper-system .log, cnrm-system .log DB C:\var\log\fluent-bit-k8s-container-application.db Mem Buf Limit 30MB Skip Long Lines On Refresh Interval 10 # storage.type filesystem Buffer Chunk Size 512KB Buffer Max Size 5M Rotate Wait 30 Ignore Older 4h Run the rollout restart command to restart the fluent-bit-windows daemonset: kubectl --kubeconfig KUBECONFIG rollout restart daemonset fluent-bit-windows -n kube-system Node resource type: kubelet, kube-proxy and Windows event-logs You can access logs using the Logs Explorer in the console.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- The output information file has this format: Admin workstation version: GKEADM VERSION Created using gkeadm version: GKEADM VERSION VM name: ADMIN WS NAME IP: ADMIN WS IP SSH key used: FULL PATH TO ADMIN WS SSH KEY To access your admin workstation: ssh -i FULL-PATH-TO-ADMIN-WS-SSH-KEY ubuntu@ ADMIN-WS-IP Here is a sample output information file: Admin workstation version: v1.10.3-gke.49 Created using gkeadm version: v1.10.3-gke.49 VM name: admin-ws-janedoe IP: 172.16.91.21 SSH key used: /usr/local/google/home/janedoe/.ssh/gke-admin-workstation Upgraded from (rollback version): v1.10.0-gke.194 To access your admin workstation: ssh -i /usr/local/google/home/janedoe/.ssh/gke-admin-workstation ubuntu@172.16.91.21 Create the file in an editor, substituting the appropriate parameters.
- Upgrade your admin workstation The way you upgrade your admin workstation depends on how you created it: gkeadm or user-managed . gkeadm Locate required files Before you created your admin workstation, you filled in an admin workstation configuration file that was generated by gkeadm create config .
- Run gkectl prepare to import OS images to vSphere: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG If your cluster has a Windows node pool, run gkectl prepare windows , and update the osImage field for the node pool.
- To roll back your admin workstation to the previous version: gkeadm rollback admin-workstation --config= AW CONFIG FILE You can omit --config= AW CONFIG FILE if your admin workstation configuration file is the default admin-ws-config.yaml .

### "Create an admin workstation \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- To grant the required role to your SDK account: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/serviceusage.serviceUsageAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/serviceusage.serviceUsageAdmin" Replace the following: PROJECT ID : the ID of the parent Google Cloud project of your component access service account ACCOUNT : your SDK account To grant additional roles in case you want gkeadm to automatically create service accounts: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountKeyAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountKeyAdmin" Replace the following: PROJECT ID : the ID of the parent project of your component access service account ACCOUNT : your SDK account Creating your admin workstation Enter this command to create your admin workstation.
- Otherwise you must manually copy the keys to the home directory of your admin workstation: Connect-register service account Logging-monitoring service account If you created any of the following service accounts, you must manually copy the keys for those service accounts to the home directory of your admin workstation: Audit logging service account Binary Authorization service account Restoring the admin workstation from a backup file When you upgrade an admin workstation, the gkeadm upgrade command saves a backup file.
- For example: admin-cluster.yaml user-cluster.yaml vcenter-ca-cert.pem component-access-key.json Verify that gkeadm activated your component access service account on your admin workstation: gcloud config get-value account Copying JSON key files to your admin workstation Before you create a cluster, the JSON key files for your service accounts must be on your admin workstation in the home directory.
- This is so that gkeadm can enable services on the Google Cloud project. serviceUsage.serviceUsageAdmin If you choose to have gkeadm automatically create service accounts for you, then your SDK account must also have the following roles on the parent project of your component access service account.

