---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.304Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "goapp serve Delve debugging flag"
feature_slug: "goapp-serve-delve-debugging-flag"
latest_feature_date: "2017-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app"
keywords:
  - "goapp"
  - "serve"
  - "debug"
  - "enable"
  - "delve"
  - "flag"
  - "debugging"
  - "supports"
---

# goapp serve Delve debugging flag

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Goapp serve supports the -debug flag to enable Delve debugging.

## Extended Definition

Goapp serve supports the -debug flag to enable Delve debugging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- Source ID: `site-docs-reference-4`
- Final score: 307
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using SMTP To enable mail support with an SMTP server, invoke dev appserver.py as follows:: python3 [ CLOUD SDK ROOT ]/ bin / dev appserver . py --smtp host=smtp.example.com --smtp port=25 \ --smtp user=ajohnson --smtp password=k1tt3ns [PATH TO YOUR APP] where you set the --smtp host , --smtp port , --smtp user and --smtp password options with your own values.
- Using Sendmail To enable mail support with Sendmail, invoke dev appserver.py as follows: python3 [ CLOUD SDK ROOT ]/ bin / dev appserver . py --enable sendmail=yes [PATH TO YOUR APP] The local server uses the sendmail command to send email messages with your installation's default configuration.
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD SDK ROOT /bin/dev appserver.py Note the path to the dev appserver.py for later.
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.

### Using the local development server | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)
- Source ID: `feature-recovery-direct-http`
- Final score: 215
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using SMTP To enable mail support with an SMTP server, invoke dev_appserver.py as follows:: python3 [ CLOUD_SDK_ROOT ]/ bin / dev_appserver . py --smtp_host=smtp.example.com --smtp_port=25 \ --smtp_user=ajohnson --smtp_password=k1tt3ns [PATH_TO_YOUR_APP] where you set the --smtp_host , --smtp_port , --smtp_user and --smtp_password options with your own values.
- Using Sendmail To enable mail support with Sendmail, invoke dev_appserver.py as follows: python3 [ CLOUD_SDK_ROOT ]/ bin / dev_appserver . py --enable_sendmail=yes [PATH_TO_YOUR_APP] The local server uses the sendmail command to send email messages with your installation's default configuration.
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev_appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD_SDK_ROOT /bin/dev_appserver.py Note the path to the dev_appserver.py for later.
- Specify the directory path to your app, for example: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py [ PATH_TO_YOUR_APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD_SDK_ROOT /bin/dev_appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD_SDK_ROOT / bin / dev_appserver . py --port=9999 [PATH_TO_YOUR_APP] The local development server is now running and listening for requests.

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- Source ID: `site-docs-reference-4`
- Final score: 207
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using SMTP To enable mail support with an SMTP server, invoke dev appserver.py as follows:: python3 [ CLOUD SDK ROOT ]/ bin / dev appserver . py --smtp host=smtp.example.com --smtp port=25 \ --smtp user=ajohnson --smtp password=k1tt3ns [PATH TO YOUR APP] where you set the --smtp host , --smtp port , --smtp user and --smtp password options with your own values.
- Using Sendmail To enable mail support with Sendmail, invoke dev appserver.py as follows: python3 [ CLOUD SDK ROOT ]/ bin / dev appserver . py --enable sendmail=yes [PATH TO YOUR APP] The local server uses the sendmail command to send email messages with your installation's default configuration.
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD SDK ROOT /bin/dev appserver.py Note the path to the dev appserver.py for later.
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.

