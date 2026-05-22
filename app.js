// ─── Dynamic date helper ───────────────────────────────────────────────────
// Generates an array of N date strings ending today, going back N-1 days.
function buildDateSeries(n) {
    const dates = [];
    for (let i = n - 1; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dates.push(d.toISOString().slice(0, 10));
    }
    return dates;
}

const dailyDates   = buildDateSeries(25);
const trendDates   = buildDateSeries(25);
const prodDates    = buildDateSeries(25);
const historyDates = buildDateSeries(10);
const forecastDates = Array.from({ length: 10 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d.toISOString().slice(0, 10);
});
const alertHistoryDates = buildDateSeries(5);

// ─── Application Data ──────────────────────────────────────────────────────
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
      {"time": "00:00", "value": 45}, {"time": "01:00", "value": 38},
      {"time": "02:00", "value": 42}, {"time": "03:00", "value": 51},
      {"time": "04:00", "value": 48}, {"time": "05:00", "value": 55},
      {"time": "06:00", "value": 62}, {"time": "07:00", "value": 73},
      {"time": "08:00", "value": 89}, {"time": "09:00", "value": 95},
      {"time": "10:00", "value": 102},{"time": "11:00", "value": 98},
      {"time": "12:00", "value": 85}, {"time": "13:00", "value": 91},
      {"time": "14:00", "value": 97}, {"time": "15:00", "value": 104},
      {"time": "16:00", "value": 99}, {"time": "17:00", "value": 88},
      {"time": "18:00", "value": 76}, {"time": "19:00", "value": 65},
      {"time": "20:00", "value": 54}, {"time": "21:00", "value": 47},
      {"time": "22:00", "value": 41}, {"time": "23:00", "value": 38}
    ],
    "daily": dailyDates.map((date, i) => ({ date, value: 1820 + i * 20 + Math.round(Math.sin(i) * 30) })),
    "byProcess": [
      {"process": "Data Processing",  "value": 4820, "percentage": 31.3},
      {"process": "Quality Assurance","value": 3890, "percentage": 25.2},
      {"process": "Customer Support", "value": 3210, "percentage": 20.8},
      {"process": "Development",      "value": 2180, "percentage": 14.1},
      {"process": "Administration",   "value": 1320, "percentage": 8.6}
    ]
  },
  "errorData": {
    "classification": [
      {"type": "System Errors",    "count": 89, "percentage": 38.7},
      {"type": "User Input Errors","count": 65, "percentage": 28.3},
      {"type": "Network Issues",   "count": 34, "percentage": 14.8},
      {"type": "Data Validation",  "count": 28, "percentage": 12.2},
      {"type": "Authentication",   "count": 14, "percentage": 6.1}
    ],
    "severity": [
      {"level": "Critical", "count": 12, "percentage": 5.2},
      {"level": "High",     "count": 45, "percentage": 19.6},
      {"level": "Medium",   "count": 98, "percentage": 42.6},
      {"level": "Low",      "count": 75, "percentage": 32.6}
    ],
    "trends": trendDates.map((date, i) => ({ date, value: Math.max(5, 45 - i * 1.4 + Math.round(Math.sin(i) * 4)) })),
    "resolutionTime": {
      "average": 4.2, "target": 6.0,
      "byType": [
        {"type": "System Errors",    "time": 3.8},
        {"type": "User Input Errors","time": 2.1},
        {"type": "Network Issues",   "time": 5.5},
        {"type": "Data Validation",  "time": 3.2},
        {"type": "Authentication",   "time": 6.8}
      ]
    }
  },
  "teamData": {
    "members": [
      {"name": "Alex Chen",       "avatar": "AC", "productivity": 94, "tasksCompleted": 127, "avgTaskTime": 2.3},
      {"name": "Maria Rodriguez", "avatar": "MR", "productivity": 91, "tasksCompleted": 118, "avgTaskTime": 2.6},
      {"name": "David Kim",       "avatar": "DK", "productivity": 89, "tasksCompleted": 115, "avgTaskTime": 2.8},
      {"name": "Sarah Johnson",   "avatar": "SJ", "productivity": 87, "tasksCompleted": 109, "avgTaskTime": 3.1},
      {"name": "Michael Brown",   "avatar": "MB", "productivity": 85, "tasksCompleted": 102, "avgTaskTime": 3.4},
      {"name": "Lisa Wang",       "avatar": "LW", "productivity": 83, "tasksCompleted":  98, "avgTaskTime": 3.6}
    ],
    "productivity": prodDates.map((date, i) => ({ date, value: Math.min(104, 82 + i * 0.9 + Math.round(Math.sin(i) * 2)) })),
    "utilization": [
      {"member": "Alex Chen",       "mon": 95, "tue": 92, "wed": 88, "thu": 94, "fri": 90},
      {"member": "Maria Rodriguez", "mon": 89, "tue": 93, "wed": 91, "thu": 87, "fri": 94},
      {"member": "David Kim",       "mon": 91, "tue": 87, "wed": 93, "thu": 89, "fri": 92},
      {"member": "Sarah Johnson",   "mon": 85, "tue": 91, "wed": 87, "thu": 92, "fri": 86},
      {"member": "Michael Brown",   "mon": 88, "tue": 84, "wed": 90, "thu": 86, "fri": 89},
      {"member": "Lisa Wang",       "mon": 82, "tue": 88, "wed": 85, "thu": 91, "fri": 83}
    ]
  },
  "capacityData": {
    "forecast": forecastDates.map((date, i) => ({
        date, predicted: 75 + i * 1.5 + Math.round(Math.sin(i) * 2), actual: null,
        confidence: 95 - i * 2
    })),
    "historical": historyDates.map((date, i) => ({
        date,
        predicted: 71 + i * 1.5,
        actual: 73 + i * 1.2 + Math.round(Math.sin(i) * 1.5)
    })),
    "bottlenecks": [
      {"resource": "Database Connections", "utilization": 92, "severity": "high"},
      {"resource": "API Rate Limits",      "utilization": 78, "severity": "medium"},
      {"resource": "Storage Space",        "utilization": 65, "severity": "low"},
      {"resource": "Memory Usage",         "utilization": 71, "severity": "medium"},
      {"resource": "CPU Usage",            "utilization": 58, "severity": "low"}
    ],
    "recommendations": [
      {"type": "Scale Up", "resource": "Database Connections", "priority": "high",   "impact": "Prevent bottlenecks"},
      {"type": "Optimize", "resource": "API Rate Limits",      "priority": "medium", "impact": "Improve response time"},
      {"type": "Monitor",  "resource": "Memory Usage",         "priority": "medium", "impact": "Early warning system"},
      {"type": "Plan",     "resource": "Storage Space",        "priority": "low",    "impact": "Future capacity"}
    ]
  },
  "alertsData": {
    "active": [
      {"id": 1, "message": "High error rate detected in Data Processing",  "priority": "high",   "timestamp": new Date(Date.now() - 3600000).toLocaleString(),  "status": "active"},
      {"id": 2, "message": "Capacity utilization exceeded 90% threshold",   "priority": "medium", "timestamp": new Date(Date.now() - 7200000).toLocaleString(),  "status": "active"},
      {"id": 3, "message": "Team productivity below target for 2 hours",    "priority": "medium", "timestamp": new Date(Date.now() - 10800000).toLocaleString(), "status": "acknowledged"},
      {"id": 4, "message": "Database connection pool near limit",            "priority": "high",   "timestamp": new Date(Date.now() - 14400000).toLocaleString(), "status": "active"}
    ],
    "history": alertHistoryDates.map((date, i) => ({
        date,
        total:    [12, 15, 9, 11, 7][i],
        resolved: [8,  13, 9, 10, 7][i],
        pending:  [4,   2, 0,  1, 0][i]
    })),
    "thresholds": [
      {"metric": "Error Rate",           "threshold": 5,    "current": 2.3,  "status": "ok"},
      {"metric": "Response Time",        "threshold": 2000, "current": 1250, "status": "ok"},
      {"metric": "Capacity Utilization", "threshold": 85,   "current": 73.2, "status": "ok"},
      {"metric": "Queue Length",         "threshold": 100,  "current": 45,   "status": "ok"}
    ]
  }
};

