// Marine Corps Unit Readiness Dashboard - Simplified JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard
    initializeDashboard();
});

function initializeDashboard() {
    updateDateTime();
    setupNavigation();
    setupBriefingMode();
    setupUploadModal();
    setupDataEntry();
    
    // Update date/time every minute
    setInterval(updateDateTime, 60000);
}

// Date and Time Display
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    }
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// Briefing Mode Setup
function setupBriefingMode() {
    const briefingBtn = document.getElementById('briefing-mode');
    const briefingOverlay = document.getElementById('briefing-overlay');
    const exitBriefingBtn = document.getElementById('exit-briefing');
    
    if (briefingBtn) {
        briefingBtn.addEventListener('click', function() {
            enterBriefingMode();
        });
    }
    
    if (exitBriefingBtn) {
        exitBriefingBtn.addEventListener('click', function() {
            exitBriefingMode();
        });
    }
    
    // Exit briefing mode with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && briefingOverlay.classList.contains('active')) {
            exitBriefingMode();
        }
    });
}

function enterBriefingMode() {
    const briefingOverlay = document.getElementById('briefing-overlay');
    const briefingSlides = document.querySelector('.briefing-slides');
    
    if (briefingOverlay) {
        briefingOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Create briefing slides
        createBriefingSlides();
    }
}

function exitBriefingMode() {
    const briefingOverlay = document.getElementById('briefing-overlay');
    
    if (briefingOverlay) {
        briefingOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function createBriefingSlides() {
    const briefingSlides = document.querySelector('.briefing-slides');
    if (!briefingSlides) return;
    
    briefingSlides.innerHTML = `
        <!-- Slide 1: Unit Overview -->
        <div class="briefing-slide active">
            <h3>MASS-3 Unit Overview</h3>
            <div class="briefing-content-grid">
                <div class="briefing-stat">
                    <span class="stat-label">Total Personnel</span>
                    <span class="stat-value">1,247</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">On-Hand</span>
                    <span class="stat-value">1,089</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Deployed</span>
                    <span class="stat-value">98</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Limited Duty</span>
                    <span class="stat-value">32</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Light Duty</span>
                    <span class="stat-value">18</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Pregnant</span>
                    <span class="stat-value">8</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Legal</span>
                    <span class="stat-value">2</span>
                </div>
            </div>
        </div>

        <!-- Slide 2: Fitness Status -->
        <div class="briefing-slide">
            <h3>Fitness & Training Status</h3>
            <div class="briefing-content-grid grid-2x3">
                <div class="briefing-stat">
                    <span class="stat-label">PFT Complete</span>
                    <span class="stat-value">87%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">PFT Unit Average</span>
                    <span class="stat-value">285</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">CFT Complete</span>
                    <span class="stat-value">92%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">CFT Unit Average</span>
                    <span class="stat-value">298</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">BCP Marines</span>
                    <span class="stat-value">15</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">RCP Marines</span>
                    <span class="stat-value">7</span>
                </div>
            </div>
        </div>

        <!-- Slide 3: Company Breakdown -->
        <div class="briefing-slide">
            <h3>Company Personnel Breakdown</h3>
            <div class="briefing-content-grid grid-2x4">
                <div class="briefing-stat">
                    <span class="stat-label">H&HS Total</span>
                    <span class="stat-value">312</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">H&HS On-Hand</span>
                    <span class="stat-value">289</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">A Co Total</span>
                    <span class="stat-value">298</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">A Co On-Hand</span>
                    <span class="stat-value">265</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">B Co Total</span>
                    <span class="stat-value">315</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">B Co On-Hand</span>
                    <span class="stat-value">278</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">C Co Total</span>
                    <span class="stat-value">322</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">C Co On-Hand</span>
                    <span class="stat-value">257</span>
                </div>
            </div>
        </div>

        <!-- Slide 4: TEEP Status -->
        <div class="briefing-slide">
            <h3>TEEP White Space & Exercises</h3>
            <div class="briefing-content-grid">
                <div class="briefing-stat">
                    <span class="stat-label">Available Windows</span>
                    <span class="stat-value">3</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Total Available Days</span>
                    <span class="stat-value">50</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Next Window</span>
                    <span class="stat-value">15 JAN - 28 JAN</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Active Exercises</span>
                    <span class="stat-value">2</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">H&HS Supporting</span>
                    <span class="stat-value">Exercise Alpha</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">A Co Supporting</span>
                    <span class="stat-value">Exercise Bravo</span>
                </div>
            </div>
        </div>

        <!-- Slide 5: Equipment Status -->
        <div class="briefing-slide">
            <h3>Equipment Status & Readiness</h3>
            <div class="briefing-content-grid grid-2x3">
                <div class="briefing-stat">
                    <span class="stat-label">Overall Equipment</span>
                    <span class="stat-value">89.5%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Radar Systems</span>
                    <span class="stat-value">100%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Communication</span>
                    <span class="stat-value">92%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Vehicles</span>
                    <span class="stat-value">85%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Maintenance Due</span>
                    <span class="stat-value">3 Systems</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Next Maintenance</span>
                    <span class="stat-value">15 FEB</span>
                </div>
            </div>
        </div>

        <!-- Slide 6: Advanced Analytics -->
        <div class="briefing-slide">
            <h3>Advanced Analytics & Predictions</h3>
            <div class="briefing-content-grid grid-2x3">
                <div class="briefing-stat">
                    <span class="stat-label">Deployment Readiness</span>
                    <span class="stat-value">94.2%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Personnel Availability</span>
                    <span class="stat-value">87.4%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Equipment Operational</span>
                    <span class="stat-value">89.5%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Training Completion</span>
                    <span class="stat-value">82.3%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Next Assessment</span>
                    <span class="stat-value">15 FEB</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Risk Level</span>
                    <span class="stat-value">LOW</span>
                </div>
            </div>
        </div>

        <!-- Slide 7: Key Issues & Recommendations -->
        <div class="briefing-slide">
            <h3>Key Issues & Recommendations</h3>
            <div class="briefing-content-grid">
                <div class="briefing-stat">
                    <span class="stat-label">PFT Completion</span>
                    <span class="stat-value">13% Remaining</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">BCP Reduction</span>
                    <span class="stat-value">Target: -5</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Equipment Maintenance</span>
                    <span class="stat-value">3 Systems Due</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Training Completion</span>
                    <span class="stat-value">78%</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Personnel Shortfall</span>
                    <span class="stat-value">Alpha Co - 3 MOS</span>
                </div>
                <div class="briefing-stat">
                    <span class="stat-label">Next Assessment</span>
                    <span class="stat-value">15 FEB</span>
                </div>
            </div>
        </div>
    `;

    // Add slide navigation
    setupSlideNavigation();
}

function setupSlideNavigation() {
    const slides = document.querySelectorAll('.briefing-slide');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        // Update navigation buttons
        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === slides.length - 1;
        
        // Update slide counter
        const slideCounter = document.getElementById('slide-counter');
        if (slideCounter) {
            slideCounter.textContent = `${index + 1} / ${slides.length}`;
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        });
    }

    // Enhanced keyboard and clicker navigation
    document.addEventListener('keydown', (e) => {
        if (!document.getElementById('briefing-overlay').classList.contains('active')) return;
        
        switch(e.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                if (currentSlide > 0) {
                    currentSlide--;
                    showSlide(currentSlide);
                }
                break;
            case 'ArrowRight':
            case 'ArrowDown':
            case 'PageDown':
            case ' ':
                if (currentSlide < slides.length - 1) {
                    currentSlide++;
                    showSlide(currentSlide);
                }
                break;
            case 'Home':
                currentSlide = 0;
                showSlide(currentSlide);
                break;
            case 'End':
                currentSlide = slides.length - 1;
                showSlide(currentSlide);
                break;
            case 'Escape':
                exitBriefingMode();
                break;
        }
    });

    // Clicker/Remote support - detect click events on the briefing overlay
    const briefingOverlay = document.getElementById('briefing-overlay');
    if (briefingOverlay) {
        briefingOverlay.addEventListener('click', (e) => {
            // Only trigger if clicking on the overlay itself, not on buttons or content
            if (e.target === briefingOverlay) {
                if (currentSlide < slides.length - 1) {
                    currentSlide++;
                    showSlide(currentSlide);
                } else {
                    // Loop back to first slide
                    currentSlide = 0;
                    showSlide(currentSlide);
                }
            }
        });
    }

    // Initialize first slide
    showSlide(0);
}

