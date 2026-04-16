---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.823Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Tomcat health probes"
feature_slug: "tomcat-health-probes"
latest_feature_date: "2022-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
keywords:
  - "tomcat"
  - "health"
  - "probes"
  - "deployments"
  - "use"
  - "kubernetes"
  - "readiness"
  - "liveness"
---

# Tomcat health probes

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Tomcat deployments use Kubernetes readiness and liveness probes by default, with options to disable or modify them in the migration plan.

## Extended Definition

Tomcat deployments use Kubernetes readiness and liveness probes by default, with options to disable or modify them in the migration plan.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- To learn more about kubelet probes, see Configure Liveness, Readiness and Startup Probes in the Kubernetes documentation.
- Set Tomcat health probes You can monitor the downtime and ready status of your managed containers by specifying probes in your Tomcat web server migration plan.
- Change the value in the server.xml file to use the following: <Engine name="Catalina" defaultHost="localhost" jvmRoute=" ${ HOSTNAME } "> Verify Tomcat proxy configuration If Tomcat is configured to run behind a reverse proxy, or using several proxy configuration settings in the Connector section of server.xml , you must verify that the same proxy configurations are still applicable once migrated to run in Kubernetes.

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- To learn more about kubelet probes, see Configure Liveness, Readiness and Startup Probes in the Kubernetes documentation.
- To disable probes, remove the probes section from the yaml. deployment : probes : livenessProbe : exec : command : - /ko-app/service-manager-runtime - /probe readinessProbe : exec : command : - gamma - /probe initialDelaySeconds : 60 periodSeconds : 5 image : Disable system services that do not need to be executed at the migrated workload containers.
- Set Linux v2kServiceManager health probes You can monitor the downtime and ready status of your managed containers by specifying probes in your Tomcat web server's migration plan.
- There are two types of probes available to configure, both probes are probe-v1-core defined in probe-v1-core reference and share the same function as the corresponding fields of container-v1-core Liveness probe - Liveness probes are used to know when to restart a container.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The next sections discuss this structure, explain what each part is, and how to modify it. globalSettings : globalIis : enablegmsa : string apppools : - enable32bitapponwin64 : bool identitytype : string managedruntimeversion : string name : string connectionStrings : add : - connectionstring : string name : string providername : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string image : extraFeatures : - string target : baseVersion : string requirements : - string warnings : - string msvcRuntimes : - string pathEnvVarAdditionalEntries : - string images : - name : string probes : enabled : bool livenessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] readinessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] useractions : files : - source : string target : string registry : currentcontrolset : - path : string software : - path : string workloads : sites : site : - applications : - applicationpool : string path : string virtualdirectories : - path : string physicalpath : string bindings : - port : int protocol : string sslflags : int connectionstrings : - connectionstring : string name : string providername : string name : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string serverautostart : bool version : string The globalSettings section The globalSettings section describes basic requirements for pods running IIS sites from this VM.
- The probes are disabled by default, to enable the probes, set the enabled flag to true . images : name : IMAGE NAME probes : enabled : false livenessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null readinessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null The windowsServices section Windows containers created during a migration run and monitor a single Windows IIS service.
- If such a probe is configured, it disables liveness and readiness checks until it succeeds, making sure that those probes don't interfere with the application startup.
- To learn more about kubelet probes, see Configure Liveness, Readiness and Startup Probes .

