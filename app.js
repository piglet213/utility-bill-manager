// Data transcribed from the provided table, extended to Dec 2025
// RENAMED TO defaultData to serve as the immutable template
const defaultData = [
    // 2022 Data
    { date: "2022-1", wasser_haus: 439.971, praxis_blau: 23.69, praxis_rot: 20.158, strom_haus: 71496.1, strom_praxis: 54242.2, gas: 15921.655 },
    { date: "2022-2", wasser_haus: 448.326, praxis_blau: 23.731, praxis_rot: 20.199, strom_haus: 71784.6, strom_praxis: 54519.9, gas: 16296.733 },
    { date: "2022-3", wasser_haus: 458.187, praxis_blau: 23.792, praxis_rot: 20.264, strom_haus: 72087.7, strom_praxis: 54819.5, gas: 16603.31 },
    { date: "2022-4", wasser_haus: 469.132, praxis_blau: 23.854, praxis_rot: 20.315, strom_haus: 72368.3, strom_praxis: 55074.4, gas: 16857.337 },
    { date: "2022-5", wasser_haus: 479.249, praxis_blau: 23.949, praxis_rot: 20.355, strom_haus: 72600.9, strom_praxis: 55342.8, gas: 16905.1 },
    { date: "2022-6", wasser_haus: 486.742, praxis_blau: 24.027, praxis_rot: 20.413, strom_haus: 72833.5, strom_praxis: 55611.2, gas: 16919.3 },
    { date: "2022-7", wasser_haus: 495.773, praxis_blau: 24.108, praxis_rot: 20.424, strom_haus: 73083.4, strom_praxis: 55841, gas: 16928.841 },
    { date: "2022-8", wasser_haus: 504.524, praxis_blau: 24.23, praxis_rot: 20.45, strom_haus: 73354.9, strom_praxis: 56077.9, gas: 16942.461 },
    { date: "2022-9", wasser_haus: 512.071, praxis_blau: 24.301, praxis_rot: 20.517, strom_haus: 73578.6, strom_praxis: 56270.2, gas: 17006.901 },
    { date: "2022-10", wasser_haus: 522.011, praxis_blau: 24.414, praxis_rot: 20.644, strom_haus: 73866.6, strom_praxis: 56511.1, gas: 17116.308 },
    { date: "2022-11", wasser_haus: 530.313, praxis_blau: 0.078, praxis_rot: 0.059, strom_haus: 74157.9, strom_praxis: 56718.4, gas: 17378 },
    { date: "2022-12", wasser_haus: 539.78, praxis_blau: 0.134, praxis_rot: 0.147, strom_haus: 74472.1, strom_praxis: 56935.5, gas: 17785.295 },
    // 2023 Data (Placeholders)
    { date: "2023-1", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-2", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-3", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-4", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-5", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-6", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-7", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-8", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-9", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-10", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-11", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    { date: "2023-12", wasser_haus: null, praxis_blau: null, praxis_rot: null, strom_haus: null, strom_praxis: null, gas: null },
    // 2024 Data
    { date: "2024-1", wasser_haus: 660.667, praxis_blau: 1.57, praxis_rot: 1.02, strom_haus: 78091.1, strom_praxis: 60140.0, gas: 20191.7 },
    { date: "2024-2", wasser_haus: 669.569, praxis_blau: 1.60, praxis_rot: 1.107, strom_haus: 78364.2, strom_praxis: 60325.2, gas: 20404.32 },
    { date: "2024-3", wasser_haus: 681.241, praxis_blau: 1.692, praxis_rot: 1.15, strom_haus: 78664.4, strom_praxis: 60572.9, gas: 20611.28 },
    { date: "2024-4", wasser_haus: 693.360, praxis_blau: 1.741, praxis_rot: 1.208, strom_haus: 78995.2, strom_praxis: 60819.0, gas: 20775.55 },
    { date: "2024-5", wasser_haus: 701.819, praxis_blau: 1.81, praxis_rot: 1.30, strom_haus: 79258.1, strom_praxis: 61008.9, gas: 20814.84 },
    { date: "2024-6", wasser_haus: 715.510, praxis_blau: 1.91, praxis_rot: 1.377, strom_haus: 79535.2, strom_praxis: 61253.9, gas: 20838.38 },
    { date: "2024-7", wasser_haus: 726.361, praxis_blau: 2.065, praxis_rot: 1.458, strom_haus: 79812.8, strom_praxis: 61505.3, gas: 20842.98 },
    { date: "2024-8", wasser_haus: 738.041, praxis_blau: 2.09, praxis_rot: 1.473, strom_haus: 80123.7, strom_praxis: 61770.2, gas: 20846.45 },
    { date: "2024-9", wasser_haus: 747.461, praxis_blau: 2.15, praxis_rot: 1.492, strom_haus: 80379.6, strom_praxis: 61992.5, gas: 20895.3 },
    { date: "2024-10", wasser_haus: 754.775, praxis_blau: 2.19, praxis_rot: 1.545, strom_haus: 80606.7, strom_praxis: 62176.2, gas: 20995.33 },
    { date: "2024-11", wasser_haus: 763.773, praxis_blau: 2.224, praxis_rot: 1.612, strom_haus: 80893.6, strom_praxis: 62479.1, gas: 21353.26 },
    { date: "2024-12", wasser_haus: 772.894, praxis_blau: 2.237, praxis_rot: 1.656, strom_haus: 81201.3, strom_praxis: 62686.4, gas: 21734.11 },
    // 2025 Data
    { date: "2025-1", wasser_haus: 783.084, praxis_blau: 2.279, praxis_rot: 1.708, strom_haus: 81533.6, strom_praxis: 62944.4, gas: 22179.922 },
    { date: "2025-2", wasser_haus: 792.675, praxis_blau: 2.312, praxis_rot: 1.781, strom_haus: 81844.3, strom_praxis: 63212.6, gas: 22587.529 },
    { date: "2025-3", wasser_haus: 800.450, praxis_blau: 2.345, praxis_rot: 1.812, strom_haus: 82092.7, strom_praxis: 63416.6, gas: 22811.512 },
    { date: "2025-4", wasser_haus: 811.620, praxis_blau: 2.385, praxis_rot: 1.859, strom_haus: 82402.0, strom_praxis: 63692.0, gas: 22976.979 },
    { date: "2025-5", wasser_haus: 822.462, praxis_blau: 2.433, praxis_rot: 1.902, strom_haus: 82646.2, strom_praxis: 63931.1, gas: 23022.006 },
    { date: "2025-6", wasser_haus: 834.211, praxis_blau: 2.506, praxis_rot: 1.934, strom_haus: 82921.2, strom_praxis: 64137.0, gas: 23041.498 },
    { date: "2025-7", wasser_haus: 846.258, praxis_blau: 2.577, praxis_rot: 1.958, strom_haus: 83173.1, strom_praxis: 64387.8, gas: 23072.910 },
    { date: "2025-8", wasser_haus: 859.844, praxis_blau: 2.945, praxis_rot: 2.194, strom_haus: 83448.1, strom_praxis: 64628.3, gas: 23095.790 },
    { date: "2025-9", wasser_haus: 871.349, praxis_blau: 2.982, praxis_rot: 2.233, strom_haus: 83719.4, strom_praxis: 64878.867, gas: 23317.771 },
    { date: "2025-10", wasser_haus: 882.854, praxis_blau: 3.018, praxis_rot: 2.273, strom_haus: 83990.7, strom_praxis: 65129.433, gas: 23539.753 },
    { date: "2025-11", wasser_haus: 894.359, praxis_blau: 3.055, praxis_rot: 2.312, strom_haus: 84262.0, strom_praxis: 65380.0, gas: 23761.734 },
    { date: "2025-12", wasser_haus: 907.126, praxis_blau: 3.079, praxis_rot: 2.362, strom_haus: 84552.7, strom_praxis: 65644.1, gas: 24080.113 }
];

// Active State - Start with copy of defaultData
let rawData = JSON.parse(JSON.stringify(defaultData));

// Colors
const colors = {
    blue: 'rgba(54, 162, 235, 0.7)',
    blueBorder: 'rgb(54, 162, 235)',
    red: 'rgba(255, 99, 132, 0.7)',
    redBorder: 'rgb(255, 99, 132)',
    green: 'rgba(75, 192, 192, 0.7)',
    greenBorder: 'rgb(75, 192, 192)',
    yellow: 'rgba(255, 205, 86, 0.7)',
    yellowBorder: 'rgb(255, 205, 86)',
    purple: 'rgba(153, 102, 255, 0.7)',
    purpleBorder: 'rgb(153, 102, 255)'
};

// Global Chart Instances
let waterChart, electricityChart, gasChart;

// State needed for tabs
let currentYear = null;

// Track interpolated cells: Set of strings "rowIndex-key"
const interpolatedCells = new Set();

// Interpolation Logic
function performInterpolation() {
    interpolatedCells.clear();
    const keys = ['wasser_haus', 'praxis_blau', 'praxis_rot', 'strom_haus', 'strom_praxis', 'gas'];

    keys.forEach(key => {
        let lastValidIndex = -1;

        for (let i = 0; i < rawData.length; i++) {
            const val = rawData[i][key];

            if (val !== null && val !== "") {
                // Found a valid value
                if (lastValidIndex !== -1) {
                    // Check if there is a gap between lastValidIndex and i
                    const gapSize = i - lastValidIndex - 1;
                    if (gapSize > 0) {
                        // Linear interpolation
                        const startVal = parseFloat(rawData[lastValidIndex][key]);
                        const endVal = parseFloat(val);
                        const step = (endVal - startVal) / (gapSize + 1);

                        // Fill gaps
                        for (let j = 1; j <= gapSize; j++) {
                            const interpolatedVal = startVal + (step * j);
                            // Round appropriately based on key? Keeping high precision for now
                            rawData[lastValidIndex + j][key] = parseFloat(interpolatedVal.toFixed(3));

                            // Mark as interpolated
                            interpolatedCells.add(`${lastValidIndex + j}-${key}`);
                        }
                    }
                }
                lastValidIndex = i;
            }
        }
    });
}

// Function to calculate monthly consumption
function calculateConsumption(data) {
    const consumption = [];

    // Start from index 1 because we need the previous month to calculate difference
    for (let i = 1; i < data.length; i++) {
        const current = data[i];
        const previous = data[i - 1];

        // Skip if current month has no data (future months)
        if (current.wasser_haus === null || current.wasser_haus === "") {
            consumption.push({
                date: current.date,
                wasser_haus: null, praxis_blau: null, praxis_rot: null,
                strom_haus: null, strom_praxis: null, gas: null
            });
            continue;
        }

        // Helper to handle safe subtraction
        const safeSub = (curr, prev) => {
            if (curr === null || prev === null || curr === "" || prev === "") return null;
            return parseFloat(curr) - parseFloat(prev);
        };

        consumption.push({
            date: current.date,
            // Water
            wasser_haus: safeSub(current.wasser_haus, previous.wasser_haus),
            praxis_blau: safeSub(current.praxis_blau, previous.praxis_blau),
            praxis_rot: safeSub(current.praxis_rot, previous.praxis_rot),
            // Electricity
            strom_haus: safeSub(current.strom_haus, previous.strom_haus),
            strom_praxis: safeSub(current.strom_praxis, previous.strom_praxis),
            // Gas
            gas: safeSub(current.gas, previous.gas)
        });
    }
    return consumption;
}

// Helper to calculate average ignoring nulls
function calculateAverage(dataArray) {
    const validData = dataArray.filter(val => val !== null && val !== "" && !isNaN(val));
    if (validData.length === 0) return null;
    const sum = validData.reduce((a, b) => a + parseFloat(b), 0);
    return sum / validData.length;
}

function updateCharts() {
    performInterpolation(); // Re-interpolate on update
    renderTable(currentYear); // Re-render table to show interpolated values in inputs

    const fullMonthlyData = calculateConsumption(rawData);
    // Filter data for current year
    const yearData = fullMonthlyData.filter(d => d.date.startsWith(currentYear));
    const newLabels = yearData.map(d => d.date);

    // Helper to Create/Update Average Dataset Data
    // returns an array of length labels.length filled with the avg value
    const getAvgData = (dataArray) => {
        const avg = calculateAverage(dataArray);
        return newLabels.map(() => avg); // Fill array with avg
    };

    // Update Labels
    waterChart.data.labels = newLabels;
    electricityChart.data.labels = newLabels;
    gasChart.data.labels = newLabels;

    // 1. Water Update
    const wData1 = yearData.map(d => d.wasser_haus);
    const wData2 = yearData.map(d => d.praxis_blau);
    const wData3 = yearData.map(d => d.praxis_rot);

    waterChart.data.datasets[0].data = wData1;
    waterChart.data.datasets[1].data = wData2;
    waterChart.data.datasets[2].data = wData3;

    // Averages
    waterChart.data.datasets[3].data = getAvgData(wData1);
    waterChart.data.datasets[4].data = getAvgData(wData2);
    waterChart.data.datasets[5].data = getAvgData(wData3);

    waterChart.update();

    // 2. Electricity Update
    const eData1 = yearData.map(d => d.strom_haus);
    const eData2 = yearData.map(d => d.strom_praxis);

    electricityChart.data.datasets[0].data = eData1;
    electricityChart.data.datasets[1].data = eData2;

    // Averages
    electricityChart.data.datasets[2].data = getAvgData(eData1);
    electricityChart.data.datasets[3].data = getAvgData(eData2);

    electricityChart.update();

    // 3. Gas Update
    const gData1 = yearData.map(d => d.gas);
    gasChart.data.datasets[0].data = gData1;

    // Average
    gasChart.data.datasets[1].data = getAvgData(gData1);

    gasChart.update();

    // Update Title
    const titleEl = document.querySelector('h1');
    if (titleEl) {
        titleEl.innerText = '전기,물,가스 사용현황 ' + currentYear;
    }
}


// Function to create an input element
function createInput(value, rowIndex, key) {
    const input = document.createElement('input');
    input.type = 'number';
    input.step = '0.001'; // Allow decimals
    input.value = value !== null ? value : '';

    // Check if this cell is interpolated
    if (interpolatedCells.has(`${rowIndex}-${key}`)) {
        input.classList.add('interpolated-input');
    }

    input.addEventListener('change', (e) => { // Changed to 'change' to avoid excessive updates during typing
        const val = e.target.value;
        const newValue = val === '' ? null : parseFloat(val);
        // If user manually edits an interpolated value, it effectively becomes manual/valid
        // Re-running performInterpolation will clear the flag if there are no gaps anymore,
        // or re-calculate neighbors. 
        rawData[rowIndex][key] = newValue;

        // If the user clears a value, interpolation might kick in again for this cell if surrounded by valid values.
        // If user enters a value, it's now valid, so it won't be interpolated.

        updateCharts();
    });

    return input;
}

// Render Table with Inputs (Filtered by Year)
function renderTable(year) {
    if (!year) return; // Guard clause

    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = ''; // Clear existing

    // Conditional Footnote: Only visible for 2025
    const footnote = document.querySelector('.footnote');
    if (footnote) {
        footnote.style.display = (year === '2025') ? 'block' : 'none';
    }

    rawData.forEach((row, index) => {
        // Filter: Only show rows for the selected year
        if (!row.date.startsWith(year)) return;

        const tr = document.createElement('tr');

        const dateTd = document.createElement('td');
        dateTd.style.textAlign = 'center';
        dateTd.style.fontWeight = 'bold';
        dateTd.textContent = row.date;
        tr.appendChild(dateTd);

        // Keys to render
        const keys = ['wasser_haus', 'praxis_blau', 'praxis_rot', 'strom_haus', 'strom_praxis', 'gas'];

        keys.forEach(key => {
            const td = document.createElement('td');
            td.appendChild(createInput(row[key], index, key));
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
}

// Render Year Tabs
function renderTabs() {
    const tabsContainer = document.getElementById('yearTabs');
    tabsContainer.innerHTML = '';

    // Extract unique years from rawData
    const years = [...new Set(rawData.map(d => d.date.split('-')[0]))];

    years.forEach(year => {
        const btn = document.createElement('button');
        btn.textContent = year;
        btn.className = 'tab-button';
        if (year == currentYear) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
            currentYear = year;
            renderTabs(); // Re-render to update active class
            updateCharts(); // Trigger chart update
        });

        tabsContainer.appendChild(btn);
    });
}


// Chart Configuration Helper (Updated to take initial data)
function createChartConfig(label, datasets, yAxisTitle, labels) {
    return {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
                legend: {
                    position: 'bottom',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: yAxisTitle
                    }
                }
            }
        }
    };
}