// Upload Modal Setup
function setupUploadModal() {
    const uploadBtn = document.getElementById('upload-data');
    const uploadModal = document.getElementById('upload-modal');
    const closeUploadBtn = document.getElementById('close-upload');
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const uploadConfig = document.getElementById('upload-config');
    const uploadActions = document.getElementById('upload-actions');
    const analyzeBtn = document.getElementById('analyze-files');
    const clearBtn = document.getElementById('clear-uploads');
    
    if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
            uploadModal.classList.add('active');
        });
    }
    
    if (closeUploadBtn) {
        closeUploadBtn.addEventListener('click', function() {
            uploadModal.classList.remove('active');
            resetUploadModal();
        });
    }
    
    // Close modal when clicking outside
    uploadModal.addEventListener('click', function(e) {
        if (e.target === uploadModal) {
            uploadModal.classList.remove('active');
            resetUploadModal();
        }
    });
    
    // File upload handling
    if (uploadArea) {
        uploadArea.addEventListener('click', function() {
            fileInput.click();
        });
        
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadArea.classList.add('drag-over');
        });
        
        uploadArea.addEventListener('dragleave', function() {
            uploadArea.classList.remove('drag-over');
        });
        
        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadArea.classList.remove('drag-over');
            handleFiles(e.dataTransfer.files);
        });
    }
    
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            handleFiles(this.files);
        });
    }
    
    // Analyze button
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', function() {
            startAnalysis();
        });
    }
    
    // Clear button
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            resetUploadModal();
        });
    }
}

function handleFiles(files) {
    const uploadedFiles = document.getElementById('uploaded-files');
    const filesList = document.getElementById('files-list');
    const uploadConfig = document.getElementById('upload-config');
    const uploadActions = document.getElementById('upload-actions');
    
    if (files.length > 0) {
        uploadedFiles.style.display = 'block';
        uploadConfig.style.display = 'block';
        uploadActions.style.display = 'block';
        filesList.innerHTML = '';
        
        Array.from(files).forEach(file => {
            const fileItem = createFileItem(file);
            filesList.appendChild(fileItem);
        });
        
        showNotification(`${files.length} file(s) uploaded successfully. Configure document settings and click 'Analyze Documents'.`, 'success');
    }
}

