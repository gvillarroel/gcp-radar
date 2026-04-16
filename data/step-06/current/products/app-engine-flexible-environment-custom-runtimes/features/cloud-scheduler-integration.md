---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:30:30.393Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "Cloud Scheduler integration"
feature_slug: "cloud-scheduler-integration"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/php"
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "scheduler"
  - "integration"
  - "app"
  - "engine"
  - "applications"
  - "can"
  - "use"
  - "run"
---

# Cloud Scheduler integration

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine applications can use Cloud Scheduler to run scheduled units of work such as cron jobs.

## Extended Definition

App Engine applications can use Cloud Scheduler to run scheduled units of work such as cron jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "The PHP runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- Source ID: `site-docs-reference-2`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine blocks you from deploying your applications using runtimes that have reached end of support.
- An empty string front controller file Default PHP file name for the directory access. index.php nginx conf http include Filename of a partial nginx config, which will be included in the http section in the main nginx config file. nginx-http.conf nginx conf include Filename of a partial nginx config which will be included in the server section in the main nginx config file. nginx-app.conf nginx conf override Filename of a user supplied nginx configuration file, which will be used as the nginx main configuration file. nginx.conf php fpm conf override Filename of a user supplied php-fpm configuration file, which will be included at the bottom of the [app] section so that it will override the existing configurations. php-fpm.conf php ini override Filename of a user supplied PHP configuration file. php.ini supervisord conf addition Filename of a user supplied supervisord config file, which will be included in the main supervisord config file. additional-supervisord.conf supervisord conf override Filename of a user supplied supervisord config file, which will override the main supervisord config file. supervisord.conf You can control whether Nginx serves static files for matching URIs by setting the NGINX SERVES STATIC FILES environment variable in the build env variables section of your app.yaml file: runtime : php env : flex runtime config : document root : "web" operating system : "ubuntu24" build env variables : NGINX SERVES STATIC FILES : true Configuring supervisord in the PHP runtime The App Engine flexible environment uses supervisord to manage processes.
- The following is an example configuration file content for this case: [supervisord] nodaemon = true logfile = /dev/null logfile maxbytes = 0 pidfile = /var/run/supervisord.pid [program:react-server] command = php %(ENV APP DIR)s/index.php stdout logfile = /dev/stdout stdout logfile maxbytes=0 stderr logfile = /dev/stderr stderr logfile maxbytes=0 user = www-data autostart = true autorestart = true priority = 5 stopwaitsecs = 20 Extending the runtime The App Engine flexible environment PHP runtime can be used to create a custom runtime.
- Metadata server Each instance of your application can use the Compute Engine metadata server to query information about the instance, including its host name, external IP address, instance ID, custom metadata, and service account information.

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go Java Node.js PHP Python Ruby .NET Custom To authenticate users in Google Cloud applications, Google offers the following user authentication methods: Authentication Service Summary Identity Platform (recommended) Authenticate users using passwords, phone numbers, popular federated identity providers like Google, Facebook, Twitter, and any provider that supports SAML or OpenID Connect protocol.
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Identity Platform Identity Platform is a customer identity and access management (CIAM) platform that lets organizations customize identity and authentication for user sign-up and sign-in in their applications.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- Before you begin Before running the sample app in this quickstart, you need to set up your environment and create a new Google Cloud project for App Engine: Create a new Google Cloud project by using the Google Cloud console: Open the Google Cloud console: Go to Projects Click Create Project and then name your new Google Cloud project.
- Navigate to the nginx directory where the sample code is located, for example: cd appengine-custom-runtimes-samples/nginx Running Hello World on your local machine You can test the sample app by downloading and installing Docker , and then running the Hello World container on your local machine.

