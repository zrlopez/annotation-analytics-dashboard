// Application Data
const data = {
  "kpis": {
    "totalThroughput": 15420,
    "throughputChange": "+8.5%",
    "errorRate": 2.3,
    "errorRateChange": "-15.2%",
    "teamEfficiency": 87.5,
    "teamEfficiencyChange": "+5.1%",
    "capacityUtilization": 73.2,
    "capacityUtilizationChange": "+2.8%"
  },
  "throughputData": {
    "hourly": [
      {"time": "00:00", "value": 45},
      {"time": "01:00", "value": 38},
      {"time": "02:00", "value": 42},
      {"time": "03:00", "value": 51},
      {"time": "04:00", "value": 48},
      {"time": "05:00", "value": 55},
      {"time": "06:00", "value": 62},
      {"time": "07:00", "value": 73},
      {"time": "08:00", "value": 89},
      {"time": "09:00", "value": 95},
      {"time": "10:00", "value": 102},
      {"time": "11:00", "value": 98},
      {"time": "12:00", "value": 85},
      {"time": "13:00", "value": 91},
      {"time": "14:00", "value": 97},
      {"time": "15:00", "value": 104},
      {"time": "16:00", "value": 99},
      {"time": "17:00", "value": 88},
      {"time": "18:00", "value": 76},
      {"time": "19:00", "value": 65},
      {"time": "20:00", "value": 54},
      {"time": "21:00", "value": 47},
      {"time": "22:00", "value": 41},
      {"time": "23:00", "value": 38}
    ],
    "daily": [
      {"date": "2025-09-01", "value": 1820},
      {"date": "2025-09-02", "value": 1795},
      {"date": "2025-09-03", "value": 1850},
      {"date": "2025-09-04", "value": 1735},
      {"date": "2025-09-05", "value": 1890},
      {"date": "2025-09-06", "value": 1920},
      {"date": "2025-09-07", "value": 1780},
      {"date": "2025-09-08", "value": 1865},
      {"date": "2025-09-09", "value": 1945},
      {"date": "2025-09-10", "value": 1825},
      {"date": "2025-09-11", "value": 1975},
      {"date": "2025-09-12", "value": 2010},
      {"date": "2025-09-13", "value": 1895},
      {"date": "2025-09-14", "value": 2025},
      {"date": "2025-09-15", "value": 2105},
      {"date": "2025-09-16", "value": 2075},
      {"date": "2025-09-17", "value": 2150},
      {"date": "2025-09-18", "value": 2180},
      {"date": "2025-09-19", "value": 2095},
      {"date": "2025-09-20", "value": 2220},
      {"date": "2025-09-21", "value": 2185},
      {"date": "2025-09-22", "value": 2250},
      {"date": "2025-09-23", "value": 2195},
      {"date": "2025-09-24", "value": 2280},
      {"date": "2025-09-25", "value": 2315}
    ],
    "byProcess": [
      {"process": "Data Processing", "value": 4820, "percentage": 31.3},
      {"process": "Quality Assurance", "value": 3890, "percentage": 25.2},
      {"process": "Customer Support", "value": 3210, "percentage": 20.8},
      {"process": "Development", "value": 2180, "percentage": 14.1},
      {"process": "Administration", "value": 1320, "percentage": 8.6}
    ]
  },
  "errorData": {
    "classification": [
      {"type": "System Errors", "count": 89, "percentage": 38.7},
      {"type": "User Input Errors", "count": 65, "percentage": 28.3},
      {"type": "Network Issues", "count": 34, "percentage": 14.8},
      {"type": "Data Validation", "count": 28, "percentage": 12.2},
      {"type": "Authentication", "count": 14, "percentage": 6.1}
    ],
    "severity": [
      {"level": "Critical", "count": 12, "percentage": 5.2},
      {"level": "High", "count": 45, "percentage": 19.6},
      {"level": "Medium", "count": 98, "percentage": 42.6},
      {"level": "Low", "count": 75, "percentage": 32.6}
    ],
    "trends": [
      {"date": "2025-09-01", "value": 45},
      {"date": "2025-09-02", "value": 42},
      {"date": "2025-09-03", "value": 38},
      {"date": "2025-09-04", "value": 41},
      {"date": "2025-09-05", "value": 35},
      {"date": "2025-09-06", "value": 32},
      {"date": "2025-09-07", "value": 39},
      {"date": "2025-09-08", "value": 36},
      {"date": "2025-09-09", "value": 29},
      {"date": "2025-09-10", "value": 33},
      {"date": "2025-09-11", "value": 27},
      {"date": "2025-09-12", "value": 25},
      {"date": "2025-09-13", "value": 31},
      {"date": "2025-09-14", "value": 28},
      {"date": "2025-09-15", "value": 22},
      {"date": "2025-09-16", "value": 26},
      {"date": "2025-09-17", "value": 20},
      {"date": "2025-09-18", "value": 18},
      {"date": "2025-09-19", "value": 24},
      {"date": "2025-09-20", "value": 19},
      {"date": "2025-09-21", "value": 16},
      {"date": "2025-09-22", "value": 21},
      {"date": "2025-09-23", "value": 15},
      {"date": "2025-09-24", "value": 13},
      {"date": "2025-09-25", "value": 11}
    ],
    "resolutionTime": {
      "average": 4.2,
      "target": 6.0,
      "byType": [
        {"type": "System Errors", "time": 3.8},
        {"type": "User Input Errors", "time": 2.1},
        {"type": "Network Issues", "time": 5.5},
        {"type": "Data Validation", "time": 3.2},
        {"type": "Authentication", "time": 6.8}
      ]
    }
  },
  "teamData": {
    "members": [
      {"name": "Alex Chen", "avatar": "AC", "productivity": 94, "tasksCompleted": 127, "avgTaskTime": 2.3},
      {"name": "Maria Rodriguez", "avatar": "MR", "productivity": 91, "tasksCompleted": 118, "avgTaskTime": 2.6},
      {"name": "David Kim", "avatar": "DK", "productivity": 89, "tasksCompleted": 115, "avgTaskTime": 2.8},
      {"name": "Sarah Johnson", "avatar": "SJ", "productivity": 87, "tasksCompleted": 109, "avgTaskTime": 3.1},
      {"name": "Michael Brown", "avatar": "MB", "productivity": 85, "tasksCompleted": 102, "avgTaskTime": 3.4},
      {"name": "Lisa Wang", "avatar": "LW", "productivity": 83, "tasksCompleted": 98, "avgTaskTime": 3.6}
    ],
    "productivity": [
      {"date": "2025-09-01", "value": 82},
      {"date": "2025-09-02", "value": 85},
      {"date": "2025-09-03", "value": 83},
      {"date": "2025-09-04", "value": 87},
      {"date": "2025-09-05", "value": 89},
      {"date": "2025-09-06", "value": 91},
      {"date": "2025-09-07", "value": 88},
      {"date": "2025-09-08", "value": 90},
      {"date": "2025-09-09", "value": 93},
      {"date": "2025-09-10", "value": 91},
      {"date": "2025-09-11", "value": 94},
      {"date": "2025-09-12", "value": 96},
      {"date": "2025-09-13", "value": 93},
      {"date": "2025-09-14", "value": 95},
      {"date": "2025-09-15", "value": 97},
      {"date": "2025-09-16", "value": 95},
      {"date": "2025-09-17", "value": 98},
      {"date": "2025-09-18", "value": 96},
      {"date": "2025-09-19", "value": 99},
      {"date": "2025-09-20", "value": 97},
      {"date": "2025-09-21", "value": 101},
      {"date": "2025-09-22", "value": 99},
      {"date": "2025-09-23", "value": 102},
      {"date": "2025-09-24", "value": 100},
      {"date": "2025-09-25", "value": 104}
    ],
    "utilization": [
      {"member": "Alex Chen", "mon": 95, "tue": 92, "wed": 88, "thu": 94, "fri": 90},
      {"member": "Maria Rodriguez", "mon": 89, "tue": 93, "wed": 91, "thu": 87, "fri": 94},
      {"member": "David Kim", "mon": 91, "tue": 87, "wed": 93, "thu": 89, "fri": 92},
      {"member": "Sarah Johnson", "mon": 85, "tue": 91, "wed": 87, "thu": 92, "fri": 86},
      {"member": "Michael Brown", "mon": 88, "tue": 84, "wed": 90, "thu": 86, "fri": 89},
      {"member": "Lisa Wang", "mon": 82, "tue": 88, "wed": 85, "thu": 91, "fri": 83}
    ]
  },
  "capacityData": {
    "forecast": [
      {"date": "2025-09-26", "predicted": 75, "actual": null, "confidence": 95},
      {"date": "2025-09-27", "predicted": 78, "actual": null, "confidence": 93},
      {"date": "2025-09-28", "predicted": 81, "actual": null, "confidence": 91},
      {"date": "2025-09-29", "predicted": 79, "actual": null, "confidence": 89},
      {"date": "2025-09-30", "predicted": 83, "actual": null, "confidence": 87},
      {"date": "2025-10-01", "predicted": 86, "actual": null, "confidence": 85},
      {"date": "2025-10-02", "predicted": 84, "actual": null, "confidence": 83},
      {"date": "2025-10-03", "predicted": 88, "actual": null, "confidence": 81},
      {"date": "2025-10-04", "predicted": 92, "actual": null, "confidence": 79},
      {"date": "2025-10-05", "predicted": 89, "actual": null, "confidence": 77}
    ],
    "historical": [
      {"date": "2025-09-16", "predicted": 71, "actual": 73},
      {"date": "2025-09-17", "predicted": 74, "actual": 72},
      {"date": "2025-09-18", "predicted": 76, "actual": 75},
      {"date": "2025-09-19", "predicted": 73, "actual": 74},
      {"date": "2025-09-20", "predicted": 78, "actual": 76},
      {"date": "2025-09-21", "predicted": 81, "actual": 79},
      {"date": "2025-09-22", "predicted": 79, "actual": 78},
      {"date": "2025-09-23", "predicted": 82, "actual": 80},
      {"date": "2025-09-24", "predicted": 85, "actual": 83},
      {"date": "2025-09-25", "predicted": 83, "actual": 82}
    ],
    "bottlenecks": [
      {"resource": "Database Connections", "utilization": 92, "severity": "high"},
      {"resource": "API Rate Limits", "utilization": 78, "severity": "medium"},
      {"resource": "Storage Space", "utilization": 65, "severity": "low"},
      {"resource": "Memory Usage", "utilization": 71, "severity": "medium"},
      {"resource": "CPU Usage", "utilization": 58, "severity": "low"}
    ],
    "recommendations": [
      {"type": "Scale Up", "resource": "Database Connections", "priority": "high", "impact": "Prevent bottlenecks"},
      {"type": "Optimize", "resource": "API Rate Limits", "priority": "medium", "impact": "Improve response time"},
      {"type": "Monitor", "resource": "Memory Usage", "priority": "medium", "impact": "Early warning system"},
      {"type": "Plan", "resource": "Storage Space", "priority": "low", "impact": "Future capacity"}
    ]
  },
  "alertsData": {
    "active": [
      {"id": 1, "message": "High error rate detected in Data Processing", "priority": "high", "timestamp": "2025-09-25 11:45:00", "status": "active"},
      {"id": 2, "message": "Capacity utilization exceeded 90% threshold", "priority": "medium", "timestamp": "2025-09-25 10:30:00", "status": "active"},
      {"id": 3, "message": "Team productivity below target for 2 hours", "priority": "medium", "timestamp": "2025-09-25 09:15:00", "status": "acknowledged"},
      {"id": 4, "message": "Database connection pool near limit", "priority": "high", "timestamp": "2025-09-25 08:20:00", "status": "active"}
    ],
    "history": [
      {"date": "2025-09-25", "total": 12, "resolved": 8, "pending": 4},
      {"date": "2025-09-24", "total": 15, "resolved": 13, "pending": 2},
      {"date": "2025-09-23", "total": 9, "resolved": 9, "pending": 0},
      {"date": "2025-09-22", "total": 11, "resolved": 10, "pending": 1},
      {"date": "2025-09-21", "total": 7, "resolved": 7, "pending": 0}
    ],
    "thresholds": [
      {"metric": "Error Rate", "threshold": 5, "current": 2.3, "status": "ok"},
      {"metric": "Response Time", "threshold": 2000, "current": 1250, "status": "ok"},
      {"metric": "Capacity Utilization", "threshold": 85, "current": 73.2, "status": "ok"},
      {"metric": "Queue Length", "threshold": 100, "current": 45, "status": "ok"}
    ]
  }
};

