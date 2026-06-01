// --- Constants & Data ---
const STORAGE_KEY = 'UTILITY_DATA_APP_V1';

const defaultData = [
    // 2022 Data
    { date: "2022-1", wasser_haus: 439.971, praxis_blau: 23.69, praxis_rot: 20.158, strom_haus: 71496.1, strom_praxis: 54242.2, gas: 15921.655 },
    { date: "2022-2", wasser_haus: 447.852, praxis_blau: 23.71, praxis_rot: 20.211, strom_haus: 71689.9, strom_praxis: 54409.1, gas: 16188.88 },
    { date: "2022-3", wasser_haus: 454.762, praxis_blau: 23.755, praxis_rot: 20.246, strom_haus: 71874.8, strom_praxis: 54516.4, gas: 16365.2 },
    { date: "2022-4", wasser_haus: 462.822, praxis_blau: 23.834, praxis_rot: 20.283, strom_haus: 72081.7, strom_praxis: 54687, gas: 16496.06 },
    { date: "2022-5", wasser_haus: 472.083, praxis_blau: 23.901, praxis_rot: 20.33, strom_haus: 72270, strom_praxis: 54848.3, gas: 16550.08 },
    { date: "2022-6", wasser_haus: 479.992, praxis_blau: 23.961, praxis_rot: 20.368, strom_haus: 72545.9, strom_praxis: 56006.9, gas: 16553 },
    { date: "2022-7", wasser_haus: 494.551, praxis_blau: 24.123, praxis_rot: 20.457, strom_haus: 73385.1, strom_praxis: 56133.4, gas: 16568.12 },
    { date: "2022-8", wasser_haus: 504.147, praxis_blau: 24.238, praxis_rot: 20.528, strom_haus: 73507, strom_praxis: 56262.3, gas: 16573.08 },
    { date: "2022-9", wasser_haus: 512.981, praxis_blau: 24.316, praxis_rot: 20.575, strom_haus: 73679.5, strom_praxis: 56395.7, gas: 16597.08 },
    { date: "2022-10", wasser_haus: 522.011, praxis_blau: 24.414, praxis_rot: 20.644, strom_haus: 73866.6, strom_praxis: 56511.1, gas: 17116.308 },
    { date: "2022-11", wasser_haus: 530.313, praxis_blau: 0.078, praxis_rot: 0.059, strom_haus: 74157.9, strom_praxis: 56718.4, gas: 17378 },
    { date: "2022-12", wasser_haus: 537.915, praxis_blau: 0.165, praxis_rot: 0.106, strom_haus: 74431.1, strom_praxis: 56860.9, gas: 17826.96 },
    // 2023 Data
    { date: "2023-1", wasser_haus: 545.565, praxis_blau: 0.243, praxis_rot: 0.174, strom_haus: 74681.7, strom_praxis: 57076.6, gas: 18274.6 },
    { date: "2023-2", wasser_haus: 553.479, praxis_blau: 0.316, praxis_rot: 0.23, strom_haus: 74900.5, strom_praxis: 57239.5, gas: 18873 },
    { date: "2023-3", wasser_haus: 560.844, praxis_blau: 0.383, praxis_rot: 0.28, strom_haus: 75116.8, strom_praxis: 57375.3, gas: 19131 },
    { date: "2023-4", wasser_haus: 569.215, praxis_blau: 0.445, praxis_rot: 0.334, strom_haus: 75319.4, strom_praxis: 57523.6, gas: 19342 },
    { date: "2023-5", wasser_haus: 576.81, praxis_blau: 0.536, praxis_rot: 0.399, strom_haus: 75525.7, strom_praxis: 57713.8, gas: 19416 },
    { date: "2023-6", wasser_haus: 585.808, praxis_blau: 0.58, praxis_rot: 0.457, strom_haus: 75695.5, strom_praxis: 57906.1, gas: 19430 },
    { date: "2023-7", wasser_haus: 596.111, praxis_blau: 0.613, praxis_rot: 0.48, strom_haus: 75924, strom_praxis: 58097, gas: 19452 },
    { date: "2023-8", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-9", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-10", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-11", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-12", wasser_haus: 649.071, praxis_blau: 1.185, praxis_rot: 0.887, strom_haus: 77508.4, strom_praxis: 59378.1, gas: 20059 },
    // 2024 Data
    { date: "2024-1", wasser_haus: 658.118, praxis_blau: 1.309, praxis_rot: 0.976, strom_haus: 77805.1, strom_praxis: 59616.4, gas: 20261 },
    { date: "2024-2", wasser_haus: 666.38, praxis_blau: 1.488, praxis_rot: 1.054, strom_haus: 78248.6, strom_praxis: 59918.7, gas: 20455 },
    { date: "2024-3", wasser_haus: 676.088, praxis_blau: 1.55, praxis_rot: 1.11, strom_haus: 78583.5, strom_praxis: 60232.8, gas: 20686.08 },
    { date: "2024-4", wasser_haus: 687.27, praxis_blau: 1.636, praxis_rot: 1.189, strom_haus: 78913.4, strom_praxis: 60592, gas: 20793.06 },
    { date: "2024-5", wasser_haus: 701.125, praxis_blau: 1.765, praxis_rot: 1.282, strom_haus: 79222.2, strom_praxis: 60927.9, gas: 20831.35 },
    { date: "2024-6", wasser_haus: 715.510, praxis_blau: 1.91, praxis_rot: 1.377, strom_haus: 79535.2, strom_praxis: 61253.9, gas: 20838.38 },
    { date: "2024-7", wasser_haus: 726.361, praxis_blau: 2.065, praxis_rot: 1.458, strom_haus: 79812.8, strom_praxis: 61505.3, gas: 20842.98 },
    { date: "2024-8", wasser_haus: 741.056, praxis_blau: 2.128, praxis_rot: 1.536, strom_haus: 80165.7, strom_praxis: 61833.2, gas: 20853.30 },
    { date: "2024-9", wasser_haus: 749.520, praxis_blau: 2.164, praxis_rot: 1.583, strom_haus: 80447.1, strom_praxis: 62058.4, gas: 20880.598 },
    { date: "2024-10", wasser_haus: 757.291, praxis_blau: 2.193, praxis_rot: 1.621, strom_haus: 80721.5, strom_praxis: 62291.6, gas: 21105.158 },
    { date: "2024-11", wasser_haus: 766.452, praxis_blau: 2.226, praxis_rot: 1.666, strom_haus: 81010.5, strom_praxis: 62518.3, gas: 21464.382 },
    { date: "2024-12", wasser_haus: 774.965, praxis_blau: 2.259, praxis_rot: 1.706, strom_haus: 81308.2, strom_praxis: 62800.7, gas: 21919.296 },
    // 2025 Data
    { date: "2025-1", wasser_haus: 783.562, praxis_blau: 2.290, praxis_rot: 1.745, strom_haus: 81577.6, strom_praxis: 63065.7, gas: 22288.583 },
    { date: "2025-2", wasser_haus: 792.930, praxis_blau: 2.321, praxis_rot: 1.783, strom_haus: 81853.4, strom_praxis: 63273.7, gas: 22606.353 },
    { date: "2025-3", wasser_haus: 802.215, praxis_blau: 2.353, praxis_rot: 1.821, strom_haus: 82128.8, strom_praxis: 63484.2, gas: 22839.467 },
    { date: "2025-4", wasser_haus: 811.620, praxis_blau: 2.385, praxis_rot: 1.859, strom_haus: 82402.0, strom_praxis: 63692.0, gas: 22976.979 },
    { date: "2025-5", wasser_haus: 822.462, praxis_blau: 2.433, praxis_rot: 1.902, strom_haus: 82646.2, strom_praxis: 63931.1, gas: 23022.006 },
    { date: "2025-6", wasser_haus: 833.582, praxis_blau: 2.531, praxis_rot: 1.967, strom_haus: 82959.0, strom_praxis: 64188.7, gas: 23055.267 },
    { date: "2025-7", wasser_haus: 845.839, praxis_blau: 2.622, praxis_rot: 2.033, strom_haus: 83225.6, strom_praxis: 64431.6, gas: 23088.528 },
    { date: "2025-8", wasser_haus: 858.096, praxis_blau: 2.713, praxis_rot: 2.099, strom_haus: 83491.2, strom_praxis: 64674.5, gas: 23121.789 },
    { date: "2025-9", wasser_haus: 870.354, praxis_blau: 2.805, praxis_rot: 2.164, strom_haus: 83756.8, strom_praxis: 64917.4, gas: 23155.050 },
    { date: "2025-10", wasser_haus: 882.611, praxis_blau: 2.896, praxis_rot: 2.230, strom_haus: 84022.5, strom_praxis: 65160.3, gas: 23463.404 },
    { date: "2025-11", wasser_haus: 894.869, praxis_blau: 2.987, praxis_rot: 2.296, strom_haus: 84287.6, strom_praxis: 65402.2, gas: 23771.759 },
    { date: "2025-12", wasser_haus: 907.126, praxis_blau: 3.079, praxis_rot: 2.362, strom_haus: 84552.7, strom_praxis: 65644.1, gas: 24080.113 }
];

