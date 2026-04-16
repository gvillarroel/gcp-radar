---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.847Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "RVTools data source for fit assessment"
feature_slug: "rvtools-data-source-for-fit-assessment"
latest_feature_date: "2021-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview"
keywords:
  - "rvtools"
  - "source"
  - "fit"
  - "assessment"
  - "tool"
  - "can"
  - "analyze"
  - "single"
---

# RVTools data source for fit assessment

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The fit assessment tool can analyze a single VMware vCenter RVTools .xlsx export as an input source.

## Extended Definition

The fit assessment tool can analyze a single VMware vCenter RVTools .xlsx export as an input source.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview](https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview)

## Supporting Pages

### "Offline assessment overview \_|\_ Migrate to Containers \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview](https://docs.cloud.google.com/migrate/containers/docs/offline-assessment-overview)
- Source ID: `site-docs-root-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It provides an overall fit assessment using one of the following scores: Excellent fit Good fit, with some findings that might require attention Needs minimal work before migrating Needs moderate work before migrating Needs major work before migrating No fit Insufficient data The offline assessment also gives you: The ability to get the assessment information about physical servers and virtual machine (VM) instances in your infrastructure.
- Offline assessment overview The Migration Center discovery client CLI or mcdc CLI lets you run an offline assessment with the information that you collected in the discovery phase.
- The offline assessment creates reports that provide you with a high-level fit assessment result for migration and potential blockers for different migration journeys.
- A detailed report on the applicable assessment rules, including any technical blockers to modernization.

### Migrate to Containers CLI reference for Linux \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Synopsis m2c COMMAND [options] Flags -q,--quiet Don't output anything -v,--verbose Show verbose output Commands Command Description m2c analyze Analyze the workload's configuration in the given file system. m2c cleanup Clean up a source file system. m2c completion Generate the autocompletion script for the specified shell m2c config View and edit configuration properties m2c copy Copy a VM's file system locally. m2c generate Generate migration artifacts from the given file system. m2c help Help about any command m2c migrate-data Migrate data from the local machine to PVCs. m2c plugins Manage migration plugins m2c version Print the CLI version. m2c analyze Analyze the workload's configuration in the given file system with a given plugin.
- Synopsis m2c analyze --source COPIED FILESYSTEM PATH --plugin PLUGIN NAME --output OUTPUT DIR [options] Flags -o,--output path Output path that can be used as input to the m2c generate command -r,--parameter name=value Plugin analysis parameters in the format "name=value".
- You can execute the following once: echo "autoload -U compinit; compinit" >> /. zshrc To load completions in your current shell session: source <(m2c completion zsh) To load completions for every new session, execute once: Linux: m2c completion zsh > " ${ fpath [ 1 ] } / m2c" macOS: m2c completion zsh > $(brew --prefix)/share/zsh/site-functions/ m2c You will need to start a new shell for this setup to take effect.
- Synopsis m2c migrate-data -i INPUT PATH [options] Flags -i,--input path The path to a directory generated by m2c analyze -n,--namespace namespace The namespace of the target PVCs on the target cluster m2c plugins Synopsis m2c plugins COMMAND Commands Command Description m2c plugins unpack Import plugins from a local file. m2c plugins unpack Import plugins from a local file.

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Migrate to Containers CLI automates the use of the binaryAppScanner.jar , available as part of the IBM WebSphere Application Server Migration Toolkit for Application Binaries , to extract configuration information and files for WebSphere Application Server applications in the source VM.
- Create a migration plan for Windows IIS services To perform the analysis, run the following command: ./m2c analyze -s PATH TO IMAGE -p windows-iis-container -o ANALYSIS OUTPUT PATH Replace the following: PATH TO IMAGE : the path to source machine disk image.
- Create a migration plan After creating a copy of the source machine's file system on your local machine, the next step is to analyze the file system to prepare a migration plan.
- To retrieve these values, check the running Tomcat server process: ps aux grep catalina To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p tomcat-container \ -o ANALYSIS OUTPUT PATH \ -r catalina-home= PATH TO CATALINA HOME \ -r catalina-base= PATH TO CATALINA BASE \ -r java-version= JAVA VERSION Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO CATALINA HOME : path to the root of the Tomcat installation PATH TO CATALINA BASE : path to the root of the runtime configuration of the Tomcat instance that you're migrating.

