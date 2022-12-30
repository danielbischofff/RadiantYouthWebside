window.addEventListener('load', () => main.init());

const main = {
    init(){
        const startSite = new Sites();
        startSite.site1(); 
    },
};

function show(value,site) {
    if(site == "site4"){
        const elements = document.getElementsByClassName("input");
        const site = new Sites();
        if(value == "yes"){
            site.show2();
        }
        if (value == "no"){
            site.delete();
        }
    }
    else {
        const elements = document.getElementsByClassName("input");
        const site = new Sites();
        if(value == "yes"){
            site.show1();
        }
        if (value == "no"){
            site.delete();
        }
    }
}


// ----- text input for e.g. labels or description text ----- //

class Sites {
    parent;
    constructor() {
        this.parent = document.getElementById("registrationFormContainer");
    }
 
    site1(){
        const head = new Header_Footer(this.parent);
        head.header("site1 title","ssubtitle","h1","h4");

        const text = new Text_Container(this.parent);
        let textSize1 = "h3";
        let text1 = "Summer Splash 2022 Anmeldung";
        let classNames1 = "welcomeText container text";
        let id = "s1.text1"
        text.textContainer(textSize1, text1, classNames1, id);

        const textInputContainer = new TextInput_Container(this.parent);
        let labelText1 = "1.Nenne uns bitte die E-Mail-Adresse deiner Eltern. ";
        let descriptionText1 = "Diese benötigen wir, um euch die Rechnung und die Überweisungsunterlagen zuschicken zu können.";
        let inputName1 = "emailParent";
        let inputId1 = "site1.1.input";
        let placeholder1 = "Ihre Antwort eingeben";
        let errorId1 = "e.site1.1.input";
        let errorText1 = "error text";
        let inputRequired1 = true;
        textInputContainer.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const submit = new Submit_Container(this.parent);
        let containerId1 = "s1.c2.submit";
        let btnName1 = "formSubmitBtn";
        let btnText1 = "Weiter";
        let buttonInputId1 = "btn1";
        let nextSite1 = "site2";
        submit.submitContainer(containerId1, btnName1, btnText1, buttonInputId1, nextSite1);
    }
    site2(){
        const head = new Header_Footer(this.parent);
        head.header("site2 title","ssubtitle","h1","h4");

        const textInputContainer1 = new TextInput_Container(this.parent);
        let labelText1 = "2.Vorname(n) ";
        let descriptionText1 = "";
        let inputName1 = "firstName";
        let inputId1 = "site2.2.input";
        let placeholder1 = "Ihre Antwort eingeben";
        let errorId1 = "e.site2.2.input";
        let errorText1 = "error text";
        let inputRequired1 = true;
        textInputContainer1.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainer2 = new TextInput_Container(this.parent);
        labelText1 = "3.Nachname ";
        descriptionText1 = "";
        inputName1 = "lastName";
        inputId1 = "site2.3.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.3.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer2.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);
        
        const textInputContainerRadio1 = new RadioButton_Container(this.parent);
        labelText1 = "4. Geschlecht ";
        descriptionText1 = "";
        inputName1 = "sex";
        inputId1 = "site2.4.input";
        let displayText1 = "männlich";
        let displayText2 = "weiblich";
        errorId1 = "e.site2.4.input";
        errorText1 = "error text";
        textInputContainerRadio1.radioButtonContainer(labelText1, descriptionText1, inputName1, inputId1, displayText1, displayText2, "", "", "", errorId1, errorText1);
        
        const textInputContainer3 = new TextInput_Container(this.parent);
        labelText1 = "5.Geburtsdatum (TT.MM.JJ) ";
        descriptionText1 = "";
        inputName1 = "birthday";
        inputId1 = "site2.5.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.5.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer3.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);
        
        const textInputContainer4 = new TextInput_Container(this.parent);
        labelText1 = "6.Straße und Hausnummer ";
        descriptionText1 = "";
        inputName1 = "street_no";
        inputId1 = "site2.6.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.6.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer4.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainer5 = new TextInput_Container(this.parent);
        labelText1 = "7.Postleitzahl ";
        descriptionText1 = "";
        inputName1 = "postalCode";
        inputId1 = "site2.7.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.7.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer5.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainer6 = new TextInput_Container(this.parent);
        labelText1 = "8.Stadt ";
        descriptionText1 = "";
        inputName1 = "city";
        inputId1 = "site2.8.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.8.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer6.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainer7 = new TextInput_Container(this.parent);
        labelText1 = "9.Kontaktmöglichkeit zu Teilnehmer ";
        descriptionText1 = "E-Mail Adresse des Teilnehmers.";
        inputName1 = "emailParticipant";
        inputId1 = "site2.9.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.9.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer7.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainer8 = new TextInput_Container(this.parent);
        labelText1 = "10.Notfallkontakt ";
        descriptionText1 = "Wen können wir im Notfall anrufen? Bitte den vollständigen Namen und die Telefonnummer angeben.";
        inputName1 = "emergencyContact";
        inputId1 = "site2.10.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.10.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer8.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainer9 = new TextInput_Container(this.parent);
        labelText1 = "11.Gemeinde ";
        descriptionText1 = "Zu welcher Gemeinde gehörst du? Wir wollen dich gerne mit Leuten aus deiner Gemeinde bzw. aus deiner Nähe connecten.";
        inputName1 = "church";
        inputId1 = "site2.11.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.11.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer9.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainer10 = new TextInput_Container(this.parent);
        labelText1 = "12.Lebensmittel ";
        descriptionText1 = "Unverträglichkeiten / Vegetarisch / Vegan / Sonstiges";
        inputName1 = "intolerances";
        inputId1 = "site2.12.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.12.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer10.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainer11 = new TextInput_Container(this.parent);
        labelText1 = "13.Krankheiten / Regelmäßige Einnahme von Medikamenten ";
        descriptionText1 = "";
        inputName1 = "illness";
        inputId1 = "site2.13.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.13.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer11.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainerRadio2 = new RadioButton_Container(this.parent);
        labelText1 = "14.Schwimmerlaubnis im Meer ";
        descriptionText1 = "Falls wir dieses Jahr ans Meer gehen können, müssen wir wissen, ob dir deine Eltern das Schwimmen im Meer erlauben.";
        inputName1 = "swimmingPermit";
        inputId1 = "site2.14.input";
        displayText1 = "Ja";
        displayText2 = "Nein";
        errorId1 = "e.site2.14.input";
        errorText1 = "error text";
        textInputContainerRadio2.radioButtonContainer(labelText1, descriptionText1, inputName1, inputId1, displayText1, displayText2, "", "", "", errorId1, errorText1);


        const textInputContainer12 = new TextInput_Container(this.parent);
        labelText1 = "15.Zimmerwunsch ";
        descriptionText1 = "Mit wem willst du in ein Zimmer? Wir versuchen deine Wünsche zu berücksichtigen, können aber nichts garantieren. Bitte den vollständigen Namen angeben.";
        inputName1 = "roomRequest";
        inputId1 = "site2.15.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.15.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer12.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const checkboxInput1 = new Checkbox_Container(this.parent);
        labelText1 = "16.Dienstbereich ";
        descriptionText1 = "In welchem Dienstbereich willst du mithelfen? Du darfst gerne mehrere Bereiche ankreuzen. Jeder wird in einen Dienstbereich eingeteilt und dabei versuchen wir natürlich deine Wünsche zu berücksichtigen.";
        let classNames = "inputCheckbox_1 inputRequired"

        inputName1 = "serviceArea_worship";
        displayText1 = "Lobpreis";
        let inputName2 = "serviceArea_bistro";
        displayText2 = "Bistro";
        let inputName3 = "serviceArea_deco";
        let displayText3 = "Deko";
        let inputName4 = "serviceArea_soundEngineering";
        let displayText4 = "Tontechnik";
        let inputName5 = "serviceArea_lightEngineering";
        let displayText5 = "Lichttechnik";
        let inputName6 = "serviceArea_beamer";
        let displayText6 = "Beamer";
        let inputName7 = "serviceArea_media";
        let displayText7 = "Media Team";

        errorId1 = "e.check.1";
        errorText1 = "error text";
        checkboxInput1.checkBoxConatainer(labelText1, descriptionText1, classNames, inputName1, displayText1, displayText2, inputName2, 
            displayText3, inputName3, displayText4, inputName4, displayText5, inputName5, displayText6, inputName6,
            displayText7, inputName7, errorId1, errorText1);

        const textInputContainer13 = new TextInput_Container(this.parent);
        labelText1 = "17.Workshop Wunsch ";
        descriptionText1 = "Wir bieten dieses Jahr wieder Workshops an. Gibt es ein Thema, das dich besonders interessiert oder etwas, was du schon immer mal ausprobieren wolltest?";
        inputName1 = "workshopRequest";
        inputId1 = "site2.17.input";
        placeholder1 = "Ihre Antwort eingeben";
        errorId1 = "e.site2.17.input";
        errorText1 = "error text";
        inputRequired1 = true;
        textInputContainer13.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1);

