---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.118Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Private Python dependencies from Artifact Registry in App Engine Standard"
feature_slug: "private-python-dependencies-from-artifact-registry-in-app-engine-standard"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies"
keywords:
  - "dependencies"
  - "artifact"
  - "registry"
  - "private"
  - "from"
  - "python"
  - "app"
  - "in"
---

# Private Python dependencies from Artifact Registry in App Engine Standard

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

Adds support for Python 3 App Engine apps to install private packages from an Artifact Registry Python repository.

## Extended Definition

Adds support for Python 3 App Engine apps to install private packages from an Artifact Registry Python repository.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)

## Supporting Pages

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Private dependencies with Artifact Registry If you need to host private dependencies for your Java app, you can use an Artifact Registry Maven repository .
- Specify it in your pom.xml file's <dependencies> entry: <dependencies> <dependency> <groupId>javax.servlet</groupId> <artifactId>javax.servlet-api</artifactId> <version>3.1.0</version> <type>jar</type> <scope>provided</scope> </dependency> </dependencies> Note that frameworks such as SparkJava or Spring Boot won't require the servlet library.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Specifying dependencies Stay organized with collections Save and categorize content based on your preferences.
- Connecting to a Maven repository hosted on Artifact Registry requires the Artifact Registry Maven Tools plugin for your Maven or Gradle configuration.

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Memcache operations initiated from within your app will not be audit logged.
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.
- When deciding which Logging-specific permissions and roles apply to your use case, consider the following: The Logs Viewer role ( roles/logging.viewer ) gives you read-only access to Admin Activity, Policy Denied, and System Event audit logs.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback App Engine audit logging information Stay organized with collections Save and categorize content based on your preferences.

### "Specify dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- The following example assumes your app is in the /myapp/ directory: Change to your app directory: cd / myapp Create a directory containing your private dependencies: mkdir private Make sure your private dependency is in the private directory.
- Use private dependencies App Engine can't download your private dependencies during the build process, so you must include the dependencies with your application code upon deployment.
- Vendoring dependencies Vendoring copies the packages your app uses into the application directory instead of downloading modules from their sources during the build process.
- One approach is by creating a symlink: mkdir private / private . example . com ln - s / path / to / private . example . com / foo private / private . example . com / foo Update your go.mod file to use the replace directive to use the private directory for your dependency: go mod edit - replace = private . example . com / foo =. / private / private . example . com / foo Your go.mod file should now look like: Final go.mod file module private . example . com / myapp require private . example . com / foo v1 .2.3 replace private . example . com / foo = > . / private / private . example . com / foo Original go.mod file module private . example . com / myapp require private . example . com / foo v1 .2.3 Don't modify how you import and use your private package.