// Function to add the next year's logic
function addNextYear() {
    // 1. Find the last date in rawData
    const lastEntry = rawData[rawData.length - 1];
    const [lastYear, lastMonth] = lastEntry.date.split('-').map(Number);

    // 2. Generate next 12 months
    let year = lastYear;
    let month = lastMonth;

    for (let i = 0; i < 12; i++) {
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }

        rawData.push({
            date: `${year}-${month}`,
            wasser_haus: null, praxis_blau: null, praxis_rot: null,
            strom_haus: null, strom_praxis: null, gas: null
        });
    }

    // 3. Refresh and Switch Tab
    const newYear = rawData[rawData.length - 1].date.split('-')[0];
    currentYear = newYear; // Auto switch to new year

    renderTabs();
    updateCharts();
}

// Plugin to display average value on the line
const avgValuePlugin = {
    id: 'avgValuePlugin',
    afterDatasetsDraw(chart, args, options) {
        const { ctx, chartArea: { right } } = chart;

        chart.data.datasets.forEach((dataset, i) => {
            // Check if it's an average line (based on label convention)
            if (dataset.label && dataset.label.includes('평균')) {
                const meta = chart.getDatasetMeta(i);

                // Only draw if visible
                if (!meta.hidden) {
                    // Find the Y position from the first valid point
                    const firstPoint = meta.data.find(p => !p.skip && !isNaN(p.y));

                    if (firstPoint) {
                        const y = firstPoint.y;
                        const value = dataset.data.find(v => v !== null && v !== undefined);

                        if (value !== undefined && value !== null) {
                            ctx.save();
                            ctx.fillStyle = dataset.borderColor;
                            ctx.font = 'bold 12px Arial'; // Clear readable font
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'bottom';

                            // Draw text at the right edge of the chart area
                            ctx.fillText(`Avg: ${value.toFixed(2)}`, right - 10, y - 5);
                            ctx.restore();
                        }
                    }
                }
            }
        });
    }
};

