---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.824Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Artifact repository health checks"
feature_slug: "artifact-repository-health-checks"
latest_feature_date: "2022-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
keywords:
  - "artifact"
  - "repository"
  - "health"
  - "checks"
  - "migctl"
  - "warns"
  - "when"
  - "account"
---

# Artifact repository health checks

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Migctl checks artifact repository health and warns when the service account cannot upload artifacts to the target bucket.

## Extended Definition

Migctl checks artifact repository health and warns when the service account cannot upload artifacts to the target bucket.

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
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- If set to true, sensitive data specified in sensitiveDataPaths will be uploaded to the artifacts repository. sensitiveDataPaths : - /usr/local/ssl/server.pem - /usr/home/tomcat/keystore - /usr/home/tomcat/truststore After the migration is complete, the secrets are added to the secrets file secrets.yaml in the artifacts repository.
- Note: If a process in your container can crash on its own when it encounters an issue, or becomes unhealthy, you don't necessarily need a liveness probe.
- A health probe functions by running a small scripted statement when the container starts.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.
- Note: If a process in your container is able to crash on its own when it encounters an issue, or is unhealthy, you don't necessarily need a liveness probe.
- A health probe functions by running a small scripted statement when the container starts.
- This section describes the contents of the migration plan and the kinds of customizations that you might consider before you execute the migration, and generate deployment artifacts.

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- For example, if Nginx is associated with two ports, it adds the -2 suffix to the name in the second definition: endpoints : - port : 80 protocol : HTTP name : backend-server-nginx - port : 8080 protocol : HTTPS name : backend-server-nginx-2 - port : 6379 protocol : TCP name : backend-server-redis When you execute a migration to generate the migration artifacts, Migrate to Containers creates a Service definition in the deployment spec.yaml file for each endpoint.
- Migrate to Containers then writes information about those detected files to the logPaths area of the migration plan: deployment : ... logPaths : - appName : APP NAME globs : - LOG PATH For example: deployment : ... logPaths : - appName : tomcat globs : - /var/log/tomcat /catalina.out When you generate the migration artifacts, Migrate to Containers generates the logs.yaml file from the migration plan.
- For example, to disable service2 and the cron service: systemServices : - enabled : true name : service1 probed : false - enabled : false name : service2 probed : false - enabled : false name : cron probed : false When you execute a migration to generate the migration artifacts, Migrate to Containers creates the blocklist.yaml file.
- When you execute a migration to generate the migration artifacts, Migrate to Containers creates a volumes and volumeMounts definition and a PersistentVolume and PersistentVolumeClaim definition in the deployment spec.yaml file for each enabled NFS mount.

