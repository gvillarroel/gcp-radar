---
title: "Compare and analyze runs \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs
  title: "Compare and analyze runs \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Compare and analyze runs
Stay organized with collections
Save and categorize content based on your preferences.
You can use the Vertex AI SDK for Python to view Vertex AI Experiments
runs data and compare the runs.
Get runs data
Compare runs
The Google Cloud console provides a visualization of the data
associated with these runs.
View experiment run data
Compare experiment runs
Get experiment runs data
These samples involve getting run metrics, run parameters, runtime series
metrics, artifacts, and classification metrics for a particular experiment run.
Summary metrics
Python
from typing import Dict , Union
from google.cloud import aiplatform
def get_experiment_run_metrics_sample (
run_name : str ,
experiment : Union [ str , aiplatform . Experiment ],
project : str ,
location : str ,
) - > Dict [ str , Union [ float , int ]]:
experiment_run = aiplatform . ExperimentRun (
run_name = run_name , experiment = experiment , project = project , location = location
)
return experiment_run . get_metrics ()
run_name : Specify the appropriate run name for this session.
experiment : The name or instance of this experiment.
You can find your list of experiments in the Google Cloud console by selecting
Experiments in the section nav.
project : . You can find these in the Google Cloud console
welcome page.
location : See List of available locations .
Parameters
Python
from typing import Dict , Union
from google.cloud import aiplatform
def get_experiment_run_params_sample (
run_name : str ,
experiment : Union [ str , aiplatform . Experiment ],
project : str ,
location : str ,
) - > Dict [ str , Union [ float , int , str ]]:
experiment_run = aiplatform . ExperimentRun (
run_name = run_name , experiment = experiment , project = project , location = location
)
return experiment_run . get_params ()
run_name : Specify the appropriate run name for this session.
experiment : The name or instance of this experiment.
You can find your list of experiments in the Google Cloud console by selecting
Experiments in the section nav.
project : . You can find these in the Google Cloud console
welcome page.
location : See List of available locations .
Time series metrics
Python
from typing import Union
from google.cloud import aiplatform
def get_experiment_run_time_series_metric_data_frame_sample (
run_name : str ,
experiment : Union [ str , aiplatform . Experiment ],
project : str ,
location : str ,
) - > "pd.DataFrame" : # noqa: F821
experiment_run = aiplatform . ExperimentRun (
run_name = run_name , experiment = experiment , project = project , location = location
)
return experiment_run . get_time_series_data_frame ()
run_name : Specify the appropriate run name for this session.
experiment : The name or instance of this experiment.
You can find your list of experiments in the Google Cloud console by selecting
Experiments in the section nav.
project : . You can find these in the Google Cloud console
welcome page.
location : See List of available locations .
Artifacts
Python
from typing import List , Union
from google.cloud import aiplatform
from google.cloud.aiplatform.metadata import artifact
def get_experiment_run_artifacts_sample (
run_name : str ,
experiment : Union [ str , aiplatform . Experiment ],
project : str ,
location : str ,
) - > List [ artifact . Artifact ]:
experiment_run = aiplatform . ExperimentRun (
run_name = run_name ,
experiment = experiment ,
project = project ,
location = location ,
)
return experiment_run . get_artifacts ()
run_name : Specify the appropriate run name for this session.
experiment : The name or instance of this experiment.
You can find your list of experiments in the Google Cloud console by selecting
Experiments in the section nav.
project : . You can find these in the Google Cloud console
welcome page.
location : See List of available locations .
Classification metrics
Python
from typing import Dict , List , Union
from google.cloud import aiplatform
def get_experiment_run_classification_metrics_sample (
run_name : str ,
experiment : Union [ str , aiplatform . Experiment ],
project : str ,
location : str ,
) - > List [ Dict [ str , Union [ str , List ]]]:
experiment_run = aiplatform . ExperimentRun (
run_name = run_name , experiment = experiment , project = project , location = location
)
return experiment_run . get_classification_metrics ()
run_name : Specify the appropriate run name for this session.
experiment : The name or instance of this experiment.
You can find your list of experiments in the Google Cloud console by selecting
Experiments in the section nav.
project : . You can find these in the Google Cloud console
welcome page.
location : See List of available locations .
Compare runs
Using the Vertex AI SDK for Python, you can retrieve the data associated with
your experiment. The data for the experiment runs is returned in a DataFrame.
Compare runs
The data for the experiment runs is returned in a DataFrame.
Python
from google.cloud import aiplatform
def get_experiments_data_frame_sample (
experiment : str ,
project : str ,
location : str ,
):
aiplatform . init ( experiment = experiment , project = project , location = location )
experiments_df = aiplatform . get_experiment_df ()
return experiments_df
experiment_name : Provide a name for the experiment.
You can find your list of experiments in the
Google Cloud console by selecting Experiments in the section nav.
project : . You can find these IDs in the Google Cloud console
welcome page.
location : See List of available locations .
Google Cloud console
Use the Google Cloud console to view details of your
experiment runs
and compare the experiment runs to each other.
View experiment run data
In the Google Cloud console, go to the Experiments page.
Go to Experiments .
A list of experiments associated with a project appears.
Select the experiment containing the run that you want to check.
A list of runs,
timeseries data charts, and a metrics and parameters data table appear. Notice, in this
case, three runs are selected, but only two lines appear in the timeseries data charts.
There is no third line because the third experiment run does not have any timeseries data to display.
Click the name of the run to navigate to its details page.
The navigation bar and timeseries data charts appear.
To view metrics, parameters, artifacts, and details for your selected run,
click the respective buttons in the navigation bar.
Metrics
Parameters
Artifacts
To view artifact lineage, click the Open artifact in Metadata Store link. The
lineage graph associated with the run appears.
Details
To share the data with others, use the URLs associated with the views. For example, share
the list of experiment runs associated with an experiment:
Compare experiment runs
You can select runs to compare both within an experiment and across experiments.
In the Google Cloud console, go to the Experiments page.
Go to Experiments .
A list of experiments appears.
Select the experiment containing the runs that you want to compare. A list of runs appears.
Select the experiment runs that you want to compare. Click Compare .
By default, charts appear comparing timeseries metrics of the selected experiment runs.
To add additional runs from any experiment in your project, click Add run .
To share the data with others, use the URLs associated with the views. For example, share
the comparison view of timeseries metrics data:
See Create and manage experiment runs
for how to update the status of a run.
What's next
Track executions and artifacts
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
