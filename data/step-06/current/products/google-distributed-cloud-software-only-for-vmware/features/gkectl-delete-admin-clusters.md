---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.323Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "gkectl delete admin clusters"
feature_slug: "gkectl-delete-admin-clusters"
latest_feature_date: "2019-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation"
keywords:
  - "gkectl"
  - "delete"
  - "admin"
  - "clusters"
  - "command"
  - "can"
---

# gkectl delete admin clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The gkectl delete command can delete admin clusters.

## Extended Definition

`gkectl` documentation snippets in Google Distributed Cloud (software only) for VMware show deletion usage for bootstrap clusters, specifically `gkectl delete bootstrap` with required identifiers and project/location/service-account parameters. The admin workstation page also indicates that gkectl can forcibly delete a bootstrap cluster used for admin cluster lifecycle operations. The provided excerpts do not explicitly document a `gkectl delete admin` command or any direct admin-cluster deletion syntax.

## Evidence Summary

These pages confirm `gkectl`-based bootstrap cleanup and admin-cluster workflow context, but they do not provide evidence for an explicit `gkectl delete` command targeting admin clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)

## Supporting Pages

### "Back up and restore advanced clusters with gkectl \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/back-up-and-restore-advanced-cluster-with-gkectl)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- To restore quorum, run the applicable command for your cluster type: Admin cluster gkectl restore admin --kubeconfig ADMIN KUBECONFIG \ --config ADMIN CONFIG \ --control-plane-node WORKING NODE IP \ --ssh-key ADMIN SSH KEY PATH Replace the following: ADMIN KUBECONFIG : the path of the kubeconfig file for the admin cluster.
- Run the applicable command to back up the cluster: Admin cluster gkectl backup admin --kubeconfig ADMIN KUBECONFIG User cluster gkectl backup cluster --cluster-name CLUSTER NAME \ --kubeconfig ADMIN KUBECONFIG By default, the backup tar file is saved to the directory gkectl-workspace/backups on your admin workstation.
- To restore a cluster: Run the applicable command to restore the cluster: Admin cluster gkectl restore admin --backup-file BACKUP FILE \ --config ADMIN CONFIG Replace the following: BACKUP FILE : the path and name of the backup file you are using.
- To back up a cluster: Run the following command to check your cluster: gkectl diagnose cluster --cluster-name CLUSTER NAME \ --kubeconfig ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the name of the cluster you plan to back up.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- If you exit out of the gkectl register bootstrap command before the admin cluster is created, the admin cluster creation fails, and you will need to delete the bootstrap cluster using the following command: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Create the admin cluster Apply the Terraform plan to create the admin cluster: terraform apply "tfplan" It takes about 15 minutes or more to create the admin cluster.
- If you exit out of the gkectl register bootstrap command before the admin cluster is created, the admin cluster creation fails, and you will need to delete the bootstrap cluster using the following command: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Finish configuring the admin cluster Return to the console and do the following steps: On the Install bootstrap environment page, click Check Connection .
- Delete the bootstrap cluster: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Re-run the gkectl register bootstrap command.
- Note, however, the command takes additional values that you must specify in the provided placeholder variables. gkectl register bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --vcenter-address= VCENTER ADDRESS \ --vcenter-datacenter= DATA CENTER \ --vcenter-cluster= VCENTER CLUSTER \ --vcenter-resource-pool= RESOURCE POOL \ --vcenter-datastore= DATASTORE \ --vcenter-network= NETWORK \ --vcenter-ca-cert-path= CA CERT PATH \ --bundle-path= BUNDLE PATH \ --component-access-service-account-key-path= COMPONENT ACCESS SA PATH \ --register-service-account-key-path= CONNECT REGISTER SA PATH \ --stackdriver-service-account-key-path= LOG MON SA PATH \ --cloud-audit-logging-service-account-key-path= CLOUD AUDIT SA PATH \ --admin-kubeconfig-out= KUBECONFIG NAME Replace the following with admin workstation paths: CA CERT PATH : the path to the root CA certificate for your vCenter Server.

### "Create an admin workstation \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The VM template that gkeadm uses to create the admin workstation has all the software that you need to create and manage clusters using the gkectl command-line tool.
- This allows gkectl to prepare a private registry if one is provided, setup proxy for docker if your network is behind a proxy server, and force delete the bootstrap cluster that is used for admin cluster lifecycle operations in case the deletion fails.
- The admin workstation hosts command-line interface (CLI) tools and configuration files to provision clusters during installation, and CLI tools for interacting with provisioned clusters post-installation.
- To grant the required role to your SDK account: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/serviceusage.serviceUsageAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/serviceusage.serviceUsageAdmin" Replace the following: PROJECT ID : the ID of the parent Google Cloud project of your component access service account ACCOUNT : your SDK account To grant additional roles in case you want gkeadm to automatically create service accounts: Linux and macOS gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID \ --member="user: ACCOUNT " \ --role="roles/iam.serviceAccountKeyAdmin" Windows gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/resourcemanager.projectIamAdmin" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountCreator" gcloud projects add-iam-policy-binding PROJECT ID ^ --member="user: ACCOUNT " ^ --role="roles/iam.serviceAccountKeyAdmin" Replace the following: PROJECT ID : the ID of the parent project of your component access service account ACCOUNT : your SDK account Creating your admin workstation Enter this command to create your admin workstation.