// Chart colors
const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Global chart instances
let charts = {};

// Application initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// FIX #4: wrap each tab loader in try/catch so a failed init clears the chart
// reference and allows recovery on the next click, instead of silently
// getting stuck with a stale truthy value guarding re-entry.
function tryLoadTab(chartKey, loaderFn) {
    try {
        loaderFn();
    } catch (err) {
        console.error(`Tab load failed for "${chartKey}":`, err);
        charts[chartKey] = null;
    }
}

function initializeApp() {
    initializeTabNavigation();
    updateLastUpdated();
    loadOverviewTab();

    document.querySelector('[data-tab="throughput"]').addEventListener('click', () => {
        if (!charts.hourlyThroughput) {
            setTimeout(() => tryLoadTab('hourlyThroughput', loadThroughputTab), 100);
        }
    });

    document.querySelector('[data-tab="errors"]').addEventListener('click', () => {
        if (!charts.errorClassification) {
            setTimeout(() => tryLoadTab('errorClassification', loadErrorsTab), 100);
        }
    });

    document.querySelector('[data-tab="team"]').addEventListener('click', () => {
        if (!charts.teamProductivity) {
            setTimeout(() => tryLoadTab('teamProductivity', loadTeamTab), 100);
        }
    });

    document.querySelector('[data-tab="capacity"]').addEventListener('click', () => {
        if (!charts.capacityForecast) {
            setTimeout(() => tryLoadTab('capacityForecast', loadCapacityTab), 100);
        }
    });

    document.querySelector('[data-tab="alerts"]').addEventListener('click', () => {
        if (!charts.alertHistory) {
            setTimeout(() => tryLoadTab('alertHistory', loadAlertsTab), 100);
        }
    });

    startRealTimeUpdates();
}

