---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.899Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine Maven configuration deployment goals"
feature_slug: "app-engine-maven-configuration-deployment-goals"
latest_feature_date: "2017-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
keywords:
  - "app"
  - "engine"
  - "maven"
  - "configuration"
  - "deployment"
  - "goals"
  - "were"
  - "added"
---

# App Engine Maven configuration deployment goals

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

New Maven goals were added to deploy cron, dispatch, dos, index, and queue configurations.

## Extended Definition

New Maven goals were added to deploy cron, dispatch, dos, index, and queue configurations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.
- App Engine Java applications use a configuration file, named appengine-web.xml , to specify information about your app and to identify which files in the app's WAR file are static files (like images) and which are resource files used by the application.
- This idle timeout configuration isn't the same as the overall request deadline for scaling, or the URL Fetch API deadline that you configure using appengine.api.urlfetch.defaultDeadline . <inbound-services> Optional.

### "Structuring web services in App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuration-files](https://docs.cloud.google.com/appengine/docs/standard/configuration-files)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Directory structure Each version of your App Engine service is defined in an app.yaml configuration file.
- Similarly, both service2 and service3 are in separate directories, which contain each service's files, although service3 includes two versions of the YAML configuration file: In the following example, a single service has the optional dispatch.yaml file and two configuration files that represent different versions of that service, service1.yaml and service2.yaml : Design considerations for instance uptime Hardware or software failures that cause early termination or frequent instance restarts can occur without warning and can take considerable time to resolve.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- You can serve your app's static content directly from that app in App Engine, host your static content on a Google Cloud option like Cloud Storage, or use a third-party content delivery network (CDN).

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . appengine.versions.delete appengine.versions.get appengine.versions.list appengine.versions.update artifactregistry. aptartifacts. create artifactregistry. dockerimages. artifactregistry. dockerimages. get artifactregistry. dockerimages. list artifactregistry. files. download artifactregistry.files.get artifactregistry.files.list artifactregistry. kfpartifacts. create artifactregistry.locations. artifactregistry.locations.get artifactregistry. locations. list artifactregistry. mavenartifacts. artifactregistry. mavenartifacts. get artifactregistry. mavenartifacts. list artifactregistry.npmpackages. artifactregistry. npmpackages. get artifactregistry. npmpackages. list artifactregistry.packages.get artifactregistry.packages.list artifactregistry. projectsettings. get artifactregistry. pythonpackages. artifactregistry. pythonpackages. get artifactregistry. pythonpackages. list artifactregistry. repositories. create artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. get artifactregistry. repositories. list artifactregistry. repositories. listEffectiveTags artifactregistry. repositories. listTagBindings artifactregistry. repositories. readViaVirtualRepository artifactregistry. repositories. uploadArtifacts artifactregistry.tags.create artifactregistry.tags.get artifactregistry.tags.list artifactregistry.tags.update artifactregistry.versions.get artifactregistry.versions.list artifactregistry. yumartifacts. create compute.addresses.create compute. addresses. createInternal compute.addresses.delete compute. addresses. deleteInternal compute.addresses.get compute.addresses.list compute.globalOperations.get compute.networks.get compute.regionOperations.get compute.subnetworks.get compute.subnetworks.use compute.zoneOperations.get datastore.databases.get datastore.entities.create datastore.entities.delete datastore.entities.get datastore.entities.list datastore.entities.update datastore.namespaces. datastore.namespaces.get datastore.namespaces.list datastore.schemas.list datastore.statistics. datastore.statistics.get datastore.statistics.list iam. serviceAccounts. getAccessToken iam. serviceAccounts. getOpenIdToken iam.serviceAccounts.signBlob serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test storage.buckets.create storage.buckets.get The predefined roles for App Engine provide you with finer grained options for access control.
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.create appengine.versions.delete appengine.versions.get appengine.versions.list artifactregistry. projectsettings. get artifactregistry. repositories. deleteArtifacts artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. uploadArtifacts recommender.locations. recommender.locations.get recommender.locations.list resourcemanager.projects.get resourcemanager.projects.list App Engine Memcache Data Admin ( roles/ appengine.memcacheDataAdmin ) Can get, set, delete, and flush App Engine Memcache items. appengine.applications.get appengine.memcache.addKey appengine.memcache.flush appengine.memcache.get appengine.memcache.update resourcemanager.projects.get resourcemanager.projects.list App Engine Service Admin ( roles/ appengine.serviceAdmin ) Read-only access to all application configuration and settings.
- Lowest-level resources where you can grant this role: Project appengine.applications.get appengine. applications. listRuntimes appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine. versions. getFileContents appengine.versions.list artifactregistry. projectsettings. get resourcemanager.projects.get resourcemanager.projects.list App Engine Managed VM Debug Access ( roles/ appengine.debugger ) Ability to read or manage v2 instances. appengine.applications.get appengine. applications. listRuntimes appengine.instances. appengine.instances.delete appengine. instances. enableDebug appengine.instances.get appengine.instances.list appengine.operations. appengine.operations.get appengine.operations.list appengine.services.get appengine.services.list appengine.versions.get appengine.versions.list resourcemanager.projects.get resourcemanager.projects.list App Engine Deployer ( roles/ appengine.deployer ) Read-only access to all application configuration and settings.