        const textInputContainerRadio3 = new RadioButton_Container(this.parent);
        labelText1 = "18.Stimmst du den AGB und den Splash Regeln zu?";
        descriptionText1 = "Die AGB und die Regeln findest du hier: https://bit.ly/3C50FYK";
        inputName1 = "agbCheck";
        inputId1 = "site2.18.input";
        displayText1 = "Ja, ich stimme den AGB und den Splash Regeln zu.";
        errorId1 = "e.site2.18.input";
        errorText1 = "error text";
        textInputContainerRadio3.radioButtonContainer(labelText1, descriptionText1, inputName1, inputId1, displayText1,"", "", "", "", errorId1, errorText1);



        const submit1 = new Submit_Container(this.parent);
        let containerId1 = "site2.submit";
        let btnName1 = "formSubmitBtn";
        let btnText1 = "Weiter";
        let buttonInputId1 = "btn1";
        let nextSite1 = "site3";
        submit1.submitContainer(containerId1, btnName1, btnText1, buttonInputId1, nextSite1);

        const submit2 = new Submit_Container(this.parent);
        containerId1 = "s2.goBack";
        btnName1 = "goBack";
        btnText1 = "Zurück";
        inputId1 = "btn1";
        nextSite1 = "site1";
        submit2.submitContainer(containerId1, btnName1, btnText1, inputId1, nextSite1);
    }
    site3(){
        const head = new Header_Footer(this.parent);https://www.amazon.de/SteelSeries-Rival-Optischer-Programmierbare-Split-Trigger-Tasten/dp/B082XQHPCL/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2AJXBXFO1WOS0&keywords=Steelseries+Rival+3&qid=1669141916&sprefix=steelseries+rival+3%2Caps%2C77&sr=8-2
        head.header("site3 title","ssubtitle","h1","h4");

        const text1 = new Text_Container(this.parent);
        let textSize1 = "h2";
        let text = "Splash T-Shirt";
        let classNames1 = "tshirtText container text";
        let id = "s3.text1"
        text1.textContainer(textSize1, text, classNames1, id);

        const text2 = new Text_Container(this.parent);
        textSize1 = "h5";
        text = "Auch dieses Jahr wird es wieder Splash T-Shirts geben. Dieses kostet 20 EUR.";
        classNames1 = "tshirtInfoText container text small";
        id = "s3.text2"
        text2.textContainer(textSize1, text, classNames1, id);

        const textInputContainerRadio1 = new RadioButton_Container(this.parent);
        let labelText1 = "19.Willst du ein Splash T-Shirt? ";
        let descriptionText1 = "";
        let inputName1 = "shirt";
        let inputId1 = "site3.1.input";
        let displayText1 = "Ja";
        let displayText2 = "Nein";
        let displayText3 = "";
        let displayText4 = "";
        let displayText5 = "";
        let errorId1 = "e.site3.1.input";
        let errorText1 = "error text";
        let onClickFunction1 = String("show(\"yes\");");
        let onClickFunction2 = String("show(\"no\");");
        let classNames = "container radioButtonContainer inputContainer decision";
        textInputContainerRadio1.radioButtonContainer(labelText1, descriptionText1, inputName1, inputId1, displayText1, 
            displayText2, displayText3, displayText4, displayText5, errorId1, errorText1, onClickFunction1, onClickFunction2, classNames);

        const submit1 = new Submit_Container(this.parent);
        let containerId1 = "s2.c2.submit";
        let btnName1 = "formSubmitBtn";
        let btnText1 = "Weiter";
        inputId1 = "btn1";
        let nextSite1 = "site4";
        submit1.submitContainer(containerId1, btnName1, btnText1, inputId1, nextSite1);

        const submit2 = new Submit_Container(this.parent);
        containerId1 = "s3.c2.submit";
        btnName1 = "goBack";
        btnText1 = "Zurück";
        inputId1 = "btn1";
        nextSite1 = "site2";
        submit2.submitContainer(containerId1, btnName1, btnText1, inputId1, nextSite1);
    }
    site4(){
        const head = new Header_Footer(this.parent);
        head.header("site4 title","ssubtitle","h1","h4");

        const text1 = new Text_Container(this.parent);
        let textSize1 = "h2";
        let text = "Geschwisterrabatt";
        let classNames1 = "siblingText container text";
        let id = "s4.text1"
        text1.textContainer(textSize1, text, classNames1, id);

        const textInputContainerRadio1 = new RadioButton_Container(this.parent);
        let labelText1 = "21.Sind deine Geschwister ebenfalls als Teilnehmer auf dem Summer Splash dabei? ";
        let descriptionText1 = "Es gibt für Geschwisterkinder jeweils einen Rabatt von 20€";
        let inputName1 = "siblingCheck";
        let inputId1 = "site4.1.input";
        let displayText1 = "Ja";
        let displayText2 = "Nein";
        let displayText3 = "";
        let displayText4 = "";
        let displayText5 = "";
        let errorId1 = "e.site4.1.input";
        let errorText1 = "error text";
        let onClickFunction1 = String("show(\"yes\",\"site4\");");
        let onClickFunction2 = String("show(\"no\", \"site4\" );");
        let classNames = "container radioButtonContainer inputContainer decision";
        textInputContainerRadio1.radioButtonContainer(labelText1, descriptionText1, inputName1, inputId1, displayText1, 
            displayText2, displayText3, displayText4, displayText5, errorId1, errorText1, onClickFunction1, onClickFunction2, classNames);

        const submit1 = new Submit_Container(this.parent);
        let containerId1 = "s2.c2.submit";
        let btnName1 = "formSubmitBtn";
        let btnText1 = "Absenden";
        inputId1 = "btn1";
        let nextSite1 = "send";
        submit1.submitContainer(containerId1, btnName1, btnText1, inputId1, nextSite1);

        const submit2 = new Submit_Container(this.parent);
        containerId1 = "s3.c2.submit";
        btnName1 = "goBack";
        btnText1 = "Zurück";
        inputId1 = "btn1";
        nextSite1 = "site3";
        submit2.submitContainer(containerId1, btnName1, btnText1, inputId1, nextSite1);
    }

    sendRegistration(){
        const head = new Header_Footer(this.parent);
        head.header("SEND","Congrats","h1","h4");

        const text1 = new Text_Container(this.parent);
        let textSize1 = "h2";
        let text = "Du bist jetzt angemeldet";
        let classNames1 = "confirmation container text";
        let id = "s5.text1"
        text1.textContainer(textSize1, text, classNames1, id);

        const text2 = new Text_Container(this.parent);
        textSize1 = "h5";
        text = "Du wirst demächst eine bestätigungsmail erhalten mit den Überweisungsdaten zum bezahlen!";
        classNames1 = "tshirtInfoText container text small";
        id = "s5.text2"
        text2.textContainer(textSize1, text, classNames1, id);
    }

    show1(){
        if(!document.querySelector(".dynamicContainer")) {
            const textInputContainerRadio2 = new RadioButton_Container(this.parent);
            let labelText1 = "20.Wähle hier die Größe deines T-Shirts. ";
            let descriptionText1 = "";
            let inputName1 = "shirtSize";
            let inputId1 = "site3.2.input";
            let displayText1 = "S";
            let displayText2 = "M";
            let displayText3 = "L";
            let displayText4 = "XL";
            let displayText5 = "XXL";
            let errorId1 = "e.site3.2.input";
            let errorText1 = "error text";
            let classNames = "dynamicContainer";
            textInputContainerRadio2.radioButtonContainer(labelText1, descriptionText1, inputName1, inputId1, displayText1, 
                displayText2, displayText3, displayText4, displayText5, errorId1, errorText1,0,0,classNames);
        }
    }

    show2(){
        if(!document.querySelector(".dynamicContainer")) {
            const textInputContainer1 = new TextInput_Container(this.parent);
            let labelText1 = "22.Wer sind deine Geschwister? ";
            let descriptionText1 = "Gib bitte den vollständigen Namen an.";
            let inputName1 = "siblingNames";
            let inputId1 = "site4.2.input";
            let placeholder1 = "Ihre Antwort eingeben";
            let errorId1 = "e.site4.2.input";
            let errorText1 = "error text";
            let inputRequired1 = true;
            let classNames = "dynamicContainer";
            textInputContainer1.textInputContainer(labelText1, descriptionText1, inputName1, inputId1, placeholder1, errorId1, errorText1, inputRequired1, classNames);
        }
    }

    delete() {
        if(document.querySelector(".dynamicContainer")) {
            let container = document.querySelector(".dynamicContainer");
            container.remove();
        }
    }
}