// Tab Navigation
function initializeTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Overview Tab
function loadOverviewTab() {
    document.getElementById('total-throughput').textContent = data.kpis.totalThroughput.toLocaleString();
    document.getElementById('throughput-trend').textContent = data.kpis.throughputChange;
    document.getElementById('error-rate').textContent = data.kpis.errorRate + '%';
    document.getElementById('error-trend').textContent = data.kpis.errorRateChange;
    document.getElementById('team-efficiency').textContent = data.kpis.teamEfficiency + '%';
    document.getElementById('efficiency-trend').textContent = data.kpis.teamEfficiencyChange;
    document.getElementById('capacity-utilization').textContent = data.kpis.capacityUtilization + '%';
    document.getElementById('capacity-trend').textContent = data.kpis.capacityUtilizationChange;

    createMiniChart('throughput-mini-chart', data.throughputData.daily.slice(-7).map(d => d.value));
    createMiniChart('error-mini-chart', data.errorData.trends.slice(-7).map(d => d.value));
    createMiniChart('efficiency-mini-chart', data.teamData.productivity.slice(-7).map(d => d.value));
    createMiniChart('capacity-mini-chart', data.capacityData.historical.slice(-7).map(d => d.actual).filter(v => v !== null));
}

function createMiniChart(canvasId, data) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: data.map((_, i) => i),
            datasets: [{
                data: data,
                borderColor: colors[0],
                backgroundColor: colors[0] + '20',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            elements: {
                line: { borderWidth: 2 },
                point: { radius: 0 }
            }
        }
    });
}

