/* JS file for standardButton.html */

let body = document.getElementById("buttonBody");
let contact = document.getElementById("contacts");
let voltage = document.getElementById("led_voltage");
let led_color = document.getElementById("led_color");
let surround_type = document.getElementById("surround_type");
let surround_color = document.getElementById("surround_color");
let pressel_type = document.getElementById("pressel");
let pressel_finish = document.getElementById("pressel_finish");
let pressel_mould_colour = document.getElementById("pressel_mould_colour");
let legend = document.getElementById("legend");

let output = document.getElementById("output");


/* Selection of options for components */
const bodies = {"3": "Compact 2",
                "8": "Compact 3",
                "7": "Compact 3P",
                "4": "Compact 2 Micro"
                };

const contacts = {"1": "2 x N/O",
                "2": "2 x N/C",
                "3": "1 x N/O 1 x N/C",
                "4": "1 x N/O (Micro)",
                "5": "1 x N/O (Micro AMP)",
                "6": "FLAT CONTACT 2 x N/O",
                "7": "Vertical / Horizontal (Micro MTA100)",
                "8": "3 Way Vertical (Micro)"
                };

const leds_voltage = {"1": "Non Illuminated",
                      "2": "12VDC (Phone & Alarm)",
                      "3": "24VDC",
                      "4": "110VDC",
                      "5": "Multivolt 12-110V AC/DC",
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
                    "26": "Opal/Blue Type B LED (old type with leads)",
                    "27": "Amber/Green"
                   };

const surround_types = {"1": "Flush",
                        "2": "Handicap (Standard)",
                        "3": "Extended"
                       };

const surround_colors = {"1": "Chrome (Standard)",
                        "2": "Black Anodized",
                        "3": "Brass",
                        "4": "Unfinished",
                        "5": "Anti-Bacterial Black Plastic",
                        "6": "Anti-Bacterial Green Plastic",
                        "7": "Chrome Exit"
                        };

const pressel_types = {"4": "US90 (non Braille)",
                       "5": "US90-15 (Braille)",
                       "6": "US91 (non Braille)",
                       "8": "US91-15 (Braille)",
                       "9": "US95-15 (Braille)",
                       "0": "US96-15 (Braille)",
                       "1": "US95 Plus"
                      };

const pressel_finishes = {"1": "Stainless Steel Linished (Standard)",
                          "2": "Mirror Polished",
                          "3": "Brass Linished",
                          "4": "Brass Polished",
                          "5": "Red / Blue / Yellow / White / Green Anodised",
                          "6": "Black Anodized (EN)",
                          "7": "Green Exit (EN)",
                          "0": "Bronze / Special Pressel"
                         };

const pressel_mould_colours = {"1": "Opal (Standard)",
                             "2": "Red",
                             "3": "Amber (Phone & Alarm)",
                             "4": "Blue",
                             "5": "Green",
                             "6": "Grey",
                             "7": "Black",
                            };

/* Selects components, generate stock code and outputs to HTML */
function generateStockCode(){

        let bd = body.value
        let body_code = selectComponentCode(bodies, bd);

        let ct = contact.value;
        let contact_code = selectComponentCode(contacts, ct);

        let vol = voltage.value;
        let led_voltage_code = selectComponentCode(leds_voltage, vol);

        let col = led_color.value;
        let led_color_code = selectComponentCode(leds_color, col);

        let sur = surround_type.value;
        let surround_code = selectComponentCode(surround_types, sur);

        let sur_col = surround_color.value;
        let surround_color_code = selectComponentCode(surround_colors, sur_col);

        let pres_type = pressel_type.value;
        let pressel_code = selectComponentCode(pressel_types, pres_type);

        let pres_finish = pressel_finish.value;
        let pressel_finish_code = selectComponentCode(pressel_finishes, pres_finish);

        let pres_mould_colour = pressel_mould_colour.value;
        let pressel_mould_code = selectComponentCode(pressel_mould_colours, pres_mould_colour);

        let legend_code = legend.value;


    output.style.color = 'rgb(34, 105, 172)';
    output.innerHTML = "DEW BUT" + " " + body_code + pressel_code + contact_code +
                                         pressel_mould_code + pressel_finish_code +
                                         led_color_code + led_voltage_code +
                                         surround_code + surround_color_code + legend_code;
}


function selectComponentCode(dictionary, component_value){

    let comp = component_value;
    /*console.log(component_value);*/

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

    if(body.value == ''){
        errormessage += "Select Button Body\n";
        body.style.borderColor = 'red';
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

    if(surround_type.value == ''){
        errormessage += "Select Surround Type\n";
        surround_type.style.borderColor = 'red';
    }

    if(surround_color.value == ''){
        errormessage += "Select Surround Color\n";
        surround_color.style.borderColor = 'red';
    }

    if(pressel_type.value == ''){
        errormessage += "Select Pressel Type\n";
        pressel_type.style.borderColor = 'red';
    }

    if(pressel_finish.value == ''){
        errormessage += "Select Pressel Finish\n";
        pressel_finish.style.borderColor = 'red';
    }

    if(pressel_mould_colour.value == ''){
        errormessage += "Select Pressel Mould Colour\n";
        pressel_mould_colour.style.borderColor = 'red';
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

    body.selectedIndex = null;
    removeRedBorder("buttonBody");

    contact.selectedIndex = null;
    removeRedBorder("contacts");

    voltage.selectedIndex = null;
    removeRedBorder("led_voltage");

    led_color.selectedIndex = null;
    removeRedBorder("led_color");

    surround_type.selectedIndex = null;
    removeRedBorder("surround_type");

    surround_color.selectedIndex = null;
    removeRedBorder("surround_color");

    pressel_type.selectedIndex = null;
    removeRedBorder("pressel");

    pressel_finish.selectedIndex = null;
    removeRedBorder("pressel_finish");

    pressel_mould_colour.selectedIndex = null;
    removeRedBorder("pressel_mould_colour");

    legend.selectedIndex = null;
    removeRedBorder("legend");

    output.style.color = 'white';
    output.innerHTML = "DEW BUT 0000000000000";
}

/* Copies text from output field into PC clipboard */
function copyText() {

    const output = document.getElementById("output");
    if(output.innerHTML == 'DEW BUT 0000000000000'){
        return false;
    };

    const outputText = output.innerText;

    navigator.clipboard.writeText(outputText)
    console.log(`Copied "${outputText}" to clipboard`);


    // Alert the copied text
    alert("Copied the text: " + outputText);

}