// ----- Logic ----- //

class Framework {
    parent;             // div which contains the whole registration Form
    registrationForm;   // form which contains the registration logik
    currentSite;        // site 1, site 2, or site 3
    constructor(parent) {
        const registrationForm = document.getElementById("registrationForm");
        this.parent = parent;
        this.currentSite = "site1";
    }
    
    switchSite(nextSite) {
        this.deleteSite();
        const newSite = new Sites();
        if(nextSite == "send") newSite.sendRegistration();
        if(nextSite == "site1") newSite.site1();
        if(nextSite == "site2") newSite.site2();
        if(nextSite == "site3") newSite.site3();
        if(nextSite == "site4") newSite.site4();

        this.currentSite = nextSite;
    }
    
    deleteSite(){
        // delete the header
        const header = document.getElementById("header");
        while (header.firstChild && header.firstChild != document.getElementById("registerForm")) {
            header.removeChild(header.firstChild);
        }
        
        // delete the contents of the registration form
        let tmp;
        const parent = document.getElementById("registrationFormContainer");
        while (parent.firstChild) {
            if(parent.firstChild == document.getElementById("redStar")) {
                tmp = parent.firstChild;
            } 
            parent.removeChild(parent.firstChild);
        }
        parent.appendChild(tmp);
    }
}