// Throughput Tab
function loadThroughputTab() {
    const hourlyCtx = document.getElementById('hourly-throughput-chart');
    if (!hourlyCtx) return;
    charts.hourlyThroughput = new Chart(hourlyCtx.getContext('2d'), {
        type: 'line',
        data: {
            labels: data.throughputData.hourly.map(d => d.time),
            datasets: [{
                label: 'Throughput',
                data: data.throughputData.hourly.map(d => d.value),
                borderColor: colors[0],
                backgroundColor: colors[0] + '20',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Requests per Hour' }
                }
            }
        }
    });

    const dailyCtx = document.getElementById('daily-throughput-chart');
    if (!dailyCtx) return;
    charts.dailyThroughput = new Chart(dailyCtx.getContext('2d'), {
        type: 'line',
        data: {
            labels: data.throughputData.daily.map(d => new Date(d.date).toLocaleDateString()),
            datasets: [{
                label: 'Daily Throughput',
                data: data.throughputData.daily.map(d => d.value),
                borderColor: colors[1],
                backgroundColor: colors[1] + '20',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Daily Requests' }
                }
            }
        }
    });

    const processCtx = document.getElementById('process-breakdown-chart');
    if (!processCtx) return;
    charts.processBreakdown = new Chart(processCtx.getContext('2d'), {
        type: 'pie',
        data: {
            labels: data.throughputData.byProcess.map(d => d.process),
            datasets: [{
                data: data.throughputData.byProcess.map(d => d.value),
                backgroundColor: colors.slice(0, 5)
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } }
        }
    });

    const peakCtx = document.getElementById('peak-hours-chart');
    if (!peakCtx) return;
    // FIX #3: use .slice() to avoid mutating the original hourly data array
    const peakHours = data.throughputData.hourly.slice().sort((a, b) => b.value - a.value).slice(0, 6);
    charts.peakHours = new Chart(peakCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: peakHours.map(d => d.time),
            datasets: [{
                label: 'Peak Hours',
                data: peakHours.map(d => d.value),
                backgroundColor: colors[2]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Requests per Hour' }
                }
            }
        }
    });
}

