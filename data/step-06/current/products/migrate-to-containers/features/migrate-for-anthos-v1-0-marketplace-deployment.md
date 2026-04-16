---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.889Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Migrate for Anthos v1.0 Marketplace deployment"
feature_slug: "migrate-for-anthos-v1-0-marketplace-deployment"
latest_feature_date: "2020-03-30"
deprecation_date: "2020-03-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview"
  - "https://docs.cloud.google.com/migrate/containers/docs/convert-runtime"
keywords:
  - "migrate"
  - "anthos"
  - "v1"
  - "marketplace"
  - "deployment"
  - "was"
  - "removed"
  - "can"
---

# Migrate for Anthos v1.0 Marketplace deployment

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The v1.0 Marketplace deployment was removed, and v1.3 can be installed in v1.0 compatibility mode where needed; deprecated on 2020-03-30.

## Extended Definition

The v1.0 Marketplace deployment was removed, and v1.3 can be installed in v1.0 compatibility mode where needed; deprecated on 2020-03-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)

## Supporting Pages

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- It appears similar to the following: apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP Add another Service object called hello-service right after linux-system : apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP --- Add the hello-service object apiVersion: v1 kind: Service metadata: name: hello-service spec: selector: app: linux-system ports: - protocol: TCP port: 80 targetPort: 80 type: LoadBalancer To save the file and exit the text editor, press Esc and then enter :wq .
- Install Docker and allow the non-root user to run containers: Download the convenience script curl -fsSL https://get.docker.com -o install-docker.sh Install Docker sudo sh install-docker.sh Allow the non-root user to access Docker sudo usermod -aG docker $USER Activate the group changes newgrp docker Install Skaffold: curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \ sudo install skaffold /usr/local/bin/ Download the Migrate to Containers CLI: curl -O "https://m2c-cli-release.storage.googleapis.com/ $( curl -s https://m2c-cli-release.storage.googleapis.com/latest ) /linux/amd64/m2c" chmod +x ./m2c Migrate the source VM A migration typically involves three steps: copying the source VM file system, analyzing the file system to create a migration plan, and generating the migration artifacts.
- On the quickstart-local-vm command tab, install the gke-gcloud-auth-plugin plugin : sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin Install kubectl : sudo apt-get install kubectl Connect to the cluster quickstart-cluster : gcloud container clusters get-credentials quickstart-cluster \ --zone us-central1-a --project PROJECT ID Open the migration-artifacts folder: cd migration-artifacts To expose the workload to the internet, add a new LoadBalancer service in the deployment spec.yaml file.
- On the quickstart-local-vm command tab, get a list of the default Migrate to Containers filters in a file called filters.txt : ./m2c copy default-filters > filters.txt To edit the default filters, do the following: Open the filters.txt file in a text editor: vi filters.txt To make changes in the file, press i .

### "Upgrade container workloads for enhanced runtime \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- ADD blocklist.yaml /.m4a/blocklist.yaml Insert the ADD commands to copy the logs.yaml file to the container image : ADD logs.yaml /code/config/logs/logsArtifact.yaml ADD logs.yaml /code/config/logs/logs.yaml Insert the RUN command for servicemanager generate config: RUN /servicemanager generate config build-all -o /.m4a/ Migrate to Containers image includes entrypoint ENTRYPOINT [ "/.v2k.go" ] Open the deployment spec.yaml file in an editor.
- ADD blocklist.yaml /.m4a/blocklist.yaml Insert the ADD commands to copy the logs.yaml file to the container image : ADD logs.yaml /code/config/logs/logsArtifact.yaml ADD logs.yaml /code/config/logs/logs.yaml Insert the RUN command for servicemanager generate config: RUN /servicemanager generate config build-all -o /.m4a/ Migrate to Containers image includes entrypoint ENTRYPOINT [ "/.v2k.go" ] Open the deployment spec.yaml file in an editor.
- Set the product version to 1.15.0: FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...
- Set the product version to 1.15.0: FROM anthos-migrate.gcr.io/v2k-run-embedded: v1.15.0 as migrate-for-anthos-runtime ...

### New enhanced runtime \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview](https://docs.cloud.google.com/migrate/containers/docs/autopilot-overview)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- If you have enabled workload identity on your deployment cluster, ensure that you configure your deployment environment to support Migrate to Containers and GKE.
- Readiness probes When using the current runtime, Migrate to Containers adds a readiness probe in the deployment spec.yaml file.
- Workload limitations The simplified Linux service manager works best with the following types of workloads: Image Operating system Services Compute Engine Ubuntu 12.04 Ubuntu 12.04 apache2 Compute Engine Ubuntu 14.04 Ubuntu 14.04 redis, mysql, apache2 Compute Engine Ubuntu 18.04 Ubuntu 18.04 apache2, mysql, redis-server, tomcat RHEL SAP 7.4 Red Hat httpd Bitnami Ubuntu bitnami Compute Engine Memcached image Debian 10.9 bitnami Compute Engine Marketplace wordpress Debian 9.13 apache2, mysql, php Compute Engine Marketplace tomcat Debian 9.13 tomcat8 Compute Engine Marketplace jenkins Debian 10.9 apache2, jenkins Compute Engine Marketplace moodle Debian 9.13 apache2, mysql, php7.4 fpm, phpsessionclean Compute Engine Marketplace Odoo Debian 9.13 odoo, nginx Compute Engine Marketplace Opencart Debian 9.13 apache2, mysql, php7.0 fpm, supervisor, mariadb Compute Engine Marketplace Erpnext Debian 10.9 nginx, redis-server, supervisor, mariadb Compute Engine Marketplace wildfly Debian 10.10 wildfly, cron systemd limitations If you're using systemd as your init system, be aware of the following limitations: systemd service types of simple , exec , and notify are treated as exec service.
- This simplified Linux service manager adds functionality that lets you deploy your migrated container workloads to: GKE Autopilot clusters Cloud Run The simplified Linux service manager also resolves compatibility issues with Kubernetes plugins.