class Helper extends Framework {
    constructor(parent) {
        super(parent);
    }
    
    elementWithClasses(Type, elementType, elementName, elementValue, elementId, elementClassNames, elementInnerText,elementPlaceholder,elementRequired){
        const element = document.createElement(Type);
        for(let elementClassName of elementClassNames.split(" ")) {
            element.classList.add(elementClassName);
        }
        
        if(elementType)         element.setAttribute("type", elementType);
        if(elementName)         element.setAttribute("name", elementName);
        if(elementValue)        element.setAttribute("value", elementValue);
        if(elementId)           element.setAttribute("id", elementId);
        if(elementInnerText)    element.innerText = elementInnerText;
        if(elementPlaceholder)  element.setAttribute("placeholder", elementPlaceholder);
        if(elementRequired)     element.setAttribute('required', '');
        
        return element;
    }
    
    createContainer(containerId, containerClassNames){
        const container = this.elementWithClasses("div",0,0,0, containerId, containerClassNames,0,0,0);
        this.parent.appendChild(container);
        return container;
    }
    
    createRedStar(){
        const star = document.createElement("b");
        star.style.color = "red";
        star.innerText = "*";
        return star;
    }
}

class Header_Footer extends Helper {
    title;
    subtitile;
    
    constructor(parent){
        super(parent);
    }
    
