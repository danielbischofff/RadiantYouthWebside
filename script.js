window.addEventListener("load", () => {Main.init()});

const Main = {
    const: arrayFillSite = [], // array of all input objects of the current site 

    init(){
        this.arrayFillSite = this.inputArrayList();
        this.logic();
        
    },

    logic(){
        const parent = document.getElementById("registrationFormContainer");
        for (let index = 0; index < this.arrayFillSite.length; index++) {
            const container = this.containerDivs(parent, index);
            if(this.checkForSpecialTreatment(container, index)) { continue; } // if true index skipped
            if(this.arrayFillSite[index].type == "tI" || this.arrayFillSite[index].type == "tIwD") this.createInput(container, index, "text");
            else if(this.arrayFillSite[index].type == "mI" || this.arrayFillSite[index].type == "mIwD") this.createInput(container, index, "email");
            else if(this.arrayFillSite[index].type == "dI") this.createInput(container, index, "date");
            else if(this.arrayFillSite[index].type == "dDL") this.dropDownList(container, index, 1);
            else console.log("Invalid Type!");
        }
    },

    // -- Fill the Container div --
    createInput(container, i, type) {   //textInput short: tI; textInputWithDescription short: tIwD; mailInput with description = mIwD;
        container.appendChild(this.createNewElement("label", "label", 0, this.arrayFillSite[i].labelText));
        if(this.arrayFillSite[i].required == "yes") container.appendChild(this.createRedStar());
        if(this.arrayFillSite[i].type == "tIwD" || this.arrayFillSite[i].type == "mIwD"){
            container.appendChild(this.createNewElement("p", "description", 0, this.arrayFillSite[i].descriptionText));
        }
        const input = this.createNewElement("input", type, `input_${i}`,0);
        input.setAttribute("type", type);
        input.setAttribute("name", this.arrayFillSite[i].name);
        input.setAttribute("placeholder", "Ihre Antwort eingeben");
        container.appendChild(input);
    },

    dropDownList(container, i, numberOfDDL){ //short: dDL
        container.appendChild(this.createNewElement("label", "label", 0, this.arrayFillSite[i].labelText));
        if(this.arrayFillSite[i].required == "yes") container.appendChild(this.createRedStar());
        if(this.arrayFillSite[i].descriptionText){
            container.appendChild(this.createNewElement("p", "description", 0, this.arrayFillSite[i].descriptionText));
        } else {
            container.appendChild(this.createNewElement("br",0,0,0));
        }

        for(let select_no = 0; select_no < numberOfDDL; select_no++){ // for multiple selects in one div
            if(numberOfDDL > 1){ // labels for prio
                container.appendChild(this.createNewElement("label", "label_select_prio", 0, `Priorität ${select_no+1}:`));
            }
            // create the select element
            const select = this.createNewElement("select", "select", 0, 0);
            select.setAttribute("id", `select_${i}_${select_no+1}`);
            container.appendChild(select);
            // create the options
            for(let option_no = 0; option_no < this.arrayFillSite[i].numberOfOptions; option_no++){
                const option = this.createNewElement("option", "option", 0, 0);
                const string_option = `this.arrayFillSite[${i}].option_${option_no}`;
                const string_optionValue = `this.arrayFillSite[${i}].option_${option_no}_value`;
                option.innerText = eval(string_option);
                option.setAttribute("value", eval(string_optionValue));
                select.appendChild(option);
            }
        }
    },

    // --Dynamic part --
    checkForSpecialTreatment(container, i){
        const stringArray = this.arrayFillSite[i].specialTreatment.split("_");
        if(stringArray[0] == "yes") {
            if(stringArray[1] == "numberOfSelectBoxes" && stringArray[3] == "checkForDouble") this.dropDownList(container, i, stringArray[2]);
            if(stringArray[1] == "onSelectChangeAnimation") this.onSelectChangeAnimation(container, i);
            
            if(stringArray[1] == "requiredYes") {
                this.dropDownList(container, i, 1);
                this.createLink(container, i);
            }

            if(stringArray[1] == "check") this.createInput(container, i, stringArray[2]);
            
            return true;
        }
    },
    
    onSelectChangeAnimation(container, current_i){
        this.dropDownList(container, current_i, 1);

        //let currentContainerId = `containerDiv_${current_i}`;
        //let currentContainer = document.getElementById(currentContainerId);
        //currentContainer.classList.add("dynamicContainer");
        
        let new_i = current_i + 1;    

        let currentId = `select_${current_i}_1`;
        let currentDDl = document.getElementById(currentId);
        
        currentDDl.setAttribute("onchange", `Main.selectOnChange(${current_i}, ${new_i})`);
    },

    selectOnChange(current_i, new_i){
        
        let currentId = `select_${current_i}_1`;
        let currentDDl = document.getElementById(currentId);

        let newId = `select_${new_i}_1`;
        let newContainerId = `containerDiv_${new_i}`;
        let newContainer = document.getElementById(newContainerId);

        if(currentDDl.value == "yes"){
            if(this.arrayFillSite[new_i].type == "tI" || this.arrayFillSite[new_i].type == "tIwD") this.createInput(newContainer, new_i, "text");
            else if(this.arrayFillSite[new_i].type == "dDL") this.dropDownList(newContainer, new_i, 1);
            newContainer.classList.add("dynamicContainer");
        }
        else if(currentDDl.value == "no"){
            while (newContainer.firstChild) {
                newContainer.removeChild(newContainer.firstChild);
                newContainer.classList.remove("dynamicContainer");
            }
        }
        else if(currentDDl.value == 1 || currentDDl.value == 2 || currentDDl.value == 3 || currentDDl.value == 4){
            // reset
            while (newContainer.firstChild) {
                newContainer.removeChild(newContainer.firstChild);
                newContainer.classList.remove("dynamicContainer");
            }
            // build new
            for(let numOf = 0; numOf < currentDDl.value; numOf++){
                if(this.arrayFillSite[new_i].type == "tI" || this.arrayFillSite[new_i].type == "tIwD") this.createInput(newContainer, new_i, "text");
                else if(this.arrayFillSite[i_new].type == "dDL") this.dropDownList(newContainer, new_i, 1);
                newContainer.classList.add("dynamicContainer");
            }
        }
        else if(currentDDl.value == 0){
            while (newContainer.firstChild) {
                newContainer.removeChild(newContainer.firstChild);
                newContainer.classList.remove("dynamicContainer");
            }
        }
        else{console.log("on change Error!")}
    },
    
    // -- Link -- 
    createLink(container, i){
        let text = this.createNewElement("p", "link", 0, "Die AGB und die Regeln findest du hier");
        container.insertBefore(text, container.children[2]);
        text.addEventListener("click", function() { window.open("https://bit.ly/3C50FYK"); } );
    },

    // -- Helper --
    containerDivs(parent, index){
        let div = document.createElement("div");
        let id = `containerDiv_${index}`;
        div.setAttribute("id", id);
        parent.appendChild(div);
        return div;
    },

    createNewElement(elementtype, elementClassNames, elementId, elementInnerText) { // multpile class names seperated by spaces in a String!
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


    // -- Create the Array --
    inputArrayList(){
        // Template:
        // const example1 = { type: "tI", required: "yes", labelText: "Example_Label", name: "example_name" };
        // const example2 = { type: "tIwD", required: "yes", labelText: "Example_Label", descriptionText: "Example_description", name: "example_name" };
        // const example3 = { type: "dDL", required: "yes", labelText: "Example_Label", descriptionText: "Example_description", name:"example_name", 
        //      numberOfOptions: "2", option_1: "option_1", option_1_value: "option_1_value", option_2: "option_2", option_2_value: "option_2_value" };
        // Mail Input = mI; Mail Input with description = mIwD; date Input = dI 
        // tI und tIwD und mI == String; dI == date;  
        
        // text inputs without descriptions
        const input_2 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "2. Vorname(n)", name: "forname"};
        const input_3 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "3. Nachname", name: "surname"};
        const input_7 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "7. Straße und Hausnummer", name: "street_number"};
        const input_8 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "8. Postleitzahl", name: "postalCode"};
        const input_9 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "9. Stadt", name: "city"};
        const input_14 = {type: "tI", required: "yes", specialTreatment: "no", labelText: "14. Krankheiten / Regelmäßige Einnahme von Medikamenten", name: "medicalNote"};
        const input_22 = {type: "tI", required: "no", specialTreatment: "yes_displayOnNumber", labelText: "22. Vor- und Nachname von einem Bruder / Schwester", name: "siblingsPerson"};
        
        // text inputs with descriptions
        const input_1 = {type: "mIwD", required: "yes", specialTreatment: "yes_check_email", labelText: "1. Nenne uns bitte die E-Mail-Adresse deiner Eltern.", descriptionText: "Diese benötigen wir, um euch die Rechnung und die Überweisungsunterlagen zuschicken zu können.", name: "mailParents"};
        const input_5 = {type: "dI", required: "yes", specialTreatment: "yes_check_date", labelText: "5. Geburtsdatum", descriptionText: "Altersspanne: 13 - 19 Jahre", name: "birthday" };
        const input_6 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "6. Geburtsland", descriptionText: "Wir müssen das Land beim Hotel angeben.", name: "birthdayCountry" };
        const input_10 = {type: "mIwD", required: "yes", specialTreatment: "yes_check_email", labelText: "10. Kontaktmöglichkeit zu Teilnehmer", descriptionText: "E-Mail Adresse des Teilnehmers.", name: "mailParticipant" };
        const input_11 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "11. Notfallkontakt", descriptionText: "Wen können wir im Notfall anrufen? Bitte den vollständigen Namen und die Telefonnummer angeben.", name: "emergencyContact" };
        const input_12 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "12. Gemeinde", descriptionText: "Zu welcher Gemeinde gehörst du? Wir wollen dich gerne mit Leuten aus deiner Gemeinde bzw. aus deiner Nähe connecten.", name: "church" };
        const input_13 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "13. Lebensmittel", descriptionText: "Unverträglichkeiten / Vegetarisch / Vegan / Sonstiges", name: "eatingHabits" };
        const input_16 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "16. Zimmerwunsch", descriptionText: "Mit wem willst du in ein Zimmer? Wir versuchen deine Wünsche zu berücksichtigen, können aber nichts garantieren. Bitte den vollständigen Namen angeben.", name: "roomRequest" };
        const input_18 = {type: "tIwD", required: "yes", specialTreatment: "no", labelText: "18. Workshop Wunsch", descriptionText: "Wir bieten dieses Jahr wieder Workshops an. Gibt es ein Thema, das dich besonders interessiert oder etwas, was du schon immer mal ausprobieren wolltest?", name: "workshop" };
        
        // select input
        const input_4 = { type: "dDL", required: "yes", specialTreatment: "no", labelText: "4. Geschlecht", descriptionText: "", name:"sex", 
            numberOfOptions: "2", option_0: "männlich", option_0_value: "male", option_1: "weiblich", option_1_value: "female"};

        const input_15 = { type: "dDL", required: "yes", specialTreatment: "no", labelText: "15. Schwimmerlaubnis im Meer", descriptionText: "Falls wir dieses Jahr ans Meer gehen können, müssen wir wissen, ob dir deine Eltern das Schwimmen im Meer erlauben.", name:"swimmPermission", 
            numberOfOptions: "2", option_0: "Nein", option_0_value: "no", option_1: "Ja", option_1_value: "yes" };
        
            const input_17 = { type: "dDL", required: "yes", specialTreatment: "yes_numberOfSelectBoxes_2_checkForDouble", labelText: "17. Dienstbereich", descriptionText: "In welchem Dienstbereich willst du mithelfen? Du darfst gerne mehrere Bereiche ankreuzen. Jeder wird in einen Dienstbereich eingeteilt und dabei versuchen wir natürlich deine Wünsche zu berücksichtigen.", name:"dutyArea", 
            numberOfOptions: "7", option_0: "Lobpreis", option_0_value: "worship", option_1: "Bistro", option_1_value: "bistro", option_2: "Deko", option_2_value: "deco", option_3: "Tontechnik", option_3_value: "sound", option_4: "Lichttechnik", option_4_value: "light", 
            option_5: "Beamer", option_5_value: "beamer", option_6: "Media Team", option_6_value: "media"};
        
        const input_19 = { type: "dDL", required: "yes", specialTreatment: "yes_onSelectChangeAnimation", labelText: "19. Willst du ein Splash T-Shirt?", descriptionText: "Auch dieses Jahr wird es wieder Splash T-Shirts geben. Dieses kostet 20 EUR.", name:"tshirt", 
            numberOfOptions: "2", option_0: "Nein", option_0_value: "no", option_1: "Ja", option_1_value: "yes"};
        
        const input_20 = { type: "dDL", required: "no", specialTreatment: "yes_displayOnYes", labelText: "20. Wähle hier die Größe deines T-Shirts.", descriptionText: "", name:"tshirtSize", 
            numberOfOptions: "5", option_0: "S", option_0_value: "S", option_1: "M", option_1_value: "M", option_2: "L", option_2_value: "L", option_3: "XL", option_3_value: "XL", option_4: "XXL", option_4_value: "XXL"};

        const input_21 = { type: "dDL", required: "no", specialTreatment: "yes_onSelectChangeAnimation", labelText: "21. Wie viele Geschwister sind als Teilnhemer auf dem Summer Splash dabei?", descriptionText: "", name:"siblings", 
            numberOfOptions: "5", option_0: "0", option_0_value: "0", option_1: "1", option_1_value: "1", option_2: "2", option_2_value: "2", option_3: "3", option_3_value: "3", option_4: "4", option_4_value: "4"};

        const input_23 = { type: "dDL", required: "yes", specialTreatment: "yes_requiredYes", labelText: "23. Stimmst du den AGB und den Splash Regeln zu?", descriptionText: ``, name:"rulesApproval", 
                numberOfOptions: "2", option_0: "NEIN, ich stimme den AGB und den Splash Regeln nicht zu.", option_0_value: "no", option_1: "JA, ich stimme den AGB und den Splash Regeln zu.", option_1_value: "yes" };

        // fill array
        arrayFillSite = [input_1, input_2, input_3, input_4, input_5, input_6, input_7, input_8, input_9, input_10, input_11, input_12, input_13, input_14, input_15, input_16, input_17, input_18, input_19, input_20, input_21, input_22, input_23]; // array of all objects
        return arrayFillSite;
    }
}