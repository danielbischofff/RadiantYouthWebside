window.addEventListener("load", () => {Body.init()}); // change site while teating here

const Body = {      // fill the divs with the content
    const: arrayFillSite = [], // array of all input objects of the current site 

    init(){
        this.arrayFillSite = this.inputArrayList();
        this.logic();
    },

    submitButton(parent){
        const container = this.containerDivs(parent, this.arrayFillSite.length + 1);
        const button = this.createNewElement("input", "submitButton", 0, 0);
        button.setAttribute("type", "submit");
        button.setAttribute("value", "Absenden");
        container.appendChild(button);
    },

    logic(){
        const parent = document.getElementById("registrationFormContainer");
        for(let i = 0; i < this.arrayFillSite.length; i++){
            const container = this.containerDivs(parent, i);
            if(this.checkForSpecialTreatment(i, container)) { continue; }
            if(this.arrayFillSite[i].type == "tI" || this.arrayFillSite[i].type == "tIwD") this.textInput(i, container);
            else if(this.arrayFillSite[i].type == "dDL") this.dropDownList(i, container, 1);
        }
        this.submitButton(parent);
    },

    checkForSpecialTreatment(i, container){
        const stringArray = this.arrayFillSite[i].specialTreatment.split("_");
        if(stringArray[0] == "yes") {
            if(stringArray[1] == "numberOfSelectBoxes") this.dropDownList(i, container, stringArray[2]);
            if(stringArray[1] == "onSelectChangeAnimation" && stringArray[2] != "displayOnYes") this.animationAfterSelectYes(i, container);
            return true;
        }
    },

    selectOnChangeYes(id){
        // get acces to the id
        const stringArray = id.split("_");

        select_old = document.getElementById(id);
        container_old =  document.getElementById(`containerDiv_${stringArray[1]}`);
        // get new container and new i 
        let i_new = parseInt(stringArray[1]) + 1;
        let container_new = document.getElementById(`containerDiv_${i_new}`);
        
        if(select_old.value == "yes"){     // Yes
            // check type of next input
            if(this.arrayFillSite[i_new].type == "tI" || this.arrayFillSite[i_new].type == "tIwD") this.textInput(i_new, container_new);
            else if(this.arrayFillSite[i_new].type == "dDL") this.dropDownList(i_new, container_new, 1);
            // border for better visibility
            container_old.style.border = "1px solid black";
            container_old.style.borderBottom = "0";
            container_old.style.padding = "2%";
            container_old.style.paddingRight = "0";
            container_old.style.paddingBottom = "0";
            container_new.style.border = "1px solid black";
            container_new.style.borderTop = "0";
            container_new.style.padding = "2%";
            container_new.style.paddingRight = "0";
            container_new.style.marginBottom = "2%";
        }
        if(select_old.value == "no"){     // No
            while (container_new.firstChild) {
                container_new.removeChild(container_new.firstChild);
            }
            container_old.style.border = "0";
            container_old.style.padding = "0";
            container_new.remove();
        }
        
        // check for special Treatment
        const stringArray_st = this.arrayFillSite[i_new].specialTreatment.split("_");
        if(stringArray_st[1] == "onSelectChangeAnimation" && stringArray_st[2] == "displayOnYes"){
            select_new = document.getElementById(`select_${i_new}_1`);
            select_new.setAttribute("onchange", `Body.createSiblings("select_${i_new}_1")`);
        }
    },
    createSiblings(id){
        // get acces to the id
        const stringArray = id.split("_");

        select_old = document.getElementById(id);
        container_old =  document.getElementById(`containerDiv_${stringArray[1]}`);
        // get new container and new i 
        let i_new = parseInt(stringArray[1]) + 1;
        let container_new = document.getElementById(`containerDiv_${i_new}`);

        //container_new.style.borderBottom = "";
        //container_new.style.padding = "2%";
        //container_new.style.border = "1px solid black";
        //container_new.style.borderTop = "";
        

        let number_of_siblings = 0;
        if(select_old.value == "siblingsNumber_0") number_of_siblings = 0;  // 0 sibling
        if(select_old.value == "siblingsNumber_1") number_of_siblings = 1;  // 1 sibling
        if(select_old.value == "siblingsNumber_2") number_of_siblings = 2;   // 2 sibling
        if(select_old.value == "siblingsNumber_3") number_of_siblings = 3;   // 3 sibling
        if(select_old.value == "siblingsNumber_4") number_of_siblings = 4;   // 4 sibling
        
        for(let n = 0; n < number_of_siblings; n++){
            //i_new = i_new + n;
            //container_new = document.getElementById(`containerDiv_${i_new}`);
            this.textInput(i_new, container_new);
        }

    },

    animationAfterSelectYes(i, container){
        this.dropDownList(i, container, 1);
        let select = document.getElementById(`select_${i}_1`);
        select.setAttribute("onchange", `Body.selectOnChangeYes("select_${i}_1")`);
    },
    
    textInput(i, container) {   //textInput short: tI; textInputWithDescription short: tIwD
        container.appendChild(this.createNewElement("label", "label", 0, this.arrayFillSite[i].labelText));
        if(this.arrayFillSite[i].required == "yes") container.appendChild(this.createRedStar());
        if(this.arrayFillSite[i].type == "tIwD"){
            container.appendChild(this.createNewElement("p", "description", 0, this.arrayFillSite[i].descriptionText));
        }
        const input = this.createNewElement("input", "textInput", `input__${i}`,0);
        input.setAttribute("type", "text");
        input.setAttribute("name", this.arrayFillSite[i].name);
        input.setAttribute("placeholder", "Ihre Antwort eingeben");
        container.appendChild(input);
    },


    dropDownList(i, container, numberOfSelects){ //short: dDL
        container.appendChild(this.createNewElement("label", "label", 0, this.arrayFillSite[i].labelText));
        if(this.arrayFillSite[i].required == "yes") container.appendChild(this.createRedStar());
        if(this.arrayFillSite[i].descriptionText){
            container.appendChild(this.createNewElement("p", "description", 0, this.arrayFillSite[i].descriptionText));
        } else {
            container.appendChild(this.createNewElement("br",0,0,0));
        }

        for(let m = 1; m <= numberOfSelects; m++){ // for multiple selects in one div
            if(numberOfSelects > 1){ // labels for prio
                container.appendChild(this.createNewElement("label", "label_select_prio", 0, `Priorität ${m}:`));
            }
            const select = this.createNewElement("select", "select", 0, 0);
            select.setAttribute("id", `select_${i}_${m}`);
            //select.setAttribute("onchange", "this.selectOnChange()");
            container.appendChild(select);
            for(let n = 0; n < this.arrayFillSite[i].numberOfOptions; n++){
                const option = this.createNewElement("option", "option", 0, 0);
                const string_option = `this.arrayFillSite[${i}].option_${n}`;
                const string_optionValue = `this.arrayFillSite[${i}].option_${n}_value`;
                option.innerText = eval(string_option);
                option.setAttribute("value", eval(string_optionValue));
                option.setAttribute("id", `select_${i}_options_${n}`);
                select.appendChild(option);
            }
        }
    },

    containerDivs(parent, i){
        let div = document.createElement("div");
        let id = `containerDiv_${i}`;
        div.setAttribute("id", id);
        parent.appendChild(div);
        return div;
    },

    createNewElement(elementtype, elementClassNames, elementId, elementInnerText) { // multpile class names seperated by spaces!
        const element = document.createElement(elementtype);
        if(elementClassNames) {
            for(let elementClassName of elementClassNames.split(" ")) {
                element.classList.add(elementClassName);
            }
        }
        if(elementId) element.setAttribute("id", elementId);
        if(elementInnerText) element.innerText = elementInnerText;
        return element;
    },

    createRedStar() {
        const star = document.createElement("b");
        star.style.color = "red";
        star.innerText = " *";
        return star;
    },
    
    inputArrayList(){
        // const example1 = { type: "tI", required: "yes", labelText: "Example_Label", name: "example_name" };
        // const example2 = { type: "tIwD", required: "yes", labelText: "Example_Label", descriptionText: "Example_description", name: "example_name" };
        // const example3 = { type: "dDL", required: "yes", labelText: "Example_Label", descriptionText: "Example_description", name:"example_name", 
        //      numberOfOptions: "2", option_1: "option_1", option_1_value: "option_1_value", option_2: "option_2", option_2_value: "option_2_value" };
        
        
        // text inputs without descriptions
        const input_2 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "2. Vorname(n)", name: "forname"};
        const input_3 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "3. Nachname", name: "surname"};
        const input_4 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "4. Geschlecht", name: "sex"};
        const input_7 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "7. Straße und Hausnummer", name: "adress"};
        const input_8 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "8. Postleitzahl", name: "postalCode"};
        const input_9 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "9. Stadt", name: "city"};
        const input_14 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "14. Krankheiten / Regelmäßige Einnahme von Medikamenten", name: "medicalNote"};
        const input_23 = {type: "tI", required: "no", specialTreatment: "yes_displayOnYes", labelText: "23. Vor- und Nachname von einem Bruder / Schwester", name: "siblingsPerson"};
        
        // text inputs with descriptions
        const input_1 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "1. Nenne uns bitte die E-Mail-Adresse deiner Eltern.", descriptionText: "Diese benötigen wir, um euch die Rechnung und die Überweisungsunterlagen zuschicken zu können.", name: "parentsMail" };
        const input_5 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "5. Geburtsdatum (TT.MM.JJ)", descriptionText: "Altersspanne: 13 - 19 Jahre", name: "birthday" };
        const input_6 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "6. Geburtsland", descriptionText: "Wir müssen das Land beim Hotel angeben.", name: "birthLand" };
        const input_10 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "10. Kontaktmöglichkeit zu Teilnehmer", descriptionText: "E-Mail Adresse des Teilnehmers.", name: "mailParticipant" };
        const input_11 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "11. Notfallkontakt", descriptionText: "Wen können wir im Notfall anrufen? Bitte den vollständigen Namen und die Telefonnummer angeben.", name: "emergencyContact" };
        const input_12 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "12. Gemeinde", descriptionText: "Zu welcher Gemeinde gehörst du? Wir wollen dich gerne mit Leuten aus deiner Gemeinde bzw. aus deiner Nähe connecten.", name: "church" };
        const input_13 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "13. Lebensmittel", descriptionText: "Unverträglichkeiten / Vegetarisch / Vegan / Sonstiges", name: "eatingHabits" };
        const input_16 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "16. Zimmerwunsch", descriptionText: "Mit wem willst du in ein Zimmer? Wir versuchen deine Wünsche zu berücksichtigen, können aber nichts garantieren. Bitte den vollständigen Namen angeben.", name: "roomRequest" };
        const input_18 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "18. Workshop Wunsch", descriptionText: "Wir bieten dieses Jahr wieder Workshops an. Gibt es ein Thema, das dich besonders interessiert oder etwas, was du schon immer mal ausprobieren wolltest?", name: "workshop" };
        
        // select input
        const input_15 = { type: "dDL", required: "yes", specialTreatment: "no", labelText: "15. Schwimmerlaubnis im Meer", descriptionText: "Falls wir dieses Jahr ans Meer gehen können, müssen wir wissen, ob dir deine Eltern das Schwimmen im Meer erlauben.", name:"swimmPermission", 
            numberOfOptions: "2", option_0: "Nein", option_0_value: "swimmPermission_no", option_1: "Ja", option_1_value: "swimmPermission_yes" };
        
            const input_17 = { type: "dDL", required: "yes", specialTreatment: "yes_numberOfSelectBoxes_2", labelText: "17. Dienstbereich", descriptionText: "In welchem Dienstbereich willst du mithelfen? Du darfst gerne mehrere Bereiche ankreuzen. Jeder wird in einen Dienstbereich eingeteilt und dabei versuchen wir natürlich deine Wünsche zu berücksichtigen.", name:"dutyArea", 
            numberOfOptions: "7", option_0: "Lobpreis", option_0_value: "worship", option_1: "Bistro", option_1_value: "bistro", option_2: "Deko", option_2_value: "deco", option_3: "Tontechnik", option_3_value: "sound", option_4: "Lichttechnik", option_4_value: "light", 
            option_5: "Beamer", option_5_value: "beamer", option_6: "Media Team", option_6_value: "media"};
        
        const input_19 = { type: "dDL", required: "yes", specialTreatment: "yes_onSelectChangeAnimation", labelText: "19. Willst du ein Splash T-Shirt?", descriptionText: "Auch dieses Jahr wird es wieder Splash T-Shirts geben. Dieses kostet 20 EUR.", name:"tshirt", 
            numberOfOptions: "2", option_0: "Nein", option_0_value: "no", option_1: "Ja", option_1_value: "yes"};
        
        const input_20 = { type: "dDL", required: "no", specialTreatment: "yes_displayOnYes", labelText: "20. Wähle hier die Größe deines T-Shirts.", descriptionText: "", name:"tshirtSize", 
            numberOfOptions: "5", option_0: "S", option_0_value: "tShirtSize_S", option_1: "M", option_1_value: "tShirtSize_M", option_2: "L", option_2_value: "tShirtSize_L", option_3: "XL", option_3_value: "tShirtSize_XL", option_4: "XXL", option_4_value: "tShirtSize_XXL"};
        
        const input_21 = { type: "dDL", required: "yes", specialTreatment: "yes_onSelectChangeAnimation", labelText: "21. Sind deine Geschwister ebenfalls als Teilnehmer auf dem Summer Splash dabei?", descriptionText: "Es gibt für Geschwisterkinder jeweils einen Rabatt von 20€", name:"siblings", 
            numberOfOptions: "2", option_0: "Nein", option_0_value: "no", option_1: "Ja", option_1_value: "yes" };

        const input_22 = { type: "dDL", required: "no", specialTreatment: "yes_onSelectChangeAnimation_displayOnYes", labelText: "22. Wie viele Geschwister sind als Teilnhemer auf dem Summer Splash dabei?", descriptionText: "", name:"siblingsNumber", 
            numberOfOptions: "5", option_0: "0", option_0_value: "siblingsNumber_0", option_1: "1", option_1_value: "siblingsNumber_1", option_2: "2", option_2_value: "siblingsNumber_2", option_3: "3", option_3_value: "siblingsNumber_3", option_4: "4", option_4_value: "siblingsNumber_4"};

        const input_24 = { type: "dDL", required: "yes", specialTreatment: "no", labelText: "24. Stimmst du den AGB und den Splash Regeln zu?", descriptionText: `Die AGB und die Regeln findest du hier: <a href="Link-Ziel>Link-Text</a>`, name:"rulesApproval", 
                numberOfOptions: "2", option_0: "NEIN, ich stimme den AGB und den Splash Regeln nicht zu.", option_0_value: "rulesApproval_no", option_1: "JA, ich stimme den AGB und den Splash Regeln zu.", option_1_value: "rulesApproval_yes" };

        // fill array
        arrayFillSite = [input_1, input_2, input_3, input_4, input_5, input_6, input_7, input_8, input_9, input_10, input_11, input_12, input_13, input_14, input_15, input_16, input_17, input_18, input_19, input_20, input_21, input_22, input_23, input_24]; // array of all objects
        
        return arrayFillSite;
    },
}