    header(title, subtitile, headerSizeTitle, headerSizeSubtitle){
        const header = document.getElementById("header");
        
        this.title = this.elementWithClasses(headerSizeTitle,0,0,0,0,"title",title,0,0);
        header.appendChild(this.title);
        
        if(subtitile){
            this.subtitile = this.elementWithClasses(headerSizeSubtitle,0,0,0,0,"subtitle",subtitile,0,0);
            header.appendChild(this.subtitile);
        }
    }

    footer(){
        // hardcoded
    }
}

class RadioButton_Container extends Helper {
    constructor(parent){
        super(parent);
    }
    radioButtonContainer(labelText, descriptionText, inputName, inputId, displayText1, displayText2,
        displayText3, displayText4, displayText5, errroId, errorText, onClickFunction1, onClickFunction2, classNames)   {

        if(!classNames) classNames = "container radioButtonContainer inputContainer";
        const container = this.createContainer(0,classNames);
        const br = this.elementWithClasses("br",0,0,0,0,"break",0,0,0); // append child br for new line break

        const label = this.elementWithClasses("label",0,0,0,0,"label",labelText,0,0);
        container.appendChild(label);
        const redStar = this.createRedStar();
        container.appendChild(redStar);

        if(descriptionText){
            const description = this.elementWithClasses("p",0,0,0,0, "text descriptionText", descriptionText,0,0);
            container.appendChild(description);
        }

        container.appendChild(br);
        if(displayText1) this.createRadioButton(container, inputName, inputId, displayText1, "radio1", onClickFunction1);
        if(!displayText2) this.createRadioButton(container, inputName, inputId, displayText2);
        else this.createRadioButton(container, inputName, inputId, displayText2, "radio2", onClickFunction2);
        if(displayText3) this.createRadioButton(container, inputName, inputId, displayText3, "radio3");
        if(displayText4) this.createRadioButton(container, inputName, inputId, displayText4, "radio4");
        if(displayText5) this.createRadioButton(container, inputName, inputId, displayText5, "radio5");
        
        const error = this.elementWithClasses("p",0,0,0,errroId, "error", errorText,0,0);
        error.style.visibility = "hidden";
        container.appendChild(error);
    }