// Errors Tab
function loadErrorsTab() {
    const classificationCtx = document.getElementById('error-classification-chart');
    if (classificationCtx) {
        charts.errorClassification = new Chart(classificationCtx, {
            type: 'pie',
            data: {
                labels: data.errorData.classification.map(d => d.type),
                datasets: [{
                    data: data.errorData.classification.map(d => d.count),
                    backgroundColor: colors.slice(0, 5),
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true } },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    const trendCtx = document.getElementById('error-trend-chart');
    if (trendCtx) {
        charts.errorTrend = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: data.errorData.trends.map(d => new Date(d.date).toLocaleDateString()),
                datasets: [{
                    label: 'Daily Errors',
                    data: data.errorData.trends.map(d => d.value),
                    borderColor: colors[2],
                    backgroundColor: colors[2] + '20',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Number of Errors' }
                    }
                }
            }
        });
    }

    const severityCtx = document.getElementById('error-severity-chart');
    if (severityCtx) {
        charts.errorSeverity = new Chart(severityCtx, {
            type: 'doughnut',
            data: {
                labels: data.errorData.severity.map(d => d.level),
                datasets: [{
                    data: data.errorData.severity.map(d => d.count),
                    backgroundColor: [colors[2], colors[5], colors[1], colors[3]],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true } }
                }
            }
        });
    }

    const resolutionCtx = document.getElementById('resolution-time-chart');
    if (resolutionCtx) {
        charts.resolutionTime = new Chart(resolutionCtx, {
            type: 'bar',
            data: {
                labels: data.errorData.resolutionTime.byType.map(d => d.type),
                datasets: [{
                    label: 'Resolution Time (hours)',
                    data: data.errorData.resolutionTime.byType.map(d => d.time),
                    backgroundColor: colors[4]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Hours' }
                    }
                }
            }
        });
    }
}

// Team Tab
function loadTeamTab() {
    renderTeamMembers();

    const productivityCtx = document.getElementById('team-productivity-chart');
    if (productivityCtx) {
        charts.teamProductivity = new Chart(productivityCtx, {
            type: 'line',
            data: {
                labels: data.teamData.productivity.map(d => new Date(d.date).toLocaleDateString()),
                datasets: [{
                    label: 'Team Productivity',
                    data: data.teamData.productivity.map(d => d.value),
                    borderColor: colors[0],
                    backgroundColor: colors[0] + '20',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Productivity Score' }
                    }
                }
            }
        });
    }

    const completionCtx = document.getElementById('task-completion-chart');
    if (completionCtx) {
        charts.taskCompletion = new Chart(completionCtx, {
            type: 'bar',
            data: {
                labels: data.teamData.members.map(d => d.name.split(' ')[0]),
                datasets: [{
                    label: 'Tasks Completed',
                    data: data.teamData.members.map(d => d.tasksCompleted),
                    backgroundColor: colors[1]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: { display: true, text: 'Tasks Completed' }
                    }
                }
            }
        });
    }

    renderUtilizationHeatmap();
}

