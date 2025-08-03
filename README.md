# Marine Corps Unit Readiness Dashboard

A comprehensive web-based dashboard designed for Marine Corps units to track and display unit readiness status, personnel information, weapons training, equipment status, and training records. This dashboard provides commanding officers with real-time visual updates on unit readiness and status.

## Features

### 🎯 Core Functionality
- **Personnel Management**: Track assigned strength, present for duty, medical status, and training qualifications
- **WTTP (Weapons Training Table Program)**: Monitor rifle and pistol qualifications, training cycles, and re-qualification schedules
- **Equipment Status**: Real-time tracking of vehicle fleet, communications equipment, and weapons systems
- **Training Status**: Individual and collective training records, upcoming training schedules, and completion status

### 🎨 Marine Corps Styling
- Official USMC color scheme (Scarlet Red #D40000, Gold #FFD700, Dark Blue #002E6D)
- Eagle, Globe, and Anchor logo integration
- Military-grade responsive design
- Professional typography and layout

### 📊 Interactive Dashboard
- Real-time readiness indicators with progress bars
- Clickable data cards for detailed information
- Navigation between different sections
- Export and print functionality
- Keyboard shortcuts for quick navigation

## File Structure

```
CRT/
├── index.html          # Main dashboard HTML file
├── styles.css          # Marine Corps styling and responsive design
├── script.js           # Interactive functionality and data management
└── README.md           # Project documentation
```

## Sections Overview

### 1. Personnel Management
- **Strength Summary**: Authorized, assigned, present, and deployed personnel
- **Medical Status**: Medical ready, limited duty, and not medically ready counts
- **Training Status**: Qualified, in training, and unqualified personnel

### 2. WTTP (Weapons Training Table Program)
- **Rifle Qualifications**: Expert, sharpshooter, marksman, and unqualified counts
- **Pistol Qualifications**: Expert, sharpshooter, marksman, and unqualified counts
- **Training Cycles**: Range week schedules and re-qualification due dates

### 3. Equipment Status
- **Vehicle Fleet**: HMMWVs, 7-Tons, 5-Tons, and MRAPs operational status
- **Communications**: PRC-152, PRC-117, SATCOM, and battery inventory
- **Weapons Systems**: M4A1, M249, M240, and M2 operational counts

### 4. Training Status
- **Individual Training**: Combat lifesaver, land navigation, gas chamber, and cyber awareness
- **Collective Training**: Platoon tactics, company attack, live fire, and MOUT training
- **Upcoming Training**: Field exercises, range weeks, and combat exercises

## Usage Instructions

### Navigation
- Use the top navigation bar to switch between sections
- Click on data cards for detailed information
- Use keyboard shortcuts for quick navigation:
  - `Ctrl/Cmd + 1`: Personnel
  - `Ctrl/Cmd + 2`: WTTP
  - `Ctrl/Cmd + 3`: Equipment
  - `Ctrl/Cmd + 4`: Training
  - `Ctrl/Cmd + P`: Print

### Interactive Elements
- **Status Cards**: Click for detailed breakdown and historical trends
- **Data Rows**: Click for specific information and historical data
- **Action Buttons**: Add new entries, export data, print reports
- **Progress Bars**: Visual representation of readiness percentages

### Data Management
- All data is currently placeholder/demo data
- Real implementation would connect to Marine Corps databases
- Export functionality available for reports
- Print-friendly layouts for official documentation

## Technical Specifications

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Responsive Design
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

### Performance
- Fast loading with optimized CSS and JavaScript
- Smooth animations and transitions
- Efficient data rendering and updates

## Customization

### Colors
The dashboard uses CSS custom properties for easy color customization:

```css
:root {
    --usmc-red: #D40000;
    --usmc-gold: #FFD700;
    --usmc-blue: #002E6D;
    --usmc-dark-blue: #001A3D;
}
```

### Data Integration
To connect real data sources:

1. Replace placeholder data in `index.html` with dynamic content
2. Modify `script.js` to fetch data from APIs or databases
3. Update data refresh intervals as needed
4. Implement proper authentication and security measures

## Security Considerations

- This is a demonstration dashboard
- Real implementation should include:
  - Secure authentication (CAC card integration)
  - Data encryption
  - Access control and permissions
  - Audit logging
  - FOUO (For Official Use Only) markings

## Deployment

### Local Development
1. Clone or download the project files
2. Open `index.html` in a web browser
3. No additional setup required

### Production Deployment
1. Upload files to a secure web server
2. Configure HTTPS for secure data transmission
3. Implement proper authentication and authorization
4. Set up data backup and recovery procedures
5. Configure monitoring and logging

## Future Enhancements

### Planned Features
- Real-time data integration with Marine Corps systems
- Advanced reporting and analytics
- Mobile app version
- Integration with training management systems
- Automated alerts and notifications
- Historical data tracking and trends

### Technical Improvements
- Database integration (SQL Server, Oracle)
- API development for data access
- User role management
- Advanced search and filtering
- Data visualization charts and graphs

## Support and Maintenance

### Regular Updates
- Data refresh every 5 minutes
- Date/time updates every minute
- Progress bar animations on load

### Troubleshooting
- Check browser console for JavaScript errors
- Verify all files are in the same directory
- Ensure proper file permissions
- Test in different browsers if issues occur

## License and Usage

This dashboard is designed for official Marine Corps use. All styling and branding follows USMC guidelines and regulations. For official implementation, ensure compliance with:

- Marine Corps branding guidelines
- Department of Defense security requirements
- Information assurance standards
- Data privacy regulations

---

**For Official Use Only - FOUO**

*United States Marine Corps Unit Readiness Dashboard*
*Version 1.0 - 2024* 