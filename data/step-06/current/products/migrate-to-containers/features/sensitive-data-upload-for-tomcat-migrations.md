---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.826Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Sensitive data upload for Tomcat migrations"
feature_slug: "sensitive-data-upload-for-tomcat-migrations"
latest_feature_date: "2022-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration"
keywords:
  - "sensitive"
  - "upload"
  - "tomcat"
  - "migrations"
  - "migration"
  - "plan"
  - "can"
  - "include"
---

# Sensitive data upload for Tomcat migrations

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The Tomcat migration plan can include certificates in the repository when the includeSensitiveData parameter is set to true.

## Extended Definition

The Tomcat migration plan can include certificates in the repository when the includeSensitiveData parameter is set to true.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)

## Supporting Pages

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If includeSensitiveData is set to true the sensitive data will be mounted on the container. includeSensitiveData : true tomcatServers : - name : latest catalinaBase : /opt/tomcat/latest catalinaHome : /opt/tomcat/latest Exclude files from migration. excludeFiles : - /usr/local/ssl/server.pem - /usr/home/tomcat/keystore - /usr/home/tomcat/truststore images : - name : tomcat-latest ...
- If set to true, sensitive data specified in sensitiveDataPaths will be uploaded to the artifacts repository. sensitiveDataPaths : - /usr/local/ssl/server.pem - /usr/home/tomcat/keystore - /usr/home/tomcat/truststore After the migration is complete, the secrets are added to the secrets file secrets.yaml in the artifacts repository.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.

### "Customize migration plan for JBoss servers \_|\_ Migrate to Containers \_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure sensitive data migration In order to upload sensitive data to the repository, you need to set the includeSensitiveData field on the migration plan to true .
- If includeSensitiveData is set to true the sensitive data is mounted on the container. sensitiveData: includeSensitiveData: false sensitiveDataPaths: - /opt/jboss/wildfly/standalone/configuration/application-roles.properties - /opt/jboss/wildfly/standalone/configuration/application-users.properties - /opt/jboss/wildfly/standalone/configuration/application.keystore - /opt/jboss/wildfly/standalone/configuration/mgmt-groups.properties - /opt/jboss/wildfly/standalone/configuration/mgmt-users.properties To add information as needed, review your migration plan details and guiding comments.
- The sensitiveDataPaths field specifies the lists of files to filter out from the migration plan.
- If you want to change the Docker community image, or provide your own docker image, you can modify the fromImage tag in your migration plan using the following format: Parent Wildfly image for the generated container image. fromImage : docker.io/jboss/wildfly:10.1.0.Final The targetImageHome field specifies the path of the JBoss home directory in the target image, and is derived from the fromImage field.

### "Customize migration plan for WebSphere traditional workloads \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can edit the arguments. scannerOptions : Setting 'includeSensitiveData: true' will upload sensitive data, if exists, such as private keys, to the artifacts repository includeSensitiveData : false sourceAppServer : was90 Note: In order to collect sensitive data, in the migration plan, under scannerOptions , modify the value of includeSensitiveData: to be true .
- Notice that set includeSensitiveData: true will cause uploading sensitive artifacts into the user repository.
- If you do not want to migrate all applications, you can remove them. applications: - appName: hello-world-servlet-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: hello-world-servlet-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/Hello-World-Servlet.ear … - appName: commons-ejb-ear-provided-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: commons-ejb-ear-provided-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/commons-ejb-ear-provided.ear sharedLibraries: - /opt/IBM/WebSphere/AppServer/sharedJars/commons-io-2.8.0.jar Set the scanner options In the migration plan, the scannerOptions field represents the argument to pass to the IBM WebSphere Application Server Migration Toolkit for Application Binaries .
- Edit the migration plan After you have copied the file system and analyzed it, you can find the migration plan in the new directory that is created in the specified output path: ANALYSIS OUTPUT PATH / config.yaml .

