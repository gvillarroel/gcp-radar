---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.834Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "WebSphere application replatforming"
feature_slug: "websphere-application-replatforming"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration"
  - "https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container"
keywords:
  - "websphere"
  - "application"
  - "replatforming"
  - "based"
  - "vms"
  - "can"
  - "replatformed"
  - "into"
---

# WebSphere application replatforming

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

WebSphere-based VMs can be replatformed into containers using tWAS or Open Liberty images, with discovery, app splitting, and deployment artifact generation support.

## Extended Definition

WebSphere-based VMs can be replatformed into containers using tWAS or Open Liberty images, with discovery, app splitting, and deployment artifact generation support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
- [https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container](https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container)

## Supporting Pages

### "Customize migration plan for WebSphere workloads \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 0 361 jre : Java ( TM ) SE Runtime Environment jvm : IBM J9 VM List of hosted applications and how to migrate them to containers. applications : - path : / opt / ibm / wlp / usr / servers / defaultServer / apps / app . war Application archives to be migrated into the target container. archives : - / opt / ibm / wlp / usr / servers / defaultServer / apps / app . war Application configuration files to be migrated into the target container. configurations : serverXML : / opt / ibm / wlp / usr / servers / defaultServer / server . xml serverEnv : - / opt / ibm / wlp / usr / servers / defaultServer / server . env bootstrapProperties : - / opt / ibm / wlp / usr / servers / defaultServer / bootstrap . properties variableProperties : - / opt / ibm / wlp / usr / servers / defaultServer / variables / variable . properties jvmOptions : - / opt / ibm / wlp / usr / servers / defaultServer / jvm . options Application resource files to be migrated into the target container. resources : locations : - / opt / ibm / wlp / usr / servers / defaultServer / resources / ports . xml libraries : - / opt / ibm / wlp / usr / servers / defaultServer / resources / postgresql . jar keystores : - / opt / ibm / wlp / output / defaultServer / resources / security / key . p12 sharedResources : - / opt / ibm / wlp / usr / shared / resources / jdbc . jar additionalResources : - / opt / ibm / wlp / output / defaultServer / resources / mongodb . jar javaRuntime : se : SE8 ee : EE7 vendor : IBM Corporation targetJavaRuntime : se : SE8 ee : EE7 vendor : IBM Corporation targetApplicationServer : profile : Liberty version : 23.0 .
- 0.4 edition : Base targetContainer : The target container base image name. baseImage : ibmcom / websphere - liberty : full - java8 - ibmjava - ubi The application server installation path within the target container base image. home : / opt / ibm / wlp The application server default server name. server : defaultServer The UID or name of the user configured within the target container base image.
- Customize the target application server To customize the target application server for the application, update the targetApplicationServer field. applications: - path: app.war targetApplicationServer: profile: PROFILE version: VERSION edition: EDITION Replace the following: PROFILE : the WebSphere profile.
- List of discovered WebSphere application servers and how to migrate their hosted applications to containers. webSphereApplicationServers : The application server installation path. - home : / opt / ibm / wlp applicationServerInfo : name : WebSphere Application Server profile : Liberty version : 23.0 .

### "Customize migration plan for WebSphere traditional workloads \_|\_ Migrate\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you do not want to migrate all applications, you can remove them. applications: - appName: hello-world-servlet-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: hello-world-servlet-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/Hello-World-Servlet.ear … - appName: commons-ejb-ear-provided-ear httpEndpoints: - httpPort: 9080 httpsPort: 9443 id: defaulthttpendpoint image: name: commons-ejb-ear-provided-ear path: /opt/IBM/WebSphere/AppServer/profiles/AppSrv01/config/cells/m4a-twas-ndNode01Cell/applications/commons-ejb-ear-provided.ear sharedLibraries: - /opt/IBM/WebSphere/AppServer/sharedJars/commons-io-2.8.0.jar Set the scanner options In the migration plan, the scannerOptions field represents the argument to pass to the IBM WebSphere Application Server Migration Toolkit for Application Binaries .
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- If you're new to WebSphere workload modernization, then use the websphere-container plugin with the Migrate to Containers CLI instead.
- Customize migration plan for WebSphere traditional workloads Important: The websphere-traditional plugin is now deprecated.

### "Deploy a Linux application container \_|\_ Migrate to Containers \_|\_ Google\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container](https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy a Linux application container This page describes how to prepare your cluster for deployment, and how to deploy your Linux application containers using Skaffold.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Use Skaffold with Linux-based workloads The skaffold.yaml file is at the root folder of the generated artifacts.
- Linux, Tomcat, WebSphere, JBoss, Apache, and WordPress support Skaffold artifact creation by default.