    createRadioButton(container, inputName, inputId, displayText, identifier, onClickFunction) {
        const radioInput = this.elementWithClasses("input", "radio" , inputName,identifier,inputId,"input inputRequired",0,0,0);
        if(onClickFunction) radioInput.setAttribute("onclick", onClickFunction);
        const label = this.elementWithClasses("label",0,0,0,0,"radioLabel",displayText,0,0);
        label.setAttribute("for",identifier);
            
        container.appendChild(radioInput);
        container.appendChild(label);
    }

}

class Checkbox_Container extends Helper {
    constructor(parent){
        super(parent);
    }
    checkBoxConatainer(labelText, descriptionText, classNames, inputName1, displayText1, displayText2, inputName2, 
        displayText3, inputName3, displayText4, inputName4, displayText5, inputName5, displayText6, inputName6,
        displayText7, inputName7, errroId, errorText) {
            
        const container = this.createContainer(0,"container checkBoxContainer inputContainer");

        const label = this.elementWithClasses("label",0,0,0,0,"label",labelText,0,0);
        container.appendChild(label);
        const redStar = this.createRedStar();
        container.appendChild(redStar);

        if(descriptionText){
            const description = this.elementWithClasses("p",0,0,0,0, "text descriptionText", descriptionText,0,0);
            container.appendChild(description);
        }

        if(displayText1) this.createCheckbox(container, displayText1, inputName1, classNames);
        if(displayText2) this.createCheckbox(container, displayText2, inputName2, classNames);
        if(displayText3) this.createCheckbox(container, displayText3, inputName3, classNames);
        if(displayText4) this.createCheckbox(container, displayText4, inputName4, classNames);
        if(displayText5) this.createCheckbox(container, displayText5, inputName5, classNames);
        if(displayText6) this.createCheckbox(container, displayText6, inputName6, classNames);
        if(displayText7) this.createCheckbox(container, displayText7, inputName7, classNames);


        const error = this.elementWithClasses("p",0,0,0,errroId, "error", errorText,0,0);
        error.style.visibility = "hidden";
        container.appendChild(error);
    }