// ─── Chart colors ──────────────────────────────────────────────────────────
const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// ─── Global chart instances ────────────────────────────────────────────────
let charts = {};

function destroyChart(key) {
    if (charts[key]) {
        charts[key].destroy();
        charts[key] = null;
    }
}

function getCanvas(id) {
    const el = document.getElementById(id);
    if (!el) { console.error(`Canvas element not found: #${id}`); return null; }
    return el;
}

function tryLoadTab(chartKey, loaderFn) {
    try {
        loaderFn();
    } catch (err) {
        console.error(`Tab load failed for "${chartKey}":`, err);
        charts[chartKey] = null;
    }
}

// ─── Theme toggle ──────────────────────────────────────────────────────────
function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const html = document.documentElement;
    btn.addEventListener('click', () => {
        const isDark = html.getAttribute('data-color-scheme') === 'dark';
        html.setAttribute('data-color-scheme', isDark ? 'light' : 'dark');
        btn.textContent = isDark ? '🌙 Dark' : '☀️ Light';
    });
}

// ─── CSV Export ────────────────────────────────────────────────────────────
function exportThroughputCSV() {
    const rows = [['Date', 'Daily Throughput']];
    data.throughputData.daily.forEach(d => rows.push([d.date, d.value]));
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'throughput_data.csv';
    a.click();
    URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initializeTabNavigation();
    initThemeToggle();
    updateLastUpdated();
    tryLoadTab('overviewTab', loadOverviewTab);

    const exportBtn = document.getElementById('export-csv-btn');
    if (exportBtn) exportBtn.addEventListener('click', exportThroughputCSV);

    const tabListeners = [
        { tab: 'throughput', key: 'hourlyThroughput',    loader: loadThroughputTab },
        { tab: 'errors',     key: 'errorClassification', loader: loadErrorsTab },
        { tab: 'team',       key: 'teamProductivity',    loader: loadTeamTab },
        { tab: 'capacity',   key: 'capacityForecast',    loader: loadCapacityTab },
        { tab: 'alerts',     key: 'alertHistory',        loader: loadAlertsTab },
    ];
    tabListeners.forEach(({ tab, key, loader }) => {
        const btn = document.querySelector(`[data-tab="${tab}"]`);
        if (btn) btn.addEventListener('click', () => {
            if (!charts[key]) setTimeout(() => tryLoadTab(key, loader), 100);
        });
    });

    startRealTimeUpdates();
}

function initializeTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

function applyTrendColor(elementId, changeValue, invert = false) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.classList.remove('trend-positive', 'trend-negative');
    const isNegative = changeValue && changeValue.startsWith('-');
    const isBad = invert ? !isNegative : isNegative;
    el.classList.add(isBad ? 'trend-negative' : 'trend-positive');
}

function loadOverviewTab() {
    document.getElementById('total-throughput').textContent = data.kpis.totalThroughput.toLocaleString();
    document.getElementById('throughput-trend').textContent = data.kpis.throughputChange;
    document.getElementById('error-rate').textContent = data.kpis.errorRate + '%';
    document.getElementById('error-trend').textContent = data.kpis.errorRateChange;
    document.getElementById('team-efficiency').textContent = data.kpis.teamEfficiency + '%';
    document.getElementById('efficiency-trend').textContent = data.kpis.teamEfficiencyChange;
    document.getElementById('capacity-utilization').textContent = data.kpis.capacityUtilization + '%';
    document.getElementById('capacity-trend').textContent = data.kpis.capacityUtilizationChange;
    applyTrendColor('throughput-trend', data.kpis.throughputChange);
    applyTrendColor('error-trend', data.kpis.errorRateChange, true);
    applyTrendColor('efficiency-trend', data.kpis.teamEfficiencyChange);
    applyTrendColor('capacity-trend', data.kpis.capacityUtilizationChange);

    createMiniChart('throughput-mini-chart', data.throughputData.daily.slice(-7).map(d => d.value));
    createMiniChart('error-mini-chart', data.errorData.trends.slice(-7).map(d => d.value));
    createMiniChart('efficiency-mini-chart', data.teamData.productivity.slice(-7).map(d => d.value));
    createMiniChart('capacity-mini-chart', data.capacityData.historical.slice(-7).map(d => d.actual).filter(v => v !== null));
}

