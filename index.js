var number = {
    'nol': 0,
    'satu': 1,
    'dua': 2,
    'tiga': 3,
    'empat': 4,
    'lima': 5,
    'enam': 6,
    'tujuh': 7,
    'delapan': 8,
    'sembilan': 9,
    'sepuluh': 10,
    'sebelas': 11,
    'duabelas': 12,
    'tigabelas': 13,
    'empatbelas': 14,
    'limabelas': 15,
    'enambelas': 16,
    'tujuhbelas': 17,
    'delapanbelas': 18,
    'sembilanbelas': 19,
    'duapuluh': 20,
    'tigapuluh': 30,
    'empatpuluh': 40,
    'limapuluh': 50,
    'enampuluh': 60,
    'tujuhpuluh': 70,
    'delapanpuluh': 80,
    'sembilanpuluh': 90
};

var Magnitude = {
    'ribu':  1000,
    'juta' : 1e6,
    'milyar':   1e9,
    'bilyar':   1000000000,
    'trilliun': 1000000000000,
    'kuadrilliun':  1000000000000000,
    'kuintilliun':  1000000000000000000,
    'sektilliun':   1000000000000000000000,
    'septilliun':   1000000000000000000000000,
};

var a, n, g;

function textTonum(s) {
    a = s.toString().split(/[\s-]+/);
    console.log("ini kata", a)
    n = 0;
    g = 0;
    a.forEach(feach);
    return n + g;
}

function feach(w) {
    var x = number[w];
    if (x != null) {
        g = g + x;
    }
    else if (w == "ratus") {
        g = g * 100;
    }
    else {
        x = Magnitude[w];
        if (x != null) {
            n = n + g * x
            g = 0;
        }
        else { 
            return "no tidak di temukan: "+ w; 
        }
    }
}

console.log(textTonum("1 milyar duapuluh juta lima ratus ribu"))