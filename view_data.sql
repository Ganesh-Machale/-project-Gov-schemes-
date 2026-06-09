-- =======================================================
-- REPORT: VIEW SYSTEM DATA
-- Run this script in MySQL Workbench to see your data
-- =======================================================

USE welfare_schemes_db;

-- 1. LIST ALL REGISTERED USERS
SELECT * FROM users;

-- 2. LIST ALL SCHEMES & ELIGIBILITY RULES
SELECT id, name, category, eligibility_criteria FROM schemes;

-- 3. LIST ALL UPDATES
SELECT * FROM scheme_updates;
