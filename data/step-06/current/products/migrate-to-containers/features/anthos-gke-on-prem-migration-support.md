---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.869Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Anthos GKE on-prem migration support"
feature_slug: "anthos-gke-on-prem-migration-support"
latest_feature_date: "2020-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
keywords:
  - "anthos"
  - "gke"
  - "prem"
  - "migration"
  - "supports"
  - "migrating"
  - "source"
  - "vm"
---

# Anthos GKE on-prem migration support

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Supports migrating source VM workloads from vCenter/vSphere to an Anthos GKE on-prem cluster running in the same environment.

## Extended Definition

Supports migrating source VM workloads from vCenter/vSphere to an Anthos GKE on-prem cluster running in the same environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)

## Supporting Pages

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install Docker and allow the non-root user to run containers: Download the convenience script curl -fsSL https://get.docker.com -o install-docker.sh Install Docker sudo sh install-docker.sh Allow the non-root user to access Docker sudo usermod -aG docker $USER Activate the group changes newgrp docker Install Skaffold: curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \ sudo install skaffold /usr/local/bin/ Download the Migrate to Containers CLI: curl -O "https://m2c-cli-release.storage.googleapis.com/ $( curl -s https://m2c-cli-release.storage.googleapis.com/latest ) /linux/amd64/m2c" chmod +x ./m2c Migrate the source VM A migration typically involves three steps: copying the source VM file system, analyzing the file system to create a migration plan, and generating the migration artifacts.
- Create the migration plan On the quickstart-local-vm command tab, create the migration plan: ./m2c analyze \ --source quickstart-vm-filesystem --plugin linux-vm-container \ --output analysis-output After the analysis is complete, a new directory called analysis-output is created which contains the migration plan, config.yaml .
- Enable GKE API Create a Compute Engine VM with a web server to use as source VM This section describes how to create a Compute Engine VM that serves a Hello World! web page that you can use for testing after migration is complete.
- Create a Compute Engine VM to use as a local machine In this section, you create a Linux VM that you can use as your local machine to perform the different Migrate to Containers operations for migrating the source VM.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- You can modify the list of runtimes in the migration plan by adding or removing members of msvcRuntimes : The complete list of possible values are: (The 2015 runtime also includes support for 2017, 2019, and 2022) msvcRuntimes : - MSVC2012 x64 - MSVC2013 x64 - MSVC2015 x64 - MSVC2012 x86 - MSVC2013 x86 - MSVC2015 x86 The pathEnvVarAdditionalEntries section Windows IIS applications might have non-default PATH environment variable entries, which are automatically detected on the source VM and included in the migration plan.
- Migrate to Containers automatically detects the runtimes installed on the source VM and included them in the migration plan.
- The details of your migration plan are used to extract the workload container artifacts from the source VM.
- The next sections discuss this structure, explain what each part is, and how to modify it. globalSettings : globalIis : enablegmsa : string apppools : - enable32bitapponwin64 : bool identitytype : string managedruntimeversion : string name : string connectionStrings : add : - connectionstring : string name : string providername : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string image : extraFeatures : - string target : baseVersion : string requirements : - string warnings : - string msvcRuntimes : - string pathEnvVarAdditionalEntries : - string images : - name : string probes : enabled : bool livenessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] readinessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] useractions : files : - source : string target : string registry : currentcontrolset : - path : string software : - path : string workloads : sites : site : - applications : - applicationpool : string path : string virtualdirectories : - path : string physicalpath : string bindings : - port : int protocol : string sslflags : int connectionstrings : - connectionstring : string name : string providername : string name : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string serverautostart : bool version : string The globalSettings section The globalSettings section describes basic requirements for pods running IIS sites from this VM.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Edit the memory limits directly in your migration plan using the following format: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . resources : memory : limit : 2048M requests : 1280M The recommended value for limit is 200% of Xmx , which is the maximum Java heap size.
- The details of your migration plan are used to extract the workload container artifacts from the source.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.

