CREATE DATABASE SummerSplash;
USE SummerSplash;
CREATE TABLE Teilnehmer2023 (
    -- ALLGEMEINE ANGABEN
    id INT NOT NULL AUTO_INCREMENT, 
    forname TEXT NOT NULL, -- Vorname des Teilnehmers
    surname TEXT NOT NULL, -- Nachname des Teilnehmers
    sex TEXT NOT NULL, -- Geschlecht des Teilnehmers
    church TEXT NOT NULL, -- Heimgemeinde
    birthday TEXT NOT NULL, -- Geburtstag d.T.  Datenformat verbessern
    birthdayCountry TEXT NOT NULL, -- Geburtsland des d.T
    -- adress TEXT NOT NULL, -- Adresse d.T in der Form Straße Hausnummer, PZL, Stadt
    street_number TEXT NOT NULL,
    postalCode TEXT NOT NULL,
    city TEXT NOT NULL,
    -- Kontaktmöglichkeiten
    mailParents TEXT NOT NULL, -- Email Adresse der Teilnehmer oder Erziehungsberechtigter
    mailParticipant TEXT NOT NULL, -- Mail d.T
    -- wichtige Informationen
    emergencyContact TEXT NOT NULL, -- Notfallkontakt des Teilnehmers
    eatingHabits TEXT NOT NULL, -- Unverträglichkeiten, Vegetarisch, Vegan, Sonstiges
    medicalNote TEXT NOT NULL, -- Krankheiten, Medikamente
    -- zusätzliche Informationen
    swimmPermission TEXT NOT NULL, -- Schwimmerlaubnis des d.T   
    roomRequest TEXT NOT NULL, -- Zimmerwunsch 
    dutyArea TEXT NOT NULL, -- Dienstbereich d.T.
    workshop TEXT NOT NULL, -- Workshopwünsche der Teilnehmer
    rulesApproval TEXT NOT NULL, -- Zustimmung der AGB's und der Summersplash Regeln   
    tshirt TEXT NOT NULL, -- SplashShirt JA/NEIN 
    tshirtSize TEXT , -- T-shirt Größe
    siblings INT NOT NULL, -- Geschwisteranzahl auf dem Summersplash 
    siblingsPerson TEXT NOT NULL, -- Geschwister auf dem Summersplash Rückgabewert "geschwister 1__geschwister 2" getrennt mit Underscore
    PRIMARY KEY (id)
);