function startAnalysis() {
    const company = document.getElementById('upload-company').value;
    const section = document.getElementById('upload-section').value;
    const documentType = document.getElementById('upload-document-type').value;
    const notes = document.getElementById('upload-notes').value;
    
    if (!company || !section || !documentType) {
        showNotification('Please select company, section, and document type before analyzing.', 'warning');
        return;
    }
    
    const analysisStatus = document.getElementById('analysis-status');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    analysisStatus.style.display = 'block';
    
    // Simulate AI analysis progress
    let progress = 0;
    const analysisSteps = [
        'Reading document content...',
        'Extracting personnel data...',
        'Analyzing training information...',
        'Processing TEEP data...',
        'Updating dashboard...',
        'Analysis complete!'
    ];
    
    const interval = setInterval(() => {
        progress += 16.67; // 100% / 6 steps
        progressFill.style.width = `${progress}%`;
        
        const stepIndex = Math.floor(progress / 16.67);
        if (stepIndex < analysisSteps.length) {
            progressText.textContent = analysisSteps[stepIndex];
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                analysisStatus.style.display = 'none';
                showNotification(`AI analysis complete! Dashboard updated with ${documentType} data for ${company}.`, 'success');
                document.getElementById('upload-modal').classList.remove('active');
                resetUploadModal();
            }, 1000);
        }
    }, 500);
}

function resetUploadModal() {
    const fileInput = document.getElementById('file-input');
    const uploadedFiles = document.getElementById('uploaded-files');
    const filesList = document.getElementById('files-list');
    const uploadConfig = document.getElementById('upload-config');
    const uploadActions = document.getElementById('upload-actions');
    const analysisStatus = document.getElementById('analysis-status');
    
    // Reset file input
    if (fileInput) fileInput.value = '';
    
    // Hide sections
    uploadedFiles.style.display = 'none';
    uploadConfig.style.display = 'none';
    uploadActions.style.display = 'none';
    analysisStatus.style.display = 'none';
    
    // Clear form fields
    document.getElementById('upload-company').value = '';
    document.getElementById('upload-section').value = '';
    document.getElementById('upload-document-type').value = '';
    document.getElementById('upload-notes').value = '';
    
    // Clear files list
    if (filesList) filesList.innerHTML = '';
}

