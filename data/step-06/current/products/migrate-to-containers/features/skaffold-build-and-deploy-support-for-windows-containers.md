---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.827Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Skaffold build and deploy support for Windows containers"
feature_slug: "skaffold-build-and-deploy-support-for-windows-containers"
latest_feature_date: "2022-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster"
  - "https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
keywords:
  - "skaffold"
  - "build"
  - "deploy"
  - "windows"
  - "containers"
  - "generated"
  - "yaml"
  - "files"
---

# Skaffold build and deploy support for Windows containers

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Generated Skaffold YAML files help accelerate image build and deployment for Windows migration artifacts on GKE and Anthos clusters.

## Extended Definition

Generated Skaffold YAML files help accelerate image build and deployment for Windows migration artifacts on GKE and Anthos clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster](https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster)
- [https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container](https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)

## Supporting Pages

### "Deploy a Linux system container to a target cluster \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster](https://docs.cloud.google.com/migrate/containers/docs/deploying-to-target-cluster)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To build and deploy your container, from the root folder of the generated artifacts, run the following command: skaffold run -d REPOSITORY PATH Replace REPOSITORY PATH with the path to your artifact repository.
- Deploy your container with Skaffold The skaffold.yaml file is at the root folder of the generated artifacts.
- Skaffold can handle the workflow for building, pushing, and deploying your application.
- To run Skaffold while building using Cloud Build, use the following command: skaffold run -d REPOSITORY PATH -p cloudbuild What's next Learn how to complete post-migration image updates .

### "Deploy a Linux application container \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container](https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To build and deploy your container, from the root folder of the generated artifacts, run the following command: skaffold run -d REPOSITORY PATH Replace REPOSITORY PATH with the path to your artifact repository.
- Deploy a Linux application container This page describes how to prepare your cluster for deployment, and how to deploy your Linux application containers using Skaffold.
- Use Skaffold with Linux-based workloads The skaffold.yaml file is at the root folder of the generated artifacts.
- Skaffold handles the workflow for building, pushing, and deploying your application.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- The next sections discuss this structure, explain what each part is, and how to modify it. globalSettings : globalIis : enablegmsa : string apppools : - enable32bitapponwin64 : bool identitytype : string managedruntimeversion : string name : string connectionStrings : add : - connectionstring : string name : string providername : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string image : extraFeatures : - string target : baseVersion : string requirements : - string warnings : - string msvcRuntimes : - string pathEnvVarAdditionalEntries : - string images : - name : string probes : enabled : bool livenessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] readinessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] useractions : files : - source : string target : string registry : currentcontrolset : - path : string software : - path : string workloads : sites : site : - applications : - applicationpool : string path : string virtualdirectories : - path : string physicalpath : string bindings : - port : int protocol : string sslflags : int connectionstrings : - connectionstring : string name : string providername : string name : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string serverautostart : bool version : string The globalSettings section The globalSettings section describes basic requirements for pods running IIS sites from this VM.
- The probes are disabled by default, to enable the probes, set the enabled flag to true . images : name : IMAGE NAME probes : enabled : false livenessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null readinessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null The windowsServices section Windows containers created during a migration run and monitor a single Windows IIS service.
- To run additional services in the migrated container, add entries to the windowsServices section, and copy the necessary binaries in the useractions section . version: v1 globalSettings: target: … globalIIS: … images: - name: migrated-image-zgwb2 workloads: sites: site: - applications: ... bindings: - port: 80 protocol: http name: Default Web Site … windowsServices: - MyService useractions: files: - source: C:\Program Files\MyService target: C:\Program Files\MyService registry: currentcontrolset: - key: services\MyService The useractions section The useractions section specifies additional files and registry keys that you might want to migrate.
- For example, if you set identitytype to NetworkService the directive is in the form: RUN c:\windows\system32\inetsrv\appcmd.exe set apppool \"DefaultAppPool\" \"/-processModel.identityType:NetworkService\"; Migrate to Containers automatically adds read ACL directives to the site's folders according to the target identitytype , and for the IUSR built-in user.

