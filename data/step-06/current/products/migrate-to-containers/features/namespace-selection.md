---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.882Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Namespace selection"
feature_slug: "namespace-selection"
latest_feature_date: "2020-07-28"
deprecation_date: "2020-07-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration"
keywords:
  - "namespace"
  - "selection"
  - "option"
  - "choose"
  - "installation"
  - "migration"
  - "was"
  - "removed"
---

# Namespace selection

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The option to choose the installation and migration namespace was removed; deprecated on 2020-07-28.

## Extended Definition

The option to choose the installation and migration namespace was removed; deprecated on 2020-07-28.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)

## Supporting Pages

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- To retrieve this value, check the running JBoss server process: ps aux grep jboss.home.dir To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p jboss-container \ -o ANALYSIS OUTPUT PATH \ -r jboss-home= PATH TO JBOSS HOME Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO JBOSS HOME : path to the JBoss installation After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- Create a migration plan for WebSphere workloads Optional: Set up the binaryAppScanner.jar Note: If you want to migrate Liberty workloads and maintain their Java environment, you don't need to set up the binaryAppScanner.jar .
- To retrieve these values, check the running Tomcat server process: ps aux grep catalina To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p tomcat-container \ -o ANALYSIS OUTPUT PATH \ -r catalina-home= PATH TO CATALINA HOME \ -r catalina-base= PATH TO CATALINA BASE \ -r java-version= JAVA VERSION Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO CATALINA HOME : path to the root of the Tomcat installation PATH TO CATALINA BASE : path to the root of the runtime configuration of the Tomcat instance that you're migrating.
- Create a migration plan for WordPress workloads To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p wordpress-container \ -o ANALYSIS OUTPUT PATH Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Edit the target catalinaHome field directly in your migration plan: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . baseImage : name : BASE IMAGE NAME catalinaHome : PATH Replace PATH with the Tomcat installation path.
- Update Tomcat installation path During the migration process, if your target image has a non default CATALINA HOME path, then you can specify a custom CATALINA HOME path.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.

### "Customize migration plan for WebSphere traditional workloads \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you do not want to migrate all applications, you can remove them. applications: - appName: hello-world-servlet-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: hello-world-servlet-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/Hello-World-Servlet.ear … - appName: commons-ejb-ear-provided-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: commons-ejb-ear-provided-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/commons-ejb-ear-provided.ear sharedLibraries: - /opt/IBM/WebSphere/AppServer/sharedJars/commons-io-2.8.0.jar Set the scanner options In the migration plan, the scannerOptions field represents the argument to pass to the IBM WebSphere Application Server Migration Toolkit for Application Binaries .
- You can edit the arguments. scannerOptions : Setting 'includeSensitiveData: true' will upload sensitive data, if exists, such as private keys, to the artifacts repository includeSensitiveData : false sourceAppServer : was90 Note: In order to collect sensitive data, in the migration plan, under scannerOptions , modify the value of includeSensitiveData: to be true .
- Edit the migration plan After you have copied the file system and analyzed it, you can find the migration plan in the new directory that is created in the specified output path: ANALYSIS OUTPUT PATH / config.yaml .
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

