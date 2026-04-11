---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.745Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "Go runtime version specification in app.yaml"
feature_slug: "go-runtime-version-specification-in-app-yaml"
latest_feature_date: "2018-02-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml"
keywords:
  - "latest supported Go runtime"
  - "specific Go version"
  - "runtime directive"
  - "Go runtime in app.yaml"
  - "specify Go runtime"
  - "runtime setting"
  - "app.yaml"
  - "runtime: go"
---

# Go runtime version specification in app.yaml

Product: App Engine flexible environment Go
Coverage: LOW

## Step 02 Summary

Developers can specify `runtime: go` in `app.yaml` to select the latest supported Go runtime version for App Engine; Developers can build with a specific Go runtime version by configuring `runtime: go` in `app.yaml`.

## Extended Definition

Developers can specify `runtime: go` in `app.yaml` to select the latest supported Go runtime version for App Engine; Developers can build with a specific Go runtime version by configuring `runtime: go` in `app.yaml`.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- [https://docs.cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml)

## Supporting Pages

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: This page is the authoritative app.yaml reference and describes the required `runtime` field used to configure the application runtime, which is directly relevant to specifying Go runtime behavior in configuration.

Evidence snippets:
- You can customize health check requests by adding an optional readiness check section to your app.yaml file, for example: readiness check : path : "/readiness check" check interval sec : 5 timeout sec : 4 failure threshold : 2 success threshold : 2 app start timeout sec : 300 The following settings are available for readiness checks: Field Default Range (Minimum-Maximum) Description path None If you want readiness checks to be forwarded to your application container, specify a URL path, such as "/readiness check" timeout sec 4 seconds 1-300 Timeout interval for each request, in seconds. check interval sec 5 seconds 1-300 Time interval between checks, in seconds.
- You can customize liveness check requests by adding an optional liveness check section to your app.yaml file, for example: liveness check : path : "/liveness check" check interval sec : 30 timeout sec : 4 failure threshold : 2 success threshold : 2 The following settings are available for liveness checks: Field Default Range (Minimum-Maximum) Description path None If you want liveness checks to be forwarded to your application container, specify a URL path, such as "/liveness check" timeout sec 4 seconds 1-300 Timeout interval for each request, in seconds. check interval sec 30 seconds 1-300 Time interval between checks, in seconds.
- Network settings You can specify network settings in your app.yaml configuration file, for example: network : name : NETWORK NAME instance ip mode : INSTANCE IP MODE instance tag : TAG NAME subnetwork name : SUBNETWORK NAME session affinity : true forwarded ports : - PORT - HOST PORT : CONTAINER PORT - PORT /tcp - HOST PORT : CONTAINER PORT /udp You can use the following options when configuring network settings: Option Description name Every VM instance in the flexible environment is assigned to a Google Compute Engine network when it is created.
- For example, if you want to forward TCP traffic from port 2222 : In the network settings of your app.yaml , include: network : forwarded ports : - 2222/tcp If you use the Python runtime, modify the app.yaml to include: entrypoint: gunicorn -b :$PORT -b :2222 main:app Specify a firewall rule in the Google Cloud console or using gcloud compute firewall-rules create to allow traffic from any source ( 0.0.0.0/0 ) and from tcp:2222 .

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see: https://cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 Depending on the complexity of your app's service, you might only need to define a few elements in the corresponding app.yaml file.
- For example, if you name your app.yaml file service-name-app.yaml or app.flexible.yaml , then you must deploy your app using either: gcloud app deploy service - name - app . yaml gcloud app deploy app . flexible . yaml To learn more about structuring multiple services and app.yaml files in your app, see Structuring web services .
- The following example demonstrates what a simple Go app might require in the flexible environment: You can specify a unique name for your app.yaml files, but then you must specify the file name with the deployment command as well.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.