function createFileItem(file) {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.innerHTML = `
        <div class="file-info">
            <i class="fas fa-file"></i>
            <div class="file-details">
                <h5>${file.name}</h5>
                <span>${formatFileSize(file.size)}</span>
            </div>
        </div>
    `;
    return fileItem;
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Data Entry Setup
function setupDataEntry() {
    const companySelect = document.getElementById('company-select');
    const sectionSelect = document.getElementById('section-select');
    const updateBtn = document.getElementById('update-data');
    
    if (companySelect) {
        companySelect.addEventListener('change', function() {
            updateDynamicForm();
        });
    }
    
    if (sectionSelect) {
        sectionSelect.addEventListener('change', function() {
            updateDynamicForm();
        });
    }
    
    if (updateBtn) {
        updateBtn.addEventListener('click', function() {
            updateDashboardData();
        });
    }
}

function updateDynamicForm() {
    const companySelect = document.getElementById('company-select');
    const sectionSelect = document.getElementById('section-select');
    const dynamicForm = document.getElementById('dynamic-form');
    
    const company = companySelect.value;
    const section = sectionSelect.value;
    
    if (!company || !section) {
        dynamicForm.innerHTML = '<p>Please select both company and section to see form fields.</p>';
        return;
    }
    
    let formHTML = '';
    
    if (section === 'personnel') {
        formHTML = `
            <div class="form-group">
                <label>Total Personnel</label>
                <input type="number" class="form-input" id="total-personnel" placeholder="Enter total">
            </div>
            <div class="form-group">
                <label>On-Hand</label>
                <input type="number" class="form-input" id="on-hand" placeholder="Enter on-hand">
            </div>
            <div class="form-group">
                <label>Deployed</label>
                <input type="number" class="form-input" id="deployed" placeholder="Enter deployed">
            </div>
            <div class="form-group">
                <label>Limited Duty</label>
                <input type="number" class="form-input" id="limited-duty" placeholder="Enter limited duty">
            </div>
            <div class="form-group">
                <label>Light Duty</label>
                <input type="number" class="form-input" id="light-duty" placeholder="Enter light duty">
            </div>
            <div class="form-group">
                <label>TAD < 30 Days</label>
                <input type="number" class="form-input" id="tad-less-30" placeholder="Enter TAD < 30 days">
            </div>
            <div class="form-group">
                <label>TAD > 30 Days</label>
                <input type="number" class="form-input" id="tad-greater-30" placeholder="Enter TAD > 30 days">
            </div>
        `;
    } else if (section === 'training') {
        formHTML = `
            <div class="form-group">
                <label>PFT Complete (%)</label>
                <input type="number" class="form-input" id="pft-complete" min="0" max="100" placeholder="Enter percentage">
            </div>
            <div class="form-group">
                <label>PFT Average Score</label>
                <input type="number" class="form-input" id="pft-avg" placeholder="Enter average score">
            </div>
            <div class="form-group">
                <label>CFT Complete (%)</label>
                <input type="number" class="form-input" id="cft-complete" min="0" max="100" placeholder="Enter percentage">
            </div>
            <div class="form-group">
                <label>CFT Average Score</label>
                <input type="number" class="form-input" id="cft-avg" placeholder="Enter average score">
            </div>
        `;
    } else if (section === 'teep') {
        formHTML = `
            <div class="form-group">
                <label>Exercise Name</label>
                <input type="text" class="form-input" id="exercise-name" placeholder="Enter exercise name">
            </div>
            <div class="form-group">
                <label>Start Date</label>
                <input type="date" class="form-input" id="exercise-start">
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="date" class="form-input" id="exercise-end">
            </div>
            <div class="form-group">
                <label>Exercise Type</label>
                <select class="form-input" id="exercise-type">
                    <option value="">Select exercise type</option>
                    <option value="live">Live</option>
                    <option value="simulation">Simulation</option>
                </select>
            </div>
            <div class="form-group">
                <label>Location</label>
                <select class="form-input" id="exercise-location">
                    <option value="">Select location</option>
                    <option value="local">Local</option>
                    <option value="conus">CONUS</option>
                    <option value="oconus">OCONUS</option>
                </select>
            </div>
            <div class="form-group">
                <label>OIC Name</label>
                <input type="text" class="form-input" id="exercise-oic" placeholder="Enter OIC name">
            </div>
            <div class="form-group">
                <label>SNCOIC Name</label>
                <input type="text" class="form-input" id="exercise-sncoic" placeholder="Enter SNCOIC name">
            </div>
            <div class="form-group">
                <label>MO (Male Officer)</label>
                <input type="number" class="form-input" id="exercise-mo" placeholder="Enter count">
            </div>
            <div class="form-group">
                <label>ME (Male Enlisted)</label>
                <input type="number" class="form-input" id="exercise-me" placeholder="Enter count">
            </div>
            <div class="form-group">
                <label>NO (Female Officer)</label>
                <input type="number" class="form-input" id="exercise-no" placeholder="Enter count">
            </div>
            <div class="form-group">
                <label>NE (Female Enlisted)</label>
                <input type="number" class="form-input" id="exercise-ne" placeholder="Enter count">
            </div>
            <div class="form-group">
                <label>Other</label>
                <input type="number" class="form-input" id="exercise-other" placeholder="Enter count">
            </div>
            <div class="form-group">
                <label>Status</label>
                <select class="form-input" id="window-status">
                    <option value="">Select status</option>
                    <option value="in-planning">In-Planning</option>
                    <option value="30-days-out">30-Days Out</option>
                    <option value="in-execution">In-Execution</option>
                </select>
            </div>
        `;
    } else if (section === 'equipment') {
        // Company-specific equipment options
        let equipmentOptions = '';
        if (company === 'hhs') {
            equipmentOptions = `
                <option value="radar">Radar Systems</option>
                <option value="cac2s">CAC2S</option>
                <option value="mrq">MRQ</option>
                <option value="jltv">JLTV</option>
                <option value="mvtr">MVTR</option>
                <option value="hmmwv">HMMWV</option>
            `;
        } else {
            equipmentOptions = `
                <option value="cac2s">CAC2S</option>
                <option value="mrq">MRQ</option>
            `;
        }
        
        formHTML = `
            <div class="form-group">
                <label>Equipment Type</label>
                <select class="form-input" id="equipment-category">
                    <option value="">Select equipment type</option>
                    ${equipmentOptions}
                </select>
            </div>
            <div class="form-group">
                <label>Equipment Status</label>
                <select class="form-input" id="equipment-status">
                    <option value="">Select status</option>
                    <option value="operational">Operational</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="down">Down</option>
                </select>
            </div>
            <div class="form-group">
                <label>Operational Count</label>
                <input type="number" class="form-input" id="equipment-operational" placeholder="Enter operational count">
            </div>
            <div class="form-group">
                <label>Total Count</label>
                <input type="number" class="form-input" id="equipment-total" placeholder="Enter total count">
            </div>
            <div class="form-group">
                <label>Maintenance Due Date</label>
                <input type="date" class="form-input" id="equipment-maintenance-date" placeholder="Enter maintenance due date">
            </div>
            <div class="form-group">
                <label>Notes</label>
                <textarea class="form-input" id="equipment-notes" placeholder="Enter any additional notes about equipment status"></textarea>
            </div>
        `;
    } else if (section === 'admin') {
        formHTML = `
            <div class="form-group">
                <label>Admin Category</label>
                <select class="form-input" id="admin-category">
                    <option value="">Select category</option>
                    <option value="leave">Leave Management</option>
                    <option value="awards">Awards & Recognition</option>
                    <option value="promotions">Promotions</option>
                </select>
            </div>
            <div class="form-group">
                <label>Metric Name</label>
                <input type="text" class="form-input" id="admin-metric" placeholder="Enter metric name">
            </div>
            <div class="form-group">
                <label>Value</label>
                <input type="text" class="form-input" id="admin-value" placeholder="Enter value">
            </div>
        `;
    }
    
    dynamicForm.innerHTML = formHTML;
}

function updateDashboardData() {
    const companySelect = document.getElementById('company-select');
    const sectionSelect = document.getElementById('section-select');
    
    const company = companySelect.value;
    const section = sectionSelect.value;
    
    if (!company || !section) {
        alert('Please select both company and section.');
        return;
    }
    
    // Get all form inputs
    const formInputs = document.querySelectorAll('#dynamic-form input');
    const updatedData = {};
    
    // Collect all form data
    formInputs.forEach(input => {
        if (input.value.trim() !== '') {
            updatedData[input.name] = input.value;
        }
    });
    
    // Update dashboard data based on company and section
    updateCompanyData(company, section, updatedData);
    
    // Update overview statistics
    updateOverviewStats();
    
    // Update briefing mode data
    updateBriefingData();
    
    // Update analytics display
    updateAnalyticsDisplay();
    
    // Show success notification
    showNotification(`Data updated for ${company} - ${section} section. All dashboard sections have been refreshed.`, 'success');
    
    // Reset form
    companySelect.value = '';
    sectionSelect.value = '';
    document.getElementById('dynamic-form').innerHTML = '';
}

function updateCompanyData(company, section, data) {
    // Update company-specific data in the detailed sections
    const companySection = document.querySelector(`#${section} .company-card[data-company="${company}"]`);
    if (companySection) {
        // Update specific fields based on the data provided
        Object.keys(data).forEach(key => {
            const targetElement = companySection.querySelector(`[data-field="${key}"]`);
            if (targetElement) {
                targetElement.textContent = data[key];
            }
        });
    }
}

function updateOverviewStats() {
    // Recalculate and update overview statistics
    const companies = ['hhs', 'alpha', 'bravo', 'charlie'];
    let totalPersonnel = 0;
    let totalOnHand = 0;
    let totalDeployed = 0;
    let totalLimitedDuty = 0;
    let totalLightDuty = 0;
    let totalPregnant = 0;
    let totalLegal = 0;
    let totalBCP = 0;
    let totalRCP = 0;
    let totalTADLess30 = 0;
    let totalTADGreater30 = 0;
    let totalPFTComplete = 0;
    let totalCFTComplete = 0;
    let pftScores = [];
    let cftScores = [];
    
    // Collect data from all companies
    companies.forEach(company => {
        const companySection = document.querySelector(`#personnel .company-card[data-company="${company}"]`);
        if (companySection) {
            const personnel = parseInt(companySection.querySelector('[data-field="total"]')?.textContent || 0);
            const onHand = parseInt(companySection.querySelector('[data-field="on-hand"]')?.textContent || 0);
            const deployed = parseInt(companySection.querySelector('[data-field="deployed"]')?.textContent || 0);
            const limitedDuty = parseInt(companySection.querySelector('[data-field="limited-duty"]')?.textContent || 0);
            const lightDuty = parseInt(companySection.querySelector('[data-field="light-duty"]')?.textContent || 0);
            const pregnant = parseInt(companySection.querySelector('[data-field="pregnant"]')?.textContent || 0);
            const legal = parseInt(companySection.querySelector('[data-field="legal"]')?.textContent || 0);
            const bcp = parseInt(companySection.querySelector('[data-field="bcp"]')?.textContent || 0);
            const rcp = parseInt(companySection.querySelector('[data-field="rcp"]')?.textContent || 0);
            const tadLess30 = parseInt(companySection.querySelector('[data-field="tad-less-30"]')?.textContent || 0);
            const tadGreater30 = parseInt(companySection.querySelector('[data-field="tad-greater-30"]')?.textContent || 0);
            
            totalPersonnel += personnel;
            totalOnHand += onHand;
            totalDeployed += deployed;
            totalLimitedDuty += limitedDuty;
            totalLightDuty += lightDuty;
            totalPregnant += pregnant;
            totalLegal += legal;
            totalBCP += bcp;
            totalRCP += rcp;
            totalTADLess30 += tadLess30;
            totalTADGreater30 += tadGreater30;
        }
        
        // Collect training data
        const trainingSection = document.querySelector(`#training .company-card[data-company="${company}"]`);
        if (trainingSection) {
            const pftComplete = parseInt(trainingSection.querySelector('[data-field="pft-complete"]')?.textContent || 0);
            const cftComplete = parseInt(trainingSection.querySelector('[data-field="cft-complete"]')?.textContent || 0);
            const pftAvg = parseInt(trainingSection.querySelector('[data-field="pft-avg"]')?.textContent || 0);
            const cftAvg = parseInt(trainingSection.querySelector('[data-field="cft-avg"]')?.textContent || 0);
            
            totalPFTComplete += pftComplete;
            totalCFTComplete += cftComplete;
            if (pftAvg > 0) pftScores.push(pftAvg);
            if (cftAvg > 0) cftScores.push(cftAvg);
        }
    });
    
    // Update overview section
    updateOverviewElement('total-personnel', totalPersonnel);
    updateOverviewElement('on-hand', totalOnHand);
    updateOverviewElement('deployed', totalDeployed);
    updateOverviewElement('limited-duty', totalLimitedDuty);
    updateOverviewElement('light-duty', totalLightDuty);
    updateOverviewElement('pregnant', totalPregnant);
    updateOverviewElement('legal', totalLegal);
    updateOverviewElement('bcp', totalBCP);
    updateOverviewElement('rcp', totalRCP);
    updateOverviewElement('tad-less-30', totalTADLess30);
    updateOverviewElement('tad-greater-30', totalTADGreater30);
    
    // Calculate percentages and averages
    const pftPercentage = totalPersonnel > 0 ? Math.round((totalPFTComplete / totalPersonnel) * 100) : 0;
    const cftPercentage = totalPersonnel > 0 ? Math.round((totalCFTComplete / totalPersonnel) * 100) : 0;
    const pftAverage = pftScores.length > 0 ? Math.round(pftScores.reduce((a, b) => a + b, 0) / pftScores.length) : 0;
    const cftAverage = cftScores.length > 0 ? Math.round(cftScores.reduce((a, b) => a + b, 0) / cftScores.length) : 0;
    
    updateOverviewElement('pft-complete', pftPercentage + '%');
    updateOverviewElement('cft-complete', cftPercentage + '%');
    updateOverviewElement('pft-avg', pftAverage);
    updateOverviewElement('cft-avg', cftAverage);
}

function updateOverviewElement(fieldName, value) {
    const element = document.querySelector(`[data-field="${fieldName}"]`);
    if (element) {
        element.textContent = value;
    }
}

function updateBriefingData() {
    // Refresh briefing mode with updated data
    const briefingOverlay = document.getElementById('briefing-overlay');
    if (briefingOverlay && briefingOverlay.classList.contains('active')) {
        createBriefingSlides();
    }
}

// White Space Auto-Update Function
function updateWhiteSpaceStats() {
    const windows = [
        { start: '2024-01-15', end: '2024-01-28', days: 14 },
        { start: '2024-02-12', end: '2024-02-25', days: 14 },
        { start: '2024-03-15', end: '2024-04-05', days: 22 }
    ];
    
    const today = new Date();
    let totalDays = 0;
    let nextWindow = null;
    let daysUntilNext = 0;
    
    // Calculate total days and find next window
    windows.forEach(window => {
        const startDate = new Date(window.start);
        if (startDate >= today) {
            totalDays += window.days;
            if (!nextWindow || startDate < new Date(nextWindow.start)) {
                nextWindow = window;
            }
        }
    });
    
    // Calculate days until next window
    if (nextWindow) {
        const nextStart = new Date(nextWindow.start);
        const timeDiff = nextStart.getTime() - today.getTime();
        daysUntilNext = Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    
    // Update DOM elements
    const totalWindowsElement = document.getElementById('total-windows');
    const totalDaysElement = document.getElementById('total-days');
    const nextWindowElement = document.getElementById('next-window');
    const daysUntilElement = document.getElementById('days-until');
    
    if (totalWindowsElement) totalWindowsElement.textContent = windows.filter(w => new Date(w.start) >= today).length;
    if (totalDaysElement) totalDaysElement.textContent = totalDays;
    if (nextWindowElement && nextWindow) {
        const startDate = new Date(nextWindow.start);
        const endDate = new Date(nextWindow.end);
        const startStr = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
        const endStr = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
        nextWindowElement.textContent = `${startStr} - ${endStr}`;
    }
    if (daysUntilElement) daysUntilElement.textContent = daysUntilNext;
}

// Initialize white space stats on page load
document.addEventListener('DOMContentLoaded', function() {
    updateWhiteSpaceStats();
    updateAnalyticsDisplay();
    setupMarineSystems();
    // Update white space stats every hour
    setInterval(updateWhiteSpaceStats, 3600000);
    // Update analytics every 30 minutes
    setInterval(updateAnalyticsDisplay, 1800000);
    // Update marine systems status every 5 minutes
    setInterval(updateMarineSystemsStatus, 300000);
});

// Analytics Data Collection and Processing
function collectAnalyticsData() {
    // Gather data from all sections to calculate analytics
    const analyticsData = {
        personnel: {
            total: 0,
            onHand: 0,
            deployed: 0,
            limitedDuty: 0,
            lightDuty: 0,
            bcp: 0,
            rcp: 0,
            tadLess30: 0,
            tadGreater30: 0
        },
        equipment: {
            radar: { operational: 0, total: 0 },
            communication: { operational: 0, total: 0 },
            vehicles: { operational: 0, total: 0 },
            maintenanceDue: 0
        },
        training: {
            pftComplete: 0,
            cftComplete: 0,
            pftAvg: 0,
            cftAvg: 0
        },
        teep: {
            availableWindows: 0,
            totalDays: 0,
            activeExercises: 0
        }
    };

    // Collect personnel data from all companies
    const companies = ['hhs', 'alpha', 'bravo', 'charlie'];
    companies.forEach(company => {
        const companySection = document.querySelector(`#personnel .company-card[data-company="${company}"]`);
        if (companySection) {
            const personnel = parseInt(companySection.querySelector('[data-field="total"]')?.textContent || 0);
            const onHand = parseInt(companySection.querySelector('[data-field="on-hand"]')?.textContent || 0);
            const deployed = parseInt(companySection.querySelector('[data-field="deployed"]')?.textContent || 0);
            const limitedDuty = parseInt(companySection.querySelector('[data-field="limited-duty"]')?.textContent || 0);
            const lightDuty = parseInt(companySection.querySelector('[data-field="light-duty"]')?.textContent || 0);
            const bcp = parseInt(companySection.querySelector('[data-field="bcp"]')?.textContent || 0);
            const rcp = parseInt(companySection.querySelector('[data-field="rcp"]')?.textContent || 0);
            const tadLess30 = parseInt(companySection.querySelector('[data-field="tad-less-30"]')?.textContent || 0);
            const tadGreater30 = parseInt(companySection.querySelector('[data-field="tad-greater-30"]')?.textContent || 0);

            analyticsData.personnel.total += personnel;
            analyticsData.personnel.onHand += onHand;
            analyticsData.personnel.deployed += deployed;
            analyticsData.personnel.limitedDuty += limitedDuty;
            analyticsData.personnel.lightDuty += lightDuty;
            analyticsData.personnel.bcp += bcp;
            analyticsData.personnel.rcp += rcp;
            analyticsData.personnel.tadLess30 += tadLess30;
            analyticsData.personnel.tadGreater30 += tadGreater30;
        }

        // Collect equipment data
        const equipmentSection = document.querySelector(`#equipment .company-card[data-company="${company}"]`);
        if (equipmentSection) {
            // Count operational vs total equipment
            const equipmentItems = equipmentSection.querySelectorAll('.equipment-item');
            equipmentItems.forEach(item => {
                const name = item.querySelector('.equipment-name')?.textContent.toLowerCase();
                const status = item.querySelector('.equipment-status')?.textContent;
                const countText = item.querySelector('.equipment-count')?.textContent;
                
                if (countText) {
                    const [operational, total] = countText.split('/').map(n => parseInt(n));
                    
                    if (name?.includes('radar')) {
                        analyticsData.equipment.radar.operational += operational;
                        analyticsData.equipment.radar.total += total;
                    } else if (name?.includes('cac2s') || name?.includes('mrq')) {
                        analyticsData.equipment.communication.operational += operational;
                        analyticsData.equipment.communication.total += total;
                    } else if (name?.includes('jltv') || name?.includes('mvtr') || name?.includes('hmmwv')) {
                        analyticsData.equipment.vehicles.operational += operational;
                        analyticsData.equipment.vehicles.total += total;
                    }
                }
                
                if (status === 'Maintenance') {
                    analyticsData.equipment.maintenanceDue++;
                }
            });
        }

        // Collect training data
        const trainingSection = document.querySelector(`#training .company-card[data-company="${company}"]`);
        if (trainingSection) {
            const pftComplete = parseInt(trainingSection.querySelector('[data-field="pft-complete"]')?.textContent || 0);
            const cftComplete = parseInt(trainingSection.querySelector('[data-field="cft-complete"]')?.textContent || 0);
            const pftAvg = parseInt(trainingSection.querySelector('[data-field="pft-avg"]')?.textContent || 0);
            const cftAvg = parseInt(trainingSection.querySelector('[data-field="cft-avg"]')?.textContent || 0);

            analyticsData.training.pftComplete += pftComplete;
            analyticsData.training.cftComplete += cftComplete;
            if (pftAvg > 0) analyticsData.training.pftAvg = Math.round((analyticsData.training.pftAvg + pftAvg) / 2);
            if (cftAvg > 0) analyticsData.training.cftAvg = Math.round((analyticsData.training.cftAvg + cftAvg) / 2);
        }
    });

    // Calculate TEEP data
    const teepWindows = document.querySelectorAll('.window-item');
    analyticsData.teep.availableWindows = teepWindows.length;
    analyticsData.teep.totalDays = Array.from(teepWindows).reduce((total, window) => {
        const daysText = window.querySelector('.window-days')?.textContent;
        const days = parseInt(daysText?.match(/\d+/)?.[0] || 0);
        return total + days;
    }, 0);

    return analyticsData;
}

function updateAnalyticsDisplay() {
    const analyticsData = collectAnalyticsData();
    
    // Calculate percentages and metrics
    const personnelAvailability = analyticsData.personnel.total > 0 ? 
        Math.round((analyticsData.personnel.onHand / analyticsData.personnel.total) * 100) : 0;
    
    const equipmentReadiness = analyticsData.equipment.total > 0 ? 
        Math.round(((analyticsData.equipment.radar.operational + analyticsData.equipment.communication.operational + analyticsData.equipment.vehicles.operational) / 
        (analyticsData.equipment.radar.total + analyticsData.equipment.communication.total + analyticsData.equipment.vehicles.total)) * 100) : 0;
    
    const trainingCompletion = analyticsData.personnel.total > 0 ? 
        Math.round(((analyticsData.training.pftComplete + analyticsData.training.cftComplete) / (analyticsData.personnel.total * 2)) * 100) : 0;
    
    const deploymentReadiness = Math.round((personnelAvailability + equipmentReadiness + trainingCompletion) / 3);
    
    // Update analytics display
    updateOverviewElement('deployment-readiness', deploymentReadiness + '%');
    updateOverviewElement('equipment-readiness', equipmentReadiness + '%');
    
    // Update trend charts
    const trendFills = document.querySelectorAll('.trend-fill');
    if (trendFills.length >= 3) {
        trendFills[0].style.width = personnelAvailability + '%';
        trendFills[1].style.width = equipmentReadiness + '%';
        trendFills[2].style.width = trainingCompletion + '%';
    }
    
    // Update metric values
    const metricValues = document.querySelectorAll('.metric-value');
    if (metricValues.length >= 4) {
        metricValues[0].textContent = deploymentReadiness + '%';
        metricValues[1].textContent = equipmentReadiness + '%';
        metricValues[2].textContent = trainingCompletion + '%';
        metricValues[3].textContent = personnelAvailability + '%';
    }
}

// Marine Systems Integration Functions
function setupMarineSystems() {
    // Setup system connection buttons
    const systemButtons = document.querySelectorAll('.system-btn');
    systemButtons.forEach(button => {
        button.addEventListener('click', handleSystemAction);
    });

    // Setup configuration save button
    const saveConfigBtn = document.querySelector('.config-actions .btn-primary');
    if (saveConfigBtn) {
        saveConfigBtn.addEventListener('click', saveSystemConfiguration);
    }

    // Setup export logs button
    const exportLogsBtn = document.querySelector('.config-actions .btn-secondary');
    if (exportLogsBtn) {
        exportLogsBtn.addEventListener('click', exportSystemLogs);
    }
}

function handleSystemAction(event) {
    const button = event.currentTarget;
    const systemCard = button.closest('.system-card');
    const systemName = systemCard.querySelector('h3').textContent;
    const action = button.textContent.trim();

    if (action.includes('Sync') || action.includes('Connect')) {
        // Simulate system connection/sync
        simulateSystemConnection(systemName, button);
    } else if (action.includes('Open')) {
        // Open system in new tab
        openMarineSystem(systemName);
    }
}

function simulateSystemConnection(systemName, button) {
    const originalText = button.innerHTML;
    const systemStatus = button.closest('.system-card').querySelector('.system-status');
    
    // Show connecting state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connecting...';
    button.disabled = true;
    systemStatus.textContent = 'Connecting...';
    systemStatus.className = 'system-status connecting';

    // Simulate connection process
    setTimeout(() => {
        const success = Math.random() > 0.3; // 70% success rate
        
        if (success) {
            systemStatus.textContent = 'Connected';
            systemStatus.className = 'system-status connected';
            button.innerHTML = '<i class="fas fa-sync"></i> Sync Now';
            showNotification(`${systemName} connected successfully`, 'success');
            
            // Update system stats
            updateSystemStats(systemName);
        } else {
            systemStatus.textContent = 'Disconnected';
            systemStatus.className = 'system-status disconnected';
            button.innerHTML = '<i class="fas fa-plug"></i> Connect';
            showNotification(`${systemName} connection failed`, 'error');
        }
        
        button.disabled = false;
    }, 2000);
}

function openMarineSystem(systemName) {
    const systemUrls = {
        'MSHARP': 'https://msharp.marines.mil',
        'MCTIMS': 'https://mctims.marines.mil',
        'MOL': 'https://mol.marines.mil',
        'MarineNet': 'https://marinenet.marines.mil'
    };
    
    const url = systemUrls[systemName];
    if (url) {
        window.open(url, '_blank');
        showNotification(`Opening ${systemName} in new tab`, 'info');
    }
}

function updateSystemStats(systemName) {
    const systemCard = document.querySelector(`.system-card h3:contains('${systemName}')`).closest('.system-card');
    const stats = systemCard.querySelectorAll('.stat-value');
    
    // Simulate data updates
    const mockData = {
        'MSHARP': {
            'Last Sync': 'Just now',
            'Data Points': Math.floor(Math.random() * 500) + 1000,
            'Health Score': Math.floor(Math.random() * 20) + 80 + '%'
        },
        'MCTIMS': {
            'Last Sync': 'Just now',
            'Training Records': Math.floor(Math.random() * 200) + 800,
            'Completion Rate': Math.floor(Math.random() * 20) + 80 + '%'
        },
        'MOL': {
            'Last Sync': 'Just now',
            'Personnel Records': Math.floor(Math.random() * 100) + 1200,
            'Status': 'Connected'
        },
        'MarineNet': {
            'Last Sync': 'Just now',
            'Course Completions': Math.floor(Math.random() * 50) + 150,
            'Status': 'Online'
        }
    };
    
    const data = mockData[systemName];
    if (data) {
        stats.forEach((stat, index) => {
            const label = stat.previousElementSibling.textContent;
            if (data[label]) {
                stat.textContent = data[label];
            }
        });
    }
}

function updateMarineSystemsStatus() {
    // Check connection status for all systems
    const systemCards = document.querySelectorAll('.system-card');
    systemCards.forEach(card => {
        const systemName = card.querySelector('h3').textContent;
        const status = card.querySelector('.system-status');
        
        // Simulate status changes
        if (Math.random() > 0.95) { // 5% chance of status change
            const statuses = ['connected', 'connecting', 'disconnected'];
            const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
            
            status.textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
            status.className = `system-status ${newStatus}`;
            
            if (newStatus === 'connected') {
                updateSystemStats(systemName);
            }
        }
    });
}

function saveSystemConfiguration() {
    const configSelects = document.querySelectorAll('.config-grid select');
    const config = {};
    
    configSelects.forEach(select => {
        const label = select.previousElementSibling.textContent;
        config[label] = select.value;
    });
    
    // Simulate saving configuration
    showNotification('System configuration saved successfully', 'success');
    console.log('System Configuration:', config);
}

function exportSystemLogs() {
    // Simulate exporting system logs
    const logs = [
        { timestamp: new Date().toISOString(), system: 'MSHARP', action: 'Sync', status: 'Success' },
        { timestamp: new Date(Date.now() - 3600000).toISOString(), system: 'MCTIMS', action: 'Sync', status: 'Success' },
        { timestamp: new Date(Date.now() - 7200000).toISOString(), system: 'MOL', action: 'Connect', status: 'Failed' },
        { timestamp: new Date(Date.now() - 10800000).toISOString(), system: 'MarineNet', action: 'Connect', status: 'Timeout' }
    ];
    
    const csvContent = 'data:text/csv;charset=utf-8,' + 
        'Timestamp,System,Action,Status\n' +
        logs.map(log => `${log.timestamp},${log.system},${log.action},${log.status}`).join('\n');
    
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', 'marine_systems_logs.csv');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('System logs exported successfully', 'success');
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add some basic CSS for dynamic elements
const style = document.createElement('style');
style.textContent = `
    .form-input {
        width: 100%;
        padding: var(--spacing-sm);
        background: var(--bg-elevated);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        color: var(--text-primary);
        font-size: 1rem;
        transition: var(--transition);
    }
    
    .form-input:focus {
        outline: none;
        border-color: var(--border-accent);
        box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
    }
    
    .briefing-slide {
        text-align: center;
        padding: var(--spacing-lg);
    }
    
    .briefing-slide h3 {
        color: var(--text-accent);
        font-size: 1.5rem;
        margin-bottom: var(--spacing-lg);
    }
    
    .briefing-content-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--spacing-md);
    }
    
    .briefing-stat {
        background: var(--bg-elevated);
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border: 1px solid var(--border-color);
    }
    
    .briefing-stat .stat-label {
        display: block;
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
    
    .briefing-stat .stat-value {
        display: block;
        color: var(--text-accent);
        font-size: 1.5rem;
        font-weight: 700;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        color: var(--text-primary);
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
    }
    
    .notification.info {
        background: var(--info);
    }
    
    .notification.success {
        background: var(--success);
    }
    
    .notification.warning {
        background: var(--warning);
    }
    
    .notification.danger {
        background: var(--danger);
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style); 