// App State
// App State
let rawData = [];
// State needed for tabs
let currentYear = null;
let activeView = 'dashboard';

// DOM Elements
const views = {
    dashboard: document.getElementById('view-dashboard'),
    charts: document.getElementById('view-charts'),
    data: document.getElementById('view-data'),
    settings: document.getElementById('view-settings')
};

const navItems = document.querySelectorAll('.nav-item');
const fab = document.getElementById('fab');
const pageTitle = document.getElementById('pageTitle');
const refreshBtn = document.getElementById('refreshBtn');

// Charts
let charts = {};

// Colors
const colors = {
    blue: 'rgba(54, 162, 235, 0.7)',
    blueBorder: 'rgb(54, 162, 235)',
    red: 'rgba(255, 99, 132, 0.7)',
    redBorder: 'rgb(255, 99, 132)',
    green: 'rgba(75, 192, 192, 0.7)',
    greenBorder: 'rgb(75, 192, 192)',
    orange: 'rgba(255, 159, 64, 0.7)',
    orangeBorder: 'rgb(255, 159, 64)',
    purple: 'rgba(153, 102, 255, 0.7)',
    purpleBorder: 'rgb(153, 102, 255)'
};

// --- Initialization ---

function init() {
    loadData();
    setupNavigation();
    setupCharts();
    renderDashboard();
    renderDataView();
    setupSettings();
}

