CREATE DATABASE SummerSplash;
USE SummerSplash;
CREATE TABLE SummerSplashAnmeldungen2023 (
    id INT NOT NULL, -- automatisch generierte ID
    parentsMail TEXT NOT NULL, -- Email Adresse der Teilnehmer oder Erziehungsberechtigter
    mailParticipant TEXT NOT NULL, -- Mail d.T
    forname TEXT NOT NULL, -- Vorname des Teilnehmers
    surname TEXT NOT NULL, -- Nachname des Teilnehmers
    sex TEXT NOT NULL, -- Geschlecht des Teilnehmers
    birthday DATE NOT NULL, -- Geburtstag d.T.
    adress TEXT NOT NULL, -- Adresse d.T in der Form Straße Hausnummer, PZL, Stadtname
    emergencyContact TEXT NOT NULL, -- Notfallkontakt des Teilnehmers
    church TEXT NOT NULL, -- Heimgemeinde
    eatingHabits TEXT NOT NULL, -- Unverträglichkeiten, Vegetarisch, Vegan, Sonstiges
    medicalNote TEXT NOT NULL, -- Krankheiten, Medikamente
    swimmPermission BIT NOT NULL, -- Schwimmerlaubnis des d.T
    roomRequest TEXT NOT NULL, -- Zimmerwunsch
    dutyArea TEXT NOT NULL, -- Dienstbereich d.T.
    workshop TEXT NOT NULL, -- Workshopwünsche der Teilnehmer
    rulesApproval TEXT NOT NULL, -- Zustimmung der AGB's und der Summersplash Regeln
    tshirt BIT NOT NULL, -- SplashShirt 
    tshirtSize TEXT NOT NULL, -- T-shirt größe
    siblings BIT NOT NULL, -- Geschwister auf dem Summersplash
    siblingsPerson TEXT NOT NULL, -- Nenne der Geschwister auf dem Summersplash
    PRIMARY KEY (id)
);
