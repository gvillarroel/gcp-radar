---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.328Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "user cluster creation in existing admin control planes"
feature_slug: "user-cluster-creation-in-existing-admin-control-planes"
latest_feature_date: "2019-01-14"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "user"
  - "cluster"
  - "creation"
  - "existing"
  - "admin"
  - "control"
  - "planes"
  - "gkectl"
---

# user cluster creation in existing admin control planes

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

The gkectl create command can add user clusters to existing admin control planes using an existing kubeconfig file.

## Extended Definition

User cluster creation in existing admin control planes is the ability to provision a new user cluster while targeting a pre-existing admin control plane. In Google Distributed Cloud for VMware, this is done with `gkectl create cluster --kubeconfig <admin-cluster-kubeconfig> --config <user-cluster-config>`, which explicitly binds creation to an existing admin cluster context. The `gcloud container vmware clusters create` syntax further shows this same targeting model via `--admin-cluster-membership`.

## Evidence Summary

The cited Google documentation provides concrete user-cluster creation command examples that require referencing an existing admin cluster through kubeconfig or admin-cluster-membership.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: WEAK
- Re-rank rationale: This is a user-cluster creation guide using gkectl, but the provided excerpt does not explicitly describe creating clusters on existing admin control planes.

Evidence snippets:
- For example: /var/lib/gke/bundles/gke-onprem-vsphere-1.34.200-gke.68-full.tgz USER CLUSTER CONFIG : the path of your user cluster configuration file Create a user cluster Run the following command to create a user cluster: gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If you use VPC Service Controls, you might see errors when you run some gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP service: [Stackdriver] could not get GCP services" .
- Although this module is optional, user cluster creation fails if there is a version mismatch between the version of the platform controller on the admin cluster and the version you specify for the user cluster. google gkeonprem vmware cluster : creates the user cluster.
- Example gcloud commands MetalLB & DHCP gcloud container vmware clusters create user-cluster-1 \ --project=example-project-12345 \ --location=us-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/us-west1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --enable-dhcp \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;pool=lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --enable-control-plane-v2 \ --control-plane-vip=203.0.113.1 \ --ingress-vip=198.51.100.1 MetalLB & static IPs gcloud container vmware clusters create user-cluster-3 \ --project=example-project-12345 \ --location=europe-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/global/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2' \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm' \ --dns-servers=203.0.113.1,203.0.113.2 \ --dns-search-domains=example.com,altostrat.com \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --control-plane-vip=172.16.20.61 \ --ingress-vip=172.16.20.62 Manual LB & static IPs gcloud container vmware clusters create user-cluster-4 \ --project=example-project-12345 \ --location=asia-east1 \ --admin-cluster-membership=projects/example-project-12345/locations/asia-east1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2';ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm'\ --dns-servers=203.0.113.1,203.0.113.2 \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --control-plane-vip=192.0.2.60 \ --ingress-vip=192.0.2.50 \ --ingress-http-node-port=30243 \ --ingress-https-node-port=30879 Terraform Before you begin Get the name and the fleet membership location of your admin cluster: gcloud container fleet memberships list \ --project= FLEET HOST PROJECT ID Replace FLEET HOST PROJECT ID with ID of the project that the admin cluster is registered to.
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: User clusters are referenced only in relation to kubeception IP planning, not in terms of creating them on existing admin control planes with an existing kubeconfig.

Evidence snippets:
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The Google Cloud API Location field corresponds to the --location flag in the gkectl register bootstrap command.
- If you exit out of the gkectl register bootstrap command before the admin cluster is created, the admin cluster creation fails, and you will need to delete the bootstrap cluster using the following command: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Create the admin cluster Apply the Terraform plan to create the admin cluster: terraform apply "tfplan" It takes about 15 minutes or more to create the admin cluster.
- If you exit out of the gkectl register bootstrap command before the admin cluster is created, the admin cluster creation fails, and you will need to delete the bootstrap cluster using the following command: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Finish configuring the admin cluster Return to the console and do the following steps: On the Install bootstrap environment page, click Check Connection .

