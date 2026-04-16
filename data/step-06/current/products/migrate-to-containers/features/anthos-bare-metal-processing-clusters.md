---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.829Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Anthos Bare Metal processing clusters"
feature_slug: "anthos-bare-metal-processing-clusters"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot"
  - "https://docs.cloud.google.com/migrate/containers/docs/convert-runtime"
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
keywords:
  - "anthos"
  - "bare"
  - "metal"
  - "processing"
  - "clusters"
  - "can"
  - "used"
  - "run"
---

# Anthos Bare Metal processing clusters

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on Bare Metal can be used as processing clusters to run container migrations on-premises.

## Extended Definition

Anthos clusters on Bare Metal can be used as processing clusters to run container migrations on-premises.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot](https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot)
- [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)

## Supporting Pages

### "Migrate and deploy applications to GKE Autopilot clusters \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot](https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- The following alert is provided alongside the unsupported service: Service is not supported by v2k service manager, therefore legacy runtime will be used instead of v2k service manager, and migrated workload would not fit running on Autopilot clusters of Cloudrun.
- The only changes that you have to make to the Quickstart process are: In Step 3 of Migrating the VM , where you review the migration plan, set v2kServiceManager to true in the migration plan and then save the plan: v2kServiceManager : true In the Deploying the migrated workload section, create and connect to a GKE Autopilot cluster before you deploy the container: Create a GKE Autopilot cluster: gcloud container clusters create-auto " CLUSTER NAME " --project " PROJECT NAME " --region " REGION " --release-channel "regular" --subnetwork "projects/ PROJECT NAME /regions/ us-central1 /subnetworks/default" Connect to the cluster: gcloud container clusters get-credentials CLUSTER NAME --zone REGION --project PROJECT NAME Deploy the container as described in the Deploying the migrated workload section.
- Migrate and deploy applications to GKE Autopilot clusters To deploy your migrated container workloads to GKE Autopilot clusters, you use the same procedure to migrate your workloads as you use for the existing architecture.

### "Upgrade container workloads for enhanced runtime \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Note: loading the nodes and pulling the image might take a few minutes. kubectl get pods Post conversion tasks After you convert an existing migration to use the simplified Linux service manager, you might want to modify it to: Update the services used by the migrated workload.
- Set the product version to 1.15.0: FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...
- Set the product version to 1.15.0: FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...
- FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- It appears similar to the following: apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP Add another Service object called hello-service right after linux-system : apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP --- Add the hello-service object apiVersion: v1 kind: Service metadata: name: hello-service spec: selector: app: linux-system ports: - protocol: TCP port: 80 targetPort: 80 type: LoadBalancer To save the file and exit the text editor, press Esc and then enter :wq .
- On the quickstart-local-vm command tab, install the gke-gcloud-auth-plugin plugin : sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin Install kubectl : sudo apt-get install kubectl Connect to the cluster quickstart-cluster : gcloud container clusters get-credentials quickstart-cluster \ --zone us-central1-a --project PROJECT ID Open the migration-artifacts folder: cd migration-artifacts To expose the workload to the internet, add a new LoadBalancer service in the deployment spec.yaml file.
- In Cloud Shell, create a new Kubernetes cluster: gcloud container clusters create quickstart-cluster \ --zone = us-central1-a --machine-type = e2-medium \ --image-type = ubuntu containerd --num-nodes = 1 \ --logging = SYSTEM,WORKLOAD,API SERVER,SCHEDULER,CONTROLLER MANAGER Allow a few minutes for the cluster creation to complete.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.

