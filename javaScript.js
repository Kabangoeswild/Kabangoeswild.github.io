var einverständnis = sessionStorage.getItem("Zustimmung");
var einverständnisZusatz = sessionStorage.getItem("zusatz");

//Cookies Anzeige
function cookies()
{   
    //console.log("cookies"); 
    if(document.getElementById("notwendig").checked == false)
        {   
             //console.log("cookies");
            window.alert("Du musst die technisch notwendigen Cookies annehmen um diese Website besuchen zu können")
            jQuery("#cookies").dialog("open");

        }
    else
        {
            jQuery("#cookies").dialog("close");
            sessionStorage.setItem("Zustimmung", true); //speichert wenn Einverständnis gegeben wurde
        }
    if(document.getElementById("zusatz").checked) //zum speichern von zusätzlichen Cookies
        {
            sessionStorage.setItem("zusatz", true);
        }
    else
        {
            sessionStorage.setItem("zusatz", false);
        }
}
//Cookies überprüfen
function prüfung()
{
    //console.log("prüfung");
    if(einverständnis == false)
        {
            jQuery("#cookies").dialog("open");
        }
    else
        {
            jQuery("#cookies").dialog("close");
        }
}

//Kontaktformular
function formcheck()
    {   //console.log("formcheck");
        let erfolg = true;
        //Vorname
        if (document.kontakt.Vorname.value == "")
        {
            document.kontakt.Vorname.style.border="1px solid red";
            erfolg = false;
        }
        else
        {
            document.kontakt.Vorname.style.border="1px solid lightgrey";
        }

        //Nachname
        if (document.kontakt.Nachname.value == "")
        {
            document.kontakt.Nachname.style.border="1px solid red";
            erfolg = false;
        }
        else
        {
            document.kontakt.Nachname.style.border="1px solid lightgrey";
        }        

        //Email
        if (document.kontakt.Email.value == "")
        {
            document.kontakt.Email.style.border="1px solid red";
            erfolg = false;
        }
        else
        {
            document.kontakt.Email.style.border="1px solid lightgrey";
        }  

        //Nachricht
        if (document.kontakt.Nachricht.value == "")
        {
            document.kontakt.Nachricht.style.border="1px solid red";
            erfolg = false;
        }
        else
        {
            document.kontakt.Nachricht.style.border="1px solid lightgrey";
        }  


    if (erfolg==false)
        {
          window.alert("Sie haben das Formular nicht vollständig ausgefüllt. Bitte füllen Sie noch die markierten Felder aus.");
        }
    return erfolg;

    //Verlassen der Seite


    }
    //Hinweis bei Verlassen der Webseite
    function abbruch()
    {   console.log("abbruch")
        if(document.getElementById("Vorname") != "" ||document.getElementById("Nachricht") != "" ||document.getElementById("Email") != "" ||document.getElementById("Nachname") != "" && einverständnisZusatz == false)
            {
                jQuery().dialog("open");
                if(document.getElementById("bleiben").click)
                    {
                    event.preventDefault
                    }

            }
        else
            {
                jQuery().dialog("close");
            }
    }