function createMiniChart(canvasId, chartData) {
    const ctx = getCanvas(canvasId);
    if (!ctx) return;
    destroyChart(canvasId);
    charts[canvasId] = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: chartData.map((_, i) => i),
            datasets: [{
                data: chartData,
                borderColor: colors[0],
                backgroundColor: colors[0] + '20',
                borderWidth: 2, fill: true, tension: 0.4,
                pointRadius: 0, pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } },
            elements: { line: { borderWidth: 2 }, point: { radius: 0 } }
        }
    });
}

function loadThroughputTab() {
    const hourlyCtx = getCanvas('hourly-throughput-chart');
    if (!hourlyCtx) return;
    destroyChart('hourlyThroughput');
    charts.hourlyThroughput = new Chart(hourlyCtx.getContext('2d'), {
        type: 'line',
        data: {
            labels: data.throughputData.hourly.map(d => d.time),
            datasets: [{ label: 'Throughput', data: data.throughputData.hourly.map(d => d.value), borderColor: colors[0], backgroundColor: colors[0] + '20', fill: true, tension: 0.4 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Requests per Hour' } } } }
    });

    const dailyCtx = getCanvas('daily-throughput-chart');
    if (!dailyCtx) return;
    destroyChart('dailyThroughput');
    charts.dailyThroughput = new Chart(dailyCtx.getContext('2d'), {
        type: 'line',
        data: {
            labels: data.throughputData.daily.map(d => new Date(d.date).toLocaleDateString()),
            datasets: [{ label: 'Daily Throughput', data: data.throughputData.daily.map(d => d.value), borderColor: colors[1], backgroundColor: colors[1] + '20', fill: true, tension: 0.4 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Daily Requests' } } } }
    });

    const processCtx = getCanvas('process-breakdown-chart');
    if (!processCtx) return;
    destroyChart('processBreakdown');
    charts.processBreakdown = new Chart(processCtx.getContext('2d'), {
        type: 'pie',
        data: { labels: data.throughputData.byProcess.map(d => d.process), datasets: [{ data: data.throughputData.byProcess.map(d => d.value), backgroundColor: colors.slice(0, 5) }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
    });

    const peakCtx = getCanvas('peak-hours-chart');
    if (!peakCtx) return;
    destroyChart('peakHours');
    const peakHours = data.throughputData.hourly.slice().sort((a, b) => b.value - a.value).slice(0, 6);
    charts.peakHours = new Chart(peakCtx.getContext('2d'), {
        type: 'bar',
        data: { labels: peakHours.map(d => d.time), datasets: [{ label: 'Peak Hours', data: peakHours.map(d => d.value), backgroundColor: colors[2] }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Requests per Hour' } } } }
    });
}

function loadErrorsTab() {
    const classificationCtx = getCanvas('error-classification-chart');
    if (classificationCtx) {
        destroyChart('errorClassification');
        charts.errorClassification = new Chart(classificationCtx, {
            type: 'pie',
            data: { labels: data.errorData.classification.map(d => d.type), datasets: [{ data: data.errorData.classification.map(d => d.count), backgroundColor: colors.slice(0, 5), borderWidth: 2, borderColor: '#ffffff' }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true } }, tooltip: { callbacks: { label: function(context) { const v = context.parsed; const t = context.dataset.data.reduce((a, b) => a + b, 0); return `${context.label}: ${v} (${((v/t)*100).toFixed(1)}%)`; } } } } }
        });
    }

    const trendCtx = getCanvas('error-trend-chart');
    if (trendCtx) {
        destroyChart('errorTrend');
        charts.errorTrend = new Chart(trendCtx, {
            type: 'line',
            data: { labels: data.errorData.trends.map(d => new Date(d.date).toLocaleDateString()), datasets: [{ label: 'Daily Errors', data: data.errorData.trends.map(d => d.value), borderColor: colors[2], backgroundColor: colors[2] + '20', fill: true, tension: 0.4 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Number of Errors' } } } }
        });
    }

    const severityCtx = getCanvas('error-severity-chart');
    if (severityCtx) {
        destroyChart('errorSeverity');
        charts.errorSeverity = new Chart(severityCtx, {
            type: 'doughnut',
            data: { labels: data.errorData.severity.map(d => d.level), datasets: [{ data: data.errorData.severity.map(d => d.count), backgroundColor: [colors[2], colors[5], colors[1], colors[3]], borderWidth: 2, borderColor: '#ffffff' }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true } } } }
        });
    }

    const resolutionCtx = getCanvas('resolution-time-chart');
    if (resolutionCtx) {
        destroyChart('resolutionTime');
        charts.resolutionTime = new Chart(resolutionCtx, {
            type: 'bar',
            data: { labels: data.errorData.resolutionTime.byType.map(d => d.type), datasets: [{ label: 'Resolution Time (hours)', data: data.errorData.resolutionTime.byType.map(d => d.time), backgroundColor: colors[4] }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Hours' } } } }
        });
    }
}

function loadTeamTab() {
    renderTeamMembers();

    const productivityCtx = getCanvas('team-productivity-chart');
    if (productivityCtx) {
        destroyChart('teamProductivity');
        charts.teamProductivity = new Chart(productivityCtx, {
            type: 'line',
            data: { labels: data.teamData.productivity.map(d => new Date(d.date).toLocaleDateString()), datasets: [{ label: 'Team Productivity', data: data.teamData.productivity.map(d => d.value), borderColor: colors[0], backgroundColor: colors[0] + '20', fill: true, tension: 0.4 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 110, title: { display: true, text: 'Productivity Score (100 = target)' } } } }
        });
    }

    const completionCtx = getCanvas('task-completion-chart');
    if (completionCtx) {
        destroyChart('taskCompletion');
        charts.taskCompletion = new Chart(completionCtx, {
            type: 'bar',
            data: { labels: data.teamData.members.map(d => d.name.split(' ')[0]), datasets: [{ label: 'Tasks Completed', data: data.teamData.members.map(d => d.tasksCompleted), backgroundColor: colors[1] }] },
            options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, title: { display: true, text: 'Tasks Completed' } } } }
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
                    <div class="stat-row"><span class="stat-label">Productivity</span><span class="stat-value">${member.productivity}%</span></div>
                    <div class="stat-row"><span class="stat-label">Tasks Completed</span><span class="stat-value">${member.tasksCompleted}</span></div>
                    <div class="stat-row"><span class="stat-label">Avg Task Time</span><span class="stat-value">${member.avgTaskTime}h</span></div>
                </div>
            </div>
        `).join('');
    }
}

function renderUtilizationHeatmap() {
    const container = document.getElementById('utilization-heatmap');
    if (container) {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        let html = `<div class="heatmap-header"><div class="heatmap-header-cell">Team Member</div>${days.map(d => `<div class="heatmap-header-cell">${d}</div>`).join('')}</div>`;
        html += data.teamData.utilization.map(member => {
            const values = [member.mon, member.tue, member.wed, member.thu, member.fri];
            return `<div class="heatmap-row"><div class="heatmap-label">${member.member.split(' ')[0]}</div>${values.map(v => { const cls = v < 85 ? 'low' : v < 95 ? 'medium' : 'high'; return `<div class="heatmap-cell ${cls}">${v}%</div>`; }).join('')}</div>`;
        }).join('');
        container.innerHTML = html;
    }
}

function loadCapacityTab() {
    const forecastCtx = getCanvas('capacity-forecast-chart');
    if (forecastCtx) {
        destroyChart('capacityForecast');
        const historicalData = data.capacityData.historical;
        const forecastData   = data.capacityData.forecast;
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
                    borderColor: colors[0], backgroundColor: colors[0] + '20', fill: false
                }, {
                    label: 'Predicted',
                    data: [...historicalData.map(d => d.predicted), ...forecastData.map(d => d.predicted)],
                    borderColor: colors[1], backgroundColor: colors[1] + '20',
                    borderDash: [5, 5], fill: false
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, title: { display: true, text: 'Capacity Utilization (%)' } } } }
        });
    }

    const growthCtx = getCanvas('growth-projection-chart');
    if (growthCtx) {
        destroyChart('growthProjection');
        charts.growthProjection = new Chart(growthCtx, {
            type: 'line',
            data: { labels: data.throughputData.daily.slice(-10).map(d => new Date(d.date).toLocaleDateString()), datasets: [{ label: 'Current Trend', data: data.throughputData.daily.slice(-10).map(d => d.value), borderColor: colors[0], backgroundColor: colors[0] + '20', fill: true, tension: 0.4 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Throughput' } } } }
        });
    }

    renderBottlenecks();
    renderRecommendations();
}

function renderBottlenecks() {
    const container = document.getElementById('bottlenecks-list');
    if (container) {
        container.innerHTML = data.capacityData.bottlenecks.map(b => `
            <div class="bottleneck-item">
                <div class="bottleneck-info"><h4>${b.resource}</h4><div class="bottleneck-utilization">${b.utilization}% utilized</div></div>
                <span class="severity-badge ${b.severity}">${b.severity}</span>
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

function loadAlertsTab() {
    renderActiveAlerts();
    renderThresholds();

    const historyCtx = getCanvas('alert-history-chart');
    if (historyCtx) {
        destroyChart('alertHistory');
        charts.alertHistory = new Chart(historyCtx, {
            type: 'bar',
            data: {
                labels: data.alertsData.history.map(d => new Date(d.date).toLocaleDateString()),
                datasets: [
                    { label: 'Total Alerts', data: data.alertsData.history.map(d => d.total),    backgroundColor: colors[2] },
                    { label: 'Resolved',     data: data.alertsData.history.map(d => d.resolved), backgroundColor: colors[0] },
                    { label: 'Pending',      data: data.alertsData.history.map(d => d.pending),  backgroundColor: colors[1] }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true, title: { display: true, text: 'Number of Alerts' } } } }
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
        container.innerHTML = data.alertsData.thresholds.map(t => `
            <div class="threshold-item">
                <div class="threshold-info">
                    <h4>${t.metric}</h4>
                    <div class="threshold-values">Current: ${t.current} | Threshold: ${t.threshold}</div>
                </div>
                <span class="threshold-status">${t.status}</span>
            </div>
        `).join('');
    }
}

// ─── Real-time simulation ──────────────────────────────────────────────────
const BASE_THROUGHPUT = 15420;
const BASE_ERROR_RATE = 2.3;
const BASE_EFFICIENCY = 87.5;
const BASE_CAPACITY   = 73.2;

function startRealTimeUpdates() {
    setInterval(() => { updateLastUpdated(); simulateDataUpdate(); }, 5000);
}

function updateLastUpdated() {
    const el = document.getElementById('last-updated');
    if (el) el.textContent = new Date().toLocaleTimeString();
}

function simulateDataUpdate() {
    const v1 = (Math.random() - 0.5) * 0.05;
    const v2 = (Math.random() - 0.5) * 0.05;
    const v3 = (Math.random() - 0.5) * 0.05;
    const v4 = (Math.random() - 0.5) * 0.05;
    const prevThroughput = data.kpis.totalThroughput;
    const prevErrorRate  = data.kpis.errorRate;
    const prevEfficiency = data.kpis.teamEfficiency;
    const prevCapacity   = data.kpis.capacityUtilization;
    data.kpis.totalThroughput     = Math.max(0, Math.round(BASE_THROUGHPUT * (1 + v1)));
    data.kpis.errorRate           = Math.max(0, parseFloat((BASE_ERROR_RATE * (1 + v2)).toFixed(2)));
    data.kpis.teamEfficiency      = Math.max(0, Math.min(100, parseFloat((BASE_EFFICIENCY * (1 + v3)).toFixed(1))));
    data.kpis.capacityUtilization = Math.max(0, Math.min(100, parseFloat((BASE_CAPACITY   * (1 + v4)).toFixed(1))));
    const fmt = (curr, prev) => { const d = ((curr - prev) / (prev || 1)) * 100; return (d >= 0 ? '+' : '') + d.toFixed(1) + '%'; };
    data.kpis.throughputChange          = fmt(data.kpis.totalThroughput,      prevThroughput);
    data.kpis.errorRateChange           = fmt(data.kpis.errorRate,            prevErrorRate);
    data.kpis.teamEfficiencyChange      = fmt(data.kpis.teamEfficiency,       prevEfficiency);
    data.kpis.capacityUtilizationChange = fmt(data.kpis.capacityUtilization,  prevCapacity);

    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab && activeTab.id === 'overview') {
        const t = document.getElementById('total-throughput');
        const e = document.getElementById('error-rate');
        const ef = document.getElementById('team-efficiency');
        const cp = document.getElementById('capacity-utilization');
        if (t)  t.textContent  = data.kpis.totalThroughput.toLocaleString();
        if (e)  e.textContent  = data.kpis.errorRate + '%';
        if (ef) ef.textContent = data.kpis.teamEfficiency + '%';
        if (cp) cp.textContent = data.kpis.capacityUtilization + '%';
        const tt = document.getElementById('throughput-trend');
        const et = document.getElementById('error-trend');
        const ft = document.getElementById('efficiency-trend');
        const ct = document.getElementById('capacity-trend');
        if (tt) tt.textContent = data.kpis.throughputChange;
        if (et) et.textContent = data.kpis.errorRateChange;
        if (ft) ft.textContent = data.kpis.teamEfficiencyChange;
        if (ct) ct.textContent = data.kpis.capacityUtilizationChange;
        applyTrendColor('throughput-trend', data.kpis.throughputChange);
        applyTrendColor('error-trend', data.kpis.errorRateChange, true);
        applyTrendColor('efficiency-trend', data.kpis.teamEfficiencyChange);
        applyTrendColor('capacity-trend', data.kpis.capacityUtilizationChange);
    }
    // Sync alert threshold current values to live KPIs
    data.alertsData.thresholds.forEach(t => {
        if (t.metric === 'Error Rate')           { t.current = data.kpis.errorRate;           t.status = data.kpis.errorRate           >= t.threshold ? 'warning' : 'ok'; }
        if (t.metric === 'Capacity Utilization') { t.current = data.kpis.capacityUtilization; t.status = data.kpis.capacityUtilization >= t.threshold ? 'warning' : 'ok'; }
    });
}
