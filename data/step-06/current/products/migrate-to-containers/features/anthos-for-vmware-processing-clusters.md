---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.795Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Anthos for VMware processing clusters"
feature_slug: "anthos-for-vmware-processing-clusters"
latest_feature_date: "2023-03-20"
deprecation_date: "2023-03-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/resources"
  - "https://docs.cloud.google.com/migrate/containers/docs/convert-runtime"
keywords:
  - "anthos"
  - "vmware"
  - "processing"
  - "clusters"
  - "used"
  - "containerizing"
  - "sources"
  - "deprecated"
---

# Anthos for VMware processing clusters

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Processing clusters on Anthos for VMware used for containerizing VMware sources are deprecated; deprecated on 2023-03-20.

## Extended Definition

Processing clusters on Anthos for VMware used for containerizing VMware sources are deprecated; deprecated on 2023-03-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/resources](https://docs.cloud.google.com/migrate/containers/docs/resources)
- [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)

## Supporting Pages

### Resources \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/resources](https://docs.cloud.google.com/migrate/containers/docs/resources)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pricing and quotas Pricing Migrate to Containers pricing is based on the Google Cloud resources used.
- Release notes Migrate to Containers release notes Production updates to Migrate to Containers, including new or updated features, bug fixes, known issues, and deprecated functionality.
- Migrate to Containers CLI release notes Production updates to Migrate to Containers CLI, including new or updated features, bug fixes, known issues, and deprecated functionality.
- Home Documentation Migration Migrate to Containers Resources Send feedback Resources Stay organized with collections Save and categorize content based on your preferences.

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- It appears similar to the following: apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP Add another Service object called hello-service right after linux-system : apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP --- Add the hello-service object apiVersion: v1 kind: Service metadata: name: hello-service spec: selector: app: linux-system ports: - protocol: TCP port: 80 targetPort: 80 type: LoadBalancer To save the file and exit the text editor, press Esc and then enter :wq .
- On the quickstart-local-vm command tab, install the Google Cloud CLI: Import the Google Cloud public key. curl https://packages.cloud.google.com/apt/doc/apt-key.gpg sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg Add the gcloud CLI distribution URI as a package source echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list Update and install gcloud sudo apt-get update && sudo apt-get install google-cloud-cli Get started gcloud init To complete the gcloud CLI setup, follow the instructions that appear on the quickstart-local-vm command tab: To select the account to use to perform various operations, enter 1 .
- On the quickstart-local-vm command tab, install the gke-gcloud-auth-plugin plugin : sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin Install kubectl : sudo apt-get install kubectl Connect to the cluster quickstart-cluster : gcloud container clusters get-credentials quickstart-cluster \ --zone us-central1-a --project PROJECT ID Open the migration-artifacts folder: cd migration-artifacts To expose the workload to the internet, add a new LoadBalancer service in the deployment spec.yaml file.

### "Upgrade container workloads for enhanced runtime \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- For example: vi deployment spec.yaml Locate the following three sections in the file and delete the indicated lines: apiVersion : apps/v1 kind : StatefulSet ... spec : containers : - image : gcr.io/ PROJECT NAME / IMAGE NAME : LABEL name : IMAGE NAME Delete the following lines: readinessProbe : exec : command : - /code/ready.sh resources : {} securityContext : privileged : true Stop the delete here. volumeMounts : Delete the following lines: - mountPath : /sys/fs/cgroup name : cgroups Stop the delete here. - mountPath : /opt/suitecrm-7.10.5-0/mysql/data name : data-pvc-0-1b12-d0af-48b3-9f5e-6c25fa5 subPath : opt/suitecrm-7.10.5-0/mysql/data volumes : Delete the following lines: - hostPath : path : /sys/fs/cgroup type : Directory name : cgroups Stop the delete here. - name : data-pvc-2-d0af-48b3-9f5e09c25fa5 persistentVolumeClaim : claimName : data-pvc-0-1a2-d0af-48b3-9f5e-605fa5 Notice that you only remove the volumeMounts and volumes definitions for cgroups and leave the remaining definitions.
- For example: vi deployment spec.yaml Locate the following section in the file and delete the indicated lines: apiVersion : apps/v1 kind : Deployment metadata : creationTimestamp : null name : IMAGE NAME … spec : containers : - image : gcr.io/ PROJECT NAME / IMAGE NAME : LABEL name : IMAGE NAME Delete the following lines: readinessProbe : exec : command : - /code/ready.sh resources : {} securityContext : privileged : true volumeMounts : - mountPath : /sys/fs/cgroup name : cgroups - mountPath : /code/config/logs name : logs-config volumes : - hostPath : path : /sys/fs/cgroup type : Directory name : cgroups - configMap : name : suitecrm-crddefault-logs name : logs-config Stop the delete here.
- Note: loading the nodes and pulling the image might take a few minutes. kubectl get pods Post conversion tasks After you convert an existing migration to use the simplified Linux service manager, you might want to modify it to: Update the services used by the migrated workload.
- Set the product version to 1.15.0: FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...

