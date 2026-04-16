---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.263Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Standalone admin cluster creation command"
feature_slug: "standalone-admin-cluster-creation-command"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains"
keywords:
  - "standalone"
  - "admin"
  - "cluster"
  - "creation"
  - "command"
  - "creates"
  - "clusters"
---

# Standalone admin cluster creation command

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

A standalone command creates admin clusters.

## Extended Definition

The feature is the `gkectl` command-line workflow used to create an admin cluster in Google Distributed Cloud (software only) for VMware by running `gkectl create admin --config <admin-cluster-config>`. The docs specify that this command is used to provision the admin cluster and can be reissued to resume creation if a previous creation attempt fails or is canceled. Running the command creates a `kubeconfig` file in the current directory for connecting to the admin cluster.

## Evidence Summary

The cited pages describe the `gkectl create admin` command, its retry/resume behavior, and its generated kubeconfig artifact as part of admin cluster creation.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)

## Supporting Pages

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Resume creation of the admin cluster after a failure If the admin cluster creation fails or is canceled, you can run the create command again: gkectl create admin --config ADMIN CLUSTER CONFIG Locate the admin cluster kubeconfig file The gkectl create admin command creates a kubeconfig file named kubeconfig in the current directory.
- If you exit out of the gkectl register bootstrap command before the admin cluster is created, the admin cluster creation fails, and you will need to delete the bootstrap cluster using the following command: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Create the admin cluster Apply the Terraform plan to create the admin cluster: terraform apply "tfplan" It takes about 15 minutes or more to create the admin cluster.
- If you exit out of the gkectl register bootstrap command before the admin cluster is created, the admin cluster creation fails, and you will need to delete the bootstrap cluster using the following command: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Finish configuring the admin cluster Return to the console and do the following steps: On the Install bootstrap environment page, click Check Connection .
- Connect to the admin cluster The gkectl register bootstrap command creates a kubeconfig file for the admin cluster on your admin workstation.

### "Create an admin cluster for use in topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: The page includes a procedural step to create the admin cluster using `gkectl`, but does not provide detailed command semantics for a standalone creation API.

Evidence snippets:
- Create the admin cluster Create the admin cluster: gkectl create admin --config ADMIN CLUSTER CONFIG Resume creation of the admin cluster after a failure If the admin cluster creation fails or is canceled, you can run the create command again: gkectl create admin --config ADMIN CLUSTER CONFIG Locate the admin cluster kubeconfig file The gkectl create admin command creates a kubeconfig file named kubeconfig in the current directory.
- If you didn't use gkeadm to create your admin workstation, then generate admin-cluster.yaml by running this command on your admin workstation: gkectl create-config admin This configuration file is for creating your admin cluster.
- When Google Distributed Cloud creates an admin cluster, it deploys a Kubernetes in Docker (kind) cluster to temporarily host the Kubernetes controllers needed to create the admin cluster.
- Note the following limitations with the advanced cluster preview: You can enable advanced cluster at cluster creation time for new 1.31 clusters only.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Although we still support Seesaw for non-HA admin clusters that have been upgraded, we recommend that you migrate to MetalLB . antiAffinityGroups.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable DRS rule creation.
- If you want your admin and user clusters to use different kinds of load balancers, you must create user clusters using the gkectl command-line tool. loadBalancer.manualLB If you set loadbalancer.kind to "ManualLB" , fill in this section.
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.

