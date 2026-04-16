---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.925Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "MVM application log context menu"
feature_slug: "mvm-application-log-context-menu"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "mvm"
  - "application"
  - "log"
  - "context"
  - "menu"
  - "show"
  - "was"
  - "added"
---

# MVM application log context menu

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

A "show in context" menu was added for MVM application logs to sort entries by thread_id or request_id.

## Extended Definition

A "show in context" menu was added for MVM application logs to sort entries by thread_id or request_id.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Go to Google Cloud console dashboard In the menu bar at the top of the dashboard, click the project dropdown menu and select the host project. gcloud Set the default project in the gcloud CLI to the host project by running the following in your terminal: gcloud config set project HOST PROJECT ID Replace the following: HOST PROJECT ID : the ID of the Shared VPC host project Create a Serverless VPC Access connector To send requests to your VPC network and receive the corresponding responses, you must create a Serverless VPC Access connector.
- To confirm that your subnet is not used for Private Service Connect or Cloud Load Balancing, check that the subnet purpose is PRIVATE by running the following command in the gcloud CLI: gcloud compute networks subnets describe SUBNET NAME Replace SUBNET NAME with the name of your subnet. (Optional) To set scaling options for additional control over the connector, click Show Scaling Settings to display the scaling form.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configure connectors in the Shared VPC host project Stay organized with collections Save and categorize content based on your preferences.
- In the Instance Type pulldown menu, choose the machine type to be used for the connector, or use the default e2-micro .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- With warmup requests enabled, the App Engine infrastructure issues GET requests to / ah/warmup , initializing <load-on-startup> servlets, ServletContextListeners , and custom warmup servlets, which allow you to initialize your application's code as it requires.
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- The appengine-web.xml file can define system properties and environment variables that are set when the application is running. <system-properties> <property name="myapp.maximum-message-length" value="140" /> <property name="myapp.notify-every-n-signups" value="1000" /> <property name="myapp.notify-url" value="http://www.example.com/signupnotify" /> </system-properties> <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> Optional.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- This page shows how to use Serverless VPC Access to connect your App Engine services in the standard environment directly to your VPC network, allowing access to Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- Connection refused error If you receive connection refused or connection timeout errors that degrade network performance, your connections could be growing without limit across invocations of your serverless application.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Connecting to a VPC network Stay organized with collections Save and categorize content based on your preferences.
- The name of the new subnet begins with the "aet-" prefix. (Optional) To set scaling options for additional control over the connector, click Show Scaling Settings to display the scaling form.

