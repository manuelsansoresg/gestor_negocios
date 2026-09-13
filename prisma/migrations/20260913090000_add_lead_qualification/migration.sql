-- Keep these columns nullable so leads created before this migration remain valid.
ALTER TABLE `leads`
    ADD COLUMN `action` VARCHAR(30) NULL,
    ADD COLUMN `opportunityType` VARCHAR(80) NULL,
    ADD COLUMN `customOpportunityType` VARCHAR(160) NULL,
    ADD COLUMN `city` VARCHAR(120) NULL,
    ADD COLUMN `valueRange` VARCHAR(120) NULL;
