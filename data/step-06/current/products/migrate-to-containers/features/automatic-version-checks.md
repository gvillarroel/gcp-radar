---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.838Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Automatic version checks"
feature_slug: "automatic-version-checks"
latest_feature_date: "2021-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
keywords:
  - "automatic"
  - "version"
  - "checks"
  - "newer"
  - "available"
  - "probing"
  - "storage"
  - "check"
---

# Automatic version checks

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Checks for a newer available version by probing a Google Cloud Storage version-check resource.

## Extended Definition

Checks for a newer available version by probing a Google Cloud Storage version-check resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Enable the 'probed' property to include system services in the container health checks. systemServices : - enabled : true name : apache2 probed : true - enabled : true name : atd probed : false By default, all service probing is disabled.
- Shown below is an example PersistentVolumeClaim and PersistentVolume definitions in the deployment spec.yaml file: apiVersion : v1 kind : PersistentVolumeClaim spec : accessModes : - ReadWriteOnce resources : requests : storage : 1Mi storageClassName : "" volumeName : nfs-pv apiVersion : v1 kind : PersistentVolume metadata : name : nfs-pv spec : mountOptions : - rw - hard nfs : path : /vol1 server : 10.49.232.26 Customize log data written to Cloud Logging Typically a source VM writes information to one or more log files.
- The script checks for successful conditions, which are defined by the type of probe used, every period.
- For example, shown below is a Service definition in the deployment spec.yaml file: apiVersion : v1 kind : Service metadata : creationTimestamp : null name : backend-server-nginx spec : ports : - port : 80 protocol : HTTP targetPort : 80 selector : app : backend-server status : loadBalancer : {} Customize NFS mounts Migrate to Containers includes NFS mounts in the generated migration plan.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- The script checks for successful conditions, which are defined by the type of probe used, every period.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- The following is a sample configuration of an Ingress: apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : my-tomcat-ingress spec : rules : - host : APP DOMAIN http : paths : - pathType : ImplementationSpecific backend : service : name : my-tomcat-service port : name : my-tomcat-port Note: If the reverse proxy was used to offload SSL traffic, you might want to configure your Ingress using SSL certificates.
- There are two types of probes available to configure, both probes are probe-v1-core defined in probe-v1-core reference and share the same function as the corresponding fields of container-v1-core Liveness probe: Liveness probes are used to know when to restart a container.

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- To retrieve these values, check the running Tomcat server process: ps aux grep catalina To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p tomcat-container \ -o ANALYSIS OUTPUT PATH \ -r catalina-home= PATH TO CATALINA HOME \ -r catalina-base= PATH TO CATALINA BASE \ -r java-version= JAVA VERSION Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO CATALINA HOME : path to the root of the Tomcat installation PATH TO CATALINA BASE : path to the root of the runtime configuration of the Tomcat instance that you're migrating.
- Create a migration plan for a Linux VM container To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p linux-vm-container \ -o ANALYSIS OUTPUT PATH \ [ -r skip size checks= SKIP SIZE CHECKS ] \ [ -r big files threshold mb= SIZE IN MB ] Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory.
- If you've already installed the binaryAppScanner.jar file, check the current version: java -jar binaryAppScanner.jar --version Then, compare your current version to the version shown in the IBM license that appears when you click Migration Toolkit for Application Binaries to download the file.
- By default, this is set to false and Migrate to Containers CLI checks the image layers to ensure that the size doesn't exceed 15 GB.