function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        rawData = JSON.parse(saved);
    } else {
        rawData = JSON.parse(JSON.stringify(defaultData));
    }
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rawData));
    // Re-render
    renderDashboard();
    updateCharts();
}

// --- Navigation ---

function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = item.getAttribute('data-target').replace('view-', '');
            navigateTo(targetView);
        });
    });

    // Initial route
    navigateTo('dashboard');
}

function navigateTo(viewId) {
    // Hide all views
    Object.values(views).forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });

    // Show target view
    const target = views[viewId];
    if (target) {
        activeView = viewId;
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);

        // Update UI state
        navItems.forEach(item => {
            const t = item.getAttribute('data-target').replace('view-', '');
            if (t === viewId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update Title
        const titles = {
            dashboard: '대시보드',
            charts: '차트',
            data: '데이터 관리',
            settings: '설정'
        };
        pageTitle.textContent = titles[viewId];

        // FAB
        if (viewId === 'data') {
            fab.style.display = 'flex';
        } else {
            fab.style.display = 'none';
        }

        // Refresh charts if entering chart view
        if (viewId === 'charts') {
            updateCharts();
        }
    }
}

// --- Logic ---

function normalizeDate(dateStr) {
    const parts = dateStr.split('-');
    if (parts.length === 2) {
        return `${parts[0]}-${parseInt(parts[1], 10)}`;
    }
    return dateStr;
}

function getSafeValue(val) {
    return val === null || val === undefined || val === "" ? null : parseFloat(val);
}

function calculateConsumption(data) {
    // Sort logic
    data.sort((a, b) => {
        const [yA, mA] = a.date.split('-').map(Number);
        const [yB, mB] = b.date.split('-').map(Number);
        return yA - yB || mA - mB;
    });

    const labels = [];
    const consumption = {
        wasser_haus: [],
        praxis_blau: [],
        praxis_rot: [],
        strom_haus: [],
        strom_praxis: [],
        gas: []
    };

    for (let i = 1; i < data.length; i++) {
        const prev = data[i - 1];
        const curr = data[i];

        labels.push(curr.date);

        const safeSub = (currVal, prevVal) => {
            const c = getSafeValue(currVal);
            const p = getSafeValue(prevVal);
            if (c !== null && p !== null) {
                const diff = c - p;
                return diff >= 0 ? diff : 0; // Prevent negative
            }
            return null;
        };

        consumption.wasser_haus.push(safeSub(curr.wasser_haus, prev.wasser_haus));
        consumption.praxis_blau.push(safeSub(curr.praxis_blau, prev.praxis_blau));
        consumption.praxis_rot.push(safeSub(curr.praxis_rot, prev.praxis_rot));
        consumption.strom_haus.push(safeSub(curr.strom_haus, prev.strom_haus));
        consumption.strom_praxis.push(safeSub(curr.strom_praxis, prev.strom_praxis));
        consumption.gas.push(safeSub(curr.gas, prev.gas));
    }

    return { labels, consumption };
}

// --- Views Rendering ---

function renderDashboard() {
    const { labels, consumption } = calculateConsumption(rawData);


    // Find last valid index for each metric to show latest data
    // Simply showing the last available calculated data point

    // Find last index that has at least one valid consumption value
    let lastIdx = -1;
    for (let i = labels.length - 1; i >= 0; i--) {
        if (consumption.wasser_haus[i] !== null ||
            consumption.strom_haus[i] !== null ||
            consumption.gas[i] !== null) {
            lastIdx = i;
            break;
        }
    }

    if (lastIdx === -1 && labels.length > 0) lastIdx = labels.length - 1;

    // Formatting helper
    const fmt = (num, unit) => num !== null ? `${num.toFixed(1)} ${unit}` : '--';
    const getLabel = (idx) => (idx >= 0 && labels[idx]) ? labels[idx] : '--';

    const dashboardHTML = `
        <div class="summary-card">
            <h2>최근 수도 사용량 (${labels[lastIdx] || '--'})</h2>
            <p class="summary-amount">${fmt(consumption.wasser_haus[lastIdx], 'm³')}</p>
            <div class="summary-details">
                <span>Praxis Blau: ${fmt(consumption.praxis_blau[lastIdx], 'm³')}</span>
                <span>Praxis Rot: ${fmt(consumption.praxis_rot[lastIdx], 'm³')}</span>
            </div>
        </div>

        <div class="summary-card" style="background-color: #fff4e5; color: #663c00;">
            <h2>최근 전기 사용량</h2>
            <p class="summary-amount">${fmt(consumption.strom_haus[lastIdx], 'kWh')}</p>
            <div class="summary-details">
                <span>Haus</span>
                <span>Praxis: ${fmt(consumption.strom_praxis[lastIdx], 'kWh')}</span>
            </div>
        </div>

        <div class="summary-card" style="background-color: #ffebee; color: #c62828;">
            <h2>최근 가스 사용량</h2>
            <p class="summary-amount">${fmt(consumption.gas[lastIdx], 'm³')}</p>
            <div class="summary-details">
                <span>Gas Header</span>
            </div>
        </div>
    `;

    views.dashboard.innerHTML = dashboardHTML;
}

// --- Charts ---

let chartYear = null;

function setupCharts() {
    // Get unique years
    const years = [...new Set(rawData.map(d => d.date.split('-')[0]))].sort().reverse();
    if (!chartYear && years.length > 0) chartYear = years[0];

    // Tab buttons for charts (Type + Year)
    const chartTabsHTML = `
        <div class="chart-controls">
            <div class="chart-tabs type-tabs">
                <button class="chip active" data-chart="water">수도</button>
                <button class="chip" data-chart="electricity">전기</button>
                <button class="chip" data-chart="gas">가스</button>
            </div>
            <div class="chart-tabs year-tabs">
                ${years.map(y => `<button class="chip ${y === chartYear ? 'active' : ''}" data-year="${y}">${y}</button>`).join('')}
                <button class="chip ${chartYear === 'all' ? 'active' : ''}" data-year="all">전체</button>
            </div>
        </div>
        <div class="chart-container">
            <canvas id="mainChart"></canvas>
        </div>
    `;
    views.charts.innerHTML = chartTabsHTML;

    // Styles for Chips (Updated)
    if (!document.getElementById('chart-styles')) {
        const style = document.createElement('style');
        style.id = 'chart-styles';
        style.innerHTML = `
            .chart-controls {
                margin-bottom: 16px;
            }
            .chart-tabs {
                display: flex;
                gap: 8px;
                overflow-x: auto;
                padding-bottom: 8px;
            }
            .type-tabs {
                margin-bottom: 8px;
                border-bottom: 1px solid var(--md-sys-color-outline);
                padding-bottom: 8px;
            }
            .chip {
                border: 1px solid var(--md-sys-color-outline);
                background: transparent;
                color: var(--md-sys-color-on-surface);
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 13px;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.2s;
            }
            .chip.active {
                background: var(--md-sys-color-primary);
                color: var(--md-sys-color-on-primary);
                border-color: var(--md-sys-color-primary);
            }
            .chart-container {
                background: #fff;
                padding: 10px;
                border-radius: 16px;
                box-shadow: var(--elevation-1);
                height: 50vh; /* Responsive height */
                min-height: 300px;
            }
        `;
        document.head.appendChild(style);
    }

    // Event listeners for Type chips
    const typeChips = views.charts.querySelectorAll('.type-tabs .chip');
    typeChips.forEach(chip => {
        chip.addEventListener('click', () => {
            typeChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            updateCharts();
        });
    });

    // Event listeners for Year chips
    const yearChips = views.charts.querySelectorAll('.year-tabs .chip');
    yearChips.forEach(chip => {
        chip.addEventListener('click', () => {
            yearChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            chartYear = chip.dataset.year;
            updateCharts();
        });
    });
}

function updateCharts() {
    const activeTypeChip = views.charts.querySelector('.type-tabs .chip.active');
    if (activeTypeChip) {
        renderChart(activeTypeChip.dataset.chart);
    }
}

function renderChart(type) {
    const ctx = document.getElementById('mainChart').getContext('2d');

    // Filter data by year if selected
    let filteredData = rawData;
    if (chartYear && chartYear !== 'all') {
        filteredData = rawData.filter(d => d.date.startsWith(chartYear));
    }

    // Recalculate consumption for the filtered window
    // Note: Simple filtering might break "diff" calculation for the first month of the year
    // because it needs the previous month's value.
    // Better approach: Calculate ALL consumption first, then slice.
    const { labels, consumption } = calculateConsumption(rawData);

    // Create indices of data points that match the year
    const indices = [];
    labels.forEach((label, idx) => {
        if (chartYear === 'all' || label.startsWith(chartYear)) {
            indices.push(idx);
        }
    });

    const displayLabels = indices.map(i => labels[i]);

    // Destroy existing chart if any
    if (charts.main) {
        charts.main.destroy();
    }

    let datasets = [];
    let yAxisTitle = '';

    const getData = (sourceArr) => indices.map(i => sourceArr[i]);

    if (type === 'water') {
        yAxisTitle = '수도 (m³)';
        datasets = [
            { label: 'Haus', data: getData(consumption.wasser_haus), borderColor: colors.blueBorder, backgroundColor: colors.blue, tension: 0.1 },
            { label: 'Praxis Blau', data: getData(consumption.praxis_blau), borderColor: colors.greenBorder, backgroundColor: colors.green, tension: 0.1 },
            { label: 'Praxis Rot', data: getData(consumption.praxis_rot), borderColor: colors.redBorder, backgroundColor: colors.red, tension: 0.1 }
        ];
    } else if (type === 'electricity') {
        yAxisTitle = '전기 (kWh)';
        datasets = [
            { label: 'Haus', data: getData(consumption.strom_haus), borderColor: colors.orangeBorder, backgroundColor: colors.orange, tension: 0.1 },
            { label: 'Praxis', data: getData(consumption.strom_praxis), borderColor: colors.purpleBorder, backgroundColor: colors.purple, tension: 0.1 }
        ];
    } else if (type === 'gas') {
        yAxisTitle = '가스 (m³)';
        datasets = [
            { label: 'Gas', data: getData(consumption.gas), borderColor: colors.redBorder, backgroundColor: colors.red, tension: 0.1 }
        ];
    }

    charts.main = new Chart(ctx, {
        type: 'line',
        data: {
            labels: displayLabels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        font: { size: 11 }
                    }
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: yAxisTitle
                    },
                    beginAtZero: true
                },
                x: {
                    rotation: 0, // Prevent label rotation if possible
                    ticks: {
                        maxRotation: 45,
                        minRotation: 0,
                        autoSkip: true,
                        maxTicksLimit: 12
                    }
                }
            }
        }
    });
}

