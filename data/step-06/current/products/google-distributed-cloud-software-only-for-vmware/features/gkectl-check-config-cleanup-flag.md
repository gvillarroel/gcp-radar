---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.280Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl check-config cleanup flag"
feature_slug: "gkectl-check-config-cleanup-flag"
latest_feature_date: "2020-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
keywords:
  - "gkectl"
  - "check"
  - "config"
  - "cleanup"
  - "flag"
  - "command"
  - "includes"
  - "controls"
---

# gkectl check-config cleanup flag

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The gkectl check-config command includes a cleanup flag that controls whether its test VM and SSH keys are preserved after preflight checks.

## Extended Definition

In Google Distributed Cloud (software-only) for VMware, the `gkectl check-config` preflight command supports a `--cleanup` flag that was introduced in version 1.2.1. In the official preflight checks documentation, this flag is documented in the context of preserving the test VM for debugging, indicating it affects whether preflight check test resources are cleaned up after execution.

## Evidence Summary

The cited preflight-checks page shows the `--cleanup` flag exists on `gkectl check-config` (from v1.2.1 onward) and links it to preserving the debug test VM during preflight validation.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)

## Supporting Pages

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: WEAK
- Re-rank rationale: The page notes that preflight checks may create temporary VMs, but does not describe a cleanup flag or cleanup behavior.

Evidence snippets:
- Preserving the test VM for debugging Starting with version 1.2.1, the gkectl check-config command has a --cleanup flag.
- To learn about the available skip flags, run the following command: gkectl check-config --help For example, to skip the load balancer validations: gkectl check-config --config my-config.yaml --skip-validation-load-balancer Cancelling preflight checks If you started running preflight checks and want to cancel, press CTRL + C twice.
- In version 1.2.1 and later, the check-config command itself uploads the VM template, so you can run the full set of validations before you run gkectl prepare : Run gkectl check-config , without the --fast flag.
- Coming soon The following preflight checks will be added in a future release: NTP server Running preflight checks You run preflight checks by running the following command: gkectl check-config --config [CONFIG] where [CONFIG] is the path to your configuration file Running in fast mode If you prefer, you can run preflight checks in "fast mode," which skips the validations that create temporary test VMs, such as the load balancing VIP and node IP validations.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- For example: /var/lib/gke/bundles/gke-onprem-vsphere-1.34.200-gke.68-full.tgz USER CLUSTER CONFIG : the path of your user cluster configuration file Create a user cluster Run the following command to create a user cluster: gkectl create cluster --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG If you use VPC Service Controls, you might see errors when you run some gkectl commands, such as "Validation Category: GCP - [UNKNOWN] GCP service: [Stackdriver] could not get GCP services" .
- If you are installing a lower version on an advanced cluster, the command will fail. gkectl check-config --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the kubeconfig file for your admin cluster USER CLUSTER CONFIG : the path of your user cluster configuration file If the command returns any failure messages, fix the issues and validate the file again.
- To learn more about the check-config command, see Running preflight checks . (Optional) Import OS images to vSphere, and push container images to a private registry Run gkectl prepare if any of the following are true: Your user cluster is in a different vSphere data center from your admin cluster.
- Validate your configuration file After you've filled in your user cluster configuration file, run the gkectl check-config command to verify that the file is valid.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Copy and paste the gkectl register bootstrap command into a text editor so that you can specify values for the following flags: ./gkectl register bootstrap \ ... --bundle-path= BUNDLE PATH \ ... --component-access-service-account-key-path= COMPONENT ACCESS SA PATH \ --register-service-account-key-path= CONNECT REGISTER SA PATH \ --stackdriver-service-account-key-path= LOG MON SA PATH \ --cloud-audit-logging-service-account-key-path= CLOUD AUDIT SA PATH \ --admin-kubeconfig-out= KUBECONFIG NAME Replace the following with admin workstation paths: BUNDLE PATH : the path to the bundle file.
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The Google Cloud API Location field corresponds to the --location flag in the gkectl register bootstrap command.
- If you exit out of the gkectl register bootstrap command before the admin cluster is created, the admin cluster creation fails, and you will need to delete the bootstrap cluster using the following command: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Finish configuring the admin cluster Return to the console and do the following steps: On the Install bootstrap environment page, click Check Connection .
- The version you select here must match the version of the bundle that you specify in the --bundle-path flag in the gkectl register bootstrap command. vCenter configuration If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the fields in the console.

