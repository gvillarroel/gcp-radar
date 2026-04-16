---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.796Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Workforce Identity Federation"
feature_slug: "workforce-identity-federation"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/deploy-run"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux"
keywords:
  - "workforce"
  - "identity"
  - "federation"
  - "migrate"
  - "containers"
  - "supports"
---

# Workforce Identity Federation

Product: Migrate to Containers
Coverage: LOW

## Step 02 Summary

Migrate to Containers supports Workforce Identity Federation.

## Extended Definition

Migrate to Containers supports Workforce Identity Federation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/deploy-run](https://docs.cloud.google.com/migrate/containers/docs/deploy-run)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)

## Supporting Pages

### "Deploy containers to Cloud Run \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploy-run](https://docs.cloud.google.com/migrate/containers/docs/deploy-run)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you should see something similar to the following: spec : containers : - image : gcr.io/ PROJECT NAME /quickstart-instance: LABEL In the Deploying the migrated workload section, deploy the container image to Cloud Run by using the command: gcloud run deploy my-runtime --image gcr.io/ PROJECT NAME /quickstart-instance: LABEL --region REGION --platform managed --set-env-vars=HC V2K SERVICE MANAGER=true --port 80 The web server in the migrated container listens for requests on port 80 so make sure to specify that port when deploying the container.
- Deploy containers to Cloud Run If you use the enhanced Linux service manager that is offered by default to migrate your container workloads, you can then deploy the container on Cloud Run without having to make any additional changes to the container.
- However, if Migrate to Containers detects a system service that is not supported by the service manager, you will be alerted and the v2kServiceManager flag will be set to false .
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.
- For example, if you set identitytype to NetworkService the directive is in the form: RUN c:\windows\system32\inetsrv\appcmd.exe set apppool \"DefaultAppPool\" \"/-processModel.identityType:NetworkService\"; Migrate to Containers automatically adds read ACL directives to the site's folders according to the target identitytype , and for the IUSR built-in user.
- The supported values for enablegmsa field are: auto (default): Convert the migrated container to use gMSA if Migrate to Containers determines that its current configuration is not allowed. all : Always convert the migrated container to use gMSA and ignore the setting of identitytype .
- Migrate to Containers only supports a value of System.Data.SqlClient . supports the .NET Framework data provider: System.Data.SqlClient System.Data.OleDb System.Data.Odbc System.Data.OracleClient connectionstring specifies the Connection Strings used to connect to the data provider.

### Migrate to Containers CLI reference for Linux \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)
- Source ID: `site-docs-root`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Migrate to Containers CLI reference for Linux m2c is a command-line tool that lets you set up and execute migrations on your local machine. m2c A command-line interface to Migrate to Containers.
- Home Documentation Migration Migrate to Containers Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To download a plugins bundle file, see https://cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration .
- Synopsis m2c COMMAND [options] Flags -q,--quiet Don't output anything -v,--verbose Show verbose output Commands Command Description m2c analyze Analyze the workload's configuration in the given file system. m2c cleanup Clean up a source file system. m2c completion Generate the autocompletion script for the specified shell m2c config View and edit configuration properties m2c copy Copy a VM's file system locally. m2c generate Generate migration artifacts from the given file system. m2c help Help about any command m2c migrate-data Migrate data from the local machine to PVCs. m2c plugins Manage migration plugins m2c version Print the CLI version. m2c analyze Analyze the workload's configuration in the given file system with a given plugin.