// --- Data Management View ---

function renderDataView() {
    // Year selector
    const years = [...new Set(rawData.map(d => d.date.split('-')[0]))].sort().reverse();
    if (!currentYear) currentYear = years[0];

    const yearTabsHTML = `
        <div class="chart-tabs">
            ${years.map(y => `<button class="chip ${y === currentYear ? 'active' : ''}" data-year="${y}">${y}</button>`).join('')}
        </div>
        <div class="data-list"></div>
    `;

    views.data.innerHTML = yearTabsHTML;

    // Chips logic
    const chips = views.data.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            currentYear = chip.dataset.year;
            renderDataView(); // Re-render logic to update active class and list
        });
    });

    const listContainer = views.data.querySelector('.data-list');
    const yearData = rawData.filter(d => d.date.startsWith(currentYear));

    yearData.forEach((row, index) => {
        // Find actual index in rawData to update
        const rawIndex = rawData.findIndex(d => d.date === row.date);

        const card = document.createElement('div');
        card.className = 'summary-card data-card';
        card.style.backgroundColor = '#ffffff';
        card.style.color = '#000';

        card.innerHTML = `
            <div class="data-header" style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <h3 style="margin:0;">${row.date}</h3>
                <span class="material-icons-round" style="color:var(--md-sys-color-primary);">edit</span>
            </div>
            <div class="data-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size:12px;">
                <div>수도: ${row.wasser_haus || '-'}</div>
                <div>전기: ${row.strom_haus || '-'}</div>
                <div>가스: ${row.gas || '-'}</div>
            </div>
        `;

        // Edit Click
        card.addEventListener('click', () => {
            // Simple Prompt for now - can be upgraded to Modal
            // For a better UX, I'd implement a full edit modal, but let's do a simple one for PWA MVP
            openEditModal(rawIndex);
        });

        listContainer.appendChild(card);
    });
}

