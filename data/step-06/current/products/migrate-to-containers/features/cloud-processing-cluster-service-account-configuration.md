---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.870Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Cloud processing cluster service account configuration"
feature_slug: "cloud-processing-cluster-service-account-configuration"
latest_feature_date: "2020-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
keywords:
  - "processing"
  - "cluster"
  - "account"
  - "configuration"
  - "uses"
  - "instead"
  - "platform"
  - "scope"
---

# Cloud processing cluster service account configuration

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Uses a service account instead of the cloud-platform scope when creating a processing cluster for Linux workload migrations.

## Extended Definition

Uses a service account instead of the cloud-platform scope when creating a processing cluster for Linux workload migrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)

## Supporting Pages

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Google Cloud console Create a VM: gcloud compute instances create quickstart-source-vm \ --zone = us-central1-a --machine-type = e2-medium \ --subnet = default --scopes = "cloud-platform" \ --tags = http-server,https-server --image = ubuntu-2204-jammy-v20240208 \ --image-project = ubuntu-os-cloud --boot-disk-size = 10GB --boot-disk-type = pd-standard \ --boot-disk-device-name = quickstart-source-vm Allow a few minutes for the VM creation to complete.
- Go to Google Cloud console Create a VM: gcloud compute instances create quickstart-local-vm \ --zone = us-central1-a --machine-type = e2-medium \ --subnet = default --scopes = "cloud-platform" \ --tags = http-server,https-server --image = ubuntu-2204-jammy-v20240208 \ --image-project = ubuntu-os-cloud --boot-disk-size = 50GB --boot-disk-type = pd-standard \ --boot-disk-device-name = quickstart-local-vm Allow a few minutes for the VM creation to complete.
- It appears similar to the following: apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP Add another Service object called hello-service right after linux-system : apiVersion: v1 kind: Service metadata: labels: anthos-migrate.cloud.google.com/type: linux-container migrate-for-anthos-optimization: "true" migrate-for-anthos-version: m2c-cli-1.2.2 name: linux-system spec: clusterIP: None selector: app: linux-system type: ClusterIP --- Add the hello-service object apiVersion: v1 kind: Service metadata: name: hello-service spec: selector: app: linux-system ports: - protocol: TCP port: 80 targetPort: 80 type: LoadBalancer To save the file and exit the text editor, press Esc and then enter :wq .
- On the quickstart-local-vm command tab, install the Google Cloud CLI: Import the Google Cloud public key. curl https://packages.cloud.google.com/apt/doc/apt-key.gpg sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg Add the gcloud CLI distribution URI as a package source echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list Update and install gcloud sudo apt-get update && sudo apt-get install google-cloud-cli Get started gcloud init To complete the gcloud CLI setup, follow the instructions that appear on the quickstart-local-vm command tab: To select the account to use to perform various operations, enter 1 .

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- The following is a sample configuration for a DNS provider: < Cluster className = "org.apache.catalina.ha.tcp.SimpleTcpCluster" > < Channel className = "org.apache.catalina.tribes.group.GroupChannel" > < Membership className = "org.apache.catalina.tribes.membership.cloud.CloudMembershipService" membershipProviderClassName = "org.apache.catalina.tribes.membership.cloud.DNSMembershipProvider" / > < / Channel > < / Cluster > jvmRoute: When your load balancer relies on a jvmRoute value, the value should be changed from static to using the POD name.
- Kubernetes provider: The following is a sample configuration for a Kubernetes provider: < Cluster className = "org.apache.catalina.ha.tcp.SimpleTcpCluster" > < Channel className = "org.apache.catalina.tribes.group.GroupChannel" > < Membership className = "org.apache.catalina.tribes.membership.cloud.CloudMembershipService" membershipProviderClassName = "org.apache.catalina.tribes.membership.cloud.KubernetesMembershipProvider" / > < / Channel > < / Cluster > DNS provider: Use the DNSMembershipProvider to use the DNS APIs for peer discovery.
- Verify Tomcat clustering configuration Tomcat clustering is used to replicate session information across all Tomcat nodes, which lets you to call any of the backend application servers and not lose client session information.
- If your source environment is using an unsupported clustering configuration, modify the server.xml file to either disable the configuration, or use a supported configuration.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- The discovery process searches for general configurations in the source VM, and uses them to populate this section.
- The default configuration uses exec command for the liveness and readiness probes.
- If you want to use Cloud Load Balancing, Ingress, or Cloud Service Mesh to handle the SSL configuration , then you need to set protocol to http : sites : site : - applications : - path : / virtualdirectories : - path : / physicalpath : '%SystemDrive%\inetpub\wwwroot' bindings : - port : 8080 protocol : http name : Default Web Site Note: Only HTTP and HTTPS protocols are allowed in the protocol setting.
- To add a connection string to the global scope (making it accessible to all sites), edit the connection strings directly following globalIis : globalIis : enablegmsa : auto connectionStrings : connectionstring : - name : connectionname3 providername : System.Data.SqlClient connectionstring : Database=connectedDB3;Password=Welcome3;User=admin; applicationhost : ...

