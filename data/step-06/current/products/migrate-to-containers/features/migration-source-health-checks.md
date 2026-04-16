---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.811Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Migration source health checks"
feature_slug: "migration-source-health-checks"
latest_feature_date: "2022-09-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
keywords:
  - "migration"
  - "source"
  - "health"
  - "checks"
  - "periodically"
  - "status"
  - "detect"
  - "availability"
---

# Migration source health checks

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The service periodically checks migration source status to detect availability and health problems such as missing service accounts or insufficient permissions.

## Extended Definition

The service periodically checks migration source status to detect availability and health problems such as missing service accounts or insufficient permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set Linux v2kServiceManager health probes You can monitor the downtime and ready status of your managed containers by specifying probes in your Tomcat web server's migration plan.
- Migrate to Containers then writes information about those detected files to the logPaths area of the migration plan: deployment : ... logPaths : - appName : APP NAME globs : - LOG PATH For example: deployment : ... logPaths : - appName : tomcat globs : - /var/log/tomcat /catalina.out When you generate the migration artifacts, Migrate to Containers generates the logs.yaml file from the migration plan.
- For example, shown below is a Service definition in the deployment spec.yaml file: apiVersion : v1 kind : Service metadata : creationTimestamp : null name : backend-server-nginx spec : ports : - port : 80 protocol : HTTP targetPort : 80 selector : app : backend-server status : loadBalancer : {} Customize NFS mounts Migrate to Containers includes NFS mounts in the generated migration plan.
- You can also exclude or move the detected sparse files in the same manner. global : Files and directories to exclude from the migration, in rsync format. filters : - "- .swp" - "- /etc/fstab" - "- /boot/" - "- /tmp/ " - "- /var/log/ .log " - "- /var/log/ / .log " - "- /var/cache/ " The data folders below are too large to be included in the docker image.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set Tomcat health probes You can monitor the downtime and ready status of your managed containers by specifying probes in your Tomcat web server migration plan.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- Edit the memory limits directly in your migration plan using the following format: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . resources : memory : limit : 2048M requests : 1280M The recommended value for limit is 200% of Xmx , which is the maximum Java heap size.
- The original Tomcat and Java versions detected on the source VM are contained in discovery-report.yaml that is generated by the initial discovery.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can modify the list of runtimes in the migration plan by adding or removing members of msvcRuntimes : The complete list of possible values are: (The 2015 runtime also includes support for 2017, 2019, and 2022) msvcRuntimes : - MSVC2012 x64 - MSVC2013 x64 - MSVC2015 x64 - MSVC2012 x86 - MSVC2013 x86 - MSVC2015 x86 The pathEnvVarAdditionalEntries section Windows IIS applications might have non-default PATH environment variable entries, which are automatically detected on the source VM and included in the migration plan.
- Migrate to Containers automatically detects the runtimes installed on the source VM and included them in the migration plan.
- Some connection strings might not be detected and should be added by editing the migration plan as shown preceding. (For example, if the connection strings are in an encrypted section of the applicationhost.config file).
- Edit the connection strings sections Migrate to Containers automatically copies connection strings detected in the migrated VM to the migration plan.

