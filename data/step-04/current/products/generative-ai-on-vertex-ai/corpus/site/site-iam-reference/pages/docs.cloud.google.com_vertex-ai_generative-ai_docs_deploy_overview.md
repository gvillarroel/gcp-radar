---
title: "Deploy generative AI models \_|\_ Generative AI on Vertex AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview
  title: "Deploy generative AI models \_|\_ Generative AI on Vertex AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
Guides
Send feedback
Deploy generative AI models
Stay organized with collections
Save and categorize content based on your preferences.
Some generative AI models, such as Gemini , have managed APIs and are ready to accept prompts without deployment. For a list of models with managed APIs, see Foundational model APIs .
Other generative AI models must be deployed to an endpoint before
they're ready to accept prompts. There are two types of generative models that
must be deployed:
Tuned models , which you create by tuning a
supported foundation model with your own data.
Generative models that don't have managed APIs . In the
Model Garden, these are models that aren't labeled as
API available or Vertex AI Studio —for example, Llama 2.
When you deploy a model to an endpoint, Vertex AI associates compute
resources and a URI with the model so that it can serve prompt requests.
Deploy a tuned model
Tuned models are automatically uploaded to the
Vertex AI Model Registry
and deployed to a Vertex AI shared public
endpoint . Tuned models don't
appear in the Model Garden because they are tuned with your data.
For more information, see
Overview of model tuning .
Once the endpoint is active , it is ready to accept prompt requests at its URI.
The format of the API call for a tuned model is the same as the foundation model
it was tuned from. For example, if your model is tuned on Gemini, then your
prompt request should follow the Gemini API .
Make sure you send prompt requests to your tuned model's endpoint instead of the
managed API. The tuned model's endpoint is in the format:
https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /endpoints/ ENDPOINT_ID
To get the endpoint ID, see View or manage an endpoint .
For more information on formatting prompt requests, see the
Model API reference .
Deploy a generative model that doesn't have a managed API
To use a model from the Model Garden that doesn't have a managed
API, you must upload the model to Model Registry and
deploy it to an endpoint before you can send prompt requests. This is similar to
uploading and deploying a custom trained model for online prediction
in Vertex AI.
To deploy one of these models, go to the Model Garden and select
the model you'd like to deploy.
Go to Model Garden
Each model card displays one or more of the following deployment options:
Deploy button: Most of the generative models in
the Model Garden have a Deploy button that walks you
through deploying to Vertex AI. If you don't see a Deploy
button, go to the next bullet.
For deployment on Vertex AI, you can use the
suggested settings or modify them. You can also set Advanced deployment
settings to, for example, select a Compute Engine
reservation .
Note: Some models also support deployment to Google Kubernetes Engine which is an
unmanaged solution that provides you even more control. For more
information, see Serve a model with a single GPU in GKE .
Open Notebook button: This option opens a Jupyter notebook. Every model
card displays this option. The Jupyter notebook includes instructions and
sample code for uploading the model to Model Registry,
deploying the model to an endpoint, and sending a prompt request.
Once deployment is complete and the endpoint is active , it is ready to accept
prompt requests at its URI. The format of the API is
predict and the format
of each instance
in the request body depends on the model. For more information, see the
following resources:
Request body for online prediction
Format your input for online prediction
Make sure you have enough machine quota to deploy your model. To view your
current quota or request more quota, in the Google Cloud console, go to the
Quotas page.
Go to Quotas
Then, filter by the quota name Custom Model Serving to see the quotas for
online prediction. To learn more, see View and manage quotas .
Ensure capacity for deployed models with Compute Engine reservations
You can deploy Model Garden models on VM resources that have been
allocated through Compute Engine reservations. Reservations help ensure
that capacity is available when your model predictions requests need them. For
more information, see Use reservations with prediction .
View or manage a model
For tuned models, you can view the model and its tuning job on the Tune and
Distill page in the Google Cloud console.
Go to Tune and Distill
You can also view and manage all of your uploaded models in
Model Registry.
Go to Model Registry
In Model Registry, a tuned model is categorized as a
Large Model , and has labels that specify the foundation model and the pipeline
or tuning job that was used for tuning.
Models that are deployed with the Deploy button will indicate Model Garden
as its Source .
Note that, if the model is updated in the Model Garden, your
uploaded model in Model Registry is not updated.
For more information, see Introduction to Vertex AI Model Registry .
View or manage an endpoint
To view and manage your endpoint, go to the Vertex AI
Online prediction page. By default, the endpoint's name is the same as the
model's name.
Go to Online prediction
For more information, see Deploy a model to an endpoint .
Monitor model endpoint traffic
To learn how to monitor model endpoint traffic, see
Monitor models .
Limitations
A tuned Gemini model can only be deployed to a shared public
endpoint. Deployment to dedicated public endpoints,
Private Service Connect endpoints, and private endpoints isn't
supported.
Pricing
For tuned models, you are billed per token at the same rate as the foundation
model your model was tuned from. There is no cost for the endpoint because
tuning is implemented as a small adapter on top of the foundation model. For
more information, see pricing for Generative AI on Vertex AI .
For models without managed APIs, you are billed for the machine hours that are
used by your endpoint at the same rate as Vertex AI online
predictions. You are not billed per token. For more information, see
pricing for predictions in Vertex AI .
What's next
Overview of model tuning
Model API reference
Deploy a model to an endpoint
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
