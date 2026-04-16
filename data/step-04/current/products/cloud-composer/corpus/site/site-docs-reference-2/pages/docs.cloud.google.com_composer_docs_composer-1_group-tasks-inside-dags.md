---
title: "Group tasks inside DAGs \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/security-practices
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/group-tasks-inside-dags
  title: "Group tasks inside DAGs \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Group tasks inside DAGs
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how you can group tasks in your Airflow pipelines
using the following design patterns:
Grouping tasks in the DAG graph.
Triggering children DAGs from a parent DAG.
Grouping tasks with the TaskGroup operator.
Important: Airflow provides SubDAGs to
address repeating tasks. Despite being a common design pattern for grouping
tasks together, SubDAGs often cause performance and functional issues, and is
deprecated in Airflow.
We recommend to avoid using SubDAGs to group tasks together in your
workflow and prefer one of the alternative approaches described in this page.
Group tasks in the DAG graph
To group tasks in certain phases of your pipeline, you can use relationships
between the tasks in your DAG file.
Consider the following example:
Figure 1. Tasks can be grouped together in an Airflow
DAG (click to enlarge)
In this workflow, tasks op-1 and op-2 run together after the initial
task start . You can achieve this by grouping tasks together with the statement
start >> [task_1, task_2] .
The following example provides a complete implementation of this DAG:
Airflow 2
from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.operators.dummy import DummyOperator
from airflow.utils.dates import days_ago
DAG_NAME = "all_tasks_in_one_dag"
args = { "owner" : "airflow" , "start_date" : days_ago ( 1 ), "schedule_interval" : "@once" }
with DAG ( dag_id = DAG_NAME , default_args = args ) as dag :
start = DummyOperator ( task_id = "start" )
task_1 = BashOperator ( task_id = "op-1" , bash_command = ":" , dag = dag )
task_2 = BashOperator ( task_id = "op-2" , bash_command = ":" , dag = dag )
some_other_task = DummyOperator ( task_id = "some-other-task" )
task_3 = BashOperator ( task_id = "op-3" , bash_command = ":" , dag = dag )
task_4 = BashOperator ( task_id = "op-4" , bash_command = ":" , dag = dag )
end = DummyOperator ( task_id = "end" )
start >> [ task_1 , task_2 ] >> some_other_task >> [ task_3 , task_4 ] >> end
Airflow 1
from airflow import DAG
from airflow.operators.bash_operator import BashOperator
from airflow.operators.dummy_operator import DummyOperator
from airflow.utils.dates import days_ago
DAG_NAME = "all_tasks_in_one_dag"
args = { "owner" : "airflow" , "start_date" : days_ago ( 1 ), "schedule_interval" : "@once" }
with DAG ( dag_id = DAG_NAME , default_args = args ) as dag :
start = DummyOperator ( task_id = "start" )
task_1 = BashOperator ( task_id = "op-1" , bash_command = ":" , dag = dag )
task_2 = BashOperator ( task_id = "op-2" , bash_command = ":" , dag = dag )
some_other_task = DummyOperator ( task_id = "some-other-task" )
task_3 = BashOperator ( task_id = "op-3" , bash_command = ":" , dag = dag )
task_4 = BashOperator ( task_id = "op-4" , bash_command = ":" , dag = dag )
end = DummyOperator ( task_id = "end" )
start >> [ task_1 , task_2 ] >> some_other_task >> [ task_3 , task_4 ] >> end
Trigger children DAGs from a parent DAG
You can trigger one DAG from another DAG with the
TriggerDagRunOperator operator .
Consider the following example:
Figure 2. DAGs can be triggered from within a DAG with
the TriggerDagRunOperator (click to enlarge)
In this workflow, the blocks dag_1 and dag_2 represent a series of tasks
that are grouped together in a separate DAG in the Cloud Composer
environment.
The implementation of this workflow requires two separate DAG files.
The controlling DAG file looks like the following:
Airflow 2
from airflow import DAG
from airflow.operators.dummy import DummyOperator
from airflow.operators.trigger_dagrun import TriggerDagRunOperator
from airflow.utils.dates import days_ago
with DAG (
dag_id = "controller_dag_to_trigger_other_dags" ,
default_args = { "owner" : "airflow" },
start_date = days_ago ( 1 ),
schedule_interval = "@once" ,
) as dag :
start = DummyOperator ( task_id = "start" )
trigger_1 = TriggerDagRunOperator (
task_id = "dag_1" ,
trigger_dag_id = "dag-to-trigger" , # Ensure this equals the dag_id of the DAG to trigger
conf = { "message" : "Hello World" },
)
trigger_2 = TriggerDagRunOperator (
task_id = "dag_2" ,
trigger_dag_id = "dag-to-trigger" , # Ensure this equals the dag_id of the DAG to trigger
conf = { "message" : "Hello World" },
)
some_other_task = DummyOperator ( task_id = "some-other-task" )
end = DummyOperator ( task_id = "end" )
start >> trigger_1 >> some_other_task >> trigger_2 >> end
Airflow 1
from airflow import DAG
from airflow.operators.dagrun_operator import TriggerDagRunOperator
from airflow.operators.dummy_operator import DummyOperator
from airflow.utils.dates import days_ago
with DAG (
dag_id = "controller_dag_to_trigger_other_dags" ,
default_args = { "owner" : "airflow" },
start_date = days_ago ( 1 ),
schedule_interval = "@once" ,
) as dag :
start = DummyOperator ( task_id = "start" )
trigger_1 = TriggerDagRunOperator (
task_id = "dag_1" ,
trigger_dag_id = "dag-to-trigger" , # Ensure this equals the dag_id of the DAG to trigger
conf = { "message" : "Hello World" },
)
trigger_2 = TriggerDagRunOperator (
task_id = "dag_2" ,
trigger_dag_id = "dag-to-trigger" , # Ensure this equals the dag_id of the DAG to trigger
conf = { "message" : "Hello World" },
)
some_other_task = DummyOperator ( task_id = "some-other-task" )
end = DummyOperator ( task_id = "end" )
start >> trigger_1 >> some_other_task >> trigger_2 >> end
Note: The value for trigger_dag_id inside TriggerDagRunOperator
must match the dag_id value of the DAG you want to trigger.
The implementation of the child DAG, which is triggered by the controlling
DAG, looks like the following:
Airflow 2
from airflow import DAG
from airflow.operators.dummy import DummyOperator
from airflow.utils.dates import days_ago
DAG_NAME = "dag-to-trigger"
args = { "owner" : "airflow" , "start_date" : days_ago ( 1 ), "schedule_interval" : "None" }
with DAG ( dag_id = DAG_NAME , default_args = args ) as dag :
dag_task = DummyOperator ( task_id = "dag-task" )
Airflow 1
from airflow import DAG
from airflow.operators.dummy_operator import DummyOperator
from airflow.utils.dates import days_ago
DAG_NAME = "dag-to-trigger"
args = { "owner" : "airflow" , "start_date" : days_ago ( 1 ), "schedule_interval" : "None" }
with DAG ( dag_id = DAG_NAME , default_args = args ) as dag :
dag_task = DummyOperator ( task_id = "dag-task" )
You must upload both DAG files
in your Cloud Composer environment for the DAG to work.
Grouping tasks with the TaskGroup operator
This approach works only in Airflow 2.
You can use the
TaskGroup operator to group tasks
together in your DAG. Tasks defined within a TaskGroup block are still part
of the main DAG.
Consider the following example:
Figure 3. Tasks can be visually grouped together in
the UI with the TaskGroup operator (click to enlarge)
The tasks op-1 and op-2 are grouped together in a block with ID
taskgroup_1 . An implementation of this workflow looks like the following code:
from airflow.models.dag import DAG
from airflow.operators.bash import BashOperator
from airflow.operators.dummy import DummyOperator
from airflow.utils.dates import days_ago
from airflow.utils.task_group import TaskGroup
with DAG ( dag_id = "taskgroup_example" , start_date = days_ago ( 1 )) as dag :
start = DummyOperator ( task_id = "start" )
with TaskGroup ( "taskgroup_1" , tooltip = "task group #1" ) as section_1 :
task_1 = BashOperator ( task_id = "op-1" , bash_command = ":" )
task_2 = BashOperator ( task_id = "op-2" , bash_command = ":" )
with TaskGroup ( "taskgroup_2" , tooltip = "task group #2" ) as section_2 :
task_3 = BashOperator ( task_id = "op-3" , bash_command = ":" )
task_4 = BashOperator ( task_id = "op-4" , bash_command = ":" )
some_other_task = DummyOperator ( task_id = "some-other-task" )
end = DummyOperator ( task_id = "end" )
start >> section_1 >> some_other_task >> section_2 >> end
What's next
Write DAGs
Test DAGs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
