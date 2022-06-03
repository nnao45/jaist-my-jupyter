#!/bin/bash

sleep 60
kubectl scale -n query-api --replicas=4 deployment/query-api-app
sleep 60
kubectl scale -n query-api --replicas=5 deployment/query-api-app
sleep 60
kubectl scale -n query-api --replicas=6 deployment/query-api-app
sleep 60
kubectl scale -n query-api --replicas=7 deployment/query-api-app
sleep 60
kubectl scale -n query-api --replicas=8 deployment/query-api-app
sleep 30
kubectl scale -n query-api --replicas=9 deployment/query-api-app
sleep 30
kubectl scale -n query-api --replicas=10 deployment/query-api-app
sleep 30
kubectl scale -n query-api --replicas=11 deployment/query-api-app
sleep 30
kubectl scale -n query-api --replicas=12 deployment/query-api-app
