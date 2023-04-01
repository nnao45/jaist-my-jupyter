var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "171828",
        "ok": "171809",
        "ko": "19"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "1024"
    },
    "maxResponseTime": {
        "total": "1564",
        "ok": "1564",
        "ko": "1446"
    },
    "meanResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "1314"
    },
    "standardDeviation": {
        "total": "92",
        "ok": "91",
        "ko": "110"
    },
    "percentiles1": {
        "total": "10",
        "ok": "10",
        "ko": "1316"
    },
    "percentiles2": {
        "total": "13",
        "ok": "13",
        "ko": "1430"
    },
    "percentiles3": {
        "total": "31",
        "ok": "30",
        "ko": "1446"
    },
    "percentiles4": {
        "total": "470",
        "ok": "463",
        "ko": "1446"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 170987,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 615,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 207,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 19,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "356.49",
        "ok": "356.45",
        "ko": "0.039"
    }
},
contents: {
"req_initiation-dc817": {
        type: "REQUEST",
        name: "initiation",
path: "initiation",
pathFormatted: "req_initiation-dc817",
stats: {
    "name": "initiation",
    "numberOfRequests": {
        "total": "171828",
        "ok": "171809",
        "ko": "19"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "1024"
    },
    "maxResponseTime": {
        "total": "1564",
        "ok": "1564",
        "ko": "1446"
    },
    "meanResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "1314"
    },
    "standardDeviation": {
        "total": "92",
        "ok": "91",
        "ko": "110"
    },
    "percentiles1": {
        "total": "10",
        "ok": "10",
        "ko": "1316"
    },
    "percentiles2": {
        "total": "13",
        "ok": "13",
        "ko": "1430"
    },
    "percentiles3": {
        "total": "31",
        "ok": "31",
        "ko": "1446"
    },
    "percentiles4": {
        "total": "470",
        "ok": "463",
        "ko": "1446"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 170987,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 615,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 207,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 19,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "356.49",
        "ok": "356.45",
        "ko": "0.039"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