function openEditModal(index) {
    const row = rawData[index];
    // Create modal if not exists
    let modal = document.getElementById('editModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'editModal';
        modal.className = 'modal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); z-index: 1000;
            display: flex; align-items: center; justify-content: center;
        `;
        document.body.appendChild(modal);
    }

    // Loading Overlay for OCR
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.style.display = 'none';
    loadingOverlay.innerHTML = `
        <div class="spinner"></div>
        <div>숫자 인식 중...</div>
        <div style="font-size:12px; margin-top:10px; opacity:0.8;">잠시만 기다려주세요</div>
    `;
    modal.appendChild(loadingOverlay);

    const fields = [
        { key: 'wasser_haus', label: 'Wasser Haus' },
        { key: 'praxis_blau', label: 'Praxis Blau' },
        { key: 'praxis_rot', label: 'Praxis Rot' },
        { key: 'strom_haus', label: 'Strom Haus' },
        { key: 'strom_praxis', label: 'Strom Praxis' },
        { key: 'gas', label: 'Gas' }
    ];

    modal.innerHTML = `
        <div style="background:#fff; padding:20px; border-radius:16px; width:90%; max-width:400px; max-height:80vh; overflow-y:auto; position:relative;">
            <h2 style="margin-top:0;">수정: ${row.date}</h2>
            <form id="editForm">
                ${fields.map(f => `
                    <div style="margin-bottom:12px;">
                        <label style="display:block; font-size:12px; color:#666;">${f.label}</label>
                        <div class="input-group">
                            <div class="input-wrapper">
                                <input type="number" step="0.001" name="${f.key}" id="input-${f.key}" value="${row[f.key] || ''}" 
                                style="width:100%; padding:8px; border:1px solid #ddd; border-radius:4px;">
                            </div>
                            <button type="button" class="icon-btn scan-btn" data-target="input-${f.key}">
                                <span class="material-icons-round">photo_camera</span>
                            </button>
                        </div>
                    </div>
                `).join('')}
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button type="button" id="cancelEdit" style="flex:1; padding:10px; border:none; background:#eee; border-radius:8px;">취소</button>
                    <button type="submit" style="flex:1; padding:10px; border:none; background:var(--md-sys-color-primary); color:#fff; border-radius:8px;">저장</button>
                </div>
            </form>
            <input type="file" id="ocrInput" accept="image/*" style="display:none;">
        </div>
    `;

    // Re-append loading overlay to the new innerHTML structure (or specifically to body/modal)
    // Actually, setting innerHTML wipes it. Let's append it to body or handle it differently.
    // Better: Append it to document.body temporarily or just inside the modal wrapper after innerHTML.
    document.body.appendChild(loadingOverlay);

    // Logic
    const ocrInput = modal.querySelector('#ocrInput');
    let currentTargetInputId = null;

    // Camera Buttons
    modal.querySelectorAll('.scan-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentTargetInputId = btn.dataset.target;
            ocrInput.click();
        });
    });

    // OCR Handler
    ocrInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Create Crop Modal
        let cropModal = document.getElementById('cropModal');
        if (!cropModal) {
            cropModal = document.createElement('div');
            cropModal.id = 'cropModal';
            cropModal.className = 'crop-modal';
            document.body.appendChild(cropModal);
        }

        const imageUrl = URL.createObjectURL(file);
        cropModal.innerHTML = `
            <div class="crop-header">
                <h3>계량기 숫자 크롭</h3>
                <p style="color: #ffb300; font-weight: bold; margin-top: 5px; font-size: 12px; line-height: 1.4; padding: 0 8px;">
                    ① 먼저 아래 버튼으로 이미지를 회전하여 숫자판을 가로로 맞추세요<br>
                    ② 그 다음 크롭 상자를 숫자 영역에만 딱 맞게 조절하세요
                </p>
                <div style="display:flex; align-items:center; justify-content:center; gap:8px; margin-top:10px; flex-wrap: wrap;">
                    <button type="button" id="rotateLeft5" style="background:rgba(255,255,255,0.2); border:none; color:white; padding:7px 12px; border-radius:8px; font-size:20px; cursor:pointer;" title="5° 반시계 회전">↺</button>
                    <button type="button" id="rotateLeft1" style="background:rgba(255,255,255,0.15); border:none; color:white; padding:7px 10px; border-radius:8px; font-size:13px; cursor:pointer;" title="1° 반시계 회전">-1°</button>
                    <span id="rotateAngleLabel" style="color:white; font-size:13px; min-width:40px; text-align:center;">0°</span>
                    <button type="button" id="rotateRight1" style="background:rgba(255,255,255,0.15); border:none; color:white; padding:7px 10px; border-radius:8px; font-size:13px; cursor:pointer;" title="1° 시계 회전">+1°</button>
                    <button type="button" id="rotateRight5" style="background:rgba(255,255,255,0.2); border:none; color:white; padding:7px 12px; border-radius:8px; font-size:20px; cursor:pointer;" title="5° 시계 회전">↻</button>
                    <button type="button" id="rotateReset" style="background:rgba(255,100,100,0.4); border:none; color:white; padding:7px 10px; border-radius:8px; font-size:12px; cursor:pointer;">초기화</button>
                </div>
            </div>
            <div class="crop-container">
                <img id="cropImage" src="${imageUrl}">
            </div>
            <div class="crop-footer">
                <button type="button" class="crop-cancel-btn" id="cropCancel">취소</button>
                <button type="button" class="crop-confirm-btn" id="cropConfirm">인식 시작</button>
            </div>
        `;

        const cropImage = cropModal.querySelector('#cropImage');
        let cropper;
        let currentAngle = 0;

        const updateAngleLabel = () => {
            cropModal.querySelector('#rotateAngleLabel').textContent = `${currentAngle}°`;
        };

        cropImage.onload = () => {
            cropper = new Cropper(cropImage, {
                aspectRatio: NaN, // Free-form crop after rotation
                viewMode: 1,
                autoCropArea: 0.4, // Small initial box — user will resize to digits only
                dragMode: 'move',
                background: false,
                rotatable: true
            });
        };

        // Rotation button event listeners
        cropModal.querySelector('#rotateLeft5').addEventListener('click', () => {
            currentAngle -= 5;
            cropper && cropper.rotateTo(currentAngle);
            updateAngleLabel();
        });
        cropModal.querySelector('#rotateLeft1').addEventListener('click', () => {
            currentAngle -= 1;
            cropper && cropper.rotateTo(currentAngle);
            updateAngleLabel();
        });
        cropModal.querySelector('#rotateRight1').addEventListener('click', () => {
            currentAngle += 1;
            cropper && cropper.rotateTo(currentAngle);
            updateAngleLabel();
        });
        cropModal.querySelector('#rotateRight5').addEventListener('click', () => {
            currentAngle += 5;
            cropper && cropper.rotateTo(currentAngle);
            updateAngleLabel();
        });
        cropModal.querySelector('#rotateReset').addEventListener('click', () => {
            currentAngle = 0;
            cropper && cropper.rotateTo(0);
            updateAngleLabel();
        });

        const cleanupCrop = () => {
            if (cropper) {
                cropper.destroy();
            }
            cropModal.remove();
            URL.revokeObjectURL(imageUrl);
            ocrInput.value = '';
        };

        cropModal.querySelector('#cropCancel').onclick = cleanupCrop;

        cropModal.querySelector('#cropConfirm').onclick = async () => {
            if (!cropper) return;

            // Show Loading with debug image containers
            loadingOverlay.style.display = 'flex';
            loadingOverlay.innerHTML = `
                <div class="spinner"></div>
                <div>이미지 전처리 중...</div>
                <div style="margin-top:15px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:8px;">
                    <div style="font-size:11px; opacity:0.7;">인식기 전달 이미지 (상단: 일반 / 하단: 반전)</div>
                    <img id="ocrDebugImgNormal" style="max-width:200px; max-height:80px; border:1px solid #555; background:#fff; border-radius:4px;">
                    <img id="ocrDebugImgInverted" style="max-width:200px; max-height:80px; border:1px solid #555; background:#fff; border-radius:4px;">
                </div>
                <div style="font-size:12px; margin-top:15px; opacity:0.8;">잠시만 기다려주세요</div>
            `;

            // Get Cropped Canvas (Limit size to ensure fast processing)
            const canvasNormal = cropper.getCroppedCanvas({ maxWidth: 800 });
            if (!canvasNormal) {
                cleanupCrop();
                alert('이미지 크롭에 실패했습니다.');
                return;
            }

            // Close crop UI immediately so user sees loading state
            cleanupCrop();

            try {
                // --- Strategy: Skip manual binarization, let Tesseract handle it internally ---
                // Manual binarization was destroying the grayscale gradient that Tesseract needs.
                // Instead: upscale the raw crop and send both original color + grayscale to Tesseract.

                const W = canvasNormal.width;
                const H = canvasNormal.height;

                // Upscale 3x for better digit pixel density
                const SCALE = 3;
                const canvasUpscaled = document.createElement('canvas');
                canvasUpscaled.width = W * SCALE;
                canvasUpscaled.height = H * SCALE;
                const ctxUp = canvasUpscaled.getContext('2d');
                ctxUp.imageSmoothingEnabled = false;
                ctxUp.drawImage(canvasNormal, 0, 0, W * SCALE, H * SCALE);

                // Grayscale version of upscaled canvas (helps Tesseract on colored backgrounds)
                const canvasGray = document.createElement('canvas');
                canvasGray.width = W * SCALE;
                canvasGray.height = H * SCALE;
                const ctxGray = canvasGray.getContext('2d');
                ctxGray.drawImage(canvasUpscaled, 0, 0);
                const imgDataGray = ctxGray.getImageData(0, 0, canvasGray.width, canvasGray.height);
                const dgray = imgDataGray.data;
                for (let i = 0; i < dgray.length; i += 4) {
                    const lum = 0.299 * dgray[i] + 0.587 * dgray[i+1] + 0.114 * dgray[i+2];
                    dgray[i] = dgray[i+1] = dgray[i+2] = lum;
                }
                ctxGray.putImageData(imgDataGray, 0, 0);

                const imgUpscaled = canvasUpscaled.toDataURL('image/png');
                const imgGrayscale = canvasGray.toDataURL('image/png');

                // Show debug preview: upscaled color (top) + grayscale (bottom)
                loadingOverlay.querySelector('#ocrDebugImgNormal').src = imgUpscaled;
                loadingOverlay.querySelector('#ocrDebugImgInverted').src = imgGrayscale;

                loadingOverlay.querySelector('div:nth-child(2)').textContent = '숫자 인식 중...';

                const worker = await Tesseract.createWorker('eng');

                // Run 4 attempts: upscaled color PSM6, upscaled color PSM7, grayscale PSM6, grayscale PSM7
                const attempts = [
                    { img: imgUpscaled,   psm: '7' },
                    { img: imgGrayscale,  psm: '7' },
                    { img: imgUpscaled,   psm: '6' },
                    { img: imgGrayscale,  psm: '6' },
                ];

                const extractNumber = (rawText) => {
                    const text = rawText.replace(/,/g, '.').trim();
                    const matches = text.match(/[\d]+(\.[\d]+)?/g);
                    if (matches && matches.length > 0) {
                        return matches
                            .filter(n => n.length >= 1 && n !== '.')
                            .sort((a, b) => b.length - a.length)[0] || '';
                    }
                    return '';
                };

                let bestMatch = '';
                let bestConfidence = -1;

                for (const attempt of attempts) {
                    await worker.setParameters({
                        tessedit_char_whitelist: '0123456789.',
                        tessedit_pageseg_mode: attempt.psm
                    });
                    const res = await worker.recognize(attempt.img);
                    const num = extractNumber(res.data.text);
                    console.log(`PSM ${attempt.psm} raw: "${res.data.text}" → extracted: "${num}" conf: ${res.data.confidence}`);

                    if (num.length > bestMatch.length) {
                        bestMatch = num;
                        bestConfidence = res.data.confidence;
                    } else if (num.length === bestMatch.length && res.data.confidence > bestConfidence) {
                        bestMatch = num;
                        bestConfidence = res.data.confidence;
                    }
                }

                await worker.terminate();

                if (bestMatch) {
                    if (currentTargetInputId) {
                        const input = modal.querySelector(`#${currentTargetInputId}`);
                        if (input) {
                            input.value = bestMatch;
                            input.style.backgroundColor = '#e8f5e9';
                            setTimeout(() => input.style.backgroundColor = '#fff', 700);
                        }
                    }
                } else {
                    alert('숫자를 인식하지 못했습니다.\n이미지를 회전하여 숫자판을 가로로 맞추고, 숫자판 영역만 크롭해 주세요.');
                }


            } catch (err) {
                console.error(err);
                alert('OCR 처리 중 오류가 발생했습니다: ' + err.message);
            } finally {
                // Restore loadingOverlay template for subsequent executions
                loadingOverlay.innerHTML = `
                    <div class="spinner"></div>
                    <div>숫자 인식 중...</div>
                    <div style="font-size:12px; margin-top:10px; opacity:0.8;">잠시만 기다려주세요</div>
                `;
                loadingOverlay.style.display = 'none';
            }
        };
    });

    // Form Handlers
    modal.querySelector('#cancelEdit').onclick = () => {
        modal.remove();
        loadingOverlay.remove();
    };
    modal.querySelector('#editForm').onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fields.forEach(f => {
            const val = formData.get(f.key);
            rawData[index][f.key] = val === '' ? null : parseFloat(val);
        });
        saveData();
        modal.remove();
        loadingOverlay.remove();
        renderDataView();
    };
}

