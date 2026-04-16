---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.856Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Migration plan discovery for service endpoints and NFS mounts"
feature_slug: "migration-plan-discovery-for-service-endpoints-and-nfs-mounts"
latest_feature_date: "2021-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan"
keywords:
  - "migration"
  - "plan"
  - "discovery"
  - "endpoints"
  - "nfs"
  - "mounts"
  - "generated"
  - "plans"
---

# Migration plan discovery for service endpoints and NFS mounts

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Generated migration plans now include discovered service endpoints and NFS mounts that can be edited before migration.

## Extended Definition

Generated migration plans now include discovered service endpoints and NFS mounts that can be edited before migration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, shown below is a Service definition in the deployment spec.yaml file: apiVersion : v1 kind : Service metadata : creationTimestamp : null name : backend-server-nginx spec : ports : - port : 80 protocol : HTTP targetPort : 80 selector : app : backend-server status : loadBalancer : {} Customize NFS mounts Migrate to Containers includes NFS mounts in the generated migration plan.
- For example, for the following entry in fstab : < file system> <mount point> <type> <options> <dump> <pass> 10.49.232.26:/vol1 /mnt/test nfs rw,hard 0 0 Migrate to Containers generates the following entry in the migration plan: nfsMounts : - mountPoint : /mnt/test exportedDirectory : /vol1 nfsServer : 10.49.232.26 mountOptions : - rw - hard enabled : false To configure Migrate to Containers to process entries in the nfsMounts array, set enabled to true for the mountPoint entry.
- To retrieve the endpoints ports, check the programs that are listening ports: sudo netstat --programs --listening --tcp --udp [--sctp] For each Service endpoint, add the following definition to the migration plan: endpoints : - port : PORT NUMBER protocol : PORT PROTOCOL name : PORT NAME Where: PORT NUMBER specifies the container port number to which requests to the service are routed.
- Each NFS mount in the migration plan includes the server's IP address and local mount path in the form: nfsMounts : - mountPoint : MOUNT POINT exportedDirectory : DIR NAME nfsServer : IP mountOptions : - OPTION 1 - OPTION 2 enabled : false true Where: MOUNT POINT specifies the mount point obtained from fstab .

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.
- Edit the user and group directly in your migration plan: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . userName : USERNAME groupName : GROUP NAME Replace the following: USERNAME : the username that you want to use GROUP NAME : the group name that you want to use Configure SSL When you create a new Tomcat migration, a discovery process scans the server against the different applications that are discovered.
- Set Tomcat environment variables If you would like to set CATALINA OPTS in the Dockerfile that was generated alongside other artifacts after a successful migration, you can first add to the catalinaOpts field in your migration plan.
- After discovery, the following fields are automatically populated in the migration plan: excludeFiles : lists the files and directories to exclude from the migration.

### "Customize migration plan for JBoss servers \_|\_ Migrate to Containers \_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to change the Docker community image, or provide your own docker image, you can modify the fromImage tag in your migration plan using the following format: Parent Wildfly image for the generated container image. fromImage : docker.io/jboss/wildfly:10.1.0.Final The targetImageHome field specifies the path of the JBoss home directory in the target image, and is derived from the fromImage field.
- If includeSensitiveData is set to true the sensitive data is mounted on the container. sensitiveData: includeSensitiveData: false sensitiveDataPaths: - /opt/jboss/wildfly/standalone/configuration/application-roles.properties - /opt/jboss/wildfly/standalone/configuration/application-users.properties - /opt/jboss/wildfly/standalone/configuration/application.keystore - /opt/jboss/wildfly/standalone/configuration/mgmt-groups.properties - /opt/jboss/wildfly/standalone/configuration/mgmt-users.properties To add information as needed, review your migration plan details and guiding comments.
- Edit the migration plan After you have copied the file system and analyzed it, you can find the migration plan in the new directory that is created in the specified output path: ANALYSIS OUTPUT PATH / config.yaml .
- Configure sensitive data migration In order to upload sensitive data to the repository, you need to set the includeSensitiveData field on the migration plan to true .

