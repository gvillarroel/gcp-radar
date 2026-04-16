---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.195Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Windows image preparation in private registry"
feature_slug: "windows-image-preparation-in-private-registry"
latest_feature_date: "2021-09-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "windows"
  - "image"
  - "preparation"
  - "private"
  - "registry"
  - "images"
  - "can"
  - "prepared"
---

# Windows image preparation in private registry

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Windows images can be prepared in a private registry.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Windows image preparation for Windows node pools consists of staging Google-provided Windows container images (and, when required, their base layers) into a private registry by pulling, tagging, and pushing them. This can be done manually with Docker commands or via `gkectl prepare --upload --windows-images` using the admin cluster configuration, and the cluster configuration supports `privateRegistry` settings so clusters can pull images from that private registry. If a Windows user cluster upgrade uses prepared credentials with a private registry, the private registry credential must be prepared first.

## Evidence Summary

These pages collectively show how to prepare and stage Windows images for GDC VMware by pushing them to a private registry, how to configure private registry settings, and how upgrade flows require prepared private-registry credentials for Windows user clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Upload the Windows Container images together with their base layers to your private registry, following these steps: Go to the Docker daemon.json file on your Windows machine: PS C:> cat C:\ProgramData\docker\config\daemon.json Add the following lines to configure your Docker daemon.json file to allow pushing foreign layers to your private registry: { "allow-nondistributable-artifacts": ["PRIVATE REGISTRY NAME"] } Download the required Windows Container images to your local Windows machine, and then tag and push them to your private registry.
- Option 1: If you don't need to manually push the Windows base layer images to the private registry: gkectl prepare -- config < var class = "edit" > ADMIN CLUSTER CONFIG < / var > -- upload - windows - images Replace ADMIN CLUSTER CONFIG with the path to the admin cluster configuration file.
- Option 2: If you need to manually push the Windows base layer images to the private registry: Use a Windows machine with Docker installed, and with access to gcr.io , before attempting these steps.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Run gkectl prepare to import OS images to vSphere: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG If your cluster has a Windows node pool, run gkectl prepare windows , and update the osImage field for the node pool.
- If you are using prepared credentials and a private registry for the user cluster, make sure the private registry credential is prepared before upgrading the user cluster.
- If you are using prepared credentials and a private registry for the user cluster, make sure the private registry credential is prepared before upgrading the user cluster.
- For information on how to prepare the private registry credential, see Configure prepared credentials for user clusters .

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- If you want to use Google's Artifact Registry as a private registry, see Use Artifact Registry as a private registry for workload images for the configuration steps. privateRegistry.address Required for private registry Immutable String The IP address or FQDN (Fully Qualified Domain Name) of the machine that runs your private registry.
- You might want to configure the privateRegistry section so that clusters pull system images from the private registry instead of gcr.io/gke-on-prem-release in the following cases: You need to minimize connections to Google Cloud because of security concerns or regulatory requirements.
- Example: proxy: noProxy: "10.151.222.0/24,my-host.example.local,10.151.2.1" privateRegistry A private container registry is a registry where access to container images is restricted to authenticated users.

