---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.251Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "User cluster update command"
feature_slug: "user-cluster-update-command"
latest_feature_date: "2020-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "user"
  - "cluster"
  - "update"
  - "command"
  - "gkectl"
  - "lets"
  - "users"
  - "change"
---

# User cluster update command

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The gkectl update cluster command lets users change supported user cluster settings after cluster creation.

## Extended Definition

`gkectl update cluster` is the command used in Google Distributed Cloud (software only) for VMware to apply changes made to a user cluster’s configuration file so the cluster is updated after creation. The available Google docs describe this as a distinct update workflow for user clusters and distinguish it from upgrade workflows (`gkectl upgrade cluster`), which are separate operations.

## Evidence Summary

The cited pages confirm that `gkectl update cluster` is used after editing user cluster configuration to apply changes, but they give limited detail on all supported modifiable settings.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Manage clusters from the Google Cloud console \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: It notes that clusters can be updated via lifecycle management but does not document a `gkectl update cluster` command flow.

Evidence snippets:
- Run the following command to update components: gcloud components update Generate and apply the RBAC policies to your cluster for users and service accounts: gcloud container fleet memberships generate-gateway-rbac \ --membership = MEMBERSHIP NAME \ --role = ROLE \ --users = USERS \ --project = FLEET HOST PROJECT ID \ --kubeconfig = KUBECONFIG PATH \ --context = KUBECONFIG CONTEXT \ --apply Replace the following: MEMBERSHIP NAME : the name used to uniquely represent the cluster in its fleet.
- Be sure to include your Google Account in the command because the command overwrites the grant list with the users that you specify in the command. gcloud container vmware clusters update USER CLUSTER NAME \ --admin-users YOUR GOOGLE ACCOUNT \ --admin-users ADMIN GOOGLE ACCOUNT 1 \ In addition to granting the Kubernetes clusterrole/cluster-admin role, the command grants the RBAC policies the users need to access the cluster through the Connect gateway .
- For more details on the generate-gateway-rbac command, see the gcloud CLI reference guide . update Run the following command to update components: gcloud components update For each user that needs to be granted the clusterrole/cluster-admin role, include the --admin-users flag and run the following command.
- To do this, your registered clusters must be set up with one of the following authentication methods: Google identity : This option lets users log in using their Google Cloud identity, which is the email address associated with your Google Cloud account.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: The page references `gkectl update cluster` for applying configuration changes after upgrades, which is related but not focused on post-creation user-cluster setting updates.

Evidence snippets:
- To view cluster details in the file, run the following command: kubectl config view --kubeconfig USER CLUSTER KUBECONFIG Resume an upgrade If a user cluster upgrade is interrupted, you can resume the user cluster upgrade by running the same upgrade command with the --skip-validation-all flag: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG \ --skip-validation-all Console Upgrading a user cluster requires some changes to the admin cluster.
- Run the gkectl update cluster command with the configuration file changes.
- Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal ControlPlaneUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating admin cluster API Controller Normal ControlPlaneMachineUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating control plane machine Normal StatusChanged 40m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: UPGRADING - New Ready condition: False, CreateOrUpdateControlPlaneMachine, Creating or updating control plane machine Normal StatusChanged 2m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: RUNNING - New Ready condition: True, ClusterRunning, Cluster is running When the upgrade is complete, gkectl list admin shows a STATUS of RUNNING : NAME STATE AGE VERSION gke-admin-test RUNNING 9h 1.34.200-gke.68 Also, when the upgrade is complete, gkectl describe admin shows a Last GKE On Prem Version field under Status .
- To upgrade a user cluster: Update the Google Cloud CLI components: gcloud components update Get a list of available versions to upgrade to: gcloud container vmware clusters query-version-config \ --cluster= USER CLUSTER NAME \ --project= PROJECT ID \ --location= REGION The output of the command is similar to the following: versions: - version: 1.16.3-gke.45 - version: 1.16.2-gke.28 - version: 1.16.1-gke.45 - version: 1.16.0-gke.669 - version: 1.15.6-gke.25 - version: 1.15.5-gke.41 An Anthos version must be made available on the admin cluster ahead of the user cluster creation or upgrade.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- If you want your admin and user clusters to use different kinds of load balancers, you must create user clusters using the gkectl command-line tool. loadBalancer.manualLB If you set loadbalancer.kind to "ManualLB" , fill in this section.
- After the cluster is enrolled in the GKE On-Prem API, if you need to unenroll the cluster, make the following change and then update the cluster: gkeOnPremAPI: enabled: false gkeOnPremAPI.location Immutable String Default: stackdriver.clusterLocation The Google Cloud region where the GKE On-Prem API runs and stores cluster metadata.
- Enrolling your admin cluster in the GKE On-Prem API lets you use standard tools—the Google Cloud console, the Google Cloud CLI, or Terraform —to upgrade user clusters that the admin cluster manages.
- If you add a path to infraConfigFilePath , you need to make the following changes to your admin cluster and user cluster configuration files.