// --- Settings ---

function setupSettings() {
    views.settings.innerHTML = `
        <div class="summary-card" style="background-color:#fff; color:#000;">
            <h2 style="border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">데이터 관리</h2>
            <button class="nav-item" id="exportBtn" style="width:100%; text-align:left; flex-direction:row; justify-content:flex-start; margin-bottom:10px;">
                <span class="material-icons-round">download</span>
                <span class="nav-label" style="font-size:16px; margin-left:10px;">CSV로 내보내기</span>
            </button>
             <button class="nav-item" id="importBtn" style="width:100%; text-align:left; flex-direction:row; justify-content:flex-start;">
                <span class="material-icons-round">upload</span>
                <span class="nav-label" style="font-size:16px; margin-left:10px;">CSV 불러오기</span>
                <input type="file" id="csvInput" style="display:none;" accept=".csv">
            </button>
        </div>
        
         <div class="summary-card" style="background-color:#fff; color:#000; margin-top:20px;">
            <h2 style="border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:10px;">앱 정보</h2>
            <p>버전: 1.0.0 (PWA)</p>
            <button id="resetBtn" style="background:#ffebee; color:#c62828; border:none; padding:10px; border-radius:8px; width:100%;">데이터 초기화</button>
        </div>
    `;

    // Export
    document.getElementById('exportBtn').addEventListener('click', () => {
        const headers = ["Month", "Wasser Haus", "Praxis Blau", "Praxis Rot", "Strom Haus", "Strom Praxis", "Gas"];
        let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";

        rawData.forEach(row => {
            let r = [
                row.date,
                row.wasser_haus, row.praxis_blau, row.praxis_rot,
                row.strom_haus, row.strom_praxis, row.gas
            ].map(v => v === null ? "" : v).join(",");
            csvContent += r + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `utility_data_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Import
    const fileInput = document.getElementById('csvInput');
    document.getElementById('importBtn').addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            const lines = text.split('\n');
            const newRawData = []; // You might want to merge, but simpler to replace or append carefully.

            // Allow simplified logic: Replace matching dates, add new ones
            // Skip header
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;
                const cols = line.split(',');
                if (cols.length < 7) continue;

                newRawData.push({
                    date: normalizeDate(cols[0]),
                    wasser_haus: getSafeValue(cols[1]),
                    praxis_blau: getSafeValue(cols[2]),
                    praxis_rot: getSafeValue(cols[3]),
                    strom_haus: getSafeValue(cols[4]),
                    strom_praxis: getSafeValue(cols[5]),
                    gas: getSafeValue(cols[6])
                });
            }

            // Merge strategy: Update existing by date, push new
            newRawData.forEach(newItem => {
                const idx = rawData.findIndex(d => d.date === newItem.date);
                if (idx > -1) {
                    rawData[idx] = newItem;
                } else {
                    rawData.push(newItem);
                }
            });

            // Update currentYear to the latest imported year
            const years = [...new Set(rawData.map(d => d.date.split('-')[0]))].sort().reverse();
            if (years.length > 0) currentYear = years[0];
            if (years.length > 0) chartYear = years[0]; // Also update chart year

            saveData();
            alert('데이터 불러오기 완료');
            renderDataView(); // Force refresh
            setupCharts();    // Force refresh tabs
        };
        reader.readAsText(file);
    });

    // Reset
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('모든 데이터를 초기화하시겠습니까? (되돌릴 수 없습니다)')) {
            rawData = JSON.parse(JSON.stringify(defaultData));
            saveData();
            alert('초기화되었습니다.');
            // Force refresh
            renderDataView();
            setupCharts();
        }
    });

    // Add Year via FAB
    fab.addEventListener('click', () => {
        if (activeView === 'data') {
            addNextYear();
        }
    });
}

function addNextYear() {
    // 1. Find max year
    const years = [...new Set(rawData.map(d => d.date.split('-')[0]))].map(Number);
    const maxYear = years.length > 0 ? Math.max(...years) : new Date().getFullYear();
    const nextYear = maxYear + 1;

    // 2. Generate 12 months
    for (let m = 1; m <= 12; m++) {
        rawData.push({
            date: `${nextYear}-${m}`,
            wasser_haus: null,
            praxis_blau: null,
            praxis_rot: null,
            strom_haus: null,
            strom_praxis: null,
            gas: null
        });
    }

    // 3. Update State
    currentYear = String(nextYear);
    chartYear = String(nextYear);

    // 4. Save & Render
    saveData();
    renderDataView();
    setupCharts();

    // 5. Feedback
    alert(`${nextYear}년 데이터가 추가되었습니다.`);
}

// Start
document.addEventListener('DOMContentLoaded', init);
