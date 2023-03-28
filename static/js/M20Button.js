/* JS file for M20Button.html */

let type = document.getElementById("buttonType");
let contact = document.getElementById("contacts");
let voltage = document.getElementById("led_voltage");
let led_color = document.getElementById("led_color");
let pressel_type = document.getElementById("pressel");
let pressel_finish = document.getElementById("pressel_finish");
let legend = document.getElementById("legend");

let output = document.getElementById("output");

/* Selection of options for components */
const types = {"2": "M20 European",
               "6": "M20 Australian"
              };

const contacts = {"1": "2 x N/O",
                  "2": "Changeover 1 x C/O",
                  "3": "1 x N/O 1 x N/C"
                 };

const leds_voltage = {"1": "Non Illuminated",
                      "2": "12VDC (Phone & Alarm)",
                      "3": "24VDC",
                      "6": "6VDC"
                     };

const leds_color = {"00": "Non Illuminated",
                    "01": "Opal",
                    "02": "Red",
                    "03": "Amber",
                    "04": "Blue",
                    "05": "Green",
                    "11": "Dual Opal",
                    "12": "Dual Red",
                    "13": "Dual Amber",
                    "14": "Dual Blue",
                    "15": "Dual Green",
                    "22": "Opal/Red",
                    "23": "Opal/Amber",
                    "24": "Opal/Blue",
                    "25": "Opal/Green",
                    "27": "Amber/Green"
                   };


const pressel_types = {"6": "RSB (Stainless Steel)",
                       "6": "REB (Coloured Anodized Aluminium)"
                      };

const pressel_finishes = {"1": "Stainless Steel Linished (RSB)",
                          "5": "Red / Yellow / Green Anodized (REB)",
                          "6": "Black Anodized (REB)",
                         };

/* Selects components, generate stock code and outputs to HTML */
function generateStockCode(){

        let tp = type.value
        let type_code = selectComponentCode(types, tp);

        let ct = contact.value;
        let contact_code = selectComponentCode(contacts, ct);

        let vol = voltage.value;
        let led_voltage_code = selectComponentCode(leds_voltage, vol);

        let col = led_color.value;
        let led_color_code = selectComponentCode(leds_color, col);

        let pres_type = pressel_type.value;
        let pressel_code = selectComponentCode(pressel_types, pres_type);

        let pres_finish = pressel_finish.value;
        let pressel_finish_code = selectComponentCode(pressel_finishes, pres_finish);

        let legend_code = legend.value;


    output.style.color = 'rgb(34, 105, 172)';
    output.innerHTML = "DEW BUT" + " " + type_code + "6" + contact_code +
                                         "1" + pressel_finish_code +
                                         led_color_code + led_voltage_code +
                                         "2" + "1" + legend_code;
}


function selectComponentCode(dictionary, component_value){

    let comp = component_value;

    for(var key in dictionary) {
        var value = dictionary[key];
        console.log(value);
        let result = comp.localeCompare(value);
        console.log(result);
        if(result == 0){
            code = key;
            return code;
        }

      }
}

/* Checks if any of the fields is empty. If so, highlights the fields in red */
function checkForBlank(){

    var errormessage = '';

    if(type.value == ''){
        errormessage += "Select Button Type\n";
        type.style.borderColor = 'red';
    }

    if(contact.value == ''){
        errormessage += "Select Contact Arrangement\n";
        contact.style.borderColor = 'red';
    }

    if(voltage.value == ''){
        errormessage += "Select LED voltage\n";
        voltage.style.borderColor = 'red';
    }

    if(led_color.value == ''){
        errormessage += "Select LED color\n";
        led_color.style.borderColor = 'red';
    }

    if(pressel_type.value == ''){
        errormessage += "Select Pressel Type\n";
        pressel_type.style.borderColor = 'red';
    }

    if(pressel_finish.value == ''){
        errormessage += "Select Pressel Finish\n";
        pressel_finish.style.borderColor = 'red';
    }

    if(legend.value == ''){
        errormessage += "Select Pressel Legend\n";
        legend.style.borderColor = 'red';
    }

    if(errormessage != ''){

        output.style.color = 'white';
        output.innerHTML = "DEW BUT 0000000000000";
        alert(errormessage);
        return false;
    }

    generateStockCode()

}

/* Removes red border from field if option has been selected */
function removeRedBorder(id){

    var component = document.getElementById(id);

    if(component.style.borderColor == 'red'){
        component.style.borderColor = 'rgb(34, 105, 172)';
    }
}

/* Resets all fields */
function resetForms(){

    type.selectedIndex = null;
    removeRedBorder("buttonType");

    contact.selectedIndex = null;
    removeRedBorder("contacts");

    voltage.selectedIndex = null;
    removeRedBorder("led_voltage");

    led_color.selectedIndex = null;
    removeRedBorder("led_color");

    pressel_type.selectedIndex = null;
    removeRedBorder("pressel");

    pressel_finish.selectedIndex = null;
    removeRedBorder("pressel_finish");

    legend.selectedIndex = null;
    removeRedBorder("legend");

    output.style.color = 'white';
    output.innerHTML = "DEW BUT 0000000000000";
}

/* Copies text from output field into PC clipboard */
function copyText() {

    const output = document.getElementById("output");

    const outputText = output.innerText;

    navigator.clipboard.writeText(outputText)
    console.log(`Copied "${outputText}" to clipboard`);


    // Alert the copied text
    alert("Copied the text: " + outputText);

}