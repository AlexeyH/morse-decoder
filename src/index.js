const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let input_num_string = expr;
    let encoded_symbol_string = "";
    let decoded_symbol_string = "";
    let ten_symbols_counter = 0;
    for (let counter = 0; counter <= input_num_string.length; counter +=2) {
        let substring = input_num_string.substring(counter, counter + 2);
        if (substring == "10")
            encoded_symbol_string += ".";
        else if (substring == "11")
            encoded_symbol_string += "-";
        else if (substring == "**") {
            counter += 8;
            ten_symbols_counter = 0; 
            decoded_symbol_string += " ";
            encoded_symbol_string = "";
            continue; 
        }
        ten_symbols_counter += 2;
        if (ten_symbols_counter == 10) {
            ten_symbols_counter = 0; 
            decoded_symbol_string += MORSE_TABLE[encoded_symbol_string];
            encoded_symbol_string = "";
        }   
    }
    return (decoded_symbol_string);
}

module.exports = {
    decode
}