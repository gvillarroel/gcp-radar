---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.789Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "ExcludeFiles migration plan property"
feature_slug: "excludefiles-migration-plan-property"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
keywords:
  - "excludefiles"
  - "migration"
  - "plan"
  - "property"
  - "lets"
  - "users"
  - "exclude"
  - "specific"
---

# ExcludeFiles migration plan property

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The ExcludeFiles property lets users exclude specific files and directories from the container image.

## Extended Definition

The ExcludeFiles property lets users exclude specific files and directories from the container image.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After discovery, the following fields are automatically populated in the migration plan: excludeFiles : lists the files and directories to exclude from the migration.
- If includeSensitiveData is set to true the sensitive data will be mounted on the container. includeSensitiveData : true tomcatServers : - name : latest catalinaBase : /opt/tomcat/latest catalinaHome : /opt/tomcat/latest Exclude files from migration. excludeFiles : - /usr/local/ssl/server.pem - /usr/home/tomcat/keystore - /usr/home/tomcat/truststore images : - name : tomcat-latest ...
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, for the following entry in fstab : < file system> <mount point> <type> <options> <dump> <pass> 10.49.232.26:/vol1 /mnt/test nfs rw,hard 0 0 Migrate to Containers generates the following entry in the migration plan: nfsMounts : - mountPoint : /mnt/test exportedDirectory : /vol1 nfsServer : 10.49.232.26 mountOptions : - rw - hard enabled : false To configure Migrate to Containers to process entries in the nfsMounts array, set enabled to true for the mountPoint entry.
- Migrate to Containers then writes information about those detected files to the logPaths area of the migration plan: deployment : ... logPaths : - appName : APP NAME globs : - LOG PATH For example: deployment : ... logPaths : - appName : tomcat globs : - /var/log/tomcat /catalina.out When you generate the migration artifacts, Migrate to Containers generates the logs.yaml file from the migration plan.
- For example, shown below is a Service definition in the deployment spec.yaml file: apiVersion : v1 kind : Service metadata : creationTimestamp : null name : backend-server-nginx spec : ports : - port : 80 protocol : HTTP targetPort : 80 selector : app : backend-server status : loadBalancer : {} Customize NFS mounts Migrate to Containers includes NFS mounts in the generated migration plan.
- To retrieve the endpoints ports, check the programs that are listening ports: sudo netstat --programs --listening --tcp --udp [--sctp] For each Service endpoint, add the following definition to the migration plan: endpoints : - port : PORT NUMBER protocol : PORT PROTOCOL name : PORT NAME Where: PORT NUMBER specifies the container port number to which requests to the service are routed.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- To add a connection string to a site, edit the site definition in the migration plan to set the connectionstrings property: sites : site : Add the site connection strings here. connectionstrings : - name : connectionname1 providername : System.Data.SqlClient connectionstring : Database=connectedDB1;Password=Welcome1;User=admin; - name : connectionname2 providername : System.Data.OleDb connectionstring : Database=connectedDB2;Password=Welcome2;User=admin; - applications : - path : / virtualdirectories : ...
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.
- You can modify the list of runtimes in the migration plan by adding or removing members of msvcRuntimes : The complete list of possible values are: (The 2015 runtime also includes support for 2017, 2019, and 2022) msvcRuntimes : - MSVC2012 x64 - MSVC2013 x64 - MSVC2015 x64 - MSVC2012 x86 - MSVC2013 x86 - MSVC2015 x86 The pathEnvVarAdditionalEntries section Windows IIS applications might have non-default PATH environment variable entries, which are automatically detected on the source VM and included in the migration plan.
- The following is an example migration plan containing enablegmsa : migrationPlan : applications : iis : Allowed values include: auto (default), all enablegmsa : auto all To learn more, see Configure your app to use a gMSA .

