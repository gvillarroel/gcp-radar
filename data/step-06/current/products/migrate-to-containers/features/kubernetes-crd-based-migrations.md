---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.887Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Kubernetes CRD-based migrations"
feature_slug: "kubernetes-crd-based-migrations"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration"
keywords:
  - "kubernetes"
  - "crd"
  - "based"
  - "migrations"
  - "defined"
  - "operated"
  - "custom"
  - "resource"
---

# Kubernetes CRD-based migrations

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Migrations are defined and operated using a Kubernetes custom resource definition.

## Extended Definition

Migrations are defined and operated using a Kubernetes custom resource definition.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)

## Supporting Pages

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- Configure Ingress to replace the reverse proxy: If no custom or sophisticated logic has been implemented for your reverse proxy, you can configure an Ingress resource to expose your migrated Tomcat application.
- Kubernetes provider: The following is a sample configuration for a Kubernetes provider: < Cluster className = "org.apache.catalina.ha.tcp.SimpleTcpCluster" > < Channel className = "org.apache.catalina.tribes.group.GroupChannel" > < Membership className = "org.apache.catalina.tribes.membership.cloud.CloudMembershipService" membershipProviderClassName = "org.apache.catalina.tribes.membership.cloud.KubernetesMembershipProvider" / > < / Channel > < / Cluster > DNS provider: Use the DNSMembershipProvider to use the DNS APIs for peer discovery.
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Shown below is an example PersistentVolumeClaim and PersistentVolume definitions in the deployment spec.yaml file: apiVersion : v1 kind : PersistentVolumeClaim spec : accessModes : - ReadWriteOnce resources : requests : storage : 1Mi storageClassName : "" volumeName : nfs-pv apiVersion : v1 kind : PersistentVolume metadata : name : nfs-pv spec : mountOptions : - rw - hard nfs : path : /vol1 server : 10.49.232.26 Customize log data written to Cloud Logging Typically a source VM writes information to one or more log files.
- Customize service endpoints The migration plan includes the endpoints array that defines the ports and protocols used to create the Kubernetes Services provided by the migrated workload.
- For example, shown below is a Service definition in the deployment spec.yaml file: apiVersion : v1 kind : Service metadata : creationTimestamp : null name : backend-server-nginx spec : ports : - port : 80 protocol : HTTP targetPort : 80 selector : app : backend-server status : loadBalancer : {} Customize NFS mounts Migrate to Containers includes NFS mounts in the generated migration plan.
- You can change this value if you prefer to use a different name. image: Review and set the name for runnable container image. name: linux-system Customize the services list By default, Migrate to Containers disables unneeded services on a VM when you migrate it to a container.

### "Customize migration plan for WebSphere workloads \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To migrate these files as is, you can disable this feature. applications: - path: app.war resources: keystores: - key.p12 targetContainer: Do not migrate keystores to Kubernetes secrets: enableSecrets: false Customize Kubernetes ports To control which ports are exposed by Kubernetes Pods and Services, update the ports field. applications: - path: app.war targetContainer: ports: Exclude http-tcp-9080: - name: http-tcp-9080 port: 9080 protocol: TCP Include https-tcp-9443: - name: https-tcp-9443 port: 9443 protocol: TCP What's next Learn how to execute the migration .
- Defaults to true. enableSecrets : true Exclude applications To exclude applications from the migration, remove them from the applications list. applications: Exclude app1.war: - path: app1.war ... - path: app2.war Control application files To control which application files are included or excluded from the migration, update the configurations and resources fields. applications: - path: app.war resources: keystores: Exclude key1.p12: - key1.p12 Include key2.p12: - key2.p12 additionalResources: Exclude resource1.xml: - resource1.xml Include resource2.xml: - resource2.xml Customize the target Java runtime To customize the target Java runtime for the application, update the targetJavaRuntime field. applications : - path : app . war targetJavaRuntime : se : SE ee : EE vendor : VENDOR Replace the following: SE : the Java SE version.
- Customize the target container To customize the target container to be used for the application, update the targetContainer field. applications: - path: app.war targetContainer: baseImage: BASE IMAGE home: HOME server: SERVER user: USER group: GROUP Customize Kubernetes secrets By default, files listed under the keystores field are migrated to Kubernetes secrets.
- 0 361 jre : Java ( TM ) SE Runtime Environment jvm : IBM J9 VM List of hosted applications and how to migrate them to containers. applications : - path : / opt / ibm / wlp / usr / servers / defaultServer / apps / app . war Application archives to be migrated into the target container. archives : - / opt / ibm / wlp / usr / servers / defaultServer / apps / app . war Application configuration files to be migrated into the target container. configurations : serverXML : / opt / ibm / wlp / usr / servers / defaultServer / server . xml serverEnv : - / opt / ibm / wlp / usr / servers / defaultServer / server . env bootstrapProperties : - / opt / ibm / wlp / usr / servers / defaultServer / bootstrap . properties variableProperties : - / opt / ibm / wlp / usr / servers / defaultServer / variables / variable . properties jvmOptions : - / opt / ibm / wlp / usr / servers / defaultServer / jvm . options Application resource files to be migrated into the target container. resources : locations : - / opt / ibm / wlp / usr / servers / defaultServer / resources / ports . xml libraries : - / opt / ibm / wlp / usr / servers / defaultServer / resources / postgresql . jar keystores : - / opt / ibm / wlp / output / defaultServer / resources / security / key . p12 sharedResources : - / opt / ibm / wlp / usr / shared / resources / jdbc . jar additionalResources : - / opt / ibm / wlp / output / defaultServer / resources / mongodb . jar javaRuntime : se : SE8 ee : EE7 vendor : IBM Corporation targetJavaRuntime : se : SE8 ee : EE7 vendor : IBM Corporation targetApplicationServer : profile : Liberty version : 23.0 .

