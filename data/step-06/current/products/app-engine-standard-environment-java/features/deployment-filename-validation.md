---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.232Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Deployment filename validation"
feature_slug: "deployment-filename-validation"
latest_feature_date: "2018-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
keywords:
  - "prevented"
  - "filenames"
  - "filename"
  - "validation"
  - "deployments"
  - "deployment"
  - "when"
---

# Deployment filename validation

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Deployments are now prevented when filenames contain carriage returns.

## Extended Definition

Deployments are now prevented when filenames contain carriage returns.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- The appengine-web.xml file can define system properties and environment variables that are set when the application is running. <system-properties> <property name="myapp.maximum-message-length" value="140" /> <property name="myapp.notify-every-n-signups" value="1000" /> <property name="myapp.notify-url" value="http://www.example.com/signupnotify" /> </system-properties> <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> Optional.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- Find the current attribute values To find the current attribute values for your connector, run the following in your terminal: gcloud compute networks vpc-access connectors describe CONNECTOR NAME --region = REGION --project = PROJECT Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region PROJECT : the name of your Google Cloud project Monitor connector usage Monitoring usage over time can help you determine when to adjust a connector's settings.
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.
- When a connector and its VPC network are in different projects, a Shared VPC network administrator must create the connector's subnet in the Shared VPC network before you can create the connector, and you must create the connector using an existing subnet.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.
- For more information about the possible MIME media types, see the IANA MIME Media Types website . redirect http response code Optional. redirect http response code is used with the secure setting to set the HTTP response code returned when performing a redirect required by how the secure setting is configured. redirect http response code element has the following possible values: 301 Moved Permanently response code.
- When the number of concurrent requests reaches a value equal to max concurrent requests times target throughput utilization , the scheduler tries to start a new instance. max concurrent requests Optional.
- This is the default when secure is not provided for a handler. never Requests for a URL that match this handler that use HTTPS are automatically redirected to the HTTP equivalent URL.

