// Upload Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the upload page
    initializeUploadPage();
    
    // Set up navigation
    setupUploadNavigation();
    
    // Set up file upload functionality
    setupFileUpload();
    
    // Set up analysis functionality
    setupAnalysis();
    
    // Set up current date
    updateCurrentDate();
});

function initializeUploadPage() {
    // Initialize any page-specific functionality
    console.log('Upload page initialized');
}

function setupUploadNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    
    // Hide all sections except the upload section initially
    sections.forEach(section => {
        if (section.id !== 'upload') {
            section.style.display = 'none';
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            if (targetId === 'index.html') {
                window.location.href = 'index.html';
                return;
            }
            showUploadSection(targetId);
        });
    });
}

function showUploadSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
            section.classList.add('active');
            section.style.animation = 'fadeIn 0.6s ease-out';
        } else {
            section.style.display = 'none';
            section.classList.remove('active');
        }
    });
}

function setupFileUpload() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const browseBtn = document.getElementById('browse-btn');
    const analyzeBtn = document.getElementById('analyze-btn');
    const clearBtn = document.getElementById('clear-btn');
    
    let uploadedFiles = [];
    
    // Drag and drop functionality
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    });
    
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    });
    
    // Browse button functionality
    browseBtn.addEventListener('click', function() {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        handleFiles(files);
    });
    
    // Clear button functionality
    clearBtn.addEventListener('click', function() {
        uploadedFiles = [];
        updateFilesList();
        updateAnalyzeButton();
        resetAnalysis();
    });
    
    // Analyze button functionality
    analyzeBtn.addEventListener('click', function() {
        if (uploadedFiles.length > 0) {
            performAnalysis();
        }
    });
    
    function handleFiles(files) {
        files.forEach(file => {
            if (isValidFile(file)) {
                uploadedFiles.push({
                    file: file,
                    id: Date.now() + Math.random(),
                    name: file.name,
                    size: formatFileSize(file.size),
                    type: getFileType(file.name),
                    status: 'uploaded'
                });
            }
        });
        
        updateFilesList();
        updateAnalyzeButton();
    }
    
    function isValidFile(file) {
        const validTypes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel'
        ];
        
        return validTypes.includes(file.type);
    }
    
    function getFileType(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        switch(ext) {
            case 'jpg':
            case 'jpeg':
            case 'png':
                return 'image';
            case 'pdf':
                return 'pdf';
            case 'xlsx':
            case 'xls':
                return 'excel';
            default:
                return 'unknown';
        }
    }
    
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    function updateFilesList() {
        const filesList = document.getElementById('files-list');
        filesList.innerHTML = '';
        
        uploadedFiles.forEach(file => {
            const fileItem = createFileItem(file);
            filesList.appendChild(fileItem);
        });
    }
    
    function createFileItem(file) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.dataset.fileId = file.id;
        
        const iconMap = {
            'image': 'fas fa-image',
            'pdf': 'fas fa-file-pdf',
            'excel': 'fas fa-file-excel',
            'unknown': 'fas fa-file'
        };
        
        fileItem.innerHTML = `
            <div class="file-info">
                <i class="file-icon ${iconMap[file.type] || iconMap.unknown}"></i>
                <div class="file-details">
                    <h5>${file.name}</h5>
                    <span>${file.size} - ${file.type.toUpperCase()}</span>
                </div>
            </div>
            <div class="file-actions">
                <button class="usmc-btn secondary small remove-file-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        // Add remove functionality
        const removeBtn = fileItem.querySelector('.remove-file-btn');
        removeBtn.addEventListener('click', function() {
            uploadedFiles = uploadedFiles.filter(f => f.id !== file.id);
            updateFilesList();
            updateAnalyzeButton();
        });
        
        return fileItem;
    }
    
    function updateAnalyzeButton() {
        analyzeBtn.disabled = uploadedFiles.length === 0;
    }
}

function setupAnalysis() {
    const updateDashboardBtn = document.getElementById('update-dashboard-btn');
    const exportAnalysisBtn = document.getElementById('export-analysis-btn');
    
    updateDashboardBtn.addEventListener('click', function() {
        updateDashboardWithAnalysis();
    });
    
    exportAnalysisBtn.addEventListener('click', function() {
        exportAnalysisResults();
    });
}

function performAnalysis() {
    const analysisStatus = document.getElementById('analysis-status');
    const analysisProgress = document.getElementById('analysis-progress');
    const statusText = analysisStatus.querySelector('.status-text');
    
    // Update status
    statusText.textContent = 'Analyzing Files...';
    analysisProgress.style.width = '0%';
    
    // Simulate analysis progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            completeAnalysis();
        }
        analysisProgress.style.width = progress + '%';
    }, 200);
}

function completeAnalysis() {
    const analysisStatus = document.getElementById('analysis-status');
    const statusText = analysisStatus.querySelector('.status-text');
    const dataPreview = document.getElementById('data-preview');
    const aiInsights = document.getElementById('ai-insights');
    const dashboardUpdates = document.getElementById('dashboard-updates');
    
    // Update status
    statusText.textContent = 'Analysis Complete';
    
    // Simulate extracted data
    dataPreview.innerHTML = `
        <h5>Extracted Information:</h5>
        <ul>
            <li><strong>Personnel Data:</strong> 342 Marines assigned, 318 present for duty</li>
            <li><strong>Equipment Status:</strong> 95% operational rate across all companies</li>
            <li><strong>Training Records:</strong> 305 Marines fully qualified</li>
            <li><strong>Medical Status:</strong> 298 medically ready, 15 limited duty</li>
        </ul>
        <p><em>Data extracted from 3 files: Personnel Report.pdf, Equipment Status.xlsx, Training Records.png</em></p>
    `;
    
    // Simulate AI insights
    aiInsights.innerHTML = `
        <h5>AI Analysis Results:</h5>
        <ul>
            <li><strong>Readiness Trend:</strong> Unit readiness has improved 8.9% over the last quarter</li>
            <li><strong>Critical Areas:</strong> C Company shows 7% lower personnel readiness than average</li>
            <li><strong>Recommendations:</strong> Focus on medical readiness and weapons qualifications</li>
            <li><strong>Predictions:</strong> Expected 92% readiness by end of month if trends continue</li>
        </ul>
    `;
    
    // Simulate dashboard updates
    dashboardUpdates.innerHTML = `
        <h5>Recommended Updates:</h5>
        <ul>
            <li><strong>Personnel Section:</strong> Update company breakdown with new data</li>
            <li><strong>Equipment Section:</strong> Refresh operational rates for all companies</li>
            <li><strong>Training Section:</strong> Update qualification percentages</li>
            <li><strong>Heat Map:</strong> Update readiness percentages for all companies</li>
        </ul>
        <button class="usmc-btn primary" onclick="applyDashboardUpdates()">
            <i class="fas fa-sync"></i> Apply Updates
        </button>
    `;
    
    // Show analysis section
    showUploadSection('analysis');
}

function updateDashboardWithAnalysis() {
    // This would integrate with the main dashboard
    alert('Dashboard updated with analysis results!\n\nUpdates applied:\n- Personnel data refreshed\n- Equipment status updated\n- Training records synchronized\n- Heat map recalculated');
}

function exportAnalysisResults() {
    const analysisData = {
        timestamp: new Date().toISOString(),
        filesAnalyzed: uploadedFiles.length,
        extractedData: {
            personnel: '342 assigned, 318 present',
            equipment: '95% operational rate',
            training: '305 qualified Marines',
            medical: '298 medically ready'
        },
        aiInsights: [
            'Unit readiness improved 8.9%',
            'C Company needs attention',
            'Focus on medical readiness',
            'Expected 92% readiness by month end'
        ]
    };
    
    const dataStr = JSON.stringify(analysisData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analysis-results-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function resetAnalysis() {
    const dataPreview = document.getElementById('data-preview');
    const aiInsights = document.getElementById('ai-insights');
    const dashboardUpdates = document.getElementById('dashboard-updates');
    const analysisProgress = document.getElementById('analysis-progress');
    const statusText = document.querySelector('#analysis-status .status-text');
    
    dataPreview.innerHTML = '<p>Upload files to begin analysis...</p>';
    aiInsights.innerHTML = '<p>AI analysis will appear here...</p>';
    dashboardUpdates.innerHTML = '<p>Recommended dashboard updates will appear here...</p>';
    analysisProgress.style.width = '0%';
    statusText.textContent = 'Ready for Analysis';
}

function updateCurrentDate() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    };
    
    const dateString = now.toLocaleDateString('en-US', options);
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = dateString;
    }
}

// Global function for applying dashboard updates
function applyDashboardUpdates() {
    // This would be called from the analysis results
    alert('Dashboard updates applied successfully!\n\nAll data has been synchronized with the main dashboard.');
} 