// Register the plugin globally
Chart.register(avgValuePlugin);

// Persistence Constants
const STORAGE_KEY = 'UTILITY_DASHBOARD_DATA_V2';

// Auto-Save to LocalStorage
function saveToLocal() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rawData));
    console.log('Data saved to local storage');
}

// Load from LocalStorage
function loadFromLocal() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                console.log('Loading local data via merge...');
                // Merge loaded data into the default structure (restoring defaults if persisted data had gaps)
                mergeData(parsed);
                return true;
            }
        } catch (e) {
            console.error('Failed to load local data', e);
        }
    }
    return false;
}

// Export Data to File (CSV) - Async with Save As Dialog
async function exportData() {
    // 1. Create CSV Header
    const headers = ['date', 'wasser_haus', 'praxis_blau', 'praxis_rot', 'strom_haus', 'strom_praxis', 'gas'];
    let csvContent = headers.join(',') + '\n';

    // 2. Map Data to CSV Rows (Handle nulls), Filter by currentYear if set
    const exportRows = currentYear
        ? rawData.filter(d => d.date.startsWith(currentYear))
        : rawData;

    exportRows.forEach(row => {
        const rowData = headers.map(key => {
            const val = row[key];
            return (val === null || val === undefined) ? '' : val;
        });
        csvContent += rowData.join(',') + '\n';
    });

    // BOM for Excel compatibility
    const setBOM = "\uFEFF";
    const blobData = setBOM + csvContent;
    const defaultName = `utility_data_${new Date().toISOString().slice(0, 10)}.csv`;

    // 3. Native Save As Dialog (Modern Browsers)
    if (window.showSaveFilePicker) {
        try {
            const handle = await window.showSaveFilePicker({
                suggestedName: defaultName,
                types: [{
                    description: 'CSV File',
                    accept: { 'text/csv': ['.csv'] },
                }],
            });
            const writable = await handle.createWritable();
            await writable.write(blobData);
            await writable.close();
            console.log('File saved successfully');
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Save File Error:', err);
                alert('Failed to save file: ' + err.message);
            }
        }
    } else {
        // Fallback
        const userFileName = prompt("Please enter the file name to save:", defaultName);
        if (userFileName) {
            const finalName = userFileName.endsWith('.csv') ? userFileName : userFileName + '.csv';
            const blob = new Blob([blobData], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = finalName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
}

// CORE HELPER: Merge new data into existing rawData
function mergeData(sourceArray) {
    const dataMap = new Map();

    // 1. Build Map from current rawData, normalizing dates to handle existing duplicates
    rawData.forEach(d => {
        const normDate = normalizeDate(d.date); // Self-heal existing data
        if (!normDate) return;

        d.date = normDate; // Update the entry itself

        if (dataMap.has(normDate)) {
            // If we already have this date (duplicate row), we should merge into it?
            // Or just ignore/overwrite? Let's keep the existing one in map, 
            // but maybe the current iteration `d` has better data? 
            // Simple strategy: Just overwrite for now, or keep the first one. 
            // Since `rawData` might have [ {2022-1, empty}, {2022-01, full} ], 
            // we want the "full" one ideally. 
            // But simpler: just map it.
            // If dataMap already has it, we are effectively merging duplicates from rawData into one map entry.
            // Let's ensure we don't lose data.
            const existing = dataMap.get(normDate);
            // Merge properties
            Object.keys(d).forEach(k => {
                if (d[k] !== null && d[k] !== undefined) existing[k] = d[k];
            });
        } else {
            dataMap.set(normDate, d);
        }
    });

    let updateCount = 0;
    let addCount = 0;

    sourceArray.forEach(sourceRow => {
        if (!sourceRow.date) return;
        const sourceDate = normalizeDate(sourceRow.date);

        let entry = dataMap.get(sourceDate);
        if (!entry) {
            // New Entry
            entry = {
                date: sourceDate,
                wasser_haus: null, praxis_blau: null, praxis_rot: null,
                strom_haus: null, strom_praxis: null, gas: null
            };
            dataMap.set(sourceDate, entry);
            addCount++;
        } else {
            updateCount++;
        }

        // Merge Fields (Overwrite if present)
        const keys = ['wasser_haus', 'praxis_blau', 'praxis_rot', 'strom_haus', 'strom_praxis', 'gas'];
        keys.forEach(k => {
            if (sourceRow[k] !== undefined && sourceRow[k] !== null) {
                entry[k] = sourceRow[k];
            }
        });
    });

    // Reconstruct rawData
    rawData.length = 0;
    const mergedData = Array.from(dataMap.values());

    // Sort
    mergedData.sort((a, b) => {
        const [y1, m1] = a.date.split('-').map(Number);
        const [y2, m2] = b.date.split('-').map(Number);
        if (y1 !== y2) return y1 - y2;
        return m1 - m2;
    });

    mergedData.forEach(p => rawData.push(p));
    return { addCount, updateCount };
}

// Helper: Normalize Date to YYYY-M format
function normalizeDate(dateStr) {
    if (!dateStr) return null;
    let year, month;

    // Handle DD.MM.YYYY
    if (dateStr.includes('.')) {
        const parts = dateStr.split('.');
        if (parts.length === 3) {
            year = parseInt(parts[2], 10);
            month = parseInt(parts[1], 10);
        }
    }
    // Handle YYYY-MM-DD or YYYY-M
    else if (dateStr.includes('-')) {
        const parts = dateStr.split('-');
        if (parts.length >= 2) {
            year = parseInt(parts[0], 10);
            month = parseInt(parts[1], 10);
        }
    }

    if (!isNaN(year) && !isNaN(month)) {
        return `${year}-${month}`;
    }
    return dateStr; // Fallback
}

// Import Data from File
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const text = e.target.result;
            const lines = text.split(/\r\n|\n/).filter(line => line.trim() !== '');

            if (lines.length < 2) {
                alert('Invalid CSV format: Too few lines');
                return;
            }

            // AUTO-DETECT DELIMITER
            const firstLine = lines[0];
            const commaCount = (firstLine.match(/,/g) || []).length;
            const semicolonCount = (firstLine.match(/;/g) || []).length;
            const delimiter = semicolonCount > commaCount ? ';' : ',';

            // Parse Headers (Normalize)
            const rawHeaders = firstLine.split(delimiter);
            const headers = rawHeaders.map(h => h.trim().replace(/^\ufeff/, '').toLowerCase());

            // Header Mapping
            const headerMap = {
                'date': 'date', 'month': 'date',
                'wasser_haus': 'wasser_haus', 'wasser_h': 'wasser_haus', 'wasser haus': 'wasser_haus', 'wasser_haus': 'wasser_haus',
                'praxis_blau': 'praxis_blau', 'praxis_bla': 'praxis_blau', 'praxis blau': 'praxis_blau', 'praxis_blau': 'praxis_blau',
                'praxis_rot': 'praxis_rot', 'praxis_ro': 'praxis_rot', 'praxis rot': 'praxis_rot', 'praxis_rot': 'praxis_rot',
                'strom_haus': 'strom_haus', 'strom_ha': 'strom_haus', 'strom haus': 'strom_haus', 'strom_haus': 'strom_haus',
                'strom_praxis': 'strom_praxis', 'strom_pra': 'strom_praxis', 'strom praxis': 'strom_praxis', 'strom_praxis': 'strom_praxis',
                'gas': 'gas'
            };

            const mappedIndices = {};
            headers.forEach((h, index) => {
                if (headerMap[h]) mappedIndices[headerMap[h]] = index;
            });

            if (mappedIndices['date'] === undefined) {
                alert(`CSV Error: Could not find 'Month' or 'Date' column.\n\nDetected Headers: [${headers.join(', ')}]`);
                return;
            }

            const parsedData = [];

            // Parse Rows
            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(delimiter);

                // 1. Get Date First
                const dateIdx = mappedIndices['date'];
                if (dateIdx >= values.length) continue;

                const rawDateVal = values[dateIdx].trim();
                const dateVal = normalizeDate(rawDateVal);

                if (!dateVal) continue;

                const row = { date: dateVal };

                // 2. Extract Fields
                const internalKeys = ['wasser_haus', 'praxis_blau', 'praxis_rot', 'strom_haus', 'strom_praxis', 'gas'];
                internalKeys.forEach(key => {
                    const colIndex = mappedIndices[key];
                    if (colIndex !== undefined && colIndex < values.length) {
                        let val = values[colIndex].trim();
                        // Number parsing
                        if (val.includes(',') && !val.includes('.')) {
                            val = val.replace(',', '.');
                        }
                        const numVal = (val === '' || isNaN(val)) ? null : parseFloat(val);
                        row[key] = numVal;
                    }
                });
                parsedData.push(row);
            }

            // MERGE
            const { addCount, updateCount } = mergeData(parsedData);

            saveToLocal();

            // Refresh UI
            const years = [...new Set(rawData.map(d => d.date.split('-')[0]))];
            if (!years.includes(currentYear) && years.length > 0) {
                currentYear = years[years.length - 1];
            }

            renderTabs();
            updateCharts();
            alert(`완료! (추가: ${addCount}건, 업데이트: ${updateCount}건)`);

        } catch (err) {
            console.error(err);
            alert('Failed to parse file: ' + err.message);
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}

