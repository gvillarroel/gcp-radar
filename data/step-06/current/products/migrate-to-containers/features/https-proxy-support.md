---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.861Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "HTTPS proxy support"
feature_slug: "https-proxy-support"
latest_feature_date: "2021-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
keywords:
  - "https"
  - "proxy"
  - "migrate"
  - "anthos"
  - "can"
  - "use"
  - "outbound"
  - "internet"
---

# HTTPS proxy support

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Migrate for Anthos can use an HTTPS proxy for outbound internet access.

## Extended Definition

Migrate for Anthos can use an HTTPS proxy for outbound internet access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)

## Supporting Pages

### "Collect guest data from EC2 VMs for offline assessment \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the script: curl -O https://raw.githubusercontent.com/GoogleCloudPlatform/migrate-to-containers/main/scripts/mcdc/mcdc collect aws guest ssh.sh chmod +x mcdc collect aws guest ssh.sh Run the script and save the output to a file: ./mcdc collect aws guest ssh.sh --region REGION Replace REGION with the region of your EC2 VMs.
- Download the script: curl -O https://raw.githubusercontent.com/GoogleCloudPlatform/migrate-to-containers/main/scripts/mcdc/mcdc collect aws guest ssm.sh chmod +x mcdc collect aws guest ssm.sh b.
- The Linux machine must satisfy the following minimum requirements: Linux kernel versions 2.6.23 or later 4 GB RAM and 10 GB disk space AWS CLI installed Network connectivity to EC2 instances (possibly through a proxy) Ensure that the AWS CLI has the following permissions: Can call aws ec2 describe-instances Instance Connect Download the mcdc CLI Connect to the Linux machine: ssh MACHINE IP Replace MACHINE IP with the IP address of your Linux machine.
- Download the latest version of the mcdc CLI and make it executable: curl -O "https://mc-release.storage.googleapis.com/mcdc/ $( curl -s https://mc-release.storage.googleapis.com/mcdc/latest ) /mcdc" chmod +x mcdc Add the mcdc CLI to your shell path: PATH = $PATH : pwd Perform an AWS inventory discovery Run the inventory discovery: ./mcdc discover aws -r REGION Replace REGION with the region of your EC2 VMs.

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- It appears similar to the following: apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP Add another Service object called hello-service right after linux-system : apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP --- Add the hello-service object apiVersion: v1 kind: Service metadata: name: hello-service spec: selector: app: linux-system ports: - protocol: TCP port: 80 targetPort: 80 type: LoadBalancer To save the file and exit the text editor, press Esc and then enter :wq .
- Install Docker and allow the non-root user to run containers: Download the convenience script curl -fsSL https://get.docker.com -o install-docker.sh Install Docker sudo sh install-docker.sh Allow the non-root user to access Docker sudo usermod -aG docker $USER Activate the group changes newgrp docker Install Skaffold: curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \ sudo install skaffold /usr/local/bin/ Download the Migrate to Containers CLI: curl -O "https://m2c-cli-release.storage.googleapis.com/ $( curl -s https://m2c-cli-release.storage.googleapis.com/latest ) /linux/amd64/m2c" chmod +x ./m2c Migrate the source VM A migration typically involves three steps: copying the source VM file system, analyzing the file system to create a migration plan, and generating the migration artifacts.
- On the quickstart-local-vm command tab, install the Google Cloud CLI: Import the Google Cloud public key. curl https://packages.cloud.google.com/apt/doc/apt-key.gpg sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg Add the gcloud CLI distribution URI as a package source echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list Update and install gcloud sudo apt-get update && sudo apt-get install google-cloud-cli Get started gcloud init To complete the gcloud CLI setup, follow the instructions that appear on the quickstart-local-vm command tab: To select the account to use to perform various operations, enter 1 .
- On the quickstart-local-vm command tab, install the gke-gcloud-auth-plugin plugin : sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin Install kubectl : sudo apt-get install kubectl Connect to the cluster quickstart-cluster : gcloud container clusters get-credentials quickstart-cluster \ --zone us-central1-a --project PROJECT ID Open the migration-artifacts folder: cd migration-artifacts To expose the workload to the internet, add a new LoadBalancer service in the deployment spec.yaml file.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Change the value in the server.xml file to use the following: <Engine name="Catalina" defaultHost="localhost" jvmRoute=" ${ HOSTNAME } "> Verify Tomcat proxy configuration If Tomcat is configured to run behind a reverse proxy, or using several proxy configuration settings in the Connector section of server.xml , you must verify that the same proxy configurations are still applicable once migrated to run in Kubernetes.
- To run a functional containerized Tomcat application, choose one of the following configuration changes to the reverse proxy configuration: Disable proxy configuration: If the migrated application no longer runs behind a reverse proxy, you can disable proxy configuration by removing proxyName and proxyPort from the connector configuration.
- Configure Ingress to replace the reverse proxy: If no custom or sophisticated logic has been implemented for your reverse proxy, you can configure an Ingress resource to expose your migrated Tomcat application.
- Migrate the proxy: Migrate the proxy VM and retain all the existing Tomcat configurations.

