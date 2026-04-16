---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.828Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Tomcat server version override"
feature_slug: "tomcat-server-version-override"
latest_feature_date: "2022-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan"
keywords:
  - "tomcat"
  - "server"
  - "version"
  - "override"
  - "users"
  - "can"
  - "manually"
  - "provide"
---

# Tomcat server version override

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Users can manually provide the Tomcat server version in the migration plan when automatic discovery does not find it.

## Extended Definition

Users can manually provide the Tomcat server version in the migration plan when automatic discovery does not find it.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to change the Docker community image, or provide your own Docker image, you can modify the baseImage.name in your migration plan using the following format: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . baseImage : name : BASE IMAGE NAME Replace BASE IMAGE NAME with the Docker image that you want to use as the base of the container image.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- Modify env variables on the script and add definitions to the migrated tomcat server, if needed (less recommended than adding env variables directly to CATALINA OPTS) by uncomment the line below #ADD --chown=root:root setenv.sh /usr/local/tomcat/bin/setenv.sh Add JVM environment variables for the tomcat server ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -Xss10M" You might also set Tomcat environment variables using the setenv.sh script, which is located in the /bin folder on your Tomcat server.
- Edit the user and group directly in your migration plan: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . userName : USERNAME groupName : GROUP NAME Replace the following: USERNAME : the username that you want to use GROUP NAME : the group name that you want to use Configure SSL When you create a new Tomcat migration, a discovery process scans the server against the different applications that are discovered.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The next sections discuss this structure, explain what each part is, and how to modify it. globalSettings : globalIis : enablegmsa : string apppools : - enable32bitapponwin64 : bool identitytype : string managedruntimeversion : string name : string connectionStrings : add : - connectionstring : string name : string providername : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string image : extraFeatures : - string target : baseVersion : string requirements : - string warnings : - string msvcRuntimes : - string pathEnvVarAdditionalEntries : - string images : - name : string probes : enabled : bool livenessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] readinessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] useractions : files : - source : string target : string registry : currentcontrolset : - path : string software : - path : string workloads : sites : site : - applications : - applicationpool : string path : string virtualdirectories : - path : string physicalpath : string bindings : - port : int protocol : string sslflags : int connectionstrings : - connectionstring : string name : string providername : string name : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string serverautostart : bool version : string The globalSettings section The globalSettings section describes basic requirements for pods running IIS sites from this VM.
- To run additional services in the migrated container, add entries to the windowsServices section, and copy the necessary binaries in the useractions section . version: v1 globalSettings: target: … globalIIS: … images: - name: migrated-image-zgwb2 workloads: sites: site: - applications: ... bindings: - port: 80 protocol: http name: Default Web Site … windowsServices: - MyService useractions: files: - source: C:\Program Files\MyService target: C:\Program Files\MyService registry: currentcontrolset: - key: services\MyService The useractions section The useractions section specifies additional files and registry keys that you might want to migrate.
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.
- To add a connection string to a site, edit the site definition in the migration plan to set the connectionstrings property: sites : site : Add the site connection strings here. connectionstrings : - name : connectionname1 providername : System.Data.SqlClient connectionstring : Database=connectedDB1;Password=Welcome1;User=admin; - name : connectionname2 providername : System.Data.OleDb connectionstring : Database=connectedDB2;Password=Welcome2;User=admin; - applications : - path : / virtualdirectories : ...

### "Customize migration plan for JBoss servers \_|\_ Migrate to Containers \_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Edit this to change the artifacts naming. serverName: jboss-server JBoss home directory. home: /opt/jboss/wildfly Parent Wildfly image for the generated container image. fromImage: docker.io/jboss/wildfly:10.1.0.Final JBoss home directory in the target image. targetImageHome: /opt/wildfly Configuration file path from source VM. configurationFile: /opt/jboss/wildfly/standalone/configuration/standalone.xml Ports list to expose on the generated container image. ports: - name: management-http port: 9990 - name: management-https port: 9993 - name: ajp port: 8009 - name: http port: 8080 - name: https port: 8433 - name: txn-recovery-environment port: 4712 - name: txn-status-manager port: 4713 List of deployments files to copy. deployments: directory: /opt/jboss/wildfly/standalone/deployments applications: - test.war List of modules to copy in rsync filter format.
- If includeSensitiveData is set to true the sensitive data is mounted on the container. sensitiveData: includeSensitiveData: false sensitiveDataPaths: - /opt/jboss/wildfly/standalone/configuration/application-roles.properties - /opt/jboss/wildfly/standalone/configuration/application-users.properties - /opt/jboss/wildfly/standalone/configuration/application.keystore - /opt/jboss/wildfly/standalone/configuration/mgmt-groups.properties - /opt/jboss/wildfly/standalone/configuration/mgmt-users.properties To add information as needed, review your migration plan details and guiding comments.
- If you want to change the Docker community image, or provide your own docker image, you can modify the fromImage tag in your migration plan using the following format: Parent Wildfly image for the generated container image. fromImage : docker.io/jboss/wildfly:10.1.0.Final The targetImageHome field specifies the path of the JBoss home directory in the target image, and is derived from the fromImage field.
- Note: files under '/system/layers/base/' are JBoss/Wildfly binaries and should be copied only if they have been modified. modules: - '- system/layers/base' External paths required for running the JBoss server or apps. additionalFiles: [] Sensitive data which is filtered out of the container image.

