---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.877Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "migctl install node selector and toleration options"
feature_slug: "migctl-install-node-selector-and-toleration-options"
latest_feature_date: "2020-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure"
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux"
keywords:
  - "migctl"
  - "install"
  - "node"
  - "selector"
  - "toleration"
  - "options"
  - "setup"
  - "command"
---

# migctl install node selector and toleration options

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The migctl setup install command can target specific nodes or node pools using node selectors and tolerations.

## Extended Definition

The migctl setup install command can target specific nodes or node pools using node selectors and tolerations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure](https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure)
- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)

## Supporting Pages

### "Migrated workload fails on 1.20 and later with Ubuntu nodes \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure](https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- When deploying container workloads on Ubuntu nodes for GKE versions 1.20 and later, the workload can enter a crash-loop and the logs contain error messages in the form: D0806 01:59:15.000000 8 hcutil.py:136] SHELL CMD : aa-exec -p lxc-container-default echo 123 D0806 01:59:15.000000 8 hcutil.py:168] SHELL STDERR : b"aa-exec : ERROR : profile 'lxc-container-default' does not exist\n" D0806 01:59:15.000000 8 hcutil.py:168] SHELL STDERR : b'\n' D0806 01:59:15.000000 8 hcutil.py:210] SHELL COMPLETED : 1 (aa-exec -p lxc-container-default echo 123) required AppArmor profile 'lxc-container-default' does not exist, if this pod runs on a GKE node of type 'Container Optimized OS' (COS) please run migctl setup install --cos-runtime to install it E0806 01:59:15.000000 8 hcmain.py:22] Traceback (most recent call last) : File "./hcmain.py", line 19, in safe action File "./hcmain.py", line 74, in run action File "./hcrunner.py", line 392, in validateSystem Exception : Invalid system or AppArmor profile E0806 01:59:15.000000 8 hcmain.py:23] Invalid system or AppArmor profile I0806 01:59:15.000000 8 termination log.py:4] writing error to termination log at /dev/termination-log To resolve this issue: Connect to the deployment cluster using a command in the form: gcloud container clusters get-credentials CLUSTER --zone ZONE --project PROJECT Manually install the Linux LXC package on the deployment cluster by using the command: migctl setup install --cos-runtime Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- That means new deployment clusters that use Ubuntu nodes, or Ubuntu nodes for existing deployment clusters that are upgraded to GKE 1.20 and later, cannot run your migrated workloads.
- Migrated workload fails on 1.20 and later with Ubuntu nodes AppArmor lets a system administrator restrict capabilities of a deployed container.
- However, as part of the update to Google Kubernetes Engine (GKE) 1.20, Ubuntu node images no longer include the LXC package by default.

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the quickstart-local-vm command tab, install the Google Cloud CLI: Import the Google Cloud public key. curl https://packages.cloud.google.com/apt/doc/apt-key.gpg sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg Add the gcloud CLI distribution URI as a package source echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list Update and install gcloud sudo apt-get update && sudo apt-get install google-cloud-cli Get started gcloud init To complete the gcloud CLI setup, follow the instructions that appear on the quickstart-local-vm command tab: To select the account to use to perform various operations, enter 1 .
- On the quickstart-local-vm command tab, install the gke-gcloud-auth-plugin plugin : sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin Install kubectl : sudo apt-get install kubectl Connect to the cluster quickstart-cluster : gcloud container clusters get-credentials quickstart-cluster \ --zone us-central1-a --project PROJECT ID Open the migration-artifacts folder: cd migration-artifacts To expose the workload to the internet, add a new LoadBalancer service in the deployment spec.yaml file.
- On the quickstart-source-vm command tab, install the apache2 package: sudo apt-get update && sudo apt-get install apache2 -y After installing Apache, the operating system automatically starts the Apache server.
- It appears similar to the following: apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP Add another Service object called hello-service right after linux-system : apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP --- Add the hello-service object apiVersion: v1 kind: Service metadata: name: hello-service spec: selector: app: linux-system ports: - protocol: TCP port: 80 targetPort: 80 type: LoadBalancer To save the file and exit the text editor, press Esc and then enter :wq .

### Migrate to Containers CLI reference for Linux \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Synopsis m2c COMMAND [options] Flags -q,--quiet Don't output anything -v,--verbose Show verbose output Commands Command Description m2c analyze Analyze the workload's configuration in the given file system. m2c cleanup Clean up a source file system. m2c completion Generate the autocompletion script for the specified shell m2c config View and edit configuration properties m2c copy Copy a VM's file system locally. m2c generate Generate migration artifacts from the given file system. m2c help Help about any command m2c migrate-data Migrate data from the local machine to PVCs. m2c plugins Manage migration plugins m2c version Print the CLI version. m2c analyze Analyze the workload's configuration in the given file system with a given plugin.
- Synopsis m2c migrate-data -i INPUT PATH [options] Flags -i,--input path The path to a directory generated by m2c analyze -n,--namespace namespace The namespace of the target PVCs on the target cluster m2c plugins Synopsis m2c plugins COMMAND Commands Command Description m2c plugins unpack Import plugins from a local file. m2c plugins unpack Import plugins from a local file.
- Synopsis m2c analyze --source COPIED FILESYSTEM PATH --plugin PLUGIN NAME --output OUTPUT DIR [options] Flags -o,--output path Output path that can be used as input to the m2c generate command -r,--parameter name=value Plugin analysis parameters in the format "name=value".
- You can execute the following once: echo "autoload -U compinit; compinit" >> /. zshrc To load completions in your current shell session: source <(m2c completion zsh) To load completions for every new session, execute once: Linux: m2c completion zsh > " ${ fpath [ 1 ] } / m2c" macOS: m2c completion zsh > $(brew --prefix)/share/zsh/site-functions/ m2c You will need to start a new shell for this setup to take effect.