    createCheckbox(container,displayText,inputName, classNames) {
        const checkbox = this.elementWithClasses("input", "checkbox", inputName,displayText,0, classNames,displayText,0,0);
        const label = this.elementWithClasses("label",0,0,0,0,"radioLabel",displayText,0,0);
        label.setAttribute("for",inputName);
        
        container.appendChild(checkbox);
        container.appendChild(label);
        const br = this.elementWithClasses("br",0,0,0,0,"break",0,0,0); // append child br for new line break
        container.appendChild(br);
    }
}

class TextInput_Container extends Helper {
    errorId;
    errorText;

    constructor(parent){
        super(parent);
    }
    textInputContainer(labelText, descriptionText, inputName, inputId, placeholder, errroId, errorText,inputRequired,classNames){
        // set error text and Id
        this.errorId = errroId;
        this.errorText = errorText;
        if(!classNames) classNames = "container textInputContainer inputContainer"

        const container = this.createContainer(0,classNames);
        
        const label = this.elementWithClasses("label",0,0,0,0,"label",labelText,0,0);
        container.appendChild(label);

        if(inputRequired == true) {
            const redStar = this.createRedStar();
            container.appendChild(redStar);
        }
        
        if(descriptionText){
            const description = this.elementWithClasses("p",0,0,0,0, "text descriptionText", descriptionText,0,0);
            container.appendChild(description);
        }
        
        if(inputRequired == true) {
            const input = this.elementWithClasses("input", "text" , inputName,0,inputId,"input inputRequired",0,placeholder,0);
            container.appendChild(input);
            
            const error = this.elementWithClasses("p",0,0,0,errroId, "error", errorText,0,0);
            error.style.visibility = "hidden";
            container.appendChild(error);
        }
        else {
            const input = this.elementWithClasses("input", "text" , inputName,0,inputId,"input",0,placeholder,0);
            container.appendChild(input);
        }
    }
}

class Submit_Container extends Helper {
    constructor(parent){
        super(parent);
    }
    submitContainer(containerId, btnName, btnText, inputId, nextSite){
        const container = this.createContainer(containerId,"container submitButoon");
        const btn = this.elementWithClasses("input","submit",btnName,btnText,inputId,"btn",0,0,0);
        btn.addEventListener('click', () => {this.btnClick(nextSite,btnText);});
        container.appendChild(btn);
    }

    btnClick(nextSite,btnText){
        let valid = true;
        let checkBoxValid= true;
        // if wrong show error message from wrong input
        if(btnText == "Weiter" || btnText == "Absenden") {
            // get form and change default submission
            const form = document.getElementById("registrationForm");
            form.setAttribute("onsubmit", "event.preventDefault();");

            const elements = document.querySelectorAll(".input");
            for(let i = 0; i < elements.length; i++){
                let name = elements[i].getAttribute("name");
                let value = document.forms["registrationForm"][name].value;
                if(this.check(value, elements[i]) == false) valid = false;
            }
            if(this.validCheckBox() == false) checkBoxValid = false;
        }
        else { // button to go back to last site
            const form = document.getElementById("registrationForm");
            form.setAttribute("onsubmit", "");
        }
        if(valid == true && checkBoxValid == true)this.switchSite(nextSite);
    }
    check(value,element) {
        if ((value == "" || value == null) && element.classList.contains("inputRequired")) {
            let inputId = element.getAttribute("id");
            let errorId = String("e."+inputId);
            const errorText = document.getElementById(errorId);
            errorText.style.visibility = "visible";
            element.style.border = "0.5px solid red";
            return false;
        }
        else {
            return true;
        }
    }
    validCheckBox() {
        const checkbox = document.querySelectorAll(".inputCheckbox_1");
        if(checkbox.length < 1) return true;
        for(let i = 0; i < checkbox.length; i++) {
            if(checkbox[i].checked ) {
                return true;
            }
        }
        // Warning! Hardcoded error message
        let errorId = String("e.check.1");
        const errorText = document.getElementById(errorId);
        errorText.style.visibility = "visible";
        return false;
    }
}

class Text_Container extends Helper {
    constructor(parent){
        super(parent);
    }
    textContainer(textSize, text, classNames, id) {      // text size must be like "h3" or "h4"
        const container = this.createContainer(id, classNames);
        const textField = this.elementWithClasses(textSize,0,0,0,0,"textFeld_h",text,0,0);
        container.appendChild(textField);
    }
}