// Initialize
function init() {
    // Try loading local data first
    loadFromLocal();

    performInterpolation(); // Initial check

    // Set initial year (default to 2025 if available, else first)
    const years = [...new Set(rawData.map(d => d.date.split('-')[0]))];
    if (years.includes('2025')) {
        currentYear = '2025';
    } else if (years.length > 0) {
        currentYear = years[0];
    }

    renderTabs();

    // Calculate initial data for the current year
    const fullMonthlyData = calculateConsumption(rawData);
    const yearData = fullMonthlyData.filter(d => d.date.startsWith(currentYear));
    const labels = yearData.map(d => d.date);

    // Event Listeners
    document.getElementById('addYearBtn').addEventListener('click', () => {
        addNextYear();
        saveToLocal(); // Save on structure change
    });

    document.getElementById('saveBtn').addEventListener('click', exportData);

    const fileInput = document.getElementById('fileInput');
    document.getElementById('loadBtn').addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', importData);

    // Helper to create average dataset config
    const createAvgDataset = (label, color) => ({
        type: 'line',
        label: `평균 (${label})`,
        data: [], // Will be filled by updateCharts
        borderColor: color,
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false,
        order: 0 // Draw on top
    });

    // 1. Water Chart
    const waterCtx = document.getElementById('waterChart').getContext('2d');
    waterChart = new Chart(waterCtx, createChartConfig(
        '수도 사용량',
        [
            // Primary Data (Bar)
            {
                type: 'bar',
                label: '수도 (집)',
                data: yearData.map(d => d.wasser_haus),
                backgroundColor: colors.blue,
                borderColor: colors.blueBorder,
                borderWidth: 1,
                order: 1
            },
            {
                type: 'bar',
                label: '진료소 (파랑)',
                data: yearData.map(d => d.praxis_blau),
                backgroundColor: colors.green,
                borderColor: colors.greenBorder,
                borderWidth: 1,
                order: 1
            },
            {
                type: 'bar',
                label: '진료소 (빨강)',
                data: yearData.map(d => d.praxis_rot),
                backgroundColor: colors.red,
                borderColor: colors.redBorder,
                borderWidth: 1,
                order: 1
            },
            // Average Lines (Line)
            createAvgDataset('수도 (집)', colors.blueBorder),
            createAvgDataset('진료소 (파랑)', colors.greenBorder),
            createAvgDataset('진료소 (빨강)', colors.redBorder)
        ],
        'Cubic Meters (m³)',
        labels
    ));

    // 2. Electricity Chart
    const electricityCtx = document.getElementById('electricityChart').getContext('2d');
    electricityChart = new Chart(electricityCtx, createChartConfig(
        '전기 사용량',
        [
            {
                type: 'bar',
                label: '전기 (집)',
                data: yearData.map(d => d.strom_haus),
                backgroundColor: colors.yellow,
                borderColor: colors.yellowBorder,
                borderWidth: 1,
                order: 1
            },
            {
                type: 'bar',
                label: '전기 (진료소)',
                data: yearData.map(d => d.strom_praxis),
                backgroundColor: colors.purple,
                borderColor: colors.purpleBorder,
                borderWidth: 1,
                order: 1
            },
            createAvgDataset('전기 (집)', colors.yellowBorder),
            createAvgDataset('전기 (진료소)', colors.purpleBorder)
        ],
        'kWh',
        labels
    ));

    // 3. Gas Chart
    const gasCtx = document.getElementById('gasChart').getContext('2d');
    gasChart = new Chart(gasCtx, createChartConfig(
        '가스 사용량',
        [
            {
                type: 'bar',
                label: '가스',
                data: yearData.map(d => d.gas),
                backgroundColor: colors.red,
                borderColor: colors.redBorder,
                borderWidth: 1,
                order: 1
            },
            createAvgDataset('가스', colors.redBorder)
        ],
        'Cubic Meters (m³)',
        labels
    ));

    // Initial UI update and rendering
    updateCharts();
}

// Start Application through init
init();
