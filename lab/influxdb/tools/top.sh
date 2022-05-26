#!/bin/bash

while true;
do
        sleep 1;
        kubectl top node | tail -n +2 | awk 'BEGIN{ FS = " " }{ print "influx write --debug --bucket lab --precision s '\''kubeTopNode,node="$1" cpu="substr($2, 1, length($2)-1)",cpu_usage="(substr($3, 1, length($3)-1) * 0.01)",mem="substr($4, 1, length($4)-2)",mem_usage="(substr($5, 1, length($5)-1)) * 0.01" '$(date "+%s")''\''"}' | awk '{system($0)}';
        kubectl top pod -n query-api  | tail -n +2 | awk 'BEGIN{ FS = " " }{ print "influx write --debug --bucket lab --precision s '\''kubeTopPod,pod="$1" cpu="substr($2, 1, length($2)-1)",mem="substr($3, 1, length($3)-2)" '$(date "+%s")''\''"}' | awk '{system($0)}';
done
