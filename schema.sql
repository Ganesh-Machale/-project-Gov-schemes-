-- Database Schema for Government Welfare Schemes App

CREATE DATABASE IF NOT EXISTS welfare_schemes_db;
USE welfare_schemes_db;

-- 1. Schemes Table
CREATE TABLE IF NOT EXISTS schemes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- Education, Health, Agriculture, etc.
    description TEXT,
    eligibility_criteria TEXT,
    benefits TEXT,
    application_process TEXT,
    official_link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Eligibility Criteria Table (Structured for automated checking)
-- A scheme can have multiple criteria rows, or we can keep it simple for now.
-- For this MVP, we might store JSON or structured text in the main table, 
-- but a separate table allows for scalable querying.
CREATE TABLE IF NOT EXISTS scheme_eligibility (
    id INT AUTO_INCREMENT PRIMARY KEY,
    scheme_id INT,
    min_age INT DEFAULT 0,
    max_age INT DEFAULT 100,
    gender ENUM('Any', 'Male', 'Female', 'Transgender') DEFAULT 'Any',
    income_limit DECIMAL(10,2), -- Max annual income
    occupation_type VARCHAR(100), -- Student, Farmer, etc.
    FOREIGN KEY (scheme_id) REFERENCES schemes(id) ON DELETE CASCADE
);

-- 3. Quiz Questions
CREATE TABLE IF NOT EXISTS quiz_questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_text TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_option CHAR(1) NOT NULL -- 'A', 'B', 'C', or 'D'
);

-- 4. Quiz Results (Anonymous tracking)
CREATE TABLE IF NOT EXISTS quiz_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    score INT,
    total_questions INT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Feedback
CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100),
    email VARCHAR(100),
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255), -- Nullable for Google Auth users
    google_id VARCHAR(255),
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Updates/News Table
CREATE TABLE IF NOT EXISTS scheme_updates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date DATE NOT NULL,
    scheme_id INT,
    FOREIGN KEY (scheme_id) REFERENCES schemes(id) ON DELETE SET NULL
);

-- Seed Data: More Schemes
INSERT INTO schemes (name, category, description, eligibility_criteria, benefits, application_process, official_link) VALUES 
('Pradhan Mantri Kaushal Vikas Yojana', 'Skill Development', 'Skill training for youth.', 'Indian youth, dropouts.', 'Free training + Certificate.', 'Register on PMKVY portal.', 'http://pmkvyofficial.org/'),
('Beti Bachao Beti Padhao', 'Women & Child', 'Save and educate girl child.', 'All households with girl child.', 'Awareness and educational support.', 'Contact district administration.', 'http://wcd.nic.in/bbbp-schemes'),
('Atal Pension Yojana', 'Pension', 'Pension scheme for unorganized sector.', 'Age 18-40 years.', 'Guaranteed pension Rs. 1000-5000.', 'Apply via Bank.', 'https://npscra.nsdl.co.in/scheme-details.php'),
('Mid-Day Meal Scheme', 'Education', 'Free lunch for school children.', 'Govt school students.', 'Free nutrition rich food.', 'Automatic enrollment in school.', 'http://mdm.nic.in/'),
('Digital India Internship', 'Employment', 'Internship for students.', 'Indian students with 60% marks.', 'Stipend Rs. 10000/month.', 'Apply on Digital India portal.', 'https://www.meity.gov.in/digital-india-internship-scheme');

-- Seed Data: Updates
INSERT INTO scheme_updates (title, description, date, scheme_id) VALUES 
('PM Kisan 15th Installment Released', 'The central government has released the 15th installment of PM Kisan Samman Nidhi.', '2025-11-15', 2),
('New Housing Guidelines', 'PMAY urban housing subsidy criteria has been updated for 2026.', '2026-01-10', 1),
('Scholarship Deadline Extended', 'Last date to apply for National Scholarship Portal is extended till March 31.', '2026-02-01', 5);


-- Seed Data: Additional Real Gov Schemes
INSERT INTO schemes (name, category, description, eligibility_criteria, benefits, application_process, official_link) VALUES 
('Samagra Shiksha Abhiyan', 'Education', 'Integrated scheme for school education extending from pre-school to class 12.', 'School students and teachers.', 'Quality education improvement and teacher training.', 'Through State Education Dept.', 'https://samagra.education.gov.in/'),
('Ujjwala Yojana 2.0', 'Women & Child', 'Free LPG connection for women of electrical weaker sections.', 'Adult woman from BPL family.', 'Free gas connection + subsidy.', 'Apply at nearest cleaning gas agency or online.', 'https://www.pmuy.gov.in/'),
('Mudra Yojana (PMMY)', 'Employment', 'Loans for small and micro enterprises.', 'Small business owners, startups.', 'Loan up to 10 Lakhs in 3 categories (Shishu, Kishore, Tarun).', 'Apply at any bank/NBFC.', 'https://www.mudra.org.in/'),
('Fasal Bima Yojana (PMFBY)', 'Agriculture', 'Crop insurance scheme for farmers.', 'Farmers including sharecroppers.', 'Insurance cover for crop loss due to natural calamities.', 'Through Banks or Insurance Portal.', 'https://pmfby.gov.in/'),
('Jan Dhan Yojana (PMJDY)', 'Financial Inclusion', 'Zero balance bank account for every household.', 'Any Indian citizen.', 'Zero balance account, RuPay card, Overdraft facility.', 'Visit any bank branch.', 'https://pmjdy.gov.in/'),
('Rashtriya Vayoshri Yojana', 'Senior Citizens', 'Physical aids and assisted-living devices for senior citizens.', 'BPL Senior Citizens.', 'Free walking sticks, hearing aids, wheelchairs.', 'Assessment camps by ALIMCO.', 'http://socialjustice.nic.in/'),
('Stand Up India', 'Employment', 'Loans for SC/ST and Women entrepreneurs.', 'SC/ST or Woman entrepreneur.', 'Loan from 10 Lakhs to 1 Crore.', 'Apply via Stand Up India portal.', 'https://www.standupmitra.in/'),
('National Health Mission (NHM)', 'Health', 'Universal access to equitable, affordable & quality health care services.', 'All citizens, focus on rural/urban poor.', 'Free medicines, diagnostics, ambulance services.', 'Visit Govt Hospitals/PHCs.', 'https://nhm.gov.in/'),
('Deen Dayal Upadhyaya Grameen Kaushalya Yojana', 'Skill Development', 'Placement linked skill training for rural poor youth.', 'Rural poor youth (15-35 yrs).', 'Free skill training and placement support.', 'Register at training centers.', 'http://ddugky.gov.in/');

INSERT INTO quiz_questions (question_text, option_a, option_b, option_c, option_d, correct_option) VALUES 
('What is the benefit amount per year in PM Kisan Samman Nidhi?', 'Rs. 2000', 'Rs. 6000', 'Rs. 10000', 'Rs. 12000', 'B'),
('Which scheme is related to housing for all?', 'PM Awas Yojana', 'PM Gram Sadak Yojana', 'Ayushman Bharat', 'Swachh Bharat', 'A'),
('Ayushman Bharat provides health cover up to?', '1 Lakh', '2 Lakhs', '5 Lakhs', '10 Lakhs', 'C');