function renderTeamMembers() {
    const container = document.getElementById('team-members');
    if (container) {
        container.innerHTML = data.teamData.members.map(member => `
            <div class="team-member-card">
                <div class="member-avatar">${member.avatar}</div>
                <div class="member-name">${member.name}</div>
                <div class="member-stats">
                    <div class="stat-row">
                        <span class="stat-label">Productivity</span>
                        <span class="stat-value">${member.productivity}%</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Tasks Completed</span>
                        <span class="stat-value">${member.tasksCompleted}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Avg Task Time</span>
                        <span class="stat-value">${member.avgTaskTime}h</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderUtilizationHeatmap() {
    const container = document.getElementById('utilization-heatmap');
    if (container) {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        let html = `
            <div class="heatmap-header">
                <div class="heatmap-header-cell">Team Member</div>
                ${days.map(day => `<div class="heatmap-header-cell">${day}</div>`).join('')}
            </div>
        `;
        html += data.teamData.utilization.map(member => {
            const values = [member.mon, member.tue, member.wed, member.thu, member.fri];
            return `
                <div class="heatmap-row">
                    <div class="heatmap-label">${member.member.split(' ')[0]}</div>
                    ${values.map(value => {
                        const intensity = value < 85 ? 'low' : value < 95 ? 'medium' : 'high';
                        return `<div class="heatmap-cell ${intensity}">${value}%</div>`;
                    }).join('')}
                </div>
            `;
        }).join('');
        container.innerHTML = html;
    }
}

// Capacity Tab
function loadCapacityTab() {
    const forecastCtx = document.getElementById('capacity-forecast-chart');
    if (forecastCtx) {
        const historicalData = data.capacityData.historical;
        const forecastData = data.capacityData.forecast;
        charts.capacityForecast = new Chart(forecastCtx, {
            type: 'line',
            data: {
                labels: [
                    ...historicalData.map(d => new Date(d.date).toLocaleDateString()),
                    ...forecastData.map(d => new Date(d.date).toLocaleDateString())
                ],
                datasets: [{
                    label: 'Actual',
                    data: [...historicalData.map(d => d.actual), ...new Array(forecastData.length).fill(null)],
                    borderColor: colors[0],
                    backgroundColor: colors[0] + '20',
                    fill: false
                }, {
                    label: 'Predicted',
                    data: [...historicalData.map(d => d.predicted), ...forecastData.map(d => d.predicted)],
                    borderColor: colors[1],
                    backgroundColor: colors[1] + '20',
                    borderDash: [5, 5],
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Capacity Utilization (%)' }
                    }
                }
            }
        });
    }

    const growthCtx = document.getElementById('growth-projection-chart');
    if (growthCtx) {
        charts.growthProjection = new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: data.throughputData.daily.slice(-10).map(d => new Date(d.date).toLocaleDateString()),
                datasets: [{
                    label: 'Current Trend',
                    data: data.throughputData.daily.slice(-10).map(d => d.value),
                    borderColor: colors[0],
                    backgroundColor: colors[0] + '20',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Throughput' }
                    }
                }
            }
        });
    }

    renderBottlenecks();
    renderRecommendations();
}

function renderBottlenecks() {
    const container = document.getElementById('bottlenecks-list');
    if (container) {
        container.innerHTML = data.capacityData.bottlenecks.map(bottleneck => `
            <div class="bottleneck-item">
                <div class="bottleneck-info">
                    <h4>${bottleneck.resource}</h4>
                    <div class="bottleneck-utilization">${bottleneck.utilization}% utilized</div>
                </div>
                <span class="severity-badge ${bottleneck.severity}">${bottleneck.severity}</span>
            </div>
        `).join('');
    }
}

function renderRecommendations() {
    const container = document.getElementById('recommendations-list');
    if (container) {
        container.innerHTML = data.capacityData.recommendations.map(rec => `
            <div class="recommendation-item">
                <div class="recommendation-header">
                    <div class="recommendation-type">${rec.type}: ${rec.resource}</div>
                    <span class="priority-badge ${rec.priority}">${rec.priority}</span>
                </div>
                <div class="recommendation-impact">${rec.impact}</div>
            </div>
        `).join('');
    }
}

// Alerts Tab
function loadAlertsTab() {
    renderActiveAlerts();
    renderThresholds();

    const historyCtx = document.getElementById('alert-history-chart');
    if (historyCtx) {
        charts.alertHistory = new Chart(historyCtx, {
            type: 'bar',
            data: {
                labels: data.alertsData.history.map(d => new Date(d.date).toLocaleDateString()),
                datasets: [{
                    label: 'Total Alerts',
                    data: data.alertsData.history.map(d => d.total),
                    backgroundColor: colors[2]
                }, {
                    label: 'Resolved',
                    data: data.alertsData.history.map(d => d.resolved),
                    backgroundColor: colors[0]
                }, {
                    label: 'Pending',
                    data: data.alertsData.history.map(d => d.pending),
                    backgroundColor: colors[1]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { stacked: true },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        title: { display: true, text: 'Number of Alerts' }
                    }
                }
            }
        });
    }
}

function renderActiveAlerts() {
    const container = document.getElementById('active-alerts');
    if (container) {
        container.innerHTML = data.alertsData.active.map(alert => `
            <div class="alert-item ${alert.priority}">
                <div class="alert-header">
                    <div class="alert-message">${alert.message}</div>
                    <span class="alert-priority ${alert.priority}">${alert.priority}</span>
                </div>
                <div class="alert-timestamp">${alert.timestamp}</div>
            </div>
        `).join('');
    }
}

function renderThresholds() {
    const container = document.getElementById('thresholds-list');
    if (container) {
        container.innerHTML = data.alertsData.thresholds.map(threshold => `
            <div class="threshold-item">
                <div class="threshold-info">
                    <h4>${threshold.metric}</h4>
                    <div class="threshold-values">Current: ${threshold.current} | Threshold: ${threshold.threshold}</div>
                </div>
                <span class="threshold-status">${threshold.status}</span>
            </div>
        `).join('');
    }
}

// Real-time updates
const BASE_THROUGHPUT = 15420;
const BASE_ERROR_RATE = 2.3;
const BASE_EFFICIENCY = 87.5;
const BASE_CAPACITY = 73.2;

function startRealTimeUpdates() {
    setInterval(() => {
        updateLastUpdated();
        simulateDataUpdate();
    }, 5000);
}

function updateLastUpdated() {
    const now = new Date();
    const element = document.getElementById('last-updated');
    if (element) {
        element.textContent = now.toLocaleTimeString();
    }
}

function simulateDataUpdate() {
    // FIX #5: oscillate around base values instead of compounding drift
    const variation = (Math.random() - 0.5) * 0.05;

    data.kpis.totalThroughput = Math.max(0, Math.round(BASE_THROUGHPUT * (1 + variation)));
    data.kpis.errorRate = Math.max(0, parseFloat((BASE_ERROR_RATE * (1 + variation)).toFixed(1)));
    data.kpis.teamEfficiency = Math.max(0, Math.min(100, parseFloat((BASE_EFFICIENCY * (1 + variation)).toFixed(1))));
    data.kpis.capacityUtilization = Math.max(0, Math.min(100, parseFloat((BASE_CAPACITY * (1 + variation)).toFixed(1))));

    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab && activeTab.id === 'overview') {
        const throughputEl = document.getElementById('total-throughput');
        const errorEl = document.getElementById('error-rate');
        const efficiencyEl = document.getElementById('team-efficiency');
        const capacityEl = document.getElementById('capacity-utilization');

        if (throughputEl) throughputEl.textContent = data.kpis.totalThroughput.toLocaleString();
        if (errorEl) errorEl.textContent = data.kpis.errorRate + '%';
        if (efficiencyEl) efficiencyEl.textContent = data.kpis.teamEfficiency + '%';
        if (capacityEl) capacityEl.textContent = data.kpis.capacityUtilization + '%';
    }
}
