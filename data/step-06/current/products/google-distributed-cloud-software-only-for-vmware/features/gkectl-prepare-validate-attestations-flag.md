---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.305Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl prepare --validate-attestations flag"
feature_slug: "gkectl-prepare-validate-attestations-flag"
latest_feature_date: "2019-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "gkectl"
  - "prepare"
  - "validate"
  - "attestations"
  - "flag"
  - "verifies"
  - "admin"
  - "workstation"
---

# gkectl prepare --validate-attestations flag

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The --validate-attestations flag verifies that admin workstation container images were built and signed by Google and are ready for deployment.

## Extended Definition

`gkectl prepare` in Google Distributed Cloud (software only) for VMware is the command used to prepare a vSphere environment, and it can optionally validate container image build attestations. This optional validation is documented as checking that the images were built and signed by Google and are ready for deployment, which is the behavior tied to the `--validate-attestations` flag in the provided feature description.

## Evidence Summary

These pages document gkectl-based admin/user cluster workflows and note that `gkectl prepare` includes optional attestation validation of container images, but they do not explicitly confirm the flag name in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Copy and paste the gkectl register bootstrap command into a text editor so that you can specify values for the following flags: ./gkectl register bootstrap \ ... --bundle-path= BUNDLE PATH \ ... --component-access-service-account-key-path= COMPONENT ACCESS SA PATH \ --register-service-account-key-path= CONNECT REGISTER SA PATH \ --stackdriver-service-account-key-path= LOG MON SA PATH \ --cloud-audit-logging-service-account-key-path= CLOUD AUDIT SA PATH \ --admin-kubeconfig-out= KUBECONFIG NAME Replace the following with admin workstation paths: BUNDLE PATH : the path to the bundle file.
- The version you select here must match the version of the bundle that you specify in the --bundle-path flag in the gkectl register bootstrap command. vCenter configuration If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the fields in the console.
- As you enter values in the UI fields, the console copies the values to the corresponding flags for the gkectl register bootstrap command that is displayed in the Bootstrap environment from admin workstation section at the bottom of the page.
- You must specify the admin workstation path in the --vcenter-ca-cert-path flag in the gkectl register bootstrap command.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- When you create an admin workstation, it comes with a full bundle at: /var/lib/gke/bundles/gke-onprem-vsphere- VERSION -full.tgz Example: bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.10.0-gke.8.full.tgz" preparedSecrets.enabled If infraConfigFilePath is configured, remove this field.
- Example: cloudAuditLogging: serviceAccountKeyPath: "my-key-folder/audit-log-key.json" clusterBackup.datastore Optional Mutable String By default, cluster backup tar files are saved to the directory gkectl-workspace/backups on your admin workstation.
- If you did not use gkeadm to create your admin workstation, you can use gkectl to generate a template for your admin cluster configuration file.
- If you omit this flag, gkectl names the file admin-cluster.yaml and puts it in the current directory.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- If you are installing a lower version on an advanced cluster, the command will fail. gkectl check-config --kubeconfig ADMIN CLUSTER KUBECONFIG --config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of the kubeconfig file for your admin cluster USER CLUSTER CONFIG : the path of your user cluster configuration file If the command returns any failure messages, fix the issues and validate the file again.
- Your user cluster uses a private container registry that is different from the private registry used by your admin cluster. gkectl prepare --kubeconfig ADMIN CLUSTER KUBECONFIG \ --bundle-path BUNDLE \ --user-cluster-config USER CLUSTER CONFIG Replace the following: ADMIN CLUSTER KUBECONFIG : the path of your admin cluster kubeconfig file BUNDLE : the path of the bundle file.
- To learn more about the check-config command, see Running preflight checks . (Optional) Import OS images to vSphere, and push container images to a private registry Run gkectl prepare if any of the following are true: Your user cluster is in a different vSphere data center from your admin cluster.
- Before you begin If you plan to use gkectl to create the user cluster, make sure you have set up and can sign in to your admin workstation as described in Create an